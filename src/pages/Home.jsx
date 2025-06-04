import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        p: 3,
        textAlign: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h3" gutterBottom>
        Selamat Datang di Mekaverse
      </Typography>
      <Typography variant="h6" color="text.secondary" gutterBottom>
        Platform pembelajaran mekatronika interaktif untuk siswa SMK.
      </Typography>
      <Typography sx={{ mt: 2, mb: 4 }}>
        Jelajahi berbagai materi mekatronika dan gunakan fitur Augmented Reality (AR) untuk memahami komponen elektronik secara visual dan interaktif.
      </Typography>
      <Stack direction="row" spacing={2} justifyContent="center">
        <Button variant="contained" color="primary" onClick={() => navigate("/materi")}>
          Lihat Materi
        </Button>
        <Button variant="outlined" color="secondary" onClick={() => navigate("/ar")}>
          Coba AR
        </Button>
      </Stack>
    </Box>
  );
};

export default Home;
