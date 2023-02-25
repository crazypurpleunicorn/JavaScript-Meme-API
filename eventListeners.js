//Add event listeners
document.addEventListener("DOMContentLoaded", () => {
  loadFirstMeme();
});

document.getElementById("previous").addEventListener('click',()=>{
    changeImageByMinus1(memesArray)
  });


document.getElementById("next").addEventListener('click',()=>{
    changeImageBy1(memesArray)

});

document.getElementById("random").addEventListener('click',()=>{
  generateRandomIndex(memesArray)
  
})

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    changeImageBy1(memesArray);
  }
  if(event.key==='ArrowLeft'){
    changeImageByMinus1(memesArray)
  }
});

document.getElementById('submit-btn').addEventListener('click',async()=>{
  let text0=document.getElementById('text0').value;
  let text1=document.getElementById('text1').value;
  let id=giveMeMemeIdFromActualMeme();
  let url= await returnUrlGivenMeme(id,text0,text1)
  document.getElementById('imageresult').src=url
})

