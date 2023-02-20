const params = new URLSearchParams();
params.append('template_id', '14371066');
params.append('username', 'SantiagoAmorsGuilln');
params.append('password', 'Zxcvbnm,.-123');
params.append('text0', 'if wise wann be...');
params.append('text1', 'to use the meme API one must learn');

fetch('https://api.imgflip.com/caption_image', {
  method: 'POST',
  body: params
})
.then(res => res.json())
.then(data => console.log(data));