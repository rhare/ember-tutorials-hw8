import Controller from '@ember/controller';
import { match, not, and, gte } from '@ember/object/computed';

export default Controller.extend({
  headerMessage: 'Contact',
  emailAddress: '',
  message: '',
  isValid: match('emailAddress', /^.+@.+\..+$/),
  isLongEnough: gte("message.length", 5),
  isBothTrue: and('isValid', 'isLongEnough'),
  isDisabled: not('isBothTrue'),
  actions: {
    sendMessage() {
      alert(`Sending message from: ${this.get('emailAddress')} -- Message: ${this.get('message')}`);
      this.set('responseMessage', 'We got your message and we’ll get in touch soon');
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }
});


