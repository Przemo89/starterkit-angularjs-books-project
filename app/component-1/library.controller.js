angular.module('app.component1').controller('LibraryController', function($scope, $modal, BookService) {
   'use strict';

   $scope.selectedRow = null;

   $scope.data = {
     form: {},
     books: []
   };

   $scope.data.books = BookService.getBooks();

   $scope.setSelectedRow = function (index) {
     $scope.selectedRow = index;
   };

   $scope.edit = function () {
     $modal.open({
      templateUrl: "/component-1/modal-dialog/edit-book-modal-dialog.tpl.html",
      controller: "EditBookController",
      resolve: {
        idSelectedBook: function () {
          return $scope.data.books[$scope.selectedRow].id;
        }
      }
     });
   };

   $scope.add = function () {
     $modal.open({
      templateUrl: "/component-1/modal-dialog/add-book-modal-dialog.tpl.html",
      controller: "AddBookController",
      resolve: {
        books: function () {
          return BookService.getBooks();
        }
      }
     });
   };

});
