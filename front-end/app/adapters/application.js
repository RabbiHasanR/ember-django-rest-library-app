import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  
  host: 'http://127.0.0.1:8000',

  // headers: {
  //   'CONTENT-TYPE': 'application/vnd.api+json',
  //   'ACCEPT': 'application/vnd.api+json',
  // },

  namespace: 'api/v1',

  buildURL: function(type, id, record) {
    //call the default buildURL and then append a slash
    // var type = Ember.String.singularize(type);
    return this._super(type, id, record) + '/';
  }
});
