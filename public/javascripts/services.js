'use strict';

var app = angular.module('debateApp');

app.service('Debate', function($http){

  this.get = function() {
    return $http.get('/poll-data');
  }


});
