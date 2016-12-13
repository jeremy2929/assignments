
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
      lectureArticleHTML += "<button class='editProfile'>";
        lectureArticleHTML += "Edit profile";
      lectureArticleHTML += "</button>";
      lectureArticleHTML += "<p class='tipTitle'>";
        lectureArticleHTML += "ProTip!  Updating your profile with your name, location, and a profile picture helps other GitHub users get to know you.";

      lectureArticleHTML += "</p>";
      lectureArticleHTML += "<article1 class=titlesBox>";
        lectureArticleHTML += "<p class='overviewTitle'>";
        lectureArticleHTML += "Overview    ";
        lectureArticleHTML += "</p>";
        lectureArticleHTML += "<p class='repositoriesTitle'>";
        lectureArticleHTML += "Repositories   ";
          lectureArticleHTML += "<span class='spanTitle'>";
          lectureArticleHTML += JSONData.public_repos;
          lectureArticleHTML += "</span>";
        lectureArticleHTML += "</p>";
        lectureArticleHTML += "<p class='starsTitle'>";
          lectureArticleHTML += "Stars   ";
          lectureArticleHTML += "<span class='spanTitle'>";
          lectureArticleHTML += 0;
          lectureArticleHTML += "</span>";
        lectureArticleHTML += "</p>";
        lectureArticleHTML += "<p class='followersTitle'>";
        lectureArticleHTML += "Followers   ";
          lectureArticleHTML += "<span class='spanTitle'>";
          lectureArticleHTML += JSONData.followers;
          lectureArticleHTML += "</span>";
        lectureArticleHTML += "</p>";
        lectureArticleHTML += "<p class='followingTitle'>";
        lectureArticleHTML += "Following   ";
        lectureArticleHTML += "<span class='spanTitle'>";
        lectureArticleHTML += JSONData.following;
        lectureArticleHTML += "</span>";
        lectureArticleHTML += "</p>";
      lectureArticleHTML += "</artile1>";
    lectureArticleHTML += "</div>";





    lectureArticleHTML += "<p class='login_name'>";
    lectureArticleHTML += JSONData.login;
    lectureArticleHTML += "</p>";

    lectureArticleHTML += "<p class='addBio'>";
    lectureArticleHTML += "Add a Bio";
    lectureArticleHTML += "</p>";
    lectureArticleHTML += "<button class='editProfileLower'>";
    lectureArticleHTML += "Edit profile";
    lectureArticleHTML += "</button>";
    var date  = new Date(JSONData.created_at);
    var holdDate = date.toString()
    var newDate = holdDate.substring(4,10) + ",";
    newDate += holdDate.substring(10,16);
/*    <local-time class="join-date" datetime="2016-11-19 04:11:18 UTC" day="numeric" month="short" year="numeric" title="Nov 18, 2016, 10:11 PM CST">Nov 18, 2016</local-time>
*/
    lectureArticleHTML += "<p class='createdDate'>";
    lectureArticleHTML += "Joined on " + newDate;
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
