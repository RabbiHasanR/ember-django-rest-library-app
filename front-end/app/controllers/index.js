import Controller from '@ember/controller';

export default Controller.extend({

  headerMessage: 'Comming Soon',

  actions: {
    saveInvitation(newInvitation) {
      console.log('Invitations request data response:', newInvitation);
      newInvitation.save().then(response => {
        this.set('responseMessage', true);
        this.set('model.email', '');
        console.log('Invitations request data response:', response);
      }).catch(response => console.log('error:',response));
    },
  }
});