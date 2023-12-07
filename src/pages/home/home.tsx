import React from "react"
import Header from "../../components/header/header";
import About from "../about/about" 

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <h2>Home Page</h2>
      <button>Мій улюблений учень</button>
    </>
  )
}