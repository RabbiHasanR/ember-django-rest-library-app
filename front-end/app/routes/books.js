import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({

  model() {
    return hash({
      books: this.store.findAll('book'),
      authors: this.store.findAll('author'),
      libraries: this.store.findAll('library'),
    });
  },

  setupController(controller, model) {
    controller.set('libraries', model.libraries);
    controller.set('books', model.books);
    controller.set('authors', model.authors);
    
    this._super(controller, model);
  }
  
});

