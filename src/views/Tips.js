import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-size: 18px;
`;

const Body = styled.div`
  margin: 0 auto;
  width: 35rem;
`;

const Tips = () => {
  return (
    <Container>
      <Body>
        <h2>Hey Dumba**.</h2>
        <p>
          Read these articles before talking to anybody in hiring. As a matter
          of fact, just read these once a year to keep them fresh in your mind.
          You'll regret it if you don't (remember that time when you read these
          after you'd already signed an offer? Yeah, that pint of ben and
          jerry's does too...).
        </p>
        <ul>
          <li>
            <a href="https://haseebq.com/how-not-to-bomb-your-offer-negotiation/">
              How not to bomb your offer negotiation - haseebq
            </a>
          </li>
          <li>
            <a href="https://haseebq.com/my-ten-rules-for-negotiating-a-job-offer/">
              Ten rules for negotiating a job offer - haseebq
            </a>
          </li>
          <li>
            <a href="https://web.archive.org/web/20180626035838/http://rob.by/2013/negotiating-your-startup-job-offer/">
              Negotiating your startup job offer - rob.by
            </a>
          </li>
          <li>
            <a href="https://www.theodinproject.com/courses/getting-hired/lessons/handling-a-job-offer">
              Handling a job offer - theodinproject.com
            </a>
          </li>
        </ul>

        <p>Watch these, also.</p>
        <ul>
          <li>
            <a href="https://www.youtube.com/watch?v=OaEw7ZFs5sU">
              Never Split The Difference Summary - Chris Voss [Youtube]
            </a>
          </li>
        </ul>

        <p>
          Not related to jobs- but you should read these once a year because
          humble pie is nice.
        </p>
        <ul>
          <li>
            <a href="https://dev.to/emmabostian/101-tips-for-being-a-great-programmer-human-36nl">
              101 tips for being a great programmer and human
            </a>
          </li>
          <li>
            <a href="https://monicalent.com/blog/2019/06/03/absolute-truths-unlearned-as-junior-developer/">
              Absolute truths unlearned as junior developer
            </a>
          </li>
          <li>
            <a href="https://mastery.games/post/what-not-to-learn/">
              Deciding what not to learn
            </a>
          </li>
        </ul>
      </Body>
    </Container>
  );
};

export default Tips;
