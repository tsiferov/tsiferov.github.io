
var fCallback;

$(document).ready(function() {

var responseObj;
var userRequest;


fCallback = function(jqueryObj) {
 
   var gridItems = $('.grid-item img');
   var gridParagraf = $('.grid-item p');

   var gridLinks = $('.fancybox');
    
   for(var i = 0; i < gridItems.length; i++){

    gridLinks[i].setAttribute("href", jqueryObj.hits[i].webformatURL);
     
    gridItems[i].setAttribute("src", jqueryObj.hits[i].webformatURL);
    
    gridParagraf[i].innerHTML = jqueryObj.hits[i].tags.replace(/, /g, " ");
}
    $('.grid-item').imagefill();
  
  console.log(jqueryObj);
  for (var i = 0; i < jqueryObj.hits.length; i++) {
    
    console.log("jqueryObj.hits[i].tags: " + jqueryObj.hits[i].tags);
  }
}

function sendRequest(searchRequest) {

        var category = "fashion, nature, backgrounds, science, education, people, feelings, religion, health, places, animals, industry, food, computer, sports, transportation, travel, buildings, business, music";
        var categoryArrey = category.split(', ');
        var randomCategory = categoryArrey[Math.floor(Math.random()*categoryArrey.length)];
        
        if(searchRequest){
          userRequest = searchRequest;
 	        console.log("Use searchRequest: " + searchRequest);
        } else {
          userRequest = randomCategory;
          console.log("Use randomCategory: " + randomCategory);
        }
		

        $.ajax({
            url: "https://pixabay.com/api/?key=2682999-1883d01edc8260e66f61138e7&q="+userRequest+"&image_type=photo&per_page=7&callback=fCallback&context=?",
            dataType: "jsonp",
        });
}

function getValueSearchInput() {
  
    if(encodeURI($("#searchInput").val()).length > 0){
     var searchRequest = encodeURI($("#searchInput").val());
     console.log("searchRequest: " + searchRequest);
     sendRequest(searchRequest);
   } else{
     console.log("searchInput.val.length < 0");
   };
}

sendRequest();

$("#searchButton").on("click", getValueSearchInput);

$("#searchInput").on("keypress", function (event) {
  if (event.which == 13) {
    event.preventDefault();
    getValueSearchInput();
 }
});

var $container = $(".grid");
$container.imagesLoaded(function () {
	$container.masonry({
		percentPosition: true,
    columnWidth: ".grid-item",
    itemSelector: ".grid-item",
    gutter: '.gutter-sizer'
	});
});

$(".fancybox").fancybox({
      openEffect  : 'elastic',
      closeEffect : 'elastic',

      helpers : {
        title : {
          type : 'inside'
        }
      }
    });

$().UItoTop({ easingType: 'easeOutQuart' });

});
