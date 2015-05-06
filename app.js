$(document).ready(function(){
	var queryterm = 'augustana';
	var obj;

// Taste Kid
	function getInfo(callback) {
		$.getJSON('http://www.tastekid.com/api/similar?q=' + queryterm +'&type=music&k=133714-TalentSc-0C3QNV7I&callback=?', callback);
	}
	
	// function getInfo(json) {
	// 	var obj = json.Similar.Results[3].Name;
	// 	console.log(obj);
	// };

	// getInfo(function(json) {
	// 	obj = json.Similar.Results[3].Name;
	// 	console.log(obj);
	// });



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
		queryterm = $('#query').val();
		//search($('#query').val()); // new function which searches every suggestion individually
		console.log('queryterm: ' + queryterm);
		getInfo(function(json) {
			obj = json.Similar.Results[0].Name;
			console.log(obj);
			search(obj);
		});
		// console.log('testing scope: ' + obj);
		// search(queryterm);
	});
	

	

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



// TasteKid API key: 133714-TalentSc-0C3QNV7I
// Soundcloud Client ID: b4fcb23aad971c96104aef3d3abe6ed1
// SC.stream("/tracks/293", function(sound){
//   sound.play();
// });