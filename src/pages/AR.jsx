import * as React from "react";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Dialog,
} from "@mui/material";

// Import gambar lokal untuk tiap section AR
import arduinoImg from "../img/arduino.jpg";
import resistorImg from "../img/resistor.png";
import ledImg from "../img/led.jpg";
import rangkaianImg from "../img/rangkaian.jpg"; // Pastikan file ini ada di direktori img

const arList = [
  {
    title: "Arduino",
    desc: "Visualisasi AR papan Arduino untuk pembelajaran interaktif.",
    embed: "https://mywebar.com/p/Project_1_vsr1yzln7q",
    img: arduinoImg,
  },
  {
    title: "Resistor",
    desc: "Lihat bentuk dan warna resistor secara 3D melalui AR.",
    embed: "https://mywebar.com/p/Project_2_f4jtt1wzi9",
    img: resistorImg,
  },
  {
    title: "LED",
    desc: "Pelajari LED dan cara kerjanya dengan tampilan AR.",
    embed: "https://mywebar.com/p/Project_3_f8bxc27dui",
    img: ledImg,
  },
  {
    title: "Rangkaian Sederhana",
    desc: "Simulasi rangkaian elektronik sederhana dalam AR.",
    embed: "https://mywebar.com/p/Project_0_138wrygm2r",
    img: rangkaianImg,
  },
];

export default function AR() {
  const [open, setOpen] = React.useState(false);
  const [selectedEmbed, setSelectedEmbed] = React.useState(null);

  const handleOpen = (embed) => {
    setSelectedEmbed(embed);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedEmbed(null);
  };

  return (
    <Box sx={{ p: 2, pb: 8 }}>
      <Typography variant="h4" gutterBottom>
        Augmented Reality Mekatronika
      </Typography>
      <Grid container spacing={2}>
        {arList.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.title}>
            <Card>
              <CardActionArea onClick={() => handleOpen(item.embed)}>
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mb: 1,
                    }}
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      style={{
                        maxHeight: 80,
                        maxWidth: "100%",
                        objectFit: "contain",
                      }}
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
      <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
        {selectedEmbed && (
          <iframe
            src={selectedEmbed}
            frameBorder="0"
            scrolling="yes"
            seamless="seamless"
            style={{ display: "block", width: "100%", height: "80vh" }}
            allow="camera;gyroscope;accelerometer;magnetometer;xr-spatial-tracking;microphone;"
            title="AR Experience"
          />
        )}
      </Dialog>
    </Box>
  );
}
