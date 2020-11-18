import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    serialize: function(snapshot/*, options*/)
    {
        let json = this._super(...arguments);
        json.data.type = Ember.String.capitalize(snapshot.modelName)
        json.data.id = snapshot.id
        if(json.data.relationships){
            json.data.attributes = {
                title: snapshot._attributes.title,
                release: new Date(snapshot._attributes.release).toISOString().slice(0,10),
                library: json.data.relationships.library.data.id,
                author: json.data.relationships.author.data.id,
            };

            delete json.data.relationships;
        } else{
        json.data.attributes = snapshot._attributes
        }
        return json
    }
});
