import AES from 'crypto-js/aes'
import CryptoJSCore from 'crypto-js/core'
import Pkcs7 from 'crypto-js/pad-pkcs7'

export const decryptor = (ciphertext) => {
    let key = CryptoJSCore.enc.Utf8.parse('mlinc12345678900');
    let iv = CryptoJSCore.enc.Utf8.parse('mlinc12345678900');

    let bytes = AES.decrypt(ciphertext , key, {
        keySize: 128 / 8,
        iv: iv,
    });
    let decrypted = bytes.toString(CryptoJSCore.enc.Utf8);
    return decrypted;
};

