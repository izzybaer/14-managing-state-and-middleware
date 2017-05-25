'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // COMMENTDONE: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // (put your response in a comment here)
  // This is an anonymous function that controls what is shown on the about page. We call this function in routes.js on line 5. It calls app.repos.requestRepos which is in repo.js, and passes in app.repoView.index.
  aboutController.index = () => {
    $('#about').show().siblings().hide();
    app.repos.requestRepos(app.repoView.index);
  };

  module.aboutController = aboutController;
})(app);
