angular.module('app.component2').controller('DialogBController', function ($scope, $http, BookService) {
  'use strict';
  $scope.selectedRow = null;

  $scope.data = {
    form: {},
    books: [],
    genres: [],
    selectedGenre: ''
  };

   $scope.data.books = BookService.getBooks();
   $scope.data.genres = BookService.getGenres();

   $scope.filter = function() {
     $scope.data.books = BookService.getBooksByGenre($scope.data.selectedGenre);
   };

});
