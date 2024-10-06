"use client";

import { useEffect, useRef, useState } from 'react';

import QrScanner from 'qr-scanner';

const QrCodeScanner = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null); // Reference to the video element
  const [scanResult, setScanResult] = useState<string | null>(null); // Scanned result

  useEffect(() => {
    let qrScanner: QrScanner;

    if (videoRef.current) {
      // Initialize the QR scanner with the video element and scan callback
      qrScanner = new QrScanner(
        videoRef.current,
        (result) => {
          console.log('QR Code detected:', result);
          setScanResult(result.data); // Set scanned result
        },
        {
          returnDetailedScanResult: true, // Optional: get more detailed scan results
        }
      );

      qrScanner.start().catch(console.error); // Start scanning

      // Clean up on component unmount
      return () => {
        qrScanner.stop(); // Stop the camera
        qrScanner.destroy(); // Destroy the instance
      };
    }
  }, []);

  return (
    <div className="text-center items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">QR Code Scanner</h1>

      <div className="w-full max-w-sm">
        <video
          ref={videoRef}
          className="border rounded-lg"
          style={{ width: '100%' }}
        ></video>
      </div>

      {scanResult && (
        <p className="mt-4 text-xl flex justify-center w-full text-center p-2">
          <strong>Order Verified!</strong> {scanResult}
        </p>
      )}
      <div>
        <a href='../collections'><button className="bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded mt-4">
          See your Orders
          </button></a>
      </div>

      
    </div>
    
  );
};

export default QrCodeScanner;
