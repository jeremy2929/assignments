/* This script sends request to API of GitHub for user Jalien2929 home URL data & displays
   6 different values: User icon, User name, Number of repositories, number of
   Followers, number of Followings, and the Joined on Date. */
/* Wait for document to load before running script */
document.addEventListener("DOMContentLoaded",function(){
  /* Declaring and assigning variable linked to HTML   */
  var githubSectionElement = document.querySelector("[data-js='github']");
  /* Create instance of XHR object   */
  var xhr = new XMLHttpRequest();
  /* Open a specific URL   */
  xhr.open("GET", "https://api.github.com/users/jeremy2929");
  /* Listen for the Load event. The argument used is e because event is reserved keyword  */
  xhr.addEventListener("load", function(e){
    /* 'this' is equal to XHR event. xhrData will store the string of data we need */
    var xhrData = this.response;
    /* Converting the data string into JSON */
    var JSONData = JSON.parse(xhrData);
    /* Declaring variable gitHubArticleHTML and assigning first value. We will build our
       HTML by concatenating to gitHubArticleHTML        */
    var gitHubArticleHTML="<article class='article'>";
    gitHubArticleHTML += "<img src='";
    /* Including value of User image from JSON data    */
    gitHubArticleHTML += JSONData.avatar_url;
    gitHubArticleHTML += "' alt='avatar image' class='avatar'>";
    gitHubArticleHTML += "<div class=tipBox>";
    gitHubArticleHTML += "<button class='editProfile'>";
    gitHubArticleHTML += "Edit profile";
    gitHubArticleHTML += "</button>";
    gitHubArticleHTML += "<p class='tipTitle'>";
    gitHubArticleHTML += "ProTip!  Updating your profile with your name, location, and a profile picture helps other GitHub users get to know you.";
    gitHubArticleHTML += "</p>";
    gitHubArticleHTML += "<article1 class=titlesBox>";
    gitHubArticleHTML += "<p class='overviewTitle'>";
    gitHubArticleHTML += "Overview    ";
    gitHubArticleHTML += "</p>";
    gitHubArticleHTML += "<p class='repositoriesTitle'>";
    gitHubArticleHTML += "Repositories   ";
    gitHubArticleHTML += "<span class='spanTitle'>";
    /* Including value of number of repositories from JSON data    */
    gitHubArticleHTML += JSONData.public_repos;
    gitHubArticleHTML += "</span>";
    gitHubArticleHTML += "</p>";
    gitHubArticleHTML += "<p class='starsTitle'>";
    gitHubArticleHTML += "Stars   ";
    gitHubArticleHTML += "<span class='spanTitle'>";
    gitHubArticleHTML += 0;
    gitHubArticleHTML += "</span>";
    gitHubArticleHTML += "</p>";
    gitHubArticleHTML += "<p class='followersTitle'>";
    gitHubArticleHTML += "Followers   ";
    gitHubArticleHTML += "<span class='spanTitle'>";
    /* Including value of number of Followers from JSON data    */
    gitHubArticleHTML += JSONData.followers;
    gitHubArticleHTML += "</span>";
    gitHubArticleHTML += "</p>";
    gitHubArticleHTML += "<p class='followingTitle'>";
    gitHubArticleHTML += "Following   ";
    gitHubArticleHTML += "<span class='spanTitle'>";
    /* Including value of number Following from JSON data    */
    gitHubArticleHTML += JSONData.following;
    gitHubArticleHTML += "</span>";
    gitHubArticleHTML += "</p>";
    gitHubArticleHTML += "</artile1>";
    gitHubArticleHTML += "</div>";
    gitHubArticleHTML += "<p class='loginName'>";
    /* Including value of Username from JSON data    */
    gitHubArticleHTML += JSONData.login;
    gitHubArticleHTML += "</p>";
    gitHubArticleHTML += "<p class='addBio'>";
    gitHubArticleHTML += "Add a Bio";
    gitHubArticleHTML += "</p>";
    gitHubArticleHTML += "<button class='editProfileLower'>";
    gitHubArticleHTML += "Edit profile";
    gitHubArticleHTML += "</button>";
    /* Including value Joined On Date from JSON data    */
    var date  = new Date(JSONData.created_at);
    /* Converting date into a usable format */
    var holdDate = date.toString()
    /* Grabbing some of date so can add comma after   */
    var newDate = holdDate.substring(4,10) + ",";
    /* Adding on rest of date info after comma        */
    newDate += holdDate.substring(10,16);
    gitHubArticleHTML += "<p class='createdDate'>";
    gitHubArticleHTML += "> Joined on " + newDate;
    gitHubArticleHTML += "</p>";
    /* Inserting our HTML string into the HTML   */
    githubSectionElement.innerHTML +=gitHubArticleHTML;
  });
  /* Sending request to API of GitHub     */
  xhr.send();
})
