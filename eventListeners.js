//Add event listeners
document.addEventListener("DOMContentLoaded", () => {
  loadFirstMeme();
});

document.getElementById("previous").addEventListener("click", function () {
  let buttonPrevious = document.getElementById("previous");
  buttonPrevious.innerHTML = "hola";
});

document.addEventListener("keyup", (event) => {
  if (event.key === "ArrowDown") {
    changeImageBy1(memeId, memesArray);
  }
});
