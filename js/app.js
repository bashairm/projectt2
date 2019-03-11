/*
  Please add all Javascript code to this file.
*/

$(document).ready(function () {

})

$.ajax({
  url: "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=a8ece8b629834402a94fa5eb50c1d2c1",
  type: "get",
  success: function(results){
      // console.log(res.results)
      results.articles.forEach(function (element) {
        $("#Source1").append('<article class="article" data-title="' + element.title+ '" data-content="' + element.content+ '" data-url="' + element.url+ '" onclick="popup(this)">' +
          ' <section class="featuredImage"><img src="'+element.urlToImage+'" alt="" /></section>' +
          ' <section class="articleContent"><a href="#"><h3>' + element.title + '</h3></a><h6>' + element.description + '</h6></section>' +
          '<section class="impressions">526</section>' +
          ' <div class="clearfix"></div></article>')
      });
      $("#popUp").addClass("hidden")
      
  },
  error: function(xhr, status, err){
      console.log("not working")
  }
  
})
$.ajax({
  url: "https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=XAkricwWq1As0YnzdjphLgTqM690ofOS",
  type: "get",
  success: function(result){
      // console.log(res.results)
      result.results.forEach(function (ele) {
        $("#Source2").append('<article id="Source2" class="article" data-title="' + ele.title+ '" data-content="' + ele.abstract+ '" data-url="' + ele.url+ '" onclick="popup1(this)">' +
          ' <section class="featuredImage"><img src="'+ele.thumbnail_standard+'" alt="" /></section>' +
          ' <section class="articleContent"><a href="#"><h3>' + ele.title + '</h3></a><h6>' + ele.abstract + '</h6></section>' +
          '<section class="impressions">526</section>' +
          ' <div class="clearfix"></div></article>')
      });
      $("#popUp").addClass("hidden")
      
  },
  error: function(xhr, status, err){
      console.log("not working")
  }
})

function popup(con){
let title = con.getAttribute("data-title");
let url = con.getAttribute("data-url");
let content = con.getAttribute("data-content");
$("#popUp").removeClass("hidden")
$("#popUp").removeClass("loader")
$("#popUp").append('<div class="container"> '+
'<h1>'+title+'</h1>'+
'<p>'+content+'</p>'+
'<a href="'+url+'" class="popUpAction" target="_blank">Read more from source</a></div>')
}
function popup1(con1){
  let title = con1.getAttribute("data-title");
  let url = con1.getAttribute("data-url");
  let content = con1.getAttribute("data-content");
  $("#popUp").removeClass("hidden")
  $("#popUp").removeClass("loader")
  $("#popUp").append('<div class="container"> '+
  '<h1>'+title+'</h1>'+
  '<p>'+content+'</p>'+
  '<a href="'+url+'" class="popUpAction" target="_blank">Read more from source</a></div>')
  }

function close1(){
  $("#popUp").addClass("hidden")
  $( "div" ).remove( ".container" );

}

function Source1(){
  $("#Source2").hide()
  $("#Source1").show()
}
function Source2(){
  $("#Source1").hide()
  $("#Source2").show()
}