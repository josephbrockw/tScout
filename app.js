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
			var i = 0;
			while (i<3) {
				obj = json.Similar.Results[i].Name;
				console.log(obj);
				$('.artist-sec p').append(obj);
				search(obj);
				i++;
			}
			
		});
		// console.log('testing scope: ' + obj);
		// search(queryterm);
	});
	

	//Video Player Work

	

});

