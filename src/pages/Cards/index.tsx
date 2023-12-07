import  React  from "react";
import { ReturnToMain } from "../../components/returnToMain";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import "./style.css";

export default function Cards() {

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          "& > *": {
            m: 5,
          },
        }}
      >
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical outlined button group"
        >
          <Button key="oleg">Олег</Button>
          <Button key="vania">Ваня</Button>
          <Button key="nastiia">Настя</Button>
          <Button key="dania1">Даня Щ.</Button>
          <Button key="dania2">Даня І.</Button>
          <Button key="nazar">Назар</Button>
          <Button key="erik">Ерік</Button>
          <Button key="yura">Юра</Button>
          <Button key="edward">Едвард</Button>
      </ButtonGroup>
    </Box>
      <ReturnToMain />
    </>
  )
}