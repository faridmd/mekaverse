import React from "react";
import { Box, Typography } from "@mui/material";

export default function Potensiometer() {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>Potensiometer</Typography>
      <Typography variant="h6" gutterBottom>Sejarah</Typography>
      <Typography paragraph>
        Potensiometer ditemukan oleh Johann Christian Poggendorff pada abad ke-19 sebagai alat ukur tegangan. Kini, potensiometer banyak digunakan sebagai pengatur variabel dalam rangkaian elektronik.
      </Typography>
      <Typography variant="h6" gutterBottom>Jenis</Typography>
      <ul>
        <li>Potensiometer putar (rotary)</li>
        <li>Potensiometer geser (slider)</li>
        <li>Trimpot (potensiometer kecil untuk kalibrasi)</li>
      </ul>
      <Typography variant="h6" gutterBottom>Penggunaan</Typography>
      <Typography paragraph>
        Potensiometer digunakan untuk mengatur volume audio, kecerahan lampu, dan sebagai input analog pada mikrokontroler seperti Arduino.
      </Typography>
      <Typography variant="h6" gutterBottom>Fakta Unik</Typography>
      <ul>
        <li>Potensiometer dapat digunakan sebagai sensor posisi sederhana.</li>
        <li>Trimpot biasanya dipasang langsung pada PCB untuk kalibrasi alat elektronik.</li>
        <li>Potensiometer adalah salah satu komponen paling umum di radio dan alat audio.</li>
      </ul>
    </Box>
  );
}
