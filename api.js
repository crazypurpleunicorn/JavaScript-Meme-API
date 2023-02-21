function consoleLogFulfilledMemeRequest(template_id, text0, text1){
const params = new URLSearchParams();
params.append('template_id', template_id);
params.append('username', '');
params.append('password', '');
params.append('text0', text0);
params.append('text1', text1);

fetch('https://api.imgflip.com/caption_image', {
  method: 'POST',
  body: params
})
.then(res => res.json())
.then(data => ()=>{return data});
}

function consoleLogAllMemes(){
  fetch('https://api.imgflip.com/get_memes', {
})
.then(res => res.json())
.then(data =>()=>{return data}) 


}


