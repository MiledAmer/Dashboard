import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";


export default function ExitButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/signin"); // Replace "/signin" with the actual path of your sign-in page
  };

  return (
    <Button variant="contained" color="secondary" onClick={handleClick}>
      Exit
    </Button>
  );
}
