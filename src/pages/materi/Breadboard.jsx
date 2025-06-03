import React from "react";
import { Box, Typography } from "@mui/material";

export default function Breadboard() {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>Breadboard</Typography>
      <Typography variant="h6" gutterBottom>Sejarah</Typography>
      <Typography paragraph>
        Breadboard modern ditemukan oleh Ronald J. Portugal pada tahun 1971. Sebelumnya, perakitan rangkaian elektronik dilakukan di atas papan roti (bread board) kayu, sehingga nama breadboard tetap digunakan hingga sekarang.
      </Typography>
      <Typography variant="h6" gutterBottom>Fungsi dan Kelebihan</Typography>
      <ul>
        <li>Merangkai sirkuit elektronik tanpa solder</li>
        <li>Mudah digunakan untuk eksperimen dan prototipe</li>
        <li>Dapat digunakan berulang kali</li>
      </ul>
      <Typography variant="h6" gutterBottom>Penggunaan</Typography>
      <Typography paragraph>
        Breadboard digunakan untuk menguji rangkaian sebelum dibuat permanen di PCB. Komponen seperti resistor, LED, IC, dan mikrokontroler dapat dipasang dan dilepas dengan mudah.
      </Typography>
      <Typography variant="h6" gutterBottom>Fakta Unik</Typography>
      <ul>
        <li>Lubang breadboard terhubung secara horizontal dan vertikal sesuai pola tertentu.</li>
        <li>Breadboard tidak cocok untuk arus besar atau tegangan tinggi.</li>
        <li>Nama breadboard berasal dari papan roti sungguhan yang dulu digunakan untuk merakit rangkaian.</li>
      </ul>
    </Box>
  );
}
