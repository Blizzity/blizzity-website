"use strict";var _paq=_paq||[];var html=document.documentElement;// homepage rewrite - header
if(document.documentElement.lang=="en"&&html.classList.contains("is-desktop")){_paq.push(["AbTesting::create",{name:"test_22",percentage:15,includedTargets:[{"attribute":"url","inverted":"0","type":"any","value":"/"}],excludedTargets:[],variations:[{name:"original",activate:function activate(event){// usually nothing needs to be done here
}},{name:"alternate_button_en_a",activate:function activate(event){updateButton("Get Brave")}},{name:"alternate_button_en_b",activate:function activate(event){updateButton("Get Brave now")}},{name:"alternate_button_en_c",activate:function activate(event){updateButton("Download now")}},{name:"alternate_button_en_d",activate:function activate(event){updateButton("Download for free")}}],trigger:function trigger(){return true}}])}function updateButton(buttonCopy){// Selects the existing anchor tag
var anchorTag=document.getElementById("home-download-button-hero");// Updates the text of the cta button
anchorTag.textContent=buttonCopy}
