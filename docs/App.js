import React, { Component } from "react";
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

// 1. Create a client engine instance
const engine = new Styletron();

import { Div, Row, Col, Text, Icon, StyleReset, ThemeProvider, Container } from "atomize";

const theme = {
  colors: {
    black900: "#1d1d1e"
  }
};

class App extends Component {
  render() {
    return (
      <StyletronProvider value={engine} debug={debug} debugAfterHydration>
        <ThemeProvider theme={theme}>
        <Row
        bg={`warning200`}
            textColor="brand700"
            minH="6vh"
            d="flex"
            flexDir="column"            
            p={{ x: "1rem", y:".5rem" }}
          >
            <Text
            textSize="display2"
            fontFamily="primary"
            textWeight="300"
            ><Icon name="RightArrow" color="warning800" size="20px" />Mica Molder</Text>
      </Row>
<Container>
        <Row
            d="flex"
            flexDir="row"
            justify="center"
            align="center"
            p={{ t: "2rem" }}
      >    
      </Row>
          <Row
          bg={`success200`}
            textColor="black300"
            minH="25vh"
            d="flex"
            flexDir="column"
            justify="center"
            align="center"
            textSize="title"
            fontFamily="secondary"
            textWeight="400"
            m={{t: "1rem"}}
            p={{ x: "2rem", t: "1rem" }}
          >
          Hey, if you're here, you probably want to know a little bit about me.
          I'm a Full Stack Engineer currently working at 1Password.
          I'm all about making sure I help my team out however I can, but in my time away from work, I'm your quintessential nerd.            
          </Row>
          <Row
          bg={`success300`}
            textColor="black300"
            minH="25vh"
            d="flex"
            flexDir="column"
            justify="center"
            align="center"
            textSize="title"
            fontFamily="secondary"
            textWeight="400"
            p={{ x: "2rem", t: "1rem"}}
          >
          Video games, creating video games, programming, anime, plain old tv 
          (With a surname like mine, you'd better believe I grew up on X-Files). 
          I'm majorly into all of it. I'm even a bit of a music geek. 
          Aside from that, I'm big on crafts and like to sew and draw when I'm not in front of a screen.
      </Row>
      <Row 
            d="flex"
            flexDir="column"
            justify="center"
            align="center"
            p={{ t: "2rem" }}
      >
      <Col>
        <Div
        flexDir="row"
        rounded="lg"
          bgImg="https://micamolder.netlify.app/images/atWork.png"
          bgSize="cover"
          bgPos="center"
          h="10rem"
          w="50rem"
        />
        </Col>
        <Text textColor="black300" >A Snapshot of My Progress at Work</Text>
        </Row>
      <Row rounded="md" bg={`warning900`} m={{ y:"1rem"}} p={{ x: ".5rem", y: ".5rem" }}>
      <Col  bg={`warning300`}
            textColor="warning800"
            maxH="100vw"
            d="flex"
            flexDir="column"
            justify="center"
            align="center"
            textSize="title"
            fontFamily="secondary"
            textWeight="400"
            p={{ x: "4rem", y: "4rem" }}

      ><Row p={{x:"4rem", y: "1rem" }} >
      <Icon name="Heart" color="warning800" size="20px" />
      </Row><Row>
      Java</Row>
      <Row>
      <Text textColor="black300" 
      textSize="subheader" 
      align="center"
      p={{ x: "2rem", y: "1rem" }}>I've been programming in Java since mid-2018.</Text>
      </Row>
      </Col>
      <Col
            bg={`warning400`}
            textColor="warning800"
            d="flex"
            flexDir="column"
            justify="center"
            align="center"
            textSize="title"
            fontFamily="secondary"
            textWeight="400"
      ><Row p={{x:"4rem", y: "1rem" }}>
      <Icon name="Heart" color="warning800" size="20px" />
      </Row><Row>Web Development</Row>
      <Row>
      <Text textColor="black300" 
      textSize="subheader" 
      align="center"
      p={{ x: "2rem", y: "1rem" }}>This site is an ongoing testament to my love of development.</Text>
      </Row>
      </Col>
      <Col
            bg={`warning500`}
            textColor="warning800"
            d="flex"
            flexDir="column"
            justify="center"
            align="center"
            textSize="title"
            fontFamily="secondary"
            textWeight="400"
      ><Row p={{x:"4rem", y: "1rem" }}>
      <Icon name="Heart" color="warning800" size="20px" />
      </Row><Row>Data</Row>
      <Row>
      <Text textColor="black300" 
      textSize="subheader" 
      align="center"
      p={{ x: "2rem", y: "1rem" }}>I love data! I built some of this very site on JSON and YAML.</Text>
      </Row>
      </Col>
      </Row>
</Container>
<Row bg={`black300`} minH="25vh">
<Col
            textColor="warning300"
            d="flex"
            flexDir="column"
            justify="center"
            align="center"
            textSize="subheader"
            fontFamily="secondary"
            textWeight="400"
>
<Div
        m={{ x:"2rem"}}
        rounded="lg"
        border="1px solid"
        borderColor="warning900"        
          bgImg="https://micamolder.netlify.app/images/mica.jpeg"
          bgSize="cover"
          bgPos="center"
          h="10rem"
          w="10rem"
        />   
© 2021 All Rights Reserved</Col>
</Row>
          <StyleReset />
        </ThemeProvider>
      </StyletronProvider>
    );
  }
}

export default App;
