describe('FilterBookController initialization', function () {
  'use strict'

  var $scope, bookServiceMock, filterBookController, books;

  books = [{
          "id": 1,
          "version": 0,
          "genre": "it",
          "year": 1999,
          "title": "Code Complete",
          "author": "Steve McConnell"
      }];

  bookServiceMock = {
    getBooks: function() {
      return books;
    },
    getGenres: function() {
      var genres = ['it'];
      return genres;
    },
    getBooksByGenre: function () {
      return books;
    }
  };

  beforeEach(function() {
    module('app.component2');
    module(function($provide) {
      $provide.value('BookService', bookServiceMock);
    });
  });

  beforeEach(inject(function($controller, $rootScope) {
    $scope = $rootScope.$new();
    filterBookController = $controller('FilterBookController', {$scope: $scope, BookService: bookServiceMock});
  }));

  describe('FilterBookController tests', function() {

    it('should instantiate the controller properly', function () {
      // given when then
      expect(filterBookController).not.toBeUndefined();
     });

    // it('should close modal with status "ok"', function(){
    //      // given
    //     var properResponseStatus = 'ok';
    //
    //      // when
    //      $scope.save();
    //
    //      // then
    //      expect(modalInstanceMock.close).toHaveBeenCalledWith(properResponseStatus);
    // });
    //
    // it('should dismiss modal with status "cancel"', function(){
    //      // given
    //     var properResponseStatus = 'cancel';
    //
    //      // when
    //      $scope.cancel();
    //
    //      // then
    //      expect(modalInstanceMock.dismiss).toHaveBeenCalledWith(properResponseStatus);
    // });
  });
});
