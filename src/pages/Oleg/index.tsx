import  React  from "react";
import { Stack } from '@mui/material';
import { Link } from "react-router-dom";
import { ReturnToStudents } from "../../components/returnToStudents";

export default function Oleg() {
  return (
    <>
     <Link to="card">
        <Stack spacing={2} direction="row">
          <h1>Олег</h1>
        </Stack>
      </Link>
      <ReturnToStudents />
    </>
  )
}