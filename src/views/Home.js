import React from "react";
import profile from "./profile.jpg";
import styled from "styled-components";

const Container = styled.div`
  font-size: 18px;
`;

const Body = styled.div`
  padding: 3rem 0;
  margin: 0 auto;
  width: 35rem;

  @media (max-width: 700px) {
    width: 90%;
  }
`;

const GreetingSection = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  h1 {
    margin-bottom: 0;
  }
`;

const Img = styled.img`
  width: 15rem;
  border-radius: 50%;
`;

export default function Home() {
  return (
    <Container>
      <Body>
        <GreetingSection>
          <Img src={profile} alt="me" />
          <h1>
            👉🏼 James Royston 👈🏼
          </h1>
        </GreetingSection>

        <p>
          I'm a software engineer in the midwest, working on React.js
          applications at{" "}
          <span>
            <a href="https://steezy.co/">STEEZY</a> (😍).{" "}
          </span>
          My favorite technologies right now are{" "}
          <a href="https://reactjs.org/">React.js</a>,{" "}
          <a href="https://styled-components.com/">styled components</a>, and{" "}
          <a href="https://expressjs.com/">Express + Node.js</a>.
        </p>

        <hr />

        <p>Blog posts:</p>
        <small>
          <ul>
            <li>
              <a href="https://dev.to/jamesroyston/how-to-deploy-your-express-mongodb-api-react-frontend-to-heroku-4p8m">
                How to deploy your express-mongoDB API + React frontend to
                Heroku
              </a>
            </li>
          </ul>
        </small>

        <p>Follow me:</p>
        <small>
          <ul>
            <li>
              <a href="https://github.com/jamesroyston">Github</a>
            </li>
            <li>
              <a href="https://linkedin.com/in/jtroyston">LinkedIn</a>
            </li>
            <li>
              <a href="https://dev.to/jamesroyston">Dev.to</a>
            </li>
          </ul>
        </small>
        <p>
          <small>
            Email:{" "}
            <a href="mailto://jamesroyston03@gmail.com">
              jamesroyston03@gmail.com
            </a>
          </small>
        </p>
      </Body>
    </Container>
  );
}
