//Creare il menu di navigazione compreso di dropdown come da screenshot allegato!
//Per le voci di menu potete fare riferimento al sito attualmente online revolut.com


$(document).ready(function() {

    $("nav li").hover(function() {
      $(this).children(".dropdown-list").toggle();
    });
  
  });
  