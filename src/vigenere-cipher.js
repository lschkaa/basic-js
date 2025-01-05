const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    return this.process(message, key, 'encrypt');
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    return this.process(message, key, 'decrypt');
  }

  process(message, key, method) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const messageChar = message[i];
      if (alphabet.includes(messageChar)) {
        const messageIndex = alphabet.indexOf(messageChar);
        const keyChar = key[keyIndex % key.length];
        const keyIndexValue = alphabet.indexOf(keyChar);

        let newIndex;
        if (method === 'encrypt') {
          newIndex = (messageIndex + keyIndexValue) % alphabet.length;
        } else {
          newIndex = (messageIndex - keyIndexValue + alphabet.length) % alphabet.length;
        }

        result += alphabet[newIndex];
        keyIndex++;
      } else {
        result += messageChar;
      }
    }

    return this.direct ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};