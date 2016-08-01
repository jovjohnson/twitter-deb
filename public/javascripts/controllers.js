'use strict';

var app = angular.module('debateApp');

app.controller('mainController', function($scope, $http, Debate){
//   var ctx = document.getElementById("myChart");
//   var myLineChart = Chart.Line(ctx, {
//     data: data,
//     options: options
// });




  Debate.get().then(function(res) {
    console.log(res.data);
    $scope.data = [res.data[0].value, res.data[1].value, res.data[2].value];
    $scope.labels = [res.data[0].choice, res.data[1].choice, res.data[2].choice];
    $scope.colors = ['#72C02C', '#3498DB', '#717984', '#F1C40F'];




  }, function(err) {
    console.log(err);
  })


});
