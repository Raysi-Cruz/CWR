//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=1; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fResp="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="¡Correcto! Muy bien, has resuelto este problema."; messageTime=""; messageError="Intenta de nuevo, revisa bien los datos del problema."; messageErrorG="Intenta de nuevo, revisa bien los datos del problema."; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="aW5kZXg="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["En una clase de matemáticas, hay 25 estudiantes. Si 15 estudiantes tienen lápices azules y 10 tienen lápices rojos, ¿cuántos lápices de cada color hay en total en la clase?"];
var answers1=["MTE1IGzDoXBpY2VzIGF6dWxlcyB5IDEwIGzDoXBpY2VzIHJvam9z","MDI1IGzDoXBpY2VzIGF6dWxlcyB5IDE1IGzDoXBpY2VzIHJvam9z","MDEwIGzDoXBpY2VzIGF6dWxlcyB5IDI1IGzDoXBpY2VzIHJvam9z","MDE1IGzDoXBpY2VzIGF6dWxlcyB5IDE1IGzDoXBpY2VzIHJvam9z"];
var ans=[answers1];
var err=["Revisa bien los datos, intenta otra vez."];
var ima=["azules_y_rojos.jpg"];
var mp4=[""];
var ogv=[""];
var alt=[""];
var info=[""];
var indexTag=0; actualAnswers=[]; dirMedia="index_resources/media/";
var tiRandOrder=false;
var iT=0;var r_order=[];
