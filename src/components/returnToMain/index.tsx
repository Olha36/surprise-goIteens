import  React  from "react";
import { Link } from "react-router-dom";
import { Stack } from '@mui/material';
import Button from "@mui/material/Button";


export const ReturnToMain = () => {
  return (
    <>
      <Link to="/">
        <Stack spacing={2} direction="row" justifyContent="center">
          <Button variant="contained">Повернутися на головну</Button>
        </Stack>
      </Link>
    </>
    
  )
}