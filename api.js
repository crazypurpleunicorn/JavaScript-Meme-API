//globalscope variables
let memesArray;
let memeId;

function consoleLogFulfilledMemeRequest(template_id, text0, text1) {
  const params = new URLSearchParams();
  params.append("template_id", template_id);
  params.append("username", "");
  params.append("password", "");
  params.append("text0", text0);
  params.append("text1", text1);

  fetch("https://api.imgflip.com/caption_image", {
    method: "POST",
    body: params,
  })
    .then((res) => res.json())
    .then((data) => () => {
      return data;
    });
}

async function returnArrayOfMemes() {
  const responseObjectFromPromiseValue = await fetch(
    "https://api.imgflip.com/get_memes"
  );
  const objectObjectFromPromise2Value =
    await responseObjectFromPromiseValue.json();
  const memes = objectObjectFromPromise2Value.data.memes;
  return memes;
}
function changeImage(memeId, memeArray) {
  newUrl = memeArray[memeId]["url"];
  document.getElementById("image").src = newUrl;
}

function changeImageBy1(actualmemeId, memeArray) {
  memeId = actualmemeId + 1;
  changeImage(memeId, memeArray);
  
}

async function loadFirstMeme() {
  memesArray = await returnArrayOfMemes();
  let initialId = 0;
  memeId = initialId;
  let firstMemeUrl = memesArray[initialId]["url"];
  document.getElementById("image").src = firstMemeUrl;
}

/*
.then(data =>()=>{return data}) 


}

*/
