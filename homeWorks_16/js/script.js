/**
 * Created by TsiferovSerhii on 08.04.2016.
 */

var responseObj;

function fCallback(jqueryObj, data){

    responseObj = data.results;

    var template = _.template($('#pattern').html());
    var content = template(responseObj);

    if(responseObj.length === 0 ){
        content =  '<div class="responseBox"><p class="content">На Ваш запит не знайдено жодного документа.</p></div>'
    }

    $('main').empty().append(content);
}

$(function(){

  $("form").on("submit",function(){

      event.preventDefault();
      var userRequest = $("#searchInput").val();

      $.ajax({
          url: "http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=large&q="+userRequest+"&callback=fCallback&context=?",
          dataType: "jsonp",
      });

  });
});