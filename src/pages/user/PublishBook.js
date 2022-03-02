import React from 'react';
import styled from 'styled-components';
import colors from '../../config/colors';
import PublishBookOne from './PublishBookOne';
import PublishBookThree from './PublishBookThree';
import PublishBookTwo from './PublishBookTwo';
import one from '../../assets/img/38.png';
import two from '../../assets/img/39.png';
import three from '../../assets/img/40.png';
import done from '../../assets/img/41.png';
import useActive from '../../hooks/useActive';
import { Link } from 'react-router-dom';

function PublishBook() {
  const [active, changeActive] = useActive(['one', 'two', 'three']);
  return (
    <Wrapper>
      <div className="header">
        <h1>Publish Your Book</h1>
        <Link to="/dashboard">Back to Dashboard</Link>
      </div>
      <div className="number">
        <div className="box">
          {typeof active !== 'undefined' && (active.two || active.three) ? (
            <img src={done} alt="png" />
          ) : (
            <img src={one} alt="png" />
          )}
          <p>Book Info</p>
        </div>
        <div className="divider"></div>
        <div className="box">
          {typeof active !== 'undefined' && active.three ? (
            <img src={done} alt="png" />
          ) : (
            <img src={two} alt="png" />
          )}
          <p>Book Info</p>
        </div>
        <div className="divider"></div>
        <div className="box">
          <img src={three} alt="png" />
          <p>Book Info</p>
        </div>
      </div>
      {typeof active !== 'undefined' && active.one ? (
        <PublishBookOne changeActive={changeActive} />
      ) : typeof active !== 'undefined' && active.two ? (
        <PublishBookTwo changeActive={changeActive} />
      ) : (
        <PublishBookThree changeActive={changeActive} />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 90%;
  margin: 4rem auto;
  font-size: 1.4em;
  .header {
    margin-bottom: 5rem;
    padding-left: 10rem;
    h1 {
      font-size: 1.8em;
      color: ${colors.textColor};
    }
    a {
      background-color: transparent;
      font-size: 0.8em;
      color: ${colors.colorBlack};
      padding: 0;
    }
  }

  .number {
    width: 60%;
    margin: 0 auto 4rem;
    display: flex;
    align-items: center;
    .divider {
      height: 1px;
      background-color: ${colors.textColor};
      width: 180px;
      margin: 0 1.5rem;
    }
    .box {
      display: flex;
      flex-direction: column;
      align-items: center;
      p {
        margin-top: 0.5rem;
      }
    }
  }
`;

export default PublishBook;
