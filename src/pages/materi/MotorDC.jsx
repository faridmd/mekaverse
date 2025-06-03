import React from "react";
import { Box, Typography } from "@mui/material";

export default function MotorDC() {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>Motor DC</Typography>
      <Typography variant="h6" gutterBottom>Sejarah</Typography>
      <Typography paragraph>
        Motor DC pertama kali ditemukan oleh Thomas Davenport pada tahun 1834. Motor DC menjadi sangat populer karena kemudahan pengendalian kecepatan dan arah putarnya.
      </Typography>
      <Typography variant="h6" gutterBottom>Karakteristik</Typography>
      <ul>
        <li>Mengubah energi listrik menjadi energi gerak putar</li>
        <li>Mudah dikendalikan kecepatan dan arah putarnya</li>
        <li>Memerlukan driver motor untuk dikendalikan mikrokontroler</li>
      </ul>
      <Typography variant="h6" gutterBottom>Penggunaan</Typography>
      <Typography paragraph>
        Motor DC digunakan pada robot, mainan elektronik, conveyor, kipas, dan alat otomatisasi sederhana.
      </Typography>
      <Typography variant="h6" gutterBottom>Fakta Unik</Typography>
      <ul>
        <li>Motor DC kecil dapat ditemukan di mainan anak-anak dan alat elektronik rumah tangga.</li>
        <li>Motor DC dapat berputar dua arah dengan membalik polaritas tegangan.</li>
        <li>Motor DC sering digunakan dalam eksperimen kontrol kecepatan dan robotika.</li>
      </ul>
    </Box>
  );
}
