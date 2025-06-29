import React from "react";
import { Box, Typography } from "@mui/material";
import resistorImg from "../../img/resistor.png";

export default function Resistor() {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <Box sx={{ p: 2, pb: 8 }}>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        <img
          src={resistorImg}
          alt="Resistor"
          style={{ maxHeight: 120, objectFit: "contain", borderRadius: 8 }}
        />
      </Box>
      <Typography variant="h4" gutterBottom>Resistor</Typography>
      <Typography variant="h6" gutterBottom>Sejarah</Typography>
      <Typography paragraph>
        Resistor telah digunakan sejak awal perkembangan elektronika. Salah satu resistor tertua adalah kawat resistansi yang ditemukan pada abad ke-19. Standarisasi kode warna resistor diperkenalkan pada tahun 1920-an.
      </Typography>
      <Typography variant="h6" gutterBottom>Fungsi</Typography>
      <ul>
        <li>Membatasi arus listrik</li>
        <li>Membagi tegangan</li>
        <li>Melindungi komponen lain dari arus berlebih</li>
      </ul>
      <Typography variant="h6" gutterBottom>Penggunaan</Typography>
      <Typography paragraph>
        Resistor digunakan pada hampir semua rangkaian elektronik, seperti seri dengan LED, pembagi tegangan, filter sinyal, dan rangkaian sensor.
      </Typography>
      <Typography variant="h6" gutterBottom>Fakta Unik</Typography>
      <ul>
        <li>Kode warna resistor memudahkan identifikasi nilai hambatan.</li>
        <li>Resistor karbon adalah jenis yang paling umum dan murah.</li>
        <li>Resistor dapat ditemukan dalam berbagai ukuran dan daya tahan panas.</li>
      </ul>
    </Box>
  );
}
