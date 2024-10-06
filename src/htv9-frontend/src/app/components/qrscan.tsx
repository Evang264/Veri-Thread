"use client";

//importing idlFactory
import { useEffect, useRef, useState } from "react";
import { Actor, HttpAgent } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { idlFactory } from "../../../../declarations/htv9_frontend/htv9_frontend.did.js";

import QrScanner from "qr-scanner";

const agent = new HttpAgent();
const canisterId = "7tkxk-iyaaa-aaaab-qacwa-cai";
const blockchainActor = Actor.createActor(idlFactory, {
  agent,
  canisterId: Principal.fromText(canisterId),
});

const addDataToBlockchain = async (
  serial_code: number,
  location: string,
  prev_location: string,
  description: string
) => {
  await blockchainActor.add(serial_code, location, prev_location, description);
};


//QR Code Scanner
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
          console.log("QR Code detected:", result);
          if (!isNaN(Number(result.data))) {
            addDataToBlockchain(
              Number(result.data),
              "location",
              "prev_location",
              "description"
            );
          }
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
          style={{ width: "100%" }}
        ></video>
      </div>

      {scanResult && (
        <p className="mt-4 text-xl">
          <strong>Order Verified!</strong> {scanResult}
        </p>
      )}
      <div>
        <button className="bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded mt-4">
          Back to Orders
        </button>
      </div>
    </div>
  );
};

export default QrCodeScanner;
