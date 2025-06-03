import * as React from "react";

export default function AR() {
  return (
    <div style={{ width: "100%", height: "100vh", margin: 0, padding: 0 }}>
      <iframe
        src="https://mywebar.com/p/Project_0_138wrygm2r"
        frameBorder="0"
        scrolling="yes"
        seamless="seamless"
        style={{ display: "block", width: "100%", height: "100vh" }}
        allow="camera;gyroscope;accelerometer;magnetometer;xr-spatial-tracking;microphone;"
        title="AR Experience"
      />
    </div>
  );
}
