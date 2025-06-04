import React from "react";
import { Box, Typography } from "@mui/material";
import kabelJumperImg from "../../img/jumper_cable.jpeg";

export default function KabelJumper() {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <Box sx={{ p: 2, pb: 8 }}>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        <img
          src={kabelJumperImg}
          alt="Kabel Jumper"
          style={{ maxHeight: 120, objectFit: "contain", borderRadius: 8 }}
        />
      </Box>
      <Typography variant="h4" gutterBottom>Kabel Jumper</Typography>
      <Typography variant="h6" gutterBottom>Sejarah</Typography>
      <Typography paragraph>
        Kabel jumper mulai populer sejak breadboard digunakan secara luas pada tahun 1970-an. Kabel ini memudahkan perakitan dan pengujian rangkaian elektronik tanpa solder.
      </Typography>
      <Typography variant="h6" gutterBottom>Fungsi</Typography>
      <ul>
        <li>Menghubungkan pin pada breadboard</li>
        <li>Menghubungkan modul dengan mikrokontroler</li>
        <li>Membuat rangkaian lebih rapi dan fleksibel</li>
      </ul>
      <Typography variant="h6" gutterBottom>Penggunaan</Typography>
      <Typography paragraph>
        Kabel jumper digunakan untuk menghubungkan Arduino ke sensor, LED, motor, dan komponen lain pada breadboard atau modul eksternal.
      </Typography>
      <Typography variant="h6" gutterBottom>Fakta Unik</Typography>
      <ul>
        <li>Tersedia dalam tipe male-male, male-female, dan female-female.</li>
        <li>Warna kabel jumper tidak mempengaruhi fungsi, hanya untuk memudahkan identifikasi.</li>
        <li>Kabel jumper dapat digunakan berulang kali dan mudah diganti jika rusak.</li>
      </ul>
    </Box>
  );
}
