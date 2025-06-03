import React from "react";
import { Box, Typography } from "@mui/material";

export default function Sensor() {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>Sensor</Typography>
      <Typography variant="h6" gutterBottom>Sejarah</Typography>
      <Typography paragraph>
        Sensor elektronik mulai berkembang pesat sejak abad ke-20 seiring kemajuan teknologi semikonduktor. Sensor modern kini sangat beragam dan digunakan di hampir semua bidang teknologi.
      </Typography>
      <Typography variant="h6" gutterBottom>Jenis Sensor</Typography>
      <ul>
        <li>Sensor suhu (misal: LM35, DHT11)</li>
        <li>Sensor cahaya (LDR)</li>
        <li>Sensor jarak (Ultrasonik HC-SR04)</li>
        <li>Sensor kelembaban, tekanan, gas, dsb</li>
      </ul>
      <Typography variant="h6" gutterBottom>Penggunaan</Typography>
      <Typography paragraph>
        Sensor digunakan dalam otomasi rumah, robotika, alat ukur lingkungan, kendaraan, dan perangkat IoT.
      </Typography>
      <Typography variant="h6" gutterBottom>Fakta Unik</Typography>
      <ul>
        <li>Sensor memungkinkan perangkat elektronik "merasakan" lingkungannya.</li>
        <li>Sensor modern dapat mendeteksi perubahan yang sangat kecil, bahkan pada tingkat molekul.</li>
        <li>Sensor adalah kunci utama dalam pengembangan teknologi smart dan otomatisasi.</li>
      </ul>
    </Box>
  );
}
