import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";

// PAGES
import Home from "./pages/Home";
import Materi from "./pages/Materi";
import AR from "./pages/AR";
import Arduino from "./pages/materi/Arduino";
import Breadboard from "./pages/materi/Breadboard";
import Led from "./pages/materi/Led";
import Sensor from "./pages/materi/Sensor";
import MotorDC from "./pages/materi/MotorDC";
import Resistor from "./pages/materi/Resistor";
import Potensiometer from "./pages/materi/Potensiometer";
import KabelJumper from "./pages/materi/KabelJumper";

// COMPONENTS
import Frame from "./components/Frame";

const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      palette: {
        red: "#8E0000",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Frame>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/materi" element={<Materi />} />
            <Route path="/ar" element={<AR />} />
            <Route path="/materi/arduino" element={<Arduino />} />
            <Route path="/materi/breadboard" element={<Breadboard />} />
            <Route path="/materi/led" element={<Led />} />
            <Route path="/materi/sensor" element={<Sensor />} />
            <Route path="/materi/motor-dc" element={<MotorDC />} />
            <Route path="/materi/resistor" element={<Resistor />} />
            <Route path="/materi/potensiometer" element={<Potensiometer />} />
            <Route path="/materi/kabel-jumper" element={<KabelJumper />} />
          </Routes>
        </Frame>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
