import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        sendMessage(newContactMessage) {
            newContactMessage.save().then(response => {
                this.set('responseMessage', true);
                this.set('model.email', '');
                this.set('model.message', '');
            });
        },
    }

});
