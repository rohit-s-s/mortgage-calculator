import "./styles.css";
import Navbar from "./Components/Navbar";
import Result from "./Components/Results";
import Grid from "@mui/material/Grid";
import { Container, Stack } from "@mui/material";
import SliderSelect from "./Components/SliderSelect";
import { useState } from "react";
import TenureSelect from "./Components/TenureSelect";

export default function App() {
  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 600,
    loanAmount: 2400,
    intrestRate: 5,
    loanTerm: 5
  });

  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl" sx={{ marginTop: 4 }}>
        <Grid container spacing={5} alignitems="center">
          <Grid item xs={12} md={6}>
            <Container maxWidth="xs">
              <Stack gap={1}>
                <SliderSelect data={data} setData={setData} />
                <TenureSelect data={data} setData={setData} />
              </Stack>
            </Container>
          </Grid>
          <Grid item xs={12} md={6}>
            <Result data={data} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
