import React from "react";
import { Box, Typography } from "@mui/material";
import ledImg from "../../img/led.jpg";

export default function Led() {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <Box sx={{ p: 2, pb: 8 }}>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        <img
          src={ledImg}
          alt="LED"
          style={{ maxHeight: 120, objectFit: "contain", borderRadius: 8 }}
        />
      </Box>
      <Typography variant="h4" gutterBottom>LED (Light Emitting Diode)</Typography>
      <Typography variant="h6" gutterBottom>Sejarah</Typography>
      <Typography paragraph>
        LED pertama kali ditemukan oleh Nick Holonyak Jr. pada tahun 1962 saat bekerja di General Electric. LED awalnya hanya tersedia dalam warna merah, namun kini tersedia dalam berbagai warna dan digunakan secara luas.
      </Typography>
      <Typography variant="h6" gutterBottom>Karakteristik</Typography>
      <ul>
        <li>Efisiensi tinggi dan hemat energi</li>
        <li>Memiliki polaritas (anoda dan katoda)</li>
        <li>Tersedia dalam berbagai ukuran dan warna</li>
      </ul>
      <Typography variant="h6" gutterBottom>Penggunaan</Typography>
      <Typography paragraph>
        LED digunakan sebagai indikator, penerangan, display digital, lampu lalu lintas, dan dekorasi.
      </Typography>
      <Typography variant="h6" gutterBottom>Fakta Unik</Typography>
      <ul>
        <li>LED putih baru dikembangkan pada tahun 1990-an.</li>
        <li>LED dapat bertahan hingga 50.000 jam penggunaan.</li>
        <li>LED tidak menghasilkan panas sebanyak lampu pijar.</li>
      </ul>
    </Box>
  );
}
