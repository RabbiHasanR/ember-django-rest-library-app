import Controller from '@ember/controller';
import { match, not} from '@ember/object/computed';

export default Controller.extend({

  headerMessage: 'Comming Soon',
  // responseMessage: '',
  // emailAddress: '',
  
  // isValid: match('emailAddress', /^.+@.+\..+$/),
  // isDisabled: not('isValid'),

  actions: {

    saveInvitation(newInvitation) {
      newInvitation.save().then(response => {
        this.set('responseMessage', true);
        this.set('model.email', '');
      });
    },
  }
});