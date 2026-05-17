// node list-three-files.js
const fs = require('fs');
const path = require('path');

const visited = new Set();
const requiredFiles = new Set();
const missingFiles = new Set();

// Inserisci qui il percorso root di Three.js
const THREE_ROOT = path.resolve('./node_modules/three');

// Alias della tua import map
const alias = {
    'three': './node_modules/three/build/three.module.js',
    'addons/': './node_modules/three/examples/jsm/',
    'yuka': './Yuka/yuka.module.js',
    'three-mesh-bvh': './three-mesh-bvh/index.module.0.6.0.js'
};

// Rimuove commenti /* ... */ e // ...
function removeComments(code) {
    return code
        .replace(/\/\*[\s\S]*?\*\//g, '')
        .replace(/\/\/.*$/gm, '');
}

// Risolve l'import secondo alias o percorso relativo
function resolveImport(importPath, baseDir) {
    for (const a in alias) {
        if (importPath === a || importPath.startsWith(a)) {
            const relPath = alias[a] + importPath.slice(a.length);
            let resolved = path.resolve(relPath);
            if (!resolved.endsWith('.js') && !resolved.endsWith('.mjs')) resolved += '.js';
            return resolved;
        }
    }
    if (importPath.startsWith('.') || importPath.startsWith('/')) {
        let resolved = path.resolve(baseDir, importPath);
        if (!resolved.endsWith('.js') && !resolved.endsWith('.mjs')) resolved += '.js';
        return resolved;
    }
    return null; // modulo npm esterno
}

// Analizza ricorsivamente un file e tutti i suoi import
function findImports(filePath) {
    if (visited.has(filePath)) return;
    visited.add(filePath);

    if (!fs.existsSync(filePath)) {
        missingFiles.add(filePath);
        return;
    }

    const contentRaw = fs.readFileSync(filePath, 'utf-8');
    const content = removeComments(contentRaw);

    // aggiungi il file corrente come richiesto
    if (filePath.startsWith(THREE_ROOT)) requiredFiles.add(filePath);

    const importRegex = /import\s+(?:.*)\s+from\s+['"](.*)['"]/g;
    let match;
    while ((match = importRegex.exec(content)) !== null) {
        const importPath = match[1];
        const resolvedPath = resolveImport(importPath, path.dirname(filePath));
        if (!resolvedPath) continue;

        findImports(resolvedPath); // ricorsione
    }
}

// Punto di partenza
const entryFile = path.resolve('./Game.js');
findImports(entryFile);

console.log('=== FILE THREE.JS NECESSARI ===');
[...requiredFiles].forEach(f => console.log(f));

if (missingFiles.size > 0) {
    console.log('\n=== FILE MANCANTI ===');
    [...missingFiles].forEach(f => console.log(f));
}
