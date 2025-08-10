function selectMusic(music){
    document.body.innerHTML  = ` <audio controls autoplay loop>
  <source src="horse.ogg" type="audio/ogg">
  <source src="${ music }" type="audio/mpeg">
Your browser does not support the audio element.
</audio> `;
}

function soundEffect(){
    
}