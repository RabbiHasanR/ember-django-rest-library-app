import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    serialize: function(snapshot/*, options*/)
    {
        // var japipayload = {
        //     type: Ember.String.capitalize(snapshot.modelName),
        //     id: snapshot.id,
        //     attributes: snapshot._attributes,
        // };
        // var data = snapshot.data
        // return japipayload;
        let json = this._super(...arguments);
        json.data.type = Ember.String.capitalize(snapshot.modelName)
        json.data.id = snapshot.id
        json.data.attributes = snapshot._attributes
        return json
    }
});
