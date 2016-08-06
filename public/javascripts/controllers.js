'use strict';

var app = angular.module('debateApp');

app.controller('mainController', function($scope, $http, Debate){
  $(document).ready(function() {
      $('select').material_select();
    });

  Debate.get().then(function(res) {
    console.log(res.data);
    $scope.response = res.data;
    $scope.winner;

    $scope.data = [res.data[0].value, res.data[1].value, res.data[2].value];
    $scope.labels = [res.data[0].choice, res.data[1].choice, res.data[2].choice];
    $scope.colors = ['#80deea', '#f94a40', '#f9e504', '#F1C40F'];

    $scope.clintonNum = res.data[0].value;
    $scope.trumpNum = res.data[1].value;
    $scope.johnsonNum = res.data[2].value;

    if(res.data[0].value > res.data[1].value) {
      $scope.winner = res.data[0].first_name.toUpperCase() + ' ' + res.data[0].choice.toUpperCase();
    } else {
      $scope.winner = res.data[1].first_name.toUpperCase() + ' ' + res.data[1].choice.toUpperCase();
    }

    console.log('winner:',$scope.winner)






  }, function(err) {
    console.log(err);
  })


});
