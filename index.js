if ('serviceWorker' in navigator) {
	window.addEventListener('load', function(){
		navigator.serviceWorker.register('./sw.js').then(function(registration){
			console.log('registration success');
		}, function(err){
			console.log('registration Failed ',err);
		})
	})
}else{
	console.log('your browser is not support serviceWorker');
}

getAlbum();

function getAlbum() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var res = JSON.parse(this.responseText);
      document.getElementById('title').innerHTML = res[0].title;
      document.getElementById('name').innerHTML = res[0].artist;
    }
  };
  xhttp.open("GET", "http://rallycoding.herokuapp.com/api/music_albums", true);
  xhttp.send();
}