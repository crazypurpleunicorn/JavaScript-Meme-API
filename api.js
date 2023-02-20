const params = new URLSearchParams();
params.append('template_id', '14371066');
params.append('username', '');
params.append('password', '');
params.append('text0', 'Hrrmmm. Wise if you want to become...');
params.append('text1', 'ulearn to use the meme api you must.');

fetch('https://api.imgflip.com/caption_image', {
  method: 'POST',
  body: params
})
.then(res => res.json())
.then(data => console.log(data));