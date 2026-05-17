/*---------------------------------------------IMPORTAZIONE LIBRERIE NEPTUNE ENGINE-------------------------------------------------------*/
//PLUGIN CAPACITOR
import { S0_CapacitorStatusBar } from './Engine/NeptuneEngine.js';
import { S0_CapacitorAdmob } from './Engine/NeptuneEngine.js';
import { S0_CapacitorKeepAwake } from './Engine/NeptuneEngine.js';
import { S0_CrazyGamesAds } from './Engine/NeptuneEngine.js';

//FUNZIONI ANDROID
import { S0_AndroidAlerts } from './Engine/NeptuneEngine.js';

import { MicEngine } from './Engine/NeptuneEngine.js';
import { S0_SaveSystem } from './Engine/NeptuneEngine.js';
import { S0_GenerateHUDCanvas } from './Engine/NeptuneEngine.js';
import { S0_BlankScreen } from './Engine/NeptuneEngine.js';
import { S0_EditController } from './Engine/NeptuneEngine.js';
import { S0_Controller } from './Engine/NeptuneEngine.js';
import { SnippetEngine } from './Engine/NeptuneEngine.js';
import { S0_MissionDiary } from './Engine/NeptuneEngine.js';
import { S0_StandardCSS } from './Engine/NeptuneEngine.js';
import { S0_GenerateRandomColors } from './Engine/NeptuneEngine.js';
import { S0_Audio } from './Engine/NeptuneEngine.js';

/*--------------------------------------IMPORTAZIONE OGGETTI CONFIGURAZIONE NEPTUNE ENGINE------------------------------------------------*/
import { EditGraphic } from './EngineParameters.js';
import { EconomyObj } from './EngineParameters.js';
import { Oggetti } from './EngineParameters.js';
import { Geometrie } from './EngineParameters.js';
import { Materiali } from './EngineParameters.js';
import { MaterialiUnici } from './EngineParameters.js';
import { Testi } from './EngineParameters.js';
import { NPC } from './EngineParameters.js';
import { Colors } from './EngineParameters.js';
import { Sprite } from './EngineParameters.js';

/*------------------------------OGGETTI NEPTUNE ENGINE-----------------------------------*/
import { GameParam } from './EngineParameters.js';
import { MapParam } from './EngineParameters.js';
import { HangarStationParam } from './EngineParameters.js';
import { HubStationParam } from './EngineParameters.js';
import { CityStationParam } from './EngineParameters.js';
import { ResearchStationParam } from './EngineParameters.js';
import { ExtractionStationParam } from './EngineParameters.js';
import { Ship1StationParam } from './EngineParameters.js';
import { Ship2StationParam } from './EngineParameters.js';
import { EditorParam } from './EngineParameters.js';
import { HomeParam } from './EngineParameters.js';
import { TitleParam } from './EngineParameters.js';
import { ControlsParam } from './EngineParameters.js';
import { SnippetParam } from './EngineParameters.js';

/*--------------------------------------OGGETTI HUD-------------------------------------*/
//HUD PRINCIPALI
import { TitleHUDObj } from './EngineParameters.js';
import { HomeHUDObj } from './EngineParameters.js';
import { GameHUDObj } from './EngineParameters.js';
import { DynamicOptionsHUDObj } from './EngineParameters.js';
import { DynamicGraphicHUDObj } from './EngineParameters.js';
import { StaticControlsHUDObj } from './EngineParameters.js';
import { DynamicControlsHUDObj } from './EngineParameters.js';
import { StaticImagesHUDObj } from './EngineParameters.js';
//HUD CONDIVISI
import { CommonStaticStationHUDObj } from './EngineParameters.js';
import { DynamicStationsHUDObj } from './EngineParameters.js';
//HUD UNICI STAZIONI SPAZIALI
import { DynamicHangarHUDObj } from './EngineParameters.js';
import { DynamicHubHUDObj } from './EngineParameters.js';
import { DynamicWormholeHUDObj } from './EngineParameters.js';
//MINIGIOCHI
import { CarroponteHUDObj } from './EngineParameters.js';
import { CombinaColoreHUDObj } from './EngineParameters.js';
import { TelescopioHUDObj } from './EngineParameters.js';
import { TabelloneRobotHUDObj } from './EngineParameters.js';
import { PulsRobotHUDObj } from './EngineParameters.js';
import { MinigiocoHUDObj } from './EngineParameters.js';

import { SimpleHUDObj } from './EngineParameters.js';
import { MapStaticHUDObj } from './EngineParameters.js';
import { MissionsHUDObj } from './EngineParameters.js';
import { ChaptersBlockHUDObj } from './EngineParameters.js';
import { MissionsBlockHUDObj } from './EngineParameters.js';

/*----------------------------------OGGETTI VARIABILI DI GIOCO-------------------------*/
import { GameVersion } from './EngineParameters.js';
import { GlobalVar } from './EngineParameters.js';
import { VarObjHome } from './EngineParameters.js';
import { VarObject } from './EngineParameters.js';
import { VarObjMap } from './EngineParameters.js';
import { VarObjectsStation } from './EngineParameters.js';
import { VarObjectsHub } from './EngineParameters.js';
import { VarObjectsExtraction } from './EngineParameters.js';
import { VarObjectsResearch } from './EngineParameters.js';
import { VarObjectTelescope } from './EngineParameters.js';
import { VarObjectsWormhole } from './EngineParameters.js';
import { Story } from './EngineParameters.js';
import { GraphicPreset } from './EngineParameters.js';

const SaveSystem = S0_SaveSystem();
SaveSystem.init();

let Economy = EconomyObj;
let Admob;
let Crazygames;
let Controller;                     //OGGETTO CONTROLLER
let MicEnginereturn;
let MicEngineParam;
let CoinGoldImg;
let CoinSilverImg;
let gameReady = false;

//OGGETTI MINIGIOCHI
let CorsaRobot;
let ScavaMeteorite;
let CombinaColore;
let Telescopio;
let Carroponte;         //OGGETTO PER IL MINIGIOCO CARROPONTE
let Esplosione;

EditGraphic();
//localStorage.clear();

//PROGRESSIONE MISSIONI STORIA
/*
CAPITOLO 0 - MISSIONE 0 - PAGINA GIOCO - STORIA - SE SI HA ALMENO UN MODULO NAVE E UN MODULO CONTAINER - MISSIONE 1
CAPITOLO 0 - MISSIONE 1 - PAGINA GIOCO - STORIA - SE SI HA UNA MISSIONE ATTIVA - MISSIONE 2
CAPITOLO 0 - MISSIONE 1 - PAGINA GIOCO - STORIA - SE SI HA IL FLAGMISSIONE DALLA STAZIONE HUB - CAPITOLO 1 MISSIONE 0

CAPITOLO 1 - MISSIONE 0
*/

/*--------------------------------------------------------VARIABILI-----------------------------------------------------------------*/
/*GENERAZIONE DELLE LOCAL STORAGE ALLA PRIMA ACCENSIONE*/
if (SaveSystem.getItem("Init") != 1) {

   //PARAMETRI GENERICI
   SaveSystem.setItem(`Language`, 0);
   SaveSystem.setItem(`Graphic`, 0);
   SaveSystem.setItem(`GraphicPreset`, 1);
   SaveSystem.setItem(`Texture`, 0);
   SaveSystem.setItem(`Resolution`, 0);
   SaveSystem.setItem(`Antialiasing`, 0);
   SaveSystem.setItem(`Glow`, 0);
   SaveSystem.setItem(`Scheda`, 0);

   //CONTROLLI
   SaveSystem.setItem(`Control`, 0);
   SaveSystem.setItem(`InvAxe0`, 0);
   SaveSystem.setItem(`InvAxe1`, 1);
   SaveSystem.setItem(`InvAxe2`, 0);
   SaveSystem.setItem(`InvAxe3`, 0);
   SaveSystem.setItem(`RegAxe0`, 50);
   SaveSystem.setItem(`RegAxe1`, 50);
   SaveSystem.setItem(`RegAxe2`, 50);
   SaveSystem.setItem(`RegAxe3`, 100);
   SaveSystem.setItem(`RegAxe4`, 100);
   SaveSystem.setItem(`RegAxe5`, 50);
   SaveSystem.setItem(`RegAxe6`, 50);
   SaveSystem.setItem(`Axe0Type`, "Axe");
   SaveSystem.setItem(`Axe0Index`, 0);
   SaveSystem.setItem(`Axe0Type`, "Axe");
   SaveSystem.setItem(`Axe0Index`, 1);
   SaveSystem.setItem(`Axe0Type`, "Axe");
   SaveSystem.setItem(`Axe0Index`, 2);
   SaveSystem.setItem(`Axe0Type`, "Axe");
   SaveSystem.setItem(`Axe0Index`, 3);
   SaveSystem.setItem(`Button0Type`, "Button");
   SaveSystem.setItem(`Button0Index`, 0);

   //VOLUME
   SaveSystem.setItem(`VolumeSounds`, 100);
   SaveSystem.setItem(`VolumeVoice`, 100);
   SaveSystem.setItem(`VolumeMusic`, 50);

   //PARAMETRI DI GIOCO
   SaveSystem.setItem(`Capitolo`, 0);
   SaveSystem.setItem(`Missione`, 0);
   SaveSystem.setItem(`CapitoloMem`, -1);          //CAPITOLO MEMORIZZATO PER EVITARE IL LAMPEGGIO E CHE ESCA SEMPRE LA SCRITTA
   SaveSystem.setItem(`MissioneMem`, -1);          //MISSIONE MEMORIZZATA PER EVITARE IL LAMPEGGIO E CHE ESCA SEMPRE LA SCRITTA
   SaveSystem.setItem(`FlagMissione`, 0);    //FLAG DA USARE IN CASO SI CAMBI MISSIONE O CAPITOLO FUORI DALLA PAGINA DEL GIOCO
   SaveSystem.setItem(`NewGame`, 0);    //OK        //NUOVA PARTITA
   SaveSystem.setItem(`MissionDone`, 1);   //OK    //MISSIONE CONCLUSA
   SaveSystem.setItem(`ShipModules`, 0);
   SaveSystem.setItem(`LivingModules`, 0);
   SaveSystem.setItem(`ContainerModules`, 0);
   SaveSystem.setItem(`ExtractionModules`, 0);
   SaveSystem.setItem(`RadarModules`, 0);
   SaveSystem.setItem(`Fuel`, 0);
   SaveSystem.setItem(`Color1`, "ffffff");
   SaveSystem.setItem(`Color2`, "ffffff");

   //RAGGIO TRAENTE
   SaveSystem.setItem(`NearTractor`, 0);    //OK
   SaveSystem.setItem(`TractorActive`, 0);    //OK

   //SPACE STATION
   SaveSystem.setItem(`SpaceStation`, 0);    //OK     //SE SI È NELLA STAZIONE SPAZIALE AL MOMENTO DI PREMERE "MENU" O "MAP"

   //STORY
   SaveSystem.setItem(`Tutorial`, 0);
   SaveSystem.setItem('TimeBar', 0);
   SaveSystem.setItem('Deuterio', 0);
   SaveSystem.setItem('Trizio', 0);
   SaveSystem.setItem('Sole', 0);
   SaveSystem.setItem('Scient', 0);
   SaveSystem.setItem('DeuterioTotal', 0);
   SaveSystem.setItem('TrizioTotal', 0);
   SaveSystem.setItem('SoleTotal', 0);
   SaveSystem.setItem('ScientTotal', 0);
   SaveSystem.setItem('StepTimeMars', 0);
   SaveSystem.setItem('TimeBar2', 0);
   SaveSystem.setItem('Cometa', 0);
   //NUVOLA E POSIZIONI RADAR
   SaveSystem.setItem('PosXNuvola', 0);
   SaveSystem.setItem('PosZNuvola', 0);
   SaveSystem.setItem('IndexRadar', 0);
   SaveSystem.setItem('PosXRadar1', 0);
   SaveSystem.setItem('PosZRadar1', 0);
   SaveSystem.setItem('RaggioRadar1', 0);
   SaveSystem.setItem('PosXRadar2', 0);
   SaveSystem.setItem('PosZRadar2', 0);
   SaveSystem.setItem('RaggioRadar2', 0);
   SaveSystem.setItem('PosXRadar3', 0);
   SaveSystem.setItem('PosZRadar3', 0);
   SaveSystem.setItem('RaggioRadar3', 0);

   //TAG PARAMETRI GENERATI
   SaveSystem.setItem(`Init`, 1);

   SaveSystem.update();
};

let RandomNum = Math.random();
if (RandomNum < 0.5) GlobalVar.GenderNPC = 0;
if (RandomNum >= 0.5) GlobalVar.GenderNPC = 1;

/*CONTROLLI*/
//ASSE REALE CORRISPONDENTE AL COMANDO VIRTUALE
const VirtualAxe = [                //0 NIPPLE0X - 1 NIPPLE0Y - 2 NIPPLE1X - 3 NIPPLE1Y
   1, 0, 5, 6
];
const InvAxe = [                    //0 NORMALE - 1 INVERTITO
   Number(SaveSystem.getItem(`InvAxe0`)),    //0 BECCHEGGIO
   Number(SaveSystem.getItem(`InvAxe1`)),    //1 IMBARDATA
   Number(SaveSystem.getItem(`InvAxe2`)),    //2 ROLLIO
   Number(SaveSystem.getItem(`InvAxe3`)),    //3 RIDUCI ACCELERATORE
   Number(SaveSystem.getItem(`InvAxe4`)),    //4 AUMENTA ACCELERATORE
   Number(SaveSystem.getItem(`InvAxe5`)),    //5 VISUALE X
   Number(SaveSystem.getItem(`InvAxe6`)),    //6 VISUALE Y
];
const RegAxe = [                    //COEFFICIENTE DI MOLTIPLICAZIONE PER L'ASSE (0-100)
   Number(SaveSystem.getItem(`RegAxe0`)),    //BECCHEGGIO
   Number(SaveSystem.getItem(`RegAxe1`)),    //IMBARDATA
   Number(SaveSystem.getItem(`RegAxe2`)),    //ROLLIO
   Number(SaveSystem.getItem(`RegAxe3`)),    //RIDUCI ACCELERATORE
   Number(SaveSystem.getItem(`RegAxe4`)),    //AUMENTA ACCELERATORE
   Number(SaveSystem.getItem(`RegAxe5`)),    //VISUALE X
   Number(SaveSystem.getItem(`RegAxe6`)),    //VISUALE Y
];
const PadAxe = [                    //ASSOCIAZIONE PER I COMANDI DI BECCHEGGIO, IMBARDATA, ROLLIO E ACCELERATORE
   [SaveSystem.getItem(`Axe0Type`), Number(SaveSystem.getItem(`Axe0Index`))],    //BECCHEGGIO
   [SaveSystem.getItem(`Axe1Type`), Number(SaveSystem.getItem(`Axe1Index`))],    //IMBARDATA
   [SaveSystem.getItem(`Axe2Type`), Number(SaveSystem.getItem(`Axe2Index`))],    //ROLLIO
   [SaveSystem.getItem(`Axe3Type`), Number(SaveSystem.getItem(`Axe3Index`))],    //RIDUCI ACCELERATORE
   [SaveSystem.getItem(`Axe4Type`), Number(SaveSystem.getItem(`Axe4Index`))],    //AUMENTA ACCELERATORE
   [SaveSystem.getItem(`Axe5Type`), Number(SaveSystem.getItem(`Axe5Index`))],    //VISUALE X
   [SaveSystem.getItem(`Axe6Type`), Number(SaveSystem.getItem(`Axe6Index`))],    //VISUALE Y
];
const PadButton = [
   [SaveSystem.getItem(`Button0Type`), Number(SaveSystem.getItem(`Button0Index`))],
   [SaveSystem.getItem(`Button1Type`), Number(SaveSystem.getItem(`Button1Index`))],
   [SaveSystem.getItem(`Button2Type`), Number(SaveSystem.getItem(`Button2Index`))],
];

/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/*-----------------------------------------------------FUNZIONI G0 2675-----------------------------------------------------------------*/
//#region
//ANIMAZIONE MONETA E GETTONE
const MoneyObj = {
   Temp: 0, //Variabile per interpolazione (da 0 a 1)
   Count: 0,
   startX: 90,//100
   startY: 240,//255
   endX: 90,//100
   endY: 240,//210
   curveHeightX: 50,
   curveHeightY: 10,
   Speed: 5,    //
   EndFlag: false    //false = ALLA FINE RITORNA ALLA POSIZIONE DI PARTENZA, true = torna alla posizione finale
};
const CoinObj = {
   Temp: 0, //Variabile per interpolazione (da 0 a 1)
   Count: 0,
   startX: 90,//100
   startY: 285,//255
   endX: 90,//100
   endY: 285,//210
   curveHeightX: 50,
   curveHeightY: 10,
   Speed: 3,    //
   EndFlag: false    //false = ALLA FINE RITORNA ALLA POSIZIONE DI PARTENZA, true = torna alla posizione finale
};
function G0_CoinAnimation(Element, Obj, delta) {
   if (Obj.Count > 0 && Obj.Temp <= 1) {
      //Interpolazione lineare di base
      const baseX = (1 - Obj.Temp) * Obj.startX + Obj.Temp * Obj.endX;
      const baseY = (1 - Obj.Temp) * Obj.startY + Obj.Temp * Obj.endY;

      //Oscillazione curva su X e Y
      const x = baseX + Obj.curveHeightX * Math.sin(Obj.Temp * Math.PI);
      const y = baseY - Obj.curveHeightY * Math.sin(Obj.Temp * Math.PI);

      //Applica la posizione all'immagine
      Element.style.left = `${x}px`;
      Element.style.top = `${y}px`;

      Obj.Temp += Obj.Speed * delta; //Avanza l'animazione
   };
   if (Obj.Temp >= 1) {
      Obj.Count--;
      Obj.Temp = 0
   };
   if (Obj.Count == 0 && Obj.EndFlag == false) {
      Element.style.left = `${Obj.startX}px`;
      Element.style.top = `${Obj.startY}px`;
   };
   if (Obj.Count == 0 && Obj.EndFlag == true) {
      Element.style.left = `${Obj.endX}px`;
      Element.style.top = `${Obj.endY}px`;
   };
};
/*GENERAZIONE MENU HUD*/
function G0_GenerateHUD(Object) {
   /*
   NOTA: LE BARRE HANNO Z-INDEX = 10
   IL TESTO DENTRO LE BARRE (CHILDREN[1]) HA Z-INDEX = 20
   */
   const ElemObj = {
      Pulsanti: [],
      Barre: [],
      Slider: []
   };

   /*GENERAZIONE PULSANTI BASE*/
   for (let i = 0; i < Object.Pulsanti; i++) {
      const Elem = document.createElement('div');
      Elem.style.display = "block";
      Elem.style.position = "absolute";
      Elem.style.boxSizing = "border-box";
      Elem.style.width = Object.PulsSize[i].Width;
      Elem.style.height = Object.PulsSize[i].Height;
      Elem.style.opacity = Object.Opacity;
      Elem.style.borderRadius = `${Object.BorderRadHoriz} / ${Object.BorderRadVert}`;
      Elem.style.backgroundColor = Object.PulsColor[i];
      Elem.style.zIndex = "10";
      if (Object.PulsPos[i].TopFlag == "Top") Elem.style.top = Object.PulsPos[i].Top;
      if (Object.PulsPos[i].TopFlag == "Bottom") Elem.style.bottom = Object.PulsPos[i].Bottom;
      if (Object.PulsPos[i].RightFlag == "Right") Elem.style.right = Object.PulsPos[i].Right;
      if (Object.PulsPos[i].RightFlag == "Left") Elem.style.left = Object.PulsPos[i].Left;

      if (Object.Style == "Neon") {
         Elem.style.border = "1.5px solid rgba(0, 255, 255, 0.4)";
         Elem.style.boxShadow = "0 0 10px rgba(0,255,255,0.2)";
         Elem.style.backdropFilter = "blur(5px)";
         Elem.style.borderRadius = "12px";
         Elem.style.color = "#00ffff";
         Elem.style.letterSpacing = "1px";
         Elem.style.transition = "all 0.2s ease-in-out";
      };

      //TESTO
      Elem.style.fontFamily = Object.FontFamily;
      Elem.style.textAlign = "center";
      Elem.style.fontSize = Object.PulsFontSize;
      Elem.style.color = Object.PulsFontColor;

      const TextElement = document.createElement('p');
      TextElement.style.paddingTop = Object.PulsPaddingTop;
      TextElement.innerText = Object.PulsName[i];
      Elem.appendChild(TextElement);

      document.body.appendChild(Elem);
      ElemObj.Pulsanti.push(Elem);
   };

   //GENERAZIONE BARRE
   for (let i = 0; i < Object.Barre; i++) {
      const ElemBar = document.createElement('div');
      ElemBar.style.display = "block";
      ElemBar.style.position = "absolute";
      ElemBar.style.boxSizing = "border-box";
      ElemBar.style.width = Object.BarSize[i].Width;
      ElemBar.style.height = Object.BarSize[i].Height;
      ElemBar.style.opacity = Object.Opacity;
      ElemBar.style.borderRadius = `${Object.BorderRadHoriz} / ${Object.BorderRadVert}`;
      ElemBar.style.backgroundColor = Object.BarColor[i];
      ElemBar.style.zIndex = "10";
      if (Object.BarPos[i].TopFlag == "Top") ElemBar.style.top = Object.BarPos[i].Top;
      if (Object.BarPos[i].TopFlag == "Bottom") ElemBar.style.bottom = Object.BarPos[i].Bottom;
      if (Object.BarPos[i].RightFlag == "Right") ElemBar.style.right = Object.BarPos[i].Right;
      if (Object.BarPos[i].RightFlag == "Left") ElemBar.style.left = Object.BarPos[i].Left;
      ElemBar.style.transform = `rotate(${Object.BarRotate[i]}deg)`;

      if (Object.Style == "Neon") {
         ElemBar.style.border = "1.5px solid rgba(0, 255, 255, 0.4)";
         ElemBar.style.boxShadow = "0 0 10px rgba(0,255,255,0.2)";
         ElemBar.style.backdropFilter = "blur(5px)";
      };

      //BARRA VALORE
      const ElemBarValue = document.createElement('div');
      ElemBarValue.style.position = "absolute";
      ElemBarValue.style.bottom = "0px";
      ElemBarValue.style.left = "0px";
      ElemBarValue.style.width = "100%";
      ElemBarValue.style.backgroundColor = Object.BarColorValue[i];
      ElemBarValue.style.borderRadius = `${Object.BorderRadHoriz} / ${Object.BorderRadVert}`;
      ElemBar.appendChild(ElemBarValue);

      //TESTO
      ElemBar.style.fontFamily = Object.FontFamily;
      ElemBar.style.textAlign = "center";
      ElemBar.style.fontSize = Object.BarFontSize;
      ElemBar.style.color = Object.BarFontColor;

      const TextBarElement = document.createElement('p');
      TextBarElement.style.position = "absolute";
      TextBarElement.style.transform = `translate(${Object.BarTextTranslateX}, ${Object.BarTextTranslateY}) rotate(${-Object.BarRotate[i]}deg)`;

      TextBarElement.style.bottom = "50%";
      TextBarElement.style.left = "0px";
      TextBarElement.style.width = "100%";
      TextBarElement.style.zIndex = "20";
      ElemBar.appendChild(TextBarElement);
      document.body.appendChild(ElemBar);
      ElemObj.Barre.push(ElemBar);
   };

   //GENERAZIONE SLIDER
   const style = document.createElement('style');
   style.textContent = `
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background: #FF4444;
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(0,0,0,0.5);
    margin-top: -7px;
  }

  input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    background: transparent; /* disabilita lo sfondo di default */
  }

  input[type="range"]::-webkit-slider-runnable-track {
    height: 6px;
    background: #CCC;
    border-radius: 3px;
  }

  input[type="range"]::-moz-range-track {
    height: 6px;
    background: #CCC;
    border-radius: 3px;
  }
`;

   document.head.appendChild(style);

   for (let i = 0; i < Object.Slider; i++) {
      const SliderElem = document.createElement('input');
      SliderElem.type = "range";
      SliderElem.style.position = "absolute";
      SliderElem.style.width = Object.SliderSize[i].Width;
      SliderElem.style.height = Object.SliderSize[i].Height;
      SliderElem.style.opacity = Object.Opacity;
      SliderElem.style.borderRadius = `${Object.BorderRadHoriz} / ${Object.BorderRadVert}`;
      SliderElem.style.background = Object.SliderColor[i];
      SliderElem.style.zIndex = "10";
      SliderElem.min = 0;
      SliderElem.max = 100;
      SliderElem.value = 50;

      document.head.appendChild(style);

      //Posizionamento
      if (Object.SliderPos[i].TopFlag == "Top") SliderElem.style.top = Object.SliderPos[i].Top;
      if (Object.SliderPos[i].TopFlag == "Bottom") SliderElem.style.bottom = Object.SliderPos[i].Bottom;
      if (Object.SliderPos[i].RightFlag == "Right") SliderElem.style.right = Object.SliderPos[i].Right;
      if (Object.SliderPos[i].RightFlag == "Left") SliderElem.style.left = Object.SliderPos[i].Left;

      document.body.appendChild(SliderElem);
      ElemObj.Slider.push(SliderElem);
   };

   return ElemObj;
};
//GENERAZIONE PULSANTI STATICI COMUNI PER LE STAZIONI (MENU, MAPPA RETURN)
function G0_GenerateStaticStationHUD(Obj) {
   const CommonStaticStationHUD = S0_GenerateHUDCanvas(CommonStaticStationHUDObj);
   //PULSANTE MENU
   CommonStaticStationHUD.setButtonCallback(0, () => {
      if (Number.isFinite(Obj.ClickIndex)) MicEnginereturn.Audio.PlayOnceSound(Obj.ClickIndex, GlobalVar.VolumeSounds / 200);      //CLICK
      if (Obj.Menu) Obj.Menu();                 //FUNZIONE MENU PERSONALIZZATA
      else G0_ExtiPageSaveMissions("Home");     //FUNZIONE MENU STANDARD
   });
   //PULSANTE MAPPA
   CommonStaticStationHUD.setButtonCallback(1, () => {
      if (Number.isFinite(Obj.ClickIndex)) MicEnginereturn.Audio.PlayOnceSound(Obj.ClickIndex, GlobalVar.VolumeSounds / 200);      //CLICK
      if (Obj.Mappa) Obj.Mappa();                 //FUNZIONE MENU PERSONALIZZATA
      else G0_ExtiPageSaveMissions("Map");     //FUNZIONE MENU STANDARD
   });
   //PULSANTE RETURN
   CommonStaticStationHUD.setButtonCallback(2, () => {
      if (Number.isFinite(Obj.ClickIndex)) MicEnginereturn.Audio.PlayOnceSound(Obj.ClickIndex, GlobalVar.VolumeSounds / 200);      //CLICK
      if (Obj.Return) Obj.Return();                 //FUNZIONE MENU PERSONALIZZATA
      else G0_ExtiPageSaveMissions("Game");     //FUNZIONE MENU STANDARD
   });

   CommonStaticStationHUD.render();
   return CommonStaticStationHUD;
};

function G0_GenerateDynamicStationHUD(Obj) {
   DynamicStationsHUDObj.DispatchEvent = Obj.DispatchEvent;
   const CommonDynamicStationHUD = S0_GenerateHUDCanvas(DynamicStationsHUDObj);
   //PULSANTE MONEY
   CommonDynamicStationHUD.setButtonText(0, `${GlobalVar.Money}${Economy.MoneySymbol}`);
   CoinGoldImg = document.createElement("img");
   S0_StandardCSS(CoinGoldImg, "top", "0px", "left", "0px", "30px", "30px");
   CoinGoldImg.style.zIndex = 10;
   CoinGoldImg.src = Sprite.CoinGold;
   MoneyObj.startY = 150;

   //PULSANTE COIN
   CommonDynamicStationHUD.setButtonText(1, `${GlobalVar.Coin}`);
   CoinSilverImg = document.createElement('img');
   S0_StandardCSS(CoinSilverImg, "top", "0px", "left", "0px", "30px", "30px");
   CoinSilverImg.style.zIndex = 10;
   CoinSilverImg.src = Sprite.CoinSilver;
   CoinObj.startY = 195;

   CommonDynamicStationHUD.render();

   return CommonDynamicStationHUD;
};
//Funzione per ricaricare la pagina e mostrare la schermata nera
function G0_ShowLoadingAndReload(newPage) {     //SaveSystem.update();
   //Crea una schermata di caricamento
   const LoaderDiv = S0_BlankScreen("black");

   //Imposta la pagina corrente in sessionStorage
   window.sessionStorage.setItem("Page", newPage);

   SaveSystem.update();

   //Ricarica la pagina dopo un breve ritardo per assicurarsi che la schermata di caricamento appaia
   setTimeout(() => {
      location.reload(); //Ricarica la pagina
   }, 500); //Ritardo di mezzo secondo per mostrare la schermata di caricamento
}

function G0_SaveShipModules() {         //SALVA NEL LOCAL STORAGE IL NUMERO DI MODULI DELLA NAVE E L'ARRAY DEI MODULI
   SaveSystem.setItem(`Moduli`, MicEnginereturn.VarModularShip.Moduli);
   for (let i = 0; i < MicEnginereturn.VarModularShip.Moduli + 1; i++) {
      SaveSystem.setItem(`Module${i}`, MicEnginereturn.VarModularShip.ModuleArray[i]);
   };
};

function G0_ExtiPageSaveMissions(Url) {                        //SaveSystem.update();
   //STORIA
   SaveSystem.setItem(`Capitolo`, GlobalVar.Capitolo);
   SaveSystem.setItem(`Missione`, GlobalVar.Missione);

   //MISSIONI DISPONIBILI
   for (let i = 0; i < GlobalVar.NumMission; i++) {
      window.sessionStorage.setItem(`MissionPlanet${i}`, GlobalVar.MissionPlanet[i]);
      window.sessionStorage.setItem(`MissionMoon${i}`, GlobalVar.MissionMoon[i]);
      window.sessionStorage.setItem(`MissionSubMoon${i}`, GlobalVar.MissionSubMoon[i]);
      window.sessionStorage.setItem(`MissionLoad${i}`, GlobalVar.MissionLoad[i]);
   };
   //MISSIONI ACCETTATE
   SaveSystem.setItem(`MissionCurrent`, GlobalVar.MissionCurrent);
   SaveSystem.setItem(`MissionPlanetCurrent`, GlobalVar.MissionPlanetCurrent);
   SaveSystem.setItem(`MissionMoonCurrent`, GlobalVar.MissionMoonCurrent);
   SaveSystem.setItem(`MissionSubMoonCurrent`, GlobalVar.MissionSubMoonCurrent);
   SaveSystem.setItem(`MissionLoadCurrent`, GlobalVar.MissionLoadCurrent);
   SaveSystem.setItem(`MissionRewardCurrent`, GlobalVar.MissionRewardCurrent);

   SaveSystem.setItem('Money', GlobalVar.Money);
   SaveSystem.setItem('Coin', GlobalVar.Coin);

   //STORIA
   SaveSystem.setItem('Deuterio', GlobalVar.Deuterio);
   SaveSystem.setItem('Trizio', GlobalVar.Trizio);
   SaveSystem.setItem('Sole', GlobalVar.Sole);
   SaveSystem.setItem('Scient', GlobalVar.Scient);
   SaveSystem.setItem('DeuterioTotal', GlobalVar.DeuterioTotal);
   SaveSystem.setItem('TrizioTotal', GlobalVar.TrizioTotal);
   SaveSystem.setItem('SoleTotal', GlobalVar.SoleTotal);
   SaveSystem.setItem('ScientTotal', GlobalVar.ScientTotal);
   SaveSystem.setItem('Cometa', GlobalVar.Cometa);

   SaveSystem.update();
   //CAMBIO PAGINA
   G0_ShowLoadingAndReload(Url);     //SaveSystem.update();
};

function G0_EndMissionCanvas(Elem, MoneyIndex, MissionIndex, LoadBarIndex) {
   //TESTO
   let TextDestination0;
   let TextNameStation;
   let TextNameStation1;

   //SE ESISTE UNA MISSIONE ATTIVA E LA MISSIONE COINCIDE CON LA STAZIONE SPAZIALE MOSTRA IL RIQUADRO
   if (GlobalVar.MissionCurrent > 0 && GlobalVar.MissionPlanetCurrent == GlobalVar.PlanetOrbit - 1) {
      //LA MISSIONE CORRISPONDE ALLA STAZIONE ATTUALE (LUNA)
      if (GlobalVar.MissionMoonCurrent == GlobalVar.MoonOrbit - 1) {
         TextDestination0 = Oggetti.PlanetarySystem.Modular[GlobalVar.MissionPlanetCurrent].Name[GlobalVar.Language];
         TextNameStation = "";
         TextNameStation1 = Oggetti.PlanetarySystem.Modular[GlobalVar.MissionPlanetCurrent].Modular[GlobalVar.MissionMoonCurrent]
            .Name[GlobalVar.Language];
         Elem.setButtonText(MissionIndex, `${Testi.Station.MissionReward[GlobalVar.Language]}
            ${TextDestination0}
            ${TextNameStation} ${TextNameStation1},
            Carico ${GlobalVar.MissionLoadCurrent}kg,
            ${GlobalVar.MissionRewardCurrent}${Economy.MoneySymbol}`);
      };
      //LA MISSIONE CORRISPONDE ALLA STAZIONE ATTUALE (SUB-LUNA)
      if (GlobalVar.MissionSubMoonCurrent == GlobalVar.SubMoonOrbit - 1) {
         TextDestination0 = Oggetti.PlanetarySystem.Modular[GlobalVar.MissionPlanetCurrent].Name[GlobalVar.Language];
         TextNameStation = Oggetti.PlanetarySystem.Modular[GlobalVar.MissionPlanetCurrent].Modular[GlobalVar.MissionMoonCurrent].Name[GlobalVar.Language];

         TextNameStation1 = Oggetti.PlanetarySystem.Modular[GlobalVar.MissionPlanetCurrent].Modular[GlobalVar.MissionMoonCurrent].Modular[GlobalVar.MissionSubMoonCurrent].Name[GlobalVar.Language];

         Elem.setButtonText(MissionIndex, `${Testi.Station.MissionReward[GlobalVar.Language]}
            ${TextDestination0},
            ${TextNameStation} ${TextNameStation1},
            Carico ${GlobalVar.MissionLoadCurrent}kg,
            ${GlobalVar.MissionRewardCurrent}${Economy.MoneySymbol}`);
      };
      setInterval(() => {
         GlobalVar.LumRewardMission = !GlobalVar.LumRewardMission;
         if (GlobalVar.LumRewardMission == false) Elem.setButtonColor(MissionIndex, Colors.ActivePuls);
         else Elem.setButtonColor(MissionIndex, Colors.SelectedPuls);
         Elem.render();
      }, 1000);
   }
   //ALTRIMENTI NASCONDILO
   else Elem.showButton(MissionIndex, false);

   Elem.setButtonCallback(MissionIndex, () => {
      GlobalVar.Money += GlobalVar.MissionRewardCurrent;
      G0_ShowMoneySpentCanvas(Elem, MoneyIndex, GlobalVar.MissionRewardCurrent);
      GlobalVar.MissionCurrent = 0;
      GlobalVar.MissionPlanetCurrent = 0;
      GlobalVar.MissionMoonCurrent = 0;
      GlobalVar.MissionSubMoonCurrent = 0;
      GlobalVar.MissionLoadCurrent = 0;
      GlobalVar.MissionRewardCurrent = 0;
      Elem.showButton(MissionIndex, false);

      //AGGIORNA LA BARRA DEL CARICO
      Elem.setBarValue(LoadBarIndex, GlobalVar.MissionLoadCurrent / (GlobalVar.ContainerModules * Economy.Load));
      Elem.setBarText(LoadBarIndex, `${GlobalVar.MissionLoadCurrent}/${GlobalVar.ContainerModules * Economy.Load}kg`);


      SaveSystem.setItem(`MissionDone`, 1);     //MEMORIZZA NEL LOCAL STORAGE CHE LA MISSIONE È CONCLUSA
      G0_MoveMoneyImg(530, 90, 90, 150, true);
      Elem.render();
   });
};

/*FUNZIONE GLOBALE DI CARICAMENTO MISSIONI DAL SESSION STORAGE SE PRESENTI*/
function G0_LoadMissions() {
   for (let i = 0; i < GlobalVar.NumMission; i++) {
      GlobalVar.MissionPlanet.push(Number(window.sessionStorage.getItem(`MissionPlanet${i}`)));
      GlobalVar.MissionMoon.push(Number(window.sessionStorage.getItem(`MissionMoon${i}`)));
      GlobalVar.MissionSubMoon.push(Number(window.sessionStorage.getItem(`MissionSubMoon${i}`)));
      GlobalVar.MissionLoad.push(Number(window.sessionStorage.getItem(`MissionLoad${i}`)));
   };
};

function G0_TitleStation() {           //TITOLO STAZIONI SPAZIALI
   const TitleArea = document.createElement('div');
   MicEnginereturn.VarObject.StandardCSS(TitleArea, "top", "0%", "left", "210px", "16%", "450px");

   for (let i = 0; i < 2; i++) {
      const TextElement = document.createElement('p');
      TextElement.style.display = "inline-block";
      TextElement.style.color = "#FFFFFF";
      TextElement.style.fontSize = "large";
      TextElement.style.fontFamily = "sans-serif";
      TitleArea.appendChild(TextElement);
   };

   //STAZIONE LUNA
   if (GlobalVar.PlanetOrbit > 0 && GlobalVar.MoonOrbit > 0 && GlobalVar.SubMoonOrbit == 0) {
      TitleArea.children[0].innerText = `${Oggetti.PlanetarySystem.Modular[GlobalVar.PlanetOrbit - 1].Modular[GlobalVar.MoonOrbit - 1]
         .Name[GlobalVar.Language]} -`;
      TitleArea.children[1].innerText = `- ${Oggetti.PlanetarySystem.Modular[GlobalVar.PlanetOrbit - 1].Modular[GlobalVar.MoonOrbit - 1]
         .Text0[GlobalVar.Language]}`;
   };

   //STAZIONE SUB-LUNA
   if (GlobalVar.PlanetOrbit > 0 && GlobalVar.MoonOrbit > 0 && GlobalVar.SubMoonOrbit > 0) {
      TitleArea.children[0].innerText = `${Oggetti.PlanetarySystem.Modular[GlobalVar.PlanetOrbit - 1].Modular[GlobalVar.MoonOrbit - 1]
         .Modular[GlobalVar.SubMoonOrbit - 1].Name[GlobalVar.Language]} -`;
      TitleArea.children[1].innerText = `- ${Oggetti.PlanetarySystem.Modular[GlobalVar.PlanetOrbit - 1].Modular[GlobalVar.MoonOrbit - 1]
         .Modular[GlobalVar.SubMoonOrbit - 1].Text0[GlobalVar.Language]}`;
   };
};

function G0_SpendiGettoneCanvas(Elem, CoinIndex) {     //FUNZIONE CHE IMPOSTA I VALORI PER COINANIMATION E SPENDE 1 GETTONE
   GlobalVar.Coin--;
   Elem.setButtonText(CoinIndex, `${GlobalVar.Coin}`);
   CoinObj.startX = 90;
   CoinObj.startY = 195;
   CoinObj.endX = 600;
   CoinObj.endY = 292;
   CoinObj.Count = 1;
   CoinObj.EndFlag = false;
   if (GlobalVar.Coin <= 0) Elem.showButton(3, false);     //NASCONDI IL PULSANTE SE NON HAI COIN
   Elem.render();
};

/*MOSTRA I SOLDI SPESI PER UN CERTO TEMPO SUL PULSANTE MONEY, DA ESEGUIRE UNA VOLTA SOLA*/
function G0_ShowMoneySpentCanvas(Elem, Index, Value) {
   //VALORE MAGGIORE DI ZERO (VINCITA)
   if (Value > 0) Elem.setButtonText(Index, `${GlobalVar.Money}${Economy.MoneySymbol}
      +${Value}`);
   //VALORE MINORE DI ZERO (SPESA)
   if (Value < 0) Elem.setButtonText(Index, `${GlobalVar.Money}${Economy.MoneySymbol}
      ${Value}`);

   Elem.render();

   setTimeout(() => {
      Elem.setButtonText(Index, `${GlobalVar.Money}${Economy.MoneySymbol}`);
      Elem.render();
   }, 2000);
};

/*AGGIORNA I COLORI DELLA NAVE IN BASE AGLI UPGRADE*/
function G0_UpdateShipUpgrade(LoadContainer = true) {
   //NOTA: LoadContainer MOSTRA IL NUMERO DI CONTAINER IN BASE AL CARICO, SE off LI MOSTRA TUTTI
   /*UPGRADE COCKPIT*/
   if (GlobalVar.UpgradeCockpit == 0)
      MicEnginereturn.User.Object.children[1].children[0].material[2].color.setHex(Colors.UpgradeColor0);
   //MicEnginereturn.User.Object.children[1].children[0].children[2].material.color.setHex(Colors.UpgradeColor0);
   if (GlobalVar.UpgradeCockpit == 1)
      MicEnginereturn.User.Object.children[1].children[0].material[2].color.setHex(Colors.UpgradeColor1);
   //MicEnginereturn.User.Object.children[1].children[0].children[2].material.color.setHex(Colors.UpgradeColor1);
   if (GlobalVar.UpgradeCockpit == 2)
      MicEnginereturn.User.Object.children[1].children[0].material[2].color.setHex(Colors.UpgradeColor2);
   //MicEnginereturn.User.Object.children[1].children[0].children[2].material.color.setHex(Colors.UpgradeColor2);

   /*UPGRADE TANK*/
   //CERCA IL MODULO TANK
   let TankFound = MicEnginereturn.VarModularShip.ModuleArray.find((element) => element == 3);
   //TROVA L'INDICE DEL MODULO TANK
   let TankFoundIndex = MicEnginereturn.VarModularShip.ModuleArray.indexOf(TankFound);
   if (GlobalVar.UpgradeTank == 0) MicEnginereturn.User.Object.children[1].children[TankFoundIndex].scale.set(1, 1, 1);
   if (GlobalVar.UpgradeTank == 1) MicEnginereturn.User.Object.children[1].children[TankFoundIndex].scale.set(1.7, 1.2, 1);
   if (GlobalVar.UpgradeTank == 2) MicEnginereturn.User.Object.children[1].children[TankFoundIndex].scale.set(2, 1.5, 1);

   /*UPGRADE MOTORE*/
   //CERCA IL MODULO MOTORE
   let MotorFound = MicEnginereturn.VarModularShip.ModuleArray.find((element) => element == 6);
   //TROVA L'INDICE DEL MODULO MOTORE
   let MotorFoundIndex = MicEnginereturn.VarModularShip.ModuleArray.indexOf(MotorFound);
   if (GlobalVar.UpgradeMotor == 0) {
      MicEnginereturn.User.Object.children[1].children[MotorFoundIndex].scale.set(1, 1, 1);
      //CALCOLO POSIZIONE MOTORI
      let PositionZ = -(MicEnginereturn.VarModularShip.Moduli / 2) * Oggetti.Spaceship.ModuleZ;
      MicEnginereturn.User.Object.children[1].children[MotorFoundIndex].position.set(0, 0, PositionZ + MotorFoundIndex * Oggetti.Spaceship.ModuleZ);
   };
   if (GlobalVar.UpgradeMotor == 1) {
      MicEnginereturn.User.Object.children[1].children[MotorFoundIndex].scale.set(1.2, 1.2, 1.5);
      //CALCOLO POSIZIONE MOTORI
      let PositionZ = -(MicEnginereturn.VarModularShip.Moduli / 2) * Oggetti.Spaceship.ModuleZ;
      MicEnginereturn.User.Object.children[1].children[MotorFoundIndex].position.set(0, 0, PositionZ + MotorFoundIndex * Oggetti.Spaceship.ModuleZ + 1);
   };
   if (GlobalVar.UpgradeMotor == 2) {
      MicEnginereturn.User.Object.children[1].children[MotorFoundIndex].scale.set(1.3, 1.3, 2);
      //CALCOLO POSIZIONE MOTORI
      let PositionZ = -(MicEnginereturn.VarModularShip.Moduli / 2) * Oggetti.Spaceship.ModuleZ;
      MicEnginereturn.User.Object.children[1].children[MotorFoundIndex].position.set(0, 0, PositionZ + MotorFoundIndex * Oggetti.Spaceship.ModuleZ + 3);
   };

   /*RENDI VISIBILI SOLO I CONTAINER IN BASE AL CARICO*/
   if (LoadContainer == true) {
      function calcolaContainerVisibilita(caricoTotale, moduli, capacitaModulo, containerPerModulo) {
         const pesoPerContainer = capacitaModulo / containerPerModulo;
         let restante = caricoTotale;
         const risultato = [];
         for (let i = 0; i < moduli; i++) {
            const caricoModulo = Math.min(restante, capacitaModulo);
            const visibili = Math.min(
               containerPerModulo,
               Math.ceil(caricoModulo / pesoPerContainer)
            );
            //Array di boolean per il modulo corrente
            const moduloArray = Array(containerPerModulo)
               .fill(false)
               .map((_, idx) => idx < visibili);

            risultato.push(moduloArray);
            restante -= caricoModulo;
         };
         return risultato;
      };

      //CERCA I MODULI CONTAINER
      let ContainerFound = MicEnginereturn.VarModularShip.ModuleArray.find((element) => element == 5);
      const ContainerIndex = [];
      if (ContainerFound) {
         MicEnginereturn.VarModularShip.ModuleArray.forEach((val, index) => {
            if (val === ContainerFound) {
               ContainerIndex.push(index);
            }
         });
         const ContainerBool = calcolaContainerVisibilita(GlobalVar.MissionLoadCurrent, ContainerIndex.length, 500, 8);
         //PER OGNIUNO DI LORO
         for (let i = 0; i < ContainerIndex.length; i++) {
            //PER OGNI CONTAINER DEL MODULO (8)
            for (let a = 0; a < MicEnginereturn.User.Object.children[1].children[ContainerIndex[i]].children[0].children.length; a++) {
               //RENDI VISIBILI I CONTAINER
               MicEnginereturn.User.Object.children[1].children[ContainerIndex[i]].children[0].children[a].visible = ContainerBool[i][a];
            };
         };
      };
   };


};

function G0_ChangeShipColor() {
   MicEnginereturn.User.Object.children[1].children[MicEnginereturn.VarModularShip.Moduli].children[0].material.color.setHex(`0x${GlobalVar.Color1}`);
   MicEnginereturn.User.Object.children[1].children[MicEnginereturn.VarModularShip.Moduli].children[1].material.color.setHex(`0x${GlobalVar.Color1}`);
   MicEnginereturn.User.Object.children[1].children[MicEnginereturn.VarModularShip.Moduli].children[2].material.color.setHex(`0x${GlobalVar.Color2}`);
};

/*MOSTRA UN NPC CHE DA IL BENVENUTO AD OGNI STAZIONE SPAZIALE*/
function G0_WelcomeOnStation(Larg = 400) {
   MicEnginereturn.VarObject.E3_DisplayNPC({
      //GENERICI
      Font: 14,                                             //FONT IN PIXEL
      PosX: 110,                                            //POSIZIONE X
      PosY: 0,                                              //POSIZIONE Y
      zIndex: "20",
      //IMMAGINE
      LargImage: 150,                                       //LARGHEZZA IMMAGINE
      AtImage: 100,                                         //ALTEZZA IMMAGINE
      Image: NPC.Radio.Immagini[GlobalVar.StationType - 1][GlobalVar.GenderNPC],               //IMMAGINE
      //TESTO
      PositionText: "Side",                               //POSIZIONE DEL TESTO RELATIVA ALL'IMMAGINE "Down" "Side"
      LargText: Larg,
      AltText: 80,                                          //ALTEZZA TESTO
      ColorText: Colors.NPCColor,                             //COLORE SFONDO TESTO
      ColorFontText: "#ffffffff",                         //COLORE FONT TESTO
      Text: NPC.Welcome.Testi[GlobalVar.StationType - 1][GlobalVar.Language + 1],               //TESTO
      //TESTO CONTINUA
      Text1: `${NPC.Click[GlobalVar.Language]}`,                      //TESTO CONTINUA
      Time: NPC.Welcome.Testi[GlobalVar.StationType - 1][0]                           //TEMPO
   },
      function () { });             //FUNZIONE
};

/*MOSTRA UN NPC CHE TI CHIEDE SE VUOI UNA SPIEGAZIONE SU COME FUNZIONA IL MINIGIOCO*/
function G0_AskMinigame(Function) {
   MicEnginereturn.VarObject.E3_DisplayNPCDoubleButton({
      //GENERICI
      Font: 14,                                             //FONT IN PIXEL
      PosX: -200,                                            //POSIZIONE X (POSITIVA=SINISTRA, NEGATIVA=DESTRA)
      PosY: 0,                                              //POSIZIONE Y (SOLO TOP)
      zIndex: "20",
      //IMMAGINE
      LargImage: 150,                                       //LARGHEZZA IMMAGINE
      AtImage: 100,                                         //ALTEZZA IMMAGINE
      Image: NPC.Radio.Immagini[GlobalVar.StationType - 1][GlobalVar.GenderNPC],               //IMMAGINE
      //TESTO
      PositionText: "Down",                               //POSIZIONE DEL TESTO RELATIVA ALL'IMMAGINE "Down" "Right "Left
      LargText: 150,
      AltText: 120,                                          //ALTEZZA TESTO
      ColorText: Colors.NPCColor,                             //COLORE SFONDO TESTO
      ColorFontText: "#ffffffff",                         //COLORE FONT TESTO
      Text: NPC.AskMinigame.Testi[GlobalVar.Language],               //TESTO
      //PULSANTI
      AltPuls: 40,                   //ALTEZZA PULSANTI
      ColorPuls: Colors.NPCColor,                             //COLORE SFONDO PULSANTI
      ColorFontPuls: "#ffffffff",                         //COLORE FONT PULSANTI
      ColorBorderPuls: Colors.NPCBorderColor,                      //COLORE BORDO PULSANTI
      Text1: "OK",                   //TESTO PULSANTE 1
      Text2: "NO",                   //TESTO PULSANTE 2
   },
      function () { Function() },
      function () { });
};

/*MOSTRA UN NPC CHE TI DA UNA SPIEGAZIONE SU COME FUNZIONA IL MINIGIOCO*/
function G0_HelpMinigame() {
   MicEnginereturn.VarObject.E3_DisplayNPCSingleButton({
      //GENERICI
      Font: 14,                                             //FONT IN PIXEL
      PosX: 100,                                            //POSIZIONE X (POSITIVA=SINISTRA, NEGATIVA=DESTRA)
      PosY: 0,                                              //POSIZIONE Y (SOLO TOP)
      zIndex: "20",
      //IMMAGINE
      LargImage: 150,                                       //LARGHEZZA IMMAGINE
      AtImage: 100,                                         //ALTEZZA IMMAGINE
      Image: NPC.Radio.Immagini[GlobalVar.StationType - 1][GlobalVar.GenderNPC],               //IMMAGINE
      //TESTO
      PositionText: "Down",                               //POSIZIONE DEL TESTO RELATIVA ALL'IMMAGINE "Down" "Right "Left
      LargText: 550,
      AltText: 180,                                          //ALTEZZA TESTO
      ColorText: Colors.NPCColor,                             //COLORE SFONDO TESTO
      ColorFontText: "#ffffffff",                         //COLORE FONT TESTO
      Text: NPC.HelpMinigame.Testi[GlobalVar.StationType - 1][GlobalVar.Language],               //TESTO
      //PULSANTE
      AltPuls: 40,                   //ALTEZZA PULSANTI
      ColorPuls: Colors.NPCColor,                             //COLORE SFONDO PULSANTI
      ColorFontPuls: "#ffffffff",                         //COLORE FONT PULSANTI
      ColorBorderPuls: Colors.NPCBorderColor,                      //COLORE BORDO PULSANTI
      Text1: "OK",                   //TESTO PULSANTE 1
   },
      function () { Function() });
};

function G0_MoveMoneyImg(startX, startY, endX, endY, EndFlag) {
   MoneyObj.startX = startX;
   MoneyObj.startY = startY;
   MoneyObj.endX = endX;
   MoneyObj.endY = endY;
   MoneyObj.Count = 10;
   MoneyObj.EndFlag = EndFlag;
};

/*-------------FUNZIONI PER IL CALCOLO DELLA SUDDIVISIONE DI UN AREA IN UNA GRIGLIA*/
//CALCOLA UNA GRIGLIA DATA UN AREA E RESTITUISCE UN ARRAY CON I CENTRI DI OGNI CASELLA
function G0_CalcolaCentriGriglia(width, height, cols, rows) {
   const centers = [];

   const cellWidth = width / cols;
   const cellHeight = height / rows;

   for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
         centers.push({
            x: col * cellWidth + cellWidth / 2,
            y: row * cellHeight + cellHeight / 2
         });
      }
   }

   return centers;
};
//IN BASE ALLA POSIZIONE XY IN UN AREA RESTITUISCE L'INDICE DELLA CASELLA PIÙ PROSSIMA (SNAP)
function G0_SnapIndexToGrid(x, y, width, height, cols, rows) {
   const cellWidth = width / cols;
   const cellHeight = height / rows;

   let col = Math.floor(x / cellWidth);
   let row = Math.floor(y / cellHeight);

   //Clamp per sicurezza
   col = Math.max(0, Math.min(cols - 1, col));
   row = Math.max(0, Math.min(rows - 1, row));

   return row * cols + col;
};

/*--------------------------MINIGIOCHI--------------------------------*/
function GameTextElement(PosX, PosY, Width, Font = "15px",) {
   const Elem0 = document.createElement('div');
   Elem0.style.display = "block";
   Elem0.style.position = "absolute";
   Elem0.style.width = Width;
   Elem0.style.height = "20px";
   Elem0.style.left = PosX;
   Elem0.style.top = PosY;
   Elem0.style.color = "white";
   Elem0.style.fontSize = Font;
   document.body.appendChild(Elem0);

   return Elem0;
};
function BackgroundElement() {
   const Background = document.createElement('div');
   Background.style.display = "block";
   Background.style.position = "absolute";
   Background.style.width = "100%";
   Background.style.height = "100%";
   Background.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
   Background.style.backdropFilter = "blur(10px)";
   Background.style.zIndex = '9';
   setTimeout(() => {
      document.body.appendChild(Background);
   }, 5000);

   return Background;
};
//CALCOLA LA RICOMPENSA IN BASE AI SOLDI POSSEDUTI
function CalcMoneyReward(Coeff) {
   let Reward = 0;
   //SE IL DENARO POSSEDUTO È MINORE DELLA CIFRA MINIMA CALCOLA LA RICOMPENSA COME SE SI POSSEDESSE LA CIFRA MINIMA
   if (GlobalVar.Money < Economy.MinMoneyReward) Reward = Coeff * Economy.MinMoneyReward;
   //ALTRIMENTI CALCOLA LA RICOMPENSA NORMALE
   else Reward = Coeff * GlobalVar.Money;

   return Reward;
};

async function G0_CorsaRobot(Models) {    //802
   /*PARAMETRI*/
   //#region
   const VelEliche = 20;
   const frequency = 0.5; //Hz (1 oscillazione al secondo)
   const MinAmplitude = 0.1;
   const MaxAmplitude = 0.2;
   const SpeedPista = 50;       //VELOCITÀ APPARENTE DELLA PISTA
   const PrecipitaRobot = 10;    //VELOCITÀ DI PRECIPITAZIONE ROBOT ALLA MORTE
   const SecAttesaGara = 10;

   /*PARAMETRI GARA*/
   const DecimiGara = 200;      //DURATA DI OGNI GARA IN DECIMI DI SECONDO (300)
   const VitaInit = 100;
   const CoeffVelocità = 2;     //COEFFICIENTE DI MOVIMENTO ROBOTS IN BASE AL LORO PARAMETRO ¨VELOCITÀ¨
   const CoeffRes = 5;          //COEFFICIENTE DI RESISTENZA ROBOTS IN BASE AL LORO PARAMETRO ¨RESISTENZA¨ (5)
   const CoeffForza = 5;        //COEFFICIENTE DI FORZA ROBOTS IN BASE AL LORO PARAMETRO ¨FORZA¨
   const CoeffFreq = 2;         //COEFFICIENTE DI FREQUENZA SPARI LASER IN BASE AL LORO PARAMETRO ¨FREQUENZA¨
   //#endregion

   /*VARIABILI*/
   //#region
   let Lose = false;               //SCOMMESSA PERSA
   let Vincita = 0;
   let VincitaDelay = false;        //ABILITAZIONE AL RITARDO DI ASSEGNAZIONE DELLA VINCITA
   let Reward = 0;               //VINCITA TEMPORANEA
   let Enabled = false;           //ABILITAZIONE ALLE SCOMMESSE (GETTONE SPESO)
   let DurataGara = 0;
   const VarRobots = [];
   const labels = [Testi.Minigames.CorsaRobot.Vel[GlobalVar.Language], Testi.Minigames.CorsaRobot.Res[GlobalVar.Language], Testi.Minigames.CorsaRobot.Forza[GlobalVar.Language], Testi.Minigames.CorsaRobot.Freq[GlobalVar.Language]];
   let Enemies = [1, 0, 3, 2, 5, 4, 7, 6];          //LISTA NEMICI PER OGNI ROBOT
   let time = 0;
   const amplitudeTarget = [];                                       //AMPIEZZE CASUALI DI OSCILLAZIONE
   const Phases = [];                                                //ANGOLI INIZIALI DI OSCILLAZIONE
   const Radar = [];
   const NumberText = [];
   let Scommessa = 0;
   let ValCountDown = 3;
   const DirezioniNemici = [];       //ARRAY DELLE DIREZIONI TRA LE COPPIE DI NEMICI
   const DistanzeNemici = [];          //ARRAY DELLE DISTANZE TRA LE COPPIE DI NEMICI
   for (let i = 0; i < 8; i++) {
      DirezioniNemici.push(MicEnginereturn.Objects.E3_Vector3(0, 0, 0));
   };
   const AngoloNemici = [];       //ARRAY DEGLI ANGOLI TRA LE COPPIE DI NEMICI
   const Laser = [];                //ARRAY DEI RAGGI LASER
   const TimeLaser = [];              //CONTEGGIO TEMPO DEGLI SPARI LASER
   let VitaRobot = [];            //ARRAY DELLE VITE DEI ROBOT
   let Vincitori = [0, 1, 2, 3, 4, 5, 6, 7];              //VINCITORI/PARTECIPANTI
   let Gara = 0;                       //CONTATORE DELLA GARA
   let AttesaGara = SecAttesaGara;        //ATTESA IN SECONDI TRA UNA GARA E L'ALTRA
   let CheckTexture = false;              //FLAG PER ASPETTARE CHE LE TEXTURE SI SIANO CARICATE
   const FuncSmooth = [];                 //ARRAY DI FUNZIONI PER LA ROTAZIONE
   //#endregion

   /*CAMERA*/
   MicEnginereturn.CameraGroup.children[0].children[0].children[0].position.set(-20, 30, 30);

   /*ROBOTS, LUCI PISTE, PIANO, EDIFICI*/
   //#region
   Models.Robots.visible = false;
   Models.PianoPista.visible = false;

   Models.Edifici1.children[0].children[0].material.map.repeat.set(2, 3);
   Models.Edifici1.children[0].children[1].material.map.repeat.set(2, 3);

   Models.Edifici1.visible = false;
   Models.Edifici2.visible = false;

   /*POSIZIONE INIZIALE DEI ROBOT*/
   for (let i = 0; i < Models.Robots.children.length; i++) {
      Phases[i] = Math.random() * Math.PI * 2;
   };

   function InitPosRobots() {
      //GRUPPO 1
      Models.Robots.children[0].position.set(-20, 10, 0);
      Models.Robots.children[1].position.set(-10, 10, 0);
      //GRUPPO 2
      Models.Robots.children[2].position.set(10, 10, 0);
      Models.Robots.children[3].position.set(20, 10, 0);
      //GRUPPO 3
      Models.Robots.children[4].position.set(-20, 0, 0);
      Models.Robots.children[5].position.set(-10, 0, 0);
      //GRUPPO 4
      Models.Robots.children[6].position.set(10, 0, 0);
      Models.Robots.children[7].position.set(20, 0, 0);
   };
   InitPosRobots();

   //#endregion

   /*TESTO COUNTDOWN*/
   const CountDown = document.createElement('p');
   MicEnginereturn.VarObject.StandardCSSText(CountDown, "Arial", "center", "100px", "#ffffff", "top", "100px", "left", "calc(50% - 100px)", "200px");

   //GARA
   const Elem1 = GameTextElement("70%", "50px", "100px");

   //VINCITA
   const Elem0 = GameTextElement("70%", "70px", "100px");

   //TEMPO
   const Elem2 = GameTextElement("70%", "90px", "100px");
   DurataGara = DecimiGara;

   //HUD TABELLONE
   const TabelloneHud = S0_GenerateHUDCanvas(TabelloneRobotHUDObj);
   for (let i = 0; i < TabelloneHud.Pulsanti.length; i++) {
      TabelloneHud.showButton(i, false);
   };

   //HUD PULSANTI
   PulsRobotHUDObj.DispatchEvent = Models.DispatchEvent;
   const PulsantiHud = S0_GenerateHUDCanvas(PulsRobotHUDObj);

   PulsantiHud.setButtonCallback(0, () => {
      //NASCONDI I RADAR, I NUMERI E I PULSANTI
      if (Gara == 0) {
         Background.style.display = "none";
         for (let i = 0; i < Models.Robots.children.length; i++) {
            Radar[i].style.display = "none";
            NumberText[i].style.display = "none";
         };
         for (let i = 0; i < 8; i++) {
            PulsantiHud.showButton(i + 1, false);
            PulsantiHud.render();
         };
         PulsantiHud.setButtonText(0, Testi.Minigames.CorsaRobot.Stop[GlobalVar.Language]);
         Gara = 1;
      };
      if (Gara > 1) Reset();
      PulsantiHud.render();
   });

   //NASCONDI I PULSANTI DI ABILITAZIONE ALLE SCOMMESSE, CREA LE FUNZIONI DI ROTAZIONE
   for (let i = 0; i < 8; i++) {
      PulsantiHud.showButton(i + 1, false);
      PulsantiHud.render();

      FuncSmooth[i] = MicEnginereturn.Math.E3_SmoothMov({
         speed: 8
      });
   };

   //LINEE TABELLONE
   const LineeTab = MicEnginereturn.VarObject.E3_CreateLines(14, [
      { x1: 210, y1: 65, x2: 300, y2: 75, height: 2, colore: Colors.coloriBrillanti[0] },
      { x1: 210, y1: 95, x2: 300, y2: 75, height: 2, colore: Colors.coloriBrillanti[1] },
      { x1: 210, y1: 145, x2: 300, y2: 160, height: 2, colore: Colors.coloriBrillanti[2] },
      { x1: 210, y1: 175, x2: 300, y2: 160, height: 2, colore: Colors.coloriBrillanti[3] },
      { x1: 210, y1: 220, x2: 300, y2: 235, height: 2, colore: Colors.coloriBrillanti[4] },
      { x1: 210, y1: 250, x2: 300, y2: 235, height: 2, colore: Colors.coloriBrillanti[5] },
      { x1: 210, y1: 300, x2: 300, y2: 315, height: 2, colore: Colors.coloriBrillanti[6] },
      { x1: 210, y1: 330, x2: 300, y2: 315, height: 2, colore: Colors.coloriBrillanti[7] },
      { x1: 360, y1: 75, x2: 450, y2: 118, height: 2, colore: Colors.coloriBrillanti[8] },
      { x1: 360, y1: 160, x2: 450, y2: 118, height: 2, colore: Colors.coloriBrillanti[8] },
      { x1: 360, y1: 235, x2: 450, y2: 278, height: 2, colore: Colors.coloriBrillanti[8] },
      { x1: 360, y1: 315, x2: 450, y2: 278, height: 2, colore: Colors.coloriBrillanti[8] },
      { x1: 510, y1: 118, x2: 600, y2: 198, height: 2, colore: Colors.coloriBrillanti[8] },
      { x1: 510, y1: 278, x2: 600, y2: 198, height: 2, colore: Colors.coloriBrillanti[8] },
   ]);
   for (let i = 0; i < LineeTab.Linee.length; i++) {
      LineeTab.Linee[i].style.display = "none";
   };
   LineeTab.Container.style.display = "none";

   /*RADARCANVAS, GENERATEATTRIBUTES, PULSANTI SCOMMESSA, MODIFICA MATERIALE LUCE ANTERIORE*/
   for (let i = 0; i < Models.Robots.children.length; i++) {
      NumberText[i] = document.createElement('p');
      const Attributes = MicEnginereturn.Math.E3_GenerateAttributes(0.5, 4, 0.1, 1);

      //FILA ALTO
      if (i < 4) {
         Radar[i] = MicEnginereturn.VarObject.E3_RadarCanvas(Attributes, labels, {
            size: 150,
            color: "#00ff00",
            colorLabel: "#00ff00",
            labelOffset: 15,             //OFFSET DEL RAGGIO DEI LABEL
            font: "7px Arial",
            top: 20,
            left: 120 + i * 130,
            zIndex: "11",
         });
         MicEnginereturn.VarObject.StandardCSSText(NumberText[i], "Arial", "center", "20px", Colors.coloriBrillanti[i], "top", "40px", "left", `${120 + i * 130}px`, "50px");
      }
      //FILA BASSO
      else {
         Radar[i] = MicEnginereturn.VarObject.E3_RadarCanvas(Attributes, labels, {
            size: 150,
            color: "#00ff00",
            colorLabel: "#00ff00",
            labelOffset: 15,             //OFFSET DEL RAGGIO DEI LABEL
            font: "7px Arial",
            top: 140,
            left: 120 + (i - 4) * 130,
            zIndex: "11",
         });
         MicEnginereturn.VarObject.StandardCSSText(NumberText[i], "Arial", "center", "20px", Colors.coloriBrillanti[i], "top", "160px", "left", `${120 + (i - 4) * 130}px`, "50px");
      };
      VarRobots[i] = Attributes;
      NumberText[i].innerText = `${i + 1}`;

      //MODIFICA COLORE MATERIALE LUCE ANTERIORE
      Models.Robots.children[i].children[2].material = MicEnginereturn.Materials.E3_MaterialeBaseColor(Colors.coloriBrillanti[i]);

      //FUNZIONE CLICK
      PulsantiHud.setButtonCallback(i + 1, () => {
         if (Enabled == true) {
            Scommessa = i + 1;
            //NASCONDI I RADAR, I NUMERI E I PULSANTI
            for (let a = 0; a < Models.Robots.children.length; a++) {
               Radar[a].style.display = "none";
               NumberText[a].style.display = "none";
            };
            for (let i = 0; i < 8; i++) {
               PulsantiHud.showButton(i + 1, false);
               PulsantiHud.render();
            };
            PulsantiHud.setButtonText(0, Testi.Minigames.CorsaRobot.Stop[GlobalVar.Language]);
            Gara = 1;
         };
      });

      //RAGGI LASER DAI CANNONI
      Laser[i] = MicEnginereturn.VarObject.E3_GenericLine({
         Color: Colors.coloriBrillanti[i],
         Linewidth: 1,
         StartLine: {
            x: 0,
            y: 0,
            z: 0
         },
         EndLine: {
            x: 0,
            y: 0,
            z: -10
         },
      });
      Models.Robots.children[i].children[9].add(Laser[i]);
      Laser[i].visible = false;
      TimeLaser[i] = 0;            //AGGIUNGE UN NUMERO ALL´ARRAY DEI TIMER DEI LASER PER PERMETTERGLI DI CONTARE
      VitaRobot[i] = VitaInit;            //AGGIUNGE LA VITA PIENA ALL´ARRAY DELLE VITE DEI ROBOT
   };

   //BACKGROUND TRASPARENTE SFOCATO
   const Background = BackgroundElement();

   function UpdateRadarAttrubutes() {
      for (let i = 0; i < Models.Robots.children.length; i++) {
         const Attributes = MicEnginereturn.Math.E3_GenerateAttributes(0.5, 4, 0.1, 1);
         VarRobots[i] = (Attributes);
         Radar[i].UpdateAttributes(Attributes);
      };
   };

   TabelloneHud.render();
   PulsantiHud.render();

   //STEP GARE, MODIFICA DELLE OSCILLAZIONI OGNI SECONDO
   setInterval(() => {
      //MODIFICA DELLE OSCILLAZIONI OGNI SECONDO
      for (let i = 0; i < Vincitori.length; i++) {
         amplitudeTarget[i] = MinAmplitude + Math.random() * MaxAmplitude;
      };
      //TESTO COUNTDOWN
      if (Gara == 1) {
         //COUNTDOWN
         if (ValCountDown > 0) CountDown.innerText = `${ValCountDown}`;
         else if (ValCountDown == 0) CountDown.innerText = "GO!";
         else Gara = 2;
         ValCountDown--;
         //TESTO GARA
         Elem1.innerText = `LAP: 1`;
         //VISIBILITÀ ELEMENTI
         Models.Robots.visible = true;
         Models.Edifici1.visible = true;
         Models.Edifici2.visible = true;
         Models.PianoPista.visible = true;
      };
      //GARA 1 IN CORSO
      if (Gara == 2) {
         CountDown.innerText = "";
         //ROTAZIONE TOROIDI ELICHE IN AVANTI
         for (let i = 0; i < 8; i++) {
            Models.Robots.children[i].children[3].rotation.x = Math.PI / 2 + 0.4;
            Models.Robots.children[i].children[4].rotation.x = Math.PI / 2 + 0.4;
         };
         Elem1.innerText = `LAP: 1`;      //TESTO GARA
         Elem0.innerText = `WIN: ${Reward.toFixed(0)}`;        //TESTO VINCITA
      };
      //FINE GARA 1 - VINCITORI
      if (Gara == 3) {
         AttesaGara--;
         //NASCONDERE I PERDENTI E RESET DELLE VITE
         for (let a = 0; a < Models.Robots.children.length; a++) {
            //NASCONDERE I PERDENTI
            if (!Vincitori.includes(a)) {
               Models.Robots.children[a].visible = false;
            };
            //RESET DELLE VITE
            VitaRobot[a] = VitaInit;            //AGGIUNGE LA VITA PIENA ALL´ARRAY DELLE VITE DEI ROBOT
         };
         Elem1.innerText = `LAP: 1`;      //TESTO GARA
         //VISIBILITÀ ELEMENTI
         Models.Robots.visible = false;
         Models.Edifici1.visible = false;
         Models.Edifici2.visible = false;
         Models.PianoPista.visible = false;
         for (let i = 0; i < TabelloneHud.Pulsanti.length; i++) {
            TabelloneHud.showButton(i, true);
         };
         //CAMBIO COLORE E NUMERO PULSANTI TABELLONE
         TabelloneHud.setButtonColor(8, Colors.coloriBrillanti[Vincitori[0]]);
         TabelloneHud.setButtonColor(9, Colors.coloriBrillanti[Vincitori[1]]);
         TabelloneHud.setButtonColor(10, Colors.coloriBrillanti[Vincitori[2]]);
         TabelloneHud.setButtonColor(11, Colors.coloriBrillanti[Vincitori[3]]);
         TabelloneHud.setButtonText(8, `${Vincitori[0] + 1}`);
         TabelloneHud.setButtonText(9, `${Vincitori[1] + 1}`);
         TabelloneHud.setButtonText(10, `${Vincitori[2] + 1}`);
         TabelloneHud.setButtonText(11, `${Vincitori[3] + 1}`);
         //VISUALIZZAZIONE LINEE TABELLONE
         LineeTab.Container.style.display = "block";
         LineeTab.Linee[Vincitori[0]].style.display = "block";
         LineeTab.Linee[Vincitori[1]].style.display = "block";
         LineeTab.Linee[Vincitori[2]].style.display = "block";
         LineeTab.Linee[Vincitori[3]].style.display = "block";
         //VINCITA
         if (AttesaGara <= 0) {
            //SE SI HA SCOMMESSO
            if (Scommessa > 0) {
               if (Vincitori.includes(Scommessa - 1)) {
                  Reward += CalcMoneyReward(Economy.CorsaRobotReward1);
                  Gara = 4;
               }
               else Reset();
            }
            else Gara = 4;
         };
         Elem0.innerText = `WIN: ${Reward.toFixed(0)}`;        //TESTO VINCITA
      };
      //ALLINEAMENTO ROBOT VINCITORI E COUNTDOWN
      if (Gara == 4) {
         DurataGara = DecimiGara;
         Elem2.innerText = `TIME: ${(DurataGara / 10).toFixed(1)}`;
         /*ALLINEAMENTO ROBOT VINCITORI*/
         //GRUPPO 1
         Models.Robots.children[Vincitori[0]].position.set(-20, 10, 0);
         Models.Robots.children[Vincitori[1]].position.set(-10, 10, 0);
         //GRUPPO 2
         Models.Robots.children[Vincitori[2]].position.set(10, 10, 0);
         Models.Robots.children[Vincitori[3]].position.set(20, 10, 0);

         //COUNTDOWN
         if (ValCountDown > 0) CountDown.innerText = `${ValCountDown}`;
         else if (ValCountDown == 0) CountDown.innerText = "GO!";
         else Gara = 5;
         ValCountDown--;
         //TESTO GARA
         Elem1.innerText = `LAP: 2`;
         //VISIBILITÀ ELEMENTI
         Models.Robots.visible = true;
         Models.Edifici1.visible = true;
         Models.Edifici2.visible = true;
         Models.PianoPista.visible = true;
         for (let i = 0; i < TabelloneHud.Pulsanti.length; i++) {
            TabelloneHud.showButton(i, false);
         };
         LineeTab.Container.style.display = "none";      //VISUALIZZAZIONE LINEE TABELLONE
         Elem0.innerText = `WIN: ${Reward.toFixed(0)}`;        //TESTO VINCITA
      };
      //GARA 2 IN CORSO
      if (Gara == 5) {
         AttesaGara = SecAttesaGara;
         CountDown.innerText = "";
         //ROTAZIONE TOROIDI ELICHE IN AVANTI
         for (let i = 0; i < Vincitori.length; i++) {
            Models.Robots.children[Vincitori[i]].children[3].rotation.x = Math.PI / 2 + 0.4;
            Models.Robots.children[Vincitori[i]].children[4].rotation.x = Math.PI / 2 + 0.4;
         };
         Elem1.innerText = `LAP: 2`;      //TESTO GARA
         Elem0.innerText = `WIN: ${Reward.toFixed(0)}`;        //TESTO VINCITA
      };
      //FINE GARA 2 - VINCITORI
      if (Gara == 6) {
         AttesaGara--;
         //NASCONDERE I PERDENTI E RESET DELLE VITE
         for (let a = 0; a < Models.Robots.children.length; a++) {
            //NASCONDERE I PERDENTI
            if (!Vincitori.includes(a)) {
               Models.Robots.children[a].visible = false;
            };
            //RESET DELLE VITE
            VitaRobot[a] = VitaInit;            //AGGIUNGE LA VITA PIENA ALL´ARRAY DELLE VITE DEI ROBOT
         };
         //TESTO GARA
         Elem1.innerText = `LAP: 2`;
         //VISIBILITÀ ELEMENTI
         Models.Robots.visible = false;
         Models.Edifici1.visible = false;
         Models.Edifici2.visible = false;
         Models.PianoPista.visible = false;
         for (let i = 0; i < TabelloneHud.Pulsanti.length; i++) {
            TabelloneHud.showButton(i, true);
         };
         //CAMBIO COLORE E NUMERO PULSANTI TABELLONE
         TabelloneHud.setButtonColor(12, Colors.coloriBrillanti[Vincitori[0]]);
         TabelloneHud.setButtonColor(13, Colors.coloriBrillanti[Vincitori[1]]);
         TabelloneHud.setButtonText(12, `${Vincitori[0] + 1}`);
         TabelloneHud.setButtonText(13, `${Vincitori[1] + 1}`);
         //VISUALIZZAZIONE LINEE TABELLONE
         LineeTab.Container.style.display = "block";
         //VINCITORE 0
         if (Vincitori[0] == 0) {
            LineeTab.Linee[8].style.display = "block";
            LineeTab.Linee[8].style.backgroundColor = Colors.coloriBrillanti[Vincitori[0]];
         };
         if (Vincitori[0] == 1) {
            LineeTab.Linee[8].style.display = "block";
            LineeTab.Linee[8].style.backgroundColor = Colors.coloriBrillanti[Vincitori[0]];
         };
         if (Vincitori[0] == 2) {
            LineeTab.Linee[9].style.display = "block";
            LineeTab.Linee[9].style.backgroundColor = Colors.coloriBrillanti[Vincitori[0]];
         };
         if (Vincitori[0] == 3) {
            LineeTab.Linee[9].style.display = "block";
            LineeTab.Linee[9].style.backgroundColor = Colors.coloriBrillanti[Vincitori[0]];
         };
         //VINCITORE 1
         if (Vincitori[1] == 4) {
            LineeTab.Linee[10].style.display = "block";
            LineeTab.Linee[10].style.backgroundColor = Colors.coloriBrillanti[Vincitori[1]];
         };
         if (Vincitori[1] == 5) {
            LineeTab.Linee[10].style.display = "block";
            LineeTab.Linee[10].style.backgroundColor = Colors.coloriBrillanti[Vincitori[1]];
         };
         if (Vincitori[1] == 6) {
            LineeTab.Linee[11].style.display = "block";
            LineeTab.Linee[11].style.backgroundColor = Colors.coloriBrillanti[Vincitori[1]];
         };
         if (Vincitori[1] == 7) {
            LineeTab.Linee[11].style.display = "block";
            LineeTab.Linee[11].style.backgroundColor = Colors.coloriBrillanti[Vincitori[1]];
         };
         //VINCITA
         if (AttesaGara <= 0) {
            //SE SI HA SCOMMESSO
            if (Scommessa > 0) {
               if (Vincitori.includes(Scommessa - 1)) {
                  Reward += CalcMoneyReward(Economy.CorsaRobotReward2);
                  Gara = 7;
               }
               else Lose = true;
            }
            else Gara = 7;
         };
         Elem0.innerText = `WIN: ${Reward.toFixed(0)}`;        //TESTO VINCITA
      };
      //ALLINEAMENTO ROBOT VINCITORI E COUNTDOWN
      if (Gara == 7) {
         DurataGara = DecimiGara;
         Elem2.innerText = `TIME: ${(DurataGara / 10).toFixed(1)}`;
         //ALLINEAMENTO ROBOT VINCITORI
         Models.Robots.children[Vincitori[0]].position.set(-20, 10, 0);
         Models.Robots.children[Vincitori[1]].position.set(-10, 10, 0);

         //COUNTDOWN
         if (ValCountDown > 0) CountDown.innerText = `${ValCountDown}`;
         else if (ValCountDown == 0) CountDown.innerText = "GO!";
         else Gara = 8;
         ValCountDown--;
         //TESTO GARA
         Elem1.innerText = `LAP: 3`;
         //VISIBILITÀ ELEMENTI
         Models.Robots.visible = true;
         Models.Edifici1.visible = true;
         Models.Edifici2.visible = true;
         Models.PianoPista.visible = true;
         for (let i = 0; i < TabelloneHud.Pulsanti.length; i++) {
            TabelloneHud.showButton(i, false);
         };
         LineeTab.Container.style.display = "none";//VISUALIZZAZIONE LINEE TABELLONE
         Elem0.innerText = `WIN: ${Reward.toFixed(0)}`;        //TESTO VINCITA
      };
      //GARA 3 IN CORSO
      if (Gara == 8) {
         AttesaGara = SecAttesaGara;
         CountDown.innerText = "";
         //ROTAZIONE TOROIDI ELICHE IN AVANTI
         for (let i = 0; i < Vincitori.length; i++) {
            Models.Robots.children[Vincitori[i]].children[3].rotation.x = Math.PI / 2 + 0.4;
            Models.Robots.children[Vincitori[i]].children[4].rotation.x = Math.PI / 2 + 0.4;
         };
         Elem1.innerText = `LAP: 3`;      //TESTO GARA
         Elem0.innerText = `WIN: ${Reward.toFixed(0)}`;        //TESTO VINCITA
      };
      //FINE GARA 3 - VINCITORE
      if (Gara == 9) {
         AttesaGara--;
         //VISIBILITÀ ELEMENTI
         Models.Robots.visible = false;
         Models.Edifici1.visible = false;
         Models.Edifici2.visible = false;
         Models.PianoPista.visible = false;
         for (let i = 0; i < TabelloneHud.Pulsanti.length; i++) {
            TabelloneHud.showButton(i, true);
         };
         //CAMBIO COLORE E NUMERO PULSANTI TABELLONE
         TabelloneHud.setButtonColor(14, Colors.coloriBrillanti[Vincitori[0]]);
         TabelloneHud.setButtonText(14, `${Vincitori[0] + 1}`);
         //VISUALIZZAZIONE LINEE TABELLONE
         LineeTab.Container.style.display = "block";
         //VINCITORE
         if (Vincitori[0] == 0) {
            LineeTab.Linee[12].style.display = "block";
            LineeTab.Linee[12].style.backgroundColor = Colors.coloriBrillanti[Vincitori[0]];
         };
         if (Vincitori[0] == 1) {
            LineeTab.Linee[12].style.display = "block";
            LineeTab.Linee[12].style.backgroundColor = Colors.coloriBrillanti[Vincitori[0]];
         };
         if (Vincitori[0] == 2) {
            LineeTab.Linee[12].style.display = "block";
            LineeTab.Linee[12].style.backgroundColor = Colors.coloriBrillanti[Vincitori[0]];
         };
         if (Vincitori[0] == 3) {
            LineeTab.Linee[12].style.display = "block";
            LineeTab.Linee[12].style.backgroundColor = Colors.coloriBrillanti[Vincitori[0]];
         };
         if (Vincitori[0] == 4) {
            LineeTab.Linee[13].style.display = "block";
            LineeTab.Linee[13].style.backgroundColor = Colors.coloriBrillanti[Vincitori[0]];
         };
         if (Vincitori[0] == 5) {
            LineeTab.Linee[13].style.display = "block";
            LineeTab.Linee[13].style.backgroundColor = Colors.coloriBrillanti[Vincitori[0]];
         };
         if (Vincitori[0] == 6) {
            LineeTab.Linee[13].style.display = "block";
            LineeTab.Linee[13].style.backgroundColor = Colors.coloriBrillanti[Vincitori[0]];
         };
         if (Vincitori[0] == 7) {
            LineeTab.Linee[13].style.display = "block";
            LineeTab.Linee[13].style.backgroundColor = Colors.coloriBrillanti[Vincitori[0]];
         };
         //VINCITA
         if (AttesaGara <= 0) {
            //SE SI HA SCOMMESSO
            if (Scommessa > 0) {
               if (Vincitori.includes(Scommessa - 1)) {
                  Reward += CalcMoneyReward(Economy.CorsaRobotReward3);
                  Lose = true;     //IMPOSTA IL LOSE SU TRUE ANCHE SE SI HA VINTO COSÌ SI ACCEDE ALLA VINCITA
               }
               else Lose = true;
            }
            else Reset();
         };
         Elem0.innerText = `WIN: ${Reward.toFixed(0)}`;        //TESTO VINCITA
      };

      //ASSEGNAZIONE DELLA VINCITA SE ESISTE
      if (Lose == true && Reward > 0) {
         if (VincitaDelay == false) {
            setTimeout(() => {
               Vincita = Number(Reward.toFixed(0));
            }, 1000);
            VincitaDelay = true;
         };
      };

   }, 1000);

   //SPARI LASER, BARRIERE PROTETTIVE, DURATA GARA, CHECK TEXTURE
   setInterval(() => {
      //GARA IN CORSO
      if (Gara == 2 || Gara == 5 || Gara == 8) {
         for (let i = 0; i < Vincitori.length; i++) {
            //SE LA VITA DEL ROBOT E DEL SUO NEMICO SONO MAGGIORI DI ZERO
            if (VitaRobot[Vincitori[i]] > 0 && VitaRobot[Enemies[Vincitori[i]]] > 0) {
               TimeLaser[Vincitori[i]] += 1;
               //TIMER ARRIVATO AL VALORE DI FREQUENZA
               if (TimeLaser[Vincitori[i]] > (1 / VarRobots[Vincitori[i]][3]) * CoeffFreq) {
                  if (TimeLaser[Vincitori[i]] < 3 + (1 / VarRobots[Vincitori[i]][3]) * CoeffFreq) {
                     Laser[Vincitori[i]].visible = true;       //RENDI VISIBILE IL LASER
                     Models.Robots.children[Vincitori[i]].children[8].scale.setScalar(1.5);
                     Models.Robots.children[Enemies[Vincitori[i]]].children[11].visible = true;    //RENDI VISIBILE LO SCUDO
                  }
                  else {
                     Laser[Vincitori[i]].visible = false;       //RENDI INVISIBILE IL LASER
                     Models.Robots.children[Vincitori[i]].children[8].scale.setScalar(1);
                     //TOGLIE ALLA VITA DEL NEMICO UN VALORE CHE TIENE CONTO DELLA FORZA DELL´ATTACCANTE E DELLA RESISTENZA DEL NEMICO
                     VitaRobot[Enemies[Vincitori[i]]] -= (VarRobots[Vincitori[i]][2] * CoeffForza) * (VarRobots[Enemies[Vincitori[i]]][2] * CoeffRes);
                     //SCALA BARRIERA PROTETTIVA
                     Models.Robots.children[Enemies[Vincitori[i]]].children[11].scale.setScalar(0.5 + VitaRobot[Enemies[Vincitori[i]]] / 200);
                     TimeLaser[Vincitori[i]] = 0;                        //RESETTA IL TIMER
                     Models.Robots.children[Enemies[Vincitori[i]]].children[11].visible = false;    //RENDI INVISIBILE LO SCUDO
                  };
               };
            };
         };

         //TIMER GARA
         if (DurataGara > 0) {
            Elem2.innerText = `TIME: ${(DurataGara / 10).toFixed(1)}`;
            DurataGara--;
         };
      };

      //FINE DELLA GARA 1
      if (Gara == 2) {
         if (DurataGara <= 0) {
            Vincitori = [];
            //NUOVO ELENCO VINCITORI
            for (let i = 0; i < 4; i++) {
               //SEL UN ROBOT È PIÙ AVANTI DEL SUO NEMICO AGGIUNGILO AI VINCITORI
               if (Models.Robots.children[i * 2].position.z > Models.Robots.children[Enemies[i * 2]].position.z) Vincitori.push(i * 2);
               //ALTRIMENTI AGGIUNGI IL SUO NEMICO
               else Vincitori.push(Enemies[i * 2]);
            };
            //NUOVO ELENCO NEMICI
            Enemies[Vincitori[0]] = Vincitori[1];
            Enemies[Vincitori[1]] = Vincitori[0];
            Enemies[Vincitori[2]] = Vincitori[3];
            Enemies[Vincitori[3]] = Vincitori[2];

            ValCountDown = 3;
            Gara = 3;
         };
      };
      //FINE DELLA GARA 2
      if (Gara == 5) {
         if (DurataGara <= 0) {
            const VincitoriTemp = Vincitori;    //CREA UNA COPIA DELL'ARRAY DEI VINCITORI PRIMA DI CANCELLARLO
            Vincitori = [];
            //NUOVO ELENCO VINCITORI
            for (let i = 0; i < 2; i++) {
               //SEL UN ROBOT È PIÙ AVANTI DEL SUO NEMICO AGGIUNGILO AI VINCITORI
               if (Models.Robots.children[VincitoriTemp[i * 2]].position.z > Models.Robots.children[Enemies[VincitoriTemp[i * 2]]].position.z) Vincitori.push(VincitoriTemp[i * 2]);
               //ALTRIMENTI AGGIUNGI IL SUO NEMICO
               else Vincitori.push(Enemies[VincitoriTemp[i * 2]]);
            };
            //NUOVO ELENCO NEMICI
            Enemies[Vincitori[0]] = Vincitori[1];
            Enemies[Vincitori[1]] = Vincitori[0];

            ValCountDown = 3;
            Gara = 6;
         };
      };
      //FINE DELLA GARA 3
      if (Gara == 8) {
         if (DurataGara <= 0) {
            const VincitoriTemp = Vincitori;    //CREA UNA COPIA DELL'ARRAY DEI VINCITORI PRIMA DI CANCELLARLO
            Vincitori = [];
            //NUOVO ELENCO VINCITORI
            for (let i = 0; i < 1; i++) {
               //SEL UN ROBOT È PIÙ AVANTI DEL SUO NEMICO AGGIUNGILO AI VINCITORI
               if (Models.Robots.children[VincitoriTemp[i * 2]].position.z > Models.Robots.children[Enemies[VincitoriTemp[i * 2]]].position.z) Vincitori.push(VincitoriTemp[i * 2]);
               //ALTRIMENTI AGGIUNGI IL SUO NEMICO
               else Vincitori.push(Enemies[VincitoriTemp[i * 2]]);
            };

            ValCountDown = 3;
            Gara = 9;
         };
      };

      //CHECK TEXTURE
      if (CheckTexture == false && Models.PianoPista.material.map) {
         Models.PianoPista.material.map.repeat.set(2, 10);
         if (GlobalVar.Texture >= 1) Models.PianoPista.material.normalMap.repeat.set(2, 10);
         Models.PianoPista.material.map.offset.y = 0;
         if (GlobalVar.Texture >= 1) Models.PianoPista.material.normalMap.offset.y = 0;
         CheckTexture = true;
      };

      //COMPONENTE CASUALE DEI CANNONI
      for (let i = 0; i < 8; i++) {
         FuncSmooth[i].SetTarget(0.4 * Math.random() - 0.2);
      };

      TabelloneHud.render();
   }, 100);

   //OSCILLAZIONE ROBOT, SPOSTAMENTO LUCI, CALCOLI DIREZIONI CANNONI, LASER DAI CANNONI
   function UpdateGame(delta) {
      time += delta;
      //OSCILLAZIONE ROBOT, CALCOLI DIREZIONI CANNONI, LASER DAI CANNONI, SPOSTAMENTO LUCI, SPOSTAMENTO TEXTURE PIANO
      if (Gara == 2 || Gara == 5 || Gara == 8) {
         //PER OGNI ROBOT
         for (let i = 0; i < Vincitori.length; i++) {
            //CALCOLO DIREZIONI COPPIE DI ROBOT
            DirezioniNemici[Vincitori[i]].subVectors(Models.Robots.children[Vincitori[i]].position, Models.Robots.children[Enemies[Vincitori[i]]].position).normalize();
            //CALCOLO DISTANZE COPPIE DI ROBOT
            DistanzeNemici[Vincitori[i]] = Models.Robots.children[Vincitori[i]].position.distanceTo(Models.Robots.children[Enemies[Vincitori[i]]].position);

            //ROTAZIONE ELICHE, OSCILLAZIONE, VELOCITÀ ROBOT
            if (VitaRobot[Vincitori[i]] > 0) {
               //ROTAZIONE ELICHE
               Models.Robots.children[Vincitori[i]].children[5].rotation.y += delta * VelEliche;
               Models.Robots.children[Vincitori[i]].children[6].rotation.y -= delta * VelEliche;
               //OSCILLAZIONE GARA 1
               if (Vincitori.length == 8) {
                  if (i <= 3) Models.Robots.children[Vincitori[i]].position.y = 10 + Math.sin(time * frequency * Math.PI * 2 + Phases[Vincitori[i]]) * amplitudeTarget[Vincitori[i]];
                  else Models.Robots.children[Vincitori[i]].position.y = 0 + Math.sin(time * frequency * Math.PI * 2 + Phases[Vincitori[i]]) * amplitudeTarget[Vincitori[i]];
               };
               //OSCILLAZIONE GARA 2-3
               if (Vincitori.length <= 4) {
                  Models.Robots.children[Vincitori[i]].position.y = 10 + Math.sin(time * frequency * Math.PI * 2 + Phases[Vincitori[i]]) * amplitudeTarget[Vincitori[i]];
               };

               //MUOVI I ROBOT IN BASE AL PARAMETRO VELOCITÀ
               Models.Robots.children[Vincitori[i]].position.z += (VarRobots[Vincitori[i]][0] - 0.5) * delta * CoeffVelocità;
               //POSIZIONI PUNTI LASER
               Laser[Vincitori[i]].UpdateLine({ x: 0, y: 0, z: 0 }, { x: 0, y: 0, z: -DistanzeNemici[Vincitori[i]] });
            }
            //MORTE DEL ROBOT
            else {
               Models.Robots.children[Vincitori[i]].position.y -= delta * PrecipitaRobot;
               Models.Robots.children[Vincitori[i]].position.z -= delta * PrecipitaRobot;
            };
            //RENDI INVISIBILE IL ROBOT PRECIPITATO
            if (Models.Robots.children[Vincitori[i]].position.y < -30) Models.Robots.children[Vincitori[i]].visible = false;

            //CALCOLO ANGOLI COPPIE DI ROBOT
            AngoloNemici[Vincitori[i]] = Math.atan2(DirezioniNemici[Vincitori[i]].x, DirezioniNemici[Vincitori[i]].z);
            //ROTAZIONE CANNONE VERSO IL NEMICO
            Models.Robots.children[Vincitori[i]].children[9].rotation.y = AngoloNemici[Vincitori[i]] + FuncSmooth[i].Update(delta);
         };

         //SPOSTA GLI EDIFICI PER SIMULARE IL MOVIMENTO
         for (let i = 0; i < Models.Edifici1.children.length; i++) {
            Models.Edifici1.children[i].position.z -= SpeedPista * delta * 2;
            Models.Edifici2.children[i].position.z -= SpeedPista * delta * 2;
            //RIPOSIZIONAMENTO EDIFICI TROPPO LONTANI
            if (Models.Edifici1.children[i].position.z <= -600) Models.Edifici1.children[i].position.z = 400;
            if (Models.Edifici2.children[i].position.z <= -600) Models.Edifici2.children[i].position.z = 400;
         };

         //SPOSTA L'OFFSET DEL PIANO PISTA PER SIMULARE IL MOVIMENTO
         Models.PianoPista.material.map.offset.y -= SpeedPista * delta * 0.02;
         if (GlobalVar.Texture >= 1) Models.PianoPista.material.normalMap.offset.y -= SpeedPista * delta * 0.02;
      };
   };
   function Enable() {
      Enabled = true;
      //MOSTRA I PULSANTI DI ABILITAZIONE ALLE SCOMMESSE
      for (let i = 0; i < 8; i++) {
         PulsantiHud.showButton(i + 1, true);
         PulsantiHud.render();
      };
      Background.style.display = "none";
   };
   function Reset() {
      GlobalVar.GameEnabled = false;
      Lose = false;
      Enabled = false;
      Reward = 0;
      Vincita = 0;
      VincitaDelay = false;
      Scommessa = 0;
      Gara = 0;
      ValCountDown = 3;
      Vincitori = [0, 1, 2, 3, 4, 5, 6, 7];
      Enemies = [1, 0, 3, 2, 5, 4, 7, 6];
      VitaRobot = [100, 100, 100, 100, 100, 100, 100, 100];
      AttesaGara = SecAttesaGara;
      DurataGara = DecimiGara;
      InitPosRobots();
      CountDown.innerText = "";
      Models.Robots.visible = false;
      Models.Edifici1.visible = false;
      Models.Edifici2.visible = false;
      for (let i = 0; i < Models.Robots.children.length; i++) {
         Models.Robots.children[i].visible = true;
      };
      Models.PianoPista.visible = false;
      //HUD TABELLONE
      for (let i = 0; i < TabelloneHud.Pulsanti.length; i++) {
         TabelloneHud.showButton(i, false);
         //COLORE E TESTO PULSANTI GARA 2 E 3
         if (i >= 8) {
            TabelloneHud.setButtonColor(i, Colors.coloriBrillanti[8]);
            TabelloneHud.setButtonText(i, "");
         };
      };
      //LINEE TABELLONE
      for (let i = 0; i < LineeTab.Linee.length; i++) {
         LineeTab.Linee[i].style.display = "none";
      };
      LineeTab.Container.style.display = "none";
      //MOSTRA I RADAR, I NUMERI E I PULSANTI
      for (let a = 0; a < Models.Robots.children.length; a++) {
         Radar[a].style.display = "block";
         NumberText[a].style.display = "block";
      };
      PulsantiHud.setButtonText(0, Testi.Minigames.CorsaRobot.Watch[GlobalVar.Language]);
      UpdateRadarAttrubutes();
      Background.style.display = "block";
   };
   function ResetVincita() {
      Vincita = 0;
   };

   return { UpdateGame, Enable, Reset, ResetVincita, get Vincita() { return Vincita; }, get Gara() { return Gara; } };
};
async function G0_ScavaMeteorite() {      //143 gemelevel
   let GameLevel = Number(SaveSystem.getItem(`ScavaMeteoriteLevel`));
   const MaxLevel = Economy.ScavaMeteoriteMaxLevel;
   //HUD
   const ScavaMeteoriteHUDCanvas = S0_GenerateHUDCanvas(MinigiocoHUDObj);

   /*PARAMETRI*/
   const Obj = {
      Displace: 0.2,                                           //VALORE DI DISPLACEMENT DELLA MESH DEL METEORITE
      MatObj: Materiali[22],                                   //MATERIALE DELLA SFERA COLPIBILE
      HitCount: 10,                                            //NUMERO DI COLPI DISPONIBILI MINIMI A LIVELLO 1
      HitLiv: 2,                                               //NUMERO DI COLPI AGGIUNTI PER LIVELLO
      Tempo: 30,                                               //TEMPO DELLA PARTITA
      PlusTime: 5,                                            //SECONDI BONUS PER COLPO A SEGNO
      DistanzaMax: 0.15,                                       //MASSIMA DISTANZA DAL TARGET PER CONSIDERARE IL COLPO A SEGNO
      VincitaMin: 0,
      VincitaMax: CalcMoneyReward(Economy.ScavaMeteoriteVincitaMax),
      Mirino: 'SpaceGame/texture/Clip/TargetVerde.png',
      TargetImg: 'SpaceGame/texture/Clip/TargetRosso.png',     //TEXTURE DEL TARGET DA COLPIRE
      TargetDistance: 0.2,                                     //DISTANZA DEL TARGET DALLA SUPERFICIE DELLA SFERA
   };

   //VARIABILI
   let HitCount = 0;
   let Score = 0;
   let Vincita = 0;
   let VincitaDelay = false;        //ABILITAZIONE AL RITARDO DI ASSEGNAZIONE DELLA VINCITA
   let Tempo = 0;

   //TESTO GIOCO
   ScavaMeteoriteHUDCanvas.setButtonText(0, `LEVEL: ${GameLevel + 1}
     TIME: ${Tempo.toFixed(1)}
     HIT: ${HitCount}
     WIN: ${Score.toFixed(0)}`);
   ScavaMeteoriteHUDCanvas.showButton(0, false);

   /*-----------------OGGETTI DOM----------------*/
   //PUNTEGGIO COLPO
   const Elem2 = GameTextElement("calc(50% + 10px)", "calc(50% + 10px)", "100px");
   Elem2.style.color = "lightgreen";

   //MIRINO
   const Mirino = document.createElement('img');
   Mirino.src = Obj.Mirino;
   Mirino.style.position = "absolute";
   Mirino.style.width = "20px";
   Mirino.style.height = "20px";
   Mirino.style.left = "50%";
   Mirino.style.top = "50%";
   Mirino.style.transform = "translate(-50%, -50%)";
   document.body.appendChild(Mirino);

   //CREAZIONE DELLA SFERA COLPIBILE
   const Sphere = await MicEnginereturn.VarObject.E3_SferaColpibile({
      MatObj: Obj.MatObj,
      Displace: Obj.Displace,
      SphereDetail: 64,
      //TARGET
      TargetImg: Obj.TargetImg,
      TargetTollerance: Obj.DistanzaMax,          //TOLLERANZA PER CONSIDERARE IL TARGET COLPITO
      TargetDistance: Obj.TargetDistance,            //DISTANZA DEL TARGET DALLA SUPERFICIE DELLA SFERA
   });

   //BACKGROUND TRASPARENTE SFOCATO
   const Background = BackgroundElement();

   //SCORRERE DEL TEMPO
   setInterval(() => {
      if (Tempo > 0) {
         Tempo -= 0.1;
         ScavaMeteoriteHUDCanvas.setButtonText(0, `LEVEL: ${GameLevel + 1}
            TIME: ${Tempo.toFixed(1)}
            HIT: ${HitCount}
            WIN: ${Score.toFixed(0)}`);
         ScavaMeteoriteHUDCanvas.render();
      };
      //ALLO SCADERE DEL TEMPO
      if (Tempo <= 0 && Tempo > -10) {
         if (Score == 0) {
            Reset();    //SE ALLA FINE DEL TEMPO NON SI HA VINTO NULLA RESETTA
            GlobalVar.GameEnabled = false;
            GlobalVar.ComY = 0;
            GlobalVar.ComX = 0;
         }
         else if (VincitaDelay == false) {
            setTimeout(() => {
               Vincita = Number(Score).toFixed(0);
               Reset();
            }, 1000);
            Tempo = -10;                  //BLOCCA IL TEMPO IN MODO CHE NON CONTINUI A RESETTARE
            VincitaDelay = true;
         };
      };
   }, 100);

   function Enable() {
      Tempo = Obj.Tempo;
      HitCount = Obj.HitCount + Obj.HitLiv * GameLevel;
      Background.style.display = "none";
      ScavaMeteoriteHUDCanvas.showButton(0, true);
      ScavaMeteoriteHUDCanvas.render();
   };

   function Reset() {
      Score = 0;
      Vincita = 0;
      VincitaDelay = false;
      Background.style.display = "block";
      Tempo = 0;
      Sphere.Reset();
      ScavaMeteoriteHUDCanvas.setButtonText(0, `LEVEL: ${GameLevel + 1}
         TIME: ${Tempo.toFixed(1)}
         HIT: ${HitCount}
         WIN: ${Score.toFixed(0)}`);
      ScavaMeteoriteHUDCanvas.render();
   };

   function Shot() {
      Sphere.Shot(0, 0);
      if (Sphere.NearTarget <= Obj.DistanzaMax) {
         let ScoreShot = (Obj.VincitaMax - (Obj.VincitaMax - Obj.VincitaMin) * (Sphere.NearTarget / Obj.DistanzaMax)).toFixed(1);
         Score += Number(ScoreShot);
         Elem2.innerText = `${ScoreShot}`;
         Tempo += Obj.PlusTime;        //AGGIUNGI AL TEMPO QUALCHE SECONDO
         HitCount--;
      };
      ScavaMeteoriteHUDCanvas.setButtonText(0, `LEVEL: ${GameLevel + 1}
         TIME: ${Tempo.toFixed(1)}
         HIT: ${HitCount}
         WIN: ${Score.toFixed(0)}`);
      ScavaMeteoriteHUDCanvas.render();

      setTimeout(() => {
         Elem2.innerText = "";
      }, 2000);
      //SE SI FINISCONO I COLPI PRIMA DEL TEMPO INCREMENTA IL LIVELLO
      if (HitCount == 0) {
         if (GameLevel < MaxLevel) GameLevel++;
         SaveSystem.setItem(`ScavaMeteoriteLevel`, GameLevel);
         if (VincitaDelay == false) {
            setTimeout(() => {
               Vincita = Number(Score).toFixed(0);
            }, 1000);
            VincitaDelay = true;
         };
      };
   };

   ScavaMeteoriteHUDCanvas.render();

   return { Enable, Reset, Shot, get Vincita() { return Vincita; } };
};
async function G0_CombinaColore(Models) { //375 maxlevel
   let GameLevel = Number(SaveSystem.getItem(`CombinaColoreLevel`));

   //HUD
   const CombinaColoreHUDCanvas = S0_GenerateHUDCanvas(CombinaColoreHUDObj);

   //PARAMETRI
   //#region
   const Obj = {
      MaxVincita: CalcMoneyReward(Economy.CombinaColoreMaxVincita),
      MinVincita: CalcMoneyReward(Economy.CombinaColoreMinVincita),
      ScorePosX: "30%",
      ScorePosY: "45%",
      CheckPosX: "30%",
      CheckPosY: "10%",
   };
   const MaxLevel = Economy.CombinaColoreMaxLevel;
   const PosContColore = [-5.5, -3.1, 5];      //POSIZIONE CONTENITORE COLORE
   const PosContMetallo = [-1.8, -3.1, 5];      //POSIZIONE CONTENITORE METALLO
   const PosContRilievo = [1.8, -3.1, 5];      //POSIZIONE CONTENITORE RILIEVO
   const PosContLuce = [5.5, -3.1, 5];      //POSIZIONE CONTENITORE RILIEVO
   const SpeedCheck = 2;           //VELOCITÀ DI INCREMENTO DELLE PERCENTUALI DI CKECK OGNI 100MS
   const PulseSpeed = 10;           //VELOCITÀ DELLA PULSAZIONE LUCE
   const RaggioCont = 1.5;         //RAGGIO CONTENITORI
   const AltezzaCont = 4.7;        //ALTEZZA CONTENITORI
   const VelocitàPrelievo = 0.1;
   const shakeIntensityPos = 10;   //TREMOLIO ESPLOSIONE - spostamento massimo (in unità)
   const shakeIntensityRot = 2;   //TREMOLIO ESPLOSIONE - rotazione massima (in radianti)
   const CoeffLuce = 10;          //MOLTIPLICATORE DELLA RADIOATTIVITÀ
   //#endregion

   //VARIABILI
   //#region
   //PERCENTUALE DI CHECK SOTTO LA QUALE ESPLODE TENENDO CONTO DEL LIVELLO
   let Tolleranza = Economy.CombinaColoreMinTolleranza + (Economy.CombinaColoreMaxTolleranza - Economy.CombinaColoreMinTolleranza) * (GameLevel / MaxLevel);
   let VincitaMax = Obj.MinVincita + (GameLevel / MaxLevel) * (Obj.MaxVincita - Obj.MinVincita);
   let Enabled = false;
   let VincitaDelay = false;        //ABILITAZIONE AL RITARDO DI ASSEGNAZIONE DELLA VINCITA
   let Vincita;                     //VINCITA EFFETTIVA DA INVIARE ALLA PAGINA
   let VincitaCalcolata = 0;        //VINCITA CALCOLATA PER FARE L'EFFETTO INCREMENTO DEL NUMERO
   let Bonus = 0;
   let BraccioX = 0;
   let BraccioY = 0;
   let BraccioZ = 0;
   let Colore = 0;                           //COLORE DEL MATERIALE CREATO
   const LiquidoHSL = [0, 0, 0];
   const ColoreHSL = [0, 0, 0];
   let TargetColore = 0;
   let Metallo = 0;
   let TargetMetallo = 0;
   let Rilievo = 0;
   let TargetRilievo = 0;
   let Luce = 0;
   let TargetLuce = 0;
   let PulseUser = 0;
   let PulseTarget = 0;
   let PulseTimeUser = 0;//PULSAZIONE TEMPO ACCUMULATO
   let PulseTimeTarget = 0;//PULSAZIONE TEMPO ACCUMULATO
   let Checking = 0;       //CONTATORE FASE DI CHECKING
   let CheckColore = 0;
   let CheckMetallo = 0;
   let CheckRilievo = 0;
   let CheckLuce = 0;
   let CheckMedia = 0;
   let CheckVincita = 0;
   let VincitaStep = 0;         //STEP DI VINCITA DA AGGIUNGERE A CheckVincita PER AVERE IL TEMPO FISSO
   let Explosion = false;
   const BonusText = "+ Bonus";
   let BonusArray = ["", "", "", ""];             //ARRAY DI BONUS PER CIASCUN CHECK
   //#endregion

   //CREAZIONE GEOMETRIE
   //#region
   const LiquidGeom = MicEnginereturn.Geometries.E3_GeoCylinder(RaggioCont, RaggioCont, AltezzaCont, 32, 1, false, 0, Math.PI * 2);
   const SferaGeom = MicEnginereturn.Geometries.E3_GeoSphere(5, 128, 64, 0, Math.PI * 2, 0, Math.PI);
   const SferaGeom2 = MicEnginereturn.Geometries.E3_GeoSphere(1.7, 128, 64, 0, Math.PI * 2, 0, Math.PI);
   //#endregion

   //CREAZIONE MATERIALI
   //#region
   const ColorMat = await MicEnginereturn.Materials.E3_MaterialeOpaco(MaterialiUnici.CombinaColore.ColorMat);
   const MetalMat = await MicEnginereturn.Materials.E3_MaterialeLucido(MaterialiUnici.CombinaColore.MetalMat);
   const RilievoMat = await MicEnginereturn.Materials.E3_MaterialeOpaco(MaterialiUnici.CombinaColore.RilievoMat);
   const LuceMat = await MicEnginereturn.Materials.E3_MaterialeBase(MaterialiUnici.CombinaColore.LuceMat);
   const UserMat = await MicEnginereturn.Materials.E3_MaterialeStandard(MaterialiUnici.CombinaColore.UserMat);
   const TargetMat = await MicEnginereturn.Materials.E3_MaterialeStandard(MaterialiUnici.CombinaColore.TargetMat);
   const PinzaMat = await MicEnginereturn.Materials.E3_MaterialeLucido(MaterialiUnici.CombinaColore.PinzaMat);
   const BraccioMat = await MicEnginereturn.Materials.E3_MaterialeStandard(Materiali[11]);
   //#endregion

   //CREAZIONE MESH
   //#region
   const LiquidoColor = MicEnginereturn.Objects.E3_GenMesh(MicEnginereturn.Scene, LiquidGeom, ColorMat, PosContColore, [0, 0, 0], [1, 1, 1], "", true, false);

   const LiquidoMetal = MicEnginereturn.Objects.E3_GenMesh(MicEnginereturn.Scene, LiquidGeom, MetalMat, PosContMetallo, [0, 0, 0], [1, 1, 1], "", true, false);

   const LiquidoRilievo = MicEnginereturn.Objects.E3_GenMesh(MicEnginereturn.Scene, SferaGeom2, RilievoMat, PosContRilievo, [0, 0, 0], [0.6, 1, 0.6], "", true, false);

   const LiquidoLuce = MicEnginereturn.Objects.E3_GenMesh(MicEnginereturn.Scene, LiquidGeom, LuceMat, PosContLuce, [0, 0, 0], [1, 1, 1], "", true, false);

   const SferaOttenuta = MicEnginereturn.Objects.E3_GenMesh(MicEnginereturn.Scene, SferaGeom, UserMat, [-7, 1, -5], [0, 0, 0], [1, 1, 1], "", true, false);
   SferaOttenuta.castShadow = true;

   const SferaTarget = MicEnginereturn.Objects.E3_GenMesh(MicEnginereturn.Scene, SferaGeom, TargetMat, [7, 1, -5], [0, 0, 0], [1, 1, 1], "", true, false);
   SferaTarget.castShadow = true;
   //#endregion

   //BRACCIO ROBOTICO
   const Braccio = MicEnginereturn.VarObject.E3_Braccio2Assi({
      LunghBraccio: 5,
      RaggioBraccio: 0.2,
      VelBraccio: 0.1,
      MinYPinza: -5.5,
      Basamento: false,
      MatPinza: PinzaMat,
      MatBraccio1: BraccioMat,
      MatBraccio2: BraccioMat,
   });

   //CAMERA
   MicEnginereturn.CameraGroup.position.set(0, 10, 18);
   MicEnginereturn.CameraGroup.rotation.set(-0.5, 0, 0);


   CombinaColoreHUDCanvas.showButton(0, false);       //TESTO GIOCO
   CombinaColoreHUDCanvas.showButton(1, false);       //TESTO CHECK

   ResetRandomTarget();

   //BACKGROUND TRASPARENTE SFOCATO
   const Background = BackgroundElement();

   //COMANDI X E Y -100 0 +100
   function UpdateGame(ComX, ComY, ComZ, delta) {
      Braccio.UpdateBraccio(BraccioX, BraccioY, BraccioZ, delta);
      if (Enabled == false) {
         BraccioX = 0;
         BraccioY = 0;
         BraccioZ = 0;
      };
      if (Enabled == true && Explosion == false) {
         BraccioX = ComX;
         BraccioY = 0;
         BraccioZ = ComZ;

         //CONTENITORE COLORE
         if (Braccio.PinzaTarget.x < PosContColore[0] + RaggioCont && Braccio.PinzaTarget.x > PosContColore[0] - RaggioCont &&
            Braccio.PinzaTarget.z < PosContColore[2] + RaggioCont && Braccio.PinzaTarget.z > PosContColore[2] - RaggioCont) {
            if (ComY < -50 && Colore > 0) Colore -= VelocitàPrelievo * delta;
            if (ComY > 50 && Colore < 1) Colore += VelocitàPrelievo * delta;
            if (Colore < 0) Colore = 0;
            if (Colore > 1) Colore = 1;
            LiquidoColor.scale.y = 1 - Colore;
            LiquidoColor.position.y = PosContColore[1] - (AltezzaCont / 2) * Colore;
            SetColor(ColoreHSL, Colore);
            UserMat.color.setHSL(ColoreHSL[0], ColoreHSL[1], ColoreHSL[2]);
            ColorMat.color.setHSL(ColoreHSL[0], ColoreHSL[1], ColoreHSL[2]);

            //RIDIMENSIONAMENTO CONTENITORE
            if (Models.ContColore.scale.y > 0) {
               Models.ContColore.scale.y -= delta;
               Models.ContColore.position.y = 1.5 + 2.5 * Models.ContColore.scale.y;
            };
         }
         else if (Models.ContColore.scale.y < 1) {
            Models.ContColore.scale.y += delta;
            Models.ContColore.position.y = 1.5 + 2.5 * Models.ContColore.scale.y;
         }

         //CONTENITORE METALLO
         if (Braccio.PinzaTarget.x < PosContMetallo[0] + RaggioCont && Braccio.PinzaTarget.x > PosContMetallo[0] - RaggioCont &&
            Braccio.PinzaTarget.z < PosContMetallo[2] + RaggioCont && Braccio.PinzaTarget.z > PosContMetallo[2] - RaggioCont) {
            if (ComY < -50 && Metallo > 0) Metallo -= VelocitàPrelievo * delta;
            if (ComY > 50 && Metallo < 1) Metallo += VelocitàPrelievo * delta;
            if (Metallo < 0) Metallo = 0;
            if (Metallo > 1) Metallo = 1;
            LiquidoMetal.scale.y = 1 - Metallo;
            LiquidoMetal.position.y = PosContMetallo[1] - (AltezzaCont / 2) * Metallo;
            UserMat.metalness = Metallo;
            UserMat.roughness = 1 - Metallo;
            //RIDIMENSIONAMENTO CONTENITORE
            if (Models.ContMetallo.scale.y > 0) {
               Models.ContMetallo.scale.y -= delta;
               Models.ContMetallo.position.y = 1.5 + 2.5 * Models.ContMetallo.scale.y;
            }
         }
         else if (Models.ContMetallo.scale.y < 1) {
            Models.ContMetallo.scale.y += delta;
            Models.ContMetallo.position.y = 1.5 + 2.5 * Models.ContMetallo.scale.y;
         };

         //CONTENITORE RILIEVO
         if (Braccio.PinzaTarget.x < PosContRilievo[0] + RaggioCont && Braccio.PinzaTarget.x > PosContRilievo[0] - RaggioCont &&
            Braccio.PinzaTarget.z < PosContRilievo[2] + RaggioCont && Braccio.PinzaTarget.z > PosContRilievo[2] - RaggioCont) {
            if (ComY < -50 && Rilievo > 0) Rilievo -= VelocitàPrelievo * delta;
            if (ComY > 50 && Rilievo < 1) Rilievo += VelocitàPrelievo * delta;
            if (Rilievo < 0) Rilievo = 0;
            if (Rilievo > 1) Rilievo = 1;
            LiquidoRilievo.scale.y = 1 - Rilievo;
            LiquidoRilievo.position.y = PosContRilievo[1] - (AltezzaCont / 2) * Rilievo;
            UserMat.displacementScale = Rilievo * 3;
            UserMat.normalScale.set(Rilievo * 2, Rilievo * 2);
            //RIDIMENSIONAMENTO CONTENITORE
            if (Models.ContRilievo.scale.y > 0) {
               Models.ContRilievo.scale.y -= delta;
               Models.ContRilievo.position.y = 1.5 + 2.5 * Models.ContRilievo.scale.y;
            };
         }
         else if (Models.ContRilievo.scale.y < 1) {
            Models.ContRilievo.scale.y += delta;
            Models.ContRilievo.position.y = 1.5 + 2.5 * Models.ContRilievo.scale.y;
         };

         //CONTENITORE LUCE
         if (Braccio.PinzaTarget.x < PosContLuce[0] + RaggioCont && Braccio.PinzaTarget.x > PosContLuce[0] - RaggioCont &&
            Braccio.PinzaTarget.z < PosContLuce[2] + RaggioCont && Braccio.PinzaTarget.z > PosContLuce[2] - RaggioCont) {
            if (ComY < -50 && Luce > 0) Luce -= VelocitàPrelievo * delta;
            if (ComY > 50 && Luce < 1) Luce += VelocitàPrelievo * delta;
            if (Luce < 0) Luce = 0;
            if (Luce > 1) Luce = 1;
            LiquidoLuce.scale.y = 1 - Luce;
            LiquidoLuce.position.y = PosContLuce[1] - (AltezzaCont / 2) * Luce;
            //RIDIMENSIONAMENTO CONTENITORE
            if (Models.ContLuce.scale.y > 0) {
               Models.ContLuce.scale.y -= delta;
               Models.ContLuce.position.y = 1.5 + 2.5 * Models.ContLuce.scale.y;
            };
         }
         else if (Models.ContLuce.scale.y < 1) {
            Models.ContLuce.scale.y += delta;
            Models.ContLuce.position.y = 1.5 + 2.5 * Models.ContLuce.scale.y;
         };

         //ROTAZIONE SFERE
         SferaOttenuta.rotation.y += delta * 0.5;
         SferaTarget.rotation.y += delta * 0.5;

         //EMISSIVITÀ TARGET
         PulseTimeTarget += delta * PulseSpeed * TargetLuce;
         PulseTarget = CoeffLuce * Math.sin(PulseTimeTarget);
         TargetMat.emissiveIntensity = TargetLuce * PulseTarget;

         //EMISSIVITÀ USER
         PulseTimeUser += delta * PulseSpeed * Luce;
         PulseUser = CoeffLuce * Math.sin(PulseTimeUser);
         UserMat.emissiveIntensity = Luce * PulseUser;

         //COLORE LUCE MATERIALE
         LuceMat.color.setRGB(1, 1, 1);
      };
      if (Explosion == true) {
         //TREMOLIO POSIZIONE
         SferaOttenuta.position.x += delta * (Math.random() - 0.5) * shakeIntensityPos;
         SferaOttenuta.position.y += delta * (Math.random() - 0.5) * shakeIntensityPos;
         SferaOttenuta.position.z += delta * (Math.random() - 0.5) * shakeIntensityPos;
         //TREMOLIO ROTAZIONE
         SferaOttenuta.rotation.x += delta * (Math.random() - 0.5) * shakeIntensityRot;
         SferaOttenuta.rotation.y += delta * (Math.random() - 0.5) * shakeIntensityRot;
         SferaOttenuta.rotation.z += delta * (Math.random() - 0.5) * shakeIntensityRot;
         if (SferaOttenuta.scale.x < 1.5) {
            SferaOttenuta.scale.x += delta * 0.1;
            SferaOttenuta.scale.y += delta * 0.1;
            SferaOttenuta.scale.z += delta * 0.1;
         }
         else if (SferaOttenuta.scale.x >= 1.5 && SferaOttenuta.scale.x < 6) {
            SferaOttenuta.scale.x += delta * 10;
            SferaOttenuta.scale.y += delta * 10;
            SferaOttenuta.scale.z += delta * 10;
         }
         else {
            Explosion = false;
            Reset();
         };
      };
   };

   //FASI DI CHECKING E ASSEGNAZIONE VINCITA
   setInterval(() => {
      if (Explosion == false && Enabled == true && Checking > 0) {
         CombinaColoreHUDCanvas.showButton(1, true);
         CombinaColoreHUDCanvas.setButtonText(1, `Checking....
            ${Testi.Minigames.CombinaColore.Colore[GlobalVar.Language]}: ${CheckColore}% ${BonusArray[0]}
            ${Testi.Minigames.CombinaColore.Metallo[GlobalVar.Language]}: ${CheckMetallo}% ${BonusArray[1]}
            ${Testi.Minigames.CombinaColore.Rilievo[GlobalVar.Language]}: ${CheckRilievo}% ${BonusArray[2]}
            ${Testi.Minigames.CombinaColore.Radioattività[GlobalVar.Language]}: ${CheckLuce}% ${BonusArray[3]}
            ${Testi.Minigames.CombinaColore.Media[GlobalVar.Language]}: ${CheckMedia}%
            ${Testi.Minigames.Generici.Vincita[GlobalVar.Language]}: ${CheckVincita}`);
      };
      //CHECK COLORE
      if (Explosion == false && Enabled == true && Checking == 1) {
         if (CheckColore < (1 - Math.abs(TargetColore - Colore)) * 100) CheckColore += SpeedCheck;
         if (CheckColore >= (1 - Math.abs(TargetColore - Colore)) * 100) {
            //ASSEGNA IL BONUS SE IL VALORE È UGUALE O MAGGIORE DEL MASSIMO LIVELLO
            if ((1 - Math.abs(TargetColore - Colore)) * 100 >= Economy.CombinaColoreMaxTolleranza) {
               BonusArray[0] = BonusText;
               Bonus += 0.25 * Obj.MinVincita * (1 - Math.abs(TargetColore - Colore));
            };
            if (CheckColore < Tolleranza) Explosion = true;
            else Checking = 2;
         };
      };
      //CHECK METALLO
      if (Explosion == false && Enabled == true && Checking == 2) {
         if (CheckMetallo < (1 - Math.abs(TargetMetallo - Metallo)) * 100) CheckMetallo += SpeedCheck;
         if (CheckMetallo >= (1 - Math.abs(TargetMetallo - Metallo)) * 100) {
            //ASSEGNA IL BONUS SE IL VALORE È UGUALE O MAGGIORE DEL MASSIMO LIVELLO
            if ((1 - Math.abs(TargetMetallo - Metallo)) * 100 >= Economy.CombinaColoreMaxTolleranza) {
               BonusArray[1] = BonusText;
               Bonus += 0.25 * Obj.MinVincita * (1 - Math.abs(TargetMetallo - Metallo));
            };
            if (CheckMetallo < Tolleranza) Explosion = true;
            else Checking = 3;
         };
      };
      //CHECK RILIEVO
      if (Explosion == false && Enabled == true && Checking == 3) {
         if (CheckRilievo < (1 - Math.abs(TargetRilievo - Rilievo)) * 100) CheckRilievo += SpeedCheck;
         if (CheckRilievo >= (1 - Math.abs(TargetRilievo - Rilievo)) * 100) {
            //ASSEGNA IL BONUS SE IL VALORE È UGUALE O MAGGIORE DEL MASSIMO LIVELLO
            if ((1 - Math.abs(TargetRilievo - Rilievo)) * 100 >= Economy.CombinaColoreMaxTolleranza) {
               BonusArray[2] = BonusText;
               Bonus += 0.25 * Obj.MinVincita * (1 - Math.abs(TargetRilievo - Rilievo));
            };
            if (CheckRilievo < Tolleranza) Explosion = true;
            else Checking = 4;
         };
      };
      //CHECK LUCE
      if (Explosion == false && Enabled == true && Checking == 4) {
         if (CheckLuce < (1 - Math.abs(TargetLuce - Luce)) * 100) CheckLuce += SpeedCheck;
         if (CheckLuce >= (1 - Math.abs(TargetLuce - Luce)) * 100) {
            //ASSEGNA IL BONUS SE IL VALORE È UGUALE O MAGGIORE DEL MASSIMO LIVELLO
            if ((1 - Math.abs(TargetLuce - Luce)) * 100 >= Economy.CombinaColoreMaxTolleranza) {
               BonusArray[3] = BonusText;
               Bonus += 0.25 * Obj.MinVincita * (1 - Math.abs(TargetLuce - Luce));
            };
            if (CheckLuce < Tolleranza) Explosion = true;
            else Checking = 5;
         };
      };
      //MEDIA E VINCITA
      if (Explosion == false && Enabled == true && Checking == 5) {
         if (CheckMedia < (CheckColore + CheckMetallo + CheckRilievo + CheckLuce) / 4) CheckMedia += SpeedCheck;
         if (CheckMedia >= (CheckColore + CheckMetallo + CheckRilievo + CheckLuce) / 4) {
            VincitaCalcolata = Number(Math.floor(Bonus + VincitaMax * (CheckMedia / 100))).toFixed(0);
            VincitaStep = VincitaCalcolata / (3000 / 100);
            if (CheckVincita < VincitaCalcolata) CheckVincita += Number(VincitaStep.toFixed(0));
            if (CheckVincita >= VincitaCalcolata) {
               if (VincitaDelay == false) {
                  if (GameLevel < MaxLevel) GameLevel++;
                  SaveSystem.setItem(`CombinaColoreLevel`, GameLevel);
                  setTimeout(() => {
                     Vincita = VincitaCalcolata;
                  }, 1000);
                  VincitaDelay = true;
               };
            };
         };
      };
      CombinaColoreHUDCanvas.render();
   }, 100);


   function Enable() {
      Enabled = true;
      Checking = 0;       //CONTATORE FASE DI CHECKING
      CheckColore = 0;
      CheckMetallo = 0;
      CheckRilievo = 0;
      CheckLuce = 0;
      CheckMedia = 0;
      ResetRandomTarget();
      Background.style.display = "none";
      CombinaColoreHUDCanvas.showButton(0, true);
   };

   //ESEGUI IL CHECK
   function Check() {
      Checking = 1;     //INIZIA LA FASE DI CHECKING
   };

   function SetColor(Array, Val) {    //SETTA LE TRE COMPONENTI DEL COLORE SECONDO LA FORMULA
      Array[0] = Val;
      Array[1] = 1.0;
      Array[2] = 0.5 * Val + 0.25;
   };

   //RESETTA LA SCENA E IL TARGET
   function ResetRandomTarget() {
      Tolleranza = Economy.CombinaColoreMinTolleranza + (Economy.CombinaColoreMaxTolleranza - Economy.CombinaColoreMinTolleranza) * (GameLevel / MaxLevel);
      VincitaMax = Obj.MinVincita + (GameLevel / MaxLevel) * (Obj.MaxVincita - Obj.MinVincita);
      CombinaColoreHUDCanvas.setButtonText(0, `LEVEL: ${GameLevel + 1}
         Tolleranza: ${Tolleranza.toFixed(1)}%
         Vincita Max ${Math.floor(VincitaMax)}`);
      SferaOttenuta.scale.setScalar(1);
      //COLORE
      Colore = 0;
      TargetColore = Math.random();
      const TargetHSL = [0, 0, 0];
      SetColor(TargetHSL, TargetColore);
      SetColor(LiquidoHSL, 0);
      ColorMat.color.setHSL(LiquidoHSL[0], LiquidoHSL[1], LiquidoHSL[2]);
      LiquidoColor.scale.y = 1;
      LiquidoColor.position.y = PosContColore[1];
      //METALLO
      Metallo = 0;
      TargetMetallo = Math.random();
      LiquidoMetal.scale.y = 1;
      LiquidoMetal.position.y = PosContMetallo[1];
      //RILIEVO
      Rilievo = 0;
      TargetRilievo = Math.random();
      RilievoMat.normalScale.set(1, 1);
      LiquidoRilievo.scale.y = 1;
      LiquidoRilievo.position.y = PosContRilievo[1];
      //LUCE
      Luce = 0;
      TargetLuce = Math.random();
      LiquidoLuce.scale.y = 1;
      LiquidoLuce.position.y = PosContLuce[1];
      //POSIZIONE
      SferaOttenuta.position.set(-7, 1, -5);
      SferaOttenuta.rotation.set(0, 0, 0);
      SferaOttenuta.scale.set(1, 1, 1);
      //MATERIALE USER
      UserMat.color.setHSL(LiquidoHSL[0], LiquidoHSL[1], LiquidoHSL[2]);
      UserMat.normalScale.set(0, 0);
      UserMat.displacementScale = 0;
      UserMat.roughness = 1;
      UserMat.metalness = 0;
      //MATERIALE TARGET
      TargetMat.color.setHSL(TargetHSL[0], TargetHSL[1], TargetHSL[2]);
      TargetMat.normalScale.set(TargetRilievo, TargetRilievo);
      TargetMat.roughness = 1 - TargetMetallo;
      TargetMat.metalness = TargetMetallo;
      TargetMat.displacementScale = TargetRilievo * 3;

      CombinaColoreHUDCanvas.render();
   };

   function Reset() {
      GlobalVar.GameEnabled = false;
      Enabled = false;
      Vincita = 0;
      VincitaDelay = false;
      Bonus = 0;
      BonusArray = ["", "", "", ""];
      VincitaCalcolata = 0;
      Braccio.Reset();     //RESETTA IL BRACCIO
      Background.style.display = "block";    //ABILITA IL BACKGROUND SFOCATO
      CombinaColoreHUDCanvas.showButton(0, false);       //TESTO GIOCO
      CombinaColoreHUDCanvas.showButton(1, false);       //TESTO CHECK
      CombinaColoreHUDCanvas.render();
   };

   CombinaColoreHUDCanvas.render();

   return { Enable, UpdateGame, Check, Reset, get Vincita() { return Vincita; }, get Target() { return Braccio.PinzaTarget; } };
};
async function G0_Telescopio(Models) {    //432
   //HUD
   const TelescopioHUDCanvas = S0_GenerateHUDCanvas(TelescopioHUDObj);

   /*PARAMETRI*/
   //#region
   const ComVel = 0.01;               //VELOCITÀ ROTAZINE TELESCOPIO
   const MinVelZoomCoeff = 0.05;          //COEFFICIENTE DI MINIMA VELOCITÀ DATA DALLO ZOOM MASSIMO
   const CoeffFocus = 30;
   const correctionStrength = 0.6;  //forza di correzione
   const MinAngle = 0;                //MINIMO ANGOLO DI MOVIMENTO DEL TELESCOPIO
   const MaxAngle = Math.PI / 4;      //MASSIMO ANGOLO DI MOVIMENTO DEL TELESCOPIO
   const MinTargetAngleX = Math.PI / 40;                //MINIMO ANGOLO RANDOM DEL TARGET
   const MaxTargetAngleX = Math.PI / 4 - Math.PI / 40;      //MASSIMO ANGOLO RANDOM DEL TARGET
   const CoeffLens = 10000;       //COEFFICIENTE DI POSIZIONE IMMAGINE NEL MIRINO
   const MinZoom = 0.2;
   const MaxZoom = 1;
   //#endregion

   /*VARIABILI*/
   //#region
   let MaxVincita = CalcMoneyReward(Economy.TelescopioMaxVincita);
   let NumTelescope = 0;   //NUMERO DEL TELESCOPIO

   if (GlobalVar.PlanetOrbit == 1 && GlobalVar.MoonOrbit == 3) NumTelescope = 0;                                   //MERCURIO - TS-PAN
   if (GlobalVar.PlanetOrbit == 3 && GlobalVar.MoonOrbit == 5) NumTelescope = 1;                                   //TERRA - TS-DIONISO
   if (GlobalVar.PlanetOrbit == 5 && GlobalVar.MoonOrbit == 4 && GlobalVar.SubMoonOrbit == 1) NumTelescope = 2;    //GIOVE - CALLISTO - TS-NYMPH
   if (GlobalVar.PlanetOrbit == 6 && GlobalVar.MoonOrbit == 7 && GlobalVar.SubMoonOrbit == 1) NumTelescope = 3;    //SATURNO - IAPETUS - TS-ATLAS
   if (GlobalVar.PlanetOrbit == 7 && GlobalVar.MoonOrbit == 3 && GlobalVar.SubMoonOrbit == 1) NumTelescope = 4;    //URANO - UMBRIEL - TS-NOCTURNA
   if (GlobalVar.PlanetOrbit == 8 && GlobalVar.MoonOrbit == 1 && GlobalVar.SubMoonOrbit == 1) NumTelescope = 5;    //NETTUNO - TRITON - TS-AMPHITRITE
   if (GlobalVar.PlanetOrbit == 10 && GlobalVar.MoonOrbit == 2) NumTelescope = 6;                                  //CERERE - TS-PROSEPINA

   const Size = [];
   let Perc = 0;             //PERCENTUALE DI COMPLETAMENTO IMMAGINE ATTUALE
   for (let a = 0; a < 24; a++) {
      Size[a] = Number(SaveSystem.getItem(`Telescopio${NumTelescope}Img${a}`));
      Perc += Size[a];
   };
   Perc = Perc / 24;

   let Shots = Economy.TelescopioShots;
   let Vincita = 0;
   let VincitaDelay = false;        //ABILITAZIONE AL RITARDO DI ASSEGNAZIONE DELLA VINCITA
   let Focus = 0;
   let Zoom = 0;
   let CorrectZoom = 0;            //CORREZIONE DELLA VELOCITÀ DEL MOVIMENTO DEL TELESCOPIO DATO DALLO ZOOM
   let EnableCT = false;     //ABILITAZIONE AL COUNTDOWN
   let AngleNormY = 0;              //ANGOLO Y DEL TELESCOPIO NORMALIZZATO A RADIANTI ASSOLUTI
   let AngleNormX = 0;              //ANGOLO X DEL TELESCOPIO NORMALIZZATO A RADIANTI ASSOLUTI
   let AngleRelY = 0;               //ANGOLO RELATIVO Y TRA IL TELESCOPIO E IL TARGET
   let AngleRelX = 0;               //ANGOLO RELATIVO X TRA IL TELESCOPIO E IL TARGET
   let InitFocus = (Math.random() * 2 - 1) * CoeffFocus;                 //FOCUS CASUALE INIZIALE
   let ShotPosX = 0;                //POSIZIONE X DELLO SHOT RELATIVA ALL'IMMAGINE
   let ShotPosY = 0;                //POSIZIONE Y DELLO SHOT RELATIVA ALL'IMMAGINE
   let ShotIndex = 0;               //INDICE DELLA TABELLA DELLO SHOT
   let ShotFocus = 0;               //VALORE DA 0 A 1 DELLA MESSA A FUOCO DELLO SHOT
   let AvvisoText = `Inquadra la porzione di immagine che ti serve, porta lo zoom al massimo, regola il focus e scatta la foto, hai a disposizione ${Shots} scatti`;
   let Shootable = false;          //POSSIBILITÀ DI EFFETTUARE LO SCATTO
   //#endregion

   MicEnginereturn.CameraGroup.position.set(-15, 4, -5);
   MicEnginereturn.CameraGroup.rotation.set(0, -Math.PI / 2, 0);

   /*CREAZIONE OGGETTI 3D*/
   //#region
   //GRUPPO BRACCIO TELESCOPIO
   const Braccio = MicEnginereturn.Objects.E3_Group();
   MicEnginereturn.Scene.add(Braccio);
   MicEnginereturn.Scene.add(Models.BraccioCorto1);
   MicEnginereturn.Scene.add(Models.BraccioCorto2);
   MicEnginereturn.Scene.add(Models.BraccioLungo);

   //GRUPPO TELESCOPIO
   const yawGroup = MicEnginereturn.Objects.E3_Group();    //YAW (sinistra-destra)
   const pitchGroup = MicEnginereturn.Objects.E3_Group();  //PITCH (su-giù)
   pitchGroup.rotation.set(0, 0.3, 0);
   pitchGroup.add(Models.TuboMobile1);
   pitchGroup.add(Models.TuboMobile2);
   yawGroup.add(pitchGroup);
   MicEnginereturn.Scene.add(yawGroup);
   pitchGroup.add(MicEnginereturn.CameraGroup);

   //CENTRO
   const CenterGroup = MicEnginereturn.Objects.E3_GroupCanvasSprite({
      GroupName: "CenterGroup",
      SpriteName: "CenterSprite",
      Sprite: Sprite.Target[4],
      SpritePos: { x: 0, y: 0, z: -900 },
      Opacity: 1,
   });
   CenterGroup.children[0].scale.setScalar(50);
   CenterGroup.rotation.set(0, -0.3, 0);
   MicEnginereturn.CameraGroup.add(CenterGroup);

   //TARGET
   const TargetGroup = MicEnginereturn.Objects.E3_GroupCanvasSprite({
      GroupName: "TargetGroup",
      SpriteName: "TargetSole",
      Sprite: Sprite.Target[4],
      SpritePos: { x: 0, y: 0, z: -900 },
      Opacity: 1,
   });
   TargetGroup.position.set(-15, 4, -5)
   TargetGroup.children[0].scale.setScalar(50);
   MicEnginereturn.Scene.add(TargetGroup);

   function RandomRotTarget() {
      let RandomRotY = Math.random() * (Math.PI * 2);
      let RandomRotX = MinTargetAngleX + Math.random() * (MaxTargetAngleX - MinTargetAngleX);
      TargetGroup.rotation.order = "YXZ";
      TargetGroup.rotation.set(RandomRotX, RandomRotY, 0);
   };
   function angleDiffSigned(a, b) {
      const TWO_PI = Math.PI * 2;
      let diff = (b - a) % TWO_PI;
      if (diff > Math.PI) diff -= TWO_PI;
      if (diff < -Math.PI) diff += TWO_PI;
      return diff;
   };

   RandomRotTarget();

   //LASER
   const laser = MicEnginereturn.VarObject.E3_GenericLine({
      Color: 0x0000ff,
      Linewidth: 10,
      StartLine: {
         x: 0,
         y: 0,
         z: 0
      },
      EndLine: {
         x: 1000,
         y: 0,
         z: 0
      }
   });
   pitchGroup.add(laser);
   laser.visible = false;
   //#endregion

   //TESTO GIOCO
   TelescopioHUDCanvas.setButtonText(0, `Shots: ${Shots}
      ${AvvisoText}`);

   //MIRINO
   function createMagnifierReticle(Obj) {
      const canvas = document.createElement('canvas');
      const size = Obj.diameter + 60;
      canvas.width = size;
      canvas.height = size;
      canvas.style.position = 'absolute';
      canvas.style.left = `${Obj.left - size / 2}px`;
      canvas.style.top = `${Obj.top - size / 2}px`;
      canvas.style.pointerEvents = 'none';
      canvas.style.zIndex = '5';

      const ctx = canvas.getContext('2d');

      const img = new Image();
      img.src = Obj.Url;

      const state = {
         ImageTop: Obj.ImageTop,
         ImageLeft: Obj.ImageLeft,
         blur: Obj.blur,
         CursorX: 0,
         CursorZoomY: 0,
      };

      function draw() {
         ctx.clearRect(0, 0, size, size);

         const cx = size / 2;
         const cy = size / 2;
         const r = Obj.diameter / 2;

         //=== LENTE (CLIP CIRCOLARE) ===
         ctx.save();
         ctx.beginPath();
         ctx.arc(cx, cy, r, 0, Math.PI * 2);
         ctx.clip();

         //SFONDO NERO
         ctx.fillStyle = 'black';
         ctx.fillRect(0, 0, size, size);

         //APPLICAZIONE DEL FILTRO BLUR
         ctx.filter = `blur(${Math.abs(state.blur + state.ImageBlur)}px)`;

         //APPLICAZIONE DELLO ZOOM
         const zoomFactor = Obj.ImageZoomAt0 + (-state.CursorZoomY) * (Obj.ImageZoomAtMinus1 - Obj.ImageZoomAt0);
         const zoomedSizeX = Obj.ImageSizeX * zoomFactor;
         const zoomedSizeY = Obj.ImageSizeY * zoomFactor;

         //DISEGNO IMMAGINE
         ctx.drawImage(
            img,
            cx - zoomedSizeX / 2 + state.ImageLeft * zoomFactor,
            cy - zoomedSizeY / 2 + state.ImageTop * zoomFactor,
            zoomedSizeX,
            zoomedSizeY
         );

         //=== GRIGLIA 6x4 ===
         ctx.strokeStyle = 'rgba(255,255,255,0.5)'; //colore bianco semi-trasparente
         ctx.lineWidth = 2;

         //larghezza e altezza delle celle
         const cellWidth = zoomedSizeX / 6;
         const cellHeight = zoomedSizeY / 4;

         //righe verticali
         for (let i = 1; i < 6; i++) {
            const x = cx - zoomedSizeX / 2 + state.ImageLeft * zoomFactor + i * cellWidth;
            ctx.beginPath();
            ctx.moveTo(x, cy - zoomedSizeY / 2 + state.ImageTop * zoomFactor);
            ctx.lineTo(x, cy + zoomedSizeY / 2 + state.ImageTop * zoomFactor);
            ctx.stroke();
         }

         //righe orizzontali
         for (let j = 1; j < 4; j++) {
            const y = cy - zoomedSizeY / 2 + state.ImageTop * zoomFactor + j * cellHeight;
            ctx.beginPath();
            ctx.moveTo(cx - zoomedSizeX / 2 + state.ImageLeft * zoomFactor, y);
            ctx.lineTo(cx + zoomedSizeX / 2 + state.ImageLeft * zoomFactor, y);
            ctx.stroke();
         }
         ctx.filter = 'none';

         ctx.restore();

         //=== BORDO LENTE ===
         ctx.beginPath();
         ctx.arc(cx, cy, r, 0, Math.PI * 2);
         ctx.lineWidth = Obj.borderWidth;
         ctx.strokeStyle = Obj.borderColor;
         ctx.stroke();

         //=== CROCE CENTRALE ===
         ctx.strokeStyle = Obj.borderColor;
         ctx.lineWidth = Obj.borderWidth / 2;

         ctx.beginPath();
         ctx.moveTo(cx - 15, cy);
         ctx.lineTo(cx + 15, cy);
         ctx.stroke();

         ctx.beginPath();
         ctx.moveTo(cx, cy - 15);
         ctx.lineTo(cx, cy + 15);
         ctx.stroke();

         //=== BARRA FOCUS ORIZZONTALE ===
         const barY = cy + r + 20;
         ctx.fillStyle = Obj.borderColor;
         ctx.fillRect(cx - r, barY, Obj.diameter, Obj.borderWidth / 2);

         for (let i = 1; i <= 3; i++) {
            ctx.fillRect(
               cx - r + i * (Obj.diameter / 4) - Obj.borderWidth / 4,
               barY - 7,
               Obj.borderWidth / 2,
               15
            );
         }

         //=== CURSORE FOCUS ===
         const cursorX = cx - r + ((state.CursorX + 1) / 2) * Obj.diameter;
         ctx.fillStyle = 'blue';
         ctx.fillRect(
            cursorX - Obj.borderWidth / 2,
            barY - 10,
            Obj.borderWidth,
            20
         );

         //=== BARRA ZOOM VERTICALE ===
         const barX = cx + r + 20;
         ctx.fillStyle = Obj.borderColor;
         ctx.fillRect(barX, cy - r, Obj.borderWidth / 2, Obj.diameter);

         //=== CURSORE ZOOM ===
         const cursorY = cy + Obj.diameter / 2 - r + Obj.diameter / 2 + (state.CursorZoomY) * (Obj.diameter);
         ctx.fillStyle = 'red';
         ctx.fillRect(
            barX - 10,
            cursorY - Obj.borderWidth / 2,
            20,
            Obj.borderWidth
         );
      };

      canvas.update = function (Obj2) {
         state.ImageTop = Obj2.ImageTop;
         state.ImageLeft = Obj2.ImageLeft;
         state.ImageBlur = Obj2.ImageBlur;
         state.blur = Obj2.blur;
         state.CursorX = Obj2.CursorX;
         state.CursorZoomY = Obj2.CursorZoomY;
         draw();
      };

      img.onload = draw;

      document.body.appendChild(canvas);
      return canvas;
   };

   const lens = createMagnifierReticle({
      diameter: 250,       //150
      borderColor: '#585858ff',
      borderWidth: 5,
      top: 150,               //120
      left: 250,              //250
      blur: 0,
      ImageSizeX: 1920,             //LARGHEZZA IMMAGINE
      ImageSizeY: 1080,             //ALTEZZA IMMAGINE
      ImageTop: 0,               //POSIZIONE INIZIALE IMMAGINE
      ImageLeft: 0,              //POSIZIONE INIZIALE IMMAGINE
      ImageZoomAt0: MinZoom,     //zoom quando CursorZoomY = 0
      ImageZoomAtMinus1: MaxZoom, //zoom quando CursorZoomY = -1
      Url: Sprite.Telescope[NumTelescope],
   });

   //BACKGROUND TRASPARENTE SFOCATO
   const Background = BackgroundElement();

   function normalizeAngle0To2PI(angle) {
      const TWO_PI = Math.PI * 2;
      return ((angle % TWO_PI) + TWO_PI) % TWO_PI;
   };

   //COMANDI X E Y -100 0 +100
   function UpdateGame(ComX, ComY, ComZ, ComW, delta) {
      if (EnableCT === true) {
         //Correggi con il gamepad
         Focus -= ComZ / 100 * correctionStrength * delta;
         Zoom -= ComW / 100 * correctionStrength * delta;

         //Clamp tra -1 e 1
         Focus = Math.max(-1, Math.min(1, Focus));
         Zoom = Math.max(-1, Math.min(0, Zoom));
         CorrectZoom = 1 + (1 - MinVelZoomCoeff) * Zoom;

         //MOVIMENTO TELESCOPIO
         yawGroup.rotation.y += CorrectZoom * ComVel * -ComX * delta;
         if (ComY < 0 && pitchGroup.rotation.z >= MinAngle) pitchGroup.rotation.z += CorrectZoom * ComVel * ComY * delta;
         if (ComY > 0 && pitchGroup.rotation.z < MaxAngle) pitchGroup.rotation.z += CorrectZoom * ComVel * ComY * delta;
         Braccio.rotation.y = yawGroup.rotation.y;

         //NORMALIZZAZIONE DEGLI ANGOLI DEL TELESCOPIO
         AngleNormY = normalizeAngle0To2PI(yawGroup.rotation.y - Math.PI / 2);
         AngleNormX = normalizeAngle0To2PI(pitchGroup.rotation.z);
         //CALCOLO DELL'ANGOLO RELATIVO TRA IL TELESCOPIO E IL TARGET
         AngleRelY = angleDiffSigned(TargetGroup.rotation.y, AngleNormY);
         AngleRelX = angleDiffSigned(TargetGroup.rotation.x, AngleNormX);

         //AGGIORNAMENTO MIRINO
         lens.update({
            ImageTop: AngleRelX * CoeffLens,
            ImageLeft: AngleRelY * CoeffLens,
            ImageBlur: InitFocus,                          //BLUR NASCOSTO DELL'IMMAGINE DA RAGGIUNGERE
            blur: Focus * CoeffFocus,
            CursorX: Focus,          //-1 0 +1
            CursorZoomY: Zoom,          //0 -1
         });

         if (Math.abs(AngleRelY * CoeffLens) > 1920 / 2 || Math.abs(AngleRelX * CoeffLens) > 1080 / 2 ||//DIFFERENZA TRA FOCUS REALE E FOCUS IMPOSTATO
            Zoom > -1 ||                                                                                //ZOOM NON AL MASSIMO
            Math.abs(Focus * CoeffFocus + InitFocus) > 2) {                                             //IMMAGINE NON A FUOCO
            Shootable = false;
         }
         else Shootable = true;

      }
      else {
         yawGroup.rotation.y = 0;
         pitchGroup.rotation.z = 0;
         Braccio.rotation.y = yawGroup.rotation.y;
      };
   };

   function Enable() {
      EnableCT = true;     //ABILITAZIONE AL COUNTDOWN
      Background.style.visibility = "hidden";
      TelescopioHUDCanvas.showButton(0, true);
      TelescopioHUDCanvas.render();
   };

   function Reset() {
      Vincita = 0;
      Background.style.visibility = "visible";
      EnableCT = false;     //ABILITAZIONE AL COUNTDOWN
      TelescopioHUDCanvas.showButton(0, false);
      RandomRotTarget();
      InitFocus = (Math.random() * 2 - 1) * CoeffFocus;
      Shots = Economy.TelescopioShots;
      VincitaDelay = false;
      Zoom = 0;
      Focus = 0;
      AvvisoText = `${Testi.Minigames.Telescopio.Avviso[GlobalVar.Language]} ${Shots} ${Testi.Minigames.Telescopio.Shots[GlobalVar.Language]}`;
      TelescopioHUDCanvas.setButtonText(0, `Shots: ${Shots}
      ${AvvisoText}`);
      TelescopioHUDCanvas.render();
   };

   function Shot() {
      console.log(Shots);
      if (Shots >= 1) {
         //POSIZIONE DEL TELESCOPIO IN PIXEL RISPETTO AL CENTRO DELL'IMMAGINE
         ShotPosX = (1920 / 2) - AngleRelY * CoeffLens;
         ShotPosY = (1080 / 2) - AngleRelX * CoeffLens;
         ShotIndex = G0_SnapIndexToGrid(ShotPosX, ShotPosY, 1920, 1080, 6, 4);
         Shots--;
         /*DIFFERENZA TRA FOCUS REALE E FOCUS IMPOSTATO*/
         //Allinea l'immagine
         if (Math.abs(AngleRelY * CoeffLens) > 1920 / 2 || Math.abs(AngleRelX * CoeffLens) > 1080 / 2) {
            AvvisoText = "Allinea l'immagine";
            TelescopioHUDCanvas.setButtonText(0, `Shots: ${Shots}
      ${AvvisoText}`);
            TelescopioHUDCanvas.render();
         }
         //Porta lo zoom al massimo
         else if (Zoom > -1) {
            AvvisoText = "Porta lo zoom al massimo";
            TelescopioHUDCanvas.setButtonText(0, `Shots: ${Shots}
      ${AvvisoText}`);
            TelescopioHUDCanvas.render();
         }
         //Immagine non a fuoco
         else if (Math.abs(Focus * CoeffFocus + InitFocus) > 2) {
            AvvisoText = "Immagine non a fuoco";
            TelescopioHUDCanvas.setButtonText(0, `Shots: ${Shots}
      ${AvvisoText}`);
            TelescopioHUDCanvas.render();
         }
         //IMMAGINE A FUOCO E ZOOM AL MASSIMO
         else {
            ShotFocus = (2 - Math.abs(Focus * CoeffFocus + InitFocus)) / 2;
            //SE IL VALORE SALVATO È INFERIORE AGGIORNALO
            if (Size[ShotIndex] < ShotFocus) {
               Size[ShotIndex] = ShotFocus;
               //AGGIORNAMENTO PERCENTUALE IMMAGINE
               for (let a = 0; a < 24; a++) {
                  Perc += Size[a];
               };
               Perc = Perc / 24;
               AvvisoText = `Immagine aggiornata, Accuratezza ${(ShotFocus * 100).toFixed(0)}%
            Immagine completata ${(Perc * 100).toFixed(0)}%
            Vincita attuale ${(Perc * MaxVincita).toFixed(0)}`;
               TelescopioHUDCanvas.setButtonText(0, `Shots: ${Shots}
      ${AvvisoText}`);
               TelescopioHUDCanvas.render();
            }
            else {
               AvvisoText = "Accuratezza minore di quella salvata, ripetere";
               TelescopioHUDCanvas.setButtonText(0, `Shots: ${Shots}
      ${AvvisoText}`);
               TelescopioHUDCanvas.render();
            };
         };
         laser.visible = true;
         Focus = 0;

         setTimeout(() => {
            laser.visible = false;
         }, 100);

         //SHOT TERMINATI
         if (Shots == 0) {
            if (VincitaDelay == false) {
               TelescopioHUDCanvas.render();
               setTimeout(() => {
                  Vincita = 1 + Perc * MaxVincita;

                  //SALVA NEL SAVESYSYEM
                  for (let a = 0; a < 24; a++) {
                     SaveSystem.setItem(`Telescopio${NumTelescope}Img${a}`, Size[a]);
                  };
               }, 1000);
               VincitaDelay = true;
            };
         };
      };
   };

   TelescopioHUDCanvas.render();

   return { Enable, UpdateGame, Reset, Shot, get Vincita() { return Vincita; }, get Shootable() { return Shootable; } };
};
async function G0_Carroponte(Models) {    //432 maxlevel
   let GameLevel = Number(SaveSystem.getItem(`CarroponteLevel`));
   const MaxLevel = Economy.CarroponteMaxLevel;
   let Barre = GameLevel + 1;
   //HUD
   function G1_UpdateBarHud() {
      Barre = GameLevel + 1;
      for (let i = 0; i < 10; i++) {
         CarroponteHUDObj.Barre = 10;
         CarroponteHUDObj.BarSize[i + 1] = CarroponteHUDObj.BarSize[0];
         CarroponteHUDObj.BarPos[i + 1] = CarroponteHUDObj.BarPos[0];
         CarroponteHUDObj.BarColor[i + 1] = CarroponteHUDObj.BarColor[0];
         CarroponteHUDObj.BarColorValue[i + 1] = CarroponteHUDObj.BarColorValue[0];
         CarroponteHUDObj.BarRotate[i + 1] = CarroponteHUDObj.BarRotate[0];
      };
   };
   G1_UpdateBarHud();

   const CarroponteHUDCanvas = S0_GenerateHUDCanvas(CarroponteHUDObj);

   /*PARAMETRI*/
   //#region
   const MaxAttesa = 90;    //SECONDI DI ATTESA MASSIMI OLTRE CUI NON PASSA DI LIVELLO
   const MinAttesa = 40;    //SECONDI DI ATTESA MINIMI ENTRO CUI SI HA UN BONUS
   const TolleranzaPresa = 1.5;
   const Gravità = 0.2;
   const DimContainer = {
      Lung: 6,
      Alt: 3,
      Larg: 3,
   };
   const Piano = {
      Larg: 50,
      Lung: 50,
   };
   const Braccio = {
      Discesa: -6,
      Velocità: 0.1
   };
   const DimCarroponte = {
      Altezza: 11.5,
      Accelerazione: 4,
      Frizione: 0.85,     //<1
      PosX: -15,
      PosZ: 15
   };
   const VelRotGanci = 0.5;                          //VELOCITÀ ROTAZIONE GANCI
   const VelNastri = 1.5;                      //VELOCITÀ NASTRI
   const FinestreDiPosizione = [                //POSIZIONI MINIME E MASSIME DI X E Z PER ACCETTARE IL CONTAINER SU OGNI NASTRO
      { x1: -9, x2: -2, z1: -13, z2: -17 },     //NASTRO 1
      { x1: 11, x2: 18, z1: 2, z2: -2 },        //NASTRO 2
      { x1: -18, x2: -11, z1: 17, z2: 13 },     //NASTRO 3
      { x1: 16, x2: 22, z1: 17, z2: 13 },       //NASTRO PARTENZA
   ];
   const PosXArrivo = [-18, 17, -17, 7, 30];
   const PosStazioni = [                        //POSIZIONI DI ATTIVAZIONE ANIMAZIONI STAZIONI
      { x1: 2, x2: 9, z1: -13, z2: -17 },     //NASTRO 1 STAZIONE 1
      { x1: 2, x2: 9, z1: 2, z2: -2 },     //NASTRO 2 STAZIONE 2
      { x1: -9, x2: -2, z1: 2, z2: -2 },     //NASTRO 2 STAZIONE 3
      { x1: -9, x2: -2, z1: 17, z2: 13 },     //NASTRO 3 STAZIONE 4
   ];
   const VelFans = 10;                                  //VELOCITÀ ROTAZIONE VENTOLE
   const RotXRobots = 0.7;
   const VelRobots = 2;
   const AttesaPaccoFermo = [];
   for (let i = 0; i < GameLevel + 1; i++) {
      AttesaPaccoFermo[i] = 0;
   };
   //#endregion

   /*VARIABILI*/
   //#region
   let BraccioBasso = false;
   let isArmLowering = false;
   let ContainerAllineato = false;
   let ContainerPreso = false;
   let Dintanze = [];                  //ARRAY DI DISTANZE TRA IL CARROPONTE E I CONTAINER
   let Indice = 0;                       //INDICE DEL CONTAINER PIÙ VICINO
   let Money = 0;
   let Bonus = 0;
   let Vincita = 0;
   let VincitaDelay = false;        //ABILITAZIONE AL RITARDO DI ASSEGNAZIONE DELLA VINCITA
   let GameEnable = false;
   let RotGanci = Math.PI / 8;                     //VALORE DI ROTAZIONE GANCI
   let PresenzaCont = [-1, -1, -1, -1, -1];   //ARRAY DI PRESENZA CONTAINER SU OGNI NASTRO
   let Lavorazioni = [];    //ARRAY DELLE LAVORAZIONI ESEGUITE PER OGNI CONTAINER CREATO
   let PosBarre;        //ARRAY CON LE POSIZIONI DINAMICHE DELLE BARRE IN BASE AI CONTAINER ATTIVI
   //CREA UN ARRAY DELLE LAVORAZIONI ESEGUITE PER OGNI CONTAINER CREATO, 0 1 2 LAVORAZIONI, 3  CONTAINER PRESENTE NELLA SCENA
   for (let i = 0; i < GameLevel + 1; i++) {
      Lavorazioni[i] = [false, false, false, false];
   }
   const LavorStazioni = [false, false, false, false];
   let RotFans = 0;                          //ROTAZIONE VENTOLE
   let RotRobots = 0;                 //ROTAZIONE ROBOTS
   //#endregion

   //TESTO GIOCO
   CarroponteHUDCanvas.setButtonText(0, `LEVEL: ${GameLevel + 1}
     WIN: ${Money.toFixed(0)}
     BONUS: ${Bonus.toFixed(0)} `);
   CarroponteHUDCanvas.showButton(0, false);

   function computeXPositions(N, L, D) {
      const positions = [];

      if (N === 1) {
         positions.push(50);
         return positions;
      }

      const availableSpace = 100 - 2 * D;
      const totalObjectsSpace = N * L;
      const gap = (availableSpace - totalObjectsSpace) / (N - 1);

      for (let i = 0; i < N; i++) {
         const x = D + (L / 2) + i * (L + gap);
         positions.push(x);
      }

      return positions;
   };

   /*-------------------------------CREAZIONE GEOMETRIE E MATERIALI----------------------------------*/
   //#region
   //CARROPONTE
   const Carroponte = MicEnginereturn.Objects.E3_Group();
   Carroponte.add(Models.Carroponte);
   Carroponte.position.set(DimCarroponte.PosX, DimCarroponte.Altezza, DimCarroponte.PosZ);
   MicEnginereturn.Scene.add(Carroponte);

   //BRACCIO
   const arm = MicEnginereturn.Objects.E3_Group();
   arm.add(Models.Braccio);
   arm.position.set(0, 0, 0); //Posizionamento iniziale in alto
   Carroponte.add(arm);

   arm.children[0].children[0].children[1].rotation.z = RotGanci;    //ROTAZIONE INIZIALE GANCIO DX
   arm.children[0].children[0].children[2].rotation.z = -RotGanci;    //ROTAZIONE INIZIALE GANCIO SX

   //GRUPPO CONTAINER
   let Container = [];
   Models.Container.visible = false;

   //NUMERAZIONE NASTRI
   const NumPlane = [];         //PIANI NUMERAZIONE NASTRI
   for (let i = 0; i < 4; i++) {
      const Stamp = MicEnginereturn.Materials.E3_StampCanvas({
         Width: 300,              //LARGHEZZA MESH PIANO
         Height: 300,             //ALTEZZA MESH PIANO
         Font: 300,              //GRANDEZZA FONT IN PIXEL
         Color: "#ffe100ff",       //COLORE FONT
         InitGroup: "",           //GRUPPO INIZIALE
         InitNum: "",             //NUMERO INIZIALE
      }, "", i + 1);
      NumPlane[i] = MicEnginereturn.Geometries.E3_GeoPlane(3, 6, 1, 1);
      MicEnginereturn.Objects.E3_GenMesh(MicEnginereturn.Scene, NumPlane[i], Stamp, [FinestreDiPosizione[i].x1 + 3, 3, FinestreDiPosizione[i].z1 - 3], [-Math.PI / 2, 0, 0], [1, 1, 1], "StampCanvas", true, false);
   };
   //#endregion

   /*-------------------------------MODIFICA DEGLI OGGETTI GENERATI----------------------------------*/
   //#region
   //BAGLIORE
   Models.Bagliore.material.opacity = 0.5;
   Models.Bagliore.material.transparent = true;
   Models.Bagliore.visible = false;
   //ROBOT ALTO
   Models.Robots.children[0].children[0].children[0].rotation.x = -0.5;
   Models.Robots.children[0].children[0].children[1].rotation.x = 0.7;
   Models.Robots.children[0].children[0].children[1].position.y = 2;
   Models.Robots.children[0].children[0].children[2].rotation.x = 1.5;
   Models.Robots.children[0].children[0].children[2].position.y = 3.4;
   Models.Robots.children[0].children[0].children[2].position.z = 2.4;
   //ROBOT BASSO
   Models.Robots.children[1].children[0].children[0].rotation.x = 0.5;
   Models.Robots.children[1].children[0].children[1].rotation.x = -0.7;
   Models.Robots.children[1].children[0].children[1].position.y = 2;
   Models.Robots.children[1].children[0].children[2].rotation.x = -1.5;
   Models.Robots.children[1].children[0].children[2].position.y = 3.4;
   Models.Robots.children[1].children[0].children[2].position.z = -2.4;

   //SCINTILLE
   Models.Scintille.visible = false;
   //LUCE1-2-3 MATERIALE
   Models.Luce1.material.color.r = 0;
   Models.Luce1.material.color.g = 1;
   Models.Luce1.material.color.b = 0;
   //LUCE1
   Models.Luce1.visible = false;
   //LUCE2
   Models.Luce2.visible = false;
   //LUCE3
   Models.Luce3.visible = false;
   //#endregion

   //CAMERA
   MicEnginereturn.CameraGroup.position.set(0, 17, 11);
   MicEnginereturn.CameraGroup.rotation.set(-1, 0, 0);
   Carroponte.add(MicEnginereturn.CameraGroup);

   //BACKGROUND TRASPARENTE SFOCATO
   const Background = BackgroundElement();

   //MOVIMENTO INERZIA
   const MovInerzia = MicEnginereturn.VarObject.E3_MovimentoInerzia({
      Oggetto: Carroponte,
      Accelerazione: DimCarroponte.Accelerazione,
      Frizione: DimCarroponte.Frizione,                 //<=1
      DimensioneX: Piano.Larg * 0.75,
      DimensioneY: 0,
      DimensioneZ: Piano.Lung * 0.75,
   });

   //CREA UN NUOVO CONTAINER
   function NewContainer(PosX, PosZ) {
      PresenzaCont[0]++;      //AGGIORNA L'INDICE DEL CONTAINER PRESENTE SUL NASTRO DI ARRIVO
      Lavorazioni[PresenzaCont[0]][3] = true;
      const NewContainer = Models.Container.clone();
      NewContainer.visible = true;
      NewContainer.position.set(PosX, DimContainer.Alt / 2 + 2, PosZ);
      const Stamp = MicEnginereturn.Materials.E3_StampCanvas({
         Width: 300,              //LARGHEZZA MESH PIANO
         Height: 300,             //ALTEZZA MESH PIANO
         Font: 200,              //GRANDEZZA FONT IN PIXEL
         Color: "#ffFFFF",       //COLORE FONT
         InitGroup: "",           //GRUPPO INIZIALE
         InitNum: "",             //NUMERO INIZIALE
      }, "", PresenzaCont[0] + 1);
      const Plane = MicEnginereturn.Geometries.E3_GeoPlane(3, 6, 1, 1);
      MicEnginereturn.Objects.E3_GenMesh(NewContainer, Plane, Stamp, [1, 1.6, -1], [-Math.PI / 2, 0, 0], [1, 1, 1], "StampCanvas", true, false);
      Container.push(NewContainer);

      MicEnginereturn.Scene.add(NewContainer);
   };

   //CREA IL PRIMO CONTAINER
   NewContainer(-30, -15);

   //COMANDI X E Y -1 0 +1
   function UpdateGame(ComX, ComY, ComZ, ComPuls, delta) {
      if (GameEnable == true) {
         //#region
         if (ComZ == 1) isArmLowering = true;
         if (ComZ == 0) isArmLowering = false;
         if (isArmLowering == false) MovInerzia.Update(ComX, 0, ComY, delta);

         //MOVIMENTO DEL BRACCIO
         if (isArmLowering && arm.position.y > Braccio.Discesa) {
            arm.position.y -= Braccio.Velocità; //Abbassa il braccio
         };
         if (!isArmLowering && arm.position.y < 0) {
            arm.position.y += Braccio.Velocità; //Alza il braccio
         };

         //BRACCIO ALTO O BASSO
         if (arm.position.y <= Braccio.Discesa) BraccioBasso = true;
         else BraccioBasso = false;

         //CONTAINER ALLINEATO
         if (BraccioBasso == true && Carroponte.position.x < Container[Indice].position.x + TolleranzaPresa && Carroponte.position.x > Container[Indice].position.x - TolleranzaPresa && Carroponte.position.z < Container[Indice].position.z + TolleranzaPresa && Carroponte.position.z > Container[Indice].position.z - TolleranzaPresa) {
            ContainerAllineato = true;
         }
         else ContainerAllineato = false;

         //ROTAZIONE GANCI
         arm.children[0].children[0].children[1].rotation.z = RotGanci;
         arm.children[0].children[0].children[2].rotation.z = -RotGanci;

         //CONTAINER PRESO
         if (ContainerAllineato == true && ComPuls == 1) {
            ContainerPreso = true;
            if (RotGanci > 0) RotGanci -= VelRotGanci * delta;
         };
         if (ComPuls == 0) {
            ContainerPreso = false;
            if (RotGanci < Math.PI / 8) RotGanci += VelRotGanci * delta;
         };

         //POSIZIONAMENTO CONTAINER
         if (ContainerPreso == true) {
            Container[Indice].position.x = Carroponte.position.x;
            Container[Indice].position.z = Carroponte.position.z;
            Container[Indice].position.y = arm.position.y - Braccio.Discesa + DimContainer.Alt / 2 + 2;
         }
         //CADUTA DEL CONTAINER
         else if (Indice < Container.length) {
            if (Container[Indice].position.y > DimContainer.Alt / 2 + 2) {
               Container[Indice].position.y -= Gravità;
            };
         };
         //#endregion

         /*--------------------------------AUTOMAZIONI LAVORAZIONE CONTAINER--------------------------------*/
         /*PRESENZA CONTAINER SUI NASTRI*/
         for (let i = 0; i < Container.length; i++) {
            //NASTRO 1
            if (PresenzaCont[1] == -1 && Container[i].position.y > 3.2 && Container[i].position.y < 3.7 && Container[i].position.x >= FinestreDiPosizione[0].x1 && Container[i].position.x <= FinestreDiPosizione[0].x2 && Container[i].position.z <= FinestreDiPosizione[0].z1 && Container[i].position.z >= FinestreDiPosizione[0].z2) PresenzaCont[1] = i;
            else if (Indice == PresenzaCont[1] && ContainerPreso == true && Container[Indice].position.y > 5) PresenzaCont[1] = -1;
            //NASTRO 2
            if (PresenzaCont[2] == -1 && Container[i].position.y > 3.2 && Container[i].position.y < 3.7 && Container[i].position.x >= FinestreDiPosizione[1].x1 && Container[i].position.x <= FinestreDiPosizione[1].x2 && Container[i].position.z <= FinestreDiPosizione[1].z1 && Container[i].position.z >= FinestreDiPosizione[1].z2) PresenzaCont[2] = i;
            else if (Indice == PresenzaCont[2] && ContainerPreso == true && Container[Indice].position.y > 5) PresenzaCont[2] = -1;
            //NASTRO 3
            if (PresenzaCont[3] == -1 && Container[i].position.y > 3.2 && Container[i].position.y < 3.7 && Container[i].position.x >= FinestreDiPosizione[2].x1 && Container[i].position.x <= FinestreDiPosizione[2].x2 && Container[i].position.z <= FinestreDiPosizione[2].z1 && Container[i].position.z >= FinestreDiPosizione[2].z2) PresenzaCont[3] = i;
            else if (Indice == PresenzaCont[3] && ContainerPreso == true && Container[Indice].position.y > 5) PresenzaCont[3] = -1;
         }

         /*MOVIMENTO CONTAINER SUI NASTRI, ASSEGNAZIONE MONEY E BONUS PER OGNI CONTAINER E VINCITA FINALE */
         //#region
         /*0 - NASTRO DI ARRIVO*/
         //SPOSTA IL CONTAINER FINO ALLA POSIZIONE FINALE
         if (Container[PresenzaCont[0]].position.x < PosXArrivo[0]) Container[PresenzaCont[0]].position.x += VelNastri * delta;
         else if (Indice != PresenzaCont[0] && PresenzaCont[0] != PresenzaCont[1] && PresenzaCont[0] != PresenzaCont[2] && PresenzaCont[0] != PresenzaCont[3] && PresenzaCont[0] != PresenzaCont[4]) AttesaPaccoFermo[PresenzaCont[0]] += delta;

         //SE IL CONTAINER PRESO È QUELLO SUL NASTRO DI ARRIVO E È SOLLEVATO CREA UN NUOVO CONTAINER SE IL LIVELLO LO PERMETTE
         if (Indice == PresenzaCont[0] && ContainerPreso == true && Container[Indice].position.y > 5 && PresenzaCont[0] < GameLevel) NewContainer(-30, -15);

         /*1 - NASTRO 1*/
         //PRESENZA DEL CONTAINER SUL NASTRO
         if (PresenzaCont[1] > -1) {
            //MOVIMENTO DEL CONTAINER
            if (Container[PresenzaCont[1]].position.x < PosXArrivo[1]) {
               Container[PresenzaCont[1]].position.x += VelNastri * delta;
               Models.Luce1.visible = false;
            }
            //MEMORIZZA LA LAVORAZIONE 1 EFFETTUATA
            else {
               Lavorazioni[PresenzaCont[1]][0] = true;
               AttesaPaccoFermo[PresenzaCont[1]] += delta;
               if (PresenzaCont[1] != -1) Models.Luce1.visible = true;
            };
         };
         if (PresenzaCont[1] == -1) Models.Luce1.visible = false;

         /*2 - NASTRO 2*/
         //PRESENZA DEL CONTAINER SUL NASTRO E HA EFFETTUATO LA LAVORAZIONE 1
         if (PresenzaCont[2] > -1 && Lavorazioni[PresenzaCont[2]][0] == true) {
            //MOVIMENTO DEL CONTAINER
            if (Container[PresenzaCont[2]].position.x > PosXArrivo[2]) {
               Container[PresenzaCont[2]].position.x -= VelNastri * delta;
               Models.Luce2.visible = false;
            }
            //MEMORIZZA LA LAVORAZIONE 2 EFFETTUATA
            else {
               Lavorazioni[PresenzaCont[2]][1] = true;
               AttesaPaccoFermo[PresenzaCont[2]] += delta;
               if (PresenzaCont[2] != -1) Models.Luce2.visible = true;
            };
         };
         if (PresenzaCont[2] == -1) Models.Luce2.visible = false;

         /*3 - NASTRO 3*/
         //PRESENZA DEL CONTAINER SUL NASTRO E HA EFFETTUATO LA LAVORAZIONE 1 E 2
         if (PresenzaCont[3] > -1 && Lavorazioni[PresenzaCont[3]][0] == true && Lavorazioni[PresenzaCont[3]][1] == true) {
            //MOVIMENTO DEL CONTAINER
            if (Container[PresenzaCont[3]].position.x < PosXArrivo[3]) {
               Container[PresenzaCont[3]].position.x += VelNastri * delta;
               Models.Luce3.visible = false;
            }
            //MEMORIZZA LA LAVORAZIONE 3 EFFETTUATA
            else {
               Lavorazioni[PresenzaCont[3]][2] = true;
               AttesaPaccoFermo[PresenzaCont[3]] += delta;
               if (PresenzaCont[3] != -1) Models.Luce3.visible = true;
            };
         };
         if (PresenzaCont[3] == -1) Models.Luce3.visible = false;

         /*4 - NASTRO PARTENZA*/
         //AGGIORNA L'INDICE DEL CONTAINER SUL NASTRO PARTENZA
         if (PresenzaCont[4] == -1 && ContainerPreso == false && Container[Indice].position.y > 3.2 && Container[Indice].position.y < 3.7 &&
            Container[Indice].position.x >= FinestreDiPosizione[3].x1 && Container[Indice].position.x <= FinestreDiPosizione[3].x2 &&
            Container[Indice].position.z <= FinestreDiPosizione[3].z1 && Container[Indice].position.z >= FinestreDiPosizione[3].z2)
            PresenzaCont[4] = Indice;
         if (Indice == PresenzaCont[4] && ContainerPreso == true && Container[Indice].position.y > 5) PresenzaCont[4] = -1;
         //MOVIMENTO DEL CONTAINER E HA EFFETTUATO LA LAVORAZIONE 1, 2 E 3
         if (PresenzaCont[4] > -1 && Lavorazioni[PresenzaCont[4]][0] == true && Lavorazioni[PresenzaCont[4]][1] == true && Lavorazioni[PresenzaCont[4]][2] == true) {
            if (Container[PresenzaCont[4]].position.x < PosXArrivo[4]) Container[PresenzaCont[4]].position.x += VelNastri * delta;
            if (Container[PresenzaCont[4]].position.x > 28) {
               //AGGIUNGI AL MONEY RA RICOMPENSA PER UN CONTAINER
               Money += CalcMoneyReward(Economy.CarroponteMoney);
               if (AttesaPaccoFermo[PresenzaCont[4]] < MinAttesa) Bonus += CalcMoneyReward(Economy.CarroponteMoney);
               //AGGIORNA IL TESTO
               CarroponteHUDCanvas.setButtonText(0, `LEVEL: ${GameLevel + 1}
                     WIN: ${Money.toFixed(0)}
                     BONUS: ${Bonus.toFixed(0)} `);
               CarroponteHUDCanvas.render();
               Lavorazioni[PresenzaCont[4]][3] = false;
               MicEnginereturn.Scene.remove(Container[PresenzaCont[4]]);

               //SE IL CONTAINER È L'ULTIMO AVANZA DI LIVELLO
               if (PresenzaCont[4] == GameLevel) {
                  if (VincitaDelay == false) {
                     setTimeout(() => {
                        Vincita = (Money + Bonus).toFixed(0);
                     }, 1000);
                     VincitaDelay = true;
                  };
                  //AGGIORNA IL TESTO
                  CarroponteHUDCanvas.setButtonText(0, `LEVEL: ${GameLevel + 1}
                     WIN: ${Money.toFixed(0)}
                     BONUS: ${Bonus.toFixed(0)} `);
                  CarroponteHUDCanvas.render();
                  //SE ALMENO UN PACCO NON È NEL RANGE MASSIMO DI ATTESA NON AVANZARE DI LIVELLO
                  for (let i = 0; i < AttesaPaccoFermo.length; i++) {
                     if (AttesaPaccoFermo[i] > MaxAttesa) return;
                  };
                  if (GameLevel < MaxLevel) GameLevel++;
                  SaveSystem.setItem(`CarroponteLevel`, GameLevel);
               };
               PresenzaCont[4] = -1;
            };
         };
         //#endregion

         /*PASSAGGIO DEI CONTAINER NELLE STAZIONI*/
         //#region
         //STAZIONE 1 NASTRO 1
         if (PresenzaCont[1] > -1 && Container[PresenzaCont[1]].position.y > 3.2 && Container[PresenzaCont[1]].position.y < 3.7 &&
            Container[PresenzaCont[1]].position.x >= PosStazioni[0].x1 && Container[PresenzaCont[1]].position.x <= PosStazioni[0].x2 &&
            Container[PresenzaCont[1]].position.z <= PosStazioni[0].z1 && Container[PresenzaCont[1]].position.z >= PosStazioni[0].z2)
            LavorStazioni[0] = true;
         else LavorStazioni[0] = false;
         //STAZIONE 2 NASTRO 2
         if (PresenzaCont[2] > -1 && Container[PresenzaCont[2]].position.y > 3.2 && Container[PresenzaCont[2]].position.y < 3.7 &&
            Container[PresenzaCont[2]].position.x >= PosStazioni[1].x1 && Container[PresenzaCont[2]].position.x <= PosStazioni[1].x2 &&
            Container[PresenzaCont[2]].position.z <= PosStazioni[1].z1 && Container[PresenzaCont[2]].position.z >= PosStazioni[1].z2)
            LavorStazioni[1] = true;
         else LavorStazioni[1] = false;
         //STAZIONE 3 NASTRO 2
         if (PresenzaCont[2] > -1 && Container[PresenzaCont[2]].position.y > 3.2 && Container[PresenzaCont[2]].position.y < 3.7 &&
            Container[PresenzaCont[2]].position.x >= PosStazioni[2].x1 && Container[PresenzaCont[2]].position.x <= PosStazioni[2].x2 &&
            Container[PresenzaCont[2]].position.z <= PosStazioni[2].z1 && Container[PresenzaCont[2]].position.z >= PosStazioni[2].z2)
            LavorStazioni[2] = true;
         else LavorStazioni[2] = false;
         //STAZIONE 4 NASTRO 3
         if (PresenzaCont[3] > -1 && Container[PresenzaCont[3]].position.y > 3.2 && Container[PresenzaCont[3]].position.y < 3.7 &&
            Container[PresenzaCont[3]].position.x >= PosStazioni[3].x1 && Container[PresenzaCont[3]].position.x <= PosStazioni[3].x2 &&
            Container[PresenzaCont[3]].position.z <= PosStazioni[3].z1 && Container[PresenzaCont[3]].position.z >= PosStazioni[3].z2)
            LavorStazioni[3] = true;
         else LavorStazioni[3] = false;
         //#endregion

         /*ANIMAZIONI AL PASSAGGIO DEI CONTAINER*/
         //#region
         //STAZIONE 1 NASTRO 1 - SCAN
         if (LavorStazioni[0] == true) Models.Bagliore.visible = true;
         else Models.Bagliore.visible = false;
         //STAZIONE 2 NASTRO 2 - LAVAGGIO
         //STAZIONE 1 NASTRO 1 - SCAN
         if (LavorStazioni[1] == true) {
            Models.Spruzzo1.visible = true;
            Models.Spruzzo2.visible = true;
            Models.Spruzzo3.visible = true;
         }
         else {
            Models.Spruzzo1.visible = false;
            Models.Spruzzo2.visible = false;
            Models.Spruzzo3.visible = false;
         };

         //STAZIONE 3 NASTRO 2 - VENTOLA
         if (LavorStazioni[2] == true) {
            RotFans += delta * VelFans;
            Models.Fan1.rotation.y = RotFans;
            Models.Fan2.rotation.y = RotFans + Math.PI / 2;
         };

         //STAZIONE 4 NASTRO 3 - SALDATURA
         if (LavorStazioni[3] == true) {
            if (RotRobots < RotXRobots) RotRobots += delta * VelRobots;
            else Models.Scintille.visible = true;

         }
         else if (RotRobots > 0) {
            RotRobots -= delta * VelRobots;
            Models.Scintille.visible = false;
         };
         if (Models.Scintille.visible == true) Models.Scintille.scale.setScalar(Math.random());
         Models.Robots.children[0].rotation.x = RotRobots;
         Models.Robots.children[1].rotation.x = -RotRobots;

         //#endregion
      };
   };

   //CALCOLO DEL CONTAINER PIÙ VICINO PER PRENDERNE UNO E RIPOSIZIONARLO, AGGIORNAMENTO BARRE
   setInterval(() => {
      //CONTAINER PIÙ VICINO
      for (let i = 0; i < Container.length; i++) {
         Dintanze[i] = Carroponte.position.distanceTo(Container[i].position);
         let min = Math.min(...Dintanze);
         //AGGIORNA L'INDICE SOLO SE IL CONTAINER NON È PRESO
         if (ContainerPreso == false) Indice = Dintanze.indexOf(min);
      };
      PosBarre = computeXPositions(Barre, 15, 20);

      //RIEMPIMENTO DELLE BARRE DI ATTESA, AGGIORNAMENTO NUMERO BARRE
      for (let i = 0; i < Barre; i++) {
         //CAMBIO COLORE DELLA BARRA
         if (AttesaPaccoFermo[i] <= MinAttesa) CarroponteHUDCanvas.setBarColor(i, Colors.PassivePuls, "#00ff00");
         else if (AttesaPaccoFermo[i] < MaxAttesa) CarroponteHUDCanvas.setBarColor(i, Colors.PassivePuls, "#0000FF");
         else CarroponteHUDCanvas.setBarColor(i, Colors.PassivePuls, "#ff0000");

         //RIEMPIMENTO BARRE FINO AL MASSIMO DELL'ATTESA
         if (AttesaPaccoFermo[i] <= MaxAttesa) CarroponteHUDCanvas.setBarValue(i, AttesaPaccoFermo[i] / MaxAttesa);
         else CarroponteHUDCanvas.setBarValue(i, 1);
      };
      //AGGIORNAMENTO BARRE
      for (let i = 0; i < CarroponteHUDObj.Barre; i++) {
         if (GameEnable == true) {
            if (i < Lavorazioni.length) {
               if (Lavorazioni[i][3] == true) {
                  //VISIBILITÀ E POSIZIONAMENTO BARRE
                  CarroponteHUDCanvas.showBar(i, true);
                  CarroponteHUDCanvas.setBarText(i, `${i + 1}`);
                  CarroponteHUDCanvas.setBarPosX(i, `${PosBarre[i]}%`);
               }
               else CarroponteHUDCanvas.showBar(i, false);
            }
            else CarroponteHUDCanvas.showBar(i, false);
         }
         else CarroponteHUDCanvas.showBar(i, false);
      }
      CarroponteHUDCanvas.render();
   }, 100);

   function Enable() {
      GameEnable = true;
      Background.style.display = "none";
      CarroponteHUDCanvas.showButton(0, true);
      for (let i = 0; i < CarroponteHUDObj.Barre; i++) {
         CarroponteHUDCanvas.showBar(i, true);
      };
      CarroponteHUDCanvas.render();
   };

   function Reset() {
      GameEnable = false;
      //RIMUOVI I CONTAINER AGGIUNTIVI E RIPORTA IL PRIMO CONTAINER E IL CARROPONTE ALLA POSIZIONE INIZIALE
      for (let i = 0; i < Container.length; i++) {
         MicEnginereturn.Scene.remove(Container[i]);
      };
      Container = [];
      PresenzaCont = [-1, -1, -1, -1, -1];
      Lavorazioni = [];
      for (let i = 0; i < GameLevel + 1; i++) {
         Lavorazioni[i] = [false, false, false, false];
         AttesaPaccoFermo[i] = 0;
      };
      Dintanze = [];
      NewContainer(-30, -15);
      Money = 0;
      Vincita = 0;
      VincitaDelay = false;
      Bonus = 0;
      CarroponteHUDCanvas.showButton(0, false);
      Carroponte.position.set(DimCarroponte.PosX, DimCarroponte.Altezza, DimCarroponte.PosZ);
      Background.style.display = "block";
      CarroponteHUDCanvas.setButtonText(0, `LEVEL: ${GameLevel + 1}
         WIN: ${Money.toFixed(0)}
         BONUS: ${Bonus.toFixed(0)} `);
      RotGanci = Math.PI / 8;
      arm.children[0].children[0].children[1].rotation.z = RotGanci;    //ROTAZIONE INIZIALE GANCIO DX
      arm.children[0].children[0].children[2].rotation.z = -RotGanci;    //ROTAZIONE INIZIALE GANCIO SX
      G1_UpdateBarHud();
      CarroponteHUDCanvas.render();
   };

   CarroponteHUDCanvas.render();

   return { Enable, UpdateGame, Reset, get Vincita() { return Vincita; }, LavorStazioni };
};
//#endregion

/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/*-----------------------------------------------------PAGINE UPDATE----------------------------------------------------------------*/
//#region
//------------------------------------------------PAGINA HOME-----------------------------------------------//
function UpdateHome(delta) {
   //MOVIMENTO CAMERA
   VarObjHome.Camera.angle += delta * VarObjHome.Camera.speed;
   VarObjHome.Camera.radius += delta * VarObjHome.Camera.deltaRadius;
   if (VarObjHome.Camera.radius > VarObjHome.Camera.maxRadius || VarObjHome.Camera.radius < VarObjHome.Camera.minRadius) {
      VarObjHome.Camera.deltaRadius *= -1; //Inverti direzione
   };

   //Posizione della camera in coordinate sferiche
   VarObjHome.Camera.PosX = VarObjHome.Camera.radius * Math.cos(VarObjHome.Camera.angle);
   VarObjHome.Camera.PosZ = VarObjHome.Camera.radius * Math.sin(VarObjHome.Camera.angle);
   VarObjHome.Camera.PosY = VarObjHome.Camera.baseY + Math.sin(VarObjHome.Camera.angle * VarObjHome.Camera.frequency) * VarObjHome.Camera.amplitude;

   MicEnginereturn.CameraGroup.position.set(VarObjHome.Camera.PosX, VarObjHome.Camera.PosY, VarObjHome.Camera.PosZ);
   MicEnginereturn.CameraGroup.children[0].children[0].children[0].lookAt(MicEnginereturn.VarObject.PosZero);

   //MOVIMENTO LUCE
   VarObjHome.Luce.angle += delta * VarObjHome.Luce.speed;
   VarObjHome.Luce.radius += delta * VarObjHome.Luce.deltaRadius;
   if (VarObjHome.Luce.radius > VarObjHome.Luce.maxRadius || VarObjHome.Luce.radius < VarObjHome.Luce.minRadius) {
      VarObjHome.Luce.deltaRadius *= -1; //Inverti direzione
   };

   //Posizione della camera in coordinate sferiche
   VarObjHome.Luce.PosX = VarObjHome.Luce.radius * Math.cos(VarObjHome.Luce.angle);
   VarObjHome.Luce.PosZ = VarObjHome.Luce.radius * Math.sin(VarObjHome.Luce.angle);
   VarObjHome.Luce.PosY = VarObjHome.Luce.baseY + Math.sin(VarObjHome.Luce.angle * VarObjHome.Luce.frequency) * VarObjHome.Luce.amplitude;

   MicEnginereturn.Lights.DirLight.position.set(VarObjHome.Luce.PosX, VarObjHome.Luce.PosY, VarObjHome.Luce.PosZ);
};
//------------------------------------------------PAGINA DEL GIOCO 555-----------------------------------------------//
function G1_ChangeSavePage(Url) {            //SaveSystem.update();
   //FLAG DI PARTITA AVVIATA
   SaveSystem.setItem(`NewGame`, 1);

   //DATI ASTRONAVE
   SaveSystem.setItem(`Money`, GlobalVar.Money);
   SaveSystem.setItem(`Fuel`, GlobalVar.Fuel);
   SaveSystem.setItem(`Air`, VarObject.Air);
   SaveSystem.setItem(`Water`, VarObject.Water);
   SaveSystem.setItem(`Food`, VarObject.Food);
   SaveSystem.setItem(`UpgradeCockpit`, GlobalVar.UpgradeCockpit);
   SaveSystem.setItem(`UpgradeTank`, GlobalVar.UpgradeTank);
   SaveSystem.setItem(`UpgradeMotor`, GlobalVar.UpgradeMotor);
   SaveSystem.setItem(`Coin`, GlobalVar.Coin);
   SaveSystem.setItem(`ShipModules`, GlobalVar.ShipModules);
   SaveSystem.setItem(`LivingModules`, GlobalVar.LivingModules);
   SaveSystem.setItem(`ContainerModules`, GlobalVar.ContainerModules);
   SaveSystem.setItem(`ExtractionModules`, GlobalVar.ExtractionModules);
   SaveSystem.setItem(`RadarModules`, GlobalVar.RadarModules);
   //POSIZIONE WORLD NAVE SPAZIALE
   SaveSystem.setItem(`SpaceGameWorld_PosX`, MicEnginereturn.PhysicsEngine.UserPosWorld.x / 1000);
   SaveSystem.setItem(`SpaceGameWorld_PosY`, MicEnginereturn.PhysicsEngine.UserPosWorld.y / 1000);
   SaveSystem.setItem(`SpaceGameWorld_PosZ`, MicEnginereturn.PhysicsEngine.UserPosWorld.z / 1000);

   //ROTAZIONE NAVE SPAZIALE
   SaveSystem.setItem(`SpaceGame_RotX`, MicEnginereturn.User.Object.rotation.x);
   SaveSystem.setItem(`SpaceGame_RotY`, MicEnginereturn.User.Object.rotation.y);
   SaveSystem.setItem(`SpaceGame_RotZ`, MicEnginereturn.User.Object.rotation.z);

   //ROTAZIONE GLOBALE SOLAR SYSTEM
   SaveSystem.setItem(`OrbitPosition`, MicEnginereturn.VarPlanetSystem.OrbitPosition);

   //RAGGIO TRAENTE
   SaveSystem.setItem(`NearTractor`, MicEnginereturn.VarPlanetSystem.NearTractor);
   SaveSystem.setItem(`TractorActive`, MicEnginereturn.VarPlanetSystem.TractorActive);

   SaveSystem.setItem(`PlanetOrbit`, MicEnginereturn.VarPlanetSystem.PlanetOrbit);      //ORBITA DI UN PIANETA RAGGIUNTA
   SaveSystem.setItem(`MoonOrbit`, MicEnginereturn.VarPlanetSystem.MoonOrbit);          //ORBITA DI UNA LUNA RAGGIUNTA
   SaveSystem.setItem(`SubMoonOrbit`, MicEnginereturn.VarPlanetSystem.SubMoonOrbit);    //ORBITA DI UNA SUB-LUNA RAGGIUNTA

   //POSIZIONE NAVE SPAZIALE
   SaveSystem.setItem(`SpaceGame_PosX`, MicEnginereturn.User.Object.position.x);
   SaveSystem.setItem(`SpaceGame_PosY`, MicEnginereturn.User.Object.position.y);
   SaveSystem.setItem(`SpaceGame_PosZ`, MicEnginereturn.User.Object.position.z);

   //TIPO STAZIONE
   SaveSystem.setItem(`StationType`, MicEnginereturn.VarPlanetSystem.StationType);

   //DISTANZE PIANETI
   SaveSystem.setItem(`IndDistNum`, MicEnginereturn.VarPlanetSystem.IndDist.length);
   for (let i = 0; i < MicEnginereturn.VarPlanetSystem.IndDist.length; i++) {
      SaveSystem.setItem(`IndDist${i}`, MicEnginereturn.VarPlanetSystem.IndDist[i]);
   };

   //DISTANZE LUNE
   SaveSystem.setItem(`IndMoonDistNum`, MicEnginereturn.VarPlanetSystem.IndMoonDist.length);
   for (let i = 0; i < MicEnginereturn.VarPlanetSystem.IndMoonDist.length; i++) {
      SaveSystem.setItem(`IndMoonDist${i}`, MicEnginereturn.VarPlanetSystem.IndMoonDist[i]);
   };

   //DISTANZE SUB-LUNE
   SaveSystem.setItem(`IndSubMoonDistNum`, MicEnginereturn.VarPlanetSystem.IndSubMoonDist.length);
   for (let i = 0; i < MicEnginereturn.VarPlanetSystem.IndSubMoonDist.length; i++) {
      SaveSystem.setItem(`IndSubMoonDist${i}`, MicEnginereturn.VarPlanetSystem.IndSubMoonDist[i]);
   };

   //COLORI
   SaveSystem.setItem(`Color1`, GlobalVar.Color1);
   SaveSystem.setItem(`Color2`, GlobalVar.Color2);

   //STORY
   if (GlobalVar.Page == "Game" && GlobalVar.TutorialFlag == 11) SaveSystem.setItem(`Tutorial`, 20);
   SaveSystem.setItem(`Capitolo`, GlobalVar.Capitolo);
   SaveSystem.setItem(`Missione`, GlobalVar.Missione);
   SaveSystem.setItem('TimeBar', VarObject.TimeBar);
   SaveSystem.setItem('Deuterio', GlobalVar.Deuterio);
   SaveSystem.setItem('Trizio', GlobalVar.Trizio);
   SaveSystem.setItem('Sole', GlobalVar.Sole);
   SaveSystem.setItem('Scient', GlobalVar.Scient);
   SaveSystem.setItem('DeuterioTotal', GlobalVar.DeuterioTotal);
   SaveSystem.setItem('TrizioTotal', GlobalVar.TrizioTotal);
   SaveSystem.setItem('SoleTotal', GlobalVar.SoleTotal);
   SaveSystem.setItem('StepTimeMars', GlobalVar.StepTimeMars);
   SaveSystem.setItem('TimeBar2', VarObject.TimeBar2);
   SaveSystem.setItem('ScientTotal', GlobalVar.ScientTotal);
   SaveSystem.setItem('Cometa', GlobalVar.Cometa);

   SaveSystem.update();
   //CAMBIO PAGINA
   G0_ShowLoadingAndReload(Url);     //SaveSystem.update();
};
function UpdateGame(delta) {

   /*NOTA, OTTIMIZZATO SIGNIFICA CHE SI ATTIVA SOLO CON DETERMINATI EVENTI*/
   /*---------------------------------------------AGGIORNAMENTO VARIABILI DYNAMIC COCKPIT ----------------------------------------*/
   //#region
   MicEnginereturn.DynamCockpitVar.DistPlanets = Economy.DistUpgrade[GlobalVar.UpgradeCockpit];
   //#endregion

   /*----------------------------------------AGGIORNAMENTO VARIABILI DYNAMIC PLANETARY SYSTEM ----------------------------------------*/
   //#region
   //VALORE DI VELOCITÀ DELLA NAVE SPAZIALE (m/s NEL GIOCO) CALCOLATA NEL CICLO DI RENDER
   MicEnginereturn.VarPlanetSystem.VelEffettiva = VarObject.VelEffettiva;
   //VETTORE POSIZIONE UTENTE
   MicEnginereturn.VarPlanetSystem.UserPos.set(MicEnginereturn.User.Object.position.x, MicEnginereturn.User.Object.position.y,
      MicEnginereturn.User.Object.position.z);
   //MASSIMA VELOCITÀ DELLA NAVE SENZA LIMITI
   MicEnginereturn.VarPlanetSystem.MaxVel = Economy.SpeedUpgrade[GlobalVar.UpgradeMotor];
   //#endregion

   /*------------------------------------------AGGIORNAMENTO VARIABILI MODULAR SHIP ------------------------*/
   //#region
   MicEnginereturn.VarModularShip.AtmFriction = MicEnginereturn.VarPlanetSystem.NearCollision;
   //#endregion

   /*-----------------------------------------AGGIORNAMENTO HYPERLOOP (OTTIMIZZATO)---------------------------------------------*/
   //#region
   if (VarObject.DustVisible == true) {
      MicEnginereturn.User.Object.getWorldQuaternion(MicEnginereturn.User.UserWorldQuat);
      MicEnginereturn.Hyperloop[0].Update({
         Parent: MicEnginereturn.User.Object.children[0],
         Length: 10,          //LUNGHEZZA LINEE
         Quaternion: MicEnginereturn.User.UserWorldQuat,
         Speed: VarObject.VelEffettiva,
      }, delta);
   };
   if (VarObject.SparksVisible == true) {
      MicEnginereturn.User.Object.getWorldQuaternion(MicEnginereturn.User.UserWorldQuat);
      //ORBITE DEI PIANETI E LUNE
      if (MicEnginereturn.VarPlanetSystem.PlanetOrbit > 0) MicEnginereturn.Hyperloop[1].Update({
         Parent: MicEnginereturn.User.Object.children[0],
         Length: 10,          //LUNGHEZZA LINEE
         Quaternion: MicEnginereturn.User.UserWorldQuat,
         Speed: VarObject.VelEffettiva * MicEnginereturn.VarPlanetSystem.LimitCollision,
      }, delta);
      //ORBITA DEL SOLE
      else MicEnginereturn.Hyperloop[1].Update({
         Parent: MicEnginereturn.User.Object.children[0],
         Length: 10,          //LUNGHEZZA LINEE
         Quaternion: MicEnginereturn.User.UserWorldQuat,
         Speed: VarObject.VelEffettiva * MicEnginereturn.VarPlanetSystem.LimitCollision * 0.001,
      }, delta);
   };
   //#endregion

   /*----------------------------------------POSIZIONE E ROTAZIONE NAVE SPAZIALE----------------------------------------------*/
   //#region
   //CALCOLO VELOCITÀ EFFETTIVA (M/S NEL GIOCO)
   VarObject.VelEffettiva = MicEnginereturn.PhysicsEngine.VarObject.Speed;

   /*--------ROTAZIONE E TRASLAZIONE ASTRONAVE--------*/
   //SE NON SI È NEL RAGGIO TRAENTE OPPURE 
   //SI È NELL RAGGIO TRAENTE MA ESSO NON È VISIBILE (CONDIZIONE NORMALE)
   if ((GlobalVar.TutorialFlag == 0 || GlobalVar.TutorialFlag >= 4) && (MicEnginereturn.VarPlanetSystem.NearTractor == 0 || (MicEnginereturn.VarPlanetSystem.NearTractor == 1 && MicEnginereturn.VarPlanetSystem.TractorActive == 0))) {
      /*---------------------------ROTAZIONE ASTRONAVE----------------------------*/
      //----------------------YAW---------------------//
      if (VarObject.Yaw != 0 && VarObject.BlockMov == false) {
         MicEnginereturn.User.UserDummy.rotateOnAxis(     //SE MUOVO LO STICK
            MicEnginereturn.User.VetAsseY, (VarObject.Yaw * delta * GlobalVar.Yaw) /
            (VarObject.VelGlobalPerc * GlobalVar.CoeffRotMot + 1) + VarObject.NoiseDirY);
      }
      else if (VarObject.VelEffettiva / Economy.SpeedUpgrade[GlobalVar.UpgradeMotor] > VarObject.MinSpeedDir && VarObject.BlockMov == false)
         MicEnginereturn.User.UserDummy.rotateOnAxis(MicEnginereturn.User.VetAsseY, VarObject.NoiseDirY);

      //----------------------PITCH---------------------//
      if (VarObject.Pitch != 0 && VarObject.BlockMov == false) {
         MicEnginereturn.User.UserDummy.rotateOnAxis(     //SE MUOVO LO STICK
            MicEnginereturn.User.VetAsseX, (VarObject.Pitch * delta * GlobalVar.Pitch) /
            (VarObject.VelGlobalPerc * GlobalVar.CoeffRotMot + 1) + VarObject.NoiseDirX);
      }
      else if (VarObject.VelEffettiva / Economy.SpeedUpgrade[GlobalVar.UpgradeMotor] > VarObject.MinSpeedDir && VarObject.BlockMov == false)
         MicEnginereturn.User.UserDummy.rotateOnAxis(MicEnginereturn.User.VetAsseX, VarObject.NoiseDirX);

      //----------------------ROLL---------------------//
      if (VarObject.Roll != 0 && VarObject.BlockMov == false) {
         MicEnginereturn.User.UserDummy.rotateOnAxis(     //SE MUOVO LO STICK
            MicEnginereturn.User.VetAsseZ, (VarObject.Roll * delta * GlobalVar.Roll + VarObject.RotateZ));
      }
      else if (VarObject.BlockMov == false) MicEnginereturn.User.UserDummy.rotateOnAxis(MicEnginereturn.User.VetAsseZ, VarObject.RotateZ);

      /*------------------------TRASLAZIONE ASTRONAVE----------------------------*/
      //LIMITE DURANTE LA STORIA
      if (VarObject.Death == false && VarObject.BlockMov == false && VarObject.CntDeriva == 0) {
         //LIMITE DOPO I TITOLI DI CODA
         if (GlobalVar.Capitolo == 5 && GlobalVar.Missione >= 3) MicEnginereturn.PhysicsEngine.AccelLimitNoCollision({
            Axe: VarObject.Throttle,
            MaxVel: Economy.SpeedUpgrade[GlobalVar.UpgradeMotor] * Economy.FinalSpeed,
            Limit: MicEnginereturn.VarPlanetSystem.VelLimit * Economy.FinalSpeed,
            CoeffAcc: 1
         }, delta)
         //LIMETE NORMALE
         else MicEnginereturn.PhysicsEngine.AccelLimitNoCollision({
            Axe: VarObject.Throttle,
            MaxVel: Economy.SpeedUpgrade[GlobalVar.UpgradeMotor],
            Limit: MicEnginereturn.VarPlanetSystem.VelLimit,
            CoeffAcc: 1
         }, delta)
      }
      else MicEnginereturn.PhysicsEngine.AccelLimitNoCollision({
         Axe: VarObject.Throttle,
         MaxVel: Economy.SpeedUpgrade[GlobalVar.UpgradeMotor],
         Limit: 0,
         CoeffAcc: 1
      }, delta);
   }
   //SE SI È NEL RAGGIO TRAENTE E ESSO È ATTIVO (ACCESSO PAGINA STAZIONE SPAZIALE) (RILASCIO)
   else {
      VarObject.VelEffettiva = 0;     //RESETTA I VALORI DI VELOCITÀ

      //SE NON SI È RILASCIATI (ACCESSO PAGINA STAZIONE SPAZIALE)
      if (MicEnginereturn.VarPlanetSystem.Released == false) {
         //ROTAZIONE ASTRONAVE
         VarObject.Rotation.SetVectors(MicEnginereturn.User.Object.rotation, MicEnginereturn.VarPlanetSystem.TractorRotXShip, MicEnginereturn.VarPlanetSystem.TractorRotYShip, MicEnginereturn.VarPlanetSystem.TractorRotZShip, 3);
         VarObject.Rotation.Update(delta);
         MicEnginereturn.User.Object.quaternion.copy(VarObject.Rotation.QuatLerp);

         //TRASLAZIONE ASTRONAVE
         MicEnginereturn.Math.CompareIncrement(MicEnginereturn.User.Object.position, MicEnginereturn.VarPlanetSystem.TractorPosXShip, MicEnginereturn.VarPlanetSystem.TractorPosYShip, MicEnginereturn.VarPlanetSystem.TractorPosZShip, delta * MicEngineParam.PlanetarySystem.TractorBeam.PosSpeed);

         //ACCESSO PAGINA STAZIONE SPAZIALE (SALVATAGGIO DATI NEL LOCAL STORAGE)
         if (VarObject.Rotation.End == true &&
            MicEnginereturn.User.Object.position.x < MicEnginereturn.VarPlanetSystem.TractorPosXShip + 2 &&
            MicEnginereturn.User.Object.position.x > MicEnginereturn.VarPlanetSystem.TractorPosXShip - 2 &&
            MicEnginereturn.User.Object.position.y < MicEnginereturn.VarPlanetSystem.TractorPosYShip + 2 &&
            MicEnginereturn.User.Object.position.y > MicEnginereturn.VarPlanetSystem.TractorPosYShip - 2 &&
            MicEnginereturn.User.Object.position.z < MicEnginereturn.VarPlanetSystem.TractorPosZShip + 2 &&
            MicEnginereturn.User.Object.position.z > MicEnginereturn.VarPlanetSystem.TractorPosZShip - 2) {
            G1_ChangeSavePage("Station");
         };
      };
      //SE SI È RILASCIATI
      if (MicEnginereturn.VarPlanetSystem.Released == true) {
         //TRASLAZIONE ASTRONAVE
         MicEnginereturn.Math.CompareIncrement(MicEnginereturn.User.Object.position, MicEnginereturn.VarPlanetSystem.TractorPosXShipRelease,
            MicEnginereturn.VarPlanetSystem.TractorPosYShipRelease, MicEnginereturn.VarPlanetSystem.TractorPosZShipRelease, delta * MicEngineParam.PlanetarySystem.TractorBeam.PosSpeed);

         //ROTAZIONE ASTRONAVE
         MicEnginereturn.User.Object.quaternion.copy(MicEnginereturn.User.UserDummy.quaternion);
      };
   };

   if ((MicEnginereturn.VarPlanetSystem.NearTractor == 0 || (MicEnginereturn.VarPlanetSystem.NearTractor == 1 && MicEnginereturn.VarPlanetSystem.TractorActive == 0))) MicEnginereturn.User.Object.quaternion.copy(MicEnginereturn.User.UserDummy.quaternion);
   //#endregion

   //-------------------------------------VETTORE NAVE SPAZIALE CON IL PAD VIRTUALE E IL GAMEPAD------------------------------//
   //#region
   Controller.Update();

   VarObject.Pitch = Controller.Axe[0];
   VarObject.Yaw = Controller.Axe[1];

   //ACCELERATORE CON I PULSANTI
   if (GlobalVar.Control == 0) {
      if (VarObject.ThrottleDown == false && VarObject.ThrottleUp == false) VarObject.Throttle = 0;
      if (VarObject.ThrottleDown == true && VarObject.ThrottleUp == false) VarObject.Throttle = -100 * ((RegAxe[3] + 5) / 100);
      if (VarObject.ThrottleDown == false && VarObject.ThrottleUp == true) VarObject.Throttle = 100 * ((RegAxe[3] + 5) / 100);
      if (VarObject.ThrottleDown == true && VarObject.ThrottleUp == true) VarObject.Throttle = 0;
   };
   //ACCELERATORE CON IL CONTROLLER
   if (GlobalVar.Control == 1) {
      VarObject.DecThrottle = Controller.Axe[3];
      VarObject.AccThrottle = Controller.Axe[4];
      VarObject.Throttle = VarObject.AccThrottle - VarObject.DecThrottle;
   };

   //ROLLIO CON I PULSANTI
   if (GlobalVar.Control == 0) {
      if (VarObject.RollSX == false && VarObject.RollDX == false) VarObject.Roll = 0;
      if (VarObject.RollSX == true && VarObject.RollDX == false) VarObject.Roll = -100 * ((RegAxe[2] + 5) / 100);
      if (VarObject.RollSX == false && VarObject.RollDX == true) VarObject.Roll = 100 * ((RegAxe[2] + 5) / 100);
      if (VarObject.RollSX == true && VarObject.RollDX == true) VarObject.Roll = 0;
   };
   //ROLLIO CON IL CONTROLLER
   if (GlobalVar.Control == 1) {
      VarObject.Roll = Controller.Button[1] * 100 * ((RegAxe[2] + 5) / 100) - Controller.Button[2] * 100 * ((RegAxe[2] + 5) / 100);
   };
   //#endregion

   //-------------------------------ROTAZIONE MODELLO 3D DELLA NAVE SPAZIALE CON LO STICK (OTTIMIZZATO)-------------------------------//
   //#region
   if (MicEnginereturn.User.Object.children[1].rotation.y > VarObject.Yaw * GlobalVar.RotX + 0.02) {
      MicEnginereturn.User.Object.children[1].rotation.y -= GlobalVar.RestX * delta * 0.01;
   };
   if (MicEnginereturn.User.Object.children[1].rotation.y < VarObject.Yaw * GlobalVar.RotX - 0.02) {
      MicEnginereturn.User.Object.children[1].rotation.y += GlobalVar.RestX * delta * 0.01;
   };

   if (MicEnginereturn.User.Object.children[1].rotation.x > VarObject.Pitch * GlobalVar.RotY + 0.02) {
      MicEnginereturn.User.Object.children[1].rotation.x -= GlobalVar.RestY * delta * 0.01;
   };
   if (MicEnginereturn.User.Object.children[1].rotation.x < VarObject.Pitch * GlobalVar.RotY - 0.02) {
      MicEnginereturn.User.Object.children[1].rotation.x += GlobalVar.RestY * delta * 0.01;
   };
   //#endregion

   //---------------------------------------ROTAZIONE MANUALE E AUTOMATICA NELLO SPAZIO  VISUALE---------------------------------------//
   //#region
   if (GlobalVar.TutorialFlag == 0 || GlobalVar.TutorialFlag >= 4) {
      if (VarObject.CameraRiposiziona == true) {
         MicEnginereturn.Math.CompareIncrement(
            MicEnginereturn.VarObject.GimbalAngOffset,               //VETTORE
            VarObject.GimbalPosX,              //SET X
            VarObject.GimbalPosY,              //SET Y
            VarObject.GimbalPosZ,              //SET Z
            delta * VarObject.GimbalAngVel,    //INCREMENTO
         );

         MicEnginereturn.VarObject.GimbalAng.set(MicEnginereturn.VarObject.GimbalAngOffset.x, MicEnginereturn.VarObject.GimbalAngOffset.y,
            MicEnginereturn.VarObject.GimbalAngOffset.z);
         //CAMERAGIMBAL
         MicEnginereturn.CameraGroup.children[0].rotation.set(0, MicEnginereturn.VarObject.GimbalAngOffset.y, 0);
         //CAMERACONTROL
         MicEnginereturn.CameraGroup.children[0].children[0].rotation.set(MicEnginereturn.VarObject.GimbalAngOffset.x, 0, 0);
      }

      if (Controller.Axe[5] < -5 || Controller.Axe[5] > 5 || Controller.Axe[6] < -5 || Controller.Axe[6] > 5) {
         VarObject.CameraRiposiziona = false;
         MicEnginereturn.VarObject.GimbalAng.x += -Controller.Axe[6] * delta * 0.01;
         MicEnginereturn.VarObject.GimbalAng.y += -Controller.Axe[5] * delta * 0.01;

         MicEnginereturn.Math.E3_AngleZero(MicEnginereturn.VarObject.GimbalAng, MicEnginereturn.VarObject.GimbalAngOffset);
         MicEnginereturn.CameraGroup.children[0].rotation.set(0, MicEnginereturn.VarObject.GimbalAngOffset.y, 0);
         MicEnginereturn.CameraGroup.children[0].children[0].rotation.set(MicEnginereturn.VarObject.GimbalAngOffset.x, 0, 0);
         VarObject.TRipos = 0;
      }
      //RIPOSIZIONA DOPO UN TEMPO SE NON SI TOCCANO I CONTROLLI DELLA VISUALE
      else {
         VarObject.TRipos += delta;
         if (VarObject.TRipos > VarObject.TimeRipos) VarObject.CameraRiposiziona = true;
      }
   };
   //#endregion

   /*---------------VETTORE DI OFFSET DI POSIZIONE DEL GIMBAL DELLA CAMERA PER LA VELOCITÀ (OTTIMIZZATO)---------------------*/
   //#region
   if (GlobalVar.TutorialFlag == 0 || GlobalVar.TutorialFlag >= 4) {
      if (VarObject.GimbalPosOffset < (VarObject.VelGlobalPerc / VarObject.GimbalPosDistMot - 1) + GlobalVar.TotalModules * VarObject.SingleModuleDist) {
         VarObject.GimbalPosOffset += VarObject.GimbalPosVelMot * delta;
         MicEnginereturn.CameraGroup.children[0].children[0].position.set(0, 0, VarObject.GimbalPosOffset);
      };
      if (VarObject.GimbalPosOffset > (VarObject.VelGlobalPerc / VarObject.GimbalPosDistMot + 1) + GlobalVar.TotalModules * VarObject.SingleModuleDist) {
         VarObject.GimbalPosOffset -= VarObject.GimbalPosVelMot * delta;
         MicEnginereturn.CameraGroup.children[0].children[0].position.set(0, 0, VarObject.GimbalPosOffset);
      };
   };
   //#endregion

   /*---------------------------------TREMOLIO CAMERA ALL'AUMENTARE DELLA VELOCITÀ----------------------------------------*/
   //#region
   if (VarObject.VelEffettiva / Economy.SpeedUpgrade[GlobalVar.UpgradeMotor] > VarObject.MinSpeedVibr) {
      MicEnginereturn.CameraGroup.children[0].children[0].children[0].rotation.set(
         (Math.random() - 0.5) * VarObject.VibrIntensity * (VarObject.VelEffettiva / Economy.SpeedUpgrade[GlobalVar.UpgradeMotor]),
         (Math.random() - 0.5) * VarObject.VibrIntensity * (VarObject.VelEffettiva / Economy.SpeedUpgrade[GlobalVar.UpgradeMotor]),
         (Math.random() - 0.5) * VarObject.VibrIntensity * (VarObject.VelEffettiva / Economy.SpeedUpgrade[GlobalVar.UpgradeMotor]));
   };
   //#endregion

   /*------------------------------------------ROTAZIONE PARTI DELLA NAVE SPAZIALE----------------------------------------------------*/
   //#region
   if (MicEnginereturn.User.RotatedObjects.length > 0) {    //SE L'OGGETTO HA PARTI ROTANTI
      for (let i = 0; i < MicEnginereturn.User.RotatedObjects.length; i++) {     //PER OGNI PARTE ROTANTE
         let RotX = MicEnginereturn.User.RotatedObjects[i].RotX;
         let RotY = MicEnginereturn.User.RotatedObjects[i].RotY;
         let RotZ = MicEnginereturn.User.RotatedObjects[i].RotZ;
         //ROTAZIONE ASSE X
         if (RotX != 0) MicEnginereturn.User.Object.children[1].children[MicEnginereturn.User.RotatedObjects[i].Modulo]
            .rotation.x += RotX * delta;

         //ROTAZIONE ASSE Y
         if (RotY != 0) MicEnginereturn.User.Object.children[1].children[MicEnginereturn.User.RotatedObjects[i].Modulo]
            .rotation.y += RotY * delta;

         //ROTAZIONE ASSE Z
         if (RotZ != 0) MicEnginereturn.User.Object.children[1].children[MicEnginereturn.User.RotatedObjects[i].Modulo]
            .rotation.z += RotZ * delta;

      };
   };
   //#endregion

   /*------------------------------------------MOVIMENTO CAMERA INIZIO TUTORIAL----------------------------------------------------*/
   //#region
   //SE SI È IN TUTORIAL POSIZIONARE E RUOTARE LA CAMERA IN BASE AI VALORI DI STORY
   if (GlobalVar.TutorialFlag > 0 && GlobalVar.TutorialFlag < 4) {
      MicEnginereturn.CameraGroup.children[0].position.set(VarObject.GimbalPosX, VarObject.GimbalPosY, VarObject.GimbalPosZ - Story.CamPosZ);
      MicEnginereturn.CameraGroup.children[0].rotation.set(0, Story.CamRotY, 0);
   };
   //POSIZIONAMENTO DELLA CAMERA DISTANTE 1000 METRI E RIVOLTA VERSO IL MUSO DELLA NAVE
   if (GlobalVar.TutorialFlag == 1) {
      GlobalVar.TutorialFlag = 2;
   };
   //MOVIMENTO DI CAMERA IN AVVICINAMENTO
   if (GlobalVar.TutorialFlag == 2) {
      //AVVICINA LA CAMERA FINCHÈ LA DISTANZA È Story.CamPosZ1
      if (Story.CamPosZ > Story.CamPosZ1) Story.CamPosZ -= Story.CamPosVel * delta;
      else GlobalVar.TutorialFlag = 3;
   };
   //MOVIMENTO DI CAMERA IN AVVICINAMENTO E ROTAZIONE
   if (GlobalVar.TutorialFlag == 3) {
      //AVVICINA LA CAMERA E RUOTALA
      if (Story.CamPosZ > 0) Story.CamPosZ -= Story.CamPos1 * delta;
      if (Story.CamRotY > 0) Story.CamRotY -= Story.CamRotVel * delta;
      if (Story.CamPosZ > -1 && Story.CamPosZ < 1 && Story.CamRotY < 0.006 && Story.CamRotY > -0.006) setTimeout(() => {
         GlobalVar.TutorialFlag = 4;
      }, 500);

   };
   //#endregion

   /*--------------------------------EMISSIONE LUCE NAVE IN AVVICINAMENTO AL PIANETA-----------------------------------------------*/
   //#region
   if (MicEnginereturn.VarPlanetSystem.LimitCollision > 0 && MicEnginereturn.VarPlanetSystem.LimitCollision < 1) {
      let EmissInt = Math.pow(1 - MicEnginereturn.VarPlanetSystem.LimitCollision, 10);

      MicEnginereturn.User.Object.children[1].traverse((child) => {
         if (child.isMesh && child.material && child.material.emissive) {
            //Aggiorna solo l'intensità, senza needsUpdate
            child.material.emissiveIntensity = EmissInt;
         }
      });
   }
   //#endregion

   /*------------------------------------------------PIANO DISSOLVENZA DERIVA-------------------------------------------------------------*/
   if (VarObject.Deriva == true && VarObject.PianoDissFade > 0) {
      VarObject.PianoDissFade -= 0.3 * delta;
      VarObject.PianoDissMat.SetFade(VarObject.PianoDissFade);
   };

   /*-------------------------------------------------------STORIA----------------------------------------------------------------*/
   //#region
   //EVENTI DA AVVIARE NELL'ORBITA DELLA STAZIONE WORMHOLE
   if (GlobalVar.PlanetOrbit == 4) {
      //AGGIORNAMENTO DELLA LUCE DEL MATERIALE DI MARTE
      if (GlobalVar.Capitolo == 2) {
         MicEnginereturn.Materials.Export[0].UpdateDirectionalLight(
            MicEnginereturn.Lights.DirLight,                                                    //LUCE DIREZIONALE
            MicEnginereturn.VarPlanetSystem.References[3].DayRot.children[0]     //PIANETA DA ILLUMINARE
         );
      };

      //EVENTI SCRIPTATI PER IL TEST DELLA STAZIONE WORMHOLE
      if (GlobalVar.Capitolo == 2 && GlobalVar.Missione == 7) {
         //MOVIMENTO INDIETRO DELLA CAMERA
         if (VarObject.StepNPCTest == 1) VarObject.Camera.position.z += delta * 2000;
         if (VarObject.StepNPCTest == 2) {
            VarObject.ScaleAccensione += delta * 500;
            MicEnginereturn.VarPlanetSystem.References[3][4].DayRot.children[0].children[7].scale.setScalar(VarObject.ScaleAccensione);
         };
      };

      //VERIFICA DEL PASSAGGIO DELLA NAVE ATTRAVERSO IL PORTALE NEL GIUSTO ORDINE
      if (GlobalVar.MoonOrbit == 5) {
         //DISTANZA AL QUADRATO DAL CENTRO
         VarObject.DistCenterPortal = (
            MicEnginereturn.User.Object.position.x * MicEnginereturn.User.Object.position.x +
            MicEnginereturn.User.Object.position.y * MicEnginereturn.User.Object.position.y
         );
         //VERIFICA SE È DENTRO AL DISCO E SE GLI È VICINO SULL'ASSE Z
         VarObject.PortalInner = (VarObject.DistCenterPortal <= VarObject.PortalRadius * VarObject.PortalRadius);

         if (VarObject.PortalInner == true && Math.abs(MicEnginereturn.User.Object.position.z) < 500) {
            //PRIMA DEL DISCO
            if (MicEnginereturn.User.Object.position.z > 0) {
               VarObject.PortalBefore = true;
            }
            //DOPO IL DISCO
            else {
               if (VarObject.PortalBefore) {
                  //la nave era davanti e ora è dietro ⇒ passaggio corretto!
                  VarObject.PortalPassed = true;
               }
               VarObject.PortalAfter = true;
            };
         } else {
            //RESET QUANDO SI ESCE DAL PORTALE
            VarObject.PortalBefore = false;
            VarObject.PortalAfter = false;
            VarObject.PortalInner = false;
         };
      };

      //AGGIORNAMENTO DELLA LENTE DELA PORTALE DAL CAPITOLO 3
      if (GlobalVar.Capitolo >= 3) {
         MicEnginereturn.Materials.Export[0].UpdateDirectionalLight(
            MicEnginereturn.Lights.DirLight,                                                    //LUCE DIREZIONALE
            MicEnginereturn.VarPlanetSystem.References[3].DayRot.children[0]     //PIANETA DA ILLUMINARE
         );
      };

      //EVENTI SCRIPTATI PER GLI STEP DELLA LENTE
      if (GlobalVar.Capitolo == 3 && GlobalVar.Missione >= 1 && GlobalVar.Missione <= 2 && VarObject.StepLens == 1) VarObject.Camera.position.z += delta * 2000;

      //EVENTI SCRIPTATI PER LA SPIEGAZIONE SULLA FINE DI MARTE
      if (GlobalVar.Capitolo == 4 && GlobalVar.Missione == 0) {
         //MOVIMENTO INDIETRO DELLA CAMERA
         if (VarObject.StepNPCSpeech > 0 && VarObject.StepNPCSpeech < 5 && VarObject.Camera.position.z < 6000) VarObject.Camera.position.z += delta * 2000;
      };
   };
   //IMPULSO RADAR
   if (VarObject.RadarImpulse == true) {
      VarObject.ScaleRadar += delta;
      VarObject.ScaleValue = Math.exp(VarObject.ScaleRadar * 10);

      if (VarObject.ScaleRadar < 3) {
         VarObject.MeshImpulsoRadar.scale.setScalar(VarObject.ScaleValue);
         VarObject.MeshImpulsoRadar.material.opacity = 1.0 - (VarObject.ScaleRadar / 3);
      }
      //IMPULSO EFFETTUATO (ONCE)
      else {
         VarObject.ScaleRadar = 0;
         VarObject.MeshImpulsoRadar.scale.setScalar(0);
         VarObject.MeshImpulsoRadar.material.opacity = 1.0;
         GlobalVar.Fuel -= Economy.RadarImpFuel;
         //SALVATAGGIO DELLA POSIZIONE DELL'IMPULSO IN BASE ALL'INDICE
         SaveSystem.setItem(`PosXRadar${GlobalVar.IndexRadar + 1}`, MicEnginereturn.PhysicsEngine.UserPosWorld.x);
         SaveSystem.setItem(`PosZRadar${GlobalVar.IndexRadar + 1}`, MicEnginereturn.PhysicsEngine.UserPosWorld.z);
         SaveSystem.setItem(`RaggioRadar${GlobalVar.IndexRadar + 1}`, VarObject.DistNuvola);
         if (GlobalVar.IndexRadar < 2) GlobalVar.IndexRadar++;
         else GlobalVar.IndexRadar = 0;
         SaveSystem.setItem('IndexRadar', GlobalVar.IndexRadar);
         VarObject.RadarImpulse = false;
      };
   };
   //AGGANCIO DELLA NAVE IN DIREZIONE DELLA COMETA, TREMOLIO CAMERA E PIANO DISSOLVENZA
   if (GlobalVar.Capitolo == 5) {
      //ROTAZIONE DELLA NAVE
      if ((GlobalVar.Missione == 1 || GlobalVar.Missione == 2) && VarObject.DistNuvola < VarObject.MaxDistNuvola && VarObject.DistNuvola > VarObject.MinDistNuvola) {
         //SPOSTA IL DUMMY NELLA POSIZIONE  WORLD DELLA NAVE
         VarObject.DummyLookNuvola.position.copy(MicEnginereturn.PhysicsEngine.UserPosWorld);
         //IL DUMMY GUARDA IN DIREZIONE DELLA NUVOLA
         VarObject.DummyLookNuvola.lookAt(MicEnginereturn.GenericGroup.children[0].position);
         VarObject.DummyQuat = VarObject.DummyLookNuvola.quaternion;
         VarObject.DummyQuat.multiply(VarObject.invertQuat);
         MicEnginereturn.User.UserDummy.quaternion.slerp(VarObject.DummyQuat, delta * 2);

      };
      //TREMOLIO CAMERA E PIANO DISSOLVENZA
      if (GlobalVar.Missione == 2) {
         //TREMOLIO CAMERA E PIANO DISSOLVENZA
         if (GlobalVar.Cometa > 0) {
            //TREMOLIO CAMERA ALL'AUMENTARE DELL'ESTRAZIONE
            if (VarObject.BlockMov == false) MicEnginereturn.CameraGroup.children[0].children[0].children[0].rotation.set(
               (Math.random() - 0.5) * VarObject.VibrIntensity * (GlobalVar.Cometa / 10),
               (Math.random() - 0.5) * VarObject.VibrIntensity * (GlobalVar.Cometa / 10),
               (Math.random() - 0.5) * VarObject.VibrIntensity * (GlobalVar.Cometa / 10));

            //PIANO DISSOLVENZA 1 DOPO IL RAGGIUNGIMENTI DEL 100% (CHIUSURA)
            if (GlobalVar.Cometa >= 100 && VarObject.TimeFinalCinematic < VarObject.FinalCinematic[1] && VarObject.PianoDissFade > 0) {
               VarObject.PianoDissFade -= 0.3 * delta;
               VarObject.PianoDissMat.SetFade(VarObject.PianoDissFade);
            };
            //PIANO DISSOLVENZA 2 PRIMO RISVEGLIO ORBITA NETTUNO (APERTURA)
            if (VarObject.TimeFinalCinematic > VarObject.FinalCinematic[1] && VarObject.TimeFinalCinematic < VarObject.FinalCinematic[2] && VarObject.PianoDissFade < 1) {
               VarObject.PianoDissFade += 0.3 * delta;
               VarObject.PianoDissMat.SetFade(VarObject.PianoDissFade);
            };
            //PIANO DISSOLVENZA 3 PRIMO RISVEGLIO ORBITA NETTUNO (CHIUSURA)
            if (VarObject.TimeFinalCinematic > VarObject.FinalCinematic[3] && VarObject.TimeFinalCinematic < VarObject.FinalCinematic[4] && VarObject.PianoDissFade > 0) {
               VarObject.PianoDissFade -= 0.3 * delta;
               VarObject.PianoDissMat.SetFade(VarObject.PianoDissFade);
            };
            //PIANO DISSOLVENZA 4 SECONDO RISVEGLIO ORBITA MARTE (APERTURA)
            if (VarObject.TimeFinalCinematic > VarObject.FinalCinematic[5] && VarObject.TimeFinalCinematic < VarObject.FinalCinematic[6] && VarObject.PianoDissFade < 1) {
               VarObject.PianoDissFade += 0.3 * delta;
               VarObject.PianoDissMat.SetFade(VarObject.PianoDissFade);
            };
            //PIANO DISSOLVENZA 5 SECONDO RISVEGLIO ORBITA MARTE (CHIUSURA)
            if (VarObject.TimeFinalCinematic > VarObject.FinalCinematic[6] && VarObject.TimeFinalCinematic < VarObject.FinalCinematic[7] && VarObject.PianoDissFade > 0) {
               VarObject.PianoDissFade -= 0.3 * delta;
               VarObject.PianoDissMat.SetFade(VarObject.PianoDissFade);
            };
         };
         //ROTAZIONE COMETA
         if (VarObject.BlockMov == false) MicEnginereturn.GenericGroup.children[0].children[9].rotation.z += 0.1 * delta;
      };
   };
   //#endregion

   if (VarObject.Death == true) Esplosione.Update(delta);
};

//-----------------------------------------------PAGINA DELLA MAPPA 29---------------------------------------------//
function UpdateMap(delta) {
   /*---------------------AGGIORNAMENTO VARIABILI DYNAMIC PLANET MAP ------------------------*/
   //#region
   MicEnginereturn.VarPlanetMap.LevelZoom = VarObjMap.LevelZoom;
   //#endregion
};

//---------------------------------------------PAGINA STAZIONE SPAZIALE 1 HANGAR 69-----------------------------------------//
function UpdateStationHangar(delta) {
   /*------------------------------------------PARTI DINAMICHE NAVE SPAZIALE----------------------------------------------------*/
   //#region
   if (GlobalVar.StationType == 4 && MicEnginereturn.User.RotatedObjects.length > 0) {    //SE L'OGGETTO HA PARTI ROTANTI
      for (let i = 0; i < MicEnginereturn.User.RotatedObjects.length; i++) {     //PER OGNI PARTE ROTANTE
         let RotX = MicEnginereturn.User.RotatedObjects[i].RotX;
         let RotY = MicEnginereturn.User.RotatedObjects[i].RotY;
         let RotZ = MicEnginereturn.User.RotatedObjects[i].RotZ;
         //ROTAZIONE ASSE X
         if (RotX != 0) MicEnginereturn.User.Object.children[1].children[MicEnginereturn.User.RotatedObjects[i].Modulo]
            .rotation.x += RotX * delta;

         //ROTAZIONE ASSE Y
         if (RotY != 0) MicEnginereturn.User.Object.children[1].children[MicEnginereturn.User.RotatedObjects[i].Modulo]
            .rotation.y += RotY * delta;

         //ROTAZIONE ASSE Z
         if (RotZ != 0) MicEnginereturn.User.Object.children[1].children[MicEnginereturn.User.RotatedObjects[i].Modulo]
            .rotation.z += RotZ * delta;

      };
   };
   //#endregion

   G0_CoinAnimation(CoinGoldImg, MoneyObj, delta);
   G0_CoinAnimation(CoinSilverImg, CoinObj, delta);
};

//---------------------------------------------PAGINA STAZIONE SPAZIALE HUB 52-----------------------------------------//
function UpdateStationHub(delta) {
   G0_CoinAnimation(CoinGoldImg, MoneyObj, delta);
   G0_CoinAnimation(CoinSilverImg, CoinObj, delta);
};

//--------------------------------------PAGINA STAZIONE INDUSTRIALE (SCAVA METEORITE) 34-----------------------------------------//
function UpdateStationExtraction(delta) {
   G0_CoinAnimation(CoinGoldImg, MoneyObj, delta);
   G0_CoinAnimation(CoinSilverImg, CoinObj, delta);

   //-------------------------------------COMANDI MINIGIOCO CON IL PAD VIRTUALE E IL GAMEPAD------------------------------//
   if (GlobalVar.GameEnabled == true) {
      Controller.Update();
      GlobalVar.ComY = Controller.Axe[0];
      GlobalVar.ComX = -Controller.Axe[1];
      VarObjectsExtraction.AngleX += GlobalVar.ComX * VarObjectsExtraction.VelX;
      VarObjectsExtraction.AngleY += GlobalVar.ComY * VarObjectsExtraction.VelY;

      //ANGOLATURA ORBITCONTROL CON IL PAD VIRTUALE
      VarObjectsExtraction.AngleY = Math.max(0.01, Math.min(Math.PI - 0.01, VarObjectsExtraction.AngleY));
      const x = VarObjectsExtraction.Radius * Math.sin(VarObjectsExtraction.AngleY) * Math.sin(VarObjectsExtraction.AngleX);
      const y = VarObjectsExtraction.Radius * Math.cos(VarObjectsExtraction.AngleY);
      const z = VarObjectsExtraction.Radius * Math.sin(VarObjectsExtraction.AngleY) * Math.cos(VarObjectsExtraction.AngleX);

      MicEnginereturn.CameraGroup.children[0].children[0].children[0].position.set(x, y, z);
      MicEnginereturn.OrbitControl.target.set(0, 0, 0); //guarda al centro
   };
};

//---------------------------------------------PAGINA STAZIONE CITY (CORSA ROBOT) 7-----------------------------------------//
function UpdateStationCity(delta) {
   G0_CoinAnimation(CoinGoldImg, MoneyObj, delta);
   G0_CoinAnimation(CoinSilverImg, CoinObj, delta);

   CorsaRobot.UpdateGame(delta);
};

//---------------------------------------------PAGINA STAZIONE RESEARCH (COMBINA COLORE) 38-----------------------------------------//
function UpdateStationResearch(delta) {
   G0_CoinAnimation(CoinGoldImg, MoneyObj, delta);
   G0_CoinAnimation(CoinSilverImg, CoinObj, delta);

   //-------------------------------------COMANDI MINIGIOCO CON IL PAD VIRTUALE E IL GAMEPAD------------------------------//
   //#region
   if (GlobalVar.GameEnabled == true) {
      Controller.Update();
      if (CombinaColore.Target.y > -1) {
         GlobalVar.ComZ = Controller.Axe[0];
         GlobalVar.ComX = -Controller.Axe[1];
      }
      else {
         GlobalVar.ComX = 0;
         GlobalVar.ComZ = 0;
      };
   };

   //COMANDO DI Y - PAD VIRTUALE
   if (GlobalVar.Control == 0) {
      if (VarObjectsResearch.ComUp == false && VarObjectsResearch.ComDown == false) GlobalVar.ComY = 0;
      if (VarObjectsResearch.ComUp == true && VarObjectsResearch.ComDown == false) GlobalVar.ComY = -100;
      if (VarObjectsResearch.ComUp == false && VarObjectsResearch.ComDown == true) GlobalVar.ComY = 100;
   };
   //COMANDO DI Y - PAD FISICO
   if (GlobalVar.Control == 1) {
      GlobalVar.ComY = -Controller.Axe[3] + Controller.Axe[4];
   };

   CombinaColore.UpdateGame(GlobalVar.ComX, GlobalVar.ComY, GlobalVar.ComZ, delta);
   //#endregion
};

//---------------------------------------------PAGINA NAVE TELESCOPIO (TELESCOPIO) 14-----------------------------------------//
function UpdateStationShip1(delta) {
   G0_CoinAnimation(CoinGoldImg, MoneyObj, delta);
   G0_CoinAnimation(CoinSilverImg, CoinObj, delta);

   //-------------------------------------COMANDI MINIGIOCO CON IL PAD VIRTUALE E IL GAMEPAD------------------------------//
   //#region
   if (GlobalVar.GameEnabled == true) {
      Controller.Update();
      GlobalVar.ComY = Controller.Axe[0];
      GlobalVar.ComX = -Controller.Axe[1];
      GlobalVar.ComZ = -Controller.Axe[2];

      if (GlobalVar.Control == 1) {
         GlobalVar.ComW = Controller.Axe[4] - Controller.Axe[3];
      }
      else {
         if (GlobalVar.ComPulsUp == true && GlobalVar.ComPulsDown == false) GlobalVar.ComW = 100;
         else if (GlobalVar.ComPulsUp == false && GlobalVar.ComPulsDown == true) GlobalVar.ComW = -100;
         else GlobalVar.ComW = 0;
      };
   };

   Telescopio.UpdateGame(GlobalVar.ComX, GlobalVar.ComY, GlobalVar.ComZ, GlobalVar.ComW, delta);
   //#endregion
};

//---------------------------------------------PAGINA NAVE PORTACONTAINER (CARROPONTE) 22-----------------------------------------//
function UpdateStationShip2(delta) {
   G0_CoinAnimation(CoinGoldImg, MoneyObj, delta);
   G0_CoinAnimation(CoinSilverImg, CoinObj, delta);

   //-------------------------------------COMANDI MINIGIOCO CON IL PAD VIRTUALE E IL GAMEPAD------------------------------//
   //#region
   if (GlobalVar.GameEnabled == true) {
      Controller.Update();
      //COMANDI VIRTUALI
      GlobalVar.ComY = Controller.Axe[0];
      GlobalVar.ComX = -Controller.Axe[1];
      //GAMEPAD FISICO
      if (GlobalVar.Control == 1) {
         if (Controller.Axe[4] > RegAxe[4] / 2) GlobalVar.ComZ = 1;
         if (Controller.Axe[3] > RegAxe[3] / 2) GlobalVar.ComZ = 0;
      };
   };
   Carroponte.UpdateGame(GlobalVar.ComX, GlobalVar.ComY, GlobalVar.ComZ, GlobalVar.ComPuls, delta);
   //#endregion
};

//----------------------------------------------------PAGINA STAZIONE WORMHOLE------------------------------------------------------//
function UpdateStationWormhole(delta) {
   G0_CoinAnimation(CoinGoldImg, MoneyObj, delta);
   G0_CoinAnimation(CoinSilverImg, CoinObj, delta);
};

//------------------------------------------------PAGINA CONTROLS-----------------------------------------------//
function UpdateControls(delta) {
   Controller.Update();
   //ROTAZIONE NAVE
   MicEnginereturn.User.Object.children[1].rotation.x = Controller.Axe[0] / 100;
   MicEnginereturn.User.Object.children[1].rotation.y = Controller.Axe[1] / 100;
   //ROTAZIONE VISUALE

   if (Controller.Axe[5] < -5 || Controller.Axe[5] > 5 || Controller.Axe[6] < -5 || Controller.Axe[6] > 5) {
      MicEnginereturn.VarObject.GimbalAng.x += -Controller.Axe[6] * delta * 0.01;
      MicEnginereturn.VarObject.GimbalAng.y += -Controller.Axe[5] * delta * 0.01;

      MicEnginereturn.Math.E3_AngleZero(MicEnginereturn.VarObject.GimbalAng, MicEnginereturn.VarObject.GimbalAngOffset);
      MicEnginereturn.CameraGroup.children[0].rotation.set(0, MicEnginereturn.VarObject.GimbalAngOffset.y, 0);
      MicEnginereturn.CameraGroup.children[0].children[0].rotation.set(MicEnginereturn.VarObject.GimbalAngOffset.x, 0, 0);
   }
   else {
      if (MicEnginereturn.VarObject.GimbalAng.x > 0) MicEnginereturn.VarObject.GimbalAng.x -= delta * 1;
      if (MicEnginereturn.VarObject.GimbalAng.x < 0) MicEnginereturn.VarObject.GimbalAng.x += delta * 1;

      if (MicEnginereturn.VarObject.GimbalAng.y > 0) MicEnginereturn.VarObject.GimbalAng.y -= delta * 1;
      if (MicEnginereturn.VarObject.GimbalAng.y < 0) MicEnginereturn.VarObject.GimbalAng.y += delta * 1;

      MicEnginereturn.Math.E3_AngleZero(MicEnginereturn.VarObject.GimbalAng, MicEnginereturn.VarObject.GimbalAngOffset);
      MicEnginereturn.CameraGroup.children[0].rotation.set(0, MicEnginereturn.VarObject.GimbalAngOffset.y, 0);
      MicEnginereturn.CameraGroup.children[0].children[0].rotation.set(MicEnginereturn.VarObject.GimbalAngOffset.x, 0, 0);
   };

   if (GlobalVar.Control == 1) {
      GlobalVar.RotZControls = Controller.Button[1] * 1 * ((RegAxe[2] + 5) / 100) - Controller.Button[2] * 1 * ((RegAxe[2] + 5) / 100);
      if (MicEnginereturn.User.Object.children[1].rotation.z > GlobalVar.RotZControls) MicEnginereturn.User.Object.children[1].rotation.z -= delta * 2;
      if (MicEnginereturn.User.Object.children[1].rotation.z < GlobalVar.RotZControls) MicEnginereturn.User.Object.children[1].rotation.z += delta * 2;
   };
};
//#endregion

/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/*----------------------------------------------------INIZIALIZZAZIONE GIOCO-------------------------------------------------------------*/
async function initApp() {
   //NASCONDERE LA STATUS BAR DI ANDROID
   if (GlobalVar.HideStatusBar == true) {
      try {
         await S0_CapacitorStatusBar(GlobalVar.HideStatusBarLog);
      } catch (error) {
      };
   };
   //ABILITARE ADMOB
   if (GlobalVar.EnableAdmob) {
      try {
         Admob = await S0_CapacitorAdmob(GlobalVar.BannerId, GlobalVar.VideoId, GlobalVar.EnableAdmobLog);
      } catch { }
   };
   //ABILITARE CRAZYGAMES
   if (GlobalVar.EnableCrazyGames) {
      try {
         Crazygames = await S0_CrazyGamesAds(GlobalVar.EnableCrazyGamesLog);
      } catch { }
   };
   //ABILITARE KEEPAWAKE
   if (GlobalVar.EnableKeepAwake) {
      try {
         await S0_CapacitorKeepAwake();
      } catch { }
   };

   //MOSTRARE GLI ALERT PER GLI ERRORI PER ANDROID
   if (GlobalVar.AndroidAlert == true) S0_AndroidAlerts(10);

   //---------------------------------------------PAGINA DEL TITOLO----------------------------------------------//
   if (GlobalVar.Page == null) {
      /*-----------------------------------------------PARAMETRI ENGINE----------------------------------------------------------*/
      MicEngineParam = TitleParam;

      /*----------------------------------------------CARICAMENTO ENGINE--------------------------------------------------------*/
      // async function startGame() {
      //    MicEnginereturn = await MicEngine(MicEngineParam, Oggetti, Geometrie, Materiali);
      //    if (MicEngineParam.Moduli.Debug == true && MicEngineParam.Debug.Return == true) {
      //       console.log("MicEnginereturn");
      //       console.log(MicEnginereturn.VarObject.E3_ConsoleLogSimpleObject(MicEnginereturn));
      //    };

      //    const FirstLoad = SaveSystem.getItem("FirstLoad");

      //    /*--------------------------------------------GENERAZIONE HUD-----------------------------------------------------*/
      //    // const BenchmarkHUDCanvas = await MicEnginereturn.E3_BenchmarkCanvas({
      //    //    Minimal: true,
      //    //    Style: "Neon",
      //    //    Logo: Sprite.Logo,
      //    //    Color1: Colors.PassivePuls,
      //    //    Color2: Colors.ActivePuls,
      //    //    Color3: Colors.RedBar,
      //    //    LimitTexture: 3800,
      //    //    LimitBuffer: 512,
      //    //    LimitVertex: 3,
      //    //    LimitPrecision: 10,
      //    //    LimitVaryingVectors: 8,
      //    //    LimitFragmentUniformVectors: 64,
      //    //    LimitVertexUniformVectors: 128,
      //    // });

      //    const Benchmark = await MicEnginereturn.E3_Benchmark({
      //       LimitTexture: 3800,
      //       LimitBuffer: 512,
      //       LimitVertex: 3,
      //       LimitPrecision: 10,
      //       LimitVaryingVectors: 8,
      //       LimitFragmentUniformVectors: 64,
      //       LimitVertexUniformVectors: 128,
      //    });

      //    const TitleHUDCanvas = S0_GenerateHUDCanvas(TitleHUDObj);

      //    //PULSANTE START
      //    // TitleHUDCanvas.setButtonCallback(0, () => {
      //    //    MicEnginereturn.Audio.PlayOnceSound(0, GlobalVar.VolumeSounds / 100);      //CLICK
      //    //    G0_ShowLoadingAndReload("Home");     //SaveSystem.update();
      //    // });

      //    //PRESET GRAFICI CONSIGLIATI
      //    function GetIndexBenchmark() {
      //       // const score = BenchmarkHUDCanvas.Performance.benchmark.Score1;
      //       const score = Benchmark.benchmark.Score1;
      //       if (Number.isFinite(score)) {
      //          for (let i = 0; i < GlobalVar.BenchmarkSoglie.length; i++) {
      //             if (score < GlobalVar.BenchmarkSoglie[i]) return i + 1;
      //          };
      //          return 8;
      //       }
      //       return 2;
      //    };
      //    GlobalVar.GraphicPreset = GetIndexBenchmark();



      //    //RIQUADRO RESPONSO E PULSANTI DI AVVIO E RESET
      //    const TestoResponso = [];
      //    // if (BenchmarkHUDCanvas.Performance.compatibility == false && BenchmarkHUDCanvas.Performance.supportsWebGL < 2) {
      //    //WEBGL NON COMPATIBILE
      //    if (Benchmark.compatibility == false && Benchmark.supportsWebGL < 2) {
      //       // TitleHUDCanvas.showButton(0, false);
      //       // TitleHUDCanvas.showButton(1, false);
      //       TestoResponso[0] = Testi.Titolo.Incompatibile[GlobalVar.Language];
      //       TestoResponso[1] = "";
      //    }
      //    else {
      //       //DISPOSITIVO RICONOSCIUTO
      //       // if (Number.isFinite(BenchmarkHUDCanvas.Performance.benchmark.Score1)) {
      //       if (Number.isFinite(Benchmark.benchmark.Score1)) {
      //          TestoResponso[0] = Testi.Titolo.DispositivoOk[GlobalVar.Language];
      //          TestoResponso[1] = `${Testi.Titolo.PresetGraphics[GlobalVar.Language]}${GlobalVar.GraphicPreset}`;
      //       }
      //       //DISPOSITIVO NON RICONOSCIUTO
      //       else {
      //          TestoResponso[0] = Testi.Titolo.DispositivoNo[GlobalVar.Language];
      //          TestoResponso[1] = `${Testi.Titolo.PresetGraphics[GlobalVar.Language]}${2}`;
      //       };
      //    };

      //    //RIPRISTINO VARIABILE PRESET GRAFICO IN CASO DI VALORE NULLO
      //    if (!Number.isFinite(GlobalVar.GraphicPreset)) {
      //       GlobalVar.GraphicPreset = 1;
      //       SaveSystem.setItem('GraphicPreset', GlobalVar.GraphicPreset);
      //    };

      //    //PRIMO AVVIO
      //    if (!FirstLoad) {
      //       if (GlobalVar.GraphicPreset > 0) {
      //          GlobalVar.Graphic = GraphicPreset.Preset[GlobalVar.GraphicPreset - 1].Graphic;
      //          GlobalVar.Texture = GraphicPreset.Preset[GlobalVar.GraphicPreset - 1].Texture;
      //          GlobalVar.Resolution = GraphicPreset.Preset[GlobalVar.GraphicPreset - 1].Resolution;
      //          GlobalVar.Antialiasing = GraphicPreset.Preset[GlobalVar.GraphicPreset - 1].Antialiasing;
      //          GlobalVar.Glow = GraphicPreset.Preset[GlobalVar.GraphicPreset - 1].Glow;
      //          GlobalVar.AmbMap = GraphicPreset.Preset[GlobalVar.GraphicPreset - 1].AmbMap;
      //       };
      //       //SAVESYSTEM
      //       SaveSystem.setItem('GraphicPreset', GlobalVar.GraphicPreset);
      //       SaveSystem.setItem('Graphic', GlobalVar.Graphic);
      //       SaveSystem.setItem('Texture', GlobalVar.Texture);
      //       SaveSystem.setItem('Resolution', GlobalVar.Resolution);
      //       SaveSystem.setItem('Antialiasing', GlobalVar.Antialiasing);
      //       SaveSystem.setItem('Glow', GlobalVar.Glow);
      //       SaveSystem.setItem('AmbMap', GlobalVar.AmbMap);
      //       SaveSystem.setItem('FirstLoad', true);
      //    }
      //    else {
      //       TitleHUDCanvas.setButtonText(0, `${TestoResponso[0]}
      //       ${TestoResponso[1]}`);
      //    }

      //    // BenchmarkHUDCanvas.render();
      //    TitleHUDCanvas.render();

      //    //AVANZAMENTO DELLA BARRA
      //    let BarValue = 0;

      //    setInterval(() => {
      //       if (BarValue < 1) BarValue += 0.05;
      //       // else G0_ShowLoadingAndReload("Home");     //SaveSystem.update();
      //       TitleHUDCanvas.setBarValue(0, BarValue);
      //       TitleHUDCanvas.render();
      //    }, 50);

      //    //SALVA NEL SAVESYSTEM IL RISULTATO DEL BENCHMARK 1
      //    // if (Number.isFinite(BenchmarkHUDCanvas.Performance.benchmark.Score1)) SaveSystem.setItem(`Benchmark`, BenchmarkHUDCanvas.Performance.benchmark.Score1);
      //    if (Number.isFinite(Benchmark.benchmark.Score1)) SaveSystem.setItem(`Benchmark`, Benchmark.benchmark.Score1);
      //    else SaveSystem.setItem(`Benchmark`, 0);
      // };
      async function startGame() {
         MicEnginereturn = await MicEngine(MicEngineParam, Oggetti, Geometrie, Materiali);
         if (MicEngineParam.Moduli.Debug == true && MicEngineParam.Debug.Return == true) {
            console.log("MicEnginereturn");
            console.log(MicEnginereturn.VarObject.E3_ConsoleLogSimpleObject(MicEnginereturn));
         };

         const FirstLoad = SaveSystem.getItem("FirstLoad");

         /*--------------------------------------------GENERAZIONE HUD-----------------------------------------------------*/
         let BarValue = 0;    //VARIABILE DI AVANZAMENTO BARRA 0-1

         const Benchmark = await MicEnginereturn.E3_Benchmark({
            LimitTexture: 3800,
            LimitBuffer: 512,
            LimitVertex: 3,
            LimitPrecision: 10,
            LimitVaryingVectors: 8,
            LimitFragmentUniformVectors: 64,
            LimitVertexUniformVectors: 128,
         });

         const TitleHUDCanvas = S0_GenerateHUDCanvas(TitleHUDObj);

         //PRESET GRAFICI CONSIGLIATI
         function GetIndexBenchmark() {
            const score = Benchmark.benchmark.Score1;
            if (Number.isFinite(score)) {
               for (let i = 0; i < GlobalVar.BenchmarkSoglie.length; i++) {
                  if (score < GlobalVar.BenchmarkSoglie[i]) return i + 1;
               };
               return 8;
            }
            return 2;
         };
         GlobalVar.GraphicPreset = GetIndexBenchmark();

         //RIQUADRO RESPONSO E PULSANTI DI AVVIO E RESET
         const TestoResponso = [];
         //WEBGL NON COMPATIBILE
         if (Benchmark.compatibility == false && Benchmark.supportsWebGL < 2) {     //FORSE METTERE IN OR
            TestoResponso[0] = Testi.Titolo.Incompatibile[GlobalVar.Language];
            TestoResponso[1] = "";
         }
         else {
            //DISPOSITIVO RICONOSCIUTO
            if (Number.isFinite(Benchmark.benchmark.Score1)) {
               TestoResponso[0] = Testi.Titolo.DispositivoOk[GlobalVar.Language];
               TestoResponso[1] = `${Testi.Titolo.PresetGraphics[GlobalVar.Language]}${GlobalVar.GraphicPreset}`;
            }
            //DISPOSITIVO NON RICONOSCIUTO
            else {
               TestoResponso[0] = Testi.Titolo.DispositivoNo[GlobalVar.Language];
               TestoResponso[1] = `${Testi.Titolo.PresetGraphics[GlobalVar.Language]}${2}`;
            };
         };

         //RIPRISTINO VARIABILE PRESET GRAFICO IN CASO DI VALORE NULLO
         if (!Number.isFinite(GlobalVar.GraphicPreset)) {
            GlobalVar.GraphicPreset = 1;
            SaveSystem.setItem('GraphicPreset', GlobalVar.GraphicPreset);
         };

         //PRIMO AVVIO
         if (!FirstLoad) {
            if (GlobalVar.GraphicPreset > 0) {
               GlobalVar.Graphic = GraphicPreset.Preset[GlobalVar.GraphicPreset - 1].Graphic;
               GlobalVar.Texture = GraphicPreset.Preset[GlobalVar.GraphicPreset - 1].Texture;
               GlobalVar.Resolution = GraphicPreset.Preset[GlobalVar.GraphicPreset - 1].Resolution;
               GlobalVar.Antialiasing = GraphicPreset.Preset[GlobalVar.GraphicPreset - 1].Antialiasing;
               GlobalVar.Glow = GraphicPreset.Preset[GlobalVar.GraphicPreset - 1].Glow;
               GlobalVar.AmbMap = GraphicPreset.Preset[GlobalVar.GraphicPreset - 1].AmbMap;
            };
            //SAVESYSTEM
            SaveSystem.setItem('GraphicPreset', GlobalVar.GraphicPreset);
            SaveSystem.setItem('Graphic', GlobalVar.Graphic);
            SaveSystem.setItem('Texture', GlobalVar.Texture);
            SaveSystem.setItem('Resolution', GlobalVar.Resolution);
            SaveSystem.setItem('Antialiasing', GlobalVar.Antialiasing);
            SaveSystem.setItem('Glow', GlobalVar.Glow);
            SaveSystem.setItem('AmbMap', GlobalVar.AmbMap);
            SaveSystem.setItem('FirstLoad', true);
         }
         else {
            TitleHUDCanvas.setButtonText(0, `${TestoResponso[0]}
            ${TestoResponso[1]}`);
         };

         TitleHUDCanvas.render();

         //AVANZAMENTO DELLA BARRA
         setInterval(() => {
            if (BarValue < 1) BarValue += 0.05;
            else if (Benchmark.compatibility == true && Benchmark.supportsWebGL >= 2) G0_ShowLoadingAndReload("Home");     //SaveSystem.update();
            TitleHUDCanvas.setBarValue(0, BarValue);

            if (!FirstLoad) {
               if (BarValue <= 0.8) TitleHUDCanvas.setButtonText(0, `${Testi.Titolo.FirstLoad1[GlobalVar.Language]}
            ${Testi.Titolo.FirstLoad2[GlobalVar.Language]}`);
               else TitleHUDCanvas.setButtonText(0, `${TestoResponso[0]}
            ${TestoResponso[1]}`);
            };

            TitleHUDCanvas.render();
         }, 50);

         //SALVA NEL SAVESYSTEM IL RISULTATO DEL BENCHMARK 1
         if (Number.isFinite(Benchmark.benchmark.Score1)) SaveSystem.setItem(`Benchmark`, Benchmark.benchmark.Score1);
         else SaveSystem.setItem(`Benchmark`, 0);
      };
      startGame().then(() => {
         gameReady = true;
         MicEnginereturn.VarObject.E3_UpdateProgress(true);
      });
   };

   //---------------------------------------------PAGINA DEL MENU HOME----------------------------------------------//
   if (GlobalVar.Page == "Home") {
      /*-----------------------------------------------PARAMETRI ENGINE----------------------------------------------------------*/
      MicEngineParam = HomeParam;

      if (GlobalVar.EnableHomeEngine == false) {
         MicEngineParam.Moduli.ModularShip = false;
         MicEngineParam.Moduli.Skybox = false;
      };

      /*----------------------------------------------CARICAMENTO ENGINE--------------------------------------------------------*/
      async function startGame() {
         MicEnginereturn = await MicEngine(MicEngineParam, Oggetti, Geometrie, Materiali);
         if (MicEngineParam.Moduli.Debug == true && MicEngineParam.Debug.Return == true) {
            console.log("MicEnginereturn");
            console.log(MicEnginereturn.VarObject.E3_ConsoleLogSimpleObject(MicEnginereturn));
         };
         /*-----------------POSIZIONE USER--------------*/
         MicEnginereturn.User.Object.position.set(0, 0, 0);

         /*-------------------CAMERA--------------------*/
         MicEnginereturn.CameraGroup.position.set(50, 5, -50);

         //CARICAMENTO VALORI DI UPGRADE DAL LOCAL STORAGE
         GlobalVar.UpgradeCockpit = Number(SaveSystem.getItem(`UpgradeCockpit`));
         GlobalVar.UpgradeTank = Number(SaveSystem.getItem(`UpgradeTank`));
         GlobalVar.UpgradeMotor = Number(SaveSystem.getItem(`UpgradeMotor`));

         /*CAMBIO COLORE*/
         if (GlobalVar.EnableHomeEngine == true) {
            G0_ChangeShipColor();
            G0_UpdateShipUpgrade();
         };

         /*--------------------------------------------GENERAZIONE HUD-----------------------------------------------------*/
         //#region
         const HomeHUDCanvas = S0_GenerateHUDCanvas(HomeHUDObj);

         //MOSTRA I PULSANTI EDITOR E SNIPPET
         if (GlobalVar.EgineButtons == false) {
            HomeHUDCanvas.showButton(6, false);    //EDITOR
            HomeHUDCanvas.showButton(7, false);    //SNIPPET
         };

         //PULSANTE TUTORIAL
         HomeHUDCanvas.setButtonCallback(1, () => {
            MicEnginereturn.Audio.PlayOnceSound(0, GlobalVar.VolumeSounds / 200);      //CLICK
            let result = window.confirm(Testi.Confirm.NewGame[GlobalVar.Language]);
            let result2;
            if (result == true) result2 = window.confirm(Testi.Confirm.NewGame2[GlobalVar.Language]);
            if (result2 == true) {
               SaveSystem.setItem("NewGame", 0);
               SaveSystem.setItem("Tutorial", 1);
               SaveSystem.setItem("PlanetOrbit", GameParam.PlanetarySystem.Parametri.PlanetOrbit);
               S0_GenerateRandomColors(GlobalVar.RandomColors);
               G0_ShowLoadingAndReload("Game");     //SaveSystem.update();
            };
         });

         //PULSANTE NEW GAME
         HomeHUDCanvas.showButton(2, false);

         //PULSANTE CONTINUE
         if (Number(SaveSystem.getItem(`NewGame`)) == 1) HomeHUDCanvas.setButtonCallback(3, () => {
            MicEnginereturn.Audio.PlayOnceSound(0, GlobalVar.VolumeSounds / 200);      //CLICK
            if (Number(SaveSystem.getItem(`SpaceStation`)) == 0)
               G0_ShowLoadingAndReload("Game");     //SaveSystem.update();
            if (Number(SaveSystem.getItem(`SpaceStation`)) == 1)
               G0_ShowLoadingAndReload("Station");     //SaveSystem.update();
         });
         else HomeHUDCanvas.setButtonColor(3, Colors.DisabledMission);
         //PULSANTE OPTIONS
         HomeHUDCanvas.setButtonCallback(4, () => {
            MicEnginereturn.Audio.PlayOnceSound(0, GlobalVar.VolumeSounds / 200);      //CLICK
            G0_ShowLoadingAndReload("Options");     //SaveSystem.update();
         });
         //PULSANTE CONTROLS
         HomeHUDCanvas.setButtonCallback(5, () => {
            MicEnginereturn.Audio.PlayOnceSound(0, GlobalVar.VolumeSounds / 200);      //CLICK
            G0_ShowLoadingAndReload("Controls");     //SaveSystem.update();
         });
         //PULSANTE EDITOR
         HomeHUDCanvas.setButtonCallback(6, () => {
            MicEnginereturn.Audio.PlayOnceSound(0, GlobalVar.VolumeSounds / 200);      //CLICK
            G0_ShowLoadingAndReload("Editor");     //SaveSystem.update();
         });
         //PULSANTE SNIPPET
         HomeHUDCanvas.setButtonCallback(7, () => {
            MicEnginereturn.Audio.PlayOnceSound(0, GlobalVar.VolumeSounds / 200);      //CLICK
            G0_ShowLoadingAndReload("Snippet");     //SaveSystem.update();
         });
         //PULSANTE CREDITS
         HomeHUDCanvas.setButtonCallback(8, () => {
            MicEnginereturn.Audio.PlayOnceSound(0, GlobalVar.VolumeSounds / 200);      //CLICK
            G0_ShowLoadingAndReload("Credits");     //SaveSystem.update();
         });
         //PULSANTE IMAGES
         HomeHUDCanvas.setButtonCallback(9, () => {
            MicEnginereturn.Audio.PlayOnceSound(0, GlobalVar.VolumeSounds / 200);      //CLICK
            G0_ShowLoadingAndReload("Images");     //SaveSystem.update();
         });

         /*----------------BARRE PROGRESSIONE GIOCO------------------*/
         //BARRA STORIA
         let TotalMissions = 0;        //NUMERO TOTALE DI MISSIONI NELLA STORIA
         let Progressione = 0;
         //PER OGNI CAPITOLO
         for (let i = 0; i < Testi.Missions.length; i++) {
            //AGGIUNGI AL TOTALE LE MISSIONI PRESENTI NEL CAPITOLO
            TotalMissions += Testi.Missions[i].Missioni.length;
            if (GlobalVar.Capitolo > i) Progressione += Testi.Missions[i].Missioni.length;
            else if (GlobalVar.Capitolo == i) Progressione += GlobalVar.Missione;
         };

         if (GlobalVar.Capitolo == 5 && GlobalVar.Missione == 3) {
            HomeHUDCanvas.setBarValue(0, 1);
            HomeHUDCanvas.setBarText(0, `100%`);
         }
         else {
            HomeHUDCanvas.setBarValue(0, Progressione / TotalMissions);
            HomeHUDCanvas.setBarText(0, `${((Progressione / TotalMissions) * 100).toFixed(1)}%`);
         };

         //BARRA ESTRAZIONE METEORITE
         const MeteoriteGameLevel = Number(SaveSystem.getItem(`ScavaMeteoriteLevel`));
         const MeteoriteMaxLevel = Economy.ScavaMeteoriteMaxLevel;
         HomeHUDCanvas.setBarValue(1, MeteoriteGameLevel / MeteoriteMaxLevel);
         HomeHUDCanvas.setBarText(1, `${((MeteoriteGameLevel / MeteoriteMaxLevel) * 100).toFixed(1)}%`);

         //BARRA RICERCA MATERIALE
         const MaterialeGameLevel = Number(SaveSystem.getItem(`CombinaColoreLevel`));
         const MaterialeMaxLevel = Economy.CombinaColoreMaxLevel;
         HomeHUDCanvas.setBarValue(2, MaterialeGameLevel / MaterialeMaxLevel);
         HomeHUDCanvas.setBarText(2, `${((MaterialeGameLevel / MaterialeMaxLevel) * 100).toFixed(1)}%`);

         //BARRA TELESCOPIO
         let Perc = 0;           //PERCENTUALE DI COMPLETAMENTO DI CIASCUNA IMMAGINE
         for (let i = 0; i < 7; i++) {
            let Completamento = 0;
            for (let a = 0; a < 24; a++) {
               Completamento += Number(SaveSystem.getItem(`Telescopio${i}Img${a}`));
            };
            Perc += Completamento / 24;
         };
         Perc = Perc / 7;
         HomeHUDCanvas.setBarValue(3, Perc);
         HomeHUDCanvas.setBarText(3, `${(Perc * 100).toFixed(1)}%`);

         //BARRA CARROPONTE
         const CarroponteGameLevel = Number(SaveSystem.getItem(`CarroponteLevel`));
         const CarroponteMaxLevel = Economy.CarroponteMaxLevel;
         HomeHUDCanvas.setBarValue(4, CarroponteGameLevel / CarroponteMaxLevel);
         HomeHUDCanvas.setBarText(4, `${((CarroponteGameLevel / CarroponteMaxLevel) * 100).toFixed(1)}%`);

         /*--------------------------------NOZIONI-------------------------------*/
         let RandomNum = Math.floor(Math.random() * Testi.NozioniGioco.length);
         HomeHUDCanvas.setImageUrl(4, NPC.Guida.Immagini[GlobalVar.GenderNPC]);
         HomeHUDCanvas.setButtonText(10, Testi.NozioniGioco[RandomNum][GlobalVar.Language], "12px");

         HomeHUDCanvas.render();

         /*--------------------------------VERSIONI-------------------------------*/
         HomeHUDCanvas.setButtonText(11, MicEnginereturn.VarObject.Version, "12px");
         HomeHUDCanvas.setButtonText(12, GameVersion, "12px");

         //#endregion

         /*------------------------------------------------AUDIO---------------------------------------------------------*/
         // const MusicSound = new MicEnginereturn.VarObject.OnceFunctionBool(function () {
         //    MicEnginereturn.Audio.PlayOnceSound(0, GlobalVar.VolumeMusic / 100);
         // });

         // setInterval(() => {
         //    MusicSound.Update(MicEnginereturn.Audio.Sound[0].isReady);
         // }, 100);

      };
      startGame().then(() => {
         gameReady = true;
         MicEnginereturn.VarObject.E3_UpdateProgress(true);
      });
   };

   //---------------------------------------------PAGINA DEL MENU OPTIONS----------------------------------------------//
   if (GlobalVar.Page == "Options") {
      /*------------------AUDIO-------------------*/
      const Audio = S0_Audio({
         Track: [
            'SpaceGame/Audio/button-press-382713MIC.mp3',           //0 CLICK
         ],
      },);

      /*--------------GENERATE HUD-----------------*/
      const GameHUDCanvas = S0_GenerateHUDCanvas(DynamicOptionsHUDObj);

      GameHUDCanvas.showButton(6, false);
      GameHUDCanvas.showButton(7, false);
      GameHUDCanvas.showButton(10, false);
      GameHUDCanvas.showButton(11, false);

      //1 PULSANTE HOME
      GameHUDCanvas.setButtonCallback(1, () => {
         Audio.PlayOnceSound(0, GlobalVar.VolumeSounds / 200);      //CLICK
         G0_ShowLoadingAndReload("Home");     //SaveSystem.update();
      });

      //5 PULSANTE GRAPHIC
      GameHUDCanvas.setButtonCallback(5, () => {
         Audio.PlayOnceSound(0, GlobalVar.VolumeSounds / 200);      //CLICK
         G0_ShowLoadingAndReload("Graphic");     //SaveSystem.update();
      });

      //3 SET LINGUA INGLESE
      GameHUDCanvas.setButtonCallback(3, () => {
         Audio.PlayOnceSound(0, GlobalVar.VolumeSounds / 200);      //CLICK
         GlobalVar.Language = 0;
         ChangeLanguage();
         ButtonLanguagePressed();
         SaveSystem.setItem('Language', 0);
      });

      //4 SET LINGUA ITALIANO
      GameHUDCanvas.setButtonCallback(4, () => {
         Audio.PlayOnceSound(0, GlobalVar.VolumeSounds / 200);      //CLICK
         GlobalVar.Language = 1;
         ChangeLanguage();
         ButtonLanguagePressed();
         SaveSystem.setItem('Language', 1);
      });

      //VOLUME SOUNDS
      GameHUDCanvas.setBarValue(0, GlobalVar.VolumeSounds / 100);       //BARRA VOLUME
      GameHUDCanvas.setButtonCallback(9, () => {          //PULSANTE AUMENTA
         if (GlobalVar.VolumeSounds < 100) GlobalVar.VolumeSounds += 10;
         else GlobalVar.VolumeSounds = 100;
         Audio.PlayOnceSound(0, GlobalVar.VolumeSounds / 100);      //CLICK
         GameHUDCanvas.setBarValue(0, GlobalVar.VolumeSounds / 100);       //BARRA VOLUME
         SaveSystem.setItem(`VolumeSounds`, GlobalVar.VolumeSounds);
         GameHUDCanvas.render();
      });
      GameHUDCanvas.setButtonCallback(14, () => {          //PULSANTE DIMINUISCE
         if (GlobalVar.VolumeSounds > 0) GlobalVar.VolumeSounds -= 10;
         else GlobalVar.VolumeSounds = 0;
         Audio.PlayOnceSound(0, GlobalVar.VolumeSounds / 100);      //CLICK
         GameHUDCanvas.setBarValue(0, GlobalVar.VolumeSounds / 100);       //BARRA VOLUME
         SaveSystem.setItem(`VolumeSounds`, GlobalVar.VolumeSounds);
         GameHUDCanvas.render();
      });

      //VOLUME VOICE
      GameHUDCanvas.setBarValue(1, GlobalVar.VolumeVoice / 100);       //BARRA VOLUME
      GameHUDCanvas.setButtonCallback(15, () => {          //PULSANTE AUMENTA
         if (GlobalVar.VolumeVoice < 100) GlobalVar.VolumeVoice += 10;
         else GlobalVar.VolumeVoice = 100;
         Audio.PlayOnceSound(0, GlobalVar.VolumeVoice / 100);      //CLICK
         GameHUDCanvas.setBarValue(1, GlobalVar.VolumeVoice / 100);       //BARRA VOLUME
         SaveSystem.setItem(`VolumeVoice`, GlobalVar.VolumeVoice);
         GameHUDCanvas.render();
      });
      GameHUDCanvas.setButtonCallback(16, () => {          //PULSANTE DIMINUISCE
         if (GlobalVar.VolumeVoice > 0) GlobalVar.VolumeVoice -= 10;
         else GlobalVar.VolumeVoice = 0;
         Audio.PlayOnceSound(0, GlobalVar.VolumeVoice / 100);      //CLICK
         GameHUDCanvas.setBarValue(1, GlobalVar.VolumeVoice / 100);       //BARRA VOLUME
         SaveSystem.setItem(`VolumeVoice`, GlobalVar.VolumeVoice);
         GameHUDCanvas.render();
      });

      //VOLUME MUSIC
      GameHUDCanvas.setBarValue(2, GlobalVar.VolumeMusic / 100);       //BARRA VOLUME
      GameHUDCanvas.setButtonCallback(17, () => {          //PULSANTE AUMENTA
         if (GlobalVar.VolumeMusic < 100) GlobalVar.VolumeMusic += 10;
         else GlobalVar.VolumeMusic = 100;
         Audio.PlayOnceSound(0, GlobalVar.VolumeMusic / 100);      //CLICK
         GameHUDCanvas.setBarValue(2, GlobalVar.VolumeMusic / 100);       //BARRA VOLUME
         SaveSystem.setItem(`VolumeMusic`, GlobalVar.VolumeMusic);
         GameHUDCanvas.render();
      });
      GameHUDCanvas.setButtonCallback(18, () => {          //PULSANTE DIMINUISCE
         if (GlobalVar.VolumeMusic > 0) GlobalVar.VolumeMusic -= 10;
         else GlobalVar.VolumeMusic = 0;
         Audio.PlayOnceSound(0, GlobalVar.VolumeMusic / 100);      //CLICK
         GameHUDCanvas.setBarValue(2, GlobalVar.VolumeMusic / 100);       //BARRA VOLUME
         SaveSystem.setItem(`VolumeMusic`, GlobalVar.VolumeMusic);
         GameHUDCanvas.render();
      });

      //COLORAZIONE PULSANTI AD AVVIO PAGINA
      function ButtonLanguagePressed() {
         if (GlobalVar.Language == 0) {
            GameHUDCanvas.setButtonColor(3, Colors.SelectedPuls);
            GameHUDCanvas.setButtonColor(4, Colors.ActivePuls);
         };
         if (GlobalVar.Language == 1) {
            GameHUDCanvas.setButtonColor(3, Colors.ActivePuls);
            GameHUDCanvas.setButtonColor(4, Colors.SelectedPuls);
         };
         GameHUDCanvas.render();
      };
      ButtonLanguagePressed();

      function ChangeLanguage() {
         GameHUDCanvas.setButtonText(0, Testi.Menu.Options[GlobalVar.Language]);
         GameHUDCanvas.setButtonText(2, Testi.Menu.Language[GlobalVar.Language]);
         GameHUDCanvas.setButtonText(5, Testi.Menu.Graphic[GlobalVar.Language]);
         GameHUDCanvas.setButtonText(8, Testi.Menu.VolumeSfx[GlobalVar.Language]);
         GameHUDCanvas.setButtonText(12, Testi.Menu.VolumeVoice[GlobalVar.Language]);
         GameHUDCanvas.setButtonText(13, Testi.Menu.VolumeMusic[GlobalVar.Language]);
      };
      ChangeLanguage();

      GameHUDCanvas.render();
   };

   //---------------------------------------------PAGINA DEL MENU GRAPHIC----------------------------------------------//
   if (GlobalVar.Page == "Graphic") {
      /*------------------AUDIO-------------------*/
      const Audio = S0_Audio({
         Track: [
            'SpaceGame/Audio/button-press-382713MIC.mp3',           //0 CLICK
         ],
      },);

      /*--------------GENERATE HUD-----------------*/
      //#region
      const GraphicHUDCanvas = S0_GenerateHUDCanvas(DynamicGraphicHUDObj);

      GraphicHUDCanvas.showButton(9, false);

      //1 PULSANTE HOME
      GraphicHUDCanvas.setButtonCallback(1, () => {
         Audio.PlayOnceSound(0, GlobalVar.VolumeSounds / 200);      //CLICK
         G0_ShowLoadingAndReload("Home");     //SaveSystem.update();
      });
      //1 PULSANTE OPTIONS
      GraphicHUDCanvas.setButtonCallback(2, () => {
         Audio.PlayOnceSound(0, GlobalVar.VolumeSounds / 200);      //CLICK
         G0_ShowLoadingAndReload("Options");     //SaveSystem.update();
      });
      //3 AUMENTA PRESET GRAFICO
      GraphicHUDCanvas.setButtonCallback(3, () => {
         Audio.PlayOnceSound(0, GlobalVar.VolumeSounds / 200);      //CLICK
         if (GlobalVar.Benchmark != 0 && GlobalVar.Benchmark < GlobalVar.MinBenchmarkLimit) {
            if (GlobalVar.GraphicPreset < 6) GlobalVar.GraphicPreset++;
         }
         else if (GlobalVar.GraphicPreset < GraphicPreset.Preset.length) GlobalVar.GraphicPreset++;
         ButtonGraphicPressed();      //Graphic, Texture
      });
      //4 DIMINUISCE PRESET GRAFICO
      GraphicHUDCanvas.setButtonCallback(4, () => {
         Audio.PlayOnceSound(0, GlobalVar.VolumeSounds / 200);      //CLICK
         if (GlobalVar.GraphicPreset > 1) GlobalVar.GraphicPreset--;
         ButtonGraphicPressed();      //Graphic, Texture
      });

      function ButtonGraphicPressed() {
         //VALORE BARRA PRESET
         let BarValue = GlobalVar.GraphicPreset / GraphicPreset.Preset.length;
         GraphicHUDCanvas.setBarValue(0, BarValue);
         //TESTO BARRA PRESET
         GraphicHUDCanvas.setBarText(0, `${GlobalVar.GraphicPreset}`);
         //PRESET
         if (GlobalVar.GraphicPreset > 0) {
            GlobalVar.Graphic = GraphicPreset.Preset[GlobalVar.GraphicPreset - 1].Graphic;
            GlobalVar.Texture = GraphicPreset.Preset[GlobalVar.GraphicPreset - 1].Texture;
            GlobalVar.Resolution = GraphicPreset.Preset[GlobalVar.GraphicPreset - 1].Resolution;
            GlobalVar.Antialiasing = GraphicPreset.Preset[GlobalVar.GraphicPreset - 1].Antialiasing;
            GlobalVar.Glow = GraphicPreset.Preset[GlobalVar.GraphicPreset - 1].Glow;
            GlobalVar.AmbMap = GraphicPreset.Preset[GlobalVar.GraphicPreset - 1].AmbMap;
         };

         //TESTI
         GraphicHUDCanvas.setButtonText(7, GraphicPreset.Graphic[GlobalVar.Graphic][GlobalVar.Language]);
         GraphicHUDCanvas.setBarText(1, GraphicPreset.Texture[GlobalVar.Texture][GlobalVar.Language]);
         GraphicHUDCanvas.setButtonText(11, GraphicPreset.Resolution[GlobalVar.Resolution][GlobalVar.Language]);
         GraphicHUDCanvas.setButtonText(13, GraphicPreset.Generic[GlobalVar.Antialiasing][GlobalVar.Language]);
         GraphicHUDCanvas.setButtonText(15, GraphicPreset.Generic[GlobalVar.Glow][GlobalVar.Language]);
         GraphicHUDCanvas.setButtonText(17, GraphicPreset.Generic[GlobalVar.AmbMap][GlobalVar.Language]);
         //COLORI
         if (GlobalVar.Graphic == 1) GraphicHUDCanvas.setButtonColor(7, Colors.ActivePuls);
         else GraphicHUDCanvas.setButtonColor(7, Colors.PassivePuls);
         if (GlobalVar.Resolution == 1) GraphicHUDCanvas.setButtonColor(11, Colors.ActivePuls);
         else GraphicHUDCanvas.setButtonColor(11, Colors.PassivePuls);
         if (GlobalVar.Antialiasing == 1) GraphicHUDCanvas.setButtonColor(13, Colors.ActivePuls);
         else GraphicHUDCanvas.setButtonColor(13, Colors.PassivePuls);
         if (GlobalVar.Glow == 1) GraphicHUDCanvas.setButtonColor(15, Colors.ActivePuls);
         else GraphicHUDCanvas.setButtonColor(15, Colors.PassivePuls);
         if (GlobalVar.AmbMap == 1) GraphicHUDCanvas.setButtonColor(17, Colors.ActivePuls);
         else GraphicHUDCanvas.setButtonColor(17, Colors.PassivePuls);
         //COLORI IMPOSTAZIONI BLOCCATE
         if (GlobalVar.Benchmark != 0 && GlobalVar.Benchmark < GlobalVar.MinBenchmarkLimit) {
            GraphicHUDCanvas.setButtonColor(13, Colors.RedBar);
            GraphicHUDCanvas.setButtonColor(17, Colors.RedBar);
         };
         //BARRA MATERIALI
         GraphicHUDCanvas.setBarValue(1, GlobalVar.Texture / 2);

         //SAVESYSTEM
         SaveSystem.setItem('GraphicPreset', GlobalVar.GraphicPreset);
         SaveSystem.setItem('Graphic', GlobalVar.Graphic);
         SaveSystem.setItem('Texture', GlobalVar.Texture);
         SaveSystem.setItem('Resolution', GlobalVar.Resolution);
         SaveSystem.setItem('Antialiasing', GlobalVar.Antialiasing);
         SaveSystem.setItem('Glow', GlobalVar.Glow);
         SaveSystem.setItem('AmbMap', GlobalVar.AmbMap);
         GraphicHUDCanvas.render();
      };
      ButtonGraphicPressed();
      //#endregion

      GraphicHUDCanvas.render();
   };

   //---------------------------------------------PAGINA DEL MENU CONTROLS----------------------------------------------//
   if (GlobalVar.Page == "Controls") {
      /*-----------------------------------------------PARAMETRI ENGINE----------------------------------------------------------*/
      MicEngineParam = ControlsParam;

      /*----------------------------------------------CARICAMENTO ENGINE--------------------------------------------------------*/
      async function startGame() {
         MicEnginereturn = await MicEngine(MicEngineParam, Oggetti, Geometrie, Materiali);
         if (MicEngineParam.Moduli.Debug == true && MicEngineParam.Debug.Return == true) {
            console.log("MicEnginereturn");
            console.log(MicEnginereturn.VarObject.E3_ConsoleLogSimpleObject(MicEnginereturn));
         };
         /*----------------------------------------------POSIZIONE USER--------------------------------------------------------*/
         MicEnginereturn.User.Object.position.set(0, 0, 0);

         /*---------------------------------------------------CAMERA-----------------------------------------------------------*/
         MicEnginereturn.CameraGroup.children[0].children[0].children[0].position.z = 50;
         MicEnginereturn.CameraGroup.children[0].children[0].children[0].position.y = 10;
         MicEnginereturn.CameraGroup.children[0].children[0].children[0].updateProjectionMatrix();

         /*------------------------------------------------GENERATE HUD--------------------------------------------------------*/
         //#region
         const StaticControlsHUDCanvas = S0_GenerateHUDCanvas(StaticControlsHUDObj);

         DynamicControlsHUDObj.DispatchEvent = StaticControlsHUDCanvas.canvas;
         const ControlsHUDCanvas = S0_GenerateHUDCanvas(DynamicControlsHUDObj);

         //TESTO BARRE
         ControlsHUDCanvas.setBarText(2, Testi.Menu.DecPress[GlobalVar.Language]);
         ControlsHUDCanvas.setBarText(3, Testi.Menu.AccPress[GlobalVar.Language]);

         //INVERSIONE PITCH
         ControlsHUDCanvas.setButtonCallback(13, () => {
            MicEnginereturn.Audio.PlayOnceSound(0, GlobalVar.VolumeSounds / 200);      //CLICK
            InvAxe[0] = 1 - InvAxe[0];
            if (!Number.isFinite(InvAxe[0])) {
               InvAxe[0] = 0;
            };
            ButtonControlPressed();
            ResetController();
            SaveSystem.setItem(`InvAxe${0}`, InvAxe[0]);       //SALVA IL VALORE NEL LOCAL STORAGE
         });
         //INVERSIONE YAW
         ControlsHUDCanvas.setButtonCallback(15, () => {
            MicEnginereturn.Audio.PlayOnceSound(0, GlobalVar.VolumeSounds / 200);      //CLICK
            InvAxe[1] = 1 - InvAxe[1];
            if (!Number.isFinite(InvAxe[1])) {
               InvAxe[1] = 0;
            };
            ButtonControlPressed();
            ResetController();
            SaveSystem.setItem(`InvAxe${1}`, InvAxe[1]);       //SALVA IL VALORE NEL LOCAL STORAGE
         });

         //VARIABILI GAMEPAD
         let Connected = false;
         let Index = 0;
         const EditContr = S0_EditController({
            NumAxes: GlobalVar.NumAxes,                                           //NUMERO MASSIMO DI ASSI
            NumPuls: GlobalVar.NumPuls,                                           //NUMERO MASSIMO DI PULSANTI
         });
         let DecThrottle = 0;
         let AccThrottle = 0;

         //PULSANTE HOME
         StaticControlsHUDCanvas.setButtonCallback(1, () => {
            MicEnginereturn.Audio.PlayOnceSound(0, GlobalVar.VolumeSounds / 200);      //CLICK
            //SALVATAGGIO ASSI NEL LOCAL STORAGE
            for (let i = 0; i < 3; i++) {
               SaveSystem.setItem(`Axe${i}Type`, EditContr.Axes[i][0]);
               SaveSystem.setItem(`Axe${i}Index`, EditContr.Axes[i][1]);
            };
            G0_ShowLoadingAndReload("Home");     //SaveSystem.update();
         });

         //COLORAZIONE, NASCONDERE E VISUALIZZARE PULSANTI AD AVVIO PAGINA
         function ButtonControlPressed() {
            //CONTROLLO VIRTUALE
            if (GlobalVar.Control == 0) {
               StaticControlsHUDCanvas.setButtonColor(2, Colors.SelectedPuls);        //3 CONTROLLO - VIRTUALE
               StaticControlsHUDCanvas.setButtonColor(3, Colors.ActivePuls);        //4 CONTROLLO - FISICO
            };
            //CONTROLLO FISICO
            if (GlobalVar.Control == 1) {
               StaticControlsHUDCanvas.setButtonColor(2, Colors.ActivePuls);        //3 CONTROLLO - VIRTUALE
               StaticControlsHUDCanvas.setButtonColor(3, Colors.SelectedPuls);        //4 CONTROLLO - FISICO
            };

            //PULSANTI INVERSIONE PITCH
            if (InvAxe[0] == 0) {
               ControlsHUDCanvas.setButtonColor(13, Colors.ActivePuls);
               ControlsHUDCanvas.setButtonText(13, "NOR");
            }
            else {
               ControlsHUDCanvas.setButtonColor(13, Colors.SelectedPuls);
               ControlsHUDCanvas.setButtonText(13, "INV");
            };
            //PULSANTI INVERSIONE YAW
            if (InvAxe[1] == 1) {
               ControlsHUDCanvas.setButtonColor(15, Colors.ActivePuls);
               ControlsHUDCanvas.setButtonText(15, "NOR");
            }
            else {
               ControlsHUDCanvas.setButtonColor(15, Colors.SelectedPuls);
               ControlsHUDCanvas.setButtonText(15, "INV");
            };

            //SCHEDA REGOLAZIONE
            if (GlobalVar.Scheda == 0) {
               StaticControlsHUDCanvas.setButtonColor(4, Colors.SelectedPuls);            //4 PULSANTE REGOLAZIONE
               StaticControlsHUDCanvas.setButtonColor(5, Colors.ActivePuls);              //5 PULSANTE APPRENDIMENTO
               ControlsHUDCanvas.showBar(0, true);                               //0 BARRA REGOLAZIONE VISUALE
               ControlsHUDCanvas.showBar(1, true);                               //1 BARRA REGOLAZIONE THROTTLE
               ControlsHUDCanvas.showBar(4, true);                               //4 BARRA REGOLAZIONE PITCH
               ControlsHUDCanvas.showBar(5, true);                               //5 BARRA REGOLAZIONE YAW
               ControlsHUDCanvas.showBar(6, true);                               //6 BARRA REGOLAZIONE ROLL
               ControlsHUDCanvas.showButton(1, false);                                    //1 PULSANTE FISICO ROLLIO SX
               ControlsHUDCanvas.showButton(2, false);                                    //2 PULSANTE FISICO ROLLIO DX
               ControlsHUDCanvas.showButton(3, true);                                     //3 TESTO ROLL
               ControlsHUDCanvas.showButton(4, true);                                     //4 TESTO THROTTLE
               ControlsHUDCanvas.showButton(5, true);                                     //5 AUMENTA REGOLAZIONE PITCH
               ControlsHUDCanvas.showButton(6, true);                                     //6 DIMINUISCE REGOLAZIONE PITCH
               ControlsHUDCanvas.showButton(7, true);                                     //7 AUMENTA REGOLAZIONE YAW
               ControlsHUDCanvas.showButton(8, true);                                     //8 DIMINUISCE REGOLAZIONE YAW
               ControlsHUDCanvas.showButton(9, true);                                     //9 AUMENTA REGOLAZIONE ROLL
               ControlsHUDCanvas.showButton(10, true);                                     //10 DIMINUISCE REGOLAZIONE ROLL
               ControlsHUDCanvas.showButton(11, true);                                     //11 AUMENTA REGOLAZIONE THROTTLE
               ControlsHUDCanvas.showButton(12, true);                                     //12 DIMINUISCE REGOLAZIONE THROTTLE
               ControlsHUDCanvas.showButton(14, true);                                     //14 TESTO PITCH
               ControlsHUDCanvas.showButton(16, true);                                     //16 TESTO YAW
               ControlsHUDCanvas.showButton(17, true);                                     //17 AUMENTA REGOLAZIONE VISUALE
               ControlsHUDCanvas.showButton(18, true);                                     //18 DIMINUISCE REGOLAZIONE VISUALE
               ControlsHUDCanvas.showButton(19, true);                                     //19 TESTO VISUALE
               ControlsHUDCanvas.showButton(20, false);                                   //20 PULSANTE MEMORIZZAZIONE ASSE PITCH
               ControlsHUDCanvas.showButton(21, false);                                   //21 PULSANTE MEMORIZZAZIONE ASSE YAW
               ControlsHUDCanvas.showButton(22, false);                                   //22 PULSANTE MEMORIZZAZIONE ASSE VISUALE Y
               ControlsHUDCanvas.showButton(23, false);                                   //23 PULSANTE MEMORIZZAZIONE ASSE VISUALE X
               ControlsHUDCanvas.showBar(2, false);                                //2 BARRA DECELERA THROTTLE ANALOGICO
               ControlsHUDCanvas.showBar(3, false);                                //3 BARRA ACCELERA THROTTLE ANALOGICO
               ControlsHUDCanvas.showButton(1, false);                                  //1 PULSANTE MEMORIZZAZIONE ROLLIO SX
               ControlsHUDCanvas.showButton(2, false);                                  //2 PULSANTE MEMORIZZAZIONE ROLLIO DX
               ControlsHUDCanvas.showButton(0, false);                            //0 PULSANTE RADIO/AZIONE
               ControlsHUDCanvas.showButton(13, true);                                //13 INVERSIONE PITCH
               ControlsHUDCanvas.showButton(24, true);                                //24 TESTO INVERSIONE PITCH
               //CONTROLLO VIRTUALE
               if (GlobalVar.Control == 0) {
                  StaticControlsHUDCanvas.setButtonText(6, Testi.Menu.ControlsSpeech[0][GlobalVar.Language]);
                  ControlsHUDCanvas.showButton(15, false);                                     //15 INVERSIONE YAW
                  ControlsHUDCanvas.showButton(25, false);                                //25 TESTO INVERSIONE YAW
               };
               //CONTROLLO FISICO
               if (GlobalVar.Control == 1) {
                  StaticControlsHUDCanvas.setButtonText(6, Testi.Menu.ControlsSpeech[1][GlobalVar.Language]);
                  ControlsHUDCanvas.showButton(15, true);                                     //15 INVERSIONE YAW
                  ControlsHUDCanvas.showButton(25, true);                                //25 TESTO INVERSIONE YAW
               };
            };
            //SCHEDA APPRENDIMENTO
            if (GlobalVar.Scheda == 1) {
               StaticControlsHUDCanvas.setButtonColor(4, Colors.ActivePuls);              //4 PULSANTE REGOLAZIONE
               StaticControlsHUDCanvas.setButtonColor(5, Colors.SelectedPuls);            //5 PULSANTE APPRENDIMENTO
               ControlsHUDCanvas.showBar(0, false);                               //0 BARRA REGOLAZIONE VISUALE
               ControlsHUDCanvas.showBar(1, false);                               //1 BARRA REGOLAZIONE THROTTLE
               ControlsHUDCanvas.showBar(4, false);                               //4 BARRA REGOLAZIONE PITCH
               ControlsHUDCanvas.showBar(5, false);                               //5 BARRA REGOLAZIONE YAW
               ControlsHUDCanvas.showBar(6, false);                               //6 BARRA REGOLAZIONE ROLL
               ControlsHUDCanvas.showButton(5, false);                                     //5 AUMENTA REGOLAZIONE PITCH
               ControlsHUDCanvas.showButton(6, false);                                     //6 DIMINUISCE REGOLAZIONE PITCH
               ControlsHUDCanvas.showButton(7, false);                                     //7 AUMENTA REGOLAZIONE YAW
               ControlsHUDCanvas.showButton(8, false);                                     //8 DIMINUISCE REGOLAZIONE YAW
               ControlsHUDCanvas.showButton(9, false);                                     //9 AUMENTA REGOLAZIONE ROLL
               ControlsHUDCanvas.showButton(10, false);                                     //10 DIMINUISCE REGOLAZIONE ROLL
               ControlsHUDCanvas.showButton(11, false);                                     //11 AUMENTA REGOLAZIONE THROTTLE
               ControlsHUDCanvas.showButton(12, false);                                     //12 DIMINUISCE REGOLAZIONE THROTTLE
               ControlsHUDCanvas.showButton(17, false);                                     //17 AUMENTA REGOLAZIONE VISUALE
               ControlsHUDCanvas.showButton(18, false);                                     //18 DIMINUISCE REGOLAZIONE VISUALE
               ControlsHUDCanvas.showButton(15, false);                                //15 PULSANTE INVERSIONE YAW NORMALE
               ControlsHUDCanvas.showButton(25, false);                                //25 TESTO INVERSIONE YAW
               ControlsHUDCanvas.showButton(13, false);                                //13 INVERSIONE PITCH
               ControlsHUDCanvas.showButton(24, false);                                //24 TESTO INVERSIONE PITCH
               //CONTROLLO VIRTUALE
               if (GlobalVar.Control == 0) {
                  StaticControlsHUDCanvas.setButtonText(6, Testi.Menu.ControlsSpeech[2][GlobalVar.Language]);
                  ControlsHUDCanvas.showButton(1, false);                                  //1 PULSANTE MEMORIZZAZIONE ROLLIO SX
                  ControlsHUDCanvas.showButton(2, false);                                  //2 PULSANTE MEMORIZZAZIONE ROLLIO DX
                  ControlsHUDCanvas.showButton(3, false);                                    //3 TESTO ROLL
                  ControlsHUDCanvas.showButton(4, false);                                    //4 TESTO THROTTLE
                  ControlsHUDCanvas.showButton(14, false);                                     //14 TESTO PITCH
                  ControlsHUDCanvas.showButton(16, false);                                     //16 TESTO YAW
                  ControlsHUDCanvas.showButton(19, false);                                     //19 TESTO VISUALE
                  ControlsHUDCanvas.showButton(20, false);                                //20 PULSANTE MEMORIZZAZIONE ASSE PITCH
                  ControlsHUDCanvas.showButton(21, false);                                //21 PULSANTE MEMORIZZAZIONE ASSE YAW
                  ControlsHUDCanvas.showButton(22, false);                                //22 PULSANTE MEMORIZZAZIONE ASSE VISUALE Y
                  ControlsHUDCanvas.showButton(23, false);                                //23 PULSANTE MEMORIZZAZIONE ASSE VISUALE X
                  ControlsHUDCanvas.showBar(2, false);                                //2 BARRA DECELERA THROTTLE ANALOGICO
                  ControlsHUDCanvas.showBar(3, false);                                //3 BARRA ACCELERA THROTTLE ANALOGICO
                  ControlsHUDCanvas.showButton(0, false);                            //0 PULSANTE RADIO/AZIONE
               };
               //CONTROLLO FISICO
               if (GlobalVar.Control == 1) {
                  StaticControlsHUDCanvas.setButtonText(6, Testi.Menu.ControlsSpeech[3][GlobalVar.Language]);
                  ControlsHUDCanvas.showButton(1, true);                                  //1 PULSANTE MEMORIZZAZIONE ROLLIO SX
                  ControlsHUDCanvas.showButton(2, true);                                  //2 PULSANTE MEMORIZZAZIONE ROLLIO DX
                  ControlsHUDCanvas.showButton(3, true);                                    //3 TESTO ROLL
                  ControlsHUDCanvas.showButton(4, true);                                    //4 TESTO THROTTLE
                  ControlsHUDCanvas.showButton(14, true);                                     //14 TESTO PITCH
                  ControlsHUDCanvas.showButton(16, true);                                     //16 TESTO YAW
                  ControlsHUDCanvas.showButton(19, true);                                     //19 TESTO VISUALE
                  ControlsHUDCanvas.showButton(20, true);                                 //20 PULSANTE MEMORIZZAZIONE ASSE PITCH
                  ControlsHUDCanvas.showButton(21, true);                                 //21 PULSANTE MEMORIZZAZIONE ASSE YAW
                  ControlsHUDCanvas.showButton(22, true);                                 //22 PULSANTE MEMORIZZAZIONE ASSE VISUALE Y
                  ControlsHUDCanvas.showButton(23, true);                                 //23 PULSANTE MEMORIZZAZIONE ASSE VISUALE X
                  ControlsHUDCanvas.showBar(2, true);                                //2 BARRA DECELERA THROTTLE ANALOGICO
                  ControlsHUDCanvas.showBar(3, true);                               //3 BARRA ACCELERA THROTTLE ANALOGICO
                  ControlsHUDCanvas.showButton(0, true);                            //0 PULSANTE RADIO/AZIONE
               };
            };

            StaticControlsHUDCanvas.render();
            ControlsHUDCanvas.render();
         };

         //CONTROLLO VIRTUALE
         StaticControlsHUDCanvas.setButtonCallback(2, () => {
            MicEnginereturn.Audio.PlayOnceSound(0, GlobalVar.VolumeSounds / 200);      //CLICK
            GlobalVar.Control = 0;
            SaveSystem.setItem(`Control`, GlobalVar.Control);
            InvAxe[1] = 1;    //FORZA L'INVERSIONE DELLO YAW A NORMALE
            SaveSystem.setItem(`InvAxe${1}`, InvAxe[1]);       //SALVA IL VALORE NEL LOCAL STORAGE
            ButtonControlPressed();
            ResetController();
         });
         //CONTROLLO FISICO
         StaticControlsHUDCanvas.setButtonCallback(3, () => {
            MicEnginereturn.Audio.PlayOnceSound(0, GlobalVar.VolumeSounds / 200);      //CLICK
            GlobalVar.Control = 1;
            SaveSystem.setItem(`Control`, GlobalVar.Control);
            ButtonControlPressed();
            ResetController();
         });
         //SCHEDA SENSIBILITÀ
         StaticControlsHUDCanvas.setButtonCallback(4, () => {
            MicEnginereturn.Audio.PlayOnceSound(0, GlobalVar.VolumeSounds / 200);      //CLICK
            GlobalVar.Scheda = 0;
            SaveSystem.setItem(`Scheda`, GlobalVar.Scheda);
            ButtonControlPressed();
         });
         //SCHEDA APPRENDIMENTO
         StaticControlsHUDCanvas.setButtonCallback(5, () => {
            MicEnginereturn.Audio.PlayOnceSound(0, GlobalVar.VolumeSounds / 200);      //CLICK
            GlobalVar.Scheda = 1;
            SaveSystem.setItem(`Scheda`, GlobalVar.Scheda);
            ButtonControlPressed();
         });
         //PULSANTE PITCH FISICO
         ControlsHUDCanvas.setButtonCallback(20, () => {
            if (GlobalVar.Control == 1) {
               MicEnginereturn.Audio.PlayOnceSound(0, GlobalVar.VolumeSounds / 200);      //CLICK
               EditContr.EnableAxes[0] = true;
               ControlsHUDCanvas.setButtonColor(20, Colors.SelectedPuls);
            };
         });
         //PULSANTE YAW FISICO
         ControlsHUDCanvas.setButtonCallback(21, () => {
            if (GlobalVar.Control == 1) {
               MicEnginereturn.Audio.PlayOnceSound(0, GlobalVar.VolumeSounds / 200);      //CLICK
               EditContr.EnableAxes[1] = true;
               ControlsHUDCanvas.setButtonColor(21, Colors.SelectedPuls);
            };
         });
         //RALLENTA MOTORE FISICO
         ControlsHUDCanvas.setBarCallback(2, () => {
            if (GlobalVar.Control == 1) {
               MicEnginereturn.Audio.PlayOnceSound(0, GlobalVar.VolumeSounds / 200);      //CLICK
               EditContr.EnableAxes[3] = true;
               ControlsHUDCanvas.setBarColor(2, Colors.SelectedPuls, Colors.SelectedPuls);
            };
         });
         //ACCELERA MOTORE FISICO
         ControlsHUDCanvas.setBarCallback(3, () => {
            if (GlobalVar.Control == 1) {
               MicEnginereturn.Audio.PlayOnceSound(0, GlobalVar.VolumeSounds / 200);      //CLICK
               EditContr.EnableAxes[4] = true;
               ControlsHUDCanvas.setBarColor(3, Colors.SelectedPuls, Colors.SelectedPuls);
            };
         });
         //PULSANTE RADIO/AZIONE FISICO
         ControlsHUDCanvas.setButtonCallback(0, () => {
            if (GlobalVar.Control == 1) {
               MicEnginereturn.Audio.PlayOnceSound(0, GlobalVar.VolumeSounds / 200);      //CLICK
               EditContr.EnablePuls[0] = true;
               ControlsHUDCanvas.setButtonColor(0, Colors.SelectedPuls);
            };
         });
         //PULSANTE FISICO ROLLIO SX
         ControlsHUDCanvas.setButtonCallback(1, () => {
            if (GlobalVar.Control == 1) {
               MicEnginereturn.Audio.PlayOnceSound(0, GlobalVar.VolumeSounds / 200);      //CLICK
               EditContr.EnablePuls[1] = true;
               ControlsHUDCanvas.setButtonColor(1, Colors.SelectedPuls);
            };
         });
         //PULSANTE FISICO ROLLIO DX
         ControlsHUDCanvas.setButtonCallback(2, () => {
            if (GlobalVar.Control == 1) {
               MicEnginereturn.Audio.PlayOnceSound(0, GlobalVar.VolumeSounds / 200);      //CLICK
               EditContr.EnablePuls[2] = true;
               ControlsHUDCanvas.setButtonColor(2, Colors.SelectedPuls);
            };
         });
         //VISUALE X FISICO
         ControlsHUDCanvas.setButtonCallback(23, () => {
            if (GlobalVar.Control == 1) {
               MicEnginereturn.Audio.PlayOnceSound(0, GlobalVar.VolumeSounds / 200);      //CLICK
               EditContr.EnableAxes[5] = true;
               ControlsHUDCanvas.setButtonColor(23, Colors.SelectedPuls);
            };
         });
         //VISUALE Y FISICO
         ControlsHUDCanvas.setButtonCallback(22, () => {
            if (GlobalVar.Control == 1) {
               MicEnginereturn.Audio.PlayOnceSound(0, GlobalVar.VolumeSounds / 200);      //CLICK
               EditContr.EnableAxes[6] = true;
               ControlsHUDCanvas.setButtonColor(22, Colors.SelectedPuls);
            };
         });
         //REGOLAZIONE PITCH
         ControlsHUDCanvas.setBarValue(4, RegAxe[0] / 100);       //BARRA REGOLAZIONE
         ControlsHUDCanvas.setButtonCallback(5, () => {          //PULSANTE AUMENTA
            MicEnginereturn.Audio.PlayOnceSound(0, GlobalVar.VolumeSounds / 200);      //CLICK
            if (RegAxe[0] < 100) RegAxe[0] += 10;
            else RegAxe[0] = 100;
            ControlsHUDCanvas.setBarValue(4, RegAxe[0] / 100);
            SaveSystem.setItem(`RegAxe${0}`, RegAxe[0]);
            ControlsHUDCanvas.render();
         });
         ControlsHUDCanvas.setButtonCallback(6, () => {          //PULSANTE DIMINUISCE
            MicEnginereturn.Audio.PlayOnceSound(0, GlobalVar.VolumeSounds / 200);      //CLICK
            if (RegAxe[0] > 0) RegAxe[0] -= 10;
            else RegAxe[0] = 0;
            ControlsHUDCanvas.setBarValue(4, RegAxe[0] / 100);
            SaveSystem.setItem(`RegAxe${0}`, RegAxe[0]);
            ControlsHUDCanvas.render();
         });
         //REGOLAZIONE YAW
         ControlsHUDCanvas.setBarValue(5, RegAxe[1] / 100);       //BARRA REGOLAZIONE
         ControlsHUDCanvas.setButtonCallback(7, () => {          //PULSANTE AUMENTA
            MicEnginereturn.Audio.PlayOnceSound(0, GlobalVar.VolumeSounds / 200);      //CLICK
            if (RegAxe[1] < 100) RegAxe[1] += 10;
            else RegAxe[1] = 100;
            ControlsHUDCanvas.setBarValue(5, RegAxe[1] / 100);
            SaveSystem.setItem(`RegAxe${1}`, RegAxe[1]);
            ControlsHUDCanvas.render();
         });
         ControlsHUDCanvas.setButtonCallback(8, () => {          //PULSANTE DIMINUISCE
            MicEnginereturn.Audio.PlayOnceSound(0, GlobalVar.VolumeSounds / 200);      //CLICK
            if (RegAxe[1] > 0) RegAxe[1] -= 10;
            else RegAxe[1] = 0;
            ControlsHUDCanvas.setBarValue(5, RegAxe[1] / 100);
            SaveSystem.setItem(`RegAxe${1}`, RegAxe[1]);
            ControlsHUDCanvas.render();
         });
         //REGOLAZIONE ROLL
         ControlsHUDCanvas.setBarValue(6, RegAxe[2] / 100);       //BARRA REGOLAZIONE
         ControlsHUDCanvas.setButtonCallback(9, () => {          //PULSANTE AUMENTA
            MicEnginereturn.Audio.PlayOnceSound(0, GlobalVar.VolumeSounds / 200);      //CLICK
            if (RegAxe[2] < 100) RegAxe[2] += 10;
            else RegAxe[2] = 100;
            ControlsHUDCanvas.setBarValue(6, RegAxe[2] / 100);
            SaveSystem.setItem(`RegAxe${2}`, RegAxe[2]);
            ControlsHUDCanvas.render();
         });
         ControlsHUDCanvas.setButtonCallback(10, () => {          //PULSANTE DIMINUISCE
            MicEnginereturn.Audio.PlayOnceSound(0, GlobalVar.VolumeSounds / 200);      //CLICK
            if (RegAxe[2] > 0) RegAxe[2] -= 10;
            else RegAxe[2] = 0;
            ControlsHUDCanvas.setBarValue(6, RegAxe[2] / 100);
            SaveSystem.setItem(`RegAxe${2}`, RegAxe[2]);
            ControlsHUDCanvas.render();
         });
         //REGOLAZIONE THROTTLE
         ControlsHUDCanvas.setBarValue(1, RegAxe[3] / 100);       //BARRA REGOLAZIONE
         ControlsHUDCanvas.setButtonCallback(11, () => {          //PULSANTE AUMENTA
            MicEnginereturn.Audio.PlayOnceSound(0, GlobalVar.VolumeSounds / 200);      //CLICK
            if (RegAxe[3] < 100) RegAxe[3] += 10;
            else RegAxe[3] = 100;
            RegAxe[4] = RegAxe[3];
            ControlsHUDCanvas.setBarValue(1, RegAxe[3] / 100);
            SaveSystem.setItem(`RegAxe${3}`, RegAxe[3]);
            SaveSystem.setItem(`RegAxe${4}`, RegAxe[3]);
            ControlsHUDCanvas.render();
         });
         ControlsHUDCanvas.setButtonCallback(12, () => {          //PULSANTE DIMINUISCE
            MicEnginereturn.Audio.PlayOnceSound(0, GlobalVar.VolumeSounds / 200);      //CLICK
            if (RegAxe[3] > 0) RegAxe[3] -= 10;
            else RegAxe[3] = 0;
            RegAxe[4] = RegAxe[3];
            ControlsHUDCanvas.setBarValue(1, RegAxe[3] / 100);
            SaveSystem.setItem(`RegAxe${3}`, RegAxe[3]);
            SaveSystem.setItem(`RegAxe${4}`, RegAxe[3]);
            ControlsHUDCanvas.render();
         });
         //REGOLAZIONE VISUALE
         ControlsHUDCanvas.setBarValue(0, RegAxe[5] / 100);       //BARRA REGOLAZIONE
         ControlsHUDCanvas.setButtonCallback(17, () => {          //PULSANTE AUMENTA
            MicEnginereturn.Audio.PlayOnceSound(0, GlobalVar.VolumeSounds / 200);      //CLICK
            if (RegAxe[5] < 100) RegAxe[5] += 10;
            else RegAxe[5] = 100;
            RegAxe[6] = RegAxe[5];
            ControlsHUDCanvas.setBarValue(0, RegAxe[5] / 100);
            SaveSystem.setItem(`RegAxe${5}`, RegAxe[5]);
            SaveSystem.setItem(`RegAxe${6}`, RegAxe[5]);
            ControlsHUDCanvas.render();
         });
         ControlsHUDCanvas.setButtonCallback(18, () => {          //PULSANTE DIMINUISCE
            MicEnginereturn.Audio.PlayOnceSound(0, GlobalVar.VolumeSounds / 200);      //CLICK
            if (RegAxe[5] > 0) RegAxe[5] -= 10;
            else RegAxe[5] = 0;
            RegAxe[6] = RegAxe[5];
            ControlsHUDCanvas.setBarValue(0, RegAxe[5] / 100);
            SaveSystem.setItem(`RegAxe${5}`, RegAxe[5]);
            SaveSystem.setItem(`RegAxe${6}`, RegAxe[5]);
            ControlsHUDCanvas.render();
         });

         ButtonControlPressed();

         function ResetController() {
            Controller.Reset({
               Control: GlobalVar.Control,             //0 VIRTUALE - 1 FISICO
               //PARAMETRI ASSI
               VirtualAxe: VirtualAxe,                 //0 NIPPLE0X - 1 NIPPLE0Y - 2 NIPPLE1X - 3 NIPPLE1Y
               InvAxe: InvAxe,                         //0 NORMALE - 1 INVERTITO
               RegAxe: RegAxe,                         //COEFFICIENTE DI MOLTIPLICAZIONE PER L'ASSE
               PadAxe: PadAxe,                         //TIPO (AXE, BUTTON) - INDICE
               //PARAMETRI PULSANTI
               PadButton: PadButton,                   //TIPO (AXE, BUTTON) - INDICE
            });
         };

         StaticControlsHUDCanvas.render();
         ControlsHUDCanvas.render();
         //#endregion

         /*---------------------------------------------OGGETTO CONTROLLER-----------------------------------------------------*/
         //#region
         Controller = S0_Controller({
            Control: GlobalVar.Control,             //0 VIRTUALE - 1 FISICO
            //PARAMETRI ASSI
            VirtualAxe: VirtualAxe,                 //0 NIPPLE0X - 1 NIPPLE0Y - 2 NIPPLE1X - 3 NIPPLE1Y
            InvAxe: InvAxe,                         //0 NORMALE - 1 INVERTITO
            RegAxe: RegAxe,                         //COEFFICIENTE DI MOLTIPLICAZIONE PER L'ASSE
            PadAxe: PadAxe,                         //TIPO (AXE, BUTTON) - INDICE
            //PARAMETRI PULSANTI
            PadButton: PadButton,                   //TIPO (AXE, BUTTON) - INDICE
         });
         //#endregion         

         setInterval(() => {
            if (GlobalVar.Control == 1) {
               Connected = EditContr.Connected;
               Index = EditContr.Index;

               //RALLENTA MOTORE
               DecThrottle = (EditContr.ValAxes[3]) * (RegAxe[3] / 100);
               //console.log(EditContr.ValAxes[3]);
               ControlsHUDCanvas.setBarValue(2, DecThrottle);
               //ACCELERA MOTORE
               AccThrottle = (EditContr.ValAxes[4]) * (RegAxe[4] / 100);
               ControlsHUDCanvas.setBarValue(3, AccThrottle);
               //0 PULSANTE RADIO/AZIONE FISICO
               if (EditContr.EnablePuls[0] == false) {
                  if (EditContr.ValPuls[0] == 0) ControlsHUDCanvas.setButtonColor(0, Colors.ActivePuls);
                  if (EditContr.ValPuls[0] == 1) ControlsHUDCanvas.setButtonColor(0, Colors.SelectedPuls);
               };
               //1 PULSANTE FISICO ROLLIO SX
               if (EditContr.EnablePuls[1] == false) {
                  if (EditContr.ValPuls[1] == 0) ControlsHUDCanvas.setButtonColor(1, Colors.ActivePuls);
                  if (EditContr.ValPuls[1] == 1) ControlsHUDCanvas.setButtonColor(1, Colors.SelectedPuls);
               };
               //2 PULSANTE FISICO ROLLIO DX
               if (EditContr.EnablePuls[2] == false) {
                  if (EditContr.ValPuls[2] == 0) ControlsHUDCanvas.setButtonColor(2, Colors.ActivePuls);
                  if (EditContr.ValPuls[2] == 1) ControlsHUDCanvas.setButtonColor(2, Colors.SelectedPuls);
               };

               ControlsHUDCanvas.render();

               //SPOSTAMENTO PAD VIRTUALE
               MicEnginereturn.VarPad[0].SetPosition(-EditContr.ValAxes[1] * 0.5 * RegAxe[1], -EditContr.ValAxes[0] * 0.5 * RegAxe[0]);
               MicEnginereturn.VarPad[1].SetPosition(-EditContr.ValAxes[5] * 0.5 * RegAxe[5], -EditContr.ValAxes[6] * 0.5 * RegAxe[6]);
            };
         }, 50);

         setInterval(() => {
            //RIPRISTINO COLORE PULSANTI
            if (GlobalVar.Control == 1) {
               if (EditContr.EnableAxes[0] == false) ControlsHUDCanvas.setButtonColor(20, Colors.ActivePuls);//PULSANTE PITCH FISICO
               if (EditContr.EnableAxes[1] == false) ControlsHUDCanvas.setButtonColor(21, Colors.ActivePuls);//PULSANTE YAW FISICO
               if (EditContr.EnableAxes[3] == false) ControlsHUDCanvas.setBarColor(2, Colors.ActivePuls, Colors.SelectedPuls);//RALLENTA MOTORE FISICO
               if (EditContr.EnableAxes[4] == false) ControlsHUDCanvas.setBarColor(3, Colors.ActivePuls, Colors.SelectedPuls);//ACCELERA MOTORE FISICO
               if (EditContr.EnableAxes[5] == false) ControlsHUDCanvas.setButtonColor(23, Colors.ActivePuls);//VISUALE X FISICO
               if (EditContr.EnableAxes[6] == false) ControlsHUDCanvas.setButtonColor(22, Colors.ActivePuls);//VISUALE Y FISICO
            };

            //console.log(Controller.Axe[1]);
         }, 100);

         setInterval(() => {
            //console.log(EditContr.EnableAxes);
         }, 1000);
      };
      startGame().then(() => {
         gameReady = true;
         MicEnginereturn.VarObject.E3_UpdateProgress(true);
      });
   };

   //---------------------------------------------PAGINA DEL MENU IMMAGINI----------------------------------------------//
   if (GlobalVar.Page == "Images") {
      /*------------------AUDIO-------------------*/
      const Audio = S0_Audio({
         Track: [
            'SpaceGame/Audio/button-press-382713MIC.mp3',           //0 CLICK
         ],
      },);

      /*--------------GENERATE HUD-----------------*/
      //ARRAY CONTENENTE LE DIMENZIONI DI TUTTI I RIQUADRI DELLE 7 IMMAGINI
      const Dark = 0.85;    //VALORE DI SCURIMENTO DELLE IMMAGINI NON COMPLETATE
      const Size = [];
      const Perc = [];           //PERCENTUALE DI COMPLETAMENTO DI CIASCUNA IMMAGINE
      for (let i = 0; i < 7; i++) {
         Size[i] = [];
         let Completamento = 0;
         for (let a = 0; a < 24; a++) {
            Size[i][a] = Number(SaveSystem.getItem(`Telescopio${i}Img${a}`));
            Completamento += Size[i][a];
         };
         Perc[i] = Completamento / 24;
      };

      const ImagesHUDCanvas = S0_GenerateHUDCanvas(StaticImagesHUDObj);

      //1 PULSANTE HOME
      ImagesHUDCanvas.setButtonCallback(1, () => {
         Audio.PlayOnceSound(0, GlobalVar.VolumeSounds / 200);      //CLICK
         G0_ShowLoadingAndReload("Home");     //SaveSystem.update();
      });

      /*--------------SCORRIMENTO IMMAGINI CON I PULSANTI-------------*/
      let VisualImage = 0;    //IMMAGINE VISUALIZZATA 0-6
      let StoryImgText = "";     //TESTO SPIEGAZIONE IMMAGINE MARZIANA

      //AGGIORNAMENTO IMMAGINI PAGINA
      function UpdateHud() {
         ImagesHUDCanvas.showImage(0, true);
         ImagesHUDCanvas.setImageUrl(0, Sprite.Telescope[VisualImage]);
         ImagesHUDCanvas.setBarValue(0, Perc[VisualImage]);
         ImagesHUDCanvas.setBarText(0, `${Testi.Menu.Completed[GlobalVar.Language]} ${(Perc[VisualImage] * 100).toFixed(0)}%`);
         ImagesHUDCanvas.setDark(0, Dark * (1 - Perc[VisualImage]));
         ImagesHUDCanvas.setButtonText(5, `${Testi.Immagini[VisualImage].Pianeta[GlobalVar.Language]} ${Testi.Immagini[VisualImage].Luna[GlobalVar.Language]} ${Testi.Immagini[VisualImage].Titolo[GlobalVar.Language]} ${Testi.Immagini[VisualImage].Nome[GlobalVar.Language]}
            ${Testi.Immagini[VisualImage].Immagine[GlobalVar.Language]}
            ---------------------------------------------
            ${Testi.Immagini[VisualImage].Testo[GlobalVar.Language]}`, "12px");
         ImagesHUDCanvas.render();
         ImgTelescope.UpdateImg(Sprite.Telescope[VisualImage], VisualImage);
      };
      function StoryImg() {
         if (GlobalVar.Capitolo < 4) {
            ImagesHUDCanvas.showImage(0, false);
            ImagesHUDCanvas.setButtonText(5, "");
            ImagesHUDCanvas.setBarValue(0, 0);
            ImagesHUDCanvas.setBarText(0, `${Testi.Menu.Completed[GlobalVar.Language]} 0%`);
            StoryImgText = "";
            ImagesHUDCanvas.setButtonText(5, ``, "12px");
         };
         if (GlobalVar.Capitolo == 4) {
            if (GlobalVar.Missione <= 6) {
               ImagesHUDCanvas.showImage(0, false);
               ImagesHUDCanvas.setButtonText(5, "");
               ImagesHUDCanvas.setBarValue(0, 0);
               ImagesHUDCanvas.setBarText(0, `${Testi.Menu.Completed[GlobalVar.Language]} 0%`);
               StoryImgText = "";
            };
            if (GlobalVar.Missione > 6 && GlobalVar.Missione <= 8) {
               ImagesHUDCanvas.showImage(0, true);
               ImagesHUDCanvas.setImageUrl(0, Sprite.Wormhole[6]);
               ImagesHUDCanvas.setBarValue(0, 0.33);
               ImagesHUDCanvas.setBarText(0, `${Testi.Menu.Completed[GlobalVar.Language]} 33%`);
               StoryImgText = Testi.Immagini[7].Spiegazione[0][GlobalVar.Language];
               ImgMessaggio.UpdateImg(Sprite.Wormhole[6]);
            };
            if (GlobalVar.Missione > 8 && GlobalVar.Missione <= 10) {
               ImagesHUDCanvas.showImage(0, true);
               ImagesHUDCanvas.setImageUrl(0, Sprite.Wormhole[7]);
               ImagesHUDCanvas.setBarValue(0, 0.66);
               ImagesHUDCanvas.setBarText(0, `${Testi.Menu.Completed[GlobalVar.Language]} 66%`);
               StoryImgText = `${Testi.Immagini[7].Spiegazione[0][GlobalVar.Language]}
               ${Testi.Immagini[7].Spiegazione[1][GlobalVar.Language]}`;
               ImgMessaggio.UpdateImg(Sprite.Wormhole[7]);

            };
            if (GlobalVar.Missione > 10) {
               ImagesHUDCanvas.showImage(0, true);
               ImagesHUDCanvas.setImageUrl(0, Sprite.Wormhole[8]);
               ImagesHUDCanvas.setBarValue(0, 1);
               ImagesHUDCanvas.setBarText(0, `${Testi.Menu.Completed[GlobalVar.Language]} 100%`);
               StoryImgText = `${Testi.Immagini[7].Spiegazione[0][GlobalVar.Language]}
               ${Testi.Immagini[7].Spiegazione[1][GlobalVar.Language]}
               ${Testi.Immagini[7].Spiegazione[2][GlobalVar.Language]}`;
               ImgMessaggio.UpdateImg(Sprite.Wormhole[8]);

            };
            ImagesHUDCanvas.setButtonText(5, `${Testi.Immagini[7].Titolo[GlobalVar.Language]}
            ---------------------------------------------
            ${Testi.Immagini[7].Testo[GlobalVar.Language]}
            ---------------------------------------------
            ${StoryImgText}`, "12px");
         };
         if (GlobalVar.Capitolo > 4) {
            ImagesHUDCanvas.showImage(0, true);
            ImagesHUDCanvas.setImageUrl(0, Sprite.Wormhole[8]);
            ImagesHUDCanvas.setBarValue(0, 1);
            ImagesHUDCanvas.setBarText(0, `${Testi.Menu.Completed[GlobalVar.Language]} 100%`);
            StoryImgText = `${Testi.Immagini[7].Spiegazione[0][GlobalVar.Language]}
               ${Testi.Immagini[7].Spiegazione[1][GlobalVar.Language]}
               ${Testi.Immagini[7].Spiegazione[2][GlobalVar.Language]}`;
            ImgMessaggio.UpdateImg(Sprite.Wormhole[8]);
            ImagesHUDCanvas.setButtonText(5, `${Testi.Immagini[7].Titolo[GlobalVar.Language]}
            ---------------------------------------------
            ${Testi.Immagini[7].Testo[GlobalVar.Language]}
            ---------------------------------------------
            ${StoryImgText}`, "12px");
         };

         ImagesHUDCanvas.setDark(0, 0);

         ImagesHUDCanvas.render();
      };

      ImagesHUDCanvas.setButtonCallback(2, () => {
         Audio.PlayOnceSound(0, GlobalVar.VolumeSounds / 200);      //CLICK
         VisualImage--;
         if (VisualImage < 0) VisualImage = 7;
         if (VisualImage < 7) UpdateHud();
         else StoryImg();
      });
      ImagesHUDCanvas.setButtonCallback(3, () => {
         Audio.PlayOnceSound(0, GlobalVar.VolumeSounds / 200);      //CLICK
         VisualImage++;
         if (VisualImage > 7) VisualImage = 0;
         if (VisualImage < 7) UpdateHud();
         else StoryImg();
      });

      //CLICK SULL'IMMAGINE
      ImagesHUDCanvas.setButtonCallback(4, () => {
         Audio.PlayOnceSound(0, GlobalVar.VolumeSounds / 200);      //CLICK
         if (VisualImage < 7) ImgTelescope.Show();
         else if (GlobalVar.Capitolo >= 4) ImgMessaggio.Show();
         ImagesHUDCanvas.render();
      });

      /*------------------IMMAGINE SCURITA CON RIQUADRI-----------------*/
      function ImmagineDarkRiquadri(Obj) {
         const BASE_WIDTH = 1920;
         const BASE_HEIGHT = 1080;

         let Delay = false;
         const Positions = G0_CalcolaCentriGriglia(1920, 1080, 6, 4);

         const squareSizes = [];

         for (let i = 0; i < 24; i++) {
            squareSizes[i] = { x: 320 * Obj.Size[i], y: 270 * Obj.Size[i] };
         };

         const canvas = document.createElement("canvas");
         canvas.style.position = "fixed";
         canvas.style.top = "0";
         canvas.style.left = "0";
         canvas.style.zIndex = "100";
         canvas.style.visibility = "hidden";

         const ctx = canvas.getContext("2d");

         canvas.width = BASE_WIDTH;
         canvas.height = BASE_HEIGHT;
         document.body.appendChild(canvas);

         canvas.addEventListener('click', () => {
            Audio.PlayOnceSound(0, GlobalVar.VolumeSounds / 200);      //CLICK
            if (Delay === true) {
               canvas.style.visibility = "hidden";
               Delay = false;
            }
         });

         function resizeCanvas() {
            const scale = Math.min(
               window.innerWidth / BASE_WIDTH,
               (window.innerHeight * 0.85) / BASE_HEIGHT
            );

            canvas.style.width = `${BASE_WIDTH * scale}px`;
            canvas.style.height = `${BASE_HEIGHT * scale}px`;
         };

         window.addEventListener("resize", resizeCanvas);
         resizeCanvas();

         const img = new Image();
         img.src = Sprite.Telescope[0];

         img.onload = () => {
            render();
         };

         function render() {
            ctx.clearRect(0, 0, BASE_WIDTH, BASE_HEIGHT);

            //1️⃣ Immagine scura
            ctx.drawImage(img, 0, 0, BASE_WIDTH, BASE_HEIGHT);

            ctx.save();
            ctx.fillStyle = `rgba(0, 0, 0, ${Dark})`; //0.4–0.7 a seconda di quanto scura la vuoi
            ctx.fillRect(0, 0, BASE_WIDTH, BASE_HEIGHT);
            ctx.restore();

            //=== LINEE OBLIQUE 45° SULL'IMMAGINE SCURITA ===
            ctx.save();
            ctx.strokeStyle = 'rgba(200,200,200,0.3)'; //grigio semi-trasparente
            ctx.lineWidth = 2;

            //distanza tra le linee
            const spacing = 20;

            for (let x = -BASE_HEIGHT; x < BASE_WIDTH; x += spacing) {
               ctx.beginPath();
               ctx.moveTo(x, 0);
               ctx.lineTo(x + BASE_HEIGHT, BASE_HEIGHT);
               ctx.stroke();
            }
            ctx.restore();

            //2️⃣ Maschera a QUADRATI
            ctx.save();
            ctx.beginPath();

            for (let i = 0; i < 24; i++) {
               const pos = Positions[i];

               ctx.rect(
                  pos.x - squareSizes[i].x / 2,
                  pos.y - squareSizes[i].x / 2,
                  squareSizes[i].x,
                  squareSizes[i].y
               );
            }

            ctx.clip();

            //3️⃣ Immagine nitida SOLO nei quadrati
            ctx.drawImage(img, 0, 0, BASE_WIDTH, BASE_HEIGHT);
            ctx.restore();
         };

         function UpdateImg(url, Num) {
            img.src = url;

            for (let i = 0; i < 24; i++) {
               squareSizes[i] = { x: 320 * Obj.Size[Num][i], y: 270 * Obj.Size[Num][i] };
            };
         }

         function Show() {
            canvas.style.visibility = "visible";
            setTimeout(() => {
               Delay = true;
            }, 500);
         }

         return { UpdateImg, Show };
      };
      const ImgTelescope = ImmagineDarkRiquadri({
         Size: Size,    //ARRAY CON LE SCALE DELLE DIMENSIONI DEI RETTANGOLI
      });

      /*------------------IMMAGINE MESSAGGIO-----------------*/
      function ImmagineMessaggio() {
         const BASE_WIDTH = 1920;
         const BASE_HEIGHT = 1080;

         let Delay = false;

         const canvas = document.createElement("canvas");
         canvas.style.position = "fixed";
         canvas.style.top = "0";
         canvas.style.left = "0";
         canvas.style.zIndex = "100";
         canvas.style.visibility = "hidden";

         const ctx = canvas.getContext("2d");

         canvas.width = BASE_WIDTH;
         canvas.height = BASE_HEIGHT;
         document.body.appendChild(canvas);

         canvas.addEventListener('click', () => {
            Audio.PlayOnceSound(0, GlobalVar.VolumeSounds / 200);      //CLICK
            if (Delay === true) {
               canvas.style.visibility = "hidden";
               Delay = false;
            }
         });

         function resizeCanvas() {
            const scale = Math.min(
               window.innerWidth / BASE_WIDTH,
               (window.innerHeight * 0.85) / BASE_HEIGHT
            );

            canvas.style.width = `${BASE_WIDTH * scale}px`;
            canvas.style.height = `${BASE_HEIGHT * scale}px`;
         };

         window.addEventListener("resize", resizeCanvas);
         resizeCanvas();

         const img = new Image();
         img.src = Sprite.Telescope[0];

         img.onload = () => {
            render();
         };

         function render() {
            ctx.clearRect(0, 0, BASE_WIDTH, BASE_HEIGHT);
            ctx.drawImage(img, 0, 0, BASE_WIDTH, BASE_HEIGHT);
            ctx.save();
         };

         function UpdateImg(url) {
            img.src = url;
         }

         function Show() {
            canvas.style.visibility = "visible";
            setTimeout(() => {
               Delay = true;
            }, 500);
         }

         return { UpdateImg, Show };
      };
      const ImgMessaggio = ImmagineMessaggio();

      UpdateHud();
      ImagesHUDCanvas.render();
   };

   //--------------------------------------------------PAGINA SNIPPET--------------------------------------------------//
   if (GlobalVar.Page == "Snippet") {
      /*-----------------------------------------------PARAMETRI ENGINE----------------------------------------------------------*/
      MicEngineParam = SnippetParam;

      /*----------------------------------------------CARICAMENTO ENGINE--------------------------------------------------------*/
      async function startGame() {
         MicEnginereturn = await MicEngine(MicEngineParam, Oggetti, Geometrie, Materiali);
         if (MicEngineParam.Moduli.Debug == true && MicEngineParam.Debug.Return == true) {
            console.log("MicEnginereturn");
            console.log(MicEnginereturn.VarObject.E3_ConsoleLogSimpleObject(MicEnginereturn));
         };

         /*--------------------------------------------SNIPPET-----------------------------------------------------*/
         const Snippet = SnippetEngine();
      };
      startGame().then(() => {
         gameReady = true;
         MicEnginereturn.VarObject.E3_UpdateProgress(true);
      });
   };

   //------------------------------------------------PAGINA DEL GIOCO 1701-----------------------------------------------//
   if (GlobalVar.Page == "Game") {
      /*-----------------------------------------------PARAMETRI ENGINE----------------------------------------------------------*/
      MicEngineParam = GameParam;
      if (GlobalVar.Control == 1) MicEngineParam.Moduli.VirtualPad = false;

      /*----------------------------------------------CARICAMENTO ENGINE--------------------------------------------------------*/
      async function startGame() {
         MicEnginereturn = await MicEngine(MicEngineParam, Oggetti, Geometrie, Materiali);
         if (MicEngineParam.Moduli.Debug == true && MicEngineParam.Debug.Return == true) {
            console.log("MicEnginereturn");
            console.log(MicEnginereturn.VarObject.E3_ConsoleLogSimpleObject(MicEnginereturn));
         };

         if (Number(SaveSystem.getItem(`SpaceStation`)) == 1) {
            MicEnginereturn.VarPlanetSystem.Released = true;    //RILASCIO RAGGIO TRAENTE
            SaveSystem.setItem(`SpaceStation`, 0);       //FLAG DI PAGINA
         };
         function G1_CallRadio() {                       //CHIAMA LA RADIO SE E LE CONDIZIONI LO PERMETTONO (ONCE)
            if ((MicEnginereturn.VarPlanetSystem.SubMoonOrbit > 0 || MicEnginereturn.VarPlanetSystem.MoonOrbit > 0) && MicEnginereturn.VarPlanetSystem.TractorActive == 0 && MicEnginereturn.VarPlanetSystem.NearTractorDist < MicEngineParam.PlanetarySystem.TractorBeam.RadioDistance && VarObject.AnswerRadio == false) {
               VarObject.CallRadio = true;
            };
         };
         function G1_ExplosionDeath() {                   //MORTE PER ESPLOSIONE
            MicEnginereturn.User.Object.children[1].visible = false;
            VarObject.Death = true;
            OnceExplosion.Update(VarObject.Death);
         };
         function G1_DerivaDeath() {
            VarObject.CntDeriva++;
            if (MicEnginereturn.User.MotorLights.length > 0) {    //SE L'OGGETTO HA PARTI ASSOCIATE AL MOTORE
               for (let i = 0; i < MicEnginereturn.User.MotorLights.length; i++) {     //PER OGNI MODULO CON LUCI MOTORE
                  const t = VarObject.CntDeriva;
                  const max = VarObject.TimeDeriva;

                  if (t >= max) {
                     MicEnginereturn.User.Object.children[1].children[MicEnginereturn.User.MotorLights[i].Modulo].children[0].visible = false;
                     MicEnginereturn.User.Object.children[1].children[MicEnginereturn.User.MotorLights[i].Modulo].children[1].visible = false;
                     MicEnginereturn.User.Object.children[1].children[MicEnginereturn.User.MotorLights[i].Modulo].children[2].visible = false;
                  };
                  const progress = t / max;     //PERCENTUALE DI TEMPO TRASCORSA
                  //Maggiore è il progress, maggiore è la probabilità di spegnimento
                  const failureChance = 0.2 + progress * 0.7; //da 0.2 a 0.9

                  //Lampeggio disturbato: a volte acceso, a volte spento
                  MicEnginereturn.User.Object.children[1].children[MicEnginereturn.User.MotorLights[i].Modulo].children[0].visible = Math.random() > failureChance;
                  MicEnginereturn.User.Object.children[1].children[MicEnginereturn.User.MotorLights[i].Modulo].children[1].visible = Math.random() > failureChance
                  MicEnginereturn.User.Object.children[1].children[MicEnginereturn.User.MotorLights[i].Modulo].children[2].visible = Math.random() > failureChance;
               };
            };
            if (VarObject.CntDeriva > VarObject.TimeDeriva) VarObject.Deriva = true;
         };
         function G1_ShowMissionText() {                 //MOSTRA IL TITOLO DELLA MISSIONE
            GameHUDCanvas.showButton(6, true);
            let primaLinea = Testi.Missions[GlobalVar.Capitolo].Missioni[GlobalVar.Missione][GlobalVar.Language].split("\n")[0];
            GameHUDCanvas.setButtonText(6, `${Testi.Missions[GlobalVar.Capitolo].Testo[GlobalVar.Language]}
            ${primaLinea}`);

            //NASCONDERE SYSTEM TEXT DOPO UN CERTO TEMPO
            setTimeout(() => {
               GameHUDCanvas.showButton(6, false);
            }, VarObject.TimeMissionText);
         };
         function G1_PositionNuvola() {                   //GENERA CASUALMENTE LA POSIZIONE DELLA NUVOLA AD OGNI NUOVA PARTITA
            const PosNuvola = MicEnginereturn.Math.E3_RandomPointInRing(449825200000 + 10000000000, 590638000000 - 10000000000);
            GlobalVar.PosXNuvola = PosNuvola.x;
            GlobalVar.PosZNuvola = PosNuvola.z;
            SaveSystem.setItem('PosXNuvola', GlobalVar.PosXNuvola);
            SaveSystem.setItem('PosZNuvola', GlobalVar.PosZNuvola);
         };
         function G1_UpdateRadarBars() {
            //AGGIORNA L'ALTEZZA DELLA BARRA
            GameHUDCanvas.setBarValue(9, VarObject.BarRadarPerc / 100);
            //AGGIORNA IL TESTO DELLA BARRA
            GameHUDCanvas.setBarText(9, `${VarObject.BarRadarPerc}%`);
         };

         /*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
         /*------------------------------------------------------BLOCCHI STATICI-----------------------------------------------------------------*/

         //----------------------------------------CARICAMENTO/NUOVA PARTITA---------------------------------------------------//
         //#region
         //NUOVA PARTITA
         if (Number(SaveSystem.getItem(`NewGame`)) == 0) {
            //VALORI INIZIALI PARAMETRI
            GlobalVar.Money = Economy.Money;
            GlobalVar.Fuel = Economy.Fuel;
            VarObject.Air = Economy.Air;
            VarObject.Water = Economy.Water;
            VarObject.Food = Economy.Food;
            VarObject.AirMax = Economy.AirMax;
            VarObject.WaterMax = Economy.WaterMax;
            VarObject.FoodMax = Economy.FoodMax;
            MicEnginereturn.VarPlanetSystem.TractorActive = 1;    //PROVA, PER RISOLVERE IL BUG DEL RAGGIO TRAENTE CHE SI CHIUDE SUBITO
            SaveSystem.setItem(`TractorActive`, 1);               //PROVA, PER RISOLVERE IL BUG DEL RAGGIO TRAENTE CHE SI CHIUDE SUBITO
            GlobalVar.Coin = Economy.Coin;
            GlobalVar.Color1 = Colors.InitShipColor1;
            GlobalVar.Color2 = Colors.InitShipColor2;
            GlobalVar.Capitolo = 0;
            GlobalVar.Missione = 0;
            SaveSystem.setItem(`FlagMissione`, 0);//FLAG DA USARE IN CASO SI CAMBI MISSIONE O CAPITOLO FUORI DALLA PAGINA DEL GIOCO
            GlobalVar.ShipModules = 0;
            GlobalVar.LivingModules = 0;
            GlobalVar.ContainerModules = 0;
            GlobalVar.ExtractionModules = 0;
            GlobalVar.RadarModules = 0;
            SaveSystem.setItem(`SpaceStation`, 0);

            //MISSIONI
            for (let i = 0; i < GlobalVar.NumMission; i++) {
               SaveSystem.setItem(`MissionPlanet${i}`, 0);
               SaveSystem.setItem(`MissionMoon${i}`, 0);
               SaveSystem.setItem(`MissionSubMoon${i}`, 0);
               SaveSystem.setItem(`MissionLoad${i}`, 0);
            };

            SaveSystem.setItem(`MissionCurrent`, 0);
            SaveSystem.setItem(`MissionPlanetCurrent`, 0);
            SaveSystem.setItem(`MissionMoonCurrent`, 0);
            SaveSystem.setItem(`MissionSubMoonCurrent`, 0);
            SaveSystem.setItem(`MissionLoadCurrent`, 0);
            GlobalVar.MissionLoadCurrent = 0;
            SaveSystem.setItem(`MissionRewardCurrent`, 0);
            SaveSystem.setItem(`MissionDone`, 1);    //MISSIONE CONCLUSA

            //LIVELLI MINIGIOCHI
            SaveSystem.setItem(`CarroponteLevel`, 0);
            SaveSystem.setItem(`CombinaColoreLevel`, 0);
            SaveSystem.setItem(`ScavaMeteoriteLevel`, 0);

            //RESET IMMAGINI TELESCOPIO
            for (let i = 0; i < 7; i++) {    //NUMERO DI IMMAGINI MEMORIZZATE PER OGNI TELESCOPIO
               for (let a = 0; a < 24; a++) {
                  SaveSystem.setItem(`Telescopio${i}Img${a}`, 0);
               };
            };

            //STORIA
            SaveSystem.setItem(`CapitoloMem`, -1);          //CAPITOLO MEMORIZZATO PER EVITARE IL LAMPEGGIO E CHE ESCA SEMPRE LA SCRITTA
            SaveSystem.setItem(`MissioneMem`, -1);          //MISSIONE MEMORIZZATA PER EVITARE IL LAMPEGGIO E CHE ESCA SEMPRE LA SCRITTA
            VarObject.CapitoloMem = -1;
            VarObject.MissioneMem = -1;
            VarObject.TimeBar = VarObject.SecBar;
            VarObject.TimeBar2 = VarObject.SecBar3;
            GlobalVar.Deuterio = 0;
            GlobalVar.Trizio = 0;
            GlobalVar.Sole = 0;
            GlobalVar.Scient = 0;
            GlobalVar.DeuterioTotal = 0;
            GlobalVar.TrizioTotal = 0;
            GlobalVar.SoleTotal = 0;
            GlobalVar.StepTimeMars = 0;
            GlobalVar.ScientTotal = 0;
            GlobalVar.Cometa = 0;

            G1_PositionNuvola();

            SaveSystem.update();
         }
         //PARTITA INIZIATA
         else {
            //ARRAY CONTENENTE I MODULI IMPORTATI DAL LOCAL STORAGE E CONTA I MODULI NAVE E LIVING
            GlobalVar.TotalModules = MicEnginereturn.VarModularShip.Moduli;
            GlobalVar.ShipModules = MicEnginereturn.VarModularShip.NumModules[2];
            GlobalVar.LivingModules = MicEnginereturn.VarModularShip.NumModules[4];
            GlobalVar.ContainerModules = MicEnginereturn.VarModularShip.NumModules[5];
            GlobalVar.ExtractionModules = MicEnginereturn.VarModularShip.NumModules[10];
            GlobalVar.RadarModules = MicEnginereturn.VarModularShip.NumModules[11];

            //MODULI NAVE SPAZIALE
            VarObject.Air = Number(SaveSystem.getItem(`Air`));
            VarObject.Water = Number(SaveSystem.getItem(`Water`));
            VarObject.Food = Number(SaveSystem.getItem(`Food`));
            VarObject.AirMax = Economy.AirMax + (GlobalVar.ShipModules * Economy.ShipModuleAir);
            VarObject.WaterMax = Economy.WaterMax + (GlobalVar.ShipModules * Economy.ShipModuleWater);
            VarObject.FoodMax = Economy.FoodMax + (GlobalVar.ShipModules * Economy.ShipModuleFood);
            GlobalVar.UpgradeCockpit = Number(SaveSystem.getItem(`UpgradeCockpit`));
            GlobalVar.UpgradeTank = Number(SaveSystem.getItem(`UpgradeTank`));
            GlobalVar.UpgradeMotor = Number(SaveSystem.getItem(`UpgradeMotor`));

            //STORY
            if (GlobalVar.MissionCurrent == 1) {
               MicEnginereturn.VarPlanetSystem.DestPlanet = GlobalVar.MissionPlanetCurrent + 1;
               MicEnginereturn.VarPlanetSystem.DestMoon = GlobalVar.MissionMoonCurrent + 1;
               MicEnginereturn.VarPlanetSystem.DestSubMoon = GlobalVar.MissionSubMoonCurrent + 1;
            };
         };

         GlobalVar.TutorialFlag = Number(SaveSystem.getItem(`Tutorial`));
         //#endregion

         //-------------------------------------------------CAMERA-------------------------------------------------------------//
         //#region
         //POSIZIONE INIZIALE PERSPECTIVE CAMERA
         MicEnginereturn.CameraGroup.children[0].children[0].children[0].position.z = VarObject.PosZ;
         MicEnginereturn.CameraGroup.children[0].children[0].children[0].position.y = VarObject.PosY;
         MicEnginereturn.CameraGroup.children[0].children[0].children[0].updateProjectionMatrix();
         //#endregion

         //-------------------------------------CARICAMENTO MODELLO NAVE SPAZIALE----------------------------------------------//
         //#region
         //AGGIORNA LA QUANTITÀ DI MEMBRI DI EQUIPAGGIO ATTUALI
         VarObject.Crew = 1 + GlobalVar.ExtractionModules + GlobalVar.ContainerModules + GlobalVar.RadarModules;
         //AGGIORNA LA QUANTITÀ DI MEMBRI DI EQUIPAGGIO OSPITABILI PER I VIAGGI NORMALI
         VarObject.TravelCrew = 1 + GlobalVar.ShipModules * 2;
         //AGGIORNA LA QUANTITÀ DI MEMBRI DI EQUIPAGGIO OSPITABILI PER I VIAGGI LUNGHI
         VarObject.LongTravelCrew = GlobalVar.LivingModules * 2;

         G0_UpdateShipUpgrade();             //AGGIORNAMENTO UPGRADE
         G0_ChangeShipColor();               //CAMBIO COLORE
         //#endregion

         /*-----------------------------------------------GENERATE HUD--------------------------------------------------------*/
         //#region
         const GameHUDCanvas = S0_GenerateHUDCanvas(GameHUDObj);
         GameHUDCanvas.showButton(6, false);       //6 MISSION TEXT
         GameHUDCanvas.showButton(10, false);      //10 SYSTEM TEXT
         GameHUDCanvas.showImage(20, false);       //20 IMMAGINE TUTORIAL 1
         GameHUDCanvas.showImage(21, false);       //21 IMMAGINE TUTORIAL 2
         GameHUDCanvas.showImage(22, false);       //22 LOGO
         GameHUDCanvas.showImage(23, false);       //23 IMMAGINE TUTORIAL 3
         GameHUDCanvas.showButton(25, false);      //25 SKIP TUTORIAL

         /*-------------------------------PULSANTI E IMMAGINI------------------------------*/
         //----------------0 PULSANTE MAPPA---------------//
         GameHUDCanvas.setButtonCallback(0, () => {
            //ROTAZIONE WORLD NAVE SPAZIALE (SOLO PER LA MAPPA PERCHÈ LA NAVE È INSERITA NELL'ORBITA  NELLA MAPPA NO)
            MicEnginereturn.User.Object.getWorldQuaternion(MicEnginereturn.User.UserWorldQuat);
            SaveSystem.setItem(`SpaceGameWorld_RotX`, MicEnginereturn.User.UserWorldQuat.x);
            SaveSystem.setItem(`SpaceGameWorld_RotY`, MicEnginereturn.User.UserWorldQuat.y);
            SaveSystem.setItem(`SpaceGameWorld_RotZ`, MicEnginereturn.User.UserWorldQuat.z);
            SaveSystem.setItem(`SpaceGameWorld_RotW`, MicEnginereturn.User.UserWorldQuat.w);
            G1_ChangeSavePage("Map");
         });

         //----------------1 PULSANTE MENU----------------//
         GameHUDCanvas.setButtonCallback(1, () => {
            G1_ChangeSavePage("Home");
         });

         //----------------2 PULSANTE MISSIONS------------//
         GameHUDCanvas.setButtonCallback(2, () => {
            G1_ChangeSavePage("Missions");
         });

         //----------------5 PULSANTE RADIO---------------//
         GameHUDCanvas.setButtonCallback(5, () => {
            G1_CallRadio();
         });

         /*----------------8 PULSANTE - MOTORE------------*/
         GameHUDCanvas.setButtonCallback(8, () => {
            VarObject.ThrottleDown = true;
         });
         GameHUDCanvas.setButtonCallbackUp(8, () => {
            VarObject.ThrottleDown = false;
         });

         //----------------9 PULSANTE + MOTORE------------//
         GameHUDCanvas.setButtonCallback(9, () => {
            VarObject.ThrottleUp = true;
         });
         GameHUDCanvas.setButtonCallbackUp(9, () => {
            VarObject.ThrottleUp = false;
         });

         /*----------------22 PULSANTE ROLLIO SINISTRA------------*/
         GameHUDCanvas.setButtonCallback(22, () => {
            VarObject.RollDX = true;
         });
         GameHUDCanvas.setButtonCallbackUp(22, () => {
            VarObject.RollDX = false;
         });

         //----------------23 PULSANTE ROLLIO DESTRA------------//
         GameHUDCanvas.setButtonCallback(23, () => {
            VarObject.RollSX = true;
         });
         GameHUDCanvas.setButtonCallbackUp(23, () => {
            VarObject.RollSX = false;
         });

         VarObject.RollSX == false && VarObject.RollDX == false

         /*------------------NASCONDI LE IMMAGINI SE IL CONTROLLER È ABILITATO------------------*/
         if (GlobalVar.Control == 1) {
            GameHUDCanvas.showButton(8, false);                //PULSANTE - MOTORE
            GameHUDCanvas.showImage(25, false);                //IMMAGINE RALLENTA
            GameHUDCanvas.showButton(9, false);                //PULSANTE + MOTORE
            GameHUDCanvas.showImage(24, false);                //IMMAGINE ACCELERA
            GameHUDCanvas.showButton(22, false);               //PULSANTE ROLLIO SINISTRA
            GameHUDCanvas.showButton(23, false);               //PULSANTE ROLLIO DESTRA
            GameHUDCanvas.showImage(24, false);                //IMMAGINE ACCELERA
            GameHUDCanvas.showImage(26, false);               //IMMAGINE RUOTA DESTRA
            GameHUDCanvas.showImage(27, false);               //IMMAGINE RUOTA SINISTRA
            GameHUDCanvas.showImage(28, false);               //IMMAGINE ASTRONAVE
            GameHUDCanvas.showImage(29, false);               //IMMAGINE CAMERA
         };

         //----------------PULSANTE E BARRA RADAR---------//
         //NASCONDI IL PULSANTE E LA BARRA RADAR SE IL MODULO NON È INSTALLATO
         if (GlobalVar.RadarModules == 0 || (GlobalVar.Capitolo == 5 && GlobalVar.Missione == 2)) {
            GameHUDCanvas.showButton(16, false);
            GameHUDCanvas.showBar(9, false);
         };

         //PULSANTE IMPULSO
         GameHUDCanvas.setButtonCallback(16, () => {
            if (VarObject.BarRadarPerc >= 100) {
               VarObject.BarRadarPerc = 0;
               G1_UpdateRadarBars();
               VarObject.RadarImpulse = true;
            }
         });
         GameHUDCanvas.setBarCallback(9, () => {
            VarObject.BarRadarPressed = true;
         });
         GameHUDCanvas.setBarCallbackUp(9, () => {
            VarObject.BarRadarPressed = false;
         });

         let FuelBarValue = 0;                                                //VALORE 0-1 DELLA BARRA DEL CARBURANTE
         G1_UpdateRadarBars();

         //-------------------BARRA DI CARICO----------------------//
         GameHUDCanvas.setBarValue(5, GlobalVar.MissionLoadCurrent / (GlobalVar.ContainerModules * Economy.Load));
         GameHUDCanvas.setBarText(5, `${GlobalVar.MissionLoadCurrent}/${GlobalVar.ContainerModules * Economy.Load}kg`);

         /*------------------------BARRA SURRISCALDAMENTO (FUNZIONE ONCE)---------------*/
         //ICONE BARRE
         GameHUDCanvas.showBar(6, false);
         GameHUDCanvas.showImage(17, false);

         const FrictionBar = new MicEnginereturn.VarObject.OnceFunction(function () {
            if (MicEnginereturn.VarModularShip.ColorStep > 0) {
               GameHUDCanvas.showBar(6, true);
               GameHUDCanvas.showImage(17, true);
            }
            else {
               GameHUDCanvas.showBar(6, false);
               GameHUDCanvas.showImage(17, false);
            };
         });

         //------------------------BARRA STORIA---------------//
         GameHUDCanvas.showBar(7, false);


         //------------------------BARRA DISTANZA COLLISIONE (FUNZIONE ONCE)---------------//
         GameHUDCanvas.showBar(8, false);
         GameHUDCanvas.showImage(16, false);

         const DistanceBar = new MicEnginereturn.VarObject.OnceFunction(function () {
            if (MicEnginereturn.VarPlanetSystem.LimitCollision < 1) {
               GameHUDCanvas.showBar(8, true);
               GameHUDCanvas.showImage(16, true);
            }
            else {
               GameHUDCanvas.showBar(8, false);
               GameHUDCanvas.showImage(16, false);
            };
         });

         /*--------------------------------TESTO AUTONOMIE------------------------------*/
         //SEGNALATORE LIMITE DI VELOCITÀ
         VarObject.LimitBar = document.createElement('p');
         VarObject.LimitBar.style.backgroundColor = "red";
         S0_StandardCSS(VarObject.LimitBar, "top", "2%", "right", "3%", "6%", "2px");

         /*--------------------------------PULSANTE SALTA TUTORIAL------------------------------*/
         GameHUDCanvas.setButtonCallback(25, () => {
            GlobalVar.TutorialFlag = 11;
            VarObject.NPCTutorial.Erase();
         });

         /* ------------------------------------------IMMAGINI PULSANTI E BARRE--------------------------------------------------- */
         //#region
         /*-----------------------------------ICONA CARICO------------------------------*/
         if (GlobalVar.ContainerModules == 0) {
            GameHUDCanvas.showImage(6, false);
            GameHUDCanvas.showButton(11, false);
            GameHUDCanvas.showButton(17, false);
         }
         else GameHUDCanvas.setButtonText(17, `X${GlobalVar.ContainerModules}`);

         /*-----------------------------------ICONA ESTRAZIONE/RADAR------------------------------*/
         if (GlobalVar.ExtractionModules == 0 && GlobalVar.RadarModules == 0) {
            GameHUDCanvas.showImage(7, false);
            GameHUDCanvas.showButton(12, false);
            GameHUDCanvas.showButton(18, false);
         }
         else GameHUDCanvas.setButtonText(18, `X${GlobalVar.ExtractionModules + GlobalVar.RadarModules}`);

         /*-----------------------------------ICONA SCIENZIATO------------------------------*/
         if (GlobalVar.Scient == 0) {
            GameHUDCanvas.showImage(8, false);
            GameHUDCanvas.showButton(13, false);
            GameHUDCanvas.showButton(19, false);
         }
         else GameHUDCanvas.setButtonText(19, `X${GlobalVar.Scient}`);


         /*-----------------------------------ICONA POSTO VIAGGIO NORMALE------------------------------*/
         if (GlobalVar.ShipModules == 0) {      //NASCONDI L'ICONA SE NON CI SONO POSTI, NON SE NON CI SONO POSTI LIBERI
            GameHUDCanvas.showImage(9, false);
            GameHUDCanvas.showButton(14, false);
            GameHUDCanvas.showButton(20, false);
         }
         else GameHUDCanvas.setButtonText(20, `${VarObject.Crew + GlobalVar.Scient}/${VarObject.TravelCrew}`);


         /*-----------------------------------ICONA POSTO VIAGGIO LUNGO------------------------------*/

         if (GlobalVar.LivingModules == 0) {      //NASCONDI L'ICONA SE NON CI SONO POSTI, NON SE NON CI SONO POSTI LIBERI
            GameHUDCanvas.showImage(10, false);
            GameHUDCanvas.showButton(15, false);
            GameHUDCanvas.showButton(21, false);
         }
         else GameHUDCanvas.setButtonText(21, `${VarObject.Crew + GlobalVar.Scient}/${VarObject.LongTravelCrew}`);
         //#endregion

         //#endregion

         /* -------------------------------------------------HYPERLOOP---------------------------------------------------------- */
         //#region
         MicEnginereturn.User.Object.children[0].add(MicEnginereturn.Hyperloop[0].Lines);
         MicEnginereturn.Hyperloop[1].Lines.position.set(0, 0, GlobalVar.TotalModules * VarObject.SingleModuleDist);
         MicEnginereturn.User.Object.children[0].add(MicEnginereturn.Hyperloop[1].Lines);
         //#endregion

         //----------------------------------------ROTAZIONE CAMERA CON IL MOUSE-----------------------------------------------//
         //#region
         let PointerX = 0;
         let PointerY = 0;

         document.addEventListener('contextmenu', function (event) {
            event.preventDefault();
         });
         document.addEventListener('pointerdown', function (event) {
            event.preventDefault();
            PointerX = (event.clientX / (window.innerWidth)) * 2 - 1;
            PointerY = - (event.clientY / window.innerHeight) * 2 + 1;
            if (PointerX > -MicEngineParam.DynamicCockpit.AreaWidth && PointerX < MicEngineParam.DynamicCockpit.AreaWidth &&
               PointerY > -MicEngineParam.DynamicCockpit.AreaHeight && PointerY < MicEngineParam.DynamicCockpit.AreaHeight) {
               VarObject.CameraRiposiziona = true;
               setTimeout(() => {
                  VarObject.CameraRiposiziona = false;
               }, 10000);
            };
         }, { passive: false });
         //#endregion

         /*------------------------------------ATTIVAZIONE RAGGIO TRAENTE SENZA RADIO------------------------------------------*/
         //#region
         //SE IL RAGGIO TRAENTE NON FUNZIONA CON LA RADIO ABILITALO SEMPRE
         //if (MicEngineParam.PlanetarySystem.TractorBeam.Radio == false) MicEnginereturn.VarObject.TractorActive = 1;
         //#endregion

         //-------------------------------------LUCI MOTORE DELLA NAVE SPAZIALE (GAME)-----------------------------------------//
         //#region
         const ShipLigtsObj = new MicEnginereturn.VarObject.OnceFunction(function () {
            if (MicEnginereturn.User.MotorLights.length > 0) {    //SE L'OGGETTO HA PARTI ASSOCIATE AL MOTORE
               for (let i = 0; i < MicEnginereturn.User.MotorLights.length; i++) {     //PER OGNI MODULO CON LUCI MOTORE

                  let Value = VarObject.VelGlobalPerc / 100;
                  let Dist = VarObject.VelGlobalPerc / 4.54 - 3;    //0%=22, 100%=0

                  MicEnginereturn.User.Object.children[1].children[MicEnginereturn.User.MotorLights[i].Modulo].children[0].scale.set(1, Value, 1);
                  MicEnginereturn.User.Object.children[1].children[MicEnginereturn.User.MotorLights[i].Modulo].children[1].scale.set(1, Value, 1);
                  MicEnginereturn.User.Object.children[1].children[MicEnginereturn.User.MotorLights[i].Modulo].children[2].scale.set(1, Value, 1);
                  MicEnginereturn.User.Object.children[1].children[MicEnginereturn.User.MotorLights[i].Modulo].children[0].position.setZ(Dist);
                  MicEnginereturn.User.Object.children[1].children[MicEnginereturn.User.MotorLights[i].Modulo].children[1].position.setZ(Dist);
                  MicEnginereturn.User.Object.children[1].children[MicEnginereturn.User.MotorLights[i].Modulo].children[2].position.setZ(Dist);
               };
            };
         });
         ShipLigtsObj.Update(0.01);
         //#endregion

         //------------------------------------------------TUTORIAL(GAME)------------------------------------------------------//
         //#region
         const ScuolaGuidaNpc = new MicEnginereturn.VarObject.OnceFunction(function () {
            if (GlobalVar.TutorialFlag >= 4 && GlobalVar.TutorialFlag <= 10) {
               VarObject.NPCTutorial = MicEnginereturn.VarObject.E3_DisplayNPCSingleButton({
                  //GENERICI
                  Font: 14,                                                                    //FONT IN PIXEL
                  PosX: GlobalVar.TutorialPosX,                                                //POSIZIONE X
                  PosY: 100,                                                                     //POSIZIONE Y
                  zIndex: "100",
                  //IMMAGINE
                  LargImage: 150,                                                              //LARGHEZZA IMMAGINE
                  AtImage: 100,                                                                //ALTEZZA IMMAGINE
                  Image: NPC.Guida.Immagini[GlobalVar.GenderNPC],                              //IMMAGINE
                  //TESTO
                  PositionText: "Side",                               //POSIZIONE DEL TESTO RELATIVA ALL'IMMAGINE "Down" "Side
                  LargText: 400,
                  AltText: 150,                                                                //ALTEZZA TESTO
                  ColorText: Colors.NPCColor,                                                  //COLORE SFONDO TESTO
                  ColorFontText: "#ffffffff",                                                //COLORE FONT TESTO
                  Text: NPC.Guida.Testi[GlobalVar.TutorialFlag][GlobalVar.Language + 1],       //TESTO
                  //PULSANTE
                  AltPuls: 40,                   //ALTEZZA PULSANTI
                  ColorPuls: Colors.NPCColor,                             //COLORE SFONDO PULSANTI
                  ColorFontPuls: "#ffffffff",                         //COLORE FONT PULSANTI
                  ColorBorderPuls: "#ffffffff",                      //COLORE BORDO PULSANTI
                  Text1: `${NPC.Click[GlobalVar.Language]}   ${GlobalVar.TutorialFlag - 3}/7`,     //TESTO PULSANTE 1
               },
                  function () { GlobalVar.TutorialFlag++ });
               //SKIP TUTORIAL
               GameHUDCanvas.showButton(25, true);      //25 SKIP TUTORIAL
            }
            else GameHUDCanvas.showButton(25, false);      //25 SKIP TUTORIAL
            //IMMAGINI TUTORIAL
            if (GlobalVar.TutorialFlag == 4) {
               GameHUDCanvas.showImage(20, true);       //20 IMMAGINE TUTORIAL 1
               GameHUDCanvas.showImage(21, true);       //21 IMMAGINE TUTORIAL 2
               GameHUDCanvas.showImage(23, false);       //23 IMMAGINE TUTORIAL 3
            };
            if (GlobalVar.TutorialFlag == 6) {
               GameHUDCanvas.showImage(20, true);       //20 IMMAGINE TUTORIAL 1
               GameHUDCanvas.showImage(21, true);       //21 IMMAGINE TUTORIAL 2
               GameHUDCanvas.showImage(23, true);       //23 IMMAGINE TUTORIAL 3
               GameHUDCanvas.setImageUrl(20, Sprite.Target[0]);
               GameHUDCanvas.setImageUrl(21, Sprite.Target[1]);
            };
            if (GlobalVar.TutorialFlag != 4 && GlobalVar.TutorialFlag != 6) {
               GameHUDCanvas.showImage(20, false);       //20 IMMAGINE TUTORIAL 1
               GameHUDCanvas.showImage(21, false);       //21 IMMAGINE TUTORIAL 2
               GameHUDCanvas.showImage(23, false);       //23 IMMAGINE TUTORIAL 3
            };
            //LOGO TUTORIAL
            if (GlobalVar.TutorialFlag == 3) {
               GameHUDCanvas.showImage(22, true);       //22 LOGO
            }
            else {
               GameHUDCanvas.showImage(22, false);       //22 LOGO
            };

         });
         //#endregion

         /*----------------------------------------SUONI + SYSTEM TEXT------------------------------------------*/
         //#region
         //VOCE
         const OrbitSounds = new MicEnginereturn.VarObject.OnceFunction(function () {
            if (VarObject.VarSound == 0) MicEnginereturn.Audio.PlayOnceSound(5, GlobalVar.VolumeVoice / 100);      //INTERPLANETARY SPACE
            if (VarObject.VarSound == 1) {                                          //PLANET ORBIT
               MicEnginereturn.Audio.PlayOnceSound(2, GlobalVar.VolumeVoice / 100);
               MicEnginereturn.E1_ShowSystemTextCanvas(GameHUDCanvas, 10);
            };
            if (VarObject.VarSound == 2) {                                          //MOON ORBIT
               MicEnginereturn.Audio.PlayOnceSound(3, GlobalVar.VolumeVoice / 100);
               MicEnginereturn.E1_ShowSystemTextCanvas(GameHUDCanvas, 10);
            };
            if (VarObject.VarSound == 3) {                                          //STATION ORBIT
               MicEnginereturn.Audio.PlayOnceSound(4, GlobalVar.VolumeVoice / 100);
               MicEnginereturn.E1_ShowSystemTextCanvas(GameHUDCanvas, 10);
            };
         });

         const ReleasedSound = new MicEnginereturn.VarObject.OnceFunctionBool(function () {
            MicEnginereturn.Audio.PlayOnceSound(6, GlobalVar.VolumeVoice / 100);      //RELEASED
         });

         //SUONO MOTORE
         const EngineSound = MicEnginereturn.Audio.PlayLoopSound(7);
         const EngineOnceSound = new MicEnginereturn.VarObject.OnceFunction(function () {
            if (VarObject.VelGlobalPerc > 0) EngineSound.Play(GlobalVar.VolumeSounds / 100);
            if (VarObject.VelGlobalPerc == 0) EngineSound.Stop();
         });

         //MUSICHE + SYSTEM TEXT
         const IntroSound = new MicEnginereturn.VarObject.OnceFunctionBool(() => {
            MicEnginereturn.Audio.PlayOnceSound(8, GlobalVar.VolumeMusic / 100);
         });

         const HyperSound = MicEnginereturn.Audio.PlayLoopSound(13);
         const HyperOnceSound = new MicEnginereturn.VarObject.OnceFunction(function () {
            if (VarObject.HyperSound == true) HyperSound.Play(GlobalVar.VolumeMusic / 100);
            else HyperSound.Stop();
         });

         const OrbitMusic = MicEnginereturn.Audio.PlayLoopSound(14);
         const OrbitOnceMusic = new MicEnginereturn.VarObject.OnceFunction(function () {
            if (VarObject.OrbitMusic == true) OrbitMusic.Play(GlobalVar.VolumeMusic / 500);
            else OrbitMusic.Stop();
         });
         //#endregion

         /*---------------------------------------------OGGETTO CONTROLLER-----------------------------------------------------*/
         //#region
         Controller = S0_Controller({
            Control: GlobalVar.Control,             //0 VIRTUALE - 1 FISICO
            //PARAMETRI ASSI
            VirtualAxe: VirtualAxe,                 //0 NIPPLE0X - 1 NIPPLE0Y - 2 NIPPLE1X - 3 NIPPLE1Y
            InvAxe: InvAxe,                         //0 NORMALE - 1 INVERTITO
            RegAxe: RegAxe,                         //COEFFICIENTE DI MOLTIPLICAZIONE PER L'ASSE
            PadAxe: PadAxe,                         //TIPO (AXE, BUTTON) - INDICE
            //PARAMETRI PULSANTI
            PadButton: PadButton,                   //TIPO (AXE, BUTTON) - INDICE
         });
         //#endregion

         /*-------------------------------------ROTAZIONE A QUATERNIONI NAVE SPAZIALE------------------------------------------*/
         VarObject.Rotation = MicEnginereturn.Math.E3_EulerQuaternionInterpolation();

         /*---------------------------------------------OGGETTO ESPLOSIONE----------------------------------------------------*/
         //#region
         Esplosione = await MicEnginereturn.VarObject.E3_Explosion({
            //Model: Obj.FragmentModel,
            Parent: MicEnginereturn.User.Object,      //OGGETTO GENITORE DA CUI FARE PARTIRE L'ESPLOSIONE
            Num: 1000,                                  //NUMERO DI FRAMMENTI
            Spread: 0,                                //POSIZIONE INIZIALE CASUALE DEI FRAMMENTI
            Force: 50,                                 //VELOCITÀ DEI FRAMMENTI
            Gravity: 0,                               //GRAVITÀ (0=NESSUNA GRAVITÀ, ESPLOSIONE IN TUTTE LE DIREZIONI)
            MaxDistance: 500,                          //DISTANZA OLTRE LA QUALE I FRAMMENTI SCOMPAIONO
         });
         const OnceExplosion = new MicEnginereturn.VarObject.OnceFunctionBool(function () {
            Esplosione.Enable();
         });
         //#endregion

         /*---------------------------------------------PIANO DISSOLVENZA-----------------------------------------------------*/
         //#region
         //CREAZIONE PIANO DISSOLVENZA
         VarObject.PianoDissMat = MicEnginereturn.Materials.E3_ShaderOverlay({
            Color: 0x000000,
            Softness: 0.5,
         });
         VarObject.PianoDissMat.SetFade(VarObject.PianoDissFade);
         VarObject.PianoDissMesh = MicEnginereturn.Objects.E3_UniversalMesh({
            //PARAMETRI OBBLIGATORI:
            Geom: MicEnginereturn.Geometries.E3_GeoPlane(2, 2, 1, 1),
            Material: VarObject.PianoDissMat,
            //PARAMETRI OPZIONALI
            Type: "Mesh",
            Name: "PianoDissMesh",
            Position: [0, 0, 0],
            Rotation: [0, 0, 0],
            Scale: [0, 0, 0],
            Visible: true,
            Shadows: false,
            Group: MicEnginereturn.CameraGroup.children[0].children[0]
         });
         //#endregion

         /*---------------------------------------------------STORIA-----------------------------------------------------------*/
         //#region
         //TROVA LE LUCI DA ACCENDERE NELLA STAZIONE WORMHOLE
         let LucePortale;
         let LuceAccensione;

         //MATERIALE PERSONALIZZATO PIANETA MARTE
         MicEnginereturn.Materials.Export[0].name = "ShaderLens";

         if (GlobalVar.SoleTotal < 40) GlobalVar.StepTimeMars = 1;
         if (GlobalVar.SoleTotal >= 40 && GlobalVar.SoleTotal < 70) GlobalVar.StepTimeMars = 2;
         if (GlobalVar.SoleTotal >= 70 && GlobalVar.SoleTotal < 100) GlobalVar.StepTimeMars = 3;
         if (GlobalVar.SoleTotal >= 100) GlobalVar.StepTimeMars = 4;
         MicEnginereturn.Materials.Export[0].UpdateMap2(GlobalVar.StepTimeMars - 1);

         //CAPITOLO 0
         if (GlobalVar.Capitolo == 0) {
            //ATTIVAZIONE MISSIONE 1 - SE SI HA ALMENO UN MODULO NAVE E UN MODULO CONTAINER
            if (GlobalVar.Missione == 0 && GlobalVar.ShipModules > 0 && GlobalVar.ContainerModules > 0) GlobalVar.Missione = 1;
            //ATTIVAZIONE MISSIONE 2 - SE SI HA UNA MISSIONE ATTIVA
            if (GlobalVar.Missione == 1 && GlobalVar.MissionCurrent == 1) GlobalVar.Missione = 2;
            //ATTIVAZIONE CAPITOLO 1
            if (GlobalVar.Missione == 2 && SaveSystem.getItem(`FlagMissione`) == 1) {
               GlobalVar.Capitolo = 1;
               GlobalVar.Missione = 0;
               SaveSystem.setItem(`FlagMissione`, 0);
            };
         };
         //CAPITOLO 1
         if (GlobalVar.Capitolo == 1) {
            //TUTTE LE MISSIONI FINO ALLA 7
            if (GlobalVar.Missione < 8) {
               if (SaveSystem.getItem(`FlagMissione`) == 1) {
                  GlobalVar.Missione++;
                  SaveSystem.setItem(`FlagMissione`, 0);
               }
            }
            //MISSIONE 8
            else if (SaveSystem.getItem(`FlagMissione`) == 1) {
               GlobalVar.Capitolo = 2;
               GlobalVar.Missione = 0;
               SaveSystem.setItem(`FlagMissione`, 0);
            };
         };
         //CAPITOLO 2
         if (GlobalVar.Capitolo == 2) {
            if (SaveSystem.getItem('FlagMissione') == 1) {
               GlobalVar.Missione++;
               SaveSystem.setItem(`FlagMissione`, 0);
            };
            if (GlobalVar.Missione == 3 || GlobalVar.Missione == 4) {  //VISUALIZZA LA BARRA DI RIEMPIMENTO
               GameHUDCanvas.showBar(7, true);
            };
            if (GlobalVar.Missione == 4) {
               VarObject.TimeBar = VarObject.SecBar2;                                             //ABILITA IL TIMER PER LA MISSIONE 5
            };
         };
         //CAPITOLO 3
         if (GlobalVar.Capitolo == 3) {
            if (GlobalVar.Missione < 3 && SaveSystem.getItem('FlagMissione') == 1) {
               GlobalVar.Missione++;
               SaveSystem.setItem(`FlagMissione`, 0);
            }
            //MISSIONE 3
            else if (SaveSystem.getItem(`FlagMissione`) == 1) {
               GlobalVar.Capitolo = 4;
               GlobalVar.Missione = 0;
               SaveSystem.setItem(`FlagMissione`, 0);
            };
            if (GlobalVar.Missione == 1) {
               GameHUDCanvas.showBar(7, true);                //VISUALIZZA LA BARRA DI RIEMPIMENTO
            };
         };
         //CAPITOLO 4
         if (GlobalVar.Capitolo == 4) {
            if (GlobalVar.Missione < 10 && SaveSystem.getItem('FlagMissione') == 1) {
               GlobalVar.Missione++;
               SaveSystem.setItem(`FlagMissione`, 0);
            };
            if (GlobalVar.Missione == 10 && SaveSystem.getItem('FlagMissione') == 1) {
               GlobalVar.Capitolo = 5;
               GlobalVar.Missione = 0;
               SaveSystem.setItem(`FlagMissione`, 0);
            };
            //SE LA NAVE È ATTREZZATA PER TRASPORTARE 8 PASSEGGERI OLTRE AI MEMBRI DI EQUIPAGGIO PASSA ALLA MISSIONE 2
            if (GlobalVar.Missione == 1 && VarObject.TravelCrew >= VarObject.Crew + 8 && VarObject.LongTravelCrew >= VarObject.Crew + 8) GlobalVar.Missione = 2;
         };
         //CAPITOLO 5
         if (GlobalVar.Capitolo == 5) {
            if (GlobalVar.Missione == 0 && GlobalVar.ExtractionModules > 0 && GlobalVar.RadarModules > 0 && VarObject.LongTravelCrew >= VarObject.Crew) {
               GlobalVar.Missione = 1;
            };
            VarObject.MeshImpulsoRadar = MicEnginereturn.User.Object.children[1].getObjectByName("ImpulsoRadar");    //TROVA LA MESH DELL'IMPULSO RADAR
            //POSIZIONAMENTO DELLA NUVOLA
            MicEnginereturn.GenericGroup.children[0].position.set(GlobalVar.PosXNuvola, 0, GlobalVar.PosZNuvola);

            //ATTRAZIONE VERSO LA NUVOLA
            VarObject.DummyLookNuvola = MicEnginereturn.Objects.E3_Object3D();

            VarObject.invertQuat = MicEnginereturn.Objects.E3_Quaternion().setFromAxisAngle(
               MicEnginereturn.Objects.E3_Vector3(0, 1, 0),
               Math.PI
            );
            if (GlobalVar.Missione == 2) {
               GameHUDCanvas.showBar(7, true);                //VISUALIZZA LA BARRA DI RIEMPIMENTO
               if (SaveSystem.getItem('FlagMissione') == 1) {
                  GlobalVar.Missione++;
                  SaveSystem.setItem(`FlagMissione`, 0);
               };
            };
         };

         //FUNZIONE CHE MOSTRA L'NPC DELLA STAZIONE WORMHOLE PER L'ACCENSIONE DEL PORTALE
         function G2_NPCTest() {
            MicEnginereturn.VarObject.E3_DisplayNPC({
               //GENERICI
               Font: 14,                                                                    //FONT IN PIXEL
               PosX: GlobalVar.TutorialPosX,                                                //POSIZIONE X
               PosY: 0,                                                                     //POSIZIONE Y
               zIndex: "20",
               //IMMAGINE
               LargImage: 150,                                                              //LARGHEZZA IMMAGINE
               AtImage: 100,                                                                //ALTEZZA IMMAGINE
               Image: NPC.Radio.Immagini[7][GlobalVar.GenderNPC],                           //IMMAGINE STAZIONE WORMHOLE
               //TESTO
               PositionText: "Down",                               //POSIZIONE DEL TESTO RELATIVA ALL'IMMAGINE "Down" "Right "Left
               LargText: 150,
               AltText: 100,                                                                //ALTEZZA TESTO
               ColorText: Colors.NPCColor,                                                  //COLORE SFONDO TESTO
               ColorFontText: "#ffffffff",                                                //COLORE FONT TESTO
               Text: NPC.Test.Testi[VarObject.StepNPCTest - 1][GlobalVar.Language + 1],     //TESTO
               //TESTO CONTINUA
               Text1: `${NPC.Click[GlobalVar.Language]}`,                                   //TESTO CONTINUA
               Time: NPC.Test.Testi[VarObject.StepNPCTest - 1][0]                           //TEMPO
            },
               function () {                                    //FUNZIONE
                  if (VarObject.StepNPCTest == 6) {
                     GlobalVar.Capitolo = 3;
                     GlobalVar.Missione = 0;
                  };
               });
         };

         //ONCE FUNCTION PER GLI EVENTI SCRIPTATI DELL'ACCENSIONE DEL PORTALE
         const SpeechStationNPC = new MicEnginereturn.VarObject.OnceFunction(function () {
            MicEnginereturn.VarObject.E3_DisplayNPC({
               //GENERICI
               Font: 14,                                                                    //FONT IN PIXEL
               PosX: GlobalVar.TutorialPosX,                                                //POSIZIONE X
               PosY: 0,                                                                     //POSIZIONE Y
               zIndex: "20",
               //IMMAGINE
               LargImage: 150,                                                              //LARGHEZZA IMMAGINE
               AtImage: 100,                                                                //ALTEZZA IMMAGINE
               Image: NPC.Radio.Immagini[7][GlobalVar.GenderNPC],                           //IMMAGINE STAZIONE WORMHOLE
               //TESTO
               PositionText: "Down",                               //POSIZIONE DEL TESTO RELATIVA ALL'IMMAGINE "Down" "Right "Left
               LargText: 150,
               AltText: 150,                                                                //ALTEZZA TESTO
               ColorText: Colors.NPCColor,                                                  //COLORE SFONDO TESTO
               ColorFontText: "#ffffffff",                                                //COLORE FONT TESTO
               Text: NPC.Speech.Testi[VarObject.StepNPCSpeech - 1][GlobalVar.Language + 1],     //TESTO
               //TESTO CONTINUA
               Text1: `${NPC.Click[GlobalVar.Language]}`,                                   //TESTO CONTINUA
               Time: NPC.Speech.Testi[VarObject.StepNPCSpeech - 1][0]                           //TEMPO
            },
               function () {                                    //FUNZIONE
                  if (VarObject.StepNPCSpeech < 5) VarObject.StepNPCSpeech++;

                  if (VarObject.StepNPCSpeech == 5) {
                     //RESETTA LA POSIZIONE DELLA CAMERA E ATTACCALA ALLA NAVE
                     VarObject.Camera.position.z = VarObject.PosZ;
                     MicEnginereturn.CameraGroup.children[0].children[0].add(VarObject.Camera);
                     if (MicEnginereturn.VarPlanetSystem.References[3].DayRot.children[0].material.name == "ShaderLens") {
                        MicEnginereturn.Materials.Export[0].UpdateMap2(GlobalVar.StepTimeMars - 1);
                     };

                  };
                  if (VarObject.StepNPCSpeech < 5) {
                     console.log(4 - VarObject.StepNPCSpeech);
                     MicEnginereturn.Materials.Export[0].UpdateMap2(4 - VarObject.StepNPCSpeech);
                  };
               });
         });

         //ONCE FUNCTION PER MOSTRARE L'NPC AL PRIMO RISVEGLIO
         const NPCRisveglio = new MicEnginereturn.VarObject.OnceFunctionBool(function () {
            MicEnginereturn.VarObject.E3_DisplayNPC({
               //GENERICI
               Font: 14,                                                                    //FONT IN PIXEL
               PosX: GlobalVar.TutorialPosX,                                                //POSIZIONE X
               PosY: 0,                                                                     //POSIZIONE Y
               zIndex: "20",
               //IMMAGINE
               LargImage: 150,                                                              //LARGHEZZA IMMAGINE
               AtImage: 100,                                                                //ALTEZZA IMMAGINE
               Image: NPC.Radio.Immagini[7][GlobalVar.GenderNPC],                           //IMMAGINE STAZIONE WORMHOLE
               //TESTO
               PositionText: "Down",                               //POSIZIONE DEL TESTO RELATIVA ALL'IMMAGINE "Down" "Right "Left
               LargText: 150,
               AltText: 100,                                                                //ALTEZZA TESTO
               ColorText: Colors.NPCColor,                                                  //COLORE SFONDO TESTO
               ColorFontText: "#ffffffff",                                                //COLORE FONT TESTO
               Text: NPC.Risveglio.Testi[0][GlobalVar.Language + 1],     //TESTO
               //TESTO CONTINUA
               Text1: `${NPC.Click[GlobalVar.Language]}`,                                   //TESTO CONTINUA
               Time: NPC.Risveglio.Testi[0][0]                           //TEMPO
            },
               function () { });
         });

         VarObject.Camera = MicEnginereturn.CameraGroup.children[0].children[0].children[0];
         //#endregion

         /*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
         /*----------------------------------------------------BLOCCHI LOOP 100MS----------------------------------------------------------------*/

         /*-------------------------CAMBIO DIREZIONE CASUALE ALL'AUMENTARE DELLA VELOCITÀ (LOOP)(GAME)------------------------*/
         function _100_RandomChangeDirection() {
            if (VarObject.VelEffettiva / Economy.SpeedUpgrade[GlobalVar.UpgradeMotor] > VarObject.MinSpeedDir) {
               VarObject.NoiseDirX = (Math.random() - 0.5) * VarObject.DirIntensity * (VarObject.VelEffettiva / Economy.SpeedUpgrade[GlobalVar.UpgradeMotor]);
               VarObject.NoiseDirY = (Math.random() - 0.5) * VarObject.DirIntensity * (VarObject.VelEffettiva / Economy.SpeedUpgrade[GlobalVar.UpgradeMotor]);
               VarObject.NoiseDirZ = (Math.random() - 0.5) * VarObject.DirIntensity * (VarObject.VelEffettiva / Economy.SpeedUpgrade[GlobalVar.UpgradeMotor]);
            }
            else {
               VarObject.NoiseDirX = 0;
               VarObject.NoiseDirY = 0;
               VarObject.NoiseDirZ = 0;
            };
         };
         /*----------------------------AGGIORNAMENTO PARAMETRI NAVE SPAZIALE (LOOP)(GAME)-------------------------------------*/
         function _100_UpdateShipParameters() {
            /*    litri         litri*10/secondo            0-1 DELLA VELOCITÀ MASSIMA*/
            /*               alla velocità massima                               3000000000*/
            if (typeof Economy.FuelImp === "number" && !isNaN(Economy.FuelImp) &&
               typeof VarObject.VelEffettiva === "number" && !isNaN(VarObject.VelEffettiva) &&
               typeof Economy.SpeedUpgrade[2] === "number" && !isNaN(Economy.SpeedUpgrade[2]) && Economy.SpeedUpgrade[2] !== 0 &&
               typeof GlobalVar.Fuel === "number" && !isNaN(GlobalVar.Fuel))
               GlobalVar.Fuel -= Economy.FuelImp * (VarObject.VelEffettiva / Economy.SpeedUpgrade[2]);

            //SE SIAMO FUORI DA OGNI ORBITA AGGIORNA I PARAMETRI DI ARIA, ACQUA E CIBO
            if (MicEnginereturn.VarPlanetSystem.PlanetOrbit == 0 && VarObject.BlockMov == false) {
               //SE NON SIAMO ALL'INTERNO DELLA COMETA/NUVOLA
               if (GlobalVar.Capitolo != 5 || GlobalVar.Missione != 2 || VarObject.DistNuvola >= VarObject.MinDistNuvola) {
                  VarObject.Air -= Number(Economy.AirImp * (VarObject.Crew + GlobalVar.Scient));
                  VarObject.Water -= Number(Economy.WaterImp * (VarObject.Crew + GlobalVar.Scient));
                  VarObject.Food -= Number(Economy.FoodImp * (VarObject.Crew + GlobalVar.Scient));
               };

            };

            //CALCOLO DELL'AUTONOMIA DEL CARBURANTE
            VarObject.FuelAutonomia = Economy.SpeedUpgrade[2] * (GlobalVar.Fuel / Economy.FuelImp * 10) * 0.00001;
         };
         /*-----------------------------------------SPIE E BARRE DI GIOCO (GAME)----------------------------------------------*/
         function _100_SpieBarre() {
            //NB: MODIFICATO PER ESEGUIRE IL CAMBIO COLORE UNA VOLTA SOLO AL VERIFICARSI DELLA CONDIZIONE

            //SPIA BRAKE - FUORI DA OGNI ORBITA
            if (MicEnginereturn.VarPlanetSystem.PlanetOrbit == 0) {
               if (MicEnginereturn.VarPlanetSystem.MinTimePlanet < VarObject.MinTimePlanet &&
                  MicEnginereturn.VarPlanetSystem.MinTimePlanet < VarObject.BrakeTimeMax) {
                  VarObject.SpiaBrake = true;
               }
               else VarObject.SpiaBrake = false;
            };
            //SPIA BRAKE - ORBITA DI UN PIANETA
            if (MicEnginereturn.VarPlanetSystem.PlanetOrbit > 0 && MicEnginereturn.VarPlanetSystem.MoonOrbit == 0) {
               if (MicEnginereturn.VarPlanetSystem.MinTimePlanet < VarObject.MinTimePlanet &&
                  MicEnginereturn.VarPlanetSystem.MinTimePlanet < VarObject.BrakeTimeMax) {
                  VarObject.SpiaBrake = true;
               }
               else if (MicEnginereturn.VarPlanetSystem.MinTimeMoon < VarObject.MinTimeMoon &&
                  MicEnginereturn.VarPlanetSystem.MinTimeMoon < VarObject.BrakeTimeMax) {
                  VarObject.SpiaBrake = true;
               }
               else VarObject.SpiaBrake = false;
            };
            //SPIA BRAKE - ORBITA DI UNA LUNA
            if (MicEnginereturn.VarPlanetSystem.PlanetOrbit > 0 && MicEnginereturn.VarPlanetSystem.MoonOrbit > 0) {
               if (MicEnginereturn.VarPlanetSystem.MinTimePlanet < VarObject.MinTimePlanet &&
                  MicEnginereturn.VarPlanetSystem.MinTimePlanet < VarObject.BrakeTimeMax) {
                  VarObject.SpiaBrake = true;
               }
               else if (MicEnginereturn.VarPlanetSystem.MinTimeMoon < VarObject.MinTimeMoon &&
                  MicEnginereturn.VarPlanetSystem.MinTimeMoon < VarObject.BrakeTimeMax) {
                  VarObject.SpiaBrake = true;
               }
               else if (MicEnginereturn.VarPlanetSystem.MinTimeSubMoon < VarObject.MinTimeSubMoon &&
                  MicEnginereturn.VarPlanetSystem.MinTimeSubMoon < VarObject.BrakeTimeMax) {
                  VarObject.SpiaBrake = true;
               }
               else VarObject.SpiaBrake = false;
            };

            if (VarObject.SpiaBrake == true && GlobalVar.TutorialFlag > 10) GameHUDCanvas.setButtonColor(4, Colors.LightColorAlarm);
            else if (GlobalVar.TutorialFlag > 10) GameHUDCanvas.setButtonColor(4, Colors.ActivePulsTrans);

            /*-------------------SPIA COLLISION-------------------*/
            if (MicEnginereturn.VarPlanetSystem.NearCollision == true && GlobalVar.TutorialFlag > 10) {
               GameHUDCanvas.setButtonColor(3, Colors.LightColorAlarm);
            }
            else if (GlobalVar.TutorialFlag > 10) GameHUDCanvas.setButtonColor(3, Colors.ActivePulsTrans);

            /*----------------BARRA VELOCITÀ NAVE-------------------*/
            //AGGIORNA L'ALTEZZA DELLA BARRA
            GameHUDCanvas.setBarValue(4, VarObject.VelGlobalPerc / 100);
            //AGGIORNA IL TESTO DELLA BARRA
            GameHUDCanvas.setBarText(4, MicEnginereturn.Math.DisplaySpeed(VarObject.VelEffettiva * MicEngineParam.DynamicCockpit.ScalaPos));

            /*----------------INDICATORE DEL LIMITE SULLA BARRA VELOCITÀ----------*/
            VarObject.LimitBar.style.right = `${(MicEnginereturn.PhysicsEngine.VarObject.PercLimit / 100) * 16 + 2}%`;

            /*-----------------BARRA SURRISCALDAMENTO-----------------*/
            if (MicEnginereturn.VarModularShip.ColorStep > 0) {
               GameHUDCanvas.setBarValue(6, MicEnginereturn.VarModularShip.ColorStep / MicEngineParam.ModularShip.FrictionTime);
            };
            FrictionBar.Update(MicEnginereturn.VarModularShip.ColorStep);

            /*-----------------BARRA DISTANZA COLLISIONE-----------------*/
            if (MicEnginereturn.VarPlanetSystem.LimitCollision < 1) {
               GameHUDCanvas.setBarValue(8, 1 - MicEnginereturn.VarPlanetSystem.LimitCollision);

               if (MicEnginereturn.VarPlanetSystem.LimitCollision > 0.3) GameHUDCanvas.setBarColor(8, Colors.ActivePulsTrans, Colors.SelectedPuls);
               else GameHUDCanvas.setBarColor(8, Colors.ActivePulsTrans, Colors.RedBar);
            };
            DistanceBar.Update(MicEnginereturn.VarPlanetSystem.LimitCollision);

            /*---------------------BARRE POSIZIONE ORBITE--------------------*/
            if (MicEnginereturn.VarPlanetSystem.SubMoonOrbit > 0) {
               GameHUDCanvas.setBarValue(10, MicEnginereturn.VarPlanetSystem.SubMoonOrbitPosition);
               if (MicEnginereturn.VarPlanetSystem.NearSubMoonType > 0) VarObject.OrbitType = 4;
            }
            else if (MicEnginereturn.VarPlanetSystem.MoonOrbit > 0) {
               GameHUDCanvas.setBarValue(10, MicEnginereturn.VarPlanetSystem.MoonOrbitPosition);
               if (MicEnginereturn.VarPlanetSystem.NearMoonType == 0) VarObject.OrbitType = 2;
               else VarObject.OrbitType = 3;

            }
            else if (MicEnginereturn.VarPlanetSystem.PlanetOrbit > 0) {
               GameHUDCanvas.setBarValue(10, MicEnginereturn.VarPlanetSystem.PlanetOrbitPosition);
               VarObject.OrbitType = 1;
            }
            else VarObject.OrbitType = 0;

            // OnceOrbitType.Update(VarObject.OrbitType);

            //SPAZIO INTERPLANETARIO
            if (VarObject.OrbitType == 0) {
               GameHUDCanvas.showBar(10, false);
               GameHUDCanvas.showImage(18, false);
               GameHUDCanvas.showImage(19, false);
            };
            //ORBITA PIANETA
            if (VarObject.OrbitType == 1) {
               GameHUDCanvas.showBar(10, true);
               GameHUDCanvas.showImage(18, true);
               GameHUDCanvas.showImage(19, true);
               GameHUDCanvas.setImageUrl(18, Sprite.PositionOrbit.Sun);
               GameHUDCanvas.setImageUrl(19, Sprite.PositionOrbit.Planet);
            };
            //ORBITA LUNA
            if (VarObject.OrbitType == 2 || VarObject.OrbitType == 3) {
               GameHUDCanvas.showBar(10, true);
               GameHUDCanvas.showImage(18, true);
               GameHUDCanvas.showImage(19, true);
               GameHUDCanvas.setImageUrl(18, Sprite.PositionOrbit.Planet);
               //LUNA PIANETA
               if (MicEnginereturn.VarPlanetSystem.NearMoonType == 0) GameHUDCanvas.setImageUrl(19, Sprite.PositionOrbit.Moon);
               //LUNA STAZIONE SPAZIALE
               else GameHUDCanvas.setImageUrl(19, GameParam.DynamicCockpit.TypeSprite[MicEnginereturn.VarPlanetSystem.NearMoonType - 1]);
            };
            //ORBITA SUB-LUNA
            if (VarObject.OrbitType == 4) {
               GameHUDCanvas.showBar(10, true);
               GameHUDCanvas.showImage(18, true);
               GameHUDCanvas.showImage(19, true);
               GameHUDCanvas.setImageUrl(18, Sprite.PositionOrbit.Moon);
               GameHUDCanvas.setImageUrl(19, GameParam.DynamicCockpit.TypeSprite[MicEnginereturn.VarPlanetSystem.NearSubMoonType - 1]);
            };
         };
         //----------------------------------CHIAMATA E RISPOSTA ALLA RADIO (ONCE) (GAME)-------------------------------------//
         function _100_CallRadio() {
            if (VarObject.CallRadio == true) {
               //LUNA O SUB-LUNA
               let SubMoonOrbitVar = 0;
               if (MicEnginereturn.VarPlanetSystem.SubMoonOrbit == 0) SubMoonOrbitVar = Oggetti.PlanetarySystem.Modular[MicEnginereturn.VarPlanetSystem
                  .PlanetOrbit - 1].Modular[MicEnginereturn.VarPlanetSystem.MoonOrbit - 1].Tractor.Name;
               if (MicEnginereturn.VarPlanetSystem.SubMoonOrbit > 0) SubMoonOrbitVar = Oggetti.PlanetarySystem.Modular[MicEnginereturn.VarPlanetSystem
                  .PlanetOrbit - 1].Modular[MicEnginereturn.VarPlanetSystem.MoonOrbit - 1].Modular[MicEnginereturn.VarPlanetSystem.SubMoonOrbit - 1]
                  .Tractor.Name;

               MicEnginereturn.VarObject.E3_DisplayNPC({
                  //GENERICI
                  Font: 14,                                             //FONT IN PIXEL
                  PosX: GlobalVar.TutorialPosX,                                            //POSIZIONE X
                  PosY: 0,                                              //POSIZIONE Y
                  zIndex: "20",
                  //IMMAGINE
                  LargImage: 150,                                                                                 //LARGHEZZA IMMAGINE
                  AtImage: 100,                                                                                   //ALTEZZA IMMAGINE
                  Image: NPC.Radio.Immagini[MicEnginereturn.VarPlanetSystem.StationType - 1][GlobalVar.GenderNPC],        //IMMAGINE
                  //TESTO
                  PositionText: "Down",                               //POSIZIONE DEL TESTO RELATIVA ALL'IMMAGINE "Down" "Right "Left
                  LargText: 150,
                  AltText: 100,                                                                                   //ALTEZZA TESTO
                  ColorText: Colors.NPCColor,                             //COLORE SFONDO TESTO
                  ColorFontText: "#ffffffff",                         //COLORE FONT TESTO
                  Text: `${NPC.Radio.Testi[GlobalVar.Language + 1]}${SubMoonOrbitVar}`,                                     //TESTO
                  //TESTO CONTINUA
                  Text1: `${NPC.Click[GlobalVar.Language]}`,                                                                //TESTO CONTINUA
                  Time: NPC.Radio.Testi[0]                                                                        //TEMPO
               },
                  function () { });                                                                                  //FUNZIONE

               //CHIUDI L'NPC DOPO IL TEMPO MASSIMO
               setTimeout(() => {
                  VarObject.AnswerRadio = true;
               }, NPC.Radio.Testi[0]);

               VarObject.CallRadio = false;
            };

            //-----------SE IL RAGGIO TRAENTE È IMPOSTATO CON LA RADIO---------------------//
            if (MicEngineParam.PlanetarySystem.TractorBeam.Radio == true) {
               //ABILITALO CON LA SUA RISPOSTA
               if (VarObject.AnswerRadio == true) {
                  MicEnginereturn.VarPlanetSystem.TractorActive = 1;
                  VarObject.AnswerRadio = false;
               };
            };
         };
         //-----------------------------------------------HYPERLOOP (ONCE) (GAME)--------------------------------------------//
         function _100_DustCloud() {
            if (VarObject.VelEffettiva > MicEngineParam.Hyperloop[0].MinSpeed && VarObject.DustVisible == false) {
               MicEnginereturn.Hyperloop[0].Lines.visible = true;
               VarObject.DustVisible = true;
            }
            else if (VarObject.VelEffettiva < MicEngineParam.Hyperloop[0].MinSpeed && VarObject.DustVisible == true) {
               MicEnginereturn.Hyperloop[0].Lines.visible = false;
               VarObject.DustVisible = false;
            };

            if (MicEnginereturn.VarPlanetSystem.LimitCollision > 0 && MicEnginereturn.VarPlanetSystem.LimitCollision < 0.2) {
               if (VarObject.VelEffettiva > 5000) {
                  if (VarObject.SparksVisible == false) {
                     MicEnginereturn.Hyperloop[1].Lines.visible = true;
                     VarObject.SparksVisible = true;
                  };
               }
               else {
                  if (VarObject.SparksVisible == true) {
                     MicEnginereturn.Hyperloop[1].Lines.visible = false;
                     VarObject.SparksVisible = false;
                  };
               };
            }
            else {
               if (VarObject.SparksVisible == true) {
                  MicEnginereturn.Hyperloop[1].Lines.visible = false;
                  VarObject.SparksVisible = false;
               };
            };
         };
         /*-----------------------------------------------------MORTE---------------------------------------------------------*/
         function _100_Death() {
            //SURRISCALDAMENTO NAVE
            if (MicEnginereturn.VarModularShip.ColorStep == MicEngineParam.ModularShip.FrictionTime) G1_ExplosionDeath();
            //COLLISIONE CON CORPO CELESTE
            if (MicEnginereturn.VarPlanetSystem.Collision == true) G1_ExplosionDeath();
            //TERMINE CARBURANTE, ARIA, ACQUA O CIBO
            if (GlobalVar.Fuel <= 0 || VarObject.Air <= 0 || VarObject.Water <= 0 || VarObject.Food <= 0) G1_DerivaDeath();
            //G1_ExplosionDeath() IN _100_Story IN CASO DI COLLISIONE CON LA COMETA (CAPITOLO 5 MISSIONE 2)

            //COUNTDOWN PER LA MORTE
            if (VarObject.Death == true) {
               VarObject.CntDeath++;
               if (VarObject.CntDeath > VarObject.TimeDeath) G0_ShowLoadingAndReload("Home");     //SaveSystem.update();
            };
         };
         /*---------------------------------------ROTAZIONE NAVE ASSE Z ALTE VELOCITÀ-----------------------------------------*/
         function _100_RotatioSpeedZ() {
            if (MicEnginereturn.VarPlanetSystem.PlanetOrbit == 0) {
               if (VarObject.VelEffettiva > 30000000) VarObject.RotateZ = MicEnginereturn.Math.CoeffMap(VarObject.VelEffettiva, 30000000, 3000000000, 0.0001, 0.005);
               else VarObject.RotateZ = 0;
            }
            else VarObject.RotateZ = 0;
         };
         /*-----------------------------------------------------SUONI---------------------------------------------------------*/
         function _100_Sounds() {
            /*AGGIORNAMENTO VARIABILI INTERPLANETARYSOUND SPACE E PLANETORBITSOUND E INTROSOUND*/
            if (MicEnginereturn.VarPlanetSystem.PlanetOrbit > 0) {
               if (VarObject.BlockMov == false) VarObject.IntroSound = true;
               VarObject.HyperSound = false;
               VarObject.TimeOrbitMusic++;
               if (VarObject.TimeOrbitMusic > 80) VarObject.OrbitMusic = true;


               //ORBITA DI UNA LUNA
               if (MicEnginereturn.VarPlanetSystem.MoonOrbit > 0) {
                  //ORBITA DI UNA SUBLUNA
                  if (MicEnginereturn.VarPlanetSystem.SubMoonOrbit > 0) {
                     VarObject.VarSound = 3;
                  }
                  //ORBITA DI UNA LUNA
                  else {
                     //VarObject.MoonOrbitSound = true;
                     //LUNA STAZIONE SPAZIALE
                     if (MicEnginereturn.VarPlanetSystem.StationOrbit == true) VarObject.VarSound = 3;
                     //LUNA PIANETA
                     else VarObject.VarSound = 2;
                  };
               }
               //ORBITA DI UN PIANETA
               else {
                  VarObject.VarSound = 1;
               };
            }
            //SPAZIO INTERPLANETARIO
            else {
               VarObject.VarSound = 0;
               VarObject.IntroSound = false;
               if (VarObject.VelEffettiva > MicEngineParam.Hyperloop[0].MinSpeed) VarObject.HyperSound = true;
               VarObject.OrbitMusic = false;
               VarObject.TimeOrbitMusic = 0;
            };

            //AGGIORNAMENTO VARIABILE RELEASEDSOUND
            if (MicEnginereturn.VarPlanetSystem.Released == true) VarObject.RealesedSound = false;
            if (MicEnginereturn.VarPlanetSystem.Released == false) VarObject.RealesedSound = true;

            ReleasedSound.Update(VarObject.RealesedSound);
            OrbitSounds.Update(VarObject.VarSound);

            //SUONO MOTORE
            EngineOnceSound.Update(VarObject.VelGlobalPerc);
            EngineSound.SetModulation(VarObject.VelGlobalPerc / 50);

            //MUSICHE
            IntroSound.Update(VarObject.IntroSound);
            HyperOnceSound.Update(VarObject.HyperSound);
            OrbitOnceMusic.Update(VarObject.OrbitMusic);
         };
         /*--------------------------------------------------MISSION TEXT------------------------------------------------------*/
         function _100_MissionText() {
            if ((GlobalVar.Capitolo == 0 && GlobalVar.Missione == 0 && GlobalVar.TutorialFlag >= 11) || (GlobalVar.Capitolo > 0 || GlobalVar.Missione > 0)) {
               if (VarObject.CapitoloMem != GlobalVar.Capitolo || VarObject.MissioneMem != GlobalVar.Missione) {
                  G1_ShowMissionText();
                  VarObject.BlinkMissions = true;
                  SaveSystem.setItem(`CapitoloMem`, GlobalVar.Capitolo);
                  SaveSystem.setItem(`MissioneMem`, GlobalVar.Missione);
                  VarObject.CapitoloMem = GlobalVar.Capitolo;
                  VarObject.MissioneMem = GlobalVar.Missione;
               };
            };

         };
         /*-----------------------------------------------------DERIVA-----------------------------------------------------*/
         async function _100_Deriva() {
            if (VarObject.Deriva == true && VarObject.PianoDissFade < 0.1 && MicEnginereturn.VarPlanetSystem.PlanetOrbit == 0) {
               //CREA UN ARRAY CON LE DISTANZE DALLA TERRA, GIOVE E SATURNO
               const DistanzeHangar = [MicEnginereturn.VarPlanetSystem.IndDist[3], MicEnginereturn.VarPlanetSystem.IndDist[5], MicEnginereturn.VarPlanetSystem.IndDist[6]];
               //TROVA IL PIANETA PIÙ VICINO CON UN HANGAR
               const minValue = Math.min(...DistanzeHangar);
               const minIndex = DistanzeHangar.indexOf(minValue);
               //TERRA
               if (minIndex == 0) await MicEnginereturn.E1_RapidTranslate({
                  PlanetOrbit: 3,
                  MoonOrbit: 0,
                  SubMoonOrbit: 0,
                  PosX: 10000000,
                  PosY: 2000000,
                  PosZ: 0,
                  RotX: 0,
                  RotY: Math.PI / 2,
                  RotZ: 0
               });
               //GIOVE
               if (minIndex == 1) await MicEnginereturn.E1_RapidTranslate({
                  PlanetOrbit: 5,
                  MoonOrbit: 0,
                  SubMoonOrbit: 0,
                  PosX: 80000000,
                  PosY: 16000000,
                  PosZ: 0,
                  RotX: 0,
                  RotY: Math.PI / 2,
                  RotZ: 0
               });
               //SATURNO
               if (minIndex == 2) await MicEnginereturn.E1_RapidTranslate({
                  PlanetOrbit: 6,
                  MoonOrbit: 0,
                  SubMoonOrbit: 0,
                  PosX: 50000000,
                  PosY: 10000000,
                  PosZ: 0,
                  RotX: 0,
                  RotY: Math.PI / 2,
                  RotZ: 0
               });
               VarObject.Deriva = false;
               VarObject.PianoDissFade = 1;
               VarObject.PianoDissMat.SetFade(VarObject.PianoDissFade);

               //RIPRISTINA UN MINIMO DEL VALORE ANDATO A ZERO
               if (GlobalVar.Fuel < 100) GlobalVar.Fuel = 100;
               if (VarObject.Air < 3) VarObject.Air = 3;
               if (VarObject.Water < 10) VarObject.Water = 10;
               if (VarObject.Food < 3) VarObject.Food = 3;

               //TOGLI I GETTONI E I SOLDI
               GlobalVar.Coin = 0;
               GlobalVar.Money *= 0.75;

               MicEnginereturn.VarObject.E3_DisplayNPC({
                  //GENERICI
                  Font: 14,                                             //FONT IN PIXEL
                  PosX: GlobalVar.TutorialPosX,                                            //POSIZIONE X
                  PosY: 0,                                              //POSIZIONE Y
                  zIndex: "20",
                  //IMMAGINE
                  LargImage: 150,                                                                                 //LARGHEZZA IMMAGINE
                  AtImage: 100,                                                                                   //ALTEZZA IMMAGINE
                  Image: NPC.Recover.Immagini[GlobalVar.GenderNPC],        //IMMAGINE
                  //TESTO
                  PositionText: "Down",                               //POSIZIONE DEL TESTO RELATIVA ALL'IMMAGINE "Down" "Right "Left
                  LargText: 200,
                  AltText: 150,                                                                                   //ALTEZZA TESTO
                  ColorText: Colors.NPCColor,                             //COLORE SFONDO TESTO
                  ColorFontText: "#ffffffff",                         //COLORE FONT TESTO
                  Text: `${NPC.Recover.Testi[GlobalVar.Language + 1]}`,                                     //TESTO
                  //TESTO CONTINUA
                  Text1: `${NPC.Click[GlobalVar.Language]}`,                                                                //TESTO CONTINUA
                  Time: NPC.Recover.Testi[0]                                                                        //TEMPO
               },
                  function () { });                                                                                  //FUNZIONE
            };
         };
         /*--------------------------------------------------------STORIA-----------------------------------------------------*/
         async function _100_Story() {
            if (GlobalVar.PlanetOrbit == 4) {
               //ASSOCIAZIONE DEL MATERIALE SHADER CON MARTE
               if (GlobalVar.Capitolo >= 2 && MicEnginereturn.VarPlanetSystem.References[3].DayRot.children[0].material.name != "ShaderLens") {
                  MicEnginereturn.VarPlanetSystem.References[3].DayRot.children[0].material = MicEnginereturn.Materials.Export[0];
               };

               //AGGIORNAMENTO DELLA LUCE DEL MATERIALE DI MARTE
               if (GlobalVar.Capitolo == 2) {
                  if (MicEnginereturn.VarPlanetSystem.References[3].DayRot.children[0].material.name == "ShaderLens")
                     MicEnginereturn.Materials.Export[0].UpdateAmbientlLight(MicEnginereturn.Lights.AmbientLight);
                  if (GlobalVar.Missione == 7 && VarObject.StepNPCTest >= 3) {
                     MicEnginereturn.Materials.Export[0].UpdateLensPosition(MicEnginereturn.VarPlanetSystem.References[3][4].DayRot.children[0]);
                     MicEnginereturn.Materials.Export[0].UpdateLensRotation(MicEnginereturn.VarPlanetSystem.References[3][4].DayRot.children[0]);
                  };
               };

               //AGGIORNAMENTO DELLA LENTE DELA PORTALE DAL CAPITOLO 3
               if (GlobalVar.Capitolo >= 3) {
                  if (MicEnginereturn.VarPlanetSystem.References[3].DayRot.children[0].material.name == "ShaderLens") {
                     MicEnginereturn.Materials.Export[0].UpdateLensPosition(MicEnginereturn.VarPlanetSystem.References[3][4].DayRot.children[0]);
                     MicEnginereturn.Materials.Export[0].UpdateLensRotation(MicEnginereturn.VarPlanetSystem.References[3][4].DayRot.children[0]);
                     MicEnginereturn.Materials.Export[0].UpdateAmbientlLight(MicEnginereturn.Lights.AmbientLight);
                  };
               };
            };

            //VISIBILITÀ DELLA LUCE DEL PORTALE E DELL'ACCENSIONE
            if (GlobalVar.PlanetOrbit == 4 && GlobalVar.MoonOrbit == 5) {
               //TROVA LE LUCI DA ACCENDERE NELLA STAZIONE WORMHOLE
               if (GlobalVar.PlanetOrbit == 4 && GlobalVar.MoonOrbit == 5) {
                  if (!LucePortale) LucePortale = MicEnginereturn.VarPlanetSystem.References[4 - 1][5 - 1].DayRot.children[0].getObjectByName("LucePortale");
                  if (!LuceAccensione) LuceAccensione = MicEnginereturn.VarPlanetSystem.References[4 - 1][5 - 1].DayRot.children[0].getObjectByName("LuceAccensione");
               };
               //LUCE ACCENSIONE
               // if (MicEnginereturn.VarPlanetSystem.References[4 - 1][5 - 1].DayRot.children[0].children[7])
               //    VarObject.AccLightVisiblity = MicEnginereturn.VarPlanetSystem.References[4 - 1][5 - 1].DayRot.children[0].children[7].visible;
               //LUCE PORTALE
               // if (MicEnginereturn.VarPlanetSystem.References[4 - 1][5 - 1].DayRot.children[0].children[6])
               //    VarObject.AccLightPortal = MicEnginereturn.VarPlanetSystem.References[4 - 1][5 - 1].DayRot.children[0].children[6].visible;

               //LUCE ACCENSIONE
               // if (GlobalVar.Capitolo < 2 && VarObject.AccLightVisiblity == true) {
               if (GlobalVar.Capitolo < 2 && LuceAccensione.visible == true) LuceAccensione.visible = false;

               if (GlobalVar.Capitolo == 2) {
                  // if (GlobalVar.Missione < 7 && VarObject.AccLightVisiblity == true) MicEnginereturn.VarPlanetSystem.References[4 - 1][5 - 1].DayRot.children[0].children[7].visible = false;
                  if (GlobalVar.Missione < 7 && LuceAccensione.visible == true) LuceAccensione.visible = false;
               };

               // if (GlobalVar.Capitolo >= 3 && VarObject.AccLightVisiblity == true) MicEnginereturn.VarPlanetSystem.References[4 - 1][5 - 1].DayRot.children[0].children[7].visible = false;
               if (GlobalVar.Capitolo >= 3 && LuceAccensione.visible == true) LuceAccensione.visible = false;

               //LUCE PORTALE
               if (GlobalVar.Capitolo < 3 && VarObject.StepNPCTest < 2) {
                  // if (VarObject.AccLightPortal == true) {
                  if (LucePortale.visible == true) LucePortale.visible == false;
               };
               if (GlobalVar.Capitolo >= 3) {
                  // if (VarObject.AccLightPortal == false) MicEnginereturn.VarPlanetSystem.References[4 - 1][5 - 1].DayRot.children[0].children[6].visible = true;
                  if (LucePortale.visible == false) LucePortale.visible == true;
               };
            };

            if (GlobalVar.Capitolo == 2) {
               //AUMENTA LA QUANTITÀ DI DEUTERIO DENTRO L'ATMOSFERA DI NETTUNO
               if (GlobalVar.Missione == 3) {
                  GameHUDCanvas.setBarText(7, `${Testi.HUD.Deuterio[GlobalVar.Language]}${GlobalVar.Space}${GlobalVar.Deuterio.toFixed(1)}%`);
                  GameHUDCanvas.setBarValue(7, GlobalVar.Deuterio / 100);
                  if (GlobalVar.ExtractionModules > 0 && VarObject.LongTravelCrew >= VarObject.Crew && GlobalVar.PlanetOrbit == 8 && MicEnginereturn.VarPlanetSystem.NearCollision == true) {
                     if (GlobalVar.Deuterio < 100) GlobalVar.Deuterio += Economy.DeuterioImp;
                     else GlobalVar.Deuterio = 100;
                  };
               };
               //AUMENTA LA QUANTITÀ DI TRIZIO DENTRO L'ATMOSFERA DI SATURNO E RIDUCILA FUORI
               if (GlobalVar.Missione == 4) {
                  GameHUDCanvas.setBarText(7, `${Testi.HUD.Trizio[GlobalVar.Language]}${GlobalVar.Space}${GlobalVar.Trizio.toFixed(1)}%`);
                  GameHUDCanvas.setBarValue(7, GlobalVar.Trizio / 100);
                  if (GlobalVar.ExtractionModules > 0 && VarObject.LongTravelCrew >= VarObject.Crew && GlobalVar.PlanetOrbit == 6) {
                     //AUMENTA LA QUANTITÀ DI TRIZIO DENTRO L'ATMOSFERA DI SATURNO
                     if (MicEnginereturn.VarPlanetSystem.NearCollision == true) {
                        if (GlobalVar.Trizio < 100) GlobalVar.Trizio += Economy.TrizioImp;
                        else GlobalVar.Trizio = 100;
                     }
                     //RIDUCI GRADUALMENTE LA QUANTITÀ DI TRIZIO QUANDO FUORI DALL'ATMOSFERA DI SATURNO
                     else if (GlobalVar.Trizio > 0) GlobalVar.Trizio -= Economy.TrizioSub;
                  }
                  //RIDUCI GRADUALMENTE LA QUANTITÀ DI TRIZIO QUANDO FUORI DALL'ATMOSFERA DI SATURNO
                  else if (GlobalVar.Trizio > 0) GlobalVar.Trizio -= Economy.TrizioSub;
               };
               //EVENTI SCRIPTATI PER IL TEST DELLA STAZIONE WORMHOLE
               if (GlobalVar.Missione == 7) {
                  if (GlobalVar.PlanetOrbit == 4 && GlobalVar.MoonOrbit == 5 && VarObject.StepNPCTest < 4) VarObject.TimeScriptTest++;
                  //TEMPO TRA 5 E 12 SECONDI - TESTO 0
                  if (VarObject.StepNPCTest == 0 && VarObject.TimeScriptTest > 50 && VarObject.TimeScriptTest < 120) {
                     //RENDI INVISIBILE LA LUCE DELL'ACCENSIONE
                     MicEnginereturn.VarPlanetSystem.References[4 - 1][5 - 1].DayRot.children[0].children[7].visible = false;

                     //ATTACCA LA CAMERA ALLA STAZIONE WORMHOLE
                     MicEnginereturn.VarPlanetSystem.References[4 - 1][5 - 1].DayRot.children[0].add(VarObject.Camera);
                     VarObject.StepNPCTest = 1;
                     G2_NPCTest();        //NPC.Test.Testi[0]
                  };
                  //TEMPO TRA 12 E 16 SECONDI - TESTO 1
                  if (VarObject.StepNPCTest == 1 && VarObject.TimeScriptTest > 120 && VarObject.TimeScriptTest < 160) {
                     //RENDI VISIBILE LA LUCE DELL'ACCENSIONE
                     MicEnginereturn.VarPlanetSystem.References[3][4].DayRot.children[0].children[7].visible = true;
                     VarObject.StepNPCTest = 2;
                     G2_NPCTest();        //NPC.Test.Testi[1]
                  };
                  //TEMPO TRA 16 E 23 SECONDI - TESTO 2
                  if (VarObject.StepNPCTest == 2 && VarObject.TimeScriptTest > 160 && VarObject.TimeScriptTest < 230) {
                     //RENDI VISIBILE LA LUCE DEL PORTALE, NASCONDI QUELLA DELL'ACCENSIONE E ASSOCIA A MARTE IL NUOVO MATERIALE
                     MicEnginereturn.VarPlanetSystem.References[3][4].DayRot.children[0].children[6].visible = true;
                     MicEnginereturn.VarPlanetSystem.References[3][4].DayRot.children[0].children[7].visible = false;
                     VarObject.StepNPCTest = 3;
                     G2_NPCTest();        //NPC.Test.Testi[2]
                  };
                  //TEMPO TRA 23 E 30 SECONDI - TESTO 3
                  if (VarObject.StepNPCTest == 3 && VarObject.TimeScriptTest > 230 && VarObject.TimeScriptTest < 300) {
                     //RESETTA LA POSIZIONE DELLA CAMERA E ATTACCALA ALLA NAVE
                     VarObject.Camera.position.z = VarObject.PosZ;
                     MicEnginereturn.CameraGroup.children[0].children[0].add(VarObject.Camera);
                     VarObject.StepNPCTest = 4;
                     G2_NPCTest();        //NPC.Test.Testi[3]
                  };

                  //PRIMO PASSAGGIO DELLA NAVE NEL PORTALE - TESTO 4
                  if (VarObject.StepNPCTest == 4 && VarObject.PortalPassed == true && VarObject.PortalAfter == false) {
                     VarObject.StepNPCTest = 5;
                     G2_NPCTest();        //NPC.Test.Testi[4]
                     VarObject.PortalPassed = false;
                  };

                  //RESET DEL PASSAGGIO E SECONDO PASSAGGIO DELLA NAVE NEL PORTALE - TESTO 5
                  if (VarObject.StepNPCTest == 5) {
                     if (VarObject.PortalPassed == true) {
                        VarObject.StepNPCTest = 6;
                        G2_NPCTest();        //NPC.Test.Testi[5]
                     };
                  };

                  //BLOCCA I MOVIMENTI DELLA NAVE MENTRE AVVIENE L'ACCENSIONE DEL PORTALE
                  if (VarObject.StepNPCTest > 0 && VarObject.StepNPCTest < 4) VarObject.BlockMov = true;
                  else VarObject.BlockMov = false;
               };
            };
            if (GlobalVar.Capitolo == 3) {
               //AUMENTA LA QUANTITÀ DI PLASMA DENTRO L'ATMOSFERA DEL SOLE
               if (GlobalVar.Missione == 1) {
                  GameHUDCanvas.setBarText(7, `${Testi.HUD.Plasma[GlobalVar.Language]}${GlobalVar.Space}${GlobalVar.Sole.toFixed(1)}%`);
                  GameHUDCanvas.setBarValue(7, GlobalVar.Sole / 100);
                  if (GlobalVar.ExtractionModules > 0 && VarObject.LongTravelCrew >= VarObject.Crew && GlobalVar.PlanetOrbit == 0 && MicEnginereturn.VarPlanetSystem.NearCollision == true) {
                     if (GlobalVar.Sole < 100) GlobalVar.Sole += Economy.SoleImp;
                     else GlobalVar.Sole = 100;
                  };

                  //EVENTI SCRIPTATI PER GLI STEP DELLA LENTE
                  if (GlobalVar.PlanetOrbit == 4 && GlobalVar.MoonOrbit == 5 && VarObject.StepLens < 3 && GlobalVar.StepTimeMars != Number(SaveSystem.getItem(`StepTimeMars`))) VarObject.TimeScriptTest++;
                  //TEMPO TRA 5 E 12 SECONDI
                  if (VarObject.StepLens == 0 && VarObject.TimeScriptTest > 50 && VarObject.TimeScriptTest < 120) {
                     //ATTACCA LA CAMERA ALLA STAZIONE WORMHOLE
                     MicEnginereturn.VarPlanetSystem.References[4 - 1][5 - 1].DayRot.children[0].add(VarObject.Camera);

                     VarObject.StepLens = 1;
                  };
                  //TEMPO TRA 12 E 19 SECONDI
                  if (VarObject.StepLens == 1 && VarObject.TimeScriptTest > 120 && VarObject.TimeScriptTest < 160) {
                     VarObject.StepLens = 2;
                  };
                  //TEMPO TRA 19 E 26 SECONDI
                  if (VarObject.StepLens == 2 && VarObject.TimeScriptTest > 160 && VarObject.TimeScriptTest < 230) {
                     //ATTACCA LA CAMERA ALLA NAVE
                     VarObject.Camera.position.z = VarObject.PosZ;
                     MicEnginereturn.CameraGroup.children[0].children[0].add(VarObject.Camera);
                     VarObject.StepLens = 3;
                  };
                  if (VarObject.StepLens == 3) SaveSystem.setItem('StepTimeMars', GlobalVar.StepTimeMars);

                  //BLOCCA I MOVIMENTI DELLA NAVE MENTRE AVVENGONO I MOVIMENTI DI CAMERA SCRIPTATI
                  if (VarObject.StepLens > 0 && VarObject.StepLens < 3) VarObject.BlockMov = true;
                  else VarObject.BlockMov = false;
               };
            };
            if (GlobalVar.Capitolo == 4) {
               //EVENTI SCRIPTATI PER LA SPIEGAZIONE SULLA FINE DI MARTE
               if (GlobalVar.Missione == 0) {
                  if (GlobalVar.PlanetOrbit == 4 && GlobalVar.MoonOrbit == 5 && VarObject.StepNPCSpeech < 5) VarObject.TimeScriptTest++;
                  //TEMPO TRA 3 E 13 SECONDI - TESTO 0
                  if (VarObject.StepNPCSpeech == 0 && VarObject.TimeScriptTest > 30) {
                     //ATTACCA LA CAMERA ALLA STAZIONE WORMHOLE
                     MicEnginereturn.VarPlanetSystem.References[4 - 1][5 - 1].DayRot.children[0].add(VarObject.Camera);

                     VarObject.StepNPCSpeech = 1;
                  };

                  //BLOCCA I MOVIMENTI DELLA NAVE MENTRE AVVIENE LA SPIEGAZIONE E IL MOVIMENTO DI CAMERA
                  if (VarObject.StepNPCSpeech > 0 && VarObject.StepNPCSpeech < 5) VarObject.BlockMov = true;
                  else VarObject.BlockMov = false;

                  //AGGIORNA LA FUNZIONE ONCE
                  SpeechStationNPC.Update(VarObject.StepNPCSpeech);
               };
            };
            if (GlobalVar.Capitolo == 5) {
               //CALCOLO DELLA DISTANZA DALLA NUVOLA
               VarObject.DistNuvola = MicEnginereturn.PhysicsEngine.UserPosWorld.distanceTo(MicEnginereturn.GenericGroup.children[0].position);
               if (GlobalVar.Missione == 1 && VarObject.DistNuvola < VarObject.MinDistNuvola) {
                  GlobalVar.Missione = 2;
                  GameHUDCanvas.showBar(7, true);                //VISUALIZZA LA BARRA DI RIEMPIMENTO
                  GameHUDCanvas.showBar(9, false);                //NASCONDI LA BARRA RADAR
                  GameHUDCanvas.showButton(16, false);            //NASCONDI IL PULSANTE RADAR
               };
               if (GlobalVar.Missione == 2) {
                  //MORTE PER COLLISIONE CON LA COMETA
                  if (VarObject.DistNuvola < VarObject.DeathNuvola) G1_ExplosionDeath();
                  //AUMENTA LA QUANTITÀ DI ELEMENTO SCONOSCIUTO
                  GameHUDCanvas.setBarText(7, `${Testi.HUD.Sconosciuto[GlobalVar.Language]}${GlobalVar.Space}${GlobalVar.Cometa.toFixed(1)}%`);
                  GameHUDCanvas.setBarValue(7, GlobalVar.Cometa / 100);
                  if (GlobalVar.ExtractionModules > 0 && VarObject.LongTravelCrew >= VarObject.Crew && VarObject.DistNuvola < VarObject.ExtractionNuvola) {
                     if (GlobalVar.Cometa < 100) GlobalVar.Cometa += Economy.SoleImp;
                     else GlobalVar.Cometa = 100;
                  };
                  //ONCE FUNCTION PER NASCONDERE O MOSTRARE GLI ELEMENTI DELLO SCHERMO
                  if (VarObject.PianoDissFade < 0.4) VarObject.PianoDissBool = true;
                  else VarObject.PianoDissBool = false;

                  if (VarObject.PianoDissFade > 0.6) VarObject.PianoDissBool2 = true;
                  else VarObject.PianoDissBool2 = false;

                  //CINEMATICA FINALE
                  if (GlobalVar.Cometa >= 100) {
                     VarObject.TimeFinalCinematic++;
                     VarObject.BlockMov = true;
                  };
                  //0 - 3 SECONDI - TRASFERIMENTO SU NETTUNO
                  if (VarObject.TimeFinalCinematic > VarObject.FinalCinematic[0] && MicEnginereturn.VarPlanetSystem.PlanetOrbit == 0) {
                     await MicEnginereturn.E1_RapidTranslate({
                        PlanetOrbit: 8,
                        MoonOrbit: 0,
                        SubMoonOrbit: 0,
                        PosX: 11000000,
                        PosY: 2000000,
                        PosZ: 0,
                        RotX: 0,
                        RotY: 1.2,
                        RotZ: 0
                     });
                  };
                  //2 - 9 SECONDI - NPC RITROVO
                  if (VarObject.TimeFinalCinematic > VarObject.FinalCinematic[2]) NPCRisveglio.Update(true);
                  //4 - 15 SECONDI - TRASFERIMENTO SU MARTE
                  if (VarObject.TimeFinalCinematic > VarObject.FinalCinematic[4] && MicEnginereturn.VarPlanetSystem.PlanetOrbit == 8) {
                     //SALTO SU MARTE A COORDINATE COMPATIBILI CON NETTUNO
                     await MicEnginereturn.E1_RapidTranslate({
                        PlanetOrbit: 4,
                        MoonOrbit: 0,
                        SubMoonOrbit: 0,
                        PosX: 11000000,
                        PosY: 2000000,
                        PosZ: 0,
                        RotX: 0,
                        RotY: 1.2,
                        RotZ: 0
                     });
                  };
                  //7 - 24 SECONDI - TRASFERIMENTO SULLA STAZIONE WORMHOLE
                  if (VarObject.TimeFinalCinematic > VarObject.FinalCinematic[7]) {
                     //ROTAZIONE GLOBALE SOLAR SYSTEM
                     SaveSystem.setItem(`OrbitPosition`, MicEnginereturn.VarPlanetSystem.OrbitPosition);

                     //RAGGIO TRAENTE
                     SaveSystem.setItem(`NearTractor`, 1);
                     SaveSystem.setItem(`TractorActive`, 1);

                     SaveSystem.setItem(`PlanetOrbit`, MicEnginereturn.VarPlanetSystem.PlanetOrbit);      //ORBITA DI UN PIANETA RAGGIUNTA
                     SaveSystem.setItem(`MoonOrbit`, 5);          //ORBITA DI UNA LUNA RAGGIUNTA
                     SaveSystem.setItem(`SubMoonOrbit`, 0);    //ORBITA DI UNA SUB-LUNA RAGGIUNTA

                     //POSIZIONE NAVE SPAZIALE
                     SaveSystem.setItem(`SpaceGame_PosX`, 5999.895636200209);
                     SaveSystem.setItem(`SpaceGame_PosY`, 121.93061398407723);
                     SaveSystem.setItem(`SpaceGame_PosZ`, -0.18958785237142994);

                     //ROTAZIONE NAVE SPAZIALE
                     SaveSystem.setItem(`SpaceGame_RotX`, 0);
                     SaveSystem.setItem(`SpaceGame_RotY`, 0);
                     SaveSystem.setItem(`SpaceGame_RotZ`, 0);

                     //TIPO STAZIONE
                     SaveSystem.setItem(`StationType`, 8);

                     //STORIA
                     SaveSystem.setItem('Missione', GlobalVar.Missione);
                     SaveSystem.setItem('Cometa', GlobalVar.Cometa);

                     SaveSystem.update();
                     //CAMBIO PAGINA
                     G0_ShowLoadingAndReload("Station");     //SaveSystem.update();
                  };
               };
            };

            /*-------------------------------BARRA E SPIA RADAR--------------------------------*/
            //CARICAMENTO BARRA RADAR
            if (VarObject.BarRadarPressed == true && GlobalVar.Fuel > Economy.RadarImpFuel) {
               if (VarObject.BarRadarPerc < 100) VarObject.BarRadarPerc += 2;
               if (VarObject.BarRadarPerc > +100) VarObject.BarRadarPerc = 100;
               G1_UpdateRadarBars();
            };

            //ALTEZZA BARRA RADAR (0-1)
            VarObject.BarRadarValue = -(Economy.RadarImpFuel / Economy.FuelUpgrade[GlobalVar.UpgradeTank]) * VarObject.BarRadarPerc * 0.01;

            //SPIA RADAR DISPONIBILE
            if (VarObject.BarRadarPerc >= 100) GameHUDCanvas.setButtonColor(16, Colors.SelectedPuls);
            else GameHUDCanvas.setButtonColor(16, Colors.ActivePulsTrans);

            if (VarObject.BarRadarPerc > 0)
               GameHUDCanvas.createSecondBar(0, "rgb(255,0,0)", FuelBarValue, VarObject.BarRadarValue);
            else
               GameHUDCanvas.createSecondBar(0, null, 0, 0);
         };

         /*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
         /*----------------------------------------------------BLOCCHI LOOP 200MS----------------------------------------------------------------*/
         /*-------------------------------------------------------BLINK TUTORIAL-------------------------------------------------------*/
         function _200_BlinkTutorial() {
            if (GlobalVar.TutorialFlag <= 11) {
               if (GlobalVar.TutorialFlag == 5) {
                  VarObject.ColorTutorial = !VarObject.ColorTutorial;

                  if (VarObject.ColorTutorial == true) {
                     GameHUDCanvas.setButtonColor(8, Colors.SelectedPuls);
                     GameHUDCanvas.setButtonColor(9, Colors.SelectedPuls);
                     GameHUDCanvas.setButtonColor(22, Colors.SelectedPuls);
                     GameHUDCanvas.setButtonColor(23, Colors.SelectedPuls);
                     GameHUDCanvas.setBarColor(4, Colors.SelectedPuls, Colors.SelectedPuls);
                  }
                  else {
                     GameHUDCanvas.setButtonColor(8, Colors.ActivePulsTrans);
                     GameHUDCanvas.setButtonColor(9, Colors.ActivePulsTrans);
                     GameHUDCanvas.setButtonColor(22, Colors.ActivePulsTrans);
                     GameHUDCanvas.setButtonColor(23, Colors.ActivePulsTrans);
                     GameHUDCanvas.setBarColor(4, Colors.ActivePulsTrans, Colors.ActivePulsTrans);
                  };
               }
               else if (GlobalVar.TutorialFlag == 8) {
                  VarObject.ColorTutorial = !VarObject.ColorTutorial;

                  if (VarObject.ColorTutorial == true) {
                     GameHUDCanvas.setButtonColor(3, Colors.SelectedPuls);
                     GameHUDCanvas.setButtonColor(4, Colors.SelectedPuls);
                     GameHUDCanvas.setButtonColor(5, Colors.SelectedPuls);
                  }
                  else {
                     GameHUDCanvas.setButtonColor(3, Colors.ActivePulsTrans);
                     GameHUDCanvas.setButtonColor(4, Colors.ActivePulsTrans);
                     GameHUDCanvas.setButtonColor(5, Colors.ActivePulsTrans);
                  };
               }
               else if (GlobalVar.TutorialFlag == 10) {
                  VarObject.ColorTutorial = !VarObject.ColorTutorial;

                  if (VarObject.ColorTutorial == true) {
                     GameHUDCanvas.setButtonColor(0, Colors.SelectedPuls);
                     GameHUDCanvas.setButtonColor(1, Colors.SelectedPuls);
                     GameHUDCanvas.setButtonColor(2, Colors.SelectedPuls);
                  }
                  else {
                     GameHUDCanvas.setButtonColor(0, Colors.ActivePulsTrans);
                     GameHUDCanvas.setButtonColor(1, Colors.ActivePulsTrans);
                     GameHUDCanvas.setButtonColor(2, Colors.ActivePulsTrans);
                  };
               }
               else {
                  GameHUDCanvas.setButtonColor(0, Colors.ActivePulsTrans);
                  GameHUDCanvas.setButtonColor(1, Colors.ActivePulsTrans);
                  GameHUDCanvas.setButtonColor(3, Colors.ActivePulsTrans);
                  GameHUDCanvas.setButtonColor(4, Colors.ActivePulsTrans);
                  GameHUDCanvas.setButtonColor(5, Colors.ActivePulsTrans);
                  GameHUDCanvas.setButtonColor(8, Colors.ActivePulsTrans);
                  GameHUDCanvas.setButtonColor(9, Colors.ActivePulsTrans);
                  GameHUDCanvas.setButtonColor(22, Colors.ActivePulsTrans);
                  GameHUDCanvas.setButtonColor(23, Colors.ActivePulsTrans);
                  GameHUDCanvas.setBarColor(4, Colors.ActivePulsTrans, Colors.SelectedPuls);
               };
            };
         };

         /*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
         /*----------------------------------------------------BLOCCHI LOOP 500MS----------------------------------------------------------------*/

         /*-------------------------------------------------------BLINK MISSIONS-------------------------------------------------------*/
         function _500_BlinkMissions() {
            if (VarObject.BlinkMissions == true && GlobalVar.TutorialFlag >= 11) {
               VarObject.ColorMissions = !VarObject.ColorMissions;

               if (VarObject.ColorMissions == false) GameHUDCanvas.setButtonColor(2, Colors.SelectedPuls);
               else GameHUDCanvas.setButtonColor(2, Colors.ActivePulsTrans);
            };
         };

         /*-------------------------------------------------------BLINK RADIO-------------------------------------------------------*/
         function _500_BlinkRadio() {
            if (MicEnginereturn.VarPlanetSystem.NearTractorDist > 0 &&
               MicEnginereturn.VarPlanetSystem.NearTractorDist < MicEngineParam.PlanetarySystem.TractorBeam.RadioDistance && GlobalVar.TutorialFlag > 10) {
               VarObject.ColorRadio = !VarObject.ColorRadio;

               if (VarObject.ColorRadio == true) GameHUDCanvas.setButtonColor(5, Colors.SelectedPuls);
               else GameHUDCanvas.setButtonColor(5, Colors.ActivePulsTrans);
            }
            else GameHUDCanvas.setButtonColor(5, Colors.ActivePulsTrans);
         };

         /*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
         /*----------------------------------------------------BLOCCHI LOOP 1000MS---------------------------------------------------------------*/

         //------------------------------AGGIORNAMENTO BARRE DATI NAVE SPAZIALE E RISERVE (GAME)------------------------------//
         function _1000_UpdateBars() {
            //DIMENSIONE BARRA
            FuelBarValue = GlobalVar.Fuel / Economy.FuelUpgrade[GlobalVar.UpgradeTank];
            GameHUDCanvas.setBarValue(0, FuelBarValue);
            GameHUDCanvas.setBarValue(1, VarObject.Air / VarObject.AirMax);
            GameHUDCanvas.setBarValue(2, VarObject.Water / VarObject.WaterMax);
            GameHUDCanvas.setBarValue(3, VarObject.Food / VarObject.FoodMax);
            //TESTO BARRA
            GameHUDCanvas.setBarText(0, `${(GlobalVar.Fuel).toFixed(0)}/${Economy.FuelUpgrade[GlobalVar.UpgradeTank]}
            ${MicEnginereturn.Math.E3_DisplayDistance(VarObject.FuelAutonomia * MicEngineParam.DynamicCockpit.ScalaPos * 1000, true)}`);
            GameHUDCanvas.setBarText(1, `${(VarObject.Air).toFixed(0)}/${VarObject.AirMax}`);
            GameHUDCanvas.setBarText(2, `${(VarObject.Water).toFixed(0)}/${VarObject.WaterMax}`);
            GameHUDCanvas.setBarText(3, `${(VarObject.Food).toFixed(0)}/${VarObject.FoodMax}`);
            //COLORE BARRA CARBURANTE
            if ((GlobalVar.Fuel / Economy.FuelUpgrade[GlobalVar.UpgradeTank]) * 100 > GlobalVar.ValoreRiserva) {
               VarObject.FuelRiserva = false;
               GameHUDCanvas.setBarColor(0, Colors.ActivePulsTrans, Colors.SelectedPuls);
            }
            else {
               VarObject.FuelRiserva = true;
               GameHUDCanvas.setBarColor(0, Colors.ActivePulsTrans, Colors.RedBar);
            };
            //COLORE BARRA ARIA
            if ((VarObject.Air / VarObject.AirMax) * 100 > GlobalVar.ValoreRiserva) {
               VarObject.AirRiserva = false;
               GameHUDCanvas.setBarColor(1, Colors.ActivePulsTrans, Colors.SelectedPuls);
            }
            else {
               VarObject.AirRiserva = true;
               GameHUDCanvas.setBarColor(1, Colors.ActivePulsTrans, Colors.RedBar);
            };
            //COLORE BARRA ACQUA
            if ((VarObject.Water / VarObject.WaterMax) * 100 > GlobalVar.ValoreRiserva) {
               VarObject.WaterRiserva = false;
               GameHUDCanvas.setBarColor(2, Colors.ActivePulsTrans, Colors.SelectedPuls);
            }
            else {
               VarObject.WaterRiserva = true;
               GameHUDCanvas.setBarColor(2, Colors.ActivePulsTrans, Colors.RedBar);
            };
            //COLORE BARRA CIBO
            if ((VarObject.Food / VarObject.FoodMax) * 100 > GlobalVar.ValoreRiserva) {
               VarObject.FoodRiserva = false;
               GameHUDCanvas.setBarColor(3, Colors.ActivePulsTrans, Colors.SelectedPuls);
            }
            else {
               VarObject.FoodRiserva = true;
               GameHUDCanvas.setBarColor(3, Colors.ActivePulsTrans, Colors.RedBar);
            };
         };
         //----------MEMORIZZAZIONE TEMPI DI ARRIVO PER STABILIRE SE CI SI AVVICINA O ALLONTANA PER LA SPIA BRAKE-------------//
         function _1000_BrakeLight() {
            //SPIA BRAKE - FUORI DA OGNI ORBITA
            if (MicEnginereturn.VarPlanetSystem.PlanetOrbit == 0) {
               VarObject.MinTimePlanet = MicEnginereturn.VarPlanetSystem.MinTimePlanet;
            };
            //SPIA BRAKE - ORBITA DI UN PIANETA
            if (MicEnginereturn.VarPlanetSystem.PlanetOrbit > 0 && MicEnginereturn.VarPlanetSystem.MoonOrbit == 0) {
               VarObject.MinTimePlanet = MicEnginereturn.VarPlanetSystem.MinTimePlanet;
               VarObject.MinTimeMoon = MicEnginereturn.VarPlanetSystem.MinTimeMoon;
            };
            //SPIA BRAKE - ORBITA DI UNA LUNA
            if (MicEnginereturn.VarPlanetSystem.PlanetOrbit > 0 && MicEnginereturn.VarPlanetSystem.MoonOrbit > 0) {
               VarObject.MinTimePlanet = MicEnginereturn.VarPlanetSystem.MinTimePlanet;
               VarObject.MinTimeMoon = MicEnginereturn.VarPlanetSystem.MinTimeMoon;
               VarObject.MinTimeSubMoon = MicEnginereturn.VarPlanetSystem.MinTimeSubMoon;
            };
         };
         /*-------------------------------------------------------SUONI-------------------------------------------------------*/
         function _1000_Sounds() {
            //COLLISION (PRIORITÀ ALTA)
            if (MicEnginereturn.VarPlanetSystem.NearCollision == true) {
               //OGNI 2 SECONDI DICE "COLLISION"
               if (VarObject.ContCollision == 0) MicEnginereturn.Audio.PlayOnceSound(1, GlobalVar.VolumeVoice / 100);
               VarObject.ContCollision++;
               if (VarObject.ContCollision > 5) {
                  MicEnginereturn.Audio.PlayOnceSound(1, GlobalVar.VolumeVoice / 100);
                  VarObject.ContCollision = 0;
               };
            }
            //BRAKE (PRIORITÀ BASSA)
            else if (VarObject.SpiaBrake == true) {
               //OGNI 3 SECONDI DICE "BRAKE"
               if (VarObject.ContBrake == 0) MicEnginereturn.Audio.PlayOnceSound(0, GlobalVar.VolumeVoice / 100);
               VarObject.ContBrake++;
               if (VarObject.ContBrake > 5) {
                  MicEnginereturn.Audio.PlayOnceSound(0, GlobalVar.VolumeVoice / 100);
                  VarObject.ContBrake = 0;
               };
            }
            else VarObject.ContBrake = 0;

            //SUONO RISERVA CARBURANTE, SUONA UNA VOLTA OGNI TANTI SECONDI QUANTO È LA PERCENTUALE DI CARBURANTE RIMASTA
            if (VarObject.FuelRiserva == true) {
               VarObject.CntFuelRiserva++;          //CONTA I SECONDI
               //QUANDO IL CONTATORE RAGGIUNGE IL VALORE IN PERCENTUALE DI RISERVA
               if (VarObject.CntFuelRiserva > (GlobalVar.Fuel / Economy.FuelUpgrade[GlobalVar.UpgradeTank]) * 100) {
                  MicEnginereturn.Audio.PlayOnceSound(9, GlobalVar.VolumeVoice / 100);
                  VarObject.CntFuelRiserva = 0;     //RICOMINCIA A CONTARE I SECONDI
               };
            }
            else VarObject.CntFuelRiserva = 0;

            //SUONO RISERVA ARIA, SUONA UNA VOLTA OGNI TANTI SECONDI QUANTO È LA PERCENTUALE DI ARIA RIMASTA
            if (VarObject.AirRiserva == true) {
               VarObject.CntAirRiserva++;          //CONTA I SECONDI
               //QUANDO IL CONTATORE RAGGIUNGE IL VALORE IN PERCENTUALE DI RISERVA
               if (VarObject.CntAirRiserva > (VarObject.Air / VarObject.AirMax) * 100) {
                  MicEnginereturn.Audio.PlayOnceSound(10, GlobalVar.VolumeVoice / 100);
                  VarObject.CntAirRiserva = 0;     //RICOMINCIA A CONTARE I SECONDI
               };
            }
            else VarObject.CntAirRiserva = 0;

            //SUONO RISERVA ACQUA, SUONA UNA VOLTA OGNI TANTI SECONDI QUANTO È LA PERCENTUALE DI ACQUA RIMASTA
            if (VarObject.WaterRiserva == true) {
               VarObject.CntWaterRiserva++;          //CONTA I SECONDI
               //QUANDO IL CONTATORE RAGGIUNGE IL VALORE IN PERCENTUALE DI RISERVA
               if (VarObject.CntWaterRiserva > (VarObject.Water / VarObject.WaterMax) * 100) {
                  MicEnginereturn.Audio.PlayOnceSound(11, GlobalVar.VolumeVoice / 100);
                  VarObject.CntWaterRiserva = 0;     //RICOMINCIA A CONTARE I SECONDI
               };
            }
            else VarObject.CntWaterRiserva = 0;

            //SUONO RISERVA CIBO, SUONA UNA VOLTA OGNI TANTI SECONDI QUANTO È LA PERCENTUALE DI CIBO RIMASTA
            if (VarObject.FoodRiserva == true) {
               VarObject.CntFoodRiserva++;          //CONTA I SECONDI
               //QUANDO IL CONTATORE RAGGIUNGE IL VALORE IN PERCENTUALE DI RISERVA
               if (VarObject.CntFoodRiserva > (VarObject.Food / VarObject.FoodMax) * 100) {
                  MicEnginereturn.Audio.PlayOnceSound(12, GlobalVar.VolumeVoice / 100);
                  VarObject.CntFoodRiserva = 0;     //RICOMINCIA A CONTARE I SECONDI
               };
            }
            else VarObject.CntFoodRiserva = 0;
         };
         /*--------------------------------------------------------STORIA-----------------------------------------------------*/
         function _1000_Story() {
            if (GlobalVar.Capitolo == 2) {
               //ATTESA FINE LAVORI COSTRUZIONE
               if (GlobalVar.Missione == 0) {
                  if (VarObject.TimeBar > 0) VarObject.TimeBar--;
               };
               //ATTESA CARICAMENTO CONDENSATORI
               if (GlobalVar.Missione == 5) {
                  if (VarObject.TimeBar > 0) VarObject.TimeBar--;
                  //TIMER DI ATTESA DELLA BARRA TRA LA MISSIONE 5 E 6 DEL CAPITOLO 2
                  GlobalVar.SoleTotal = 10;
               };
            };
            if (GlobalVar.Capitolo == 3) {
               if (GlobalVar.Missione == 3) {
                  if (VarObject.TimeBar2 > 0) VarObject.TimeBar2--;
                  console.log(VarObject.TimeBar);
               };
            };
         };

         setInterval(async () => {
            if (MicEnginereturn.VarObject.PaceDone == true) {
               _100_RandomChangeDirection();                  //CAMBIO DIREZIONE CASUALE ALL'AUMENTARE DELLA VELOCITÀ (LOOP)(GAME)
               VarObject.VelGlobalPerc = MicEnginereturn.PhysicsEngine.VarObject.VelImpostata;//VELOCITÀ IMPOSTATA (LOOP)(GAME)
               _100_UpdateShipParameters();                   //AGGIORNAMENTO PARAMETRI NAVE SPAZIALE (LOOP)(GAME)
               _100_SpieBarre();                              //SPIE E BARRE DI GIOCO (GAME)
               _100_CallRadio();                              //CHIAMATA E RISPOSTA ALLA RADIO (ONCE) (GAME)
               _100_DustCloud();                              //VISIBILITÀ NUVOLA DI POLVERE (ONCE) (GAME)
               ScuolaGuidaNpc.Update(GlobalVar.TutorialFlag);//TUTORIAL (ONCE) (GAME)
               ShipLigtsObj.Update(VarObject.VelGlobalPerc);//LUCI MOTORE DELLA NAVE SPAZIALE (GAME)
               _100_Death();                                  //MORTE
               _100_RotatioSpeedZ();                          //ROTAZIONE NAVE ASSE Z ALTE VELOCITÀ
               _100_Sounds();//SUONI
               if (GlobalVar.Control == 1 && Controller.Button[0] == 1 && VarObject.OnceCallRadio == false) {
                  G1_CallRadio();         //CHIAMATA RADIO
                  VarObject.OnceCallRadio = true;
               };
               if (VarObject.OnceCallRadio == true && MicEnginereturn.VarPlanetSystem.TractorActive == 0) VarObject.OnceCallRadio = false;
               _100_MissionText();
               await _100_Deriva();
               await _100_Story();
            };
            GameHUDCanvas.render();
         }, 100);
         setInterval(() => {
            _200_BlinkTutorial();
         }, 200);
         setInterval(() => {
            _500_BlinkMissions();
            _500_BlinkRadio();
         }, 500);
         setInterval(() => {
            if (MicEnginereturn.VarObject.PaceDone == true) {
               GlobalVar.PlanetOrbit = MicEnginereturn.VarPlanetSystem.PlanetOrbit;
               GlobalVar.MoonOrbit = MicEnginereturn.VarPlanetSystem.MoonOrbit;
               GlobalVar.SubMoonOrbit = MicEnginereturn.VarPlanetSystem.SubMoonOrbit;

               //---------------------------------------POSIZIONE TARGET LUCE DIREZIONALE (GAME)----------------------------------------------//
               MicEnginereturn.Lights.DirLightTarget.position.set(MicEnginereturn.PhysicsEngine.UserPosWorld.x, MicEnginereturn.PhysicsEngine.UserPosWorld.y, MicEnginereturn.PhysicsEngine.UserPosWorld.z);

               _1000_UpdateBars();//AGGIORNAMENTO BARRE DATI NAVE SPAZIALE E RISERVE (GAME)
               _1000_BrakeLight();//MEMORIZZAZIONE TEMPI DI ARRIVO PER STABILIRE SE CI SI AVVICINA O ALLONTANA PER LA SPIA BRAKE
               _1000_Sounds();//SUONI



               _1000_Story();
            };

            GameHUDCanvas.setButtonText(24, `FPS ${MicEnginereturn.Monitor.Result.Fps}`, "10px");
         }, 1000);

         GameHUDCanvas.render();
      };
      startGame().then(() => {
         gameReady = true;
         MicEnginereturn.VarObject.E3_UpdateProgress(true);
      });
   };

   //-----------------------------------------------PAGINA DELLA MAPPA 123---------------------------------------------//
   if (GlobalVar.Page == "Map") {
      /*-----------------------------------------------PARAMETRI ENGINE----------------------------------------------------------*/
      MicEngineParam = MapParam;

      /*----------------------------------------------CARICAMENTO ENGINE--------------------------------------------------------*/
      async function startGame() {
         MicEnginereturn = await MicEngine(MicEngineParam, Oggetti, Geometrie, Materiali);
         if (MicEngineParam.Moduli.Debug == true && MicEngineParam.Debug.Return == true) {
            console.log("MicEnginereturn");
            console.log(MicEnginereturn.VarObject.E3_ConsoleLogSimpleObject(MicEnginereturn));
         };
         /*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
         /*------------------------------------------------------BLOCCHI STATICI-----------------------------------------------------------------*/

         /*---------------------------------------AUTOMAZIONI SOLAR SYSTEM DELIVERY--------------------------------------------*/
         //#region
         MicEnginereturn.CameraGroup.children[0].children[0].children[0].position.set(0, MicEngineParam.DynamicPlanetMap.Camera.InitY, MicEngineParam.DynamicPlanetMap.Camera.InitZ);

         //CARICAMENTO MISSIONI DA SESSION STORAGE SE PRESENTI
         G0_LoadMissions();

         //CALCOLO DELL'AUTONOMIA DEL CARBURANTE
         VarObjMap.FuelAutonomia = Economy.SpeedUpgrade[2] * (GlobalVar.Fuel / Economy.FuelImp * 10) * 0.00001;
         //#endregion

         /*-----------------------------------------POSIZIONE LUCE PUNTIFORME--------------------------------------------------*/
         //#region
         MicEnginereturn.Lights.PointLight.position.set(-VarObjMap.SpaceGamePosX * MicEngineParam.DynamicPlanetMap.Parametri.ScalaPos * 1000,
            -VarObjMap.SpaceGamePosY * MicEngineParam.DynamicPlanetMap.Parametri.ScalaPos * 1000,
            -VarObjMap.SpaceGamePosZ * MicEngineParam.DynamicPlanetMap.Parametri.ScalaPos * 1000);
         //#endregion

         /*------------------------------------------INDICATORE POSIZIONE UTENTE-----------------------------------------------*/
         //#region
         const UserGroup = MicEnginereturn.E1_ConeWireframed(2, 6, 16, 0x00ff00, 0xffff00);

         MicEnginereturn.MapUserQuat.set(VarObjMap.SpaceGameRotX, VarObjMap.SpaceGameRotY, VarObjMap.SpaceGameRotZ,
            VarObjMap.SpaceGameRotW);
         UserGroup.children[0].setRotationFromQuaternion(MicEnginereturn.MapUserQuat);
         UserGroup.children[1].setRotationFromQuaternion(MicEnginereturn.MapUserQuat);
         //#endregion

         /*-------------------------------------------------SISTEMA PLANETARIO-------------------------------------------------*/
         //#region
         MicEnginereturn.DynamicPlanetMap.position.set(
            -VarObjMap.SpaceGamePosX * MicEngineParam.DynamicPlanetMap.Parametri.ScalaPos * 1000,
            -VarObjMap.SpaceGamePosY * MicEngineParam.DynamicPlanetMap.Parametri.ScalaPos * 1000,
            -VarObjMap.SpaceGamePosZ * MicEngineParam.DynamicPlanetMap.Parametri.ScalaPos * 1000);

         setInterval(() => {
            for (let i = 0; i < MicEngineParam.DynamicPlanetMap.Zoom.length; i++) {
               if (MicEnginereturn.OrbitControl.getDistance() > MicEngineParam.DynamicPlanetMap.Zoom[i].DistanceMin &&
                  MicEnginereturn.OrbitControl.getDistance() < MicEngineParam.DynamicPlanetMap.Zoom[i].DistanceMax) {
                  VarObjMap.LevelZoom = i;
               };
            };

            UserGroup.children[0].scale.setScalar(MicEnginereturn.OrbitControl.getDistance() * 0.01);
            UserGroup.children[1].scale.setScalar(MicEnginereturn.OrbitControl.getDistance() * 0.01);

         }, 100);

         //#endregion

         /*-------------------------------------------------DESTINAZIONI-------------------------------------------------------*/
         //#region
         //SPRITE E LINEA DESTINAZIONE
         if (GlobalVar.MissionCurrent == 1) {
            const SpriteDest = MicEnginereturn.DynamicPlanetMap.getObjectByName(`SpriteDest`);
            const DestPosWorld = MicEnginereturn.VarObject.WorldPos(MicEnginereturn.DynamicPlanetMap.children[0].
               children[GlobalVar.MissionPlanetCurrent + 1].children[0]);
            SpriteDest.position.set(DestPosWorld.x - MicEnginereturn.DynamicPlanetMap.position.x,
               DestPosWorld.y - MicEnginereturn.DynamicPlanetMap.position.y,
               DestPosWorld.z - MicEnginereturn.DynamicPlanetMap.position.z);

            MicEnginereturn.E1_DestinationsLines({
               NumLines: 1,                                       //1 O MULTIPLI
               MissionPlanet: GlobalVar.MissionPlanetCurrent,     //1 - SINGOLO PIAANETA, MULTIPLI - ARRAY DI PIANETI
            });

            setInterval(() => {
               SpriteDest.material.rotation -= MicEngineParam.DynamicPlanetMap.DestSpriteRot;
            }, 50);
         };

         //LINEE POSSIBILI DESTINAZIONI
         if (Number(SaveSystem.getItem(`SpaceStation`)) == 1 && GlobalVar.MissionCurrent == 0 && GlobalVar.StationType == 1) {
            MicEnginereturn.E1_DestinationsLines({
               NumLines: GlobalVar.NumMission,                    //1 O MULTIPLI
               MissionPlanet: GlobalVar.MissionPlanet,            //1 - SINGOLO PIAANETA, MULTIPLI - ARRAY DI PIANETI
            });
         };
         //#endregion

         /*---------------------------------------------------GENERATE HUD-----------------------------------------------------*/
         //#region
         const MapHUD = S0_GenerateHUDCanvas(MapStaticHUDObj);

         //PULSANTE RETURN
         MapHUD.setButtonCallback(0, () => {
            if (Number(SaveSystem.getItem(`SpaceStation`)) == 0) G0_ShowLoadingAndReload("Game");     //SaveSystem.update();
            if (Number(SaveSystem.getItem(`SpaceStation`)) == 1) G0_ShowLoadingAndReload("Station");     //SaveSystem.update();
         });

         const zoomStep = 1.2; //>1 = più forte

         //PULSANTE ZOOM +
         MapHUD.setButtonCallback(1, () => {
            MicEnginereturn.OrbitControl.setDollyTarget(MicEnginereturn.OrbitControl.getDistance() - MicEnginereturn.OrbitControl.getDistance() * 0.3);
         });

         //PULSANTE ZOOM -
         MapHUD.setButtonCallback(2, () => {
            MicEnginereturn.OrbitControl.setDollyTarget(MicEnginereturn.OrbitControl.getDistance() + MicEnginereturn.OrbitControl.getDistance() * 0.3);
         });

         MapHUD.render();
         //#endregion

         /*------------------------------------------------RAGGIO AUTONOMIA----------------------------------------------------*/
         //#region
         //CALCOLO DELL'AUTONOMIA DEL CARBURANTE
         VarObjMap.FuelAutonomia = Economy.SpeedUpgrade[2] * (GlobalVar.Fuel / Economy.FuelImp * 10) * 0.00001;
         VarObjMap.FuelTotale = Economy.SpeedUpgrade[2] * (Economy.FuelUpgrade[VarObjMap.UpgradeTank] / Economy.FuelImp * 10) * 0.00001;

         const AutonOrbit = MicEnginereturn.E1_CreateOrbit(
            MicEngineParam.DynamicPlanetMap.Orbite.PlanetOrbitThick * MicEngineParam.DynamicPlanetMap.Zoom[5].OrbitThick,
            0x00ff00,
            VarObjMap.FuelAutonomia * MicEngineParam.DynamicPlanetMap.Parametri.ScalaPos * 1000,
            false);
         UserGroup.add(AutonOrbit);
         const AutonFullOrbit = MicEnginereturn.E1_CreateOrbit(
            MicEngineParam.DynamicPlanetMap.Orbite.PlanetOrbitThick * MicEngineParam.DynamicPlanetMap.Zoom[5].OrbitThick,
            0x0000ff,
            VarObjMap.FuelTotale * MicEngineParam.DynamicPlanetMap.Parametri.ScalaPos * 1000,
            false);
         UserGroup.add(AutonFullOrbit);
         //#endregion

         /*------------------------------------------------STORY----------------------------------------------------*/
         //#region
         if (GlobalVar.Capitolo == 5) {
            //GENERAZIONE DEI CERCHI DEGLI IMPULSI DEL RADAR
            if (GlobalVar.Missione > 0 && GlobalVar.RadarModules > 0) {
               for (let i = 0; i < GlobalVar.Impulsi.length; i++) {
                  const Impulse = MicEnginereturn.E1_CreateOrbit(
                     MicEngineParam.DynamicPlanetMap.Orbite.PlanetOrbitThick * MicEngineParam.DynamicPlanetMap.Zoom[5].OrbitThick,
                     0xff0000, GlobalVar.Impulsi[i].r * MicEngineParam.DynamicPlanetMap.Parametri.ScalaPos,
                     false);
                  Impulse.position.set(
                     GlobalVar.Impulsi[i].x * MicEngineParam.DynamicPlanetMap.Parametri.ScalaPos,
                     0,
                     GlobalVar.Impulsi[i].z * MicEngineParam.DynamicPlanetMap.Parametri.ScalaPos);
                  MicEnginereturn.DynamicPlanetMap.add(Impulse);
               };
            };
         };
         //#endregion


      };
      // startGame().then(() => {
      //    gameReady = true;
      //    MicEnginereturn.VarObject.E3_UpdateProgress(true);
      // });
      startGame().then(async () => {
         gameReady = true;
         MicEnginereturn.VarObject.E3_UpdateProgress(true);
         await MicEnginereturn.DynamicPlanetMap.UpdateTexture();
      });

   };

   //---------------------------------------------PAGINA STAZIONE SPAZIALE HANGAR 1091-----------------------------------------//
   if (GlobalVar.Page == "Station" && GlobalVar.StationType == 4) {
      /*-----------------------------------------------PARAMETRI ENGINE----------------------------------------------------------*/
      MicEngineParam = HangarStationParam;

      /*----------------------------------------------CARICAMENTO ENGINE--------------------------------------------------------*/
      async function startGame() {
         MicEnginereturn = await MicEngine(MicEngineParam, Oggetti, Geometrie, Materiali);
         if (MicEngineParam.Moduli.Debug == true && MicEngineParam.Debug.Return == true) {
            console.log("MicEnginereturn");
            console.log(MicEnginereturn.VarObject.E3_ConsoleLogSimpleObject(MicEnginereturn));
         };
         /*---------------------------------------AUTOMAZIONI SOLAR SYSTEM DELIVERY------------------------------------------------*/
         const ButtonColor = "gray";
         const SelectedButtonColor = "lightblue";
         let DynamicHangarHUD;
         let EditColor1;
         let EditColor2;

         GlobalVar.TotalModules = MicEnginereturn.VarModularShip.Moduli;
         GlobalVar.ShipModules = MicEnginereturn.VarModularShip.NumModules[2];
         GlobalVar.LivingModules = MicEnginereturn.VarModularShip.NumModules[4];
         GlobalVar.ContainerModules = MicEnginereturn.VarModularShip.NumModules[5];
         GlobalVar.ExtractionModules = MicEnginereturn.VarModularShip.NumModules[10];
         GlobalVar.RadarModules = MicEnginereturn.VarModularShip.NumModules[11];

         //ABILITAZIONE FUNZIONI DELL'HANGAR
         if (GlobalVar.MissionCurrent == 0 && GlobalVar.Scient == 0) VarObjectsStation.Active = true;
         else VarObjectsStation.Active = false;

         /*------------------------FUNZIONI STAZIONE HANGAR-----------------------------------*/
         function G1_UpdateTypeModule() {    //AGGIORNA I VALORI DEI MODULI SELEZIONATI
            //TIPO MODULO SELEZIONATO
            VarObjectsStation.TypeModule = MicEnginereturn.VarModularShip.ModuleArray[VarObjectsStation.SelectedModule * 2];
            //TIPO MODULO A SINISTRA DI QUELLO SELEZIONATO
            VarObjectsStation.TypeModuleSx = MicEnginereturn.VarModularShip.ModuleArray[VarObjectsStation.SelectedModule * 2 + 2];
            //TIPO MODULO A SINISTRA DI QUELLO SELEZIONATO
            VarObjectsStation.TypeModuleDx = MicEnginereturn.VarModularShip.ModuleArray[VarObjectsStation.SelectedModule * 2 - 2];
         };
         function G1_UpdateStorage() {        //SALVA NEL LOCAL STORAGE I VALORI DI SOLDI, CARBURANTE, ARIA, ACQUA, CIBO, MUNIZIONI E CANNONE
            SaveSystem.setItem(`Money`, GlobalVar.Money);
            SaveSystem.setItem(`Fuel`, GlobalVar.Fuel);
            SaveSystem.setItem(`Air`, VarObjectsStation.Air);
            SaveSystem.setItem(`Water`, VarObjectsStation.Water);
            SaveSystem.setItem(`Food`, VarObjectsStation.Food);
         };
         function G1_MotorLightsOff() {      //SPEGNIMENTO SCIE MOTORI
            MicEnginereturn.User.Object.children[1].children[MicEnginereturn.User.MotorLights[0].Modulo].children[0].visible = false;
            MicEnginereturn.User.Object.children[1].children[MicEnginereturn.User.MotorLights[0].Modulo].children[1].visible = false;
            MicEnginereturn.User.Object.children[1].children[MicEnginereturn.User.MotorLights[0].Modulo].children[2].visible = false;
         };
         function G1_UpdateEditorPuls() {    //AGGIORNA I PULSANTI: SHIFT MIN PLUS NEW SELL UPGRADE RETURN
            /*---------------------------------------PULSANTI SHIFT-------------------------------------*/
            //NASCONDI O MOSTRA IL PULSANTE SHIFT SX
            if (!VarObjectsStation.TypeModule || VarObjectsStation.TypeModule == 0 || VarObjectsStation.TypeModule == 3 || VarObjectsStation.TypeModule == 6 || VarObjectsStation.TypeModuleSx == 3 || VarObjectsStation.Active == false) {
               DynamicHangarHUD.showButton(6, false);
               DynamicHangarHUD.showImage(3, false);
            }
            else {
               DynamicHangarHUD.showButton(6, true);
               DynamicHangarHUD.showImage(3, true);
            };
            //NASCONDI O MOSTRA IL PULSANTE SHIFT DX
            if (!VarObjectsStation.TypeModule || VarObjectsStation.TypeModule == 0 || VarObjectsStation.TypeModule == 3 || VarObjectsStation.TypeModule == 6 || VarObjectsStation.TypeModuleDx == 0 || VarObjectsStation.Active == false) {
               DynamicHangarHUD.showButton(7, false);
               DynamicHangarHUD.showImage(4, false);
            }
            else {
               DynamicHangarHUD.showButton(7, true);
               DynamicHangarHUD.showImage(4, true);
            };

            /*---------------------------------------PULSANTE MIN-------------------------------------*/
            //CERCA SE ESISTE UN MODULO VUOTO
            let Found = MicEnginereturn.VarModularShip.ModuleArray.find((element) => element == 9);
            if (Found != 9 || VarObjectsStation.Active == false) {
               DynamicHangarHUD.showButton(5, false);
               DynamicHangarHUD.showImage(1, false);
            }
            else {
               DynamicHangarHUD.showButton(5, true);
               DynamicHangarHUD.showImage(1, true);
            };

            /*---------------------------------------PULSANTE PLUS-------------------------------------*/
            if (MicEnginereturn.VarModularShip.Moduli == VarObjectsStation.MaxModuli || VarObjectsStation.Active == false) {
               DynamicHangarHUD.showButton(4, false);
               DynamicHangarHUD.showImage(0, false);
            }
            else {
               DynamicHangarHUD.showButton(4, true);
               DynamicHangarHUD.showImage(0, true);
            };

            /*---------------------------------------PULSANTE NEW-------------------------------------*/
            if (VarObjectsStation.TypeModule != 9 || VarObjectsStation.Active == false) {
               DynamicHangarHUD.showButton(9, false);
               DynamicHangarHUD.showImage(2, false);
            }
            else {
               DynamicHangarHUD.showButton(9, true);
               DynamicHangarHUD.showImage(2, true);
            };

            /*---------------------------------------PULSANTE SELL-------------------------------------*/
            if (VarObjectsStation.Active == true) {
               //0 - COCKPIT
               if (VarObjectsStation.TypeModule == 0 && GlobalVar.UpgradeCockpit > 0) {
                  DynamicHangarHUD.showButton(8, true);    //PULSANTE SELL
                  DynamicHangarHUD.setButtonText(8, `${Testi.Station.Sell[GlobalVar.Language]} ${Oggetti.Spaceship.Modular[VarObjectsStation.TypeModule].Money[GlobalVar.UpgradeCockpit] * Economy.SellCoeff}`);
               }
               //2 - NAVE
               else if (VarObjectsStation.TypeModule == 2) {
                  DynamicHangarHUD.showButton(8, true);    //PULSANTE SELL
                  DynamicHangarHUD.setButtonText(8, `${Testi.Station.Sell[GlobalVar.Language]} ${Oggetti.Spaceship.Modular[VarObjectsStation.TypeModule].Money[0] * Economy.SellCoeff}`);
               }
               //3 - SUPPORTO SERBATOI
               else if (VarObjectsStation.TypeModule == 3 && GlobalVar.UpgradeTank > 0) {
                  DynamicHangarHUD.showButton(8, true);    //PULSANTE SELL
                  DynamicHangarHUD.setButtonText(8, `${Testi.Station.Sell[GlobalVar.Language]} ${Oggetti.Spaceship.Modular[VarObjectsStation.TypeModule].Money[GlobalVar.UpgradeTank] * Economy.SellCoeff}`);
               }
               //4 - MODULO ABITATIVO
               else if (VarObjectsStation.TypeModule == 4) {
                  DynamicHangarHUD.showButton(8, true);    //PULSANTE SELL
                  DynamicHangarHUD.setButtonText(8, `${Testi.Station.Sell[GlobalVar.Language]} ${Oggetti.Spaceship.Modular[VarObjectsStation.TypeModule].Money[0] * Economy.SellCoeff}`);
               }
               //5 - SUPPORTO CONTAINER
               else if (VarObjectsStation.TypeModule == 5) {
                  DynamicHangarHUD.showButton(8, true);    //PULSANTE SELL
                  DynamicHangarHUD.setButtonText(8, `${Testi.Station.Sell[GlobalVar.Language]} ${Oggetti.Spaceship.Modular[VarObjectsStation.TypeModule].Money[0] * Economy.SellCoeff}`);
               }
               //6 - SUPPORTO MOTORI
               else if (VarObjectsStation.TypeModule == 6 && GlobalVar.UpgradeMotor > 0) {
                  DynamicHangarHUD.showButton(8, true);    //PULSANTE SELL
                  DynamicHangarHUD.setButtonText(8, `${Testi.Station.Sell[GlobalVar.Language]} ${Oggetti.Spaceship.Modular[VarObjectsStation.TypeModule].Money[GlobalVar.UpgradeMotor] * Economy.SellCoeff}`);
               }
               //10 - EXTRACTION
               else if (VarObjectsStation.TypeModule == 10) {
                  DynamicHangarHUD.showButton(8, true);    //PULSANTE SELL
                  DynamicHangarHUD.setButtonText(8, `${Testi.Station.Sell[GlobalVar.Language]} ${Oggetti.Spaceship.Modular[VarObjectsStation.TypeModule].Money[0] * Economy.SellCoeff}`);
               }
               //11 - RADAR
               else if (VarObjectsStation.TypeModule == 11) {
                  DynamicHangarHUD.showButton(8, true);    //PULSANTE SELL
                  DynamicHangarHUD.setButtonText(8, `${Testi.Station.Sell[GlobalVar.Language]} ${Oggetti.Spaceship.Modular[VarObjectsStation.TypeModule].Money[0] * Economy.SellCoeff}`);
               }
               else DynamicHangarHUD.showButton(8, false);
            }
            else DynamicHangarHUD.showButton(8, false);

            /*--------------------------------------PULSANTE UPGRADE----------------------------------*/
            if (VarObjectsStation.TypeModule == null) DynamicHangarHUD.showButton(11, false);
            else if (VarObjectsStation.TypeModule == 0 && GlobalVar.UpgradeCockpit < 2) DynamicHangarHUD.showButton(11, true);//0 - COCKPIT
            else if (VarObjectsStation.TypeModule == 2) DynamicHangarHUD.showButton(11, false);                              //2 - NAVE
            else if (VarObjectsStation.TypeModule == 3 && GlobalVar.UpgradeTank < 2) DynamicHangarHUD.showButton(11, true);//3 - SUPPORTO SERBATOI
            else if (VarObjectsStation.TypeModule == 4) DynamicHangarHUD.showButton(11, false);                              //4 - MODULO ABITATIVO
            else if (VarObjectsStation.TypeModule == 5) DynamicHangarHUD.showButton(11, false);                              //5 - SUPPORTO CONTAINER
            else if (VarObjectsStation.TypeModule == 6 && GlobalVar.UpgradeMotor < 2) DynamicHangarHUD.showButton(11, true);//6 - SUPPORTO MOTORI
            else if (VarObjectsStation.TypeModule == 7) DynamicHangarHUD.showButton(11, false);                             //7 - LUCI MOTORI
            else if (VarObjectsStation.TypeModule == 9) DynamicHangarHUD.showButton(11, false);                              //9 - VUOTO
            else if (VarObjectsStation.TypeModule == 10) DynamicHangarHUD.showButton(11, false);                            //10 - EXTRACTION
            else DynamicHangarHUD.showButton(11, false);

            /*--------------------------------------PULSANTE RETURN----------------------------------*/
            if (VarObjectsStation.TravelCrew >= VarObjectsStation.Crew) StaticStationHUD.showButton(2, true);
            else StaticStationHUD.showButton(2, false);

            /*----------------------------------------PULSANTE BUY---------------------------------------*/
            DynamicHangarHUD.showButton(1, true);

            if (GlobalVar.MoneyBuy <= 0) DynamicHangarHUD.setButtonText(1, `${Testi.Station.Buy[GlobalVar.Language]}
            ${GlobalVar.MoneyBuy}${Economy.MoneySymbol}`);
            if (GlobalVar.MoneyBuy > 0) DynamicHangarHUD.setButtonText(1, `${Testi.Station.Sell[GlobalVar.Language]}
            ${GlobalVar.MoneyBuy}${Economy.MoneySymbol}`);

            StaticStationHUD.render();
         };
         function G1_StyleButtonShip(Area, Elem, PosTop, DimX, DimY, Color) {
            Elem.style.display = "block";
            Elem.style.position = "absolute";
            Elem.style.top = PosTop;
            Elem.style.width = DimX;
            Elem.style.height = DimY;
            Elem.style.backgroundColor = Color;
            Elem.style.boxSizing = "border-box";
            Elem.style.border = "2px solid white";

            Area.appendChild(Elem);
         };
         function G1_CreateButtonShip(Area, Num, Array) {     //CREA I PULSANTI MINIATURE PARTI NAVE SPAZIALE
            //CANCELLA
            while (Area.firstChild) Area.removeChild(Area.lastChild);
            //RICREA
            for (let i = 0; i < Num; i++) {
               //CABINA DI PILOTAGGIO
               if (i == 0) {
                  const Puls0 = document.createElement('div');
                  G1_StyleButtonShip(Area, Puls0, "25%", "50px", "50%", ButtonColor);
                  Puls0.style.right = "0px";
                  Puls0.style.borderRadius = "10px 40px 40px 10px";
               };

               //SE IL NUMERO È COMPRESO TRA LA CABINA DI PILOTAGGIO E IL SERBATOIO ED È PARI
               if (i > 1 && i < Num - 4 && i % 2 == 0) {
                  //2 - NAVE
                  if (Array[i] == 2) {
                     const Puls = document.createElement('div');
                     G1_StyleButtonShip(Area, Puls, "25%", "50px", "50%", ButtonColor);
                     Puls.style.right = `${(i - 1) / 2 * 50 + 25}px`;
                     Puls.style.borderRadius = "10px 10px 10px 10px";
                  };
                  //4 - MODULO ABITATIVO
                  if (Array[i] == 4) {
                     const Puls = document.createElement('div');
                     G1_StyleButtonShip(Area, Puls, "0%", "50px", "100%", ButtonColor);
                     Puls.style.right = `${(i - 1) / 2 * 50 + 25}px`;
                     Puls.style.borderRadius = "50%";
                  };
                  //5 - SUPPORTO CONTAINER
                  if (Array[i] == 5) {
                     const Puls = document.createElement('div');
                     G1_StyleButtonShip(Area, Puls, "0%", "50px", "100%", ButtonColor);
                     Puls.style.right = `${(i - 1) / 2 * 50 + 25}px`;
                     Puls.style.borderRadius = "10px 10px 10px 10px";
                  };
                  //9 - MODULO VUOTO
                  if (Array[i] == 9) {
                     const Puls = document.createElement('div');
                     G1_StyleButtonShip(Area, Puls, "37%", "50px", "25%", ButtonColor);
                     Puls.style.right = `${(i - 1) / 2 * 50 + 25}px`;
                     Puls.style.borderRadius = "10px 10px 10px 10px";
                  };
                  //10 - MODULO ESTRAZIONE
                  if (Array[i] == 10) {
                     const Puls1 = document.createElement('div');
                     G1_StyleButtonShip(Area, Puls1, "0%", "50px", "100%", ButtonColor);
                     Puls1.style.right = `${(i - 1) / 2 * 50 + 25}px`;
                     Puls1.style.borderRadius = "10px 10px 10px 10px";

                     const Puls1A = document.createElement('div');
                     G1_StyleButtonShip(Puls1, Puls1A, "0%", "100%", "33%", "transparent");
                     Puls1A.style.right = `0%`;
                     Puls1A.style.borderRadius = "10px 10px 10px 10px";

                     const Puls1B = document.createElement('div');
                     G1_StyleButtonShip(Puls1, Puls1B, "67%", "100%", "33%", "transparent");
                     Puls1B.style.right = `0%`;
                     Puls1B.style.borderRadius = "10px 10px 10px 10px";
                  };
                  //11 - MODULO RADAR
                  if (Array[i] == 11) {
                     const Puls1 = document.createElement('div');
                     G1_StyleButtonShip(Area, Puls1, "0%", "50px", "100%", ButtonColor);
                     Puls1.style.right = `${(i - 1) / 2 * 50 + 25}px`;
                     Puls1.style.borderRadius = "10px 10px 10px 10px";

                     const Puls1A = document.createElement('div');
                     G1_StyleButtonShip(Puls1, Puls1A, "0%", "50%", "100%", "transparent");
                     Puls1A.style.right = `25%`;
                     Puls1A.style.borderRadius = "10px 10px 10px 10px";

                     const Puls1B = document.createElement('div');
                     G1_StyleButtonShip(Puls1, Puls1B, "40%", "20%", "20%", "transparent");
                     Puls1B.style.right = `40%`;
                     Puls1B.style.borderRadius = "10px 10px 10px 10px";
                  };
               };

               //SERBATOI E MOTORI
               if (i > Num - 4 && i % 2 == 0) {
                  //SERBATOI
                  const Puls1 = document.createElement('div');
                  G1_StyleButtonShip(Area, Puls1, "25%", "50px", "50%", ButtonColor);
                  Puls1.style.right = `${Num / 2 * 50 - 100}px`;
                  Puls1.style.borderRadius = "10px 10px 10px 10px";

                  const Puls1A = document.createElement('div');
                  G1_StyleButtonShip(Puls1, Puls1A, "25%", "100%", "50%", "transparent");
                  Puls1A.style.right = `0%`;
                  Puls1A.style.borderRadius = "10px 10px 10px 10px";

                  //MOTORI
                  const Puls2 = document.createElement('div');
                  G1_StyleButtonShip(Area, Puls2, "20%", "50px", "60%", ButtonColor);
                  Puls2.style.right = `${Num / 2 * 50 - 50}px`;
                  Puls2.style.borderRadius = "0px 30px 30px 0px";
               };
            };
         };
         function G1_ResetShipButton(Elem, Color) {
            for (let i = 0; i < Elem.children.length; i++) {
               Elem.children[i].style.backgroundColor = Color;
            };
            if (Elem.children[VarObjectsStation.SelectedModule]) Elem.children[VarObjectsStation.SelectedModule].style.backgroundColor = SelectedButtonColor;
         };
         function G1_TextUpgradeParts(Type) {      //TESTO PARTI SCHERMATA UPGRADE E VERIFICA SE SI HANNO SOLDI SUFFICIENTI PER L'UPGRADE
            let Upgrade;
            let UpgradeText;
            if (Type == 0) {
               Upgrade = GlobalVar.UpgradeCockpit;
               UpgradeText = "Cockpit";
            };
            if (Type == 3) {
               Upgrade = GlobalVar.UpgradeTank;
               UpgradeText = "Tank";
            };
            if (Type == 6) {
               Upgrade = GlobalVar.UpgradeMotor;
               UpgradeText = "Motor";
            };
            // UpgradeArea.children[0].src = `../../SpaceGame/texture/Parts/${UpgradeText}${Upgrade + 1}_200.png`;                     //IMMAGINE ATTUALE
            // UpgradeArea.children[1].src = `../../SpaceGame/texture/Parts/${UpgradeText}${Upgrade + 2}_200.png`;                     //IMMAGINE UPGRADE
            UpgradeArea.children[0].src = `SpaceGame/texture/Parts/${UpgradeText}${Upgrade + 1}_200.png`;                     //IMMAGINE ATTUALE
            UpgradeArea.children[1].src = `SpaceGame/texture/Parts/${UpgradeText}${Upgrade + 2}_200.png`;                     //IMMAGINE UPGRADE
            UpgradeArea.children[2].innerText = Oggetti.Spaceship.Modular[Type].Description[Upgrade][GlobalVar.Language];           //DESCRIZIONE
            UpgradeArea.children[3].innerText = Oggetti.Spaceship.Modular[Type].Description[Upgrade + 1][GlobalVar.Language];       //DESCRIZIONE
            UpgradeArea.children[4].innerText = Oggetti.Spaceship.Modular[Type].Features[Upgrade][GlobalVar.Language];              //DESCRIZIONE
            UpgradeArea.children[5].innerText = Oggetti.Spaceship.Modular[Type].Features[Upgrade + 1][GlobalVar.Language];          //DESCRIZIONE
            UpgradeArea.children[6].innerText = `${Oggetti.Spaceship.Modular[Type].Money[Upgrade + 1]}${Economy.MoneySymbol}`;   //COSTO

            //SE I SOLDI RIMANENTI TENUTO CONTO DELLA SPESA SONO SUFFICIENTI
            if (GlobalVar.Money + GlobalVar.MoneyBuy >= Oggetti.Spaceship.Modular[Type].Money[Upgrade + 1]) {
               UpgradeArea.children[6].style.color = "white";                   //COSTO
               UpgradeArea.children[1].style.filter = "none";                   //IMMAGINE UPGRADE
            }
            //SE NON SI HANNO SOLDI SUFFICIENTI
            else {
               UpgradeArea.children[6].style.color = "red";                     //COSTO
               UpgradeArea.children[1].style.filter = "grayscale(100%)";        //IMMAGINE UPGRADE
            };
         };
         function G1_UpdateValues() {           //AGGIORNAMENTO VARIABILI E BARRE
            /*---------------------------------------------------AGGIORNAMENTO VARIABILI----------------------------------------------------------*/
            /*-------------------------------------MODIFICA MODULO SHIP (2)---------------------------------------*/
            //AGGIORNA I VALORI MASSIMI DI ARIA, ACQUA E CIBO
            VarObjectsStation.AirMax = Economy.AirMax + (MicEnginereturn.VarModularShip.NumModules[2] * Economy.ShipModuleAir);
            VarObjectsStation.WaterMax = Economy.WaterMax + (MicEnginereturn.VarModularShip.NumModules[2] * Economy.ShipModuleWater);
            VarObjectsStation.FoodMax = Economy.FoodMax + (MicEnginereturn.VarModularShip.NumModules[2] * Economy.ShipModuleFood);
            //AGGIORNA I VALORI DI ARIA, ACQUA E CIBO SE IL VALORE MASSIMO SI RIDUCE
            if (VarObjectsStation.Air > VarObjectsStation.AirMax) VarObjectsStation.Air = VarObjectsStation.AirMax;
            if (VarObjectsStation.Water > VarObjectsStation.WaterMax) VarObjectsStation.Water = VarObjectsStation.WaterMax;
            if (VarObjectsStation.Food > VarObjectsStation.FoodMax) VarObjectsStation.Food = VarObjectsStation.FoodMax;
            //AGGIORNA LA QUANTITÀ DI MEMBRI DI EQUIPAGGIO OSPITABILI PER I VIAGGI NORMALI
            VarObjectsStation.TravelCrew = 1 + MicEnginereturn.VarModularShip.NumModules[2] * 2;

            /*---------------------MODIFICA MODULO CONTAINER (5), MODULO ESTRAZIONE (10), MODULO RADAR (11)--------------------------*/
            //AGGIORNA LA QUANTITÀ DI MEMBRI DI EQUIPAGGIO ATTUALI
            GlobalVar.ExtractionModules = MicEnginereturn.VarModularShip.NumModules[10];
            GlobalVar.RadarModules = MicEnginereturn.VarModularShip.NumModules[11];
            VarObjectsStation.Crew = 1 + MicEnginereturn.VarModularShip.NumModules[10] + MicEnginereturn.VarModularShip.NumModules[5] + MicEnginereturn.VarModularShip.NumModules[11];

            /*-------------------------------------------UPGRADE TANK---------------------------------------------*/
            //AGGIORNA IL SERBATOIO SE IL VALORE MASSIMO SI RIDUCE
            if (GlobalVar.Fuel > Economy.FuelUpgrade[GlobalVar.UpgradeTank]) GlobalVar.Fuel = Economy.FuelUpgrade[GlobalVar.UpgradeTank];

            /*-----------------------------------------------------AGGIORNAMENTO BARRE------------------------------------------------------------*/
            /*-------------------------------------MODIFICA MODULO SHIP (2)---------------------------------------*/
            //BARRA ARIA
            DynamicHangarHUD.setBarValue(1, VarObjectsStation.Air / VarObjectsStation.AirMax);
            DynamicHangarHUD.setBarText(1, `${(VarObjectsStation.Air).toFixed(0)}/${VarObjectsStation.AirMax}`);
            //BARRA ACQUA
            DynamicHangarHUD.setBarValue(2, VarObjectsStation.Water / VarObjectsStation.WaterMax);
            DynamicHangarHUD.setBarText(2, `${(VarObjectsStation.Water).toFixed(0)}/${VarObjectsStation.WaterMax}`);
            //BARRA CIBO
            DynamicHangarHUD.setBarValue(3, VarObjectsStation.Food / VarObjectsStation.FoodMax);
            DynamicHangarHUD.setBarText(3, `${(VarObjectsStation.Food).toFixed(0)}/${VarObjectsStation.FoodMax}`);
            //BARRA POSTI EQUIPAGGIO VIAGGI CORTI
            DynamicHangarHUD.setBarValue(7, VarObjectsStation.Crew / VarObjectsStation.TravelCrew);
            DynamicHangarHUD.setBarText(7, `${VarObjectsStation.Crew}/${VarObjectsStation.TravelCrew}`);
            if (VarObjectsStation.TravelCrew >= VarObjectsStation.Crew) DynamicHangarHUD.setBarColor(7, Colors.ActivePuls, Colors.BarFill);
            else DynamicHangarHUD.setBarColor(7, Colors.ActivePuls, Colors.RedBar);

            /*-------------------------------------MODIFICA MODULO LIVING (4)-------------------------------------*/
            //AGGIORNA LA QUANTITÀ DI MEMBRI DI EQUIPAGGIO OSPITABILI PER I VIAGGI LUNGHI
            VarObjectsStation.LongTravelCrew = MicEnginereturn.VarModularShip.NumModules[4] * 2;
            //BARRA POSTI EQUIPAGGIO VIAGGI LUNGHI
            if (VarObjectsStation.LongTravelCrew > 0) DynamicHangarHUD.setBarValue(8, VarObjectsStation.Crew / VarObjectsStation.LongTravelCrew);
            else DynamicHangarHUD.setBarValue(8, 0);
            DynamicHangarHUD.setBarText(8, `${VarObjectsStation.Crew}/${VarObjectsStation.LongTravelCrew}`);

            if (VarObjectsStation.LongTravelCrew >= VarObjectsStation.Crew) DynamicHangarHUD.setBarColor(8, Colors.ActivePuls, Colors.BarFill);
            else DynamicHangarHUD.setBarColor(8, Colors.ActivePuls, Colors.RedBar);

            /*------------------------------------MODIFICA MODULO CONTAINER (5)-----------------------------------*/
            //BARRA CARICO MASSIMO
            DynamicHangarHUD.setBarValue(5, 1);
            DynamicHangarHUD.setBarText(5, `${MicEnginereturn.VarModularShip.NumModules[5] * Economy.Load}kg`);

            /*-------------------------------------------UPGRADE TANK---------------------------------------------*/
            //BARRA CARBURANTE
            DynamicHangarHUD.setBarValue(0, GlobalVar.Fuel / Economy.FuelUpgrade[GlobalVar.UpgradeTank]);
            DynamicHangarHUD.setBarText(0, `${(GlobalVar.Fuel).toFixed(0)}/${Economy.FuelUpgrade[GlobalVar.UpgradeTank]}`);

            /*-------------------------------------------UPGRADE MOTOR--------------------------------------------*/
            //BARRA VELOCITÀ MASSIMA
            DynamicHangarHUD.setBarValue(4, 1);
            DynamicHangarHUD.setBarText(4, MicEnginereturn.Math.DisplaySpeed(Economy.SpeedUpgrade[GlobalVar.UpgradeMotor] * 10));

            //---------------------------------------BARRA MEMBRI EQUIPAGGIO ATTUALI-------------------------------------//
            DynamicHangarHUD.setBarValue(6, VarObjectsStation.Crew / VarObjectsStation.MaxCrewMember);
            DynamicHangarHUD.setBarText(6, `${VarObjectsStation.Crew}`);

            DynamicHangarHUD.render();
         };
         function G1_CSSPart(Parent, Element, Type, Width, Height) {    //AGGIUNTA OGGETTI COMPRABILI
            Element.style.display = "block";
            Element.style.position = Type;
            Element.style.width = Width;
            Element.style.height = Height;
            Element.style.float = "left";
            //TESTO
            Element.style.fontSize = "medium";
            Element.style.color = "#FFFFFF";

            Parent.appendChild(Element);
         };
         /*MOSTRA UN NPC CHE FORNISCE INFORMAZIONI SUI PULSANTI DELL'HANGAR*/
         function G1_HangarAssistant(Num, Function) {
            MicEnginereturn.VarObject.E3_DisplayNPCDoubleButton({
               //GENERICI
               Font: 14,                                             //FONT IN PIXEL
               PosX: -200,                                            //POSIZIONE X (POSITIVA=SINISTRA, NEGATIVA=DESTRA)
               PosY: 0,                                              //POSIZIONE Y (SOLO TOP)
               zIndex: "20",
               //IMMAGINE
               LargImage: 150,                                       //LARGHEZZA IMMAGINE
               AtImage: 100,                                         //ALTEZZA IMMAGINE
               Image: NPC.Radio.Immagini[GlobalVar.StationType - 1][GlobalVar.GenderNPC],               //IMMAGINE
               //TESTO
               PositionText: "Down",                               //POSIZIONE DEL TESTO RELATIVA ALL'IMMAGINE "Down" "Right "Left
               LargText: 250,
               AltText: 150,                                          //ALTEZZA TESTO
               ColorText: Colors.NPCColor,                             //COLORE SFONDO TESTO
               ColorFontText: "#ffffffff",                         //COLORE FONT TESTO
               Text: NPC.Hangar.Testi[Num][GlobalVar.Language],               //TESTO
               //PULSANTI
               AltPuls: 40,                   //ALTEZZA PULSANTI
               ColorPuls: Colors.NPCColor,                             //COLORE SFONDO PULSANTI
               ColorFontPuls: "#ffffffff",                         //COLORE FONT PULSANTI
               ColorBorderPuls: Colors.NPCBorderColor,                      //COLORE BORDO PULSANTI
               Text1: "OK",                   //TESTO PULSANTE 1
               Text2: "NO",                   //TESTO PULSANTE 2
            },
               function () { Function() },
               function () { });
         };
         function G1_HangarAssistantBar(Num, Function) {
            MicEnginereturn.VarObject.E3_DisplayNPCSingleButton({
               //GENERICI
               Font: 14,                                             //FONT IN PIXEL
               PosX: -200,                                            //POSIZIONE X (POSITIVA=SINISTRA, NEGATIVA=DESTRA)
               PosY: 0,                                              //POSIZIONE Y (SOLO TOP)
               zIndex: "20",
               //IMMAGINE
               LargImage: 150,                                       //LARGHEZZA IMMAGINE
               AtImage: 100,                                         //ALTEZZA IMMAGINE
               Image: NPC.Radio.Immagini[GlobalVar.StationType - 1][GlobalVar.GenderNPC],               //IMMAGINE
               //TESTO
               PositionText: "Down",                               //POSIZIONE DEL TESTO RELATIVA ALL'IMMAGINE "Down" "Right "Left
               LargText: 250,
               AltText: 150,                                          //ALTEZZA TESTO
               ColorText: Colors.NPCColor,                             //COLORE SFONDO TESTO
               ColorFontText: "#ffffffff",                         //COLORE FONT TESTO
               Text: NPC.Hangar.Testi[Num][GlobalVar.Language],               //TESTO
               //PULSANTE
               AltPuls: 40,                   //ALTEZZA PULSANTI
               ColorPuls: Colors.NPCColor,                             //COLORE SFONDO PULSANTI
               ColorFontPuls: "#ffffffff",                         //COLORE FONT PULSANTI
               ColorBorderPuls: Colors.NPCBorderColor,                      //COLORE BORDO PULSANTI
               Text1: "OK",                   //TESTO PULSANTE 1
            },
               function () { Function() });
         };
         function G1_UpdatePartsArea() {  //VERIFICA SE I MODULI DELLA NAVE SONO COMPRABILI
            let Num = -1;     //VARIABILE PER IDENTIFICARE I MODULI COMPRABILI ALL'INTERNO DI PARTSAREA
            for (let i = 0; i < Oggetti.Spaceship.Modular.length; i++) {
               //SE IL MODULO È COMPRABILE MODIFICA
               if (Oggetti.Spaceship.Modular[i].Comprabile == true) {
                  Num++;

                  //SE I SOLDI RIMANENTI TENUTO CONTO DELLA SPESA SONO SUFFICIENTI
                  if (GlobalVar.Money + GlobalVar.MoneyBuy >= Oggetti.Spaceship.Modular[i].Money[0]) {
                     //SE IL MODULO È QUELLO DI ESTTRAZIONE
                     if (i == 10) {
                        //SE NON SI POSSIEDE GIÀ QUEL MODULO
                        if (GlobalVar.ExtractionModules == 0) {
                           PartsArea.children[Num].children[3].style.color = "white";                   //TEXT2
                           PartsArea.children[Num].children[0].style.filter = "none";                   //PART
                        }
                        //SE  LO SI POSSIEDE GIÀ
                        else {
                           PartsArea.children[Num].children[3].style.color = "red";                     //TEXT2
                           PartsArea.children[Num].children[0].style.filter = "grayscale(100%)";        //PART
                        };
                     }
                     //SE IL MODULO È QUELLO DI ESTRAZIONE
                     else if (i == 11) {
                        //SE NON SI POSSIEDE GIÀ QUEL MODULO
                        if (GlobalVar.RadarModules == 0) {
                           PartsArea.children[Num].children[3].style.color = "white";                   //TEXT2
                           PartsArea.children[Num].children[0].style.filter = "none";                   //PART
                        }
                        //SE  LO SI POSSIEDE GIÀ
                        else {
                           PartsArea.children[Num].children[3].style.color = "red";                     //TEXT2
                           PartsArea.children[Num].children[0].style.filter = "grayscale(100%)";        //PART
                        };
                     }
                     //TUTTI GLI ALTRI MODULI
                     else {
                        PartsArea.children[Num].children[3].style.color = "white";                   //TEXT2
                        PartsArea.children[Num].children[0].style.filter = "none";                   //PART
                     };

                  }
                  //SE NON SI HANNO SOLDI SUFFICIENTI
                  else {
                     PartsArea.children[Num].children[3].style.color = "red";                     //TEXT2
                     PartsArea.children[Num].children[0].style.filter = "grayscale(100%)";        //PART
                  };
               };
            };
         };
         function G1_BuyModule(Num) {     //COMPRA UN MODULO NELLA PARTS AREA
            ModifyArray.Replace(VarObjectsStation.SelectedModule * 2, [Num, 1]);
            G2_CommonFunctionsButton();        //FUNZIONE DI RAGGRUPPAMENTO FUNZIONI COMUNI DEI PULSANTI
            G1_MotorLightsOff();
            DynamicHangarHUD.showButton(10, false);           //DISABILITA IL PULSANTE CANCEL PARTS AREA
            DynamicHangarHUD.showButton(13, false);           //DISABILITA IL PULSANTE OK PARTS AREA
            DynamicHangarHUD.showButton(14, false);           //DISABILITA IL PULSANTE DX PARTS AREA
            DynamicHangarHUD.showButton(15, false);           //DISABILITA IL PULSANTE DX PARTS AREA
            DynamicHangarHUD.showImage(13, false);     //13 SCROLL DX
            DynamicHangarHUD.showImage(14, false);     //14 SCROLL SX
            //AGGIORNAMENTO PULSANTI NAVE
            VarObjectsStation.TypeModule = Num;
            G1_ResetShipButton(ShipPulsArea, ButtonColor);
            //ECONOMY
            GlobalVar.MoneyBuy -= Oggetti.Spaceship.Modular[Num].Money[0];
            //BuyText.innerText = `${GlobalVar.MoneyBuy}${Economy.MoneySymbol}`;
            G1_UpdateValues();      //AGGIORNA I VALORI MASSIMI DI ARIA, ACQUA, CIBO E I VALORI DEI MODULI SPECIALI
            G1_UpdateEditorPuls();           //AGGIORNA I PULSANTI: SHIFT MIN PLUS NEW SELL UPGRADE
            G0_UpdateShipUpgrade(false);
            VarObjectsStation.ShopPart = false;
            PartsArea.style.display = "none";            //DISABILITA LA PARTS AREA
            DynamicHangarHUD.render();
         };

         //OGGETTO DI MODIFICA ARRAY
         const ModifyArray = MicEnginereturn.Math.E3_ModifyArray(MicEnginereturn.VarModularShip.ModuleArray);

         /*----------------------------------------------AVVIO DELLA PAGINA---------------------------------------------------------*/
         //#region
         SaveSystem.setItem(`SpaceStation`, 1);       //FLAG DI PAGINA

         //CARICAMENTO VALORI DI UPGRADE DAL LOCAL STORAGE
         GlobalVar.UpgradeCockpit = Number(SaveSystem.getItem(`UpgradeCockpit`));
         GlobalVar.UpgradeTank = Number(SaveSystem.getItem(`UpgradeTank`));
         GlobalVar.UpgradeMotor = Number(SaveSystem.getItem(`UpgradeMotor`));

         //DISTANZE PIANETI, LUNE E SUB-LUNE DAL LOCAL STORAGE CALCOLATE NEL GIOCO
         for (let i = 0; i < GlobalVar.IndDistNum; i++) {
            VarObjectsStation.IndDist.push(Number(SaveSystem.getItem(`IndDist${i}`)));
         };
         for (let i = 0; i < GlobalVar.IndMoonDistNum; i++) {
            VarObjectsStation.IndMoonDist.push(Number(SaveSystem.getItem(`IndMoonDist${i}`)));
         };
         for (let i = 0; i < GlobalVar.IndSubMoonDistNum; i++) {
            VarObjectsStation.IndSubMoonDist.push(Number(SaveSystem.getItem(`IndSubMoonDist${i}`)));
         };

         //CARICAMENTO MISSIONI DA SESSION STORAGE SE PRESENTI
         G0_LoadMissions();

         //NPC DI BENVENUTO
         setTimeout(() => {
            //MESSAGGIO NORMALE
            if (VarObjectsStation.Active == true) {
               //MESSAGGIO ALTERNATIVO IN CASO DI TUTORIAL

               if (VarObjectsStation.Tutorial < 28) VarObject.NPCTutorial = MicEnginereturn.VarObject.E3_DisplayNPCSingleButton({
                  //GENERICI
                  Font: 14,                                                                    //FONT IN PIXEL
                  PosX: 50,                                                //POSIZIONE X
                  PosY: 0,                                                                     //POSIZIONE Y
                  zIndex: "20",
                  //IMMAGINE
                  LargImage: 150,                                                              //LARGHEZZA IMMAGINE
                  AtImage: 100,                                                                //ALTEZZA IMMAGINE
                  Image: NPC.Radio.Immagini[GlobalVar.StationType - 1][GlobalVar.GenderNPC],               //IMMAGINE
                  //TESTO
                  PositionText: "Side",                               //POSIZIONE DEL TESTO RELATIVA ALL'IMMAGINE "Down" "Side
                  LargText: 400,
                  AltText: 150,                                                                //ALTEZZA TESTO
                  ColorText: Colors.NPCColor,                                                  //COLORE SFONDO TESTO
                  ColorFontText: "#ffffffff",                                                //COLORE FONT TESTO
                  Text: NPC.Welcome.Testi[10][GlobalVar.Language],               //TESTO
                  //PULSANTE
                  AltPuls: 40,                   //ALTEZZA PULSANTI
                  ColorPuls: Colors.NPCColor,                             //COLORE SFONDO PULSANTI
                  ColorFontPuls: "#ffffffff",                         //COLORE FONT PULSANTI
                  ColorBorderPuls: "#ffffffff",                      //COLORE BORDO PULSANTI
                  Text1: `${NPC.Click[GlobalVar.Language]}`,     //TESTO PULSANTE 1
               },
                  function () { });
               else G0_WelcomeOnStation(400);
            }
            //MESSAGGIO ALTERNATIVO IN CASO DI MISSIONE ATTIVA O PASSEGGERI PRESENTI
            else MicEnginereturn.VarObject.E3_DisplayNPC({
               //GENERICI
               Font: 14,                                             //FONT IN PIXEL
               PosX: 110,                                            //POSIZIONE X
               PosY: 0,                                              //POSIZIONE Y
               zIndex: "20",
               //IMMAGINE
               LargImage: 150,                                       //LARGHEZZA IMMAGINE
               AtImage: 100,                                         //ALTEZZA IMMAGINE
               Image: NPC.Radio.Immagini[GlobalVar.StationType - 1][GlobalVar.GenderNPC],               //IMMAGINE
               //TESTO
               PositionText: "Side",                               //POSIZIONE DEL TESTO RELATIVA ALL'IMMAGINE "Down" "Side"
               LargText: 400,
               AltText: 90,                                          //ALTEZZA TESTO
               ColorText: Colors.NPCColor,                             //COLORE SFONDO TESTO
               ColorFontText: "#ffffffff",                         //COLORE FONT TESTO
               Text: NPC.Welcome.Testi[8][GlobalVar.Language + 1],               //TESTO
               //TESTO CONTINUA
               Text1: `${NPC.Click[GlobalVar.Language]}`,                      //TESTO CONTINUA
               Time: NPC.Welcome.Testi[8][0]                           //TEMPO
            },
               function () { });             //FUNZIONE
         }, 1000);

         //#endregion

         /*---------------------------------------------------TITOLO (GAME)---------------------------------------------------------------*/
         G0_TitleStation();

         //--------------------------PULSANTI STATICI COMUNI A TUTTE LE STAZIONI (MENU, MAPPA RETURN)---------------------------------------//
         //#region
         const StaticStationHUD = G0_GenerateStaticStationHUD({
            Menu: function () {
               G1_UpdateStorage();//SALVA NEL LOCAL STORAGE I VALORI DI SOLDI, CARBURANTE, ARIA, ACQUA, CIBO, CANNONE E SE CI SIAMO LA VARIABILE TUTORIAL
               G0_ExtiPageSaveMissions("Home");
            },
            Mappa: function () {
               if (VarObjectsStation.Help == false) {
                  G1_UpdateStorage();//SALVA NEL LOCAL STORAGE I VALORI DI SOLDI, CARBURANTE, ARIA, ACQUA, CIBO, CANNONE E SE CI SIAMO LA VARIABILE TUTORIAL
                  G0_ExtiPageSaveMissions("Map");
               }
               else G1_HangarAssistant(9, function () {
                  G1_UpdateStorage();//SALVA NEL LOCAL STORAGE I VALORI DI SOLDI, CARBURANTE, ARIA, ACQUA, CIBO, CANNONE E SE CI SIAMO LA VARIABILE TUTORIAL
                  G0_ExtiPageSaveMissions("Map");
               });
            },
            Return: function () {
               if (VarObjectsStation.Help == false) {
                  G1_UpdateStorage();//SALVA NEL LOCAL STORAGE I VALORI DI SOLDI, CARBURANTE, ARIA, ACQUA, CIBO, CANNONE E SE CI SIAMO LA VARIABILE TUTORIAL
                  VarObjectsStation.Tutorial++;
                  SaveSystem.setItem(`Tutorial`, VarObjectsStation.Tutorial);
                  G0_ExtiPageSaveMissions("Game");
               }
               else G1_HangarAssistant(8, function () {
                  G1_UpdateStorage();//SALVA NEL LOCAL STORAGE I VALORI DI SOLDI, CARBURANTE, ARIA, ACQUA, CIBO, CANNONE E SE CI SIAMO LA VARIABILE TUTORIAL
                  VarObjectsStation.Tutorial++;
                  SaveSystem.setItem(`Tutorial`, VarObjectsStation.Tutorial);
                  G0_ExtiPageSaveMissions("Game");
               });

            },
            ClickIndex: 2,
         });
         //#endregion

         /*-------------------------------------------------GENERATE HUD HANGAR-------------------------------------------------------*/
         //#region
         function G2_CommonFunctionsButton() {        //FUNZIONE DI RAGGRUPPAMENTO FUNZIONI COMUNI DEI PULSANTI
            //RICARICA IL MODELLO E I PULSANTI DELLA NAVE
            G1_CreateButtonShip(ShipPulsArea, MicEnginereturn.VarModularShip.Moduli, MicEnginereturn.VarModularShip.ModuleArray);
            MicEnginereturn.VarObject.E1_ModularShipUpdate();
            G1_MotorLightsOff();
         };
         DynamicHangarHUDObj.DispatchEvent = StaticStationHUD.canvas;
         DynamicHangarHUD = S0_GenerateHUDCanvas(DynamicHangarHUDObj);

         //AGGIORNAMENTO STATO PULSANTI ALL'AVVIO
         G1_UpdateTypeModule();           //AGGIORNA I VALORI DEI MODULI SELEZIONATI
         G1_UpdateValues();            //AGGIORNA I VALORI MASSIMI DI ARIA, ACQUA E CIBO

         //------------------------PULSANTE CANCEL---------------------------//
         function G2_ButtonCancel() {
            //RICARICA L'ARRAY
            VarObjectsStation.SelectedModule = 0;
            MicEnginereturn.VarObject.E1_ModularShipLoadGame();
            ModifyArray.UpdateArray(MicEnginereturn.VarModularShip.ModuleArray);
            G2_CommonFunctionsButton();        //FUNZIONE DI RAGGRUPPAMENTO FUNZIONI COMUNI DEI PULSANTI
            G1_UpdateTypeModule();           //AGGIORNA I VALORI DEI MODULI SELEZIONATI
            DynamicHangarHUD.showButton(1, false);
            GlobalVar.UpgradeCockpit = Number(SaveSystem.getItem(`UpgradeCockpit`));
            GlobalVar.UpgradeTank = Number(SaveSystem.getItem(`UpgradeTank`));
            GlobalVar.UpgradeMotor = Number(SaveSystem.getItem(`UpgradeMotor`));
            G0_UpdateShipUpgrade(false);
            VarObjectsStation.Air = Number(SaveSystem.getItem(`Air`));
            VarObjectsStation.Water = Number(SaveSystem.getItem(`Water`));
            VarObjectsStation.Food = Number(SaveSystem.getItem(`Food`));
            GlobalVar.Fuel = Number(SaveSystem.getItem(`Fuel`));
            G1_UpdateValues();
            GlobalVar.MoneyBuy = 0;
            G1_UpdateEditorPuls();           //AGGIORNA I PULSANTI: SHIFT MIN PLUS NEW SELL UPGRADE
            G1_ResetShipButton(ShipPulsArea, ButtonColor);

            //RESETTA I COLORI
            GlobalVar.Color1 = SaveSystem.getItem(`Color1`);
            EditColor1.innerHTML = `<input type="color" value="#${GlobalVar.Color1}" list="#ff0000">`;
            GlobalVar.Color2 = SaveSystem.getItem(`Color2`);
            EditColor2.innerHTML = `<input type="color" value="#${GlobalVar.Color2}" list="#ff0000">`;
            G0_ChangeShipColor();
            DynamicHangarHUD.render();
         };
         DynamicHangarHUD.setButtonCallback(0, () => {
            if (VarObjectsStation.Help == false) G2_ButtonCancel();
            else G1_HangarAssistant(7, G2_ButtonCancel);
         });

         //-------------------------PULSANTE BUY------------------------------//
         DynamicHangarHUD.showButton(1, false);
         DynamicHangarHUD.setButtonCallback(1, () => {
            G0_SaveShipModules();         //SALVA NEL LOCAL STORAGE IL NUMERO DI MODULI DELLA NAVE E L'ARRAY DEI MODULI
            SaveSystem.setItem(`Color1`, GlobalVar.Color1);
            SaveSystem.setItem(`Color2`, GlobalVar.Color2);
            SaveSystem.setItem(`UpgradeCockpit`, GlobalVar.UpgradeCockpit);
            SaveSystem.setItem(`UpgradeTank`, GlobalVar.UpgradeTank);
            SaveSystem.setItem(`UpgradeMotor`, GlobalVar.UpgradeMotor);

            GlobalVar.Money += GlobalVar.MoneyBuy;
            G0_ShowMoneySpentCanvas(DynamicHangarHUD, 2, GlobalVar.MoneyBuy);
            GlobalVar.MoneyBuy = 0;
            G1_UpdateStorage();            //SALVA NEL LOCAL STORAGE I VALORI DI SOLDI, CARBURANTE, ARIA, ACQUA, CIBO, MUNIZIONI E CANNONE
            G0_MoveMoneyImg(90, 240, 90, 105, false);
            DynamicHangarHUD.showButton(1, false);
            DynamicHangarHUD.render();
            if (VarObjectsStation.Tutorial == 26) VarObjectsStation.Tutorial++;     //LAMPEGGIO TUTORIAL
         });

         //-------------------------MONEY-----------------------------//
         DynamicHangarHUD.setButtonText(2, `${GlobalVar.Money}${Economy.MoneySymbol}`);
         CoinGoldImg = document.createElement("img");
         MicEnginereturn.VarObject.StandardCSS(CoinGoldImg, "top", "0px", "left", "0px", "30px", "30px");
         CoinGoldImg.src = Sprite.CoinGold;

         //-------------------------COIN-----------------------------//
         DynamicHangarHUD.setButtonText(3, `${GlobalVar.Coin}`);

         //IMMAGINE
         CoinSilverImg = document.createElement('img');
         MicEnginereturn.VarObject.StandardCSS(CoinSilverImg, "top", "0px", "left", "0px", "30px", "30px");
         CoinSilverImg.src = Sprite.CoinSilver;

         //-----------------------PULSANTE + MODULI------------------------------//
         function G2_ButtonPlus() {
            ModifyArray.Add(MicEnginereturn.VarModularShip.Moduli - 4, [9, 1]);
            MicEnginereturn.VarModularShip.Moduli += 2;
            VarObjectsStation.SelectedModule = MicEnginereturn.VarModularShip.Moduli / 2 - 3;      //SELEZIONA IL MODULO CREATO
            G2_CommonFunctionsButton();        //FUNZIONE DI RAGGRUPPAMENTO FUNZIONI COMUNI DEI PULSANTI
            G1_UpdateTypeModule();           //AGGIORNA I VALORI DEI MODULI SELEZIONATI
            G1_UpdateEditorPuls();           //AGGIORNA I PULSANTI: SHIFT MIN PLUS NEW SELL UPGRADE
            G0_UpdateShipUpgrade(false);
            G1_ResetShipButton(ShipPulsArea, ButtonColor);     //AGGIORNAMENTO PULSANTI NAVE
            DynamicHangarHUD.render();
         };
         DynamicHangarHUD.setButtonCallback(4, () => {
            if (VarObjectsStation.Help == false) G2_ButtonPlus();
            else G1_HangarAssistant(0, G2_ButtonPlus);
            if (VarObjectsStation.Tutorial == 20) VarObjectsStation.Tutorial++;     //LAMPEGGIO TUTORIAL
            if (VarObjectsStation.Tutorial == 23) VarObjectsStation.Tutorial++;     //LAMPEGGIO TUTORIAL
         });

         //-----------------------PULSANTE - MODULI------------------------------//
         function G2_ButtonMinus() {
            let Found = MicEnginereturn.VarModularShip.ModuleArray.find((element) => element == 9);//CERCA SE ESISTE UN MODULO VUOTO
            let FoundIndex;
            FoundIndex = MicEnginereturn.VarModularShip.ModuleArray.indexOf(Found);    //TROVA L'INDICE DEL MODULO VUOTO
            ModifyArray.Sub(FoundIndex, 2);           //RIMUOVI L'ELEMENTO VUOTO
            MicEnginereturn.VarModularShip.Moduli -= 2;
            G2_CommonFunctionsButton();        //FUNZIONE DI RAGGRUPPAMENTO FUNZIONI COMUNI DEI PULSANTI
            Found = null;
            FoundIndex = null;
            VarObjectsStation.SelectedModule = MicEnginereturn.VarModularShip.Moduli / 2 - 3;
            ShipPulsArea.children[VarObjectsStation.SelectedModule].style.backgroundColor = SelectedButtonColor;
            G1_UpdateTypeModule();           //AGGIORNA I VALORI DEI MODULI SELEZIONATI
            G1_UpdateEditorPuls();           //AGGIORNA I PULSANTI: SHIFT MIN PLUS NEW SELL UPGRADE
            G0_UpdateShipUpgrade(false);
            DynamicHangarHUD.render();
         };
         DynamicHangarHUD.setButtonCallback(5, () => {
            if (VarObjectsStation.Help == false) G2_ButtonMinus();
            else G1_HangarAssistant(1, G2_ButtonMinus);
         });

         //-----------------------PULSANTE SHIFT SX (INDIETRO)-------------------------------//
         function G2_ButtonSX() {
            ModifyArray.SwitchDown(VarObjectsStation.SelectedModule * 2, 2);
            G2_CommonFunctionsButton();        //FUNZIONE DI RAGGRUPPAMENTO FUNZIONI COMUNI DEI PULSANTI
            VarObjectsStation.SelectedModule = VarObjectsStation.SelectedModule + 1;      //SELEZIONA DI NUOVO IL MODULO SPOSTATO
            G1_ResetShipButton(ShipPulsArea, ButtonColor);
            G1_UpdateTypeModule();          //AGGIORNA I VALORI DEI MODULI SELEZIONATI
            G1_UpdateEditorPuls();           //AGGIORNA I PULSANTI: SHIFT MIN PLUS NEW SELL UPGRADE
            G0_UpdateShipUpgrade(false);
            DynamicHangarHUD.render();
         };
         DynamicHangarHUD.setButtonCallback(6, () => {
            if (VarObjectsStation.Help == false) G2_ButtonSX();
            else G1_HangarAssistant(2, G2_ButtonSX);
         });

         //------------------------PULSANTE SHIFT DX (AVANTI)--------------------------------//
         function G2_ButtonDX() {
            ModifyArray.SwitchUp(VarObjectsStation.SelectedModule * 2, 2);
            G2_CommonFunctionsButton();        //FUNZIONE DI RAGGRUPPAMENTO FUNZIONI COMUNI DEI PULSANTI
            VarObjectsStation.SelectedModule = VarObjectsStation.SelectedModule - 1;      //SELEZIONA DI NUOVO IL MODULO SPOSTATO
            G1_ResetShipButton(ShipPulsArea, ButtonColor);
            G1_UpdateTypeModule();          //AGGIORNA I VALORI DEI MODULI SELEZIONATI
            G1_UpdateEditorPuls();           //AGGIORNA I PULSANTI: SHIFT MIN PLUS NEW SELL UPGRADE
            G0_UpdateShipUpgrade(false);
            DynamicHangarHUD.render();
         };
         DynamicHangarHUD.setButtonCallback(7, () => {
            if (VarObjectsStation.Help == false) G2_ButtonDX();
            else G1_HangarAssistant(3, G2_ButtonDX);
         });

         //------------------------PULSANTE SELL--------------------------------//
         function G2_ButtonSell() {
            //TIPO MODULO SELEZIONATO
            G1_UpdateTypeModule();          //AGGIORNA I VALORI DEI MODULI SELEZIONATI

            //AGGIORNAMENTO NUMERO MODULI
            if (VarObjectsStation.TypeModule == 0) {       //UPGRADE COCKPIT
               GlobalVar.MoneyBuy +=
                  Oggetti.Spaceship.Modular[VarObjectsStation.TypeModule].Money[GlobalVar.UpgradeCockpit] * Economy.SellCoeff;
               GlobalVar.UpgradeCockpit--;
            };
            if (VarObjectsStation.TypeModule == 2) {          //MODULI NAVE
               GlobalVar.MoneyBuy +=
                  Oggetti.Spaceship.Modular[VarObjectsStation.TypeModule].Money[0] * Economy.SellCoeff;
               ModifyArray.Replace(VarObjectsStation.SelectedModule * 2, [9, 1]);
               MicEnginereturn.VarObject.E0_ModularShip();     //RICARICA IL MODELLO
               MicEnginereturn.VarObject.E1_UpdateLightObjects();
            };
            if (VarObjectsStation.TypeModule == 3) {          //UPGRADE TANK
               GlobalVar.MoneyBuy +=
                  Oggetti.Spaceship.Modular[VarObjectsStation.TypeModule].Money[GlobalVar.UpgradeTank] * Economy.SellCoeff;
               GlobalVar.UpgradeTank--;
            };
            if (VarObjectsStation.TypeModule == 4) {        //MODULI LIVING
               GlobalVar.MoneyBuy +=
                  Oggetti.Spaceship.Modular[VarObjectsStation.TypeModule].Money[0] * Economy.SellCoeff;
               ModifyArray.Replace(VarObjectsStation.SelectedModule * 2, [9, 1]);
               MicEnginereturn.VarObject.E0_ModularShip();     //RICARICA IL MODELLO
               MicEnginereturn.VarObject.E1_UpdateLightObjects();
            };
            if (VarObjectsStation.TypeModule == 5) {     //MODULI CONTAINER
               GlobalVar.MoneyBuy +=
                  Oggetti.Spaceship.Modular[VarObjectsStation.TypeModule].Money[0] * Economy.SellCoeff;
               ModifyArray.Replace(VarObjectsStation.SelectedModule * 2, [9, 1]);
               MicEnginereturn.VarObject.E0_ModularShip();     //RICARICA IL MODELLO
               MicEnginereturn.VarObject.E1_UpdateLightObjects();

            };
            if (VarObjectsStation.TypeModule == 6) {       //UPGRADE MOTOR        
               GlobalVar.MoneyBuy +=
                  Oggetti.Spaceship.Modular[VarObjectsStation.TypeModule].Money[GlobalVar.UpgradeMotor] * Economy.SellCoeff;
               GlobalVar.UpgradeMotor--;
            };
            if (VarObjectsStation.TypeModule == 10) {        //MODULO EXTRACTION
               GlobalVar.MoneyBuy +=
                  Oggetti.Spaceship.Modular[VarObjectsStation.TypeModule].Money[0] * Economy.SellCoeff;
               ModifyArray.Replace(VarObjectsStation.SelectedModule * 2, [9, 1]);
               MicEnginereturn.VarObject.E0_ModularShip();     //RICARICA IL MODELLO
               MicEnginereturn.VarObject.E1_UpdateLightObjects();
            };
            if (VarObjectsStation.TypeModule == 11) {        //MODULO RADAR
               GlobalVar.MoneyBuy +=
                  Oggetti.Spaceship.Modular[VarObjectsStation.TypeModule].Money[0] * Economy.SellCoeff;
               ModifyArray.Replace(VarObjectsStation.SelectedModule * 2, [9, 1]);
               MicEnginereturn.VarObject.E0_ModularShip();     //RICARICA IL MODELLO
               MicEnginereturn.VarObject.E1_UpdateLightObjects();
            };
            G1_UpdateValues();      //AGGIORNA I VALORI MASSIMI DI ARIA, ACQUA E CIBO
            G2_CommonFunctionsButton();        //FUNZIONE DI RAGGRUPPAMENTO FUNZIONI COMUNI DEI PULSANTI
            ShipPulsArea.children[VarObjectsStation.SelectedModule].style.backgroundColor = SelectedButtonColor;
            G1_UpdateTypeModule();           //AGGIORNA I VALORI DEI MODULI SELEZIONATI
            G1_UpdateEditorPuls();           //AGGIORNA I PULSANTI: SHIFT MIN PLUS NEW SELL UPGRADE
            G0_UpdateShipUpgrade(false);
            DynamicHangarHUD.render();
         };
         DynamicHangarHUD.setButtonCallback(8, () => {
            if (VarObjectsStation.Help == false) G2_ButtonSell();
            else G1_HangarAssistant(4, G2_ButtonSell);
         });
         DynamicHangarHUD.showButton(8, false);    //PULSANTE SELL

         //------------------------PULSANTE NEW--------------------------------//
         function G2_ButtonNew() {
            G1_UpdatePartsArea();
            PartsArea.style.display = "grid";     //ABILITA LA PARTS AREA
            VarObjectsStation.ShopPart = true;
            DynamicHangarHUD.showButton(10, true);    //ABILITA IL PULSANTE CANCEL PARTS AREA
            DynamicHangarHUD.showButton(13, true);    //ABILITA IL PULSANTE OK PARTS AREA
            DynamicHangarHUD.showButton(14, true);           //ABILITA IL PULSANTE DX PARTS AREA
            DynamicHangarHUD.showButton(4, false);    //DISABILITA IL PULSANTE +
            DynamicHangarHUD.showButton(5, false);    //DISABILITA IL PULSANTE -
            DynamicHangarHUD.showButton(9, false);    //DISABILITA IL PULSANTE NEW
            DynamicHangarHUD.showButton(11, false);    //DISABILITA IL PULSANTE UPGRADE
            DynamicHangarHUD.showImage(1, false);
            DynamicHangarHUD.showImage(0, false);
            DynamicHangarHUD.showImage(2, false);
            DynamicHangarHUD.showImage(13, true);     //13 SCROLL DX
            DynamicHangarHUD.render();
         };
         DynamicHangarHUD.setButtonCallback(9, () => {
            if (VarObjectsStation.Help == false) G2_ButtonNew();
            else G1_HangarAssistant(5, G2_ButtonNew);
            if (VarObjectsStation.Tutorial == 21) VarObjectsStation.Tutorial++;     //LAMPEGGIO TUTORIAL
            if (VarObjectsStation.Tutorial == 24) VarObjectsStation.Tutorial++;     //LAMPEGGIO TUTORIAL
         });

         //------------------------PULSANTE CANCEL PARTS AREA--------------------------------//
         DynamicHangarHUD.showButton(10, false);           //DISABILITA IL PULSANTE CANCEL PARTS AREA

         DynamicHangarHUD.setButtonCallback(10, () => {
            PartsArea.style.display = "none";            //DISABILITA LA PARTS AREA
            VarObjectsStation.ShopPart = false;
            UpgradeArea.style.display = "none";            //DISABILITA LA UPGRADE AREA
            VarObjectsStation.UpgradePart = false;
            DynamicHangarHUD.showButton(10, false);           //DISABILITA IL PULSANTE CANCEL PARTS AREA
            DynamicHangarHUD.showButton(13, false);    //DISABILITA IL PULSANTE OK PARTS AREA
            DynamicHangarHUD.showButton(14, false);           //DISABILITA IL PULSANTE DX PARTS AREA
            DynamicHangarHUD.showButton(15, false);           //DISABILITA IL PULSANTE DX PARTS AREA
            DynamicHangarHUD.showImage(13, false);     //13 SCROLL DX
            DynamicHangarHUD.showImage(14, false);     //14 SCROLL SX
            MicEnginereturn.VarObject.E1_UpdateLightObjects();
            MicEnginereturn.VarObject.E1_UpdateNumModules();
            G1_MotorLightsOff();

            G0_UpdateShipUpgrade(false);
            G1_UpdateValues();      //AGGIORNA I VALORI MASSIMI DI ARIA, ACQUA E CIBO
            G1_UpdateEditorPuls();           //AGGIORNA I PULSANTI: SHIFT MIN PLUS NEW SELL UPGRADE
            DynamicHangarHUD.render();
         });

         //------------------------PULSANTE OK PARTS AREA--------------------------------//
         DynamicHangarHUD.showButton(13, false);           //DISABILITA IL PULSANTE OK PARTS AREA

         DynamicHangarHUD.setButtonCallback(13, () => {
            //SE IL MODULO APERTO È IL PARTS AREA
            if (VarObjectsStation.ShopPart == true) {
               let Modular;      //NUMERO DEL MODULO IN BASE AL NUMERO DEL RIQUADRO COMPRABILE
               if (VarObjectsStation.Parts.ScrollLeft == 0) Modular = 2;       //2 NAVE
               if (VarObjectsStation.Parts.ScrollLeft == 1) Modular = 4;       //4 GRAVITY
               if (VarObjectsStation.Parts.ScrollLeft == 2) Modular = 5;       //5 CONTAINER
               if (VarObjectsStation.Parts.ScrollLeft == 3) Modular = 10;      //10 EXTRACTION
               if (VarObjectsStation.Parts.ScrollLeft == 4) Modular = 11;      //11 RADAR

               //SE SI HANNO SOLDI SUFFICIENTI
               if (GlobalVar.Money + GlobalVar.MoneyBuy >= Oggetti.Spaceship.Modular[Modular].Money[0]) {
                  //SE IL MODULO È QUELLO DI ESTRAZIONE
                  if (Modular == 10) {
                     //SE NON SI POSSIEDE GIÀ QUEL MODULO
                     if (GlobalVar.ExtractionModules == 0) {
                        G1_BuyModule(Modular);
                     };
                  }
                  //SE IL MODULO È QUELLO DI ESTRAZIONE
                  else if (Modular == 11) {
                     //SE NON SI POSSIEDE GIÀ QUEL MODULO
                     if (GlobalVar.RadarModules == 0) {
                        G1_BuyModule(Modular);
                     };
                  }
                  //TUTTI GLI ALTRI MODULI
                  else {
                     G1_BuyModule(Modular);
                     if (VarObjectsStation.Tutorial == 22 && VarObjectsStation.Parts.ScrollLeft == 0) VarObjectsStation.Tutorial++;  //LAMPEGGIO TUTORIAL
                     if (VarObjectsStation.Tutorial == 25 && VarObjectsStation.Parts.ScrollLeft == 2) VarObjectsStation.Tutorial++;  //LAMPEGGIO TUTORIAL
                  };
               };
            };
            //SE IL MODULO APERTO È L'UPGRADE AREA
            if (VarObjectsStation.UpgradePart == true) {
               function G2_BuyUpgrade() {
                  G0_UpdateShipUpgrade(false);
                  VarObjectsStation.UpgradePart = false;
                  UpgradeArea.style.display = "none";            //DISABILITA LA PARTS AREA
                  DynamicHangarHUD.showButton(11, false);           //DISABILITA IL PULSANTE UPGRADE
                  DynamicHangarHUD.showButton(10, false);           //DISABILITA IL PULSANTE CANCEL PARTS AREA
                  DynamicHangarHUD.showButton(13, false);           //DISABILITA IL PULSANTE OK PARTS AREA
                  DynamicHangarHUD.showButton(14, false);           //DISABILITA IL PULSANTE DX PARTS AREA
                  DynamicHangarHUD.showButton(15, false);           //DISABILITA IL PULSANTE DX PARTS AREA
                  DynamicHangarHUD.showImage(13, false);     //13 SCROLL DX
                  DynamicHangarHUD.showImage(14, false);     //14 SCROLL SX
                  G1_ResetShipButton(ShipPulsArea, ButtonColor);
                  VarObjectsStation.SelectedModule = -1;
                  G1_UpdateTypeModule();           //AGGIORNA I VALORI DEI MODULI SELEZIONATI
                  G1_UpdateEditorPuls();           //AGGIORNA I PULSANTI: SHIFT MIN PLUS NEW SELL UPGRADE
                  G1_UpdateValues();            //AGGIORNA I VALORI MASSIMI DI ARIA, ACQUA E CIBO
                  DynamicHangarHUD.render();
               };
               if (VarObjectsStation.TypeModule == 0 && GlobalVar.Money + GlobalVar.MoneyBuy >=
                  Oggetti.Spaceship.Modular[VarObjectsStation.TypeModule].Money[GlobalVar.UpgradeCockpit + 1]) {     //COCKPIT
                  GlobalVar.MoneyBuy -=
                     Oggetti.Spaceship.Modular[VarObjectsStation.TypeModule].Money[GlobalVar.UpgradeCockpit + 1];
                  GlobalVar.UpgradeCockpit++;
                  G2_BuyUpgrade();
               };
               if (VarObjectsStation.TypeModule == 3 && GlobalVar.Money + GlobalVar.MoneyBuy >=
                  Oggetti.Spaceship.Modular[VarObjectsStation.TypeModule].Money[GlobalVar.UpgradeTank + 1]) {     //TANK
                  GlobalVar.MoneyBuy -=
                     Oggetti.Spaceship.Modular[VarObjectsStation.TypeModule].Money[GlobalVar.UpgradeTank + 1];
                  GlobalVar.UpgradeTank++;
                  G2_BuyUpgrade();

               };
               if (VarObjectsStation.TypeModule == 6 && GlobalVar.Money + GlobalVar.MoneyBuy >=
                  Oggetti.Spaceship.Modular[VarObjectsStation.TypeModule].Money[GlobalVar.UpgradeMotor + 1]) {     //MOTOR
                  GlobalVar.MoneyBuy -=
                     Oggetti.Spaceship.Modular[VarObjectsStation.TypeModule].Money[GlobalVar.UpgradeMotor + 1];
                  GlobalVar.UpgradeMotor++;
                  G2_BuyUpgrade();
               };
            };
         });

         //------------------------PULSANTE DX PARTS AREA--------------------------------//
         DynamicHangarHUD.showButton(14, false);           //DISABILITA IL PULSANTE DX PARTS AREA
         DynamicHangarHUD.showImage(13, false);           //13 SCROLL DX

         DynamicHangarHUD.setButtonCallback(14, () => {
            const Value = ScrollRight();
            DynamicHangarHUD.showButton(14, !Value);
            DynamicHangarHUD.showImage(13, !Value);
            DynamicHangarHUD.showButton(15, true);
            DynamicHangarHUD.showImage(14, true);
            DynamicHangarHUD.render();
         });

         //------------------------PULSANTE SX PARTS AREA--------------------------------//
         DynamicHangarHUD.showButton(15, false);           //DISABILITA IL PULSANTE SX PARTS AREA
         DynamicHangarHUD.showImage(14, false);           //14 SCROLL SX

         DynamicHangarHUD.setButtonCallback(15, () => {
            const Value = ScrollLeft();
            DynamicHangarHUD.showButton(14, true);
            DynamicHangarHUD.showImage(13, true);
            DynamicHangarHUD.showButton(15, !Value);
            DynamicHangarHUD.showImage(14, !Value);
            DynamicHangarHUD.render();
         });

         //------------------------PULSANTE UPGRADE--------------------------------//
         function G2_ButtonUpgrade() {
            UpgradeArea.style.display = "grid";     //ABILITA LA PARTS AREA
            VarObjectsStation.UpgradePart = true;
            DynamicHangarHUD.showButton(10, true);    //ABILITA IL PULSANTE CANCEL PARTS AREA
            DynamicHangarHUD.showButton(13, true);    //ABILITA IL PULSANTE OK PARTS AREA
            //FUNZIONI AGGIUNTE COPIATE DAL PULSANTE NEW
            DynamicHangarHUD.showButton(4, false);    //DISABILITA IL PULSANTE +
            DynamicHangarHUD.showButton(5, false);    //DISABILITA IL PULSANTE -
            DynamicHangarHUD.showButton(9, false);    //DISABILITA IL PULSANTE NEW
            DynamicHangarHUD.showButton(11, false);    //DISABILITA IL PULSANTE UPGRADE
            DynamicHangarHUD.showImage(1, false);
            DynamicHangarHUD.showImage(0, false);
            DynamicHangarHUD.showImage(2, false);
            ////////////////////////////////////////////
            G1_TextUpgradeParts(VarObjectsStation.TypeModule);
            DynamicHangarHUD.render();
         };
         DynamicHangarHUD.showButton(11, false);           //DISABILITA IL PULSANTE UPGRADE

         DynamicHangarHUD.setButtonCallback(11, () => {
            if (VarObjectsStation.Help == false) G2_ButtonUpgrade();
            else G1_HangarAssistant(6, G2_ButtonUpgrade);
         });

         //------------------------PULSANTE ?--------------------------------//
         DynamicHangarHUD.setButtonCallback(12, () => {
            VarObjectsStation.Help = !VarObjectsStation.Help;
            if (VarObjectsStation.Help == true) DynamicHangarHUD.setButtonColor(12, Colors.SelectedPuls);
            else DynamicHangarHUD.setButtonColor(12, Colors.ActivePuls);
            DynamicHangarHUD.render();
         });

         //-------------------------EDITOR COLORE 1-----------------------------//
         EditColor1 = document.createElement('div');
         EditColor1.innerHTML = `<input type="color" value="#${GlobalVar.Color1}" list="#ff0000">`;
         EditColor1.style.position = "absolute";
         EditColor1.style.top = "240px";
         EditColor1.style.right = "110px";
         EditColor1.style.zIndex = "10";
         document.body.appendChild(EditColor1);
         EditColor1.addEventListener("change", watchColorPicker1, false);

         function watchColorPicker1(event) {
            let Str = event.target.value.replace("#", "");
            MicEnginereturn.User.Object.children[1].children[MicEnginereturn.VarModularShip.Moduli].children[0].material.color.setHex(`0x${Str}`);
            MicEnginereturn.User.Object.children[1].children[MicEnginereturn.VarModularShip.Moduli].children[1].material.color.setHex(`0x${Str}`);
            GlobalVar.Color1 = Str;
            MicEnginereturn.VarModularShip.Color1 = GlobalVar.Color1;
            G1_UpdateEditorPuls();
            DynamicHangarHUD.render();
         };

         //-------------------------EDITOR COLORE 2-----------------------------//
         EditColor2 = document.createElement('div');
         EditColor2.innerHTML = `<input type="color" value="#${GlobalVar.Color2}" list="#ff0000">`;
         EditColor2.style.position = "absolute";
         EditColor2.style.top = "240px";
         EditColor2.style.right = "10px";
         EditColor2.style.zIndex = "10";
         document.body.appendChild(EditColor2);
         EditColor2.addEventListener("change", watchColorPicker2, false);

         function watchColorPicker2(event) {
            let Str = event.target.value.replace("#", "");
            MicEnginereturn.User.Object.children[1].children[MicEnginereturn.VarModularShip.Moduli].children[2].material.color.setHex(`0x${Str}`);
            GlobalVar.Color2 = Str;
            MicEnginereturn.VarModularShip.Color2 = GlobalVar.Color2;
            G1_UpdateEditorPuls();
            DynamicHangarHUD.render();
         };

         /*-----------------------------------BARRA CARBURANTE------------------------------*/
         DynamicHangarHUD.setBarCallback(0, () => {
            if (VarObjectsStation.Help == true) G1_HangarAssistantBar(11, function () { });
         });

         /*-----------------------------------BARRA ARIA------------------------------*/
         DynamicHangarHUD.setBarCallback(1, () => {
            if (VarObjectsStation.Help == true) G1_HangarAssistantBar(12, function () { });
         });

         /*-----------------------------------BARRA ACQUA------------------------------*/
         DynamicHangarHUD.setBarCallback(2, () => {
            if (VarObjectsStation.Help == true) G1_HangarAssistantBar(13, function () { });
         });

         /*-----------------------------------BARRA CIBO------------------------------*/
         DynamicHangarHUD.setBarCallback(3, () => {
            if (VarObjectsStation.Help == true) G1_HangarAssistantBar(14, function () { });
         });

         /*-----------------------------------BARRA VELOCITÀ------------------------------*/
         DynamicHangarHUD.setBarCallback(4, () => {
            if (VarObjectsStation.Help == true) G1_HangarAssistantBar(10, function () { });
         });

         /*-----------------------------------BARRA CARICO------------------------------*/
         DynamicHangarHUD.setBarCallback(5, () => {
            if (VarObjectsStation.Help == true) G1_HangarAssistantBar(15, function () { });
         });

         /*-----------------------------------BARRA CREW------------------------------*/
         DynamicHangarHUD.setBarCallback(6, () => {
            if (VarObjectsStation.Help == true) G1_HangarAssistantBar(16, function () { });
         });

         /*-----------------------------------BARRA ROOF------------------------------*/
         DynamicHangarHUD.setBarCallback(7, () => {
            if (VarObjectsStation.Help == true) G1_HangarAssistantBar(17, function () { });
         });

         /*-----------------------------------BARRA BED------------------------------*/
         DynamicHangarHUD.setBarCallback(8, () => {
            if (VarObjectsStation.Help == true) G1_HangarAssistantBar(18, function () { });
         });

         //#endregion

         //----------------------------------------------------PARTS AREA----------------------------------------------------------//
         //#region
         const PartsArea = document.createElement('div');

         MicEnginereturn.VarObject.StandardCSS(PartsArea, "top", "0%", "right", "0px", `${VarObjectsStation.Parts.Height}px`, `${VarObjectsStation.Parts.Width}px`, "11");
         PartsArea.style.background = Colors.PartAreaBackground;
         PartsArea.style.display = "none";
         PartsArea.style.gridAutoFlow = "column";
         PartsArea.style.overscrollBehaviorX = "contain";
         PartsArea.style.overflowX = "scroll";
         PartsArea.style.scrollSnapType = "x mandatory";
         PartsArea.style.borderRadius = "30px";
         PartsArea.style.border = "10px solid white";

         //SCROLL ORIZZONTALE, SOLO MOBILE
         // let mouseDown = false;
         // let startX, scrollLeft;
         // const startDragging = (e) => {
         //    mouseDown = true;
         //    startX = e.pageX - PartsArea.offsetLeft;
         //    scrollLeft = PartsArea.scrollLeft;
         // };
         // const stopDragging = (e) => { mouseDown = false; };
         // const move = (e) => {
         //    e.preventDefault();
         //    if (!mouseDown) { return; }
         //    const x = e.pageX - PartsArea.offsetLeft;
         //    const scroll = x - startX;
         //    PartsArea.scrollLeft = scrollLeft - scroll;
         // };
         // if (GlobalVar.isMobile == true) {
         //    PartsArea.addEventListener('mousemove', move, false);
         //    PartsArea.addEventListener('mousedown', startDragging, false);
         //    PartsArea.addEventListener('mouseup', stopDragging, false);
         //    PartsArea.addEventListener('mouseleave', stopDragging, false);
         // };

         PartsArea.addEventListener("wheel", (e) => {
            e.preventDefault();
         }, { passive: false });

         PartsArea.addEventListener("touchmove", (e) => {
            e.preventDefault();
         }, { passive: false });

         //CAPIRE QUALE MODULO STO VEDENDO
         PartsArea.addEventListener("scroll", () => {
            VarObjectsStation.Parts.ScrollLeft = Math.round(PartsArea.scrollLeft / VarObjectsStation.Parts.Width);
         });

         //NUMERO OGGETTI COMPRABILI
         let MaxNum = 0;
         for (let i = 0; i < Oggetti.Spaceship.Modular.length; i++) {
            //SE IL MODULO È COMPRABILE CREALO
            if (Oggetti.Spaceship.Modular[i].Comprabile == true) MaxNum++;
         };

         //CREAZIONE MODULO COMPRABILE
         let Num = -1;
         for (let i = 0; i < Oggetti.Spaceship.Modular.length; i++) {
            //SE IL MODULO È COMPRABILE CREALO
            if (Oggetti.Spaceship.Modular[i].Comprabile == true) {
               Num++;
               //DIV SCROLLABILI
               const PartDiv = document.createElement('div');
               PartDiv.style.height = "200px";
               PartDiv.style.width = `${VarObjectsStation.Parts.Width}px`;
               PartDiv.style.display = "inline-block";
               PartDiv.style.float = "left";

               PartDiv.style.scrollSnapAlign = "center";
               PartsArea.appendChild(PartDiv);

               //0 MINIATURA
               const Part = document.createElement('img');
               G1_CSSPart(PartDiv, Part, "relative", "200px", "200px");
               Part.style.top = "0px";
               Part.style.left = "0px";
               if (Oggetti.Spaceship.Modular[i].Name[0] == "SHIP") Part.src = VarObjectsStation.ImageShip;
               if (Oggetti.Spaceship.Modular[i].Name[0] == "GRAVITY MODULE") Part.src = VarObjectsStation.ImageGravity;
               if (Oggetti.Spaceship.Modular[i].Name[0] == "CONTAINER SUPPORT") Part.src = VarObjectsStation.ImageContainer;
               if (Oggetti.Spaceship.Modular[i].Name[0] == "EXTRACTION") Part.src = VarObjectsStation.ImageExtraction;
               if (Oggetti.Spaceship.Modular[i].Name[0] == "RADAR") Part.src = VarObjectsStation.ImageRadar;

               //1 DESCRIZIONE
               const Text = document.createElement('p');
               G1_CSSPart(PartDiv, Text, "relative", "180px", "50px");
               Text.style.top = "0px";
               Text.innerText = Oggetti.Spaceship.Modular[i].Description[0][GlobalVar.Language];

               //2 CARATTERISTICHE
               const Text1 = document.createElement('p');
               G1_CSSPart(PartDiv, Text1, "relative", "180px", "100px");
               Text1.innerText = Oggetti.Spaceship.Modular[i].Features[0][GlobalVar.Language];

               //3 COSTO
               const Text2 = document.createElement('p');
               G1_CSSPart(PartDiv, Text2, "absolute", "180px", "25px");
               Text2.innerText = `${Testi.Menu.Price[GlobalVar.Language]}: ${Oggetti.Spaceship.Modular[i].Money[0]}${Economy.MoneySymbol}`;
               Text2.style.bottom = "10px";
               Text2.style.left = `${Num * 400 + 80}px`;

               //4 PAGINA
               const Page = document.createElement('p');
               G1_CSSPart(PartDiv, Page, "absolute", "25px", "25px");
               Page.style.bottom = "0px";
               Page.style.left = `${Num * 400 + 15}px`;
               Page.innerText = `${Num + 1}/${MaxNum}`;
            };
         };

         function ScrollRight() {
            const max = MaxNum - 1;
            let MaxDx = false;         //RIQUADRO MASSIMO DESTRA RAGGIUNTO
            VarObjectsStation.Parts.ScrollLeft++;

            if (VarObjectsStation.Parts.ScrollLeft > max) VarObjectsStation.Parts.ScrollLeft = max;
            if (VarObjectsStation.Parts.ScrollLeft == max) MaxDx = true;
            else MaxDx = false;

            PartsArea.scrollTo({
               left: VarObjectsStation.Parts.ScrollLeft * VarObjectsStation.Parts.Width,
               behavior: "smooth"
            });

            return MaxDx;
         };

         function ScrollLeft() {
            let MinSx = false;         //RIQUADRO MINIMO SINISTRA RAGGIUNTO
            VarObjectsStation.Parts.ScrollLeft--;

            if (VarObjectsStation.Parts.ScrollLeft < 0) VarObjectsStation.Parts.ScrollLeft = 0;
            if (VarObjectsStation.Parts.ScrollLeft == 0) MinSx = true;
            else MinSx = false;

            PartsArea.scrollTo({
               left: VarObjectsStation.Parts.ScrollLeft * VarObjectsStation.Parts.Width,
               behavior: "smooth"
            });
            return MinSx;
         };

         //#endregion

         //--------------------------------------------------UPGRADE AREA----------------------------------------------------------//
         //#region
         const UpgradeArea = document.createElement('div');

         MicEnginereturn.VarObject.StandardCSS(UpgradeArea, "top", "0%", "right", "0px", `${VarObjectsStation.Parts.Height}px`, `${VarObjectsStation.Parts.Width}px`, "11");
         UpgradeArea.style.background = Colors.PartAreaBackground;;
         UpgradeArea.style.display = "none";
         UpgradeArea.style.borderRadius = "30px";
         UpgradeArea.style.border = "10px solid white";
         UpgradeArea.style.zIndex = "100";

         //MINIATURA SX
         const Part = document.createElement('img');
         G1_CSSPart(UpgradeArea, Part, "absolute", "100px", "100px");
         Part.style.top = "10px";
         Part.style.left = "30px";

         //MINIATURA DX
         const Part2 = document.createElement('img');
         G1_CSSPart(UpgradeArea, Part2, "absolute", "100px", "100px");
         Part2.style.top = "10px";
         Part2.style.right = "30px";

         //DESCRIZIONE SX
         const Text = document.createElement('p');
         G1_CSSPart(UpgradeArea, Text, "absolute", "200px", "20px");
         Text.style.top = "120px";
         Text.style.left = "0px";

         //DESCRIZIONE DX
         const Text2 = document.createElement('p');
         G1_CSSPart(UpgradeArea, Text2, "absolute", "200px", "20px");
         Text2.style.top = "120px";
         Text2.style.right = "0px";

         //CARATTERISTICHE SX
         const Text3 = document.createElement('p');
         G1_CSSPart(UpgradeArea, Text3, "absolute", "200px", "50px");
         Text3.style.top = "165px";
         Text3.style.left = "0px";

         //CARATTERISTICHE DX
         const Text4 = document.createElement('p');
         G1_CSSPart(UpgradeArea, Text4, "absolute", "200px", "50px");
         Text4.style.top = "165px";
         Text4.style.right = "0px";

         //COSTO
         const Text5 = document.createElement('p');
         G1_CSSPart(UpgradeArea, Text5, "absolute", "200px", "25px");
         Text5.style.top = "230px";
         Text5.style.right = "0px";
         //#endregion

         //------------------------------------EDITOR 3D NAVE SPAZIALE + AMBIENTE + LUCI---------------------------------------------//
         //#region
         MicEnginereturn.User.Object.position.set(0, 0, 0);

         /*-------------------CAMERA--------------------*/
         MicEnginereturn.CameraGroup.children[0].children[0].children[0].position.set(50, 25, -25);

         /*-----------------MODELLO PARETE-----------------*/
         //PANNELLO LUMINOSO SOFFITTO
         let PosPlafoZ = [-50, 0, 50];

         for (let i = 0; i < 3; i++) {
            const LucesPot = MicEnginereturn.VarObject.CreateSpotLight({
               Color: 0xffffff,
               Intensity: 2,
               Distance: 100,
               Angle: Math.PI / 2.3,
               Penumbra: 0,
               Decay: 0,
               PosX: 0,
               PosY: 30,
               PosZ: PosPlafoZ[i],
               TargetX: 0,
               TargetY: 0,
               TargetZ: PosPlafoZ[i],
            });
         };

         /*CAMBIO COLORE*/
         G0_ChangeShipColor();

         G1_MotorLightsOff();
         //#endregion

         //-----------------------------------------------MINIATURA NAVE SPAZIALE-----------------------------------------------//
         //#region
         let ShipPulsArea;
         ShipPulsArea = document.createElement('div');
         MicEnginereturn.VarObject.StandardCSS(ShipPulsArea, "bottom", "10px", "right", "10px", "20%", "50%");

         //CREAZIONE RETTANGOLI SELEZIONABILI
         const ShipButtonArea = document.createElement('div');
         MicEnginereturn.VarObject.StandardCSS(ShipButtonArea, "bottom", "10px", "right", "10px", "20%", "50%");

         for (let i = 0; i < VarObjectsStation.MaxModuli; i++) {
            const ShipButton = document.createElement('div');
            ShipButton.style.display = "block";
            ShipButton.style.position = "absolute";
            ShipButton.style.bottom = "0px";
            ShipButton.style.right = `${i * 50}px`;
            ShipButton.style.width = "50px";
            ShipButton.style.height = "100%";

            ShipButton.addEventListener('click', function () {
               //PERMETTI DI PREMERE LE MINIATURE SOLO SE NON SI HANNO LE SCHERMATE DI BUY E UPGRADE APERTE
               if (VarObjectsStation.ShopPart == false && VarObjectsStation.UpgradePart == false) {
                  VarObjectsStation.SelectedModule = i;
                  G1_UpdateTypeModule();           //AGGIORNA I VALORI DEI MODULI SELEZIONATI
                  G1_ResetShipButton(ShipPulsArea, ButtonColor);
                  G1_UpdateEditorPuls();           //AGGIORNA I PULSANTI: SHIFT MIN PLUS NEW SELL UPGRADE
                  DynamicHangarHUD.render();
               };
            });

            ShipButtonArea.appendChild(ShipButton);
         };

         G1_CreateButtonShip(ShipPulsArea, MicEnginereturn.VarModularShip.Moduli, MicEnginereturn.VarModularShip.ModuleArray);
         VarObjectsStation.SelectedModule = 0;
         G1_ResetShipButton(ShipPulsArea, ButtonColor);
         G1_UpdateEditorPuls();           //AGGIORNA I PULSANTI: SHIFT MIN PLUS NEW SELL UPGRADE
         //#endregion

         /*-----------------------------------------------------SUONI------------------------------------------------------------*/
         //#region
         const OnceSounds = new MicEnginereturn.VarObject.OnceFunction(function () {
            if (VarObjectsStation.Sounds == 1) MicEnginereturn.Audio.PlayOnceSound(0, GlobalVar.VolumeSounds / 200); //0 MARTELLO
            if (VarObjectsStation.Sounds == 2) MicEnginereturn.Audio.PlayOnceSound(1, GlobalVar.VolumeSounds / 100); //1 CHIAVE PNEUMATICA
            VarObjectsStation.Sounds = 0;
         });

         function RandomSoundLoop() {
            VarObjectsStation.SoundsInterval = 5000 + Math.random() * 5000;
            VarObjectsStation.Sounds = Math.round(1 + Math.random());
            OnceSounds.Update(VarObjectsStation.Sounds);
            setTimeout(RandomSoundLoop, VarObjectsStation.SoundsInterval);
         };

         RandomSoundLoop();
         //#endregion

         /*-----------------------------------------------------TUTORIAL------------------------------------------------------------*/
         //#region
         if (VarObjectsStation.Tutorial < 28) {
            VarObjectsStation.Help = true;
            DynamicHangarHUD.setButtonColor(12, Colors.SelectedPuls);

            setInterval(() => {
               VarObjectsStation.Lampeggio = !VarObjectsStation.Lampeggio;

               if (VarObjectsStation.Tutorial == 20) {      //LAMPEGGIO PULSANTE + MODULO
                  //PULSANTE + MODULO
                  if (VarObjectsStation.Lampeggio == true) DynamicHangarHUD.setButtonColor(4, Colors.SelectedPuls);
                  else DynamicHangarHUD.setButtonColor(4, Colors.ActivePuls);
               };
               if (VarObjectsStation.Tutorial == 21) {      //LAMPEGGIO PULSANTE NEW
                  DynamicHangarHUD.setButtonColor(4, Colors.ActivePuls);      //PULSANTE + MODULO
                  //PULSANTE NEW
                  if (VarObjectsStation.Lampeggio == true) DynamicHangarHUD.setButtonColor(9, Colors.SelectedPuls);
                  else DynamicHangarHUD.setButtonColor(9, Colors.ActivePuls);
               };
               if (VarObjectsStation.Tutorial == 22) {      //LAMPEGGIO OK PARTS AREA (MODULO NAVE)
                  DynamicHangarHUD.setButtonColor(4, Colors.ActivePuls);                     //4 PULSANTE + MODULO
                  DynamicHangarHUD.setButtonColor(9, Colors.ActivePuls);                     //9 PULSANTE NEW
                  //PULSANTE OK PARTS AREA (MODULO NAVE)
                  if (VarObjectsStation.Lampeggio == true) {
                     if (VarObjectsStation.Parts.ScrollLeft == 0) {
                        DynamicHangarHUD.setButtonColor(13, Colors.SelectedPuls);            //13 OK PARTS AREA
                     } else {
                        DynamicHangarHUD.setButtonColor(13, Colors.PartAreaBackground);      //13 OK PARTS AREA
                        DynamicHangarHUD.setButtonColor(15, Colors.SelectedPuls);            //15 SX PARTS AREA
                     };
                  } else {
                     DynamicHangarHUD.setButtonColor(13, Colors.PartAreaBackground);         //13 OK PARTS AREA
                     DynamicHangarHUD.setButtonColor(15, Colors.PartAreaBackground);            //15 SX PARTS AREA
                  };
               };
               if (VarObjectsStation.Tutorial == 23) {      //LAMPEGGIO PULSANTE + MODULO
                  DynamicHangarHUD.setButtonColor(9, Colors.ActivePuls);      //PULSANTE NEW
                  //PULSANTE + MODULO
                  if (VarObjectsStation.Lampeggio == true) DynamicHangarHUD.setButtonColor(4, Colors.SelectedPuls);
                  else DynamicHangarHUD.setButtonColor(4, Colors.ActivePuls);
               };
               if (VarObjectsStation.Tutorial == 24) {      //LAMPEGGIO PULSANTE NEW
                  DynamicHangarHUD.setButtonColor(4, Colors.ActivePuls);      //PULSANTE + MODULO
                  //PULSANTE NEW
                  if (VarObjectsStation.Lampeggio == true) DynamicHangarHUD.setButtonColor(9, Colors.SelectedPuls);
                  else DynamicHangarHUD.setButtonColor(9, Colors.ActivePuls);
               };
               if (VarObjectsStation.Tutorial == 25) {      //LAMPEGGIO OK PARTS AREA (MODULO CONTAINER)
                  DynamicHangarHUD.setButtonColor(4, Colors.ActivePuls);                     //4 PULSANTE + MODULO
                  DynamicHangarHUD.setButtonColor(9, Colors.ActivePuls);                     //9 PULSANTE NEW
                  //PULSANTE OK PARTS AREA (MODULO NAVE)
                  if (VarObjectsStation.Lampeggio == true) {
                     if (VarObjectsStation.Parts.ScrollLeft == 2) {
                        DynamicHangarHUD.setButtonColor(13, Colors.SelectedPuls);            //13 OK PARTS AREA
                     } else {
                        DynamicHangarHUD.setButtonColor(13, Colors.PartAreaBackground);      //13 OK PARTS AREA
                        DynamicHangarHUD.setButtonColor(14, Colors.SelectedPuls);            //14 DX PARTS AREA
                     };
                  } else {
                     DynamicHangarHUD.setButtonColor(13, Colors.PartAreaBackground);         //13 OK PARTS AREA
                     DynamicHangarHUD.setButtonColor(14, Colors.PartAreaBackground);         //14 DX PARTS AREA
                  };
               };
               if (VarObjectsStation.Tutorial == 26) {      //LAMPEGGIO PULSANTE BUY
                  DynamicHangarHUD.setButtonColor(4, Colors.ActivePuls);      //PULSANTE + MODULO
                  DynamicHangarHUD.setButtonColor(9, Colors.ActivePuls);      //PULSANTE NEW
                  //PULSANTE NEW
                  if (VarObjectsStation.Lampeggio == true) DynamicHangarHUD.setButtonColor(1, Colors.SelectedPuls);
                  else DynamicHangarHUD.setButtonColor(1, Colors.ActivePuls);
               };
               if (VarObjectsStation.Tutorial == 27) {      //LAMPEGGIO PULSANTE EXIT
                  DynamicHangarHUD.setButtonColor(1, Colors.ActivePuls);      //PULSANTE BUY
                  DynamicHangarHUD.setButtonColor(4, Colors.ActivePuls);      //PULSANTE + MODULO
                  DynamicHangarHUD.setButtonColor(9, Colors.ActivePuls);      //PULSANTE NEW
                  //PULSANTE NEW
                  if (VarObjectsStation.Lampeggio == true) StaticStationHUD.setButtonColor(2, Colors.SelectedPuls);
                  else StaticStationHUD.setButtonColor(2, Colors.ActivePuls);
               };
               DynamicHangarHUD.render();
               StaticStationHUD.render();
            }, 200);
         };
         //#endregion

         G0_UpdateShipUpgrade(false);
         DynamicHangarHUD.render();

         setInterval(() => {
            //console.log(VarObjectsStation.Tutorial);

         }, 1000);
      };
      startGame().then(() => {
         gameReady = true;
         MicEnginereturn.VarObject.E3_UpdateProgress(true);
      });
   };

   //---------------------------------------------PAGINA STAZIONE SPAZIALE HUB 695-----------------------------------------//
   if (GlobalVar.Page == "Station" && GlobalVar.StationType == 1) {
      /*-----------------------------------------------PARAMETRI ENGINE----------------------------------------------------------*/
      MicEngineParam = HubStationParam;
      if (GlobalVar.Capitolo == 5 && GlobalVar.Missione == 3) Economy.PriceFuel *= Economy.FinalPriceFuel;

      /*----------------------------------------------CARICAMENTO ENGINE--------------------------------------------------------*/
      async function startGame() {
         MicEnginereturn = await MicEngine(MicEngineParam, Oggetti, Geometrie, Materiali);
         if (MicEngineParam.Moduli.Debug == true && MicEngineParam.Debug.Return == true) {
            console.log("MicEnginereturn");
            console.log(MicEnginereturn.VarObject.E3_ConsoleLogSimpleObject(MicEnginereturn));
         };
         /*---------------------------------------AUTOMAZIONI SOLAR SYSTEM DELIVERY------------------------------------------------*/
         let DynamicHubHUD;

         //------------------------FUNZIONI STAZIONE HUB-----------------------------------//
         function UpdateMaxValues() {     //AGGIORNA I VALORI MASSIMI DI ARIA, ACQUA E CIBO
            VarObjectsHub.AirMax = Economy.AirMax + (GlobalVar.ShipModules * Economy.ShipModuleAir);
            VarObjectsHub.WaterMax = Economy.WaterMax + (GlobalVar.ShipModules * Economy.ShipModuleWater);
            VarObjectsHub.FoodMax = Economy.FoodMax + (GlobalVar.ShipModules * Economy.ShipModuleFood);
         };
         function G1_UpdateCrew() {          //AGGIORNA I MEMBRI DI EQUIPAGGIO ATTUALI E RICHIESTI
            VarObjectsHub.CrewMembers = 1 + GlobalVar.ExtractionModules + GlobalVar.ContainerModules + GlobalVar.RadarModules;
            VarObjectsHub.Crew = 1 + GlobalVar.ShipModules * 2;
         };
         function G1_ExtiPageSaveMissionsHub(Url) {
            for (let i = 0; i < GlobalVar.NumMission; i++) {
               window.sessionStorage.setItem(`MissionPlanet${i}`, GlobalVar.MissionPlanet[i]);
               window.sessionStorage.setItem(`MissionMoon${i}`, GlobalVar.MissionMoon[i]);
               window.sessionStorage.setItem(`MissionSubMoon${i}`, GlobalVar.MissionSubMoon[i]);
               window.sessionStorage.setItem(`MissionLoad${i}`, GlobalVar.MissionLoad[i]);
            };
            //MISSIONI ACCETTATE
            SaveSystem.setItem(`MissionCurrent`, GlobalVar.MissionCurrent);
            SaveSystem.setItem(`MissionPlanetCurrent`, GlobalVar.MissionPlanetCurrent);
            SaveSystem.setItem(`MissionMoonCurrent`, GlobalVar.MissionMoonCurrent);
            SaveSystem.setItem(`MissionSubMoonCurrent`, GlobalVar.MissionSubMoonCurrent);
            SaveSystem.setItem(`MissionLoadCurrent`, GlobalVar.MissionLoadCurrent);
            SaveSystem.setItem(`MissionRewardCurrent`, GlobalVar.MissionRewardCurrent);

            SaveSystem.setItem('Money', GlobalVar.Money);
            SaveSystem.setItem('Coin', GlobalVar.Coin);

            SaveSystem.setItem(`Fuel`, GlobalVar.Fuel);
            SaveSystem.setItem(`Air`, VarObjectsHub.Air);
            SaveSystem.setItem(`Water`, VarObjectsHub.Water);
            SaveSystem.setItem(`Food`, VarObjectsHub.Food);

            SaveSystem.update();

            //CAMBIO PAGINA
            G0_ShowLoadingAndReload(Url);     //SaveSystem.update();
         };
         function G1_DisplayMissionsNpc(Num) {     //VISUALIZZA L'NPC PER LE MISSIONI INDICAZIONI SULLE MISSIONI DISABILITATE
            MicEnginereturn.VarObject.E3_DisplayNPCSingleButton({
               //GENERICI
               Font: 14,                                             //FONT IN PIXEL
               PosX: 110,                                            //POSIZIONE X
               PosY: 50,                                              //POSIZIONE Y
               zIndex: "20",
               //IMMAGINE
               LargImage: 150,                                       //LARGHEZZA IMMAGINE
               AtImage: 100,                                         //ALTEZZA IMMAGINE
               Image: NPC.Radio.Immagini[GlobalVar.StationType - 1][GlobalVar.GenderNPC],               //IMMAGINE
               //TESTO
               PositionText: "Side",                               //POSIZIONE DEL TESTO RELATIVA ALL'IMMAGINE "Down" "Side"
               LargText: 400,
               AltText: 80,                                          //ALTEZZA TESTO
               ColorText: Colors.NPCColor,                             //COLORE SFONDO TESTO
               ColorFontText: "#ffffffff",                         //COLORE FONT TESTO
               Text: NPC.Hub.Testi[Num][GlobalVar.Language + 1],               //TESTO
               //PULSANTE
               AltPuls: 40,                   //ALTEZZA PULSANTI
               ColorPuls: Colors.NPCColor,                             //COLORE SFONDO PULSANTI
               ColorFontPuls: "#ffffffff",                         //COLORE FONT PULSANTI
               ColorBorderPuls: Colors.NPCBorderColor,                      //COLORE BORDO PULSANTI
               Text1: "OK",                   //TESTO PULSANTE 1
            },
               function () { });
         };

         /*----------------------------------------------AVVIO DELLA PAGINA + STORIA---------------------------------------------------*/
         //#region
         SaveSystem.setItem(`SpaceStation`, 1);       //FLAG DI PAGINA

         //DISTANZE PIANETI, LUNE E SUB-LUNE DAL LOCAL STORAGE CALCOLATE NEL GIOCO
         for (let i = 0; i < GlobalVar.IndDistNum; i++) {
            VarObjectsHub.IndDist.push(Number(SaveSystem.getItem(`IndDist${i}`)));
         };

         for (let i = 0; i < GlobalVar.IndMoonDistNum; i++) {
            VarObjectsHub.IndMoonDist.push(Number(SaveSystem.getItem(`IndMoonDist${i}`)));
         };
         for (let i = 0; i < GlobalVar.IndSubMoonDistNum; i++) {
            VarObjectsHub.IndSubMoonDist.push(Number(SaveSystem.getItem(`IndSubMoonDist${i}`)));
         };

         //CARICAMENTO MISSIONI DA SESSION STORAGE SE PRESENTI
         G0_LoadMissions();

         /*---------------FLAG DI STORIA---------------*/
         //CAPITOLO 0, MISSIONE 2, ALMENO 2 MODULI CONTAINER
         if (GlobalVar.Capitolo == 0 && GlobalVar.Missione == 2 && GlobalVar.ContainerModules > 1) {
            VarObjectsHub.FlagStoria = 1;       //NPC.MissionHub.Testi[0]
            VarObjectsHub.PlanetStoria = 1;
         };
         //CAPITOLO 1
         if (GlobalVar.Capitolo == 1) {
            //CAPITOLO 1, MISSIONE 1, CONSEGNA DA VENERE
            if (GlobalVar.Missione == 1) {
               VarObjectsHub.FlagStoria = 2;       //NPC.MissionHub.Testi[1]
               VarObjectsHub.PlanetStoria = 2;
            };
            //CAPITOLO 1, MISSIONE 3, CONSEGNA DA GIOVE
            if (GlobalVar.Missione == 3) {
               VarObjectsHub.FlagStoria = 3;       //NPC.MissionHub.Testi[2]
               VarObjectsHub.PlanetStoria = 5;
            };
            //CAPITOLO 1, MISSIONE 3, CONSEGNA DA SATURNO
            if (GlobalVar.Missione == 5) {
               VarObjectsHub.FlagStoria = 4;       //NPC.MissionHub.Testi[3]
               VarObjectsHub.PlanetStoria = 5;
            };
            //CAPITOLO 1, MISSIONE 5, CONSEGNA DA URANO
            if (GlobalVar.Missione == 7) {
               VarObjectsHub.FlagStoria = 5;       //NPC.MissionHub.Testi[4]
               VarObjectsHub.PlanetStoria = 6;
            };
         };
         //CAPITOLO 2
         if (GlobalVar.Capitolo == 2) {
            //ATTESA FINE LAVORI COSTRUZIONE
            if (GlobalVar.Missione == 0 && SaveSystem.getItem('TimeBar') == 0) {
               VarObjectsHub.PlanetStoria = 0;    //PERMETTE DI ATTIVARE L'NPC DA QUALSIASI HUB
               VarObjectsHub.FlagStoria = 6;       //NPC.MissionHub.Testi[5]
            };
            //ATTESA CARICAMENTO CONDENSATORI
            if (GlobalVar.Missione == 5 && SaveSystem.getItem('TimeBar') == 0) {
               VarObjectsHub.PlanetStoria = 0;    //PERMETTE DI ATTIVARE L'NPC DA QUALSIASI HUB
               VarObjectsHub.FlagStoria = 6;       //NPC.MissionHub.Testi[5]
            };
         };

         //CAPITOLO 3, MISSIONE 3, ATTESA CONCLUSA
         if (GlobalVar.Capitolo == 3 && GlobalVar.Missione == 3 && SaveSystem.getItem('TimeBar2') == 0) {
            VarObjectsHub.PlanetStoria = 0;    //PERMETTE DI ATTIVARE L'NPC DA QUALSIASI HUB
            VarObjectsHub.FlagStoria = 6;       //NPC.MissionHub.Testi[5]
         };

         //NPC DI BENVENUTO E DI STORIA
         setTimeout(() => {
            /*MESSAGGIO ALTERNATIVO IN CASO DI MISSIONE ATTIVA*/
            if (VarObjectsHub.FlagStoria > 0) {
               //PIANETA DIVERSO DA QUELLO DELLA STORIA
               if (GlobalVar.PlanetOrbit != VarObjectsHub.PlanetStoria) {
                  MicEnginereturn.VarObject.E3_DisplayNPC({
                     //GENERICI
                     Font: 14,                                             //FONT IN PIXEL
                     PosX: -110,                                            //POSIZIONE X
                     PosY: 0,                                              //POSIZIONE Y
                     zIndex: "20",
                     //IMMAGINE
                     LargImage: 150,                                       //LARGHEZZA IMMAGINE
                     AtImage: 100,                                         //ALTEZZA IMMAGINE
                     Image: NPC.Radio.Immagini[GlobalVar.StationType - 1][GlobalVar.GenderNPC],               //IMMAGINE
                     //TESTO
                     PositionText: "Side",                               //POSIZIONE DEL TESTO RELATIVA ALL'IMMAGINE "Down" "Side"
                     LargText: 400,
                     AltText: 90,                                          //ALTEZZA TESTO
                     ColorText: Colors.NPCColor,                             //COLORE SFONDO TESTO
                     ColorFontText: "#ffffffff",                         //COLORE FONT TESTO
                     Text: NPC.MissionHub.Testi[VarObjectsHub.FlagStoria - 1][GlobalVar.Language + 1],               //TESTO
                     //TESTO CONTINUA
                     Text1: `${NPC.Click[GlobalVar.Language]}`,                      //TESTO CONTINUA
                     Time: NPC.MissionHub.Testi[VarObjectsHub.FlagStoria - 1][0]                           //TEMPO
                  },
                     function () { });             //FUNZIONE
                  //SE IL PIANETA È DIVERSO DAL PIANETA DI PARTENZA ATTIVA IL FLAG CHE SBLOCCA LA MISSIONE NEL GIOCO
                  SaveSystem.setItem(`FlagMissione`, 1);
               }
               else G0_WelcomeOnStation(400);
            }
            //MESSAGGIO NORMALE
            else {
               //1 VOLTA SU 4 VISUALIZZA IL MESSAGGIO CIRCA LA STAZIONE WORMHOLE
               if (Math.random() < 0.25 && GlobalVar.Capitolo == 0 && GlobalVar.Missione <= 2) {
                  MicEnginereturn.VarObject.E3_DisplayNPC({
                     //GENERICI
                     Font: 14,                                             //FONT IN PIXEL
                     PosX: 110,                                            //POSIZIONE X
                     PosY: 0,                                              //POSIZIONE Y
                     zIndex: "20",
                     //IMMAGINE
                     LargImage: 150,                                       //LARGHEZZA IMMAGINE
                     AtImage: 100,                                         //ALTEZZA IMMAGINE
                     Image: NPC.Radio.Immagini[GlobalVar.StationType - 1][GlobalVar.GenderNPC],               //IMMAGINE
                     //TESTO
                     PositionText: "Side",                               //POSIZIONE DEL TESTO RELATIVA ALL'IMMAGINE "Down" "Side"
                     LargText: 400,
                     AltText: 80,                                          //ALTEZZA TESTO
                     ColorText: Colors.NPCColor,                             //COLORE SFONDO TESTO
                     ColorFontText: "#ffffffff",                         //COLORE FONT TESTO
                     Text: NPC.Welcome.Testi[9][GlobalVar.Language + 1],               //TESTO
                     //TESTO CONTINUA
                     Text1: `${NPC.Click[GlobalVar.Language]}`,                      //TESTO CONTINUA
                     Time: NPC.Welcome.Testi[GlobalVar.StationType - 1][0]                           //TEMPO
                  },
                     function () { });             //FUNZIONE
               }
               else G0_WelcomeOnStation(400);
            };
         }, 1000);

         //#endregion

         /*---------------------------------------------------TITOLO (GAME)---------------------------------------------------------------*/
         G0_TitleStation();

         //--------------------------PULSANTI STATICI COMUNI A TUTTE LE STAZIONI (MENU, MAPPA RETURN)---------------------------------------//
         const StaticStationHUD = G0_GenerateStaticStationHUD({
            Menu: function () {
               G1_ExtiPageSaveMissionsHub("Home");
            },
            Mappa: function () {
               G1_ExtiPageSaveMissionsHub("Map");
            },
            Return: function () {
               G1_ExtiPageSaveMissionsHub("Game");
            },
            ClickIndex: 0,
         });

         /*---------------------------------------------------GENERATE HUD-------------------------------------------------------*/
         //#region
         //AGGIORNA IL VALORE MASSIMO
         UpdateMaxValues();     //AGGIORNA I VALORI MASSIMI DI ARIA, ACQUA E CIBO

         /*---------------------------------FUNZIONE GENERATE HUD-----------------------------*/
         DynamicHubHUDObj.DispatchEvent = StaticStationHUD.canvas;
         DynamicHubHUD = S0_GenerateHUDCanvas(DynamicHubHUDObj);

         //-------------------------MONEY-----------------------------//
         DynamicHubHUD.setButtonText(0, `${GlobalVar.Money}${Economy.MoneySymbol}`);
         CoinGoldImg = document.createElement("img");
         MicEnginereturn.VarObject.StandardCSS(CoinGoldImg, "top", "0px", "left", "0px", "30px", "30px");
         CoinGoldImg.src = Sprite.CoinGold;

         //-------------------------COIN-----------------------------//
         DynamicHubHUD.setButtonText(1, `${GlobalVar.Coin}`);
         CoinSilverImg = document.createElement('img');
         MicEnginereturn.VarObject.StandardCSS(CoinSilverImg, "top", "0px", "left", "0px", "30px", "30px");
         CoinSilverImg.src = Sprite.CoinSilver;

         /*-------------------------------PULSANTI, BARRE E TESTI-------------------------------------*/
         //#region
         /*-----------------------------------BARRA CARICO------------------------------*/
         //TESTO
         DynamicHubHUD.setBarText(4, `${GlobalVar.MissionLoadCurrent}/${GlobalVar.ContainerModules * Economy.Load}kg`);

         //AGGIORNA LA BARRA DEL CARICO
         DynamicHubHUD.setBarValue(4, GlobalVar.MissionLoadCurrent / (GlobalVar.ContainerModules * Economy.Load));

         /*-----------------------------------BARRA CARBURANTE------------------------------*/
         const FuelFill = MicEnginereturn.Canvas.E3_FillValueBarCanvas({
            //VARIABILE
            Money: GlobalVar.Money,                                     //VARIABILE DEL DENARO POSSEDUTO
            MaxValue: Economy.FuelUpgrade[VarObjectsHub.UpgradeTank],   //MASSIMO VALORE RAGGIUNGIBILE DALLA VARIABILE
            Value: GlobalVar.Fuel,                                      //VARIABILE
            //CANVAS
            MoneySymbol: Economy.MoneySymbol,                           //SIMBOLO DENARO
            Hud: DynamicHubHUD,                                         //CANVAS DI RIFERIMENTO
         });

         DynamicHubHUD.setBarValue(0, GlobalVar.Fuel / Economy.FuelUpgrade[VarObjectsHub.UpgradeTank]);

         //TESTO
         DynamicHubHUD.setBarText(0, `${(GlobalVar.Fuel).toFixed(0)}/${Economy.FuelUpgrade[VarObjectsHub.UpgradeTank]}`);

         //PULSANTE RIEMPIMENTO
         FuelFill.UpdatePuls(2, 1, Economy.PriceFuel);

         DynamicHubHUD.setButtonCallback(2, () => {
            FuelFill.Fill(0, 2, 1, Economy.PriceFuel, GlobalVar.Money);
            G0_ShowMoneySpentCanvas(DynamicHubHUD, 0, FuelFill.Money - GlobalVar.Money);
            if (GlobalVar.Money != FuelFill.Money) G0_MoveMoneyImg(90, 240, 200, 500, false);
            GlobalVar.Money = FuelFill.Money;
            GlobalVar.Fuel = FuelFill.Value;
            //AGGIORNA IL TESTO DEL PULSANTE 1/4s
            FuelFill.UpdatePuls(6, 0.25, Economy.PriceFuel);
         });

         //PULSANTE RIEMPIMENTO 1/4
         FuelFill.UpdatePuls(6, 0.25, Economy.PriceFuel);

         DynamicHubHUD.setButtonCallback(6, () => {
            FuelFill.Fill(0, 6, 0.25, Economy.PriceFuel, GlobalVar.Money);
            G0_ShowMoneySpentCanvas(DynamicHubHUD, 0, FuelFill.Money - GlobalVar.Money);
            if (GlobalVar.Money != FuelFill.Money) G0_MoveMoneyImg(90, 240, 200, 500, false);
            GlobalVar.Money = FuelFill.Money;
            GlobalVar.Fuel = FuelFill.Value;
            //AGGIORNA IL TESTO DEL PULSANTE DI RIEMPIMENTO
            FuelFill.UpdatePuls(2, 1, Economy.PriceFuel);
         });

         /*-----------------------------------BARRA ARIA------------------------------*/
         const AirFill = MicEnginereturn.Canvas.E3_FillValueBarCanvas({
            //VARIABILE
            Money: GlobalVar.Money,               //VARIABILE DEL DENARO POSSEDUTO
            MaxValue: VarObjectsHub.AirMax,       //MASSIMO VALORE RAGGIUNGIBILE DALLA VARIABILE
            Value: VarObjectsHub.Air,             //VARIABILE
            //CANVAS
            MoneySymbol: Economy.MoneySymbol,     //SIMBOLO DENARO
            Hud: DynamicHubHUD,                   //CANVAS DI RIFERIMENTO
         });

         DynamicHubHUD.setBarValue(1, VarObjectsHub.Air / VarObjectsHub.AirMax);

         //TESTO
         DynamicHubHUD.setBarText(1, `${(VarObjectsHub.Air).toFixed(0)}/${VarObjectsHub.AirMax}`);

         //PULSANTE RIEMPIMENTO
         AirFill.UpdatePuls(3, 1, Economy.PriceAir);
         DynamicHubHUD.setButtonCallback(3, () => {
            AirFill.Fill(1, 3, 1, Economy.PriceAir, GlobalVar.Money);
            G0_ShowMoneySpentCanvas(DynamicHubHUD, 0, AirFill.Money - GlobalVar.Money);
            if (GlobalVar.Money != AirFill.Money) G0_MoveMoneyImg(90, 240, 200, 500, false);
            GlobalVar.Money = AirFill.Money;
            VarObjectsHub.Air = AirFill.Value;
         });

         /*-----------------------------------BARRA ACQUA------------------------------*/
         const WaterFill = MicEnginereturn.Canvas.E3_FillValueBarCanvas({
            //VARIABILE
            Money: GlobalVar.Money,                //VARIABILE DEL DENARO POSSEDUTO
            MaxValue: VarObjectsHub.WaterMax,      //MASSIMO VALORE RAGGIUNGIBILE DALLA VARIABILE
            Value: VarObjectsHub.Water,            //VARIABILE
            //CANVAS
            MoneySymbol: Economy.MoneySymbol,      //SIMBOLO DENARO
            Hud: DynamicHubHUD,                    //CANVAS DI RIFERIMENTO
         });

         DynamicHubHUD.setBarValue(2, VarObjectsHub.Water / VarObjectsHub.WaterMax);

         //TESTO
         DynamicHubHUD.setBarText(2, `${(VarObjectsHub.Water).toFixed(0)}/${VarObjectsHub.WaterMax}`);

         //PULSANTE RIEMPIMENTO
         WaterFill.UpdatePuls(4, 1, Economy.PriceWater);
         DynamicHubHUD.setButtonCallback(4, () => {
            WaterFill.Fill(2, 4, 1, Economy.PriceWater, GlobalVar.Money);
            G0_ShowMoneySpentCanvas(DynamicHubHUD, 0, WaterFill.Money - GlobalVar.Money);
            if (GlobalVar.Money != WaterFill.Money) G0_MoveMoneyImg(90, 240, 200, 500, false);
            GlobalVar.Money = WaterFill.Money;
            VarObjectsHub.Water = WaterFill.Value;
         });

         /*-----------------------------------BARRA CIBO------------------------------*/
         const FoodFill = MicEnginereturn.Canvas.E3_FillValueBarCanvas({
            //VARIABILE
            Money: GlobalVar.Money,                //VARIABILE DEL DENARO POSSEDUTO
            MaxValue: VarObjectsHub.FoodMax,       //MASSIMO VALORE RAGGIUNGIBILE DALLA VARIABILE
            Value: VarObjectsHub.Food,             //VARIABILE
            //CANVAS
            MoneySymbol: Economy.MoneySymbol,      //SIMBOLO DENARO
            Hud: DynamicHubHUD,                    //CANVAS DI RIFERIMENTO
         });

         DynamicHubHUD.setBarValue(3, VarObjectsHub.Food / VarObjectsHub.FoodMax);

         //TESTO
         DynamicHubHUD.setBarText(3, `${(VarObjectsHub.Food).toFixed(0)}/${VarObjectsHub.FoodMax}`);

         //PULSANTE RIEMPIMENTO
         FoodFill.UpdatePuls(5, 1, Economy.PriceFood);
         DynamicHubHUD.setButtonCallback(5, () => {
            FoodFill.Fill(3, 5, 1, Economy.PriceFood, GlobalVar.Money);
            G0_ShowMoneySpentCanvas(DynamicHubHUD, 0, FoodFill.Money - GlobalVar.Money);
            if (GlobalVar.Money != FoodFill.Money) G0_MoveMoneyImg(90, 240, 200, 500, false);
            GlobalVar.Money = FoodFill.Money;
            VarObjectsHub.Food = FoodFill.Value;
         });

         //------------------------------------------COIN----------------------------------//
         DynamicHubHUD.showButton(13, false);
         DynamicHubHUD.showImage(5, false);

         window.addEventListener("VideoPronto", () => {
            VarObjectsHub.VideoPronto = true;
            DynamicHubHUD.showButton(13, true);
            DynamicHubHUD.showImage(5, true);
            DynamicHubHUD.render();
         });

         //Precarica video
         if (GlobalVar.EnableAdmob == true && Admob) Admob.caricaVideoPremiante();

         //Click sul pulsante (VECCHIA VERSIONE)
         // DynamicHubHUD.setButtonCallback(13, async () => {
         //    try {
         //       let Premio
         //       if (GlobalVar.EnableAdmob == true && Admob) Premio = await Admob.mostraVideoPremiante();
         //       if (GlobalVar.EnableCrazyGames && Crazygames) Premio = await Crazygames.mostraVideoPremiante();
         //       if (Premio.Reward) {
         //          GlobalVar.Coin += Economy.RewardCoin;
         //          DynamicHubHUD.setButtonText(1, `${GlobalVar.Coin}`);
         //          DynamicHubHUD.showButton(13, false);
         //          if (GlobalVar.EnableAdmob == true && Admob) Admob.caricaVideoPremiante();
         //          DynamicHubHUD.render();
         //          VarObjectsHub.VideoPronto = false;
         //       };
         //    } catch { }
         // });

         DynamicHubHUD.setButtonCallback(13, async () => {
            try {

               let Premio = { Reward: false };

               if (GlobalVar.EnableAdmob == true && Admob) {
                  Premio = await Admob.mostraVideoPremiante();
               }
               else if (GlobalVar.EnableCrazyGames && Crazygames) {
                  Premio = await Crazygames.mostraVideoPremiante();
               }

               if (Premio && Premio.Reward) {

                  GlobalVar.Coin += Economy.RewardCoin;
                  DynamicHubHUD.setButtonText(1, `${GlobalVar.Coin}`);
                  DynamicHubHUD.showButton(13, false);

                  if (GlobalVar.EnableAdmob == true && Admob) {
                     Admob.caricaVideoPremiante();
                  }

                  DynamicHubHUD.render();
                  VarObjectsHub.VideoPronto = false;

               } else {
                  // opzionale ma utile
                  DynamicHubHUD.render();
               }

            } catch (error) {
               console.warn("Errore rewarded:", error);
            }
         });

         //#endregion

         /*------------------------------------------------GENERATORE MISSIONI--------------------------------------------------------*/
         //#region
         G1_UpdateCrew();           //AGGIORNA I MEMBRI DI EQUIPAGGIO ATTUALI E RICHIESTI

         //RESETTA IL FLAG DI MISSIONE CONCLUSA NEL LOCAL STORAGE
         if (Number(SaveSystem.getItem(`MissionDone`)) == 1) SaveSystem.setItem(`MissionDone`, 0);    //MISSIONE CONCLUSA

         //ASSOCIAZIONE DEI PIANETI IN ORDINE DI DISTANZA DAL GIOCATORE ESCLUDENDO QUELLO DI PARTENZA E IL SOLE
         for (let i = 0; i < VarObjectsHub.IndDist.length; i++) {
            /*NOTA: 
            E3_SortedArray RESTITUISCE IL VALORE E L'INDICE DELL'ARRAY ORIGINALE IN ORDINE CRESCENTE, IL SECONDO
            PARAMETRO È QUALE VALORE RESTITUIRE, 1=IL SECONDO PERCHÈ IL PRIMO È IL PIANETA STESSO
            */
            GlobalVar.MissionPlanet[i] = MicEnginereturn.Math.E3_SortedArray(VarObjectsHub.IndDist, i + 1).Index - 1;
         };
         //OGGETTO DI MODIFICA ARRAY
         const ModifyArray = MicEnginereturn.Math.E3_ModifyArray(GlobalVar.MissionPlanet);
         let SunIndex = ModifyArray.GetIndex(-1);     //TROVA L'INDICE DEL SOLE
         ModifyArray.Sub(SunIndex, 1);                //ELIMINA IL SOLE DALL'ARRAY

         /*CONDIZIONI PER INCLUDERE SOLO UNO DEI PIANETI INTERNI*/
         /*SE SI HA FATTO L'UPGRADE DEI SERBATOI, DEI MOTORI E SE I VIAGGI LUNGHI SONO ABILITATI*/
         if (VarObjectsHub.UpgradeTank > 0 && VarObjectsHub.UpgradeMotor > 0 && VarObjectsHub.CrewMembers <= GlobalVar.LivingModules * 2) {
            //CREA UN NUOVO ELENCO PIANETI VUOTO
            const NewMissionPlanet = [];
            let InnerPlanetFound = false;
            for (let i = 0; i < GlobalVar.MissionPlanet.length; i++) {
               //UNA SOLA VOLTA QUANDO TROVA UN PIANETA INTERNO LO AGGIUNGE
               if (GlobalVar.MissionPlanet[i] <= 3) {
                  if (InnerPlanetFound == false) {
                     InnerPlanetFound = true;
                     NewMissionPlanet.push(GlobalVar.MissionPlanet[i]);
                  };
               }
               else NewMissionPlanet.push(GlobalVar.MissionPlanet[i]);
            };
            GlobalVar.MissionPlanet = NewMissionPlanet;
         };

         //PER OGNI MISSIONE
         for (let i = 0; i < GlobalVar.NumMission; i++) {
            let Planet = GlobalVar.MissionPlanet[i];
            /*
            -SCELTA DELLA STAZIONE DI DESTINAZIONE
            Vengono scansionate tutte le lune del pianeta, vengono salvate solo quelle adatte a ricevere un carico, di queste lune vengono scansionate le sub-lune e di queste vengono salvate quelle adatte a ricevere un carico, salvando anche il riferimento alla luna di appartenenza.
            Si somma il numero di lune e sublune salvate e si sorteggia una.
            -CALCOLO DEL CARICO
            Si calcola il fattore di distanza in base alla distanza massima, questo numero è 1 se equivale alla distanza massima, se la supera viene forzato a 1, questo fa si che il carico sia massimo per tutte le destinazioni oltre la distanza massima, questo fattore è moltiplicato per un coefficiente casuale che varia da -20% e +20% per dare una leggera casualità
            */
            //TUTTE LE MISSIONI MENO LA CORTA 3
            let Lune = [];       //INDICI LUNE STAZIONI SPAZIALI
            let SubLune = [];    //LUNE CHE HANNO UNA SUB-LUNA STAZIONE SPAZIALE
            //SCANSIONA LE LUNE DEL PIANETA
            for (let x = 0; x < Oggetti.PlanetarySystem.Modular[Planet].Modular.length; x++) {
               //SE LA LUNA È UNA STAZIONE SPAZIALE E NON È UN'HUB, HANGAR O PROGETTO WORMHOLE AGGIUNGILA ALL'ARRAY
               if (Oggetti.PlanetarySystem.Modular[Planet].Modular[x].Type > 1 && Oggetti.PlanetarySystem.Modular[Planet].Modular[x].Type != 4 && Oggetti.PlanetarySystem.Modular[Planet].Modular[x].Type != 8) Lune.push(x);

               //SCANSIONA LE SUB-LUNE DELLA LUNA
               for (let y = 0; y < Oggetti.PlanetarySystem.Modular[Planet].Modular[x].Modular.length; y++) {
                  //SE LA LUNA È UNA STAZIONE SPAZIALE E NON È UN'HUB O HANGAR AGGIUNGILA ALL'ARRAY
                  let SubmoonArray = [];
                  if (Oggetti.PlanetarySystem.Modular[Planet].Modular[x].Modular[y].Type > 1 && Oggetti.PlanetarySystem.Modular[Planet].Modular[x].Type != 4) {
                     SubmoonArray.push(x);
                     SubmoonArray.push(y);
                     SubLune.push(SubmoonArray);
                  };
               };
            };

            //SCEGLI A CASO UNA LUNA O UNA SUB-LUNA STAZIONE SPAZIALE
            let RandomStation = (Math.floor(Math.random() * (Lune.length + SubLune.length)));
            //SE SI SCEGLIE UNA LUNA
            if (RandomStation < Lune.length) {
               GlobalVar.MissionMoon[i] = Lune[RandomStation];
               GlobalVar.MissionSubMoon[i] = null;
            }
            //SE SI SCEGLIE UNA SUB-LUNA
            else {
               GlobalVar.MissionMoon[i] = SubLune[RandomStation - Lune.length][0];
               GlobalVar.MissionSubMoon[i] = SubLune[RandomStation - Lune.length][1];
            };

            /*CALCOLO DEL CARICO*/
            //CALCOLO DEL FATTORE DI DISTANZA IN BASE ALLA DISTANZA MASSIMA
            let MinLoad, MaxLoad;
            if (GlobalVar.ContainerModules == 0) {
               MinLoad = 0;
               MaxLoad = 0;
            };
            if (GlobalVar.ContainerModules == 1) {
               MinLoad = Economy.MinLoad;
               MaxLoad = GlobalVar.ContainerModules * Economy.Load;
            };
            if (GlobalVar.ContainerModules > 1) {
               MinLoad = (GlobalVar.ContainerModules - 1) * Economy.Load;
               MaxLoad = GlobalVar.ContainerModules * Economy.Load;
            };

            let Distance = (VarObjectsHub.IndDist[Planet + 1] / Economy.MaxLongRange);
            if (Distance > 1) Distance = 1;

            //GENERA CARICHI INTERPOLATI TRA IL VALORE MINIMO E IL MASSIMO
            GlobalVar.MissionLoad[i] = MinLoad + (MaxLoad - MinLoad) * (i / (GlobalVar.NumMission - 1))

            //DESTINAZIONE
            VarObjectsHub.MissionDestination[i] = Oggetti.PlanetarySystem.Modular[Planet].Name[GlobalVar.Language];

            //DISTANZA
            VarObjectsHub.MissionDistance[i] = MicEnginereturn.Math.E3_DisplayDistance(VarObjectsHub.IndDist[Planet + 1] * GameParam.DynamicCockpit.ScalaPos * 1000, false);

            //STABILIRE SE LA MISSIONE È CORTA O LUNGA PER DETERMINARE I REQUISITI
            if (VarObjectsHub.IndDist[Planet + 1] < Economy.LongRange) VarObjectsHub.ShortMission[i] = true;
            else VarObjectsHub.ShortMission[i] = false;

            //RICOMPENSA DALLA DISTANZA
            let RewardFuel = Economy.DistCoeff * VarObjectsHub.IndDist[Planet + 1] * 0.00001 * Economy.Consumo * Economy.PriceFuel;

            //RICOMPENSA DAL CARICO
            let RewardLoad = Economy.LoadCoeff * (GlobalVar.MissionLoad[i] / Economy.MinLoad);

            if (GlobalVar.ContainerModules > 0) VarObjectsHub.MissionReward[i] = Math.round(RewardFuel + RewardLoad);
            else VarObjectsHub.MissionReward[i] = 0;

            //TESTO
            if (GlobalVar.MissionSubMoon[i] == null) {
               VarObjectsHub.NameStation[i] = "";
               VarObjectsHub.NameStation1[i] = Oggetti.PlanetarySystem.Modular[Planet].Modular[GlobalVar.MissionMoon[i]].Name[GlobalVar.Language];
            }
            else {
               VarObjectsHub.NameStation[i] = Oggetti.PlanetarySystem.Modular[Planet].Modular[GlobalVar.MissionMoon[i]].Name[GlobalVar.Language];
               VarObjectsHub.NameStation1[i] = Oggetti.PlanetarySystem.Modular[Planet].Modular[GlobalVar.MissionMoon[i]].Modular[GlobalVar.MissionSubMoon[i]].Name[GlobalVar.Language];
            };

            //TESTO
            DynamicHubHUD.setButtonText(7 + i, `${i + 1}, ${Testi.Station.Destination[GlobalVar.Language]} ${VarObjectsHub.MissionDestination[i]}, ${VarObjectsHub.NameStation[i]} ${VarObjectsHub.NameStation1[i]}
               ${Testi.Station.Distance[GlobalVar.Language]} ${VarObjectsHub.MissionDistance[i]}, ${Testi.Station.Load[GlobalVar.Language]} ${GlobalVar.MissionLoad[i]}kg, ${VarObjectsHub.MissionReward[i]}${Economy.MoneySymbol}`);

            //MISSIONE ACCETTABILE
            if (GlobalVar.MissionCurrent == 0 && GlobalVar.MissionLoad[i] > 0 && GlobalVar.ContainerModules * Economy.Load >= GlobalVar.MissionLoad[i]) {
               //LA MISSIONE È LUNGA
               if (VarObjectsHub.ShortMission[i] == false) {
                  if (VarObjectsHub.CrewMembers <= GlobalVar.LivingModules * 2) VarObjectsHub.MissionEnable[i] = true;
                  else {
                     VarObjectsHub.MissionEnable[i] = false;
                     DynamicHubHUD.setButtonColor(7 + i, Colors.DisabledMission);
                  };
               }
               //LA MISSIONE È CORTA
               else VarObjectsHub.MissionEnable[i] = true;
            }
            else {
               VarObjectsHub.MissionEnable[i] = false;
               DynamicHubHUD.setButtonColor(7 + i, Colors.DisabledMission);
            };

            //--------------------------ACCETTAZIONE AL CLICK DEL MOUSE----------------------------//
            let result;

            //TESTO SPIEGAIONE DELLA MISSIONE DISABILITATA
            DynamicHubHUD.setButtonCallback(7 + i, () => {
               //SE LA MISSIONE È ABILITATA
               if (VarObjectsHub.MissionEnable[i] == true) {
                  result = window.confirm(`Accetti la missione?`);
                  //ACCETTA LA MISSIONE
                  if (result == true) {
                     GlobalVar.MissionCurrent = 1;
                     GlobalVar.MissionPlanetCurrent = GlobalVar.MissionPlanet[i];
                     GlobalVar.MissionMoonCurrent = GlobalVar.MissionMoon[i];
                     GlobalVar.MissionSubMoonCurrent = GlobalVar.MissionSubMoon[i];
                     GlobalVar.MissionLoadCurrent = GlobalVar.MissionLoad[i];
                     GlobalVar.MissionRewardCurrent = VarObjectsHub.MissionReward[i];
                     //AGGIORNA LA BARRA DEL CARICO
                     DynamicHubHUD.setBarValue(4, GlobalVar.MissionLoadCurrent / (GlobalVar.ContainerModules * Economy.Load));
                     //HubHUD.Barre[4].children[0].style.height = `${100 * GlobalVar.MissionLoadCurrent / (GlobalVar.ContainerModules * Economy.Load)}%`;
                     DynamicHubHUD.setBarText(4, `${GlobalVar.MissionLoadCurrent}/${GlobalVar.ContainerModules * Economy.Load}kg`);
                     SaveSystem.setItem(`MissionDone`, 0);     //MEMORIZZA NEL LOCAL STORAGE CHE LA MISSIONE NON È ANCORA CONCLUSA

                     //RENDI INDISPONIBILI TUTTE LE MISSIONI + QUELLA SPECIALE
                     for (let a = 0; a < GlobalVar.NumMission; a++) {
                        DynamicHubHUD.setButtonColor(7 + a, Colors.DisabledMission);
                        //HubHUD.Pulsanti[6 + a].style.backgroundColor = "#D3D3D3";
                        VarObjectsHub.MissionEnable[a] = false;
                     };
                     DynamicHubHUD.setButtonColor(12, Colors.DisabledMission);
                     DynamicHubHUD.render();
                  };
               }
               //2 MISSIONE ACCETTATA
               else if (GlobalVar.MissionCurrent == 1) G1_DisplayMissionsNpc(3);
               //MANCANZA DI MODULI CARICO
               else if (GlobalVar.ContainerModules == 0) G1_DisplayMissionsNpc(0);
               //2 CARICO NAVE INSUFFICENTE
               else if (GlobalVar.ContainerModules * Economy.Load < GlobalVar.MissionLoad[i]) G1_DisplayMissionsNpc(2);
               //1 MANCANZA MODULI VIAGGIO LUNGHI PER TUTTI
               else if (VarObjectsHub.ShortMission[i] == false && VarObjectsHub.CrewMembers >= GlobalVar.LivingModules * 2) {
                  G1_DisplayMissionsNpc(1);
               };

            });
         };

         //-----------------------MISSIONI STORIA----------------------//
         let SpecialDestination = Oggetti.PlanetarySystem.Modular[3].Name[GlobalVar.Language];
         let SpecialStation = Oggetti.PlanetarySystem.Modular[3].Modular[4].Name[GlobalVar.Language];
         let SpecialDistance = MicEnginereturn.Math.E3_DisplayDistance(VarObjectsHub.IndDist[4] * GameParam.DynamicCockpit.ScalaPos * 1000, false);

         function G2_SpecialMissionButton(Num) {
            //RICOMPENSA DALLA DISTANZA
            let RewardFuel = Economy.DistCoeff * VarObjectsHub.IndDist[4] * 0.00001 * Economy.Consumo * Economy.PriceFuel;

            //RICOMPENSA DAL CARICO
            let RewardLoad = Economy.LoadCoeff * (Economy.SpecialMissions[Num].Load / Economy.MinLoad);

            let SpecialReward = Math.round(Economy.RewardStory * RewardFuel + RewardLoad);

            //TESTO PULSANTE
            DynamicHubHUD.setButtonText(14, `${Testi.Station.SpecialMission[GlobalVar.Language]}, ${Testi.Station.Destination[GlobalVar.Language]} ${SpecialDestination}, ${SpecialStation}
               ${Testi.Station.Distance[GlobalVar.Language]} ${SpecialDistance}, ${Testi.Station.Load[GlobalVar.Language]} ${Economy.SpecialMissions[Num].Load}kg, ${SpecialReward}${Economy.MoneySymbol}`);

            /*------------LA MISSIONE RISPETTA I REQUISITI-----------*/
            //SE NON CI SONO ALTRE MISSIONI ATTIVE, SE IL CARICO TRASPORTABILE È ADEGUATO
            if (GlobalVar.MissionCurrent == 0 && GlobalVar.ContainerModules * Economy.Load >= Economy.SpecialMissions[Num].Load) {
               //SE LA MISSIONE È LONTANA
               if (VarObjectsHub.IndDist[4] > Economy.LongRange) {
                  //SE ABBIAMO ABBASTANZA POSTI LETTO ABILITALA
                  if (VarObjectsHub.CrewMembers <= GlobalVar.LivingModules * 2) VarObjectsHub.SpecialMissionEnable = true;
                  //ALTRIMENTI DISABILITALA
                  else VarObjectsHub.SpecialMissionEnable = false;
               }
               //SE LA MISSIONE È VICINA ABILITALA
               else VarObjectsHub.SpecialMissionEnable = true;
            }
            //ALTRIMENTI DISABILITALA
            else VarObjectsHub.SpecialMissionEnable = false;

            /*------------COLORE PULSANTE-----------*/
            if (VarObjectsHub.SpecialMissionEnable == true) DynamicHubHUD.setButtonColor(14, Colors.SpecialMission);
            else DynamicHubHUD.setButtonColor(14, Colors.DisabledMission);

            let result;
            DynamicHubHUD.setButtonCallback(14, () => {
               if (VarObjectsHub.SpecialMissionEnable == true) {    //SE LA MISSIONE È ABILITATA
                  result = window.confirm(`Accetti la missione?`);
                  //ACCETTA LA MISSIONE
                  if (result == true) {
                     GlobalVar.MissionCurrent = 1;
                     GlobalVar.MissionPlanetCurrent = 3;
                     GlobalVar.MissionMoonCurrent = 4;
                     GlobalVar.MissionSubMoonCurrent = null;
                     GlobalVar.MissionLoadCurrent = Economy.SpecialMissions[Num].Load;
                     GlobalVar.MissionRewardCurrent = SpecialReward;
                     DynamicHubHUD.setButtonColor(12, Colors.DisabledMission);
                     //AGGIORNA LA BARRA DEL CARICO
                     DynamicHubHUD.setBarValue(4, GlobalVar.MissionLoadCurrent / (GlobalVar.ContainerModules * Economy.Load));
                     DynamicHubHUD.setBarText(4, `${GlobalVar.MissionLoadCurrent}/${GlobalVar.ContainerModules * Economy.Load}kg`);
                     SaveSystem.setItem(`MissionDone`, 0);     //MEMORIZZA NEL LOCAL STORAGE CHE LA MISSIONE NON È ANCORA CONCLUSA

                     //RENDI INDISPONIBILI TUTTE LE MISSIONI
                     for (let a = 0; a < GlobalVar.NumMission; a++) {
                        DynamicHubHUD.setButtonColor(7 + a, Colors.DisabledMission);
                        VarObjectsHub.MissionEnable[a] = false;
                     };
                     DynamicHubHUD.render();
                  };
               };
            });
         };

         if (GlobalVar.Capitolo == 1) {
            if (GlobalVar.Missione == 0 && GlobalVar.PlanetOrbit == 1) G2_SpecialMissionButton(0);   //MISSIONE DA MERCURIO
            if (GlobalVar.Missione == 2 && GlobalVar.PlanetOrbit == 2) G2_SpecialMissionButton(1);    //MISSIONE DA VENERE
            if (GlobalVar.Missione == 4 && GlobalVar.PlanetOrbit == 5) G2_SpecialMissionButton(2);    //MISSIONE DA GIOVE
            if (GlobalVar.Missione == 6 && GlobalVar.PlanetOrbit == 6) G2_SpecialMissionButton(3);    //MISSIONE DA SATURNO
            if (GlobalVar.Missione == 8 && GlobalVar.PlanetOrbit == 7) G2_SpecialMissionButton(4);    //MISSIONE DA URANO
         };
         //#endregion

         DynamicHubHUD.render();
         //#endregion

         setInterval(() => {
            // if (VarObjectsHub.VideoPronto == true && GlobalVar.Coin == 0) {
            if (GlobalVar.Coin == 0) {
               if (VarObjectsHub.VideoPulsLamp == false) DynamicHubHUD.setButtonColor(13, Colors.ActivePuls);
               else DynamicHubHUD.setButtonColor(13, Colors.SelectedPuls);
               VarObjectsHub.VideoPulsLamp = !VarObjectsHub.VideoPulsLamp;
               DynamicHubHUD.render();
            };
            //console.log(GlobalVar.Money);
         }, 1000);
      };
      startGame().then(() => {
         gameReady = true;
         MicEnginereturn.VarObject.E3_UpdateProgress(true);
      });
   };

   //---------------------------------------------PAGINA STAZIONE INDUSTRIALE (SCAVA METEORITE, TIME) 249--------------------------//
   if (GlobalVar.Page == "Station" && GlobalVar.StationType == 3) {
      /*-----------------------------------------------PARAMETRI ENGINE----------------------------------------------------------*/
      MicEngineParam = ExtractionStationParam;
      if (GlobalVar.Control == 1) MicEngineParam.Moduli.VirtualPad = false;

      /*----------------------------------------------CARICAMENTO ENGINE--------------------------------------------------------*/
      async function startGame() {
         MicEnginereturn = await MicEngine(MicEngineParam, Oggetti, Geometrie, Materiali);
         if (MicEngineParam.Moduli.Debug == true && MicEngineParam.Debug.Return == true) {
            console.log("MicEnginereturn");
            console.log(MicEnginereturn.VarObject.E3_ConsoleLogSimpleObject(MicEnginereturn));
         };
         let IndustrialHUD;

         /*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
         /*------------------------------------------------------BLOCCHI STATICI-----------------------------------------------------------------*/

         /*------------------------------------------AVVIO DELLA PAGINA--------------------------------------------------*/
         //#region
         SaveSystem.setItem(`SpaceStation`, 1);       //FLAG DI PAGINA

         //CARICAMENTO MISSIONI DA SESSION STORAGE SE PRESENTI
         G0_LoadMissions();

         //NPC DI BENVENUTO
         setTimeout(() => {
            G0_WelcomeOnStation();
         }, 1000);
         //#endregion

         /*---------------------------------------------TITOLO (GAME)----------------------------------------------------*/
         G0_TitleStation();

         //--------------------------PULSANTI STATICI COMUNI A TUTTE LE STAZIONI (MENU, MAPPA RETURN)---------------------------------------//
         const StaticStationHUD = G0_GenerateStaticStationHUD({
            ClickIndex: 2,
         });

         //-------------------PULSANTI DINAMICI COMUNI ALLE STAZIONI CITY, INDUSTRIALE, TELESCOPIO, CONTAINER, RESEARCH----------------------//
         //#region
         IndustrialHUD = G0_GenerateDynamicStationHUD({      //DynamicStationsHUDObj
            DispatchEvent: StaticStationHUD.canvas
         });
         IndustrialHUD.showButton(8, false);       //PULSANTE 8 CARBURANTE (RESEARCH)
         IndustrialHUD.showButton(9, false);       //PULSANTE 9 CARBURANTE (RESEARCH)
         IndustrialHUD.showButton(10, false);       //PULSANTE 10 FOCUS (TELESCOPIO)
         IndustrialHUD.showBar(1, false);          //BARRA 1 CARBURANTE (RESEARCH)
         IndustrialHUD.showImage(1, false);        //IMMAGINE 1 CARBURANTE (RESEARCH)

         /*-----------------------------------BARRA CARICO------------------------------*/
         //TESTO
         IndustrialHUD.setBarText(0, `${GlobalVar.MissionLoadCurrent}/${GlobalVar.ContainerModules * Economy.Load}kg`);

         //AGGIORNA LA BARRA DEL CARICO
         IndustrialHUD.setBarValue(0, GlobalVar.MissionLoadCurrent / (GlobalVar.ContainerModules * Economy.Load));

         /*-----------------------------------TERMINE MISSIONE------------------------------*/
         G0_EndMissionCanvas(IndustrialHUD, 0, 2, 0)

         /*----------------------------------SPENDI GETTONE + IMMAGINI MONETE----------------------------------*/
         if (GlobalVar.Coin <= 0) {
            IndustrialHUD.setButtonColor(3, Colors.DisabledMission);
            IndustrialHUD.setButtonText(3, Testi.Station.NoCoin[GlobalVar.Language]);
         };
         IndustrialHUD.setButtonCallback(3, () => {
            if (GlobalVar.Coin > 0 && GlobalVar.GameEnabled == false) {
               G0_AskMinigame(function () {
                  G0_SpendiGettoneCanvas(IndustrialHUD, 1);
                  ScavaMeteorite.Enable();
                  GlobalVar.GameEnabled = true;
               });
            };
         });

         /*----------------------------------AIUTO GIOCO----------------------------------*/
         IndustrialHUD.setButtonCallback(4, () => {
            G0_HelpMinigame();
         });

         /*---------------------COMANDI DI ALTO E BASSO PER IL MINIGIOCO-----------------------*/
         IndustrialHUD.showButton(5, false);             //PULSANTE ALTO (NON SERVE)
         IndustrialHUD.showButton(7, false);             //PULSANTE BASSO (NON SERVE)

         if (GlobalVar.Control == 1) IndustrialHUD.showButton(6, false);    //PULSANTE CENTRALE (SI USA IL GAMEPAD)

         /*---------------------COMANDO DI OK PER IL MINIGIOCO-----------------------*/
         if (GlobalVar.Control == 0) {
            //PULSANTE CENTRALE
            IndustrialHUD.setButtonText(6, Testi.Minigames.Generici.Shot[GlobalVar.Language]);    //, "15px"
            IndustrialHUD.setButtonCallback(6, () => {
               if (VarObjectsExtraction.ShotTime >= VarObjectsExtraction.ShotSec) ShotMeteorite();
            });
         };
         //#endregion

         /*----------------------------------------------RAGGIO LASER----------------------------------------------------*/
         //#region
         const Line = MicEnginereturn.VarObject.E3_GenericLine({
            Color: 0xff0000,
            Linewidth: 10,
            StartLine: {
               x: 0,
               y: 0,
               z: 0
            },
            EndLine: {
               x: 0,
               y: 4,
               z: 0
            },
         });
         MicEnginereturn.GenericGroup.children[1].add(Line);
         Line.visible = false;
         //#endregion

         /*----------------------------------------MODIFICA OGGETTI GENERICI---------------------------------------------*/
         //#region
         /*------------------STAZIONE INDUSTRIALE---------------------*/
         MicEnginereturn.GenericGroup.children[0].scale.setScalar(0.002);
         MicEnginereturn.GenericGroup.children[0].position.set(0, 0, -1.5);
         MicEnginereturn.GenericGroup.children[0].children[2].visible = false;         //RENDI INVISIBILE L'ASTEROIDE
         MicEnginereturn.GenericGroup.children[0].children[3].visible = false;         //RENDI INVISIBILE IL RAGGIO TRAENTE

         /*------------------LASER INDUSTRIALE---------------------*/
         //SPOSTAMENTO SFERA METALLICA NELLA SCENA
         MicEnginereturn.Scene.add(MicEnginereturn.GenericGroup.children[1].children[0]);

         MicEnginereturn.GenericGroup.children[1].position.set(0, -0.6, -1.8);
         MicEnginereturn.GenericGroup.children[1].scale.setScalar(0.15);
         MicEnginereturn.CameraGroup.children[0].children[0].children[0].add(MicEnginereturn.GenericGroup.children[1]);
         //#endregion

         /*---------------------------MODIFICA ORBITCONTROLS PER NON COMANDARLO DAL MOUSE--------------------------------*/
         //#region
         MicEnginereturn.OrbitControl.enableRotate = false;
         MicEnginereturn.OrbitControl.enablePan = false;
         MicEnginereturn.OrbitControl.enableZoom = false;
         //#endregion

         /*-------------------------------------------OGGETTO CONTROLLER-------------------------------------------------*/
         //#region
         Controller = S0_Controller({
            Control: GlobalVar.Control,             //0 VIRTUALE - 1 FISICO
            //PARAMETRI ASSI
            VirtualAxe: [1, 0, 2],                 //0 NIPPLE0X - 1 NIPPLE0Y - 2 NIPPLE1X - 3 NIPPLE1Y
            InvAxe: InvAxe,                         //0 NORMALE - 1 INVERTITO
            RegAxe: RegAxe,                         //COEFFICIENTE DI MOLTIPLICAZIONE PER L'ASSE
            PadAxe: PadAxe,                         //TIPO (AXE, BUTTON) - INDICE
            //PARAMETRI PULSANTI
            PadButton: PadButton,                   //TIPO (AXE, BUTTON) - INDICE
         });

         const ActionButton = new MicEnginereturn.VarObject.OnceFunction(function () {
            if (Controller.Button[0] == 1 && VarObjectsExtraction.ShotTime >= VarObjectsExtraction.ShotSec) ShotMeteorite();
         });

         //DISTRUGGERE IL SECONDO PAD
         if (GlobalVar.Control == 0) MicEnginereturn.VarPad[1].Destroy();
         //#endregion

         /*------------------------------MINIGIOCO SCAVA METEORITE, SUONI, RAGGIO LASER----------------------------------*/
         //#region
         ScavaMeteorite = await G0_ScavaMeteorite();

         //FUNZIONE SHOT MINIGIOCO SCAVA METEORITE
         function ShotMeteorite() {
            ScavaMeteorite.Shot();
            MicEnginereturn.Audio.PlayOnceSound(0, GlobalVar.VolumeSounds / 1000);      //LASER
            Line.visible = true;
            setTimeout(() => {
               Line.visible = false;
            }, 100);
            VarObjectsExtraction.ShotTime = 0;
         };

         //SUONO MOTORE
         const EngineSound = MicEnginereturn.Audio.PlayLoopSound(1);
         const EngineOnceSound = new MicEnginereturn.VarObject.OnceFunction(function () {
            if (GlobalVar.SoundMotor > 0) EngineSound.Play(GlobalVar.VolumeSounds / 100);
            if (GlobalVar.SoundMotor == 0) EngineSound.Stop();
         });
         //#endregion

         /*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
         /*----------------------------------------------------BLOCCHI LOOP 100MS----------------------------------------------------------------*/

         /*--------------------------------------------------SUONI-------------------------------------------------------*/
         function _100_Sounds() {
            GlobalVar.SoundMotor = Math.max(Math.abs(GlobalVar.ComX), Math.abs(GlobalVar.ComY));

            //SUONO MOTORE
            EngineOnceSound.Update(GlobalVar.SoundMotor);
            EngineSound.SetModulation(GlobalVar.SoundMotor / 150);
         };

         /*-----------------------------------VINCITA MINIGIOCO SCAVA METEORITE------------------------------------------*/
         function _100_ScavaMeteorite() {
            if (Number(ScavaMeteorite.Vincita) > 0) {
               GlobalVar.Money += Number(ScavaMeteorite.Vincita);
               G0_ShowMoneySpentCanvas(IndustrialHUD, 0, Number(ScavaMeteorite.Vincita));
               G0_MoveMoneyImg(600, 330, 90, 150, true);
               ScavaMeteorite.Reset();
               GlobalVar.GameEnabled = false;
               IndustrialHUD.render();

               setTimeout(() => {
                  IndustrialHUD.setButtonText(0, `${GlobalVar.Money}${Economy.MoneySymbol}`);
                  IndustrialHUD.render();
               }, 2000);
            };

            if (VarObjectsExtraction.ShotTime < VarObjectsExtraction.ShotSec) VarObjectsExtraction.ShotTime++;
         };

         IndustrialHUD.render();

         //VINCITA MINIGIOCO, ONCEFUNCTION ACTIONBUTTON
         setInterval(() => {
            _100_Sounds();
            _100_ScavaMeteorite();
            ActionButton.Update(Controller.Button[0]);
         }, 100);

         setInterval(() => {
            //console.log(Controller.Axe[0]);
         }, 1000);
      };
      startGame().then(() => {
         gameReady = true;
         MicEnginereturn.VarObject.E3_UpdateProgress(true);
      });
   };

   //---------------------------------------------PAGINA STAZIONE CITY (CORSA ROBOT) 127-----------------------------------------//
   if (GlobalVar.Page == "Station" && GlobalVar.StationType == 2) {
      /*-----------------------------------------------PARAMETRI ENGINE----------------------------------------------------------*/
      MicEngineParam = CityStationParam;

      /*----------------------------------------------CARICAMENTO ENGINE--------------------------------------------------------*/
      async function startGame() {
         MicEnginereturn = await MicEngine(MicEngineParam, Oggetti, Geometrie, Materiali);
         if (MicEngineParam.Moduli.Debug == true && MicEngineParam.Debug.Return == true) {
            console.log("MicEnginereturn");
            console.log(MicEnginereturn.VarObject.E3_ConsoleLogSimpleObject(MicEnginereturn));
         };
         /*---------------------------------------AUTOMAZIONI SOLAR SYSTEM DELIVERY------------------------------------------------*/
         let CityHud;

         /*----------------------------------------------AVVIO DELLA PAGINA---------------------------------------------------------*/
         //#region
         SaveSystem.setItem(`SpaceStation`, 1);       //FLAG DI PAGINA

         //CARICAMENTO MISSIONI DA SESSION STORAGE SE PRESENTI
         G0_LoadMissions();

         //NPC DI BENVENUTO
         setTimeout(() => {
            G0_WelcomeOnStation(400);
         }, 1000);
         //#endregion

         /*---------------------------------------------------TITOLO (GAME)---------------------------------------------------------------*/
         G0_TitleStation();

         //--------------------------PULSANTI STATICI COMUNI A TUTTE LE STAZIONI (MENU, MAPPA RETURN)---------------------------------------//
         const StaticStationHUD = G0_GenerateStaticStationHUD({
            ClickIndex: 1,
         });

         //-------------------PULSANTI DINAMICI COMUNI ALLE STAZIONI CITY, INDUSTRIALE, TELESCOPIO, CONTAINER, RESEARCH----------------------//
         //#region
         CityHud = G0_GenerateDynamicStationHUD({      //DynamicStationsHUDObj
            DispatchEvent: StaticStationHUD.canvas
         });
         CityHud.showButton(8, false);       //PULSANTE 8 CARBURANTE (RESEARCH)
         CityHud.showButton(9, false);       //PULSANTE 9 CARBURANTE (RESEARCH)
         CityHud.showButton(10, false);       //PULSANTE 10 FOCUS (TELESCOPIO)
         CityHud.showBar(1, false);          //BARRA 1 CARBURANTE (RESEARCH)
         CityHud.showImage(1, false);        //IMMAGINE 1 CARBURANTE (RESEARCH)

         /*-----------------------------------BARRA CARICO------------------------------*/
         //TESTO
         CityHud.setBarText(0, `${GlobalVar.MissionLoadCurrent}/${GlobalVar.ContainerModules * Economy.Load}kg`);

         //AGGIORNA LA BARRA DEL CARICO
         CityHud.setBarValue(0, GlobalVar.MissionLoadCurrent / (GlobalVar.ContainerModules * Economy.Load));

         /*-----------------------------------TERMINE MISSIONE------------------------------*/
         G0_EndMissionCanvas(CityHud, 0, 2, 0)

         /*----------------------------------SPENDI GETTONE + IMMAGINI MONETE----------------------------------*/
         if (GlobalVar.Coin <= 0) {
            CityHud.setButtonColor(3, Colors.DisabledMission);
            CityHud.setButtonText(3, Testi.Station.NoCoin[GlobalVar.Language]);
         };
         CityHud.setButtonCallback(3, () => {
            if (GlobalVar.Coin > 0 && GlobalVar.GameEnabled == false && CorsaRobot.Gara == 0) {
               MicEnginereturn.Audio.PlayOnceSound(1, GlobalVar.VolumeSounds / 200);      //CLICK
               G0_AskMinigame(function () {
                  MicEnginereturn.Audio.PlayOnceSound(1, GlobalVar.VolumeSounds / 200);      //CLICK
                  G0_SpendiGettoneCanvas(CityHud, 1);
                  CorsaRobot.Enable();
                  GlobalVar.GameEnabled = true;
               });
            };
         });

         /*----------------------------------AIUTO GIOCO----------------------------------*/
         CityHud.setButtonCallback(4, () => {
            MicEnginereturn.Audio.PlayOnceSound(1, GlobalVar.VolumeSounds / 200);      //CLICK
            G0_HelpMinigame();
         });

         /*-------------------------NASCONDI I TRE PULSANTI FUNZIONE PER IL MINIGIOCO CORSA ROBOT ------------------*/
         CityHud.showButton(5, false);
         CityHud.showButton(6, false);
         CityHud.showButton(7, false);

         //#endregion

         /*---------------------------------------------------MINIGIOCO CORSA ROBOT-------------------------------------------------------*/
         CorsaRobot = await G0_CorsaRobot({
            DispatchEvent: CityHud.canvas,
            Robots: MicEnginereturn.GenericGroup.children[0].children[0],
            PianoPista: MicEnginereturn.GenericGroup.children[0].children[2],
            Edifici1: MicEnginereturn.GenericGroup.children[0].children[3],
            Edifici2: MicEnginereturn.GenericGroup.children[0].children[4]
         });

         /*-------------------------------------------------------SUONI-------------------------------------------------------------------*/
         const MusicOnceSound = new MicEnginereturn.VarObject.OnceFunction(function () {
            if (CorsaRobot.Gara == 2 || CorsaRobot.Gara == 5 || CorsaRobot.Gara == 8) MicEnginereturn.Audio.PlayOnceSound(0, GlobalVar.VolumeMusic / 100);
         });


         CityHud.render();

         setInterval(() => {
            if (Number(CorsaRobot.Vincita) > 0) {
               GlobalVar.Money += Number(CorsaRobot.Vincita);
               G0_ShowMoneySpentCanvas(CityHud, 0, Number(CorsaRobot.Vincita));
               G0_MoveMoneyImg(600, 330, 90, 150, true);
               GlobalVar.GameEnabled = false;
               CorsaRobot.Reset();
               CorsaRobot.ResetVincita();
               CityHud.render();

               setTimeout(() => {
                  CityHud.setButtonText(0, `${GlobalVar.Money}${Economy.MoneySymbol}`);
                  CityHud.render();
               }, 2000);
            };
            MusicOnceSound.Update(CorsaRobot.Gara);

         }, 100);

      };
      startGame().then(() => {
         gameReady = true;
         MicEnginereturn.VarObject.E3_UpdateProgress(true);
      });
   };

   //---------------------------------------------PAGINA STAZIONE RESEARCH (COMBINA COLORE) 294-----------------------------------------//
   if (GlobalVar.Page == "Station" && GlobalVar.StationType == 5) {
      /*-----------------------------------------------PARAMETRI ENGINE----------------------------------------------------------*/
      MicEngineParam = ResearchStationParam;
      if (GlobalVar.Control == 1) MicEngineParam.Moduli.VirtualPad = false;
      if (GlobalVar.Capitolo == 5 && GlobalVar.Missione == 3) Economy.PriceFuel *= Economy.FinalPriceFuel;

      /*----------------------------------------------CARICAMENTO ENGINE--------------------------------------------------------*/
      async function startGame() {
         MicEnginereturn = await MicEngine(MicEngineParam, Oggetti, Geometrie, Materiali);
         if (MicEngineParam.Moduli.Debug == true && MicEngineParam.Debug.Return == true) {
            console.log("MicEnginereturn");
            console.log(MicEnginereturn.VarObject.E3_ConsoleLogSimpleObject(MicEnginereturn));
         };
         let ResearchHUD;

         /*---------------------------PRESENZA DEL TANK PER FARE RIFORNIMENTO-----------------------*/
         //STAZIONE LUNA
         if (GlobalVar.PlanetOrbit > 0 && GlobalVar.MoonOrbit > 0 && GlobalVar.SubMoonOrbit == 0) {
            VarObjectsResearch.Tank = Oggetti.PlanetarySystem.Modular[GlobalVar.PlanetOrbit - 1].Modular[GlobalVar.MoonOrbit - 1].Variabili.Tank;
         };
         //STAZIONE SUB-LUNA
         if (GlobalVar.PlanetOrbit > 0 && GlobalVar.MoonOrbit > 0 && GlobalVar.SubMoonOrbit > 0) {
            VarObjectsResearch.Tank = Oggetti.PlanetarySystem.Modular[GlobalVar.PlanetOrbit - 1].Modular[GlobalVar.MoonOrbit - 1].Modular[GlobalVar.SubMoonOrbit - 1].Variabili.Tank;
         };

         /*----------------------------------------------AVVIO DELLA PAGINA---------------------------------------------------------*/
         //#region
         SaveSystem.setItem(`SpaceStation`, 1);       //FLAG DI PAGINA

         //AGGIORNA LA QUANTITÀ DI MEMBRI DI EQUIPAGGIO ATTUALI
         VarObjectsResearch.Crew = 1 + GlobalVar.ExtractionModules + GlobalVar.ContainerModules + GlobalVar.RadarModules;
         //AGGIORNA LA QUANTITÀ DI MEMBRI DI EQUIPAGGIO OSPITABILI PER I VIAGGI NORMALI
         VarObjectsResearch.TravelCrew = 1 + GlobalVar.ShipModules * 2;
         //AGGIORNA LA QUANTITÀ DI MEMBRI DI EQUIPAGGIO OSPITABILI PER I VIAGGI LUNGHI
         VarObjectsResearch.LongTravelCrew = GlobalVar.LivingModules * 2;

         if (GlobalVar.Capitolo == 4) {
            //STAZIONE DI PLUTONE
            if (GlobalVar.Missione == 3 && GlobalVar.PlanetOrbit == 9 && GlobalVar.MoonOrbit == 2) {
               if (VarObjectsResearch.TravelCrew >= VarObjectsResearch.Crew + 8 && VarObjectsResearch.LongTravelCrew >= VarObjectsResearch.Crew + 8) VarObjectsResearch.FlagStoria = 1;     //MESSAGGIO NPC.Research.Testi[0]
            };
            //STAZIONE DI HAUMEA
            if (GlobalVar.Missione == 5 && GlobalVar.PlanetOrbit == 11 && GlobalVar.MoonOrbit == 1) {
               if (VarObjectsResearch.TravelCrew >= VarObjectsResearch.Crew + 8 && VarObjectsResearch.LongTravelCrew >= VarObjectsResearch.Crew + 8) VarObjectsResearch.FlagStoria = 1;     //MESSAGGIO NPC.Research.Testi[0]
            };
            //STAZIONE DI MAKEMAKE
            if (GlobalVar.Missione == 7 && GlobalVar.PlanetOrbit == 12 && GlobalVar.MoonOrbit == 1) {
               if (VarObjectsResearch.TravelCrew >= VarObjectsResearch.Crew + 8 && VarObjectsResearch.LongTravelCrew >= VarObjectsResearch.Crew + 8) VarObjectsResearch.FlagStoria = 1;     //MESSAGGIO NPC.Research.Testi[0]
            };
            //STAZIONE DI ERIS
            if (GlobalVar.Missione == 9 && GlobalVar.PlanetOrbit == 13 && GlobalVar.MoonOrbit == 1) {
               if (VarObjectsResearch.TravelCrew >= VarObjectsResearch.Crew + 8 && VarObjectsResearch.LongTravelCrew >= VarObjectsResearch.Crew + 8) VarObjectsResearch.FlagStoria = 1;     //MESSAGGIO NPC.Research.Testi[0]
            };
         };

         //CARICAMENTO MISSIONI DA SESSION STORAGE SE PRESENTI
         G0_LoadMissions();

         //NPC DI BENVENUTO
         if (VarObjectsResearch.FlagStoria > 0) MicEnginereturn.VarObject.E3_DisplayNPCDoubleButton({
            //GENERICI
            Font: 14,                                             //FONT IN PIXEL
            PosX: 210,                                            //POSIZIONE X (POSITIVA=SINISTRA, NEGATIVA=DESTRA)
            PosY: 40,                                              //POSIZIONE Y (SOLO TOP)
            zIndex: "20",
            //IMMAGINE
            LargImage: 150,                                       //LARGHEZZA IMMAGINE
            AtImage: 100,                                         //ALTEZZA IMMAGINE
            Image: NPC.Radio.Immagini[GlobalVar.StationType - 1][GlobalVar.GenderNPC],               //IMMAGINE
            //TESTO
            PositionText: "Down",                               //POSIZIONE DEL TESTO RELATIVA ALL'IMMAGINE "Down" "Right "Left
            LargText: 450,
            AltText: 150,                                          //ALTEZZA TESTO
            ColorText: Colors.NPCColor,                             //COLORE SFONDO TESTO
            ColorFontText: "#ffffffff",                         //COLORE FONT TESTO
            Text: NPC.Research.Testi[VarObjectsResearch.FlagStoria - 1][GlobalVar.Language],               //TESTO
            //PULSANTI
            AltPuls: 40,                   //ALTEZZA PULSANTI
            ColorPuls: Colors.NPCColor,                             //COLORE SFONDO PULSANTI
            ColorFontPuls: "#ffffffff",                         //COLORE FONT PULSANTI
            ColorBorderPuls: Colors.NPCBorderColor,                      //COLORE BORDO PULSANTI
            Text1: "OK",                   //TESTO PULSANTE 1
            Text2: "NO",                   //TESTO PULSANTE 2
         },
            function () {
               if (GlobalVar.Capitolo == 4) {
                  if (GlobalVar.Missione == 3 || GlobalVar.Missione == 5 || GlobalVar.Missione == 7 || GlobalVar.Missione == 9) {
                     GlobalVar.Scient = 8;
                     SaveSystem.setItem('FlagMissione', 1);
                  };
               };
            },
            function () { });
         else G0_WelcomeOnStation();
         //#endregion

         /*---------------------------------------------------TITOLO (GAME)---------------------------------------------------------------*/
         G0_TitleStation();

         //--------------------------PULSANTI STATICI COMUNI A TUTTE LE STAZIONI (MENU, MAPPA RETURN)---------------------------------------//
         const StaticStationHUD = G0_GenerateStaticStationHUD({
            ClickIndex: 0,
         });

         //-------------------PULSANTI DINAMICI COMUNI ALLE STAZIONI CITY, INDUSTRIALE, TELESCOPIO, CONTAINER, RESEARCH----------------------//
         //#region
         ResearchHUD = G0_GenerateDynamicStationHUD({      //DynamicStationsHUDObj
            DispatchEvent: StaticStationHUD.canvas
         });

         ResearchHUD.showButton(10, false);       //PULSANTE 10 FOCUS (TELESCOPIO)

         /*-----------------------------------BARRA CARICO------------------------------*/
         //TESTO
         ResearchHUD.setBarText(0, `${GlobalVar.MissionLoadCurrent}/${GlobalVar.ContainerModules * Economy.Load}kg`);

         //AGGIORNA LA BARRA DEL CARICO
         ResearchHUD.setBarValue(0, GlobalVar.MissionLoadCurrent / (GlobalVar.ContainerModules * Economy.Load));

         /*-----------------------------------TERMINE MISSIONE------------------------------*/
         G0_EndMissionCanvas(ResearchHUD, 0, 2, 0)

         /*----------------------------------SPENDI GETTONE + IMMAGINI MONETE----------------------------------*/
         if (GlobalVar.Coin <= 0) {
            ResearchHUD.setButtonColor(3, Colors.DisabledMission);
            ResearchHUD.setButtonText(3, Testi.Station.NoCoin[GlobalVar.Language]);
         };
         ResearchHUD.setButtonCallback(3, () => {
            if (GlobalVar.Coin > 0 && GlobalVar.GameEnabled == false) {
               G0_AskMinigame(function () {
                  G0_SpendiGettoneCanvas(ResearchHUD, 1);
                  CombinaColore.Enable();
                  GlobalVar.GameEnabled = true;
               });
            };
         });

         /*----------------------------------AIUTO GIOCO----------------------------------*/
         ResearchHUD.setButtonCallback(4, () => {
            G0_HelpMinigame();
         });

         /*--------------------NASCONDI I TRE PULSANTI FUNZIONE PER IL MINIGIOCO COLORE IN CASO DI GAMEPAD------------------*/
         if (GlobalVar.Control == 1) {
            ResearchHUD.showButton(5, false);
            ResearchHUD.showButton(6, false);
            ResearchHUD.showButton(7, false);
         }
         /*----------------------------COMANDI VIRTUALI PER IL MINIGIOCO COLORE-----------------------*/
         else {
            //PULSANTE ALTO
            ResearchHUD.setButtonText(5, Testi.Minigames.CombinaColore.Drop[GlobalVar.Language]);
            ResearchHUD.setButtonCallback(5, () => {
               VarObjectsResearch.ComUp = true;
            });
            ResearchHUD.setButtonCallbackUp(5, () => {
               VarObjectsResearch.ComUp = false;
            });
            //PULSANTE CENTRALE (FINE GIOCO)
            ResearchHUD.setButtonText(6, Testi.Minigames.CombinaColore.Check[GlobalVar.Language]);
            ResearchHUD.setButtonCallback(6, () => {
               CombinaColore.Check();
            });
            //PULSANTE BASSO
            ResearchHUD.setButtonText(7, Testi.Minigames.CombinaColore.Pick[GlobalVar.Language]);
            ResearchHUD.setButtonCallback(7, () => {
               VarObjectsResearch.ComDown = true;
            });
            ResearchHUD.setButtonCallbackUp(7, () => {
               VarObjectsResearch.ComDown = false;
            });
         };

         if (VarObjectsResearch.Tank == false) {
            ResearchHUD.showButton(8, false);
            ResearchHUD.showButton(9, false);
            ResearchHUD.showBar(1, false);
            ResearchHUD.showImage(1, false);
         };

         if (VarObjectsResearch.Tank == true) {
            const FuelFill = MicEnginereturn.Canvas.E3_FillValueBarCanvas({
               //VARIABILE
               Money: GlobalVar.Money,                                     //VARIABILE DEL DENARO POSSEDUTO
               MaxValue: Economy.FuelUpgrade[VarObjectsResearch.UpgradeTank],   //MASSIMO VALORE RAGGIUNGIBILE DALLA VARIABILE
               Value: GlobalVar.Fuel,                                      //VARIABILE
               //CANVAS
               MoneySymbol: Economy.MoneySymbol,                           //SIMBOLO DENARO
               Hud: ResearchHUD,                                         //CANVAS DI RIFERIMENTO
            });

            ResearchHUD.setBarValue(1, GlobalVar.Fuel / Economy.FuelUpgrade[VarObjectsResearch.UpgradeTank]);

            //TESTO
            ResearchHUD.setBarText(1, `${(GlobalVar.Fuel).toFixed(0)}/${Economy.FuelUpgrade[VarObjectsResearch.UpgradeTank]}`);

            //PULSANTE RIEMPIMENTO
            FuelFill.UpdatePuls(8, 1, Economy.PriceFuel * 2);

            ResearchHUD.setButtonCallback(8, () => {
               FuelFill.Fill(1, 8, 1, Economy.PriceFuel * 2, GlobalVar.Money);
               G0_ShowMoneySpentCanvas(ResearchHUD, 0, FuelFill.Money - GlobalVar.Money);
               if (GlobalVar.Money != FuelFill.Money) G0_MoveMoneyImg(90, 240, 200, 500, false);
               GlobalVar.Money = FuelFill.Money;
               GlobalVar.Fuel = FuelFill.Value;
               //AGGIORNA IL TESTO DEL PULSANTE 1/4
               FuelFill.UpdatePuls(9, 0.25, Economy.PriceFuel * 2);

               SaveSystem.setItem(`Fuel`, GlobalVar.Fuel);
            });

            //PULSANTE RIEMPIMENTO 1/4
            FuelFill.UpdatePuls(9, 0.25, Economy.PriceFuel * 2);

            ResearchHUD.setButtonCallback(9, () => {
               FuelFill.Fill(1, 9, 0.25, Economy.PriceFuel * 2, GlobalVar.Money);
               G0_ShowMoneySpentCanvas(ResearchHUD, 0, FuelFill.Money - GlobalVar.Money);
               if (GlobalVar.Money != FuelFill.Money) G0_MoveMoneyImg(90, 240, 200, 500, false);
               GlobalVar.Money = FuelFill.Money;
               GlobalVar.Fuel = FuelFill.Value;
               //AGGIORNA IL TESTO DEL PULSANTE DI RIEMPIMENTO
               FuelFill.UpdatePuls(8, 1, Economy.PriceFuel * 2);

               SaveSystem.setItem(`Fuel`, GlobalVar.Fuel);
            });
         };
         //#endregion

         /*--------------------------------------------------OGGETTO CONTROLLER---------------------------------------------------------*/
         //#region
         Controller = S0_Controller({
            Control: GlobalVar.Control,             //0 VIRTUALE - 1 FISICO
            //PARAMETRI ASSI
            VirtualAxe: [1, 0, 2],                 //0 NIPPLE0X - 1 NIPPLE0Y - 2 NIPPLE1X - 3 NIPPLE1Y
            InvAxe: InvAxe,                         //0 NORMALE - 1 INVERTITO
            RegAxe: RegAxe,                         //COEFFICIENTE DI MOLTIPLICAZIONE PER L'ASSE
            PadAxe: PadAxe,                         //TIPO (AXE, BUTTON) - INDICE
            //PARAMETRI PULSANTI
            PadButton: PadButton,                   //TIPO (AXE, BUTTON) - INDICE
         });

         //DISTRUGGERE IL SECONDO PAD
         if (GlobalVar.Control == 0) MicEnginereturn.VarPad[1].Destroy();

         const ActionButton = new MicEnginereturn.VarObject.OnceFunction(function () {
            if (Controller.Button[0] == 1) CombinaColore.Check();
         });
         //#endregion

         /*----------------------------------------------MINIGIOCO COMBINA COLORE----------------------------------------------------*/
         //#region
         MicEnginereturn.GenericGroup.children[0].position.set(0, -7, 0);

         CombinaColore = await G0_CombinaColore({
            ContColore: MicEnginereturn.GenericGroup.children[0].children[1],
            ContMetallo: MicEnginereturn.GenericGroup.children[0].children[2],
            ContRilievo: MicEnginereturn.GenericGroup.children[0].children[3],
            ContLuce: MicEnginereturn.GenericGroup.children[0].children[4]
         });
         MicEnginereturn.Lights.DirLight.shadow.needsUpdate = true;
         //#endregion

         ResearchHUD.render();

         //ONCEFUNCTION ACTIONBUTTON, VINCITA MINIGIOCO COMBINACOLORE
         setInterval(() => {
            ActionButton.Update(Controller.Button[0]);

            if (Number(CombinaColore.Vincita) > 0) {
               GlobalVar.Money += Number(CombinaColore.Vincita);
               G0_ShowMoneySpentCanvas(ResearchHUD, 0, Number(CombinaColore.Vincita));
               G0_MoveMoneyImg(600, 330, 90, 150, true);
               CombinaColore.Reset();
               ResearchHUD.render();

               setTimeout(() => {
                  GlobalVar.GameEnabled = false;
                  ResearchHUD.setButtonText(0, `${GlobalVar.Money}${Economy.MoneySymbol}`);
                  ResearchHUD.render();
               }, 2000);
            }
         }, 100);
      };
      startGame().then(() => {
         gameReady = true;
         MicEnginereturn.VarObject.E3_UpdateProgress(true);
      });
   };

   //---------------------------------------------PAGINA NAVE TELESCOPIO (TELESCOPIO, TIME) 209-----------------------------------------//
   if (GlobalVar.Page == "Station" && GlobalVar.StationType == 6) {
      /*-----------------------------------------------PARAMETRI ENGINE----------------------------------------------------------*/
      MicEngineParam = Ship1StationParam;
      if (GlobalVar.Control == 1) MicEngineParam.Moduli.VirtualPad = false;

      /*----------------------------------------------CARICAMENTO ENGINE--------------------------------------------------------*/
      async function startGame() {
         MicEnginereturn = await MicEngine(MicEngineParam, Oggetti, Geometrie, Materiali);
         if (MicEngineParam.Moduli.Debug == true && MicEngineParam.Debug.Return == true) {
            console.log("MicEnginereturn");
            console.log(MicEnginereturn.VarObject.E3_ConsoleLogSimpleObject(MicEnginereturn));
         };
         /*---------------------------------------AUTOMAZIONI SOLAR SYSTEM DELIVERY------------------------------------------------*/
         let TelescopeHUD;

         /*----------------------------------------------AVVIO DELLA PAGINA---------------------------------------------------------*/
         //#region
         SaveSystem.setItem(`SpaceStation`, 1);       //FLAG DI PAGINA

         //CARICAMENTO MISSIONI DA SESSION STORAGE SE PRESENTI
         G0_LoadMissions();

         //NPC DI BENVENUTO
         setTimeout(() => {
            G0_WelcomeOnStation();
         }, 1000);

         //#endregion

         /*---------------------------------------------------TITOLO (GAME)---------------------------------------------------------------*/
         G0_TitleStation();

         //--------------------------PULSANTI STATICI COMUNI A TUTTE LE STAZIONI (MENU, MAPPA RETURN)---------------------------------------//
         const StaticStationHUD = G0_GenerateStaticStationHUD({
            ClickIndex: 2,
         });

         //-------------------PULSANTI DINAMICI COMUNI ALLE STAZIONI CITY, INDUSTRIALE, TELESCOPIO, CONTAINER, RESEARCH----------------------//
         //#region
         TelescopeHUD = G0_GenerateDynamicStationHUD({      //DynamicStationsHUDObj
            DispatchEvent: StaticStationHUD.canvas
         });
         TelescopeHUD.showButton(8, false);       //PULSANTE 8 CARBURANTE (RESEARCH)
         TelescopeHUD.showButton(9, false);       //PULSANTE 9 CARBURANTE (RESEARCH)
         TelescopeHUD.showBar(1, false);          //BARRA 1 CARBURANTE (RESEARCH)
         TelescopeHUD.showImage(1, false);        //IMMAGINE 1 CARBURANTE (RESEARCH)


         /*-----------------------------------BARRA CARICO------------------------------*/
         //TESTO
         TelescopeHUD.setBarText(0, `${GlobalVar.MissionLoadCurrent}/${GlobalVar.ContainerModules * Economy.Load}kg`);

         //AGGIORNA LA BARRA DEL CARICO
         TelescopeHUD.setBarValue(0, GlobalVar.MissionLoadCurrent / (GlobalVar.ContainerModules * Economy.Load));

         /*-----------------------------------TERMINE MISSIONE------------------------------*/
         G0_EndMissionCanvas(TelescopeHUD, 0, 2, 0)

         /*----------------------------------SPENDI GETTONE + IMMAGINI MONETE----------------------------------*/
         if (GlobalVar.Coin <= 0) {
            TelescopeHUD.setButtonColor(3, Colors.DisabledMission);
            TelescopeHUD.setButtonText(3, Testi.Station.NoCoin[GlobalVar.Language]);
         };
         TelescopeHUD.setButtonCallback(3, () => {
            if (GlobalVar.Coin > 0 && GlobalVar.GameEnabled == false) {
               G0_AskMinigame(function () {
                  G0_SpendiGettoneCanvas(TelescopeHUD, 1);
                  Telescopio.Enable();
                  GlobalVar.GameEnabled = true;
               });
            };
         });

         /*----------------------------------AIUTO GIOCO----------------------------------*/
         TelescopeHUD.setButtonCallback(4, () => {
            G0_HelpMinigame();
         });

         /*-------------------------NASCONDI I TRE PULSANTI FUNZIONE PER IL MINIGIOCO TELESCOPIO ------------------*/
         if (GlobalVar.Control == 1) {
            TelescopeHUD.showButton(5, false);
            TelescopeHUD.showButton(6, false);
            TelescopeHUD.showButton(7, false);
            TelescopeHUD.showButton(10, false);       //PULSANTE 10 FOCUS (TELESCOPIO)
         }
         /*---------------------COMANDI VIRTUALI PER IL MINIGIOCO TELESCOPIO-----------------------*/
         else {
            //PULSANTE ALTO
            TelescopeHUD.setButtonPosX(5, "200px");
            TelescopeHUD.setButtonText(5, "ZOOM+");    //, "15px"
            TelescopeHUD.setButtonCallback(5, () => {
               GlobalVar.ComPulsUp = true;
            });
            TelescopeHUD.setButtonCallbackUp(5, () => {
               GlobalVar.ComPulsUp = false;
            });
            //PULSANTE BASSO
            TelescopeHUD.setButtonPosX(7, "200px");
            TelescopeHUD.setButtonText(7, "ZOOM-");    //, "15px"
            TelescopeHUD.setButtonCallback(7, () => {
               GlobalVar.ComPulsDown = true
            });
            TelescopeHUD.setButtonCallbackUp(7, () => {
               GlobalVar.ComPulsDown = false;
            });
            //PULSANTE CENTRALE
            TelescopeHUD.setButtonPosX(6, "200px");
            TelescopeHUD.setButtonText(6, Testi.Minigames.Generici.Shot[GlobalVar.Language]);    //, "15px"
            TelescopeHUD.setButtonCallback(6, () => {
               if (GlobalVar.GameEnabled == true && VarObjectTelescope.ShotTime >= VarObjectTelescope.ShotSec) ShotTelescopio();
            });
         };
         //#endregion

         /*-------------------------------------------OGGETTO 3D NAVE TELESCOPIO-------------------------------------------------------*/
         //#region
         //SCALA MODELLO
         MicEnginereturn.GenericGroup.children[0].scale.setScalar(0.1);
         //ROTAZIONE MODELLO
         MicEnginereturn.GenericGroup.children[0].rotation.set(0, -Math.PI / 2, 0);
         //POSIZIONE MODELLO
         MicEnginereturn.GenericGroup.children[0].position.set(10, -5, 0);
         //RAGGIO TRAENTE INVISIBILE
         MicEnginereturn.GenericGroup.children[0].children[2].visible = false;

         //CERCA I MODELLI 3D DI COLORE 1 NELLA STAZIONE SPAZIALE E METTILI NELL'ARRAY
         const ColorArray = [];
         MicEnginereturn.GenericGroup.children[0].getObjectsByProperty('name', `@Material1`, ColorArray);

         //RICOLORALA
         if (ColorArray.length > 0) {
            for (let i = 0; i < ColorArray.length; i++) {
               //STAZIONE LUNA
               if (GlobalVar.SubMoonOrbit == 0) ColorArray[i].material.color.setHex(Oggetti.PlanetarySystem.Modular[GlobalVar.PlanetOrbit - 1].Modular[GlobalVar.MoonOrbit - 1].Color1);
               //STAZIONE SUB-LUNA
               else ColorArray[i].material.color.setHex(Oggetti.PlanetarySystem.Modular[GlobalVar.PlanetOrbit - 1].Modular[GlobalVar.MoonOrbit - 1].Modular[GlobalVar.SubMoonOrbit - 1].Color1);
            };
         };

         //CERCA I MODELLI 3D DI COLORE 2 NELLA STAZIONE SPAZIALE E METTILI NELL'ARRAY
         const ColorArray2 = [];
         MicEnginereturn.GenericGroup.children[0].getObjectsByProperty('name', `@Material2`, ColorArray2);

         //RICOLORALA
         if (ColorArray2.length > 0) {
            for (let i = 0; i < ColorArray2.length; i++) {
               //STAZIONE LUNA
               if (GlobalVar.SubMoonOrbit == 0) ColorArray2[i].material.color.setHex(Oggetti.PlanetarySystem.Modular[GlobalVar.PlanetOrbit - 1].Modular[GlobalVar.MoonOrbit - 1].Color2);
               //STAZIONE SUB-LUNA
               else ColorArray2[i].material.color.setHex(Oggetti.PlanetarySystem.Modular[GlobalVar.PlanetOrbit - 1].Modular[GlobalVar.MoonOrbit - 1].Modular[GlobalVar.SubMoonOrbit - 1].Color2);
            };
         };

         //#endregion

         /*--------------------------------------------------OGGETTO CONTROLLER-----------------------------------------------------------------*/
         //#region
         Controller = S0_Controller({
            Control: GlobalVar.Control,             //0 VIRTUALE - 1 FISICO
            //PARAMETRI ASSI
            VirtualAxe: [1, 0, 2],                 //0 NIPPLE0X - 1 NIPPLE0Y - 2 NIPPLE1X - 3 NIPPLE1Y
            InvAxe: InvAxe,                         //0 NORMALE - 1 INVERTITO
            RegAxe: RegAxe,                         //COEFFICIENTE DI MOLTIPLICAZIONE PER L'ASSE
            PadAxe: PadAxe,                         //TIPO (AXE, BUTTON) - INDICE
            //PARAMETRI PULSANTI
            PadButton: PadButton,                   //TIPO (AXE, BUTTON) - INDICE
         });

         const ActionButton = new MicEnginereturn.VarObject.OnceFunction(function () {
            if (GlobalVar.GameEnabled == true && Controller.Button[0] == 1 && VarObjectTelescope.ShotTime >= VarObjectTelescope.ShotSec) ShotTelescopio();
         });
         //#endregion

         /*------------------------------------------------MINIGIOCO TELESCOPIO, SUONI--------------------------------------------------------*/
         //#region
         Telescopio = await G0_Telescopio({
            BraccioCorto1: MicEnginereturn.GenericGroup.children[1].children[2],
            BraccioCorto2: MicEnginereturn.GenericGroup.children[1].children[3],
            BraccioLungo: MicEnginereturn.GenericGroup.children[1].children[4],
            TuboMobile1: MicEnginereturn.GenericGroup.children[1].children[5],
            TuboMobile2: MicEnginereturn.GenericGroup.children[1].children[6],
         });

         //FUNZIONE SHOT MINIGIOCO TELESCOPIO
         function ShotTelescopio() {
            Telescopio.Shot();
            MicEnginereturn.Audio.PlayOnceSound(1, GlobalVar.VolumeSounds / 1000);      //LASER
            VarObjectTelescope.ShotTime = 0;
         };

         //SUONO MOTORE
         const EngineSound = MicEnginereturn.Audio.PlayLoopSound(0);
         const EngineOnceSound = new MicEnginereturn.VarObject.OnceFunction(function () {
            if (GlobalVar.SoundMotor > 0) EngineSound.Play(GlobalVar.VolumeSounds / 100);
            if (GlobalVar.SoundMotor == 0) EngineSound.Stop();
         });
         //#endregion

         TelescopeHUD.render();

         /*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
         /*----------------------------------------------------BLOCCHI LOOP 100MS----------------------------------------------------------------*/
         function _100_Sounds() {            //SUONI
            if (GlobalVar.GameEnabled == true) {
               GlobalVar.SoundMotor = Math.max(Math.abs(GlobalVar.ComX), Math.abs(GlobalVar.ComY));

               //SUONO MOTORE
               EngineOnceSound.Update(GlobalVar.SoundMotor);
               EngineSound.SetModulation(GlobalVar.SoundMotor / 100);
            }
            else GlobalVar.SoundMotor = 0;

         };
         function _100_Telescopio() {
            //VINCITA MINIGIOCO
            if (Number(Telescopio.Vincita) > 0) {
               GlobalVar.Money += Number(Telescopio.Vincita.toFixed(0));
               G0_ShowMoneySpentCanvas(TelescopeHUD, 0, Number(Telescopio.Vincita.toFixed(0)));
               G0_MoveMoneyImg(600, 330, 90, 150, true);
               Telescopio.Reset();
               GlobalVar.GameEnabled = false;
               TelescopeHUD.render();

               setTimeout(() => {
                  TelescopeHUD.setButtonText(0, `${GlobalVar.Money}${Economy.MoneySymbol}`);
                  TelescopeHUD.render();
               }, 2000);
            };
            ActionButton.Update(Controller.Button[0]);
            if (VarObjectTelescope.ShotTime < VarObjectTelescope.ShotSec) VarObjectTelescope.ShotTime++;

            //PULSANTE SHOOT POSSIBILE
            if (Telescopio.Shootable == true) {
               TelescopeHUD.setButtonColor(6, Colors.SelectedPuls);
               TelescopeHUD.render();
            }
            else {
               TelescopeHUD.setButtonColor(6, Colors.ActivePuls);
               TelescopeHUD.render();
            };
         };

         setInterval(() => {
            _100_Sounds();
            _100_Telescopio();
         }, 100);
      };
      startGame().then(() => {
         gameReady = true;
         MicEnginereturn.VarObject.E3_UpdateProgress(true);
      });
   };

   //---------------------------------------------PAGINA NAVE PORTACONTAINER (CARROPONTE) 228-----------------------------------------//
   if (GlobalVar.Page == "Station" && GlobalVar.StationType == 7) {
      /*-----------------------------------------------PARAMETRI ENGINE----------------------------------------------------------*/
      MicEngineParam = Ship2StationParam;
      if (GlobalVar.Control == 1) MicEngineParam.Moduli.VirtualPad = false;

      /*----------------------------------------------CARICAMENTO ENGINE--------------------------------------------------------*/
      async function startGame() {
         MicEnginereturn = await MicEngine(MicEngineParam, Oggetti, Geometrie, Materiali);
         if (MicEngineParam.Moduli.Debug == true && MicEngineParam.Debug.Return == true) {
            console.log("MicEnginereturn");
            console.log(MicEnginereturn.VarObject.E3_ConsoleLogSimpleObject(MicEnginereturn));
         };
         /*---------------------------------------AUTOMAZIONI SOLAR SYSTEM DELIVERY------------------------------------------------*/
         let ContainerHUD;

         /*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
         /*------------------------------------------------------BLOCCHI STATICI-----------------------------------------------------------------*/

         /*----------------------------------------AVVIO DELLA PAGINA----------------------------------------------------*/
         //#region
         SaveSystem.setItem(`SpaceStation`, 1);       //FLAG DI PAGINA

         //CARICAMENTO MISSIONI DA SESSION STORAGE SE PRESENTI
         G0_LoadMissions();

         //NPC DI BENVENUTO
         setTimeout(() => {
            G0_WelcomeOnStation();
         }, 1000);

         //#endregion

         /*-------------------------------------------TITOLO (GAME)------------------------------------------------------*/
         G0_TitleStation();

         //--------------------------PULSANTI STATICI COMUNI A TUTTE LE STAZIONI (MENU, MAPPA RETURN)---------------------------------------//
         const StaticStationHUD = G0_GenerateStaticStationHUD({
            ClickIndex: 5,
         });

         //-------------------PULSANTI DINAMICI COMUNI ALLE STAZIONI CITY, INDUSTRIALE, TELESCOPIO, CONTAINER, RESEARCH----------------------//
         //#region
         ContainerHUD = G0_GenerateDynamicStationHUD({      //DynamicStationsHUDObj
            DispatchEvent: StaticStationHUD.canvas
         });
         ContainerHUD.showButton(8, false);       //PULSANTE 8 CARBURANTE (RESEARCH)
         ContainerHUD.showButton(9, false);       //PULSANTE 9 CARBURANTE (RESEARCH)
         ContainerHUD.showButton(10, false);       //PULSANTE 10 FOCUS (TELESCOPIO)
         ContainerHUD.showBar(1, false);          //BARRA 1 CARBURANTE (RESEARCH)
         ContainerHUD.showImage(1, false);        //IMMAGINE 1 CARBURANTE (RESEARCH)

         /*-----------------------------------BARRA CARICO------------------------------*/
         //TESTO
         ContainerHUD.setBarText(0, `${GlobalVar.MissionLoadCurrent}/${GlobalVar.ContainerModules * Economy.Load}kg`);

         //AGGIORNA LA BARRA DEL CARICO
         ContainerHUD.setBarValue(0, GlobalVar.MissionLoadCurrent / (GlobalVar.ContainerModules * Economy.Load));

         /*-----------------------------------TERMINE MISSIONE------------------------------*/
         G0_EndMissionCanvas(ContainerHUD, 0, 2, 0)

         /*----------------------------------SPENDI GETTONE + IMMAGINI MONETE----------------------------------*/
         if (GlobalVar.Coin <= 0) {
            ContainerHUD.setButtonColor(3, Colors.DisabledMission);
            ContainerHUD.setButtonText(3, Testi.Station.NoCoin[GlobalVar.Language]);
         };
         ContainerHUD.setButtonCallback(3, () => {
            if (GlobalVar.Coin > 0 && GlobalVar.GameEnabled == false) {
               G0_AskMinigame(function () {
                  G0_SpendiGettoneCanvas(ContainerHUD, 1);
                  Carroponte.Enable();
                  GlobalVar.GameEnabled = true;
               });
            };
         });

         /*----------------------------------AIUTO GIOCO----------------------------------*/
         ContainerHUD.setButtonCallback(4, () => {
            G0_HelpMinigame();
         });

         /*---------------------NASCONDI I TRE PULSANTI FUNZIONE PER IL MINIGIOCO CARROPONTE IN CASO DI GAMEPAD------------------*/
         if (GlobalVar.Control == 1) {
            ContainerHUD.showButton(5, false);
            ContainerHUD.showButton(6, false);
            ContainerHUD.showButton(7, false);
         }
         /*---------------------COMANDI VIRTUALI PER IL MINIGIOCO CARROPONTE-----------------------*/
         else {
            //PULSANTE ALTO
            ContainerHUD.setButtonText(5, Testi.Minigames.Carroponte.Up[GlobalVar.Language]);
            ContainerHUD.setButtonCallback(5, () => {
               if (GlobalVar.GameEnabled == true) GlobalVar.ComZ = 0;
            });
            //PULSANTE CENTRALE
            ContainerHUD.setButtonText(6, Testi.Minigames.Carroponte.Lock[GlobalVar.Language]);
            ContainerHUD.setButtonCallback(6, () => {
               if (GlobalVar.GameEnabled == true) {                                          //FUNZIONE DOWN
                  GlobalVar.ComPuls = !GlobalVar.ComPuls;
                  if (GlobalVar.ComPuls == 0) ContainerHUD.setButtonColor(6, Colors.ActivePuls);
                  if (GlobalVar.ComPuls == 1) ContainerHUD.setButtonColor(6, Colors.SelectedPuls);
               };
            });
            //PULSANTE BASSO
            ContainerHUD.setButtonText(7, Testi.Minigames.Carroponte.Down[GlobalVar.Language]);
            ContainerHUD.setButtonCallback(7, () => {
               if (GlobalVar.GameEnabled == true) GlobalVar.ComZ = 1;
            });
         };
         //#endregion

         /*-----------------------------------------OGGETTO CONTROLLER---------------------------------------------------*/
         //#region
         Controller = S0_Controller({
            Control: GlobalVar.Control,             //0 VIRTUALE - 1 FISICO
            //PARAMETRI ASSI
            VirtualAxe: [1, 0, 2],                 //0 NIPPLE0X - 1 NIPPLE0Y - 2 NIPPLE1X - 3 NIPPLE1Y
            InvAxe: InvAxe,                         //0 NORMALE - 1 INVERTITO
            RegAxe: RegAxe,                         //COEFFICIENTE DI MOLTIPLICAZIONE PER L'ASSE
            PadAxe: PadAxe,                         //TIPO (AXE, BUTTON) - INDICE
            //PARAMETRI PULSANTI
            PadButton: PadButton,                   //TIPO (AXE, BUTTON) - INDICE
         });
         const ActionButton = new MicEnginereturn.VarObject.OnceFunction(function () {
            if (Controller.Button[0] == 1) GlobalVar.ComPuls = !GlobalVar.ComPuls;
         });

         //DISTRUGGERE IL SECONDO PAD
         if (GlobalVar.Control == 0) MicEnginereturn.VarPad[1].Destroy();
         //#endregion

         /*-----------------------------------------MODELLO INTERNO NAVE-------------------------------------------------*/
         //#region
         //STAZIONE LUNA
         if (GlobalVar.PlanetOrbit > 0 && GlobalVar.MoonOrbit > 0 && GlobalVar.SubMoonOrbit == 0) {
            MicEnginereturn.GenericGroup.children[0].children[14].material[1].color.setHex(Oggetti.PlanetarySystem.Modular[GlobalVar.PlanetOrbit - 1].Modular[GlobalVar.MoonOrbit - 1].Color1);
         };
         //STAZIONE SUB-LUNA
         if (GlobalVar.PlanetOrbit > 0 && GlobalVar.MoonOrbit > 0 && GlobalVar.SubMoonOrbit > 0) {
            MicEnginereturn.GenericGroup.children[0].children[14].material[1].color.setHex(Oggetti.PlanetarySystem.Modular[GlobalVar.PlanetOrbit - 1].Modular[GlobalVar.MoonOrbit - 1].Modular[GlobalVar.SubMoonOrbit - 1].Color1);
         };
         //#endregion

         /*-----------------------------------------MINIGIOCO CARROPONTE, SUONI-------------------------------------------------*/
         //#region
         //CAMBIO COLORE CARROPONTE
         MicEnginereturn.GenericGroup.children[0].children[1].children[0].children[0].material.color.r = 0.1;
         MicEnginereturn.GenericGroup.children[0].children[1].children[0].children[0].material.color.g = 0.1;
         MicEnginereturn.GenericGroup.children[0].children[1].children[0].children[0].material.color.b = 0.1;
         //CAMBIO COLORE BRACCIO
         MicEnginereturn.GenericGroup.children[0].children[6].children[0].children[0].children[0].children[0].material.color.r = 0.3;
         MicEnginereturn.GenericGroup.children[0].children[6].children[0].children[0].children[0].children[0].material.color.g = 0.3;
         MicEnginereturn.GenericGroup.children[0].children[6].children[0].children[0].children[0].children[0].material.color.b = 0.3;

         Carroponte = await G0_Carroponte({
            Container: MicEnginereturn.GenericGroup.children[0].children[0],
            Braccio: MicEnginereturn.GenericGroup.children[0].children[2],
            Carroponte: MicEnginereturn.GenericGroup.children[0].children[1],
            Fan1: MicEnginereturn.GenericGroup.children[0].children[4],
            Fan2: MicEnginereturn.GenericGroup.children[0].children[5],
            Robots: MicEnginereturn.GenericGroup.children[0].children[6],
            Bagliore: MicEnginereturn.GenericGroup.children[0].children[7],
            Scintille: MicEnginereturn.GenericGroup.children[0].children[8],
            Spruzzo1: MicEnginereturn.GenericGroup.children[0].children[3],
            Spruzzo2: MicEnginereturn.GenericGroup.children[0].children[9],
            Spruzzo3: MicEnginereturn.GenericGroup.children[0].children[10],
            Luce1: MicEnginereturn.GenericGroup.children[0].children[11],
            Luce2: MicEnginereturn.GenericGroup.children[0].children[12],
            Luce3: MicEnginereturn.GenericGroup.children[0].children[13],
         });

         //SUONO MOTORE
         const EngineSound = MicEnginereturn.Audio.PlayLoopSound(0);
         const EngineOnceSound = new MicEnginereturn.VarObject.OnceFunction(function () {
            if (GlobalVar.SoundMotor > 0) EngineSound.Play(GlobalVar.VolumeSounds / 100);
            if (GlobalVar.SoundMotor == 0) EngineSound.Stop();
         });

         //SUONO SCANNER
         const ScannerSound = new MicEnginereturn.VarObject.OnceFunctionBool(function () {
            MicEnginereturn.Audio.PlayOnceSound(1, GlobalVar.VolumeSounds / 200);
         });
         //SUONO LAVAGGIO
         const WashSound = new MicEnginereturn.VarObject.OnceFunctionBool(function () {
            MicEnginereturn.Audio.PlayOnceSound(2, GlobalVar.VolumeSounds / 100);
         });
         //SUONO VENTOLA
         const FanSound = new MicEnginereturn.VarObject.OnceFunctionBool(function () {
            MicEnginereturn.Audio.PlayOnceSound(3, GlobalVar.VolumeSounds / 100);
         });
         //SUONO SALDATURA
         const WelderSound = new MicEnginereturn.VarObject.OnceFunctionBool(function () {
            MicEnginereturn.Audio.PlayOnceSound(4, GlobalVar.VolumeSounds / 100);
         });
         //#endregion

         /*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
         /*----------------------------------------------------BLOCCHI LOOP 100MS----------------------------------------------------------------*/

         /*------------------AGGIORNAMENTO VARIABILI ONCE FUNCTION, VINCITA MINIGIOCO CARROPONTE-------------------------*/
         function _100_Carroponte() {
            if (GlobalVar.Control == 1) ActionButton.Update(Controller.Button[0]);

            if (Number(Carroponte.Vincita) > 0) {
               GlobalVar.Money += Number(Carroponte.Vincita);
               G0_ShowMoneySpentCanvas(ContainerHUD, 0, Number(Carroponte.Vincita));
               G0_MoveMoneyImg(600, 330, 90, 150, true);
               GlobalVar.GameEnabled = false;
               Carroponte.Reset();
               ContainerHUD.render();

               setTimeout(() => {
                  ContainerHUD.setButtonText(0, `${GlobalVar.Money}${Economy.MoneySymbol}`);
                  ContainerHUD.render();
               }, 2000);
            };
         };

         /*--------------------------------------------------SUONI-------------------------------------------------------*/
         function _100_Sounds() {
            if (GlobalVar.GameEnabled == true) {
               GlobalVar.SoundMotor = Math.max(Math.abs(GlobalVar.ComX), Math.abs(GlobalVar.ComY));
               //SUONO MOTORE
               EngineOnceSound.Update(GlobalVar.SoundMotor);
               EngineSound.SetModulation(GlobalVar.SoundMotor / 100);

               ScannerSound.Update(Carroponte.LavorStazioni[0]);        //SUONO SCANNER
               WashSound.Update(Carroponte.LavorStazioni[1]);        //SUONO LAVAGGIO
               FanSound.Update(Carroponte.LavorStazioni[2]);        //SUONO VENTOLA
               WelderSound.Update(Carroponte.LavorStazioni[3]);        //SUONO SALDATURA
            }
            else GlobalVar.SoundMotor = 0;
         };

         ContainerHUD.render();

         setInterval(() => {
            _100_Sounds();
            _100_Carroponte();         //AGGIORNAMENTO VARIABILI ONCE FUNCTION, VINCITA MINIGIOCO CARROPONTE

            //console.log(MicEnginereturn.VarPad.ValX);
         }, 100);
      };
      startGame().then(() => {
         gameReady = true;
         MicEnginereturn.VarObject.E3_UpdateProgress(true);
      });
   };

   //---------------------------------------------PAGINA STAZIONE PROGETTO WORMHOLE-----------------------------------------//
   if (GlobalVar.Page == "Station" && GlobalVar.StationType == 8) {
      /*-----------------------------------------------PARAMETRI ENGINE----------------------------------------------------------*/
      MicEngineParam = HubStationParam;

      /*----------------------------------------------CARICAMENTO ENGINE--------------------------------------------------------*/
      async function startGame() {
         MicEnginereturn = await MicEngine(MicEngineParam, Oggetti, Geometrie, Materiali);
         if (MicEngineParam.Moduli.Debug == true && MicEngineParam.Debug.Return == true) {
            console.log("MicEnginereturn");
            console.log(MicEnginereturn.VarObject.E3_ConsoleLogSimpleObject(MicEnginereturn));
         };
         let DynamicWormholeHUD;

         function G1_CommonNPC(Reward) {              //RIPETE LE STESSE AZIONI AD OGNI NPC PER NON RISCIRIVERLE
            GlobalVar.Money += Number(Math.floor(Reward));
            G0_ShowMoneySpentCanvas(DynamicWormholeHUD, 0, Number(Math.floor(Reward)));
            G0_MoveMoneyImg(600, 330, 90, 150, true);
            if (GlobalVar.Capitolo < 2) {
               GlobalVar.MissionCurrent = 0;
               GlobalVar.MissionPlanetCurrent = 0;
               GlobalVar.MissionMoonCurrent = 0;
               GlobalVar.MissionSubMoonCurrent = 0;
               GlobalVar.MissionLoadCurrent = 0;
               GlobalVar.MissionRewardCurrent = 0;
            };

         };
         function G1_UpdateConstruction() {     //AGGIORNA LA BARRA DI COSTRUZIONE IN BASE AL CAPITOLO E ALLA MISSIONE
            //CALCOLA LA PERCENTUALE IN BASE AL CAPITOLO E LA MISSIONE
            if (GlobalVar.Capitolo == 1) {
               //IMPOSTA LA PERCENTUALE DI COSTRUZIONE AL 20% OGNI MISSIONE
               if (GlobalVar.Missione == 0) VarObjectsWormhole.Costruzione = 0;
               if (GlobalVar.Missione == 1 || GlobalVar.Missione == 2) VarObjectsWormhole.Costruzione = 20;
               if (GlobalVar.Missione == 3 || GlobalVar.Missione == 4) VarObjectsWormhole.Costruzione = 40;
               if (GlobalVar.Missione == 5 || GlobalVar.Missione == 6) VarObjectsWormhole.Costruzione = 60;
               if (GlobalVar.Missione == 7 || GlobalVar.Missione == 8) VarObjectsWormhole.Costruzione = 80;
               if (GlobalVar.Missione == 9) VarObjectsWormhole.Costruzione = 100;
            }
            else if (GlobalVar.Capitolo == 0) VarObjectsWormhole.Costruzione = 0;
            else VarObjectsWormhole.Costruzione = 100;
            //AGGIORNA LA BARRA E IL TESTO
            DynamicWormholeHUD.setBarValue(0, VarObjectsWormhole.Costruzione / 100);
            DynamicWormholeHUD.setBarText(0, `${VarObjectsWormhole.Costruzione}%`);
            DynamicWormholeHUD.render();
         };
         function G1_UpdateDeuterium() {
            GlobalVar.DeuterioTotal += GlobalVar.Deuterio;
            if (GlobalVar.DeuterioTotal >= 200) {
               GlobalVar.DeuterioTotal = 200;
               SaveSystem.setItem(`FlagMissione`, 1);
            };
            //AGGIORNA LA BARRA E IL TESTO
            DynamicWormholeHUD.setBarValue(1, GlobalVar.DeuterioTotal / 200);
            DynamicWormholeHUD.setBarText(1, `${GlobalVar.DeuterioTotal / 2}%`);
            DynamicWormholeHUD.render();
         };
         function G1_UpdateTritium() {
            GlobalVar.TrizioTotal += GlobalVar.Trizio;
            if (GlobalVar.TrizioTotal >= 200) {
               GlobalVar.TrizioTotal = 200;
               SaveSystem.setItem(`FlagMissione`, 1);
            };
            //AGGIORNA LA BARRA E IL TESTO
            DynamicWormholeHUD.setBarValue(2, GlobalVar.TrizioTotal / 200);
            DynamicWormholeHUD.setBarText(2, `${GlobalVar.TrizioTotal / 2}%`);
            DynamicWormholeHUD.render();
         };
         function G1_UpdateSun() {
            GlobalVar.SoleTotal += GlobalVar.Sole * 0.2;
            if (GlobalVar.SoleTotal >= 100) {
               GlobalVar.SoleTotal = 100;
            };
            //AGGIORNA LA BARRA E IL TESTO
            DynamicWormholeHUD.setBarValue(3, GlobalVar.SoleTotal / 100);
            DynamicWormholeHUD.setBarText(3, `${GlobalVar.SoleTotal.toFixed(0)}%`);
            DynamicWormholeHUD.render();
         };
         function G1_UpdateScient() {
            GlobalVar.ScientTotal += GlobalVar.Scient;
            if (GlobalVar.ScientTotal >= 32) GlobalVar.ScientTotal = 32;
            DynamicWormholeHUD.setBarValue(4, GlobalVar.ScientTotal / 32);
            DynamicWormholeHUD.setBarText(4, `${GlobalVar.ScientTotal}`);
            GlobalVar.Scient = 0;
            if (SaveSystem.getItem('FlagMissione') == 0) G1_CommonNPC(Economy.HugeReward);
            SaveSystem.setItem(`FlagMissione`, 1);
            DynamicWormholeHUD.render();
         };

         //--------------------------PULSANTI STATICI COMUNI A TUTTE LE STAZIONI (MENU, MAPPA RETURN)---------------------------------------//
         const StaticStationHUD = G0_GenerateStaticStationHUD({
            Return: function () {
               if (GlobalVar.Capitolo == 5 && GlobalVar.Missione == 2 && SaveSystem.getItem('FlagMissione') == 1) {
                  G0_ExtiPageSaveMissions("Credits");
               }
               else G0_ExtiPageSaveMissions("Game");
            },
            ClickIndex: null,
         });

         //-----------------------------------------------PULSANTI DINAMICI-----------------------------------------------------------------//
         //#region
         DynamicWormholeHUDObj.DispatchEvent = StaticStationHUD.canvas;
         DynamicWormholeHUD = S0_GenerateHUDCanvas(DynamicWormholeHUDObj);

         DynamicWormholeHUD.showImage(0, false);

         //PULSANTE MONEY
         DynamicWormholeHUD.setButtonText(0, `${GlobalVar.Money}${Economy.MoneySymbol}`);
         CoinGoldImg = document.createElement("img");
         S0_StandardCSS(CoinGoldImg, "top", "0px", "left", "0px", "30px", "30px");
         CoinGoldImg.style.zIndex = 10;
         CoinGoldImg.src = Sprite.CoinGold;
         MoneyObj.startY = 150;

         //PULSANTE COIN
         DynamicWormholeHUD.setButtonText(1, `${GlobalVar.Coin}`);
         CoinSilverImg = document.createElement('img');
         S0_StandardCSS(CoinSilverImg, "top", "0px", "left", "0px", "30px", "30px");
         CoinSilverImg.style.zIndex = 10;
         CoinSilverImg.src = Sprite.CoinSilver;
         CoinObj.startY = 195;

         /*-----------------BARRA DI COSTRUZIONE----------------------*/
         G1_UpdateConstruction();

         /*------------------BARRA DI DEUTERIO------------------------*/
         //AGGIORNA LA BARRA E IL TESTO
         DynamicWormholeHUD.setBarValue(1, GlobalVar.DeuterioTotal / 200);
         DynamicWormholeHUD.setBarText(1, `${(GlobalVar.DeuterioTotal / 2).toFixed(0)}%`);

         /*-------------------BARRA DI TRIZIO-------------------------*/
         //AGGIORNA LA BARRA E IL TESTO
         DynamicWormholeHUD.setBarValue(2, GlobalVar.TrizioTotal / 200);
         DynamicWormholeHUD.setBarText(2, `${(GlobalVar.TrizioTotal / 2).toFixed(0)}%`);

         /*--------------------BARRA DI SOLE--------------------------*/
         //AGGIORNA LA BARRA E IL TESTO
         DynamicWormholeHUD.setBarValue(3, GlobalVar.SoleTotal / 100);
         DynamicWormholeHUD.setBarText(3, `${GlobalVar.SoleTotal.toFixed(0)}%`);

         /*--------------------BARRA SCIENZIATI--------------------------*/
         //AGGIORNA LA BARRA E IL TESTO
         DynamicWormholeHUD.setBarValue(4, GlobalVar.ScientTotal / 32);
         DynamicWormholeHUD.setBarText(4, `${GlobalVar.ScientTotal}`);

         //VISIBILITÀ BARRA SCIENZIATI
         if ((GlobalVar.Capitolo == 4 && GlobalVar.Missione >= 2) || GlobalVar.Capitolo > 4) {
            DynamicWormholeHUD.showButton(6, true);
            DynamicWormholeHUD.showBar(4, true);
         }
         else {
            DynamicWormholeHUD.showButton(6, false);
            DynamicWormholeHUD.showBar(4, false);
         };
         //#endregion

         /*----------------------------------------------AVVIO DELLA PAGINA---------------------------------------------------------*/
         SaveSystem.setItem(`SpaceStation`, 1);       //FLAG DI PAGINA

         //AGGIORNA LA QUANTITÀ DI MEMBRI DI EQUIPAGGIO ATTUALI
         VarObjectsWormhole.Crew = 1 + GlobalVar.ExtractionModules + GlobalVar.ContainerModules + GlobalVar.RadarModules;
         //AGGIORNA LA QUANTITÀ DI MEMBRI DI EQUIPAGGIO OSPITABILI PER I VIAGGI NORMALI
         VarObjectsWormhole.TravelCrew = 1 + GlobalVar.ShipModules * 2;
         //AGGIORNA LA QUANTITÀ DI MEMBRI DI EQUIPAGGIO OSPITABILI PER I VIAGGI LUNGHI
         VarObjectsWormhole.LongTravelCrew = GlobalVar.LivingModules * 2;

         //FLAG DI STORIA
         if (GlobalVar.Capitolo == 1) {
            if (GlobalVar.MissionCurrent == 1 && GlobalVar.MissionPlanetCurrent == 3 && GlobalVar.MissionMoonCurrent == 4) {
               //MESSAGGIO NPC.Wormhole.Testi[0]
               if (GlobalVar.Missione == 0 && GlobalVar.MissionLoadCurrent == Economy.SpecialMissions[0].Load) VarObjectsWormhole.FlagStoria = 1;
               //MESSAGGIO NPC.Wormhole.Testi[1]
               if (GlobalVar.Missione == 2 && GlobalVar.MissionLoadCurrent == Economy.SpecialMissions[1].Load) VarObjectsWormhole.FlagStoria = 2;
               //MESSAGGIO NPC.Wormhole.Testi[2]
               if (GlobalVar.Missione == 4 && GlobalVar.MissionLoadCurrent == Economy.SpecialMissions[2].Load) VarObjectsWormhole.FlagStoria = 3;
               //MESSAGGIO NPC.Wormhole.Testi[3]
               if (GlobalVar.Missione == 6 && GlobalVar.MissionLoadCurrent == Economy.SpecialMissions[3].Load) VarObjectsWormhole.FlagStoria = 4;
               //MESSAGGIO NPC.Wormhole.Testi[4]
               if (GlobalVar.Missione == 8 && GlobalVar.MissionLoadCurrent == Economy.SpecialMissions[4].Load) VarObjectsWormhole.FlagStoria = 5;
            };
            if (GlobalVar.Missione == 1) VarObjectsWormhole.FlagStoria = 0;
            if (GlobalVar.Missione == 3) VarObjectsWormhole.FlagStoria = 0;
            if (GlobalVar.Missione == 5) VarObjectsWormhole.FlagStoria = 0;
            if (GlobalVar.Missione == 7) VarObjectsWormhole.FlagStoria = 0;
         };
         if (GlobalVar.Capitolo == 2) {
            if (GlobalVar.Missione == 0) VarObjectsWormhole.FlagStoria = 6;     //MESSAGGIO NPC.Wormhole.Testi[5]
            if (GlobalVar.Missione == 1) VarObjectsWormhole.FlagStoria = 7;     //MESSAGGIO NPC.Wormhole.Testi[6]
            if (GlobalVar.Missione == 2) {
               if (GlobalVar.ExtractionModules == 1 && VarObjectsWormhole.LongTravelCrew >= VarObjectsWormhole.Crew) VarObjectsWormhole.FlagStoria = 8;     //MESSAGGIO NPC.Wormhole.Testi[7]
               else VarObjectsWormhole.FlagStoria = 0;
            };
            if (GlobalVar.Missione == 3) {
               //SE HO RACCOLTO DEL DEUTERIO
               if (GlobalVar.ExtractionModules == 1 && VarObjectsWormhole.LongTravelCrew >= VarObjectsWormhole.Crew && GlobalVar.Deuterio > 0) {
                  //SE LA SOMMA DI QUELLO RACCOLTO E QUELLO DEPOSITATO È MINORE DI 200
                  if (GlobalVar.DeuterioTotal + GlobalVar.Deuterio < 200) VarObjectsWormhole.FlagStoria = 9;     //MESSAGGIO NPC.Wormhole.Testi[8]
                  //SE È MAGGIORE O UGUALE
                  else VarObjectsWormhole.FlagStoria = 10;     //MESSAGGIO NPC.Wormhole.Testi[9]
               };
            };
            if (GlobalVar.Missione == 4) {
               //SE HO RACCOLTO DEL TRIZIO
               if (GlobalVar.ExtractionModules == 1 && VarObjectsWormhole.LongTravelCrew >= VarObjectsWormhole.Crew && GlobalVar.Trizio > 0) {
                  //SE LA SOMMA DI QUELLO RACCOLTO E QUELLO DEPOSITATO È MINORE DI 200
                  if (GlobalVar.TrizioTotal + GlobalVar.Trizio < 200) VarObjectsWormhole.FlagStoria = 11;     //MESSAGGIO NPC.Wormhole.Testi[10]
                  //SE È MAGGIORE O UGUALE
                  else VarObjectsWormhole.FlagStoria = 12;     //MESSAGGIO NPC.Wormhole.Testi[11]
               };
            };
            if (GlobalVar.Missione == 5) VarObjectsWormhole.FlagStoria = 13;     //MESSAGGIO NPC.Wormhole.Testi[12]
            if (GlobalVar.Missione == 6) VarObjectsWormhole.FlagStoria = 14;     //MESSAGGIO NPC.Wormhole.Testi[13]
            if (GlobalVar.Missione == 7) VarObjectsWormhole.FlagStoria = 0;
         };
         if (GlobalVar.Capitolo == 3) {
            if (GlobalVar.Missione == 0) VarObjectsWormhole.FlagStoria = 15;     //MESSAGGIO NPC.Wormhole.Testi[14]
            if (GlobalVar.Missione == 1) {
               //SE HO RACCOLTO DEL PLASMA
               if (GlobalVar.ExtractionModules == 1 && VarObjectsWormhole.LongTravelCrew >= VarObjectsWormhole.Crew && GlobalVar.Sole > 0) {
                  //SE LA SOMMA DI QUELLO RACCOLTO E QUELLO DEPOSITATO È MINORE DI 200
                  if ((GlobalVar.SoleTotal + GlobalVar.Sole * 0.2) < 100) VarObjectsWormhole.FlagStoria = 16;     //MESSAGGIO NPC.Wormhole.Testi[15]
                  //SE È MAGGIORE O UGUALE
                  else VarObjectsWormhole.FlagStoria = 17;     //MESSAGGIO NPC.Wormhole.Testi[16]
               };
            };
            if (GlobalVar.Missione == 2) VarObjectsWormhole.FlagStoria = 18;     //MESSAGGIO NPC.Wormhole.Testi[17]
         };
         if (GlobalVar.Capitolo == 4) {
            if (GlobalVar.Missione == 0) VarObjectsWormhole.FlagStoria = 19;     //MESSAGGIO NPC.Wormhole.Testi[18]
            if (GlobalVar.Missione == 2) VarObjectsWormhole.FlagStoria = 20;     //MESSAGGIO NPC.Wormhole.Testi[19]
            if (GlobalVar.Missione == 4 && GlobalVar.Scient == 8) VarObjectsWormhole.FlagStoria = 21;     //MESSAGGIO NPC.Wormhole.Testi[20]
            if (GlobalVar.Missione == 6 && GlobalVar.Scient == 8) VarObjectsWormhole.FlagStoria = 22;     //MESSAGGIO NPC.Wormhole.Testi[21]
            if (GlobalVar.Missione == 8 && GlobalVar.Scient == 8) VarObjectsWormhole.FlagStoria = 24;     //MESSAGGIO NPC.Wormhole.Testi[23]
            if (GlobalVar.Missione == 10 && GlobalVar.Scient == 8) VarObjectsWormhole.FlagStoria = 26;     //MESSAGGIO NPC.Wormhole.Testi[25]
         };
         if (GlobalVar.Capitolo == 5) {
            if (GlobalVar.Missione == 2 && GlobalVar.Cometa >= 100) VarObjectsWormhole.FlagStoria = 28;     //MESSAGGIO NPC.Wormhole.Testi[27]
         };

         //SECONDO MESSAGGIO ALLA PRESSIONE DEL TASTO OK, IL MESSAGGO VISUALIZZATO È IL SUCCESSIVO RISPETTO A VarObjectsWormhole.FlagStoria
         function G2_SecondMessage() {
            MicEnginereturn.VarObject.E3_DisplayNPCSingleButton({
               //GENERICI
               Font: 14,                                             //FONT IN PIXEL
               PosX: 0,                                            //POSIZIONE X (POSITIVA=SINISTRA, NEGATIVA=DESTRA)
               PosY: 0,                                              //POSIZIONE Y (SOLO TOP)
               zIndex: "20",
               //IMMAGINE
               LargImage: 150,                                       //LARGHEZZA IMMAGINE
               AtImage: 100,                                         //ALTEZZA IMMAGINE
               Image: NPC.Radio.Immagini[GlobalVar.StationType - 1][GlobalVar.GenderNPC],               //IMMAGINE
               //TESTO
               PositionText: "Down",                               //POSIZIONE DEL TESTO RELATIVA ALL'IMMAGINE "Down" "Side"
               LargText: 450,
               AltText: 200,                                          //ALTEZZA TESTO
               ColorText: Colors.NPCColor,                             //COLORE SFONDO TESTO
               ColorFontText: "#ffffffff",                         //COLORE FONT TESTO
               Text: NPC.Wormhole.Testi[VarObjectsWormhole.FlagStoria][GlobalVar.Language],               //TESTO
               //PULSANTE
               AltPuls: 40,                   //ALTEZZA PULSANTI
               ColorPuls: Colors.NPCColor,                             //COLORE SFONDO PULSANTI
               ColorFontPuls: "#ffffffff",                         //COLORE FONT PULSANTI
               ColorBorderPuls: Colors.NPCBorderColor,                      //COLORE BORDO PULSANTI
               Text1: "OK",                   //TESTO PULSANTE 1
            },
               function () {
                  if (GlobalVar.Capitolo == 4) {
                     if (GlobalVar.Missione == 6) {
                        DynamicWormholeHUD.showImage(0, false);
                        G1_UpdateScient();            //NOTA: CONTIENE SaveSystem.setItem(`FlagMissione`, 1);
                     };
                     if (GlobalVar.Missione == 8) {
                        DynamicWormholeHUD.showImage(0, false);
                        G1_UpdateScient();            //NOTA: CONTIENE SaveSystem.setItem(`FlagMissione`, 1);
                     };
                     if (GlobalVar.Missione == 10) {
                        DynamicWormholeHUD.showImage(0, false);
                        G1_UpdateScient();            //NOTA: CONTIENE SaveSystem.setItem(`FlagMissione`, 1);
                     };
                  };
                  if (GlobalVar.Capitolo == 5) {
                     if (GlobalVar.Missione == 2) {
                        if (SaveSystem.getItem('FlagMissione') == 0) G1_CommonNPC(Economy.FinalReward);
                        SaveSystem.setItem('FlagMissione', 1);
                     };
                  };
                  DynamicWormholeHUD.render();
               });
         };

         DynamicWormholeHUD.render();

         //NPC DI BENVENUTO E DI STORIA
         setTimeout(() => {
            if (VarObjectsWormhole.FlagStoria > 0) {
               MicEnginereturn.VarObject.E3_DisplayNPCSingleButton({
                  //GENERICI
                  Font: 14,                                             //FONT IN PIXEL
                  PosX: 0,                                            //POSIZIONE X (POSITIVA=SINISTRA, NEGATIVA=DESTRA)
                  PosY: 0,                                              //POSIZIONE Y (SOLO TOP)
                  zIndex: "20",
                  //IMMAGINE
                  LargImage: 150,                                       //LARGHEZZA IMMAGINE
                  AtImage: 100,                                         //ALTEZZA IMMAGINE
                  Image: NPC.Radio.Immagini[GlobalVar.StationType - 1][GlobalVar.GenderNPC],               //IMMAGINE
                  //TESTO
                  PositionText: "Down",                               //POSIZIONE DEL TESTO RELATIVA ALL'IMMAGINE "Down" "Side"
                  LargText: 450,
                  AltText: 200,                                          //ALTEZZA TESTO
                  ColorText: Colors.NPCColor,                             //COLORE SFONDO TESTO
                  ColorFontText: "#ffffffff",                         //COLORE FONT TESTO
                  Text: NPC.Wormhole.Testi[VarObjectsWormhole.FlagStoria - 1][GlobalVar.Language],               //TESTO
                  //PULSANTE
                  AltPuls: 40,                   //ALTEZZA PULSANTI
                  ColorPuls: Colors.NPCColor,                             //COLORE SFONDO PULSANTI
                  ColorFontPuls: "#ffffffff",                         //COLORE FONT PULSANTI
                  ColorBorderPuls: Colors.NPCBorderColor,                      //COLORE BORDO PULSANTI
                  Text1: "OK",                   //TESTO PULSANTE 1
               },
                  function () {
                     if (GlobalVar.Capitolo == 1) {
                        GlobalVar.Missione++;    //ATTIVA TEMPORANEAMENTE LA MISSIONE SUCCESSIVA SOLO PER LA PROGRASSIONE DELLE BARRE
                        G1_UpdateConstruction();
                        if (SaveSystem.getItem('FlagMissione') == 0) G1_CommonNPC(GlobalVar.MissionRewardCurrent);
                        SaveSystem.setItem(`MissionDone`, 1);     //MEMORIZZA NEL LOCAL STORAGE CHE LA MISSIONE È CONCLUSA
                        SaveSystem.setItem(`FlagMissione`, 1);
                        GlobalVar.Missione--;          //RIPORTA LA MISSIONE A COME PRIMA
                     };
                     if (GlobalVar.Capitolo == 2) {
                        if (GlobalVar.Missione == 1 || (GlobalVar.Missione == 2 && GlobalVar.ExtractionModules == 1)) {
                           if (SaveSystem.getItem('FlagMissione') == 0) G1_CommonNPC(Economy.StandardReward);
                           SaveSystem.setItem('FlagMissione', 1);
                        };
                        if (GlobalVar.Missione == 3) {
                           G1_UpdateDeuterium();      //NOTA: CONTIENE SaveSystem.setItem(`FlagMissione`, 1);
                           G1_CommonNPC(Economy.CarburanteReward * GlobalVar.Deuterio);
                           GlobalVar.Deuterio = 0;
                        };
                        if (GlobalVar.Missione == 4) {
                           G1_UpdateTritium();      //NOTA: CONTIENE SaveSystem.setItem(`FlagMissione`, 1);
                           G1_CommonNPC(Economy.CarburanteReward * GlobalVar.Trizio);
                           GlobalVar.Trizio = 0;
                        };
                        if (GlobalVar.Missione == 6) {
                           SaveSystem.setItem(`FlagMissione`, 1);
                        };
                     };
                     if (GlobalVar.Capitolo == 3) {
                        if (GlobalVar.Missione == 0) {
                           SaveSystem.setItem(`FlagMissione`, 1);
                        };
                        if (GlobalVar.Missione == 1) {
                           G1_UpdateSun();
                           G1_CommonNPC(Economy.CarburanteReward * GlobalVar.Sole);
                           GlobalVar.Sole = 0;
                           //SE IL PLASMA È PIENO PASSA ALLA MISSIONE SUCCESSIVA
                           if (GlobalVar.SoleTotal >= 100) SaveSystem.setItem(`FlagMissione`, 1);
                        };
                        if (GlobalVar.Missione == 2) {
                           if (SaveSystem.getItem('FlagMissione') == 0) G1_CommonNPC(Economy.StandardReward);
                           SaveSystem.setItem('FlagMissione', 1);
                        };
                     };
                     if (GlobalVar.Capitolo == 4) {
                        if (GlobalVar.Missione == 0) {
                           if (SaveSystem.getItem('FlagMissione') == 0) G1_CommonNPC(Economy.StandardReward);
                           SaveSystem.setItem('FlagMissione', 1);
                        };
                        if (GlobalVar.Missione == 2) {
                           if (SaveSystem.getItem('FlagMissione') == 0) G1_CommonNPC(Economy.StandardReward);
                           SaveSystem.setItem('FlagMissione', 1);
                        };
                        if (GlobalVar.Missione == 4) G1_UpdateScient();            //NOTA: CONTIENE SaveSystem.setItem(`FlagMissione`, 1);
                        if (GlobalVar.Missione == 6) {
                           DynamicWormholeHUD.showImage(0, true);
                           DynamicWormholeHUD.setImageUrl(0, Sprite.Wormhole[1]);
                           G2_SecondMessage();
                        };
                        if (GlobalVar.Missione == 8) {
                           DynamicWormholeHUD.showImage(0, true);
                           DynamicWormholeHUD.setImageUrl(0, Sprite.Wormhole[3]);
                           G2_SecondMessage();
                        };
                        if (GlobalVar.Missione == 10) {
                           DynamicWormholeHUD.showImage(0, true);
                           DynamicWormholeHUD.setImageUrl(0, Sprite.Wormhole[5]);
                           G2_SecondMessage();
                        };
                     };
                     if (GlobalVar.Capitolo == 5) {
                        if (GlobalVar.Missione == 2) G2_SecondMessage();
                     };
                     DynamicWormholeHUD.render();
                  });
               //VISUALIZZAZIONE IMMAGINE MESSAGGIO MARZIANO
               if (GlobalVar.Capitolo == 4) {
                  if (GlobalVar.Missione == 6) {
                     DynamicWormholeHUD.showImage(0, true);
                     DynamicWormholeHUD.setImageUrl(0, Sprite.Wormhole[0]);
                  };
                  if (GlobalVar.Missione == 8) {
                     DynamicWormholeHUD.showImage(0, true);
                     DynamicWormholeHUD.setImageUrl(0, Sprite.Wormhole[2]);
                  };
                  if (GlobalVar.Missione == 10) {
                     DynamicWormholeHUD.showImage(0, true);
                     DynamicWormholeHUD.setImageUrl(0, Sprite.Wormhole[4]);
                  };
                  DynamicWormholeHUD.render();
               };
            }
            else G0_WelcomeOnStation();
         }, 1000);

         /*-------------------------------------------TITOLO (GAME)------------------------------------------------------*/
         G0_TitleStation();


      };
      startGame().then(() => {
         gameReady = true;
         MicEnginereturn.VarObject.E3_UpdateProgress(true);
      });
   };

   //---------------------------------------------------PAGINA EDITOR----------------------------------------------//
   if (GlobalVar.Page == "Editor") {
      /*-----------------------------------------------PARAMETRI ENGINE----------------------------------------------------------*/
      MicEngineParam = EditorParam;

      /*----------------------------------------------CARICAMENTO ENGINE--------------------------------------------------------*/
      async function startGame() {
         MicEnginereturn = await MicEngine(MicEngineParam, Oggetti, Geometrie, Materiali);
         if (MicEngineParam.Moduli.Debug == true && MicEngineParam.Debug.Return == true) {
            console.log("MicEnginereturn");
            console.log(MicEnginereturn.VarObject.E3_ConsoleLogSimpleObject(MicEnginereturn));
         };
         /*---------------------------------------AUTOMAZIONI SOLAR SYSTEM DELIVERY------------------------------------------------*/
         /*---------------------------------------------------GENERATE HUD-------------------------------------------------------*/
         //#region
         const EditorHUDCanvas = S0_GenerateHUDCanvas(SimpleHUDObj);
         //PULSANTE HOME
         EditorHUDCanvas.setButtonCallback(0, () => {
            G0_ShowLoadingAndReload("Home");     //SaveSystem.update();
         });
         EditorHUDCanvas.render();
         //#endregion

         MicEnginereturn.GenericGroup.visible = false;
      };
      startGame().then(() => {
         gameReady = true;
         MicEnginereturn.VarObject.E3_UpdateProgress(true);
      });
   };

   //---------------------------------------------PAGINA DIARIO MISSIONI-----------------------------------------//
   if (GlobalVar.Page == "Missions") {
      /*----------------------------------------------GENERATE HUD----------------------------------------------------*/
      //#region
      const GameHUD = G0_GenerateHUD(MissionsHUDObj);

      //PULSANTE HOME
      GameHUD.Pulsanti[0].addEventListener('click', function () {
         if (Number(SaveSystem.getItem(`SpaceStation`)) == 0) G0_ShowLoadingAndReload("Game");     //SaveSystem.update();
         if (Number(SaveSystem.getItem(`SpaceStation`)) == 1) G0_ShowLoadingAndReload("Station");     //SaveSystem.update();
      });

      //GENERAZIONE CAPITOLI E MISSIONI
      const ChaptersHUD = G0_GenerateHUD(ChaptersBlockHUDObj);    //NOTA: IL NUMERO DI CAPITOLI (Testi.Missions) DEVE CORRISPONDERE AI PULSANTI
      const MissionsHUD = G0_GenerateHUD(MissionsBlockHUDObj);

      S0_MissionDiary({
         ChaptersHUD: ChaptersHUD,                                //OGGETTO PULSANTI CAPITOLI (DEVE CONTENERE L'ESATTO NUMERO DI CAPITOLI)
         MissionsHUD: MissionsHUD,                                //OGGETTO PULSANTI MISSIONI (DEVE CONTENERE IL NUMERO MASSIMO DI MISSIONI)
         Testi: Testi.Missions,                                   //ARRAY CON I TESTI
         Capitolo: GlobalVar.Capitolo,                            //VALORE ATTUALE DI CAPITOLO SBLOCCATO
         Missione: GlobalVar.Missione,                            //VALORE ATTUALE DI MISSIONE SBLOCCATA
         ColorActive: Colors.ActivePuls,                          //COLORE DEL PULSANTE SBLOCCATO
         ColorUnactive: Colors.DisabledMission,                   //COLORE DEL PULSANTE BLOCCATO
         ColorSelected: Colors.SelectedPuls,                      //COLORE DEL PULSANTE SELEZIONATO
         CapitoloText: Testi.Menu.Capitolo[GlobalVar.Language],   //TESTO MULTILINGUA "CAPITOLO", OMETTERE PER IL SOLO NUMERO
         Language: GlobalVar.Language,                            //LINGUA DI SISTEMA
         ChaptersWidth: "250px",
         ChaptersRight: "360px",
         MissionsWidth: "350px",
         MissionsRight: "5px",
         Blocco: true,                                           //BLOCCO DELLE MISSIONI NON SCOPERTE ATTIVO
      });
      //#endregion
   };

   //---------------------------------------------PAGINA TITOLI DI CODA-----------------------------------------//
   if (GlobalVar.Page == "Credits") {

      const CreditsHUDCanvas = S0_GenerateHUDCanvas(SimpleHUDObj);
      //PULSANTE HOME
      CreditsHUDCanvas.setButtonCallback(0, () => {
         G0_ShowLoadingAndReload("Home");     //SaveSystem.update();
         if (GlobalVar.Capitolo == 5 && GlobalVar.Missione == 2 && SaveSystem.getItem('FlagMissione') == 1) G0_ExtiPageSaveMissions("Game");
      });
      CreditsHUDCanvas.render();

      const TextElement = document.createElement('p');
      TextElement.style.position = "absolute";
      TextElement.style.width = "100%";
      TextElement.style.textAlign = "center";
      TextElement.style.fontSize = "1.5rem";
      TextElement.style.color = "white";
      TextElement.innerText = Testi.Coda;
      document.body.appendChild(TextElement);

      let y = window.innerHeight; //parte da sotto
      const speed = 1; //pixel per frame

      function animate() {
         y -= speed;
         TextElement.style.top = y + "px";

         if (y + TextElement.offsetHeight > 0) {
            requestAnimationFrame(animate);
         }
      };

      animate();
   };
};

// await initApp();
initApp();

export function Update(delta) {
   if (typeof MicEnginereturn === 'object' && gameReady == true) {
      if (MicEnginereturn.User.Done == true && MicEnginereturn.VarObject.PaceDone == true) {
         if ((GlobalVar.Page == "Home") && GlobalVar.EnableHomeEngine == true) UpdateHome(delta);
         if (GlobalVar.Page == "Game") UpdateGame(delta);
         if (GlobalVar.Page == "Map") UpdateMap(delta);
         if (GlobalVar.Page == "Controls") UpdateControls(delta);
         if (GlobalVar.Page == "Station" && GlobalVar.StationType == 4) UpdateStationHangar(delta);
         if (GlobalVar.Page == "Station" && GlobalVar.StationType == 1) UpdateStationHub(delta);
         if (GlobalVar.Page == "Station" && GlobalVar.StationType == 2) UpdateStationCity(delta);
         if (GlobalVar.Page == "Station" && GlobalVar.StationType == 3) UpdateStationExtraction(delta);
         if (GlobalVar.Page == "Station" && GlobalVar.StationType == 5) UpdateStationResearch(delta);
         if (GlobalVar.Page == "Station" && GlobalVar.StationType == 6) UpdateStationShip1(delta);
         if (GlobalVar.Page == "Station" && GlobalVar.StationType == 7) UpdateStationShip2(delta);
         if (GlobalVar.Page == "Station" && GlobalVar.StationType == 8) UpdateStationWormhole(delta);
      };
   };
};
//ELIMINARE S0_GenerateHUD, S0_StandardCSS, StandardCSSText
//style.display = "none"; "block"