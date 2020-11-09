import Route from '@ember/routing/route';

export default Route.extend({

    model() {
        return this.store.createRecord('invitation');
    },

    actions: {
        willTransition() {
            let model = this.controller.get('model');
        
            if (model.isNew) {
              model.destroyRecord();
            }
        
            this.controller.set('responseMessage', false);
          }
    }

});