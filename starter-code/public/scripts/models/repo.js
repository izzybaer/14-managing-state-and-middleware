'use strict';
var app = app || {};

(function(module) {
  const repos = {};
  repos.all = [];

  // COMMENTDONE: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // This function is using a $.get to request repos from github, then it puts the repos into an array, repos.all then it just calls the callback function. It gets called inside of aboutController.js, and it doesn't call any other functions besides the callback.
  repos.requestRepos = function(callback) {
    $.get('/github/user/repos')
    .then(data => repos.all = data, err => console.error(err))
    .then(callback);
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(app);
