angular.module('app.component2').controller('DialogBController', function ($scope, $http, books) {
  'use strict';
  $scope.selectedRow = null;

  $scope.data = {
    form: {},
    books: [],
    genres: []
  };

  angular.copy(books.data, $scope.data.books);
}).controller('DropdownCtrl', function ($scope, $log) {
  $scope.items = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];

  $scope.status = {
    isopen: false
  };

  $scope.toggled = function(open) {
    $log.log('Dropdown is now: ', open);
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };
});;
