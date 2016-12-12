
document.addEventListener("DOMContentLoaded",function(){
  var githubSectionElement = document.querySelector("[data-js='github']");
  var xhr = new XMLHttpRequest();


  xhr.open("GET", "https://api.github.com/users/jeremy2929");
  xhr.addEventListener("load", function(e){

    var xhrData = this.response;
    var JSONData = JSON.parse(xhrData);
    console.log(JSONData);
    var lectureArticleHTML="<article>";
    lectureArticleHTML += "<img src='";
    lectureArticleHTML += JSONData.avatar_url;
    lectureArticleHTML += "' alt='avatar image' class='avatar'>";
    lectureArticleHTML += "created: ";
    lectureArticleHTML += JSONData.created_at;
    lectureArticleHTML += "</p>";

    console.log ("Created", JSONData.created_at);
    console.log ("login", JSONData.login);
    console.log ("number of followers", JSONData.followers);
    console.log ("Type", JSONData.type);
    console.log ("Updated", JSONData.updated_at);
    console.log ("URL", JSONData.url);
    githubSectionElement.innerHTML +=lectureArticleHTML;
  });
  xhr.send();
})
