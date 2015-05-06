$(document).ready(function(){
	//var queryterm
// Taste Kid
	function getInfo(callback) {
		$.getJSON('http://www.tastekid.com/api/similar?q=augustana&k=133714-TalentSc-0C3QNV7I&callback=?', callback);
	}
	
	getInfo(function(json) {
		var obj = json.Similar.Results[3].Name;
		console.log(obj);
	});

// Sound Cloud
	// function playSound(genre) {
	// 	SC.get('/tracks', {
	// 		genres: genre,
	// 	}, function(tracks) {
	// 		SC.oEmbed(tracks[0].uri, { auto_play: true}, document.getElementByID('one'));
	// 	}
	// 	})
	// }
// --------------------- This is initializing well but I don't know how to call information ------------------------------------------------------------------------------------------------
	// window.onload = function() {
	// 	SC.initialize({
	// 		client_id: 'a700e44fe62f56e3f24d08da98104f08'
	// 	});

	// 	// SC.get()

	
		
	// 	SC.get("/groups/55517/tracks", {limit: 1}, function(tracks){
	// 	  alert("Latest track: " + tracks[0].title);
	// 	});
	// }




// ----------------------- YouTube ----------------------
	function search(query) {
		$.getJSON("https://www.googleapis.com/youtube/v3/search",
		{
			"part": "snippet",
			"type": "video",
			"key": "AIzaSyBcN2ThZ4YKobSTSIUB9a07Api-WGa_4B0",
			"q": query
		},
		function(data) {
			myData = data.Search;
			display(data.items);
			console.log(data.items);
		});
	}

		
	function display(videos) {
		$.each(videos, function(index, video) {
			console.log(video.snippet.thumbnails.medium.url);
			$('#search-list').append('<li><a href="http://youtube.com/watch?v='+video.id.videoId+'" target="_blank"><img src="' + video.snippet.thumbnails.medium.url + '" /></a><br><p>' + video.snippet.title + '</p></li>');
		});
	}

		
	$('#search-form').submit(function(event) {
		event.preventDefault();
		$('#search-list').empty();
		search($('#query').val());
		console.log('query: ' + $('#query').val());
	})
	

	

});


// TasteKid API key: 133714-TalentSc-0C3QNV7I
// Soundcloud Client ID: b4fcb23aad971c96104aef3d3abe6ed1
// SC.stream("/tracks/293", function(sound){
//   sound.play();
// });