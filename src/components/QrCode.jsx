import QRCode from 'qrcode'
import React, { useState } from 'react'

const QrCode = () => {

    const [url, setUrl] = useState('')
    const [qr, setQr] = useState('')

    const GenerateQRCode = () => {
        QRCode.toDataURL(url, {
            width: 200,
            margin: 2,
            color: {
                dark: '#335383FF',
                light: '#EEEEEEFF'
            }
        }, (err, url) => {
            if (err) return console.error(err)
            setQr(url)
        })
    }

    return (
        <div className="App-header">
            <div className="header-description">
                <p className="description">
                    Vous pouvez créer votre Qr Code en collant l'URL dans l'input, et en cliquant sur Generate.<br/>
                    Ensuite vous pouvez télécharger le Qr Code en cliquant sur download
                </p>
            </div>
            <h1>QR Generator</h1>
            <input
                type="text"
                placeholder="e.g. https://google.com"
                value={url}
                onChange={e => setUrl(e.target.value)} />
            <button onClick={GenerateQRCode}>Generate</button>
            {qr && <>
                <img src={qr} alt="qr-code" />
                <a href={qr} download="qrcode.png">Download</a>
            </>}
        </div>
    )
}

export default QrCode

