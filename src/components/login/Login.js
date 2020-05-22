import React, { Component } from "react";
import { Row, Button } from 'react-bootstrap';
import './login.sass';
import { decryptor } from 'shared/decryptor';
import axios from 'axios';
import AES from 'crypto-js/aes';
import Pkcs7 from 'crypto-js/pad-pkcs7';
import CryptoJSCore from 'crypto-js/core';


class Login extends Component {
    test = (e) => {
        // modify this test data
        let payload = JSON.stringify({
            key:"value"
        })

        e.preventDefault();
        let key = CryptoJSCore.enc.Utf8.parse('mlinc12345678900');
        let iv = CryptoJSCore.enc.Utf8.parse('mlinc12345678900');
        let encrypted = AES.encrypt(CryptoJSCore.enc.Utf8.parse(JSON.stringify(payload)), key,
            {
                keySize: 128 / 8,
                iv: iv,
            });
        // example
        console.log(encrypted);
        axios.post("http://ccv078g234jk.mlhuillier1.com/api/test/decrypt", {ciphertext:encrypted})
            .then(res => {
                console.log(decryptor(res.ciphertext));
            })
            .catch(err => {
                console.log(err);
            })

    }

    render() {
        return (
            <div className="Login">
                <div>Results will be shown in Console</div>
                <Row>
                    <form onSubmit={this.test}>
                        <Button type="submit" bsStyle="primary">Test</Button>
                    </form>
                </Row>
            </div>
        )
    }
}

export default Login;