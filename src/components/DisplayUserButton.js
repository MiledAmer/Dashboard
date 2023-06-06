import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

export default function DisplayUserButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/DisplayUser");
  };

  return (
    <Button variant="contained" color="secondary" onClick={handleClick}>
      Display Users
    </Button>
  );
}
