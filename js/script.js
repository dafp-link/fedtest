$(document).ready(function () {
  var jsonURL = "data/list.json";
  $.getJSON(jsonURL, function (json) 
  {
    var imageArray= "";
    $.each(json.cats, function () {
      imageArray += '<div class="col-md-6"><img class="catpic" src= "' + this.image + '"><div class="textwrap"><h2>'+ this.heading +'</h2><p>'+ this.content +'</p></div></div>';
    });
   $('#jsoncontent').append(imageArray);
  });
});