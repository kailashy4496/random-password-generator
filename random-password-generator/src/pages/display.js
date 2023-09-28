import React, { useState } from 'react';
import { MdContentCopy } from 'react-icons/md';
import { GiElectric } from 'react-icons/gi';
import "../style/display.css"

const Display = () => {
    const [password, setPassword] = useState('');
    const [copied, setCopied] = useState(false);

    const createPassword = () => {
        const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]|:;"<>,.?/~';

        const passwordLength = 12;

        let newPassword = '';
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            newPassword += charset[randomIndex];
        }
        setPassword(newPassword);
    };

    const copyPassword = () => {
        alert("COPIED PASSWORD !");
        navigator.clipboard.writeText(password);
        setCopied(true);
    };

    return (
        <>
            <div className='display'>
                <input
                    type='text'
                    name="password"
                    value={password}
                    id='password'
                    placeholder='Password'
                    readOnly
                />
                <MdContentCopy
                    className='copy'
                    disabled={!password}
                    onClick={copyPassword}
                >
                    {copied ? 'Copied' : 'Copy'}
                </MdContentCopy>
            </div>
            <button onClick={createPassword}>
                <GiElectric /> Generate Password
            </button>
        </>
    )
}

export default Display;
