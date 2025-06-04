import React from "react";
import { Box, Typography } from "@mui/material";
import arduinoImg from "../../img/arduino.jpg";

export default function Arduino() {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Box sx={{ p: 2, pb: 8 }}>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        <img
          src={arduinoImg}
          alt="Arduino"
          style={{ maxHeight: 120, objectFit: "contain", borderRadius: 8 }}
        />
      </Box>
      <Typography variant="h4" gutterBottom>
        Arduino
      </Typography>
      <Typography variant="h6" gutterBottom>
        Sejarah
      </Typography>
      <Typography paragraph>
        Arduino dikembangkan pada tahun 2005 di Ivrea, Italia, oleh Massimo Banzi
        dan David Cuartielles bersama timnya. Tujuannya adalah menyediakan
        platform mikrokontroler yang murah dan mudah digunakan untuk pelajar,
        seniman, dan hobiis. Nama "Arduino" diambil dari sebuah bar di Ivrea
        yang sering menjadi tempat berkumpul para pendirinya.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Fitur Utama
      </Typography>
      <ul>
        <li>Open-source hardware dan software</li>
        <li>Mudah diprogram menggunakan Arduino IDE (berbasis C/C++)</li>
        <li>Banyak pilihan board (Uno, Mega, Nano, dsb)</li>
        <li>Kompatibel dengan berbagai sensor dan modul</li>
      </ul>
      <Typography variant="h6" gutterBottom>
        Penggunaan
      </Typography>
      <Typography paragraph>
        Arduino digunakan dalam pendidikan, prototipe produk, robotika, otomasi
        rumah, dan seni interaktif. Contoh proyek: mengendalikan LED, membaca
        sensor suhu, membuat robot, dan sistem monitoring.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Fakta Unik
      </Typography>
      <ul>
        <li>Arduino telah digunakan di lebih dari 100 negara.</li>
        <li>
          Komunitas Arduino sangat besar dan aktif, sehingga banyak tutorial dan
          library tersedia gratis.
        </li>
        <li>
          Arduino dapat diprogram tanpa pengalaman pemrograman sebelumnya.
        </li>
        <li>
          Nama Arduino diambil dari nama Raja Italia, Arduin of Ivrea.
        </li>
      </ul>
    </Box>
  );
}
