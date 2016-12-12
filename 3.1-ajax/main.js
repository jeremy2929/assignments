
document.addEventListener("DOMContentLoaded",function(){
  var githubSectionElement = document.querySelector("[data-js='github']");
  var xhr = new XMLHttpRequest();


  xhr.open("GET", "https://api.github.com/search/repositories?q=fall16-lecture");
  xhr.addEventListener("load", function(e){

    var xhrData = this.response;
    console.log(xhrData);
    var JSONData = JSON.parse(xhrData);
    console.log("JSON=",JSONData);
  });
  xhr.send();
})
