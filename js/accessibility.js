//-------------------------------
//-------- Accessibility --------
//----------Version 1.0----------
//-------------------------------
// Implementación de acciones de accesibilidad para las plantillas HTML
// Contiene:
// Temas de contraste
// Lector de textos
// Cambio de tamaño de fuente
// Activación de componenetes por teclado
//
//------------TODO---------------
//Preparar para lectores: aria-label aria-labelledby aria-describedby
// 
//-------------------------------
// Variables
// Activar o desactivar el menu de accesibilidad
var allowAccesibility = true;

//speechSynthesis
var selected_voice = "";
var currentSlideText;
var currentSpeachText = 0;
var reader=window.speechSynthesis;
var available_voices = reader.getVoices();
var readerContent;

//theme contrast accesibility
var themes=['','highContrast','highContrastHalfColor','highContrastHalfColorBright','grayScale'];
var themePossition=0;

//default font size in pixels 
var fontSize = 18;
var maxfontSize = 24;
var minfontSize = 10;
var fontIncrement = 2;
//-------------------------------
// Funciones
// load Accessibility
function showAccesibility(){    
    if(allowAccesibility){ 
        //console.log("accesibility enabled");
        jQuery(".accesibility-container").show();         
        loadVoices();
        chooseVoiceLang();                 
    }
}
//-------------------------------
// load available voices 
function loadVoices(){
    if(reader.getVoices().length == 0) {
        reader.addEventListener('voiceschanged', function() {                        
            available_voices = reader.getVoices(); 
            //console.log("voices loaded");
        });
    } 
    else{
        available_voices = reader.getVoices();        
    }
    selected_voice = available_voices[0];         
    //console.log(available_voices);
}

//Select voice lang: es-MX //es-US //es-ES
function chooseVoiceLang(){    
	for(var i=0; i<available_voices.length; i++) {
        if(available_voices[i].lang == 'es-MX') {
            //console.log("Lang found: "+available_voices[i].lang);
			selected_voice = available_voices[i]
			
        }else if(available_voices[i].lang == 'es-US') {
            //console.log("Lang found: "+available_voices[i].lang);
			selected_voice = available_voices[i];
			
        }else if(available_voices[i].lang == 'es-ES') {
            //console.log("Lang found: "+available_voices[i].lang);
			selected_voice = available_voices[i];			
		}                   
    }    
}


//Preload and Speech Menu
function loadSpeechPlayer(){
    if(available_voices.length > 0 && selected_voice.lang.startsWith("es")){
        console.log("speech enabled");
        console.log("selected voice: "+selected_voice.lang);  
        currentSpeachText = 0;
        selectReadText();
        if(currentSlideText){
            createSpeachObject();        
        }else{
            console.warn("No readable text found in Slide");
        }        
        if(readerContent){
            jQuery(".btn-read").show();    
        }                     
    }
    //TODO fix comprobation on mobile -> debug
    if(isMobileDevice()){
        console.log("speech enabled");
        console.log("selected voice: "+selected_voice.lang);   
        
        currentSpeachText = 0;
        selectReadText();
        if(currentSlideText){
            createSpeachObject();        
        }else{
            console.warn("No readable found in Slide");
        }        
        if(readerContent){
            jQuery(".btn-read").show();    
        }  
    }         
}

function showSpeechPlayer(){
    jQuery(".speechPlayer-container").show();  
    jQuery(".accesibility-options").toggle(); 
    jQuery(currentSlideText[currentSpeachText]).addClass("readerHighlight");
    jQuery(".btn-playText").focus();
    if(currentSlideText.length<=1){
        jQuery(".btn-nextText").hide();
        jQuery(".btn-prevText").hide();
    }

}

function selectReadText(){      
    var selectedReadable = jQuery("*[data-readable]");    
    if(selectedReadable.length>0){
        currentSlideText = new Array(selectedReadable.length);
        if(selectedReadable[0].dataset.readable == 'true'){
            //console.log("true-order");
            currentSlideText = selectedReadable;
        }else{
           // console.log("Re-order");
            //TODO fix order     
            currentSlideText = selectedReadable;
        }
        //console.log(currentSlideText); 
    }
}

function createSpeachObject(){    
    readerContent = new Array(currentSlideText.length);
    var textToSpeak="";
    for(i=0; i<readerContent.length; i++)
    {
        if(currentSlideText[i].tagName == 'IMG'){
            textToSpeak=currentSlideText[i].ariaDescription;
        }else if(currentSlideText[i].tagName == 'BUTTON'){
            textToSpeak=currentSlideText[i].ariaDescription;
        }else if(currentSlideText[i].tagName == 'A'){
            textToSpeak=currentSlideText[i].ariaDescription;
        }else{
            textToSpeak=currentSlideText[i].textContent;
        }                
        readerContent[i]=new SpeechSynthesisUtterance();        
        readerContent[i].voice = selected_voice;
        readerContent[i].text = textToSpeak;
        readerContent[i].rate = 1;
        readerContent[i].pitch = 1;      
        readerContent[i].onerror = function(){
            console.log("ERROR");
            stopCurrentSpeech();
        }
    }    
}


function playCurrentText(){  
    jQuery(".btn-playText").html('<img class="img-fluid" src="resources/images/img_pause.png">');
    if(reader.speaking){               
        reader.pause();  
        jQuery(".btn-playText").hide();
        jQuery(".btn-pauseText").show();
    }else{

        
        jQuery(currentSlideText[currentSpeachText]).addClass("readerHighlight");               
        //speak    
        reader.speak(readerContent[currentSpeachText]);
        jQuery(".btn-playText").html('<img class="img-fluid" src="resources/images/img_pause.png">');            
        //after text end
        readerContent[currentSpeachText].onend = function() {       
            jQuery(".btn-playText").html('<img class="img-fluid" src="resources/images/img_play.png">');
            if(currentSpeachText==currentSlideText.length-1){
                jQuery(".btn-prevText").focus();                
            }else{
                jQuery(".btn-nextText").focus();
                //nextText();
            }
        }
    }    
    
}

function pauseCurrentSpeech() {
    reader.resume();
    jQuery(".btn-playText").show();
    jQuery(".btn-pauseText").hide();
    jQuery(".btn-playText").html('<img class="img-fluid" src="resources/images/img_pause.png">');
}

function stopCurrentSpeech(){ 
    reader.cancel();          
    jQuery(".btn-playText").html('<img class="img-fluid" src="resources/images/img_play.png">');
    jQuery(".btn-playText").show();
    jQuery(".btn-playText").focus();    
    jQuery(".btn-pauseText").hide();  
    jQuery("*").removeClass("readerHighlight");
}

function prevText(){     
    stopCurrentSpeech();      
    currentSpeachText-=1; 
    jQuery(".btn-nextText").removeClass("disable");
    jQuery(".btn-nextText").prop("disabled",false);         
    if(currentSpeachText==0){        
        jQuery(".btn-prevText").addClass("disable");     
        jQuery(".btn-prevText").prop("disabled",true);  
    }   
    playCurrentText();  
}

function nextText(){  
    stopCurrentSpeech();  
    currentSpeachText+=1;
    jQuery(".btn-prevText").prop("disabled",false);     
    jQuery(".btn-prevText").removeClass("disable");     
    if(currentSpeachText==currentSlideText.length-1){
        jQuery(".btn-nextText").prop("disabled",true);
        jQuery(".btn-nextText").addClass("disable");
    }
    playCurrentText();    
}
//hide Accesibility
function hideAccesibilityMenu(){    
    jQuery(".accesibility-options").hide();    
    stopReader();
}

function stopReader(){
    reader.cancel();
    currentSlideText = "";
    currentSpeachText = 0;
    readerContent = "";
    stopCurrentSpeech();
    jQuery(".btn-read").hide();       
    jQuery(".speechPlayer-container").hide(); 
    jQuery(".btn-prevText").show();    
    jQuery(".btn-prevText").prop("disabled",true);     
    jQuery(".btn-prevText").addClass("disable"); 
    jQuery(".btn-nextText").show();
    jQuery(".btn-nextText").prop("disabled",false);
    jQuery(".btn-nextText").removeClass("disable");    
}
//-------------------------------
//show/hide Menu
function toggleAccesibilityMenu(){
    jQuery(".accesibility-options").toggle();    
    stopReader(); 
}
//-------------------------------
//theme change
function changeTheme(className){        
    if(jQuery('body').attr('class')==className){
        jQuery('body').removeClass(className);
    }
    else{
        jQuery('body').attr('class',className);
    }
}
//-------------------------------

//theme change
function changeThemeRotative(){        
    themePossition++;
    themePossition=themePossition%themes.length;
    jQuery('html').removeAttr("class");
    if(themes[themePossition]!=''){
        jQuery('html').attr('class',themes[themePossition]);
    }

}
//-------------------------------

//font size
function resizeFont(scale){
    if(scale=="+" && fontSize <= maxfontSize ){
        fontSize+=fontIncrement;        
        jQuery('body').css('font-size',fontSize+"px");
    }
    if(scale=="-" && fontSize >= minfontSize ){
        fontSize-=fontIncrement;        
        jQuery('body').css('font-size',fontSize+"px");
    }
    if(scale=="0"){
        fontSize=18;        
        jQuery('body').css('font-size',"");
    }
}
//-------------------------------
// Allow click on keyboard 'Space' - 'Enter' for elements
function allowKeyClick(event){
    if(event.type === 'click'){
        return true;
    }
    else if(event.type === 'keypress'){
        var code = event.charCode || event.keyCode;
        if((code === 32)|| (code === 13)){
            return true;
        }
    }
    else{
        return false;
    }
}
/*
    jQuery(id).on('click keypress', function(event){
        if(allowKeyClick(event) === true){
            
        }
    });
*/
// ...
//-------------------------------