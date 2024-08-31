import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const QrCodeGenerator = () => {
  const [data, setData] = useState('');
  const [size, setSize] = useState(128);
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  const handleGenerate = () => {
    if (data) {
      const qrCanvas = document.getElementById('qrCode');
      setQrCodeUrl(qrCanvas.toDataURL());
    }
  };

  const handleDownload = () => {
    if (qrCodeUrl) {
      const link = document.createElement('a');
      link.href = qrCodeUrl;
      link.download = 'qr-code.png';
      link.click();
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>QR Code Generator</h1>
      <input
        type="text"
        placeholder="Enter data"
        value={data}
        onChange={(e) => setData(e.target.value)}
        style={{ margin: '10px', padding: '10px' }}
      />
      <input
        type="number"
        placeholder="Enter size"
        value={size}
        onChange={(e) => setSize(e.target.value)}
        style={{ margin: '10px', padding: '10px' }}
      />
      <br />
      <button onClick={handleGenerate} style={{ margin: '10px', padding: '10px' }}>Generate QR Code</button>
      <button onClick={handleDownload} style={{ margin: '10px', padding: '10px' }}>Download QR Code</button>
      <div style={{ marginTop: '20px' }}>
        {data && (
          <QRCodeCanvas
            id="qrCode"
            value={data}
            size={parseInt(size)}
            style={{ border: '1px solid black' }}
          />
        )}
      </div>
    </div>
  );
};

export default QrCodeGenerator;
