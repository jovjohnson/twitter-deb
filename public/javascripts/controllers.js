'use strict';

var app = angular.module('debateApp');

app.controller('mainController', function($scope, $http, Debate){

  Debate.get().then(function(res) {
    $scope.tweets = res.data;
    console.log(res.data);
  }, function(err) {
    console.log(err);
  })


});
