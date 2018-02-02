(() => {
  'use strict';

  angular
    .module('app.shotsModule')
    .controller('ShotsController', ShotsController);

  ShotsController.$inject = ['$routeParams', '$rootScope', '$scope', '$filter', '$location'];

  function ShotsController($routeParams, $rootScope, $scope, $filter, $location) {

     $scope.shots = [
      {
        "id": 4173054,
        "title": "Coursera App Redesign",
        "description": "<p>Read the full process for this app redesign case study here: <a href=\"https://medium.com/@vickyye/designing-for-social-elearning-945f1b8333cf\" rel=\"noreferrer\">https://medium.com/@vickyye/designing-for-social-elearning-945f1b8333cf</a></p>",
        "width": 400,
        "height": 300,
        "images": {
          "hidpi": "https://cdn.dribbble.com/users/1623104/screenshots/4173054/dribbble_-white-.png",
          "normal": "https://cdn.dribbble.com/users/1623104/screenshots/4173054/dribbble_-white-_1x.png",
          "teaser": "https://cdn.dribbble.com/users/1623104/screenshots/4173054/dribbble_-white-_teaser.png"
        },
        "views_count": 598,
        "likes_count": 65,
        "comments_count": 4,
        "attachments_count": 0,
        "rebounds_count": 0,
        "buckets_count": 3,
        "created_at": "2018-02-01T07:44:54Z",
        "updated_at": "2018-02-01T07:51:00Z",
        "html_url": "https://dribbble.com/shots/4173054-Coursera-App-Redesign",
        "attachments_url": "https://api.dribbble.com/v1/shots/4173054/attachments",
        "buckets_url": "https://api.dribbble.com/v1/shots/4173054/buckets",
        "comments_url": "https://api.dribbble.com/v1/shots/4173054/comments",
        "likes_url": "https://api.dribbble.com/v1/shots/4173054/likes",
        "projects_url": "https://api.dribbble.com/v1/shots/4173054/projects",
        "rebounds_url": "https://api.dribbble.com/v1/shots/4173054/rebounds",
        "animated": false,
        "tags": [
          "app",
          "mobile",
          "ui",
          "ux"
        ],
        "user": {
          "id": 1623104,
          "name": "Victoria Ye",
          "username": "viymye",
          "html_url": "https://dribbble.com/viymye",
          "avatar_url": "https://cdn.dribbble.com/users/1623104/avatars/normal/b84af0afb56aa929942481ebe53b1509.jpg?1517471596",
          "bio": "",
          "location": "Pittsburgh, PA",
          "links": {
            "web": "https://www.victoriaye.com"
          },
          "buckets_count": 0,
          "comments_received_count": 4,
          "followers_count": 18,
          "followings_count": 5,
          "likes_count": 6,
          "likes_received_count": 65,
          "projects_count": 0,
          "rebounds_received_count": 0,
          "shots_count": 1,
          "teams_count": 0,
          "can_upload_shot": true,
          "type": "Player",
          "pro": false,
          "buckets_url": "https://api.dribbble.com/v1/users/1623104/buckets",
          "followers_url": "https://api.dribbble.com/v1/users/1623104/followers",
          "following_url": "https://api.dribbble.com/v1/users/1623104/following",
          "likes_url": "https://api.dribbble.com/v1/users/1623104/likes",
          "projects_url": "https://api.dribbble.com/v1/users/1623104/projects",
          "shots_url": "https://api.dribbble.com/v1/users/1623104/shots",
          "teams_url": "https://api.dribbble.com/v1/users/1623104/teams",
          "created_at": "2017-02-28T16:17:00Z",
          "updated_at": "2018-02-01T15:53:12Z"
        },
        "team": null
      },
      {
        "id": 4173054,
        "title": "Coursera App Redesign",
        "description": "<p>Read the full process for this app redesign case study here: <a href=\"https://medium.com/@vickyye/designing-for-social-elearning-945f1b8333cf\" rel=\"noreferrer\">https://medium.com/@vickyye/designing-for-social-elearning-945f1b8333cf</a></p>",
        "width": 400,
        "height": 300,
        "images": {
          "hidpi": "https://cdn.dribbble.com/users/1623104/screenshots/4173054/dribbble_-white-.png",
          "normal": "https://cdn.dribbble.com/users/1623104/screenshots/4173054/dribbble_-white-_1x.png",
          "teaser": "https://cdn.dribbble.com/users/1623104/screenshots/4173054/dribbble_-white-_teaser.png"
        },
        "views_count": 598,
        "likes_count": 65,
        "comments_count": 4,
        "attachments_count": 0,
        "rebounds_count": 0,
        "buckets_count": 3,
        "created_at": "2018-02-01T07:44:54Z",
        "updated_at": "2018-02-01T07:51:00Z",
        "html_url": "https://dribbble.com/shots/4173054-Coursera-App-Redesign",
        "attachments_url": "https://api.dribbble.com/v1/shots/4173054/attachments",
        "buckets_url": "https://api.dribbble.com/v1/shots/4173054/buckets",
        "comments_url": "https://api.dribbble.com/v1/shots/4173054/comments",
        "likes_url": "https://api.dribbble.com/v1/shots/4173054/likes",
        "projects_url": "https://api.dribbble.com/v1/shots/4173054/projects",
        "rebounds_url": "https://api.dribbble.com/v1/shots/4173054/rebounds",
        "animated": false,
        "tags": [
          "app",
          "mobile",
          "ui",
          "ux"
        ],
        "user": {
          "id": 1623104,
          "name": "Victoria Ye",
          "username": "viymye",
          "html_url": "https://dribbble.com/viymye",
          "avatar_url": "https://cdn.dribbble.com/users/1623104/avatars/normal/b84af0afb56aa929942481ebe53b1509.jpg?1517471596",
          "bio": "",
          "location": "Pittsburgh, PA",
          "links": {
            "web": "https://www.victoriaye.com"
          },
          "buckets_count": 0,
          "comments_received_count": 4,
          "followers_count": 18,
          "followings_count": 5,
          "likes_count": 6,
          "likes_received_count": 65,
          "projects_count": 0,
          "rebounds_received_count": 0,
          "shots_count": 1,
          "teams_count": 0,
          "can_upload_shot": true,
          "type": "Player",
          "pro": false,
          "buckets_url": "https://api.dribbble.com/v1/users/1623104/buckets",
          "followers_url": "https://api.dribbble.com/v1/users/1623104/followers",
          "following_url": "https://api.dribbble.com/v1/users/1623104/following",
          "likes_url": "https://api.dribbble.com/v1/users/1623104/likes",
          "projects_url": "https://api.dribbble.com/v1/users/1623104/projects",
          "shots_url": "https://api.dribbble.com/v1/users/1623104/shots",
          "teams_url": "https://api.dribbble.com/v1/users/1623104/teams",
          "created_at": "2017-02-28T16:17:00Z",
          "updated_at": "2018-02-01T15:53:12Z"
        },
        "team": null
      },
      {
        "id": 4173054,
        "title": "Coursera App Redesign",
        "description": "<p>Read the full process for this app redesign case study here: <a href=\"https://medium.com/@vickyye/designing-for-social-elearning-945f1b8333cf\" rel=\"noreferrer\">https://medium.com/@vickyye/designing-for-social-elearning-945f1b8333cf</a></p>",
        "width": 400,
        "height": 300,
        "images": {
          "hidpi": "https://cdn.dribbble.com/users/1623104/screenshots/4173054/dribbble_-white-.png",
          "normal": "https://cdn.dribbble.com/users/1623104/screenshots/4173054/dribbble_-white-_1x.png",
          "teaser": "https://cdn.dribbble.com/users/1623104/screenshots/4173054/dribbble_-white-_teaser.png"
        },
        "views_count": 598,
        "likes_count": 65,
        "comments_count": 4,
        "attachments_count": 0,
        "rebounds_count": 0,
        "buckets_count": 3,
        "created_at": "2018-02-01T07:44:54Z",
        "updated_at": "2018-02-01T07:51:00Z",
        "html_url": "https://dribbble.com/shots/4173054-Coursera-App-Redesign",
        "attachments_url": "https://api.dribbble.com/v1/shots/4173054/attachments",
        "buckets_url": "https://api.dribbble.com/v1/shots/4173054/buckets",
        "comments_url": "https://api.dribbble.com/v1/shots/4173054/comments",
        "likes_url": "https://api.dribbble.com/v1/shots/4173054/likes",
        "projects_url": "https://api.dribbble.com/v1/shots/4173054/projects",
        "rebounds_url": "https://api.dribbble.com/v1/shots/4173054/rebounds",
        "animated": false,
        "tags": [
          "app",
          "mobile",
          "ui",
          "ux"
        ],
        "user": {
          "id": 1623104,
          "name": "Victoria Ye",
          "username": "viymye",
          "html_url": "https://dribbble.com/viymye",
          "avatar_url": "https://cdn.dribbble.com/users/1623104/avatars/normal/b84af0afb56aa929942481ebe53b1509.jpg?1517471596",
          "bio": "",
          "location": "Pittsburgh, PA",
          "links": {
            "web": "https://www.victoriaye.com"
          },
          "buckets_count": 0,
          "comments_received_count": 4,
          "followers_count": 18,
          "followings_count": 5,
          "likes_count": 6,
          "likes_received_count": 65,
          "projects_count": 0,
          "rebounds_received_count": 0,
          "shots_count": 1,
          "teams_count": 0,
          "can_upload_shot": true,
          "type": "Player",
          "pro": false,
          "buckets_url": "https://api.dribbble.com/v1/users/1623104/buckets",
          "followers_url": "https://api.dribbble.com/v1/users/1623104/followers",
          "following_url": "https://api.dribbble.com/v1/users/1623104/following",
          "likes_url": "https://api.dribbble.com/v1/users/1623104/likes",
          "projects_url": "https://api.dribbble.com/v1/users/1623104/projects",
          "shots_url": "https://api.dribbble.com/v1/users/1623104/shots",
          "teams_url": "https://api.dribbble.com/v1/users/1623104/teams",
          "created_at": "2017-02-28T16:17:00Z",
          "updated_at": "2018-02-01T15:53:12Z"
        },
        "team": null
      }

    ]
  }

})();