// quick fix for Cloud9 warning:
/* global $ */

// Class 2:
// Complete displayList() to show a single song in the list

// Class 2:
// Complete displayList() to show all the songs in the list
// Complete clearList() funcion

// Class 3:
// Complete the addSong function to take an input from input boxes and push a new song to the playlist array. 

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

// Songs

// DOCUMENT READY FUNCTION
$( document ).ready(function() { 
 	
var mySong = {
	"title":"Lost Boy",
	"artist":"Ruth B",
	"mp3_url":"https://open.spotify.com/track/4h0zU3O9R5xzuTmNO7dNDU",
	"image_url":"http://coverlandia.net/sites/default/files/artworks/music/11401471081031.jpg",
};

var myPlayList = [
	{
		"title":"Mi Gente",
		"artist":"J balvin ,Willy william",
		"mp3_url":"https://open.spotify.com/album/1ZJtkYBzRb7drznu3UYb3k",
		"image_url":"https://is5-ssl.mzstatic.com/image/thumb/Music117/v4/f0/88/9e/f0889e85-8207-2327-3a38-af1df2272ad5/17UM1IM08035.jpg/268x0w.jpg",
	},
	{
		"title":"7",
		"artist":"Lukas Graham",
		"mp3-url":"https://open.spotify.com/track/2udw7RDkldLFIPG9WYdVtT",
		"image_url":"https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/7-Years-by-Lukas-Graham.jpg/220px-7-Years-by-Lukas-Graham.jpg",
	},
	{
		"title":"Sorry",
		"artist":"Justin Bieber",
		"mp3-url":"https://open.spotify.com/track/09CtPGIpYB4BrO8qb1RGsF",
		"image_url":"http://assets-s3.usmagazine.com/uploads/assets/articles/93827-justin-biebers-sorry-choreographer-spills-video-style-secrets-parris-goebel/1445638548_justin-bieber-sorry-dancers-zoom.jpg",
	}

]; 


addSong();






function displayList(){
	
	// $(".songs").append("<p> Title: "+ mySong.title +"</p>");
	// $(".songs").append("<p> Artist: "+ mySong.artist + "</p>");
	// $(".songs").append("<img src=" + mySong.image_url + ">");
	// $(".songs").append("<a href = https://open.spotify.com/track/1rfofaqEpACxVEHIZBJe6W> <p>" + "Link to song" + "</p></a>" );
	// $(".songs").append("<p> : " + myPlayList[0].title + ".</p>");
	// $(".songs").append("<p> Artists: " + myPlayList[0].artist +".</p>");
	// $(".songs").append("<img src=" + myPlayList[0].image_url + ">");
	// $(".song").append("<a href =" + myPlayList[0].mp3_url+" ><p> Link to song</p> </a>");
	
	for( var x = 0; x < myPlayList.length; x = x+1){
		$(".songs").append("<p> Title: " + myPlayList[x].title + "</p><p> By:"+ myPlayList[x].artist+"</p><img src=" + myPlayList[x].image_url + "> <a href =" + myPlayList[x].mp3_url + "<p> Link to song </p> ");

	}

}

function clearList(){
  
  $("#clearSongs").click(function(){
  
  myPlayList.splice(0,myPlayList.length);
  	displayList();
  	});
  
}

clearList();


function addSong(){
// myPlayList.push( { title:"Love Yourself", artist:"Justin Bieber", mp3_url:"https://open.spotify.com/track/50kpGaPAhYJ3sGmk6vplg0", image_url:"https://upload.wikimedia.org/wikipedia/en/0/0b/JustinBieberLoveYourself.png" } );
	$("#addSong").click(function(){
	
		var songName = $("#title").val();
		var artist =$("#artists").val();
		var url = $("#mp3").val();
		var image = $("#image_url").val();	
	

		var newSong = {
	
			"title":songName,
			"artist":artist,
			"mp3_url":url,
			"image_url":image
	
		};

		myPlayList.push(newSong);
		 displayList();

	 });
	 
}

displayList();
});
