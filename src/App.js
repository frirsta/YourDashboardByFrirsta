import { Route, Routes } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import TopBar from "./scenes/global/TopBar";
import Dashboard from "./scenes/dashboard";
import SideBar from "./scenes/global/SideBar";
import { useState } from "react";
// import Team from "./scenes/Team";
// import Invoices from "./scenes/Invoices";
// import Contacts from "./scenes/Contacts";
// import Bar from "./scenes/Bar";
// import Form from "./scenes/Form";
// import Line from "./scenes/Line";
// import Pie from "./scenes/Pie";
// import FAQ from "./scenes/FAQ";
// import Geography from "./scenes/Geography";
// import Calendar from "./scenes/Calendar";

function App() {
  const [theme, colorMode] = useMode();
  const [isSideBar, setIsSideBar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar isSideBar={isSideBar} />
          <main className="content">
            <TopBar isSideBar={isSideBar} />
            <Routes>
             <Route path="/" element={<Dashboard />} /> 
              {/* <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/Bar" element={<Bar />} />
              <Route path="/Form" element={<Form />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/calendar" element={<Calendar />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
