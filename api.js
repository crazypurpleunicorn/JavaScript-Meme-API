//globalscope variables
let memesArray;
let memeId;

function consoleLogFulfilledMemeRequest(template_id, text0, text1) {
  const params = new URLSearchParams();
  params.append("template_id", "61579");
  params.append("username", "");
  params.append("password", "");
  params.append("text0", "text0");
  params.append("text1", "text1");

  fetch("https://api.imgflip.com/caption_image", {
    method: "POST",
    body: params,
  })
    .then((res) => res.json())
    .then((object) => object.data)
    .then((data) => console.log(data.url));
}

async function returnUrlGivenMeme(template_id, text0, text1) {
  const params = new URLSearchParams();
  params.append("template_id", template_id);
  params.append("username", "SantiagoAmorsGuilln");
  params.append("password", "Zxcvbnm,.-123");
  params.append("text0", text0);
  params.append("text1", text1);

  const responseObjectFromPromiseValue = await fetch(
    "https://api.imgflip.com/caption_image",
    {
      method: "POST",
      body: params,
    }
  );
  const objectObjectFromPromise2Value =
    await responseObjectFromPromiseValue.json();
  const data = objectObjectFromPromise2Value.data.url;
  return data;
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

function changeImageBy1(memeArray) {
  if (memeId < memeArray.length - 1) {
    memeId++;
    changeImage(memeId, memeArray);
  }
}
function changeImageByMinus1(memeArray) {
  if (memeId < memeArray.length && memeId > 0) {
    memeId--;
    changeImage(memeId, memeArray);
  }
}

async function loadFirstMeme() {
  memesArray = await returnArrayOfMemes();
  let initialId = 0;
  memeId = initialId;
  let firstMemeUrl = memesArray[initialId]["url"];
  document.getElementById("image").src = firstMemeUrl;
}

function generateRandomIndex(memeArray) {
  scalar = memeArray.length;
  randomNumber = Math.floor(Math.random() * scalar);
  memeId = randomNumber;
  changeImage(memeId, memeArray);
}

function giveMeMemeIdFromActualMeme() {
  let objectiveMeme = memesArray[memeId];
  let objectiveMemeId = objectiveMeme["id"];
  return objectiveMemeId;
}
/*
.then(data =>()=>{return data}) 


}

*/
