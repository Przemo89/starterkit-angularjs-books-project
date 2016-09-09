angular.module('app.component1').controller('DialogAController', function($scope, $modal, BookService) {
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

}).controller('EditBookController', function($scope, $modalInstance, BookService, idSelectedBook){
    'use strict';

    // $scope.selectedBook = selectedBook;
    $scope.maxDate = new Date();
    $scope.data = {
      selectedBook: BookService.copyBook(idSelectedBook)
    };

    $scope.update = function () {
      BookService.updateBook($scope.data.selectedBook.id, $scope.data.selectedBook.version, $scope.data.selectedBook.genre,
        $scope.getSelectedDataYear(), $scope.data.selectedBook.title, $scope.data.selectedBook.author);
      $modalInstance.close('ok');
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

    $scope.dt = new Date($scope.data.selectedBook.year + '-01-01');

    $scope.getSelectedDataYear = function() {
      return $scope.dt.getFullYear();
    };

}).controller('AddBookController', function($scope, $modalInstance, BookService){
  'use strict';

  $scope.books = BookService.getBooks();
  $scope.dt = new Date();
  $scope.currentYear = new Date();

  $scope.data = {
    newBook: BookService.createBook()
  };

  $scope.getSelectedDataYear = function() {
    return $scope.dt.getFullYear();
  };

  $scope.save = function () {
    BookService.addBook($scope.data.newBook.version, $scope.data.newBook.genre, $scope.dt, $scope.data.newBook.title, $scope.data.newBook.author);
    $modalInstance.close('ok');
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

});
