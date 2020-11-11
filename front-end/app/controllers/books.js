import Controller from '@ember/controller';

export default Controller.extend({

  actions: {
    editBook(book) {
      book.set('isEditing', true);
    },

    cancelBookEdit(book) {
      book.set('isEditing', false);
      book.rollbackAttributes();
    },

    saveBook(book) {
      if (book.isValid) {
        book.set('isEditing', false);
        book.save();
      }
    },

    editAuthor(book) {
      //console.log('author click');
      book.set('isAuthorEditing',true);
    },

    cancelAuthorEdit(book) {
      book.set('isAuthorEditing', false);
      book.rollbackAttributes();
    },

    saveAuthor(author, book) {
      book.set('author', author);
      book.save();
      book.set('isAuthorEditing', false);
    },

    editLibrary(book) {
      book.set('isLibraryEditing', true);
    },

    cancelLibraryEdit(book) {
      book.set('isLibraryEditing', false);
      book.rollbackAttributes();
    },

    saveLibrary(library, book) {
      book.set('library', library);
      book.save();
      book.set('isLibraryEditing', false);
    }
  }

});