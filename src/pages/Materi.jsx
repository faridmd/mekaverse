import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Grid, Card, CardActionArea, CardContent, Typography } from "@mui/material";

// Import gambar lokal
import arduinoImg from "../img/arduino.jpg";
import breadboardImg from "../img/breadboard.jpg";
import ledImg from "../img/led.jpg";
import sensorImg from "../img/sensors.jpg";
import motorDCImg from "../img/dc_motor.jpeg";
import resistorImg from "../img/resistor.png";
import potensiometerImg from "../img/potentiometer.jpg";
import kabelJumperImg from "../img/jumper_cable.jpeg";

const materiList = [
  {
    title: "Arduino",
    desc: "Mikrokontroler open-source yang mudah diprogram untuk berbagai proyek elektronik.",
    path: "/materi/arduino",
    img: arduinoImg,
  },
  {
    title: "Breadboard",
    desc: "Papan sirkuit tanpa solder untuk merangkai dan menguji rangkaian elektronik.",
    path: "/materi/breadboard",
    img: breadboardImg,
  },
  {
    title: "LED",
    desc: "Dioda pemancar cahaya yang digunakan sebagai indikator atau sumber cahaya.",
    path: "/materi/led",
    img: ledImg,
  },
  {
    title: "Sensor",
    desc: "Komponen yang digunakan untuk mendeteksi perubahan lingkungan seperti cahaya, suhu, atau jarak.",
    path: "/materi/sensor",
    img: sensorImg,
  },
  {
    title: "Motor DC",
    desc: "Motor listrik arus searah yang sering digunakan untuk menggerakkan bagian mekanik dalam proyek mekatronika.",
    path: "/materi/motor-dc",
    img: motorDCImg,
  },
  {
    title: "Resistor",
    desc: "Komponen elektronik yang berfungsi membatasi arus listrik dalam rangkaian.",
    path: "/materi/resistor",
    img: resistorImg,
  },
  {
    title: "Potensiometer",
    desc: "Resistor variabel yang dapat digunakan untuk mengatur tegangan atau arus dalam rangkaian.",
    path: "/materi/potensiometer",
    img: potensiometerImg,
  },
  {
    title: "Kabel Jumper",
    desc: "Kabel kecil yang digunakan untuk menghubungkan komponen pada breadboard atau modul lain.",
    path: "/materi/kabel-jumper",
    img: kabelJumperImg,
  },
];

export default function Materi() {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 2, pb: 8 }}>
      <Typography variant="h4" gutterBottom>
        Materi Mekatronika Kelas X
      </Typography>
      <Grid container spacing={2}>
        {materiList.map((item, idx) => (
          <Grid item xs={12} sm={6} md={4} key={item.title}>
            <Card
              sx={{
                background: "linear-gradient(135deg, #e0e7ff 0%, #f0fdfa 100%)",
                boxShadow: 3,
                borderRadius: 3,
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "translateY(-4px) scale(1.03)",
                  boxShadow: 6,
                  background: "linear-gradient(135deg, #c7d2fe 0%, #a7f3d0 100%)",
                },
              }}
            >
              <CardActionArea onClick={() => navigate(item.path)}>
                <CardContent>
                  <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
                    <img
                      src={item.img}
                      alt={item.title}
                      style={{ maxHeight: 80, maxWidth: "100%", objectFit: "contain" }}
                    />
                  </Box>
                  <Typography variant="h6" component="div" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.desc}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
