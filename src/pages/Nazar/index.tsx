import  React  from "react";
import { Stack } from '@mui/material';
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { ReturnToStudents } from "../../components/returnToStudents";

export default function Nazar() {
  return (
    <>
     <Link to="card">
        <Stack spacing={2} direction="row">
          <Button variant="contained">Назар</Button>
        </Stack>
      </Link>
      <ReturnToStudents />
    </>
  )
}