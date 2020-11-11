import Controller from '@ember/controller';

export default Controller.extend({

  headerMessage: 'Comming Soon',

  actions: {
    saveInvitation(newInvitation) {
      newInvitation.save().then(response => {
        this.set('responseMessage', true);
        this.set('model.email', '');
      });
    },
  }
});