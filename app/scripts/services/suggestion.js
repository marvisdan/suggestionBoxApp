'use strict';

app.factory('suggestions', [function(){

  var demoSuggestions = {

    posts: [

      {
        title: 'Free pizza at club meeting',
        upvotes: 15,
        comments: []
      },
      {
        title: 'End all club emails with Laffy Taffy jokes',
        upvotes: 9,
        comments: []
      },
      {
        title: 'Retrofit water fountain with Gatorade',
        upvotes: 7,
        comments: []
      },
      {
        title: 'Sing Bon Jovi\'s "Living on a Prayer" halfway through meetings',
        upvotes: 5,
        comments: []
      },
    ]
  };
  return demoSuggestions;

}]);
