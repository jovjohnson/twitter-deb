'use strict';

var app = angular.module('debateApp', ['chart.js']);


app.config(function (ChartJsProvider) {
  console.log('config');
  ChartJsProvider.setOptions({ colors : [ '#80deea', '#80deea', '#80deea', '#80deea', '#80deea', '#80deea', '#80deea'] });
});
