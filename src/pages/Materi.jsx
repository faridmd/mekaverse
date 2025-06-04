import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Grid, Card, CardActionArea, CardContent, Typography } from "@mui/material";

const materiList = [
  {
    title: "Arduino",
    desc: "Mikrokontroler open-source yang mudah diprogram untuk berbagai proyek elektronik.",
    path: "/materi/arduino",
  },
  {
    title: "Breadboard",
    desc: "Papan sirkuit tanpa solder untuk merangkai dan menguji rangkaian elektronik.",
    path: "/materi/breadboard",
  },
  {
    title: "LED",
    desc: "Dioda pemancar cahaya yang digunakan sebagai indikator atau sumber cahaya.",
    path: "/materi/led",
  },
  {
    title: "Sensor",
    desc: "Komponen yang digunakan untuk mendeteksi perubahan lingkungan seperti cahaya, suhu, atau jarak.",
    path: "/materi/sensor",
  },
  {
    title: "Motor DC",
    desc: "Motor listrik arus searah yang sering digunakan untuk menggerakkan bagian mekanik dalam proyek mekatronika.",
    path: "/materi/motor-dc",
  },
  {
    title: "Resistor",
    desc: "Komponen elektronik yang berfungsi membatasi arus listrik dalam rangkaian.",
    path: "/materi/resistor",
  },
  {
    title: "Potensiometer",
    desc: "Resistor variabel yang dapat digunakan untuk mengatur tegangan atau arus dalam rangkaian.",
    path: "/materi/potensiometer",
  },
  {
    title: "Kabel Jumper",
    desc: "Kabel kecil yang digunakan untuk menghubungkan komponen pada breadboard atau modul lain.",
    path: "/materi/kabel-jumper",
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
        {materiList.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.title}>
            <Card>
              <CardActionArea onClick={() => navigate(item.path)}>
                <CardContent>
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
