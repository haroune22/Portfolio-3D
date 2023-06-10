import styled from "styled-components"
import { Contact } from "./Components/Contact"
import Hero from "./Components/Hero"
import Who from "./Components/Who"
import Works from "./Components/Works"

const Container = styled.div`
height:100vh;
scrool-snap-type: y mandatory;
scroll-behavior:smooth;
overflow-y: auto;
scrollbar-width: none;
color: white;
background: url("./img/bg.jpeg");
`
function App() {

  return (
    <Container>
     <Hero/>
     <Who/>
     <Works/>
     <Contact/>
    </Container>
  )
}

export default App
