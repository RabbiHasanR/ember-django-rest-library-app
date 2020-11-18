import DS from 'ember-data';
import { empty } from '@ember/object/computed';
import Faker from 'faker';

export default DS.Model.extend({
  name: DS.attr('string'),
  books: DS.hasMany('book', { inverse: 'author', async: true }),

  isNotValid: empty('name'),

  randomize() {
    this.set('name', Faker.name.findName());
    return this;
  }
  
});
