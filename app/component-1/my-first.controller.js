angular.module('app.component1').controller('MyFirstController', function($scope, $http, $modal, books) {
   'use strict';

   $scope.selectedRow = null;

   $scope.data = {
     form: {},
     books: []
   };

   angular.copy(books.data, $scope.data.books);

   $scope.setSelectedRow = function (index) {
     $scope.selectedRow = index;
   };

   $scope.edit = function () {
     $modal.open({
      templateUrl: "/component-1/modal-dialog/edit-book-modal-dialog.tpl.html",
      controller: "EditBookController",
      resolve: {
        selectedBook: function () {
          return $scope.data.books[$scope.selectedRow];
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
          return $scope.data.books;
        }
      }
     });
   };

}).controller('EditBookController', function($scope, $modalInstance, selectedBook){
    'use strict';

    $scope.selectedBook = selectedBook;
    $scope.data = {
      selectedBook: {
        id: selectedBook.id,
        version: selectedBook.version,
        genre: selectedBook.genre,
        year: selectedBook.year,
        title: selectedBook.title,
        author: selectedBook.author
      }
    };

    $scope.update = function (book) {
      angular.copy($scope.data.selectedBook, selectedBook)
      $modalInstance.close('ok');
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

    $scope.dt = new Date($scope.data.selectedBook.year + '-01-01');

    $scope.maxDate = new Date();

    $scope.setYear = function () {
      $scope.data.selectedBook.year = $scope.dt.getFullYear();
    };

}).controller('AddBookController', function($scope, $modalInstance, books){
  'use strict';

  $scope.books = books;
  $scope.dt = new Date();

  $scope.setId = function () {
    return $scope.books.length + 1;
  };
  $scope.data = {
    newBook: {
      id: $scope.setId(),
      version: 0,
      genre: '',
      year: $scope.dt.getFullYear(),
      title: '',
      author: ''
    }
  };

  $scope.save = function () {
    $scope.books.push($scope.data.newBook);
    $modalInstance.close('ok');
  };

  $scope.setYear = function () {
    $scope.data.newBook.year = $scope.dt.getFullYear();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

});
