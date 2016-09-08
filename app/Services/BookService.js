angular.module('app.component1').factory('BookService', ['$http', function ($http) {
  'use strict';

  var books, setId, currentDate, contains;
  books = [{
          "id": 1,
          "version": 0,
          "genre": "it",
          "year": 1999,
          "title": "Code Complete",
          "author": "Steve McConnell"
      },
      {
          "id": 2,
          "version": 0,
          "genre": "it",
          "year": 2001,
          "title": "Python. Wprowadzenie",
          "author": "Mark Lutz, David Ascher"
      },
      {
          "id": 3,
          "version": 0,
          "genre": "it",
          "year": 2013,
          "title": "Sztuka programowania",
          "author": "Donald Knuth"
      },
      {
          "id": 4,
          "version": 0,
          "genre": "it",
          "year": 2003,
          "title": "Pragmatyczny programista",
          "author": "Andy Hunt, Dave Thomas"
      },
      {
          "id": 5,
          "version": 0,
          "genre": "it",
          "year": 2001,
          "title": "Wzorce projektowe",
          "author": "Erich Gamma, Ralph Johnson, Richard Helm, John Vlissides"
      },
      {
          "id": 6,
          "version": 0,
          "genre": "fantasy",
          "year": 2002,
          "title": "Wezmisz czarna kure",
          "author": "Andrzej Pilipiuk"
      },
      {
          "id": 7,
          "version": 0,
          "genre": "fantasy",
          "year": 2003,
          "title": "Kroniki Jakuba Wedrowycza",
          "author": "Andrzej Pilipiuk"
      },
      {
          "id": 8,
          "version": 0,
          "genre": "criminal",
          "year": 2005,
          "title": "The girl with Dragon Tattoo",
          "author": "Stieg Larsson"
      },
      {
          "id": 9,
          "version": 0,
          "genre": "criminal",
          "year": 2006,
          "title": "The Girl Who Played With Fire",
          "author": "Stieg Larsson"
      },
      {
          "id": 10,
          "version": 0,
          "genre": "criminal",
          "year": 2007,
          "title": "The girl who kicked the hornets' nest",
          "author": "Stieg Larsson"
      }];

  Array.prototype.contains = function(object) {
    var i;
    for (i = 0; i <= this.length; i++) {
      if (this[i] === object) {
        return true;
      }
    }
    return false;
  };

  setId = function () {
      return books.length + 1;
  };

  currentDate = new Date();

  return {
    getBooks: function() {
      return books;
    },

    copyBook: function(id) {
      var copiedBook = {
        id: books[id-1].id,
        version: books[id-1].version,
        genre: books[id-1].genre,
        year: books[id-1].year,
        title: books[id-1].title,
        author: books[id-1].author
      };
      return copiedBook;
    },

    addBook: function(version, genre, year, title, author) {
      var bookToAdd = {
        id: setId(),
        version: version,
        genre: genre,
        year: year,
        title: title,
        author: author
      };
      books.push(bookToAdd);
    },

    updateBook(id, version, genre, year, title, author) {
      books[id-1].version = version;
      books[id-1].genre = genre;
      books[id-1].year = year;
      books[id-1].title = title;
      books[id-1].author = author;
    },

    // new book id will be set just before adding to table books
    createBook: function() {
      var newBook = {
        // id: setId(),
        version: 0,
        genre: '',
        year: currentDate.getFullYear(),
        title: '',
        author: ''
      }
      return newBook;
    },

    getGenres: function() {
      var genres, i;
      genres = [];
      for (i = 0; i < books.length; i++) {
        if (!genres.contains(books[i].genre)) {
          genres.push(books[i].genre);
        }
      };
      return genres;
    },

    getBooksByGenre: function(genre) {
      var booksByGenre, i;
      booksByGenre = [];
      if (!genre) {
        return books;
      };
      for (i = 0; i < books.length; i++) {
        if (books[i].genre === genre) {
          booksByGenre.push(books[i]);
        }
      };
      return booksByGenre;
    }
  }
}]);
