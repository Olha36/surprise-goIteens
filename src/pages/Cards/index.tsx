import  React  from "react";
import { ReturnToMain } from "../../components/returnToMain";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { Stack } from '@mui/material';
import "./style.css";

export default function Cards() {

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            m: 5,
          },
        }}
      >
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical outlined button group"
        >
          <Link to="/oleg">
            <Stack spacing={2} direction="row" justifyContent="center">
            <Button key="oleg">Олег</Button>
            </Stack>
          </Link>

          <Link to="/vanya">
            <Stack spacing={2} direction="row" justifyContent="center">
            <Button key="vania">Ваня</Button>
            </Stack>
          </Link>

          <Link to="/nastya">
            <Stack spacing={2} direction="row" justifyContent="center">
            <Button key="nastiia">Настя</Button>
            </Stack>
          </Link>

          <Link to="/danyai">
            <Stack spacing={2} direction="row" justifyContent="center">
            <Button key="dania2">Даня І.</Button>
            </Stack>
          </Link>

          <Link to="/danyas">
            <Stack spacing={2} direction="row" justifyContent="center">
            <Button key="dania1">Даня Щ.</Button>
            </Stack>
          </Link>
          
          <Link to="/nazar">
            <Stack spacing={2} direction="row" justifyContent="center">
            <Button key="nazar">Назар</Button>
            </Stack>
          </Link>
          
          <Link to="/erik">
            <Stack spacing={2} direction="row" justifyContent="center">
            <Button key="erik">Ерік</Button>
            </Stack>
          </Link>
         
          <Link to="/yura">
            <Stack spacing={2} direction="row" justifyContent="center">
            <Button key="yura">Юра</Button>
            </Stack>
          </Link>

          <Link to="/edward">
            <Stack spacing={2} direction="row" justifyContent="center">
            <Button key="edward">Едвард</Button>
            </Stack>
          </Link>

          
        </ButtonGroup>
    </Box>
      <ReturnToMain />
    </>
  )
}