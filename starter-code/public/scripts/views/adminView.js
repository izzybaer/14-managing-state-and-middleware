'use strict';
var app = app || {};

(function(module) {
  const adminView = {
    initAdminPage : () => {
      let template = Handlebars.compile($('#author-template').text());
        // COMMENTDONE: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
        // This function was created inside of article.js and here it is being invoked. After this function is invoked forEach is used to get the statistics for the authors, and total words in all articles, and the number of words written sorted by author. No other functions are being invoked by app.Article.numWordsByAuthor.
      app.Article.numWordsByAuthor().forEach(stat => $('.author-stats').append(template(stat)));
      $('#blog-stats .articles').text(app.Article.all.length);
      $('#blog-stats .words').text(app.Article.numWordsAll());
    }
  };

  app.Article.fetchAll(adminView.initAdminPage);
  module.adminView = adminView;
})(app);
