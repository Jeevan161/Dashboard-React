import { ColorModeContext, useMode, } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/dashboard/topbar";
import Sidebar from "./scenes/dashboard/sidebar";
import Dashboard from "./scenes/dashboard";
import { useState,useEffect } from "react";
import { SectorsProvider  } from "./scenes/sectorData/SectorsProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sector from "./scenes/sectorData/index"
import LiveChart from "./scenes/Charts/LiveChart"
function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  useEffect(()=>
    {
        document.title="Dashboard";
    })
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <div className="app">
            <Sidebar isSidebar={isSidebar} />
            <main className="content">
              <Topbar setIsSidebar={setIsSidebar} />
              
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/chart" element={<LiveChart symbol={'IBM'} />}/>

              </Routes>
              
            </main>
          </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
