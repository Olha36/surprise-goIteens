import  React  from "react";
import { Stack } from '@mui/material';
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <>
     <Link to="cards">
        <Stack spacing={2} direction="row">
          <Button variant="contained">Мій улюблений учень</Button>
        </Stack>
      </Link>
    </>
  )
}