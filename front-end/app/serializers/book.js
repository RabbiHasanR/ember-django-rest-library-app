import DS from 'ember-data';
// import { isNone } from '@ember/utils'

export default DS.JSONAPISerializer.extend({
    serialize: function(snapshot/*, options*/)
    {
        let json = this._super(...arguments);
        console.log('before serializers belongs to:', json);
        json.data.type = Ember.String.capitalize(snapshot.modelName);
        json.data.id = snapshot.id;
        json.data.attributes = snapshot._attributes;
        json.data.relationships.library.data.type = Ember.String.capitalize('library')
        json.data.relationships.library.data.id = json.data.relationships.library.data.id
        json.data.relationships.author.data.type = Ember.String.capitalize('author')
        json.data.relationships.author.data.id = json.data.relationships.author.data.id
        console.log('after serializers belongs to:', json);
        return json
    },
    // serializeBelongsTo:  function(snapshot, json, relationship) 
    // {
    //     console.log('before serializers belongs to:', json);
    //     console.log('befor relationship:',relationship)
    //     json.type = Ember.String.capitalize(relationship._type);
    //     json.id = relationship.key;
    //     console.log('after serializers belongs to:', json);
    //     return json;
    // }
});


// import { isNone } from '@ember/utils';

// export default DS.JSONSerializer.extend({
//   serializeBelongsTo(snapshot, json, relationship) {
//     var key = relationship.key;
//     var belongsTo = snapshot.belongsTo(key);

    