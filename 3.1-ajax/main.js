
document.addEventListener("DOMContentLoaded",function(){
  var githubSectionElement = document.querySelector("[data-js='github']");
  var xhr = new XMLHttpRequest();


  xhr.open("GET", "https://api.github.com/users/jeremy2929");
  xhr.addEventListener("load", function(e){

    var xhrData = this.response;
    var JSONData = JSON.parse(xhrData);
    console.log(JSONData);
    var lectureArticleHTML="<article class='article'>";
    lectureArticleHTML += "<img src='";
    lectureArticleHTML += JSONData.avatar_url;
    lectureArticleHTML += "' alt='avatar image' class='avatar'>";
    lectureArticleHTML += "<div class=tipBox>";
      lectureArticleHTML += "<p class='tipTitle'>";
      lectureArticleHTML += "ProTip";
      lectureArticleHTML += "</p>";
      lectureArticleHTML += "<article1 class=titlesBox>";
        lectureArticleHTML += "<p class='overviewsTitle'>";
        lectureArticleHTML += "Overviews    ";
        lectureArticleHTML += "</p>";
        lectureArticleHTML += "<p class='repositoriesTitle'>";
        lectureArticleHTML += "Repositories   ";
        lectureArticleHTML += JSONData.public_repos;
        lectureArticleHTML += "</p>";
        lectureArticleHTML += "<p class='starsTitle'>";
        lectureArticleHTML += "Stars   ";
        lectureArticleHTML += "</p>";
        lectureArticleHTML += "<p class='followersTitle'>";
        lectureArticleHTML += "Followers   ";
        lectureArticleHTML += JSONData.followers;
        lectureArticleHTML += "</p>";
        lectureArticleHTML += "<p class='followingTitle'>";
        lectureArticleHTML += "Following   ";
        lectureArticleHTML += "</p>";
      lectureArticleHTML += "</artile1>";
    lectureArticleHTML += "</div>";





    lectureArticleHTML += "<p class='login_name'>";
    lectureArticleHTML += JSONData.login;
    lectureArticleHTML += "</p>";
    lectureArticleHTML += JSONData.created_at;
    lectureArticleHTML += "created: ";


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
