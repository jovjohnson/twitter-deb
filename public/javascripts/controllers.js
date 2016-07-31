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
  }, function(err) {
    console.log(err);
  })


});
