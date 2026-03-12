import React from "react";
import { Container, Typography, Paper } from "@mui/material";
import SignupForm from "./components/SignupForm";

function App() {
  return (
    <Container maxWidth="sm" style={{ marginTop: "40px" }}>
      <Paper elevation={3} style={{ padding: "30px" }}>
        <Typography variant="h4" gutterBottom align="center">
          Dynamic Signup Form
        </Typography>

        <SignupForm />
      </Paper>
    </Container>
  );
}

export default App;
