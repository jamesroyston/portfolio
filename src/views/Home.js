import React, {useEffect, useState} from 'react'
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const Navbar = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
`;

const Link = styled.a`
  color: white;
    margin-right: 1.5em;
    text-decoration: none;
    border-bottom: 4px solid transparent;
    :hover {
      border-bottom: 4px solid blue;
      transition: border-bottom linear 200ms;
    }
`;

const Panel = styled.div`
  width: fit-content;
  :nth-child(1) {
    min-width: 600px;
    @media (max-width: 656px) {
      min-width: 100%;
    }
    @media (min-width: 1300px) {
      height: 520px; // to match nth-child(2) at this screen width
    }
  }
  :nth-child(2) {
    p {
      margin: 0;
    }
  }
`;

const Container = styled.div`
  box-sizing: border-box;
  background: #000;
  width: calc(100% - 35px);
  height: calc(100% - 35px);
  position: absolute;
  display: flex;
  flex-direction: column;
  
  //  inner container content styles
  li {
    font-size: 0.8em;
    list-style-type: none;
    :before { content: '🍔'; margin-left: -20px; margin-right: 10px; } 
  }
  p {
    font-size: 0.9em;
    
  }
  color: white;
  font-size: 30px;
  padding: 5rem;
  @media (max-width: 1000px) {
    font-size: 20px;
    padding: 2em;
  }
  @media (min-width: 1000px) {
    flex-direction: row;
  }
  @media (max-width: 800px) {
    font-size: 20px;
    padding: 2em;
    width: calc(100% - 30px);
    height: calc(100% - 30px);
  }
  @media (max-width: 600px) {
    font-size: 16px;
    padding: 1.2em;
    width: calc(100% - 25px);
    height: calc(100% - 25px); 
    justify-content: center;                       
    ul {
      padding-left: 1.3em;
    }
    li {
      font-size: 1em; 
    }
  }
  @media (min-width: 1300px) {
    justify-content: space-evenly;
    align-items: center;
  }
`

const BorderContainer = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  background: white;
  position: absolute; 
  display: flex;
  flex-flow: row wrap;
`

const ColorfulBox = styled.div`
  background-color: ${props => props.color ? props.color : 'black'};
  width: 25%;
  height: 25%;
`;

function Border() {
    const colors = ['#ed1c24', '#f7ee7f', '#59C9A5', '#48ACF0', '#805D93']
    
    const gridOfColorfulBoxes = function () {
        const grid = [];
        for (let i = 0; i < 16; i++) {
            grid.push(<ColorfulBox color={colors[i%colors.length]}/>)
        }
        return grid;
    }
    return <BorderContainer>
        {gridOfColorfulBoxes()}
        </BorderContainer>

}

export default function Home() {
    return (
        <HomeContainer>
            <Border/>
            <Container>
                <Panel>
                    <Navbar>
                        <Link href="https://github.com/jamesroyston">Github</Link>
                        <Link href="https://linkedin.com/in/jtroyston">LinkedIn</Link>
                        <Link href="https://dev.to/jamesroyston">Dev.to</Link>
                    </Navbar>
                    <h1>James Royston <span role="img" aria-label="smiling emoji">😁</span></h1>
                    <p><span role="img" aria-label="male technologist emoji">👨‍💻</span> Software Engineer / Frontend Obsessed</p>
                    <p>Writing React.js applications at Anautics OKC</p>
                    <p>(<em>heads up, personal projects are pinned on my github</em>)</p>
                </Panel>
                    
                <Panel>
                    <p>What I'm good at:</p>
                    <ul>
                        <li><span role="img" aria-label="magnifying glass emoji">🔍</span> Google (<em>the search engine, lol</em>)</li>
                        <li>JavaScript</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>React <span role="img" aria-label="sparkling heart emoji">💖</span></li>
                        <li>Styled Components</li>
                        <li>Express</li>
                        <li>Node</li>
                        <li>Mongo/Mongoose</li>
                        <li>Heroku</li>
                        <li>Git</li>
                        <li>Agile</li>
                    </ul>
                </Panel>
            </Container>
        </HomeContainer>
    )
}
