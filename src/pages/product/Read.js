import React from 'react';
import styled from 'styled-components';

import banner from '../../assets/img/07.png';
import bookmark from '../../assets/img/16.png';
import book from '../../assets/img/17.png';
import Categories from '../../globals/toolbar/Categories';
import dropdown from '../../assets/img/29.png';
import zoomIn from '../../assets/img/14.png';
import zoomOut from '../../assets/img/15.png';
import { PrimaryButton } from '../../components/styledComponents';
import colors from '../../config/colors';
import left from '../../assets/img/48.png';
import right from '../../assets/img/49.png';

function Read() {
  return (
    <>
      <Categories />
      <Wrapper>
        <div className="banner">
          <div className="txt">
            <h1>A story about</h1>
            <h1>The Honest Black Fighter</h1>
            <p>A Biography Of An American President</p>
          </div>
        </div>
        <article className="indexSection">
          <div className="left">
            <div className="pages">
              <p>1</p>
              <p>of</p>
              <p>277</p>
            </div>
            <div className="zoom">
              <div className="img-container">
                <img src={zoomIn} alt="ZoomIn png" />
              </div>
              <div className="img-container">
                <img src={zoomOut} alt="ZoomOut png" />
              </div>
            </div>
          </div>

          <div className="text">
            <h1>Abraham Lincoln</h1>
            <p>A Biography of an America President</p>
          </div>
          <div className="right">
            <div className="bookmark">
              <div className="img-container">
                <img src={bookmark} alt="bookmark png" />
              </div>
              <p>Bookmark</p>
              <img src={dropdown} alt="chevron down png" />
            </div>
            <div className="button">
              <PrimaryButton hallwidth>Buy this book</PrimaryButton>
            </div>
          </div>
        </article>
        <article className="secondSection">
          <div className="chevron">
            <img src={left} alt="left arrow png" />
          </div>
          <div className="page">
            <div className="img-container">
              <img src={book} alt="book png" />
            </div>
            <p>1</p>
          </div>
          <div className="chevron">
            <img src={right} alt="right arrow png" />
          </div>
        </article>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  .banner {
    background: url(${banner});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1.6em;
    padding: 0 35rem;
    line-height: 1.2;
    .txt {
      h1 {
        font-size: 1.7em;
      }
      p {
        margin-top: 0.6em;
      }
    }
  }
  .indexSection {
    display: flex;
    align-items: center;
    padding: 1rem 4rem 1rem 18rem;
    font-size: 1.4em;
    .img-container {
      background-color: ${colors.navBar};
      width: 30px;
      padding: 0.8rem;
      display: flex;
      align-items: center;
      img {
        width: 100%;
      }
    }
    .left {
      display: flex;
      align-items: center;
      margin-right: auto;
      .pages {
        display: flex;
        align-items: center;
        margin-right: 2rem;
        background-color: ${colors.navBar};
        padding: 0.6rem;
        p {
          margin-right: 0.5rem;
        }
        p:nth-child(1) {
          background-color: ${colors.colorWhite};
          padding: 0.3rem 0.7rem;
        }
      }
      .zoom {
        display: flex;

        .img-container:nth-child(1) {
          margin-right: 1rem;
        }
      }
    }

    .right {
      margin-left: auto;
      display: flex;
      .bookmark {
        display: flex;
        align-items: center;
        p {
          margin: 0 1.5rem;
        }
      }
      .button {
        margin-left: 3rem;
      }
    }

    .text {
      h1 {
        font-size: 1.4em;
      }
    }
  }

  .secondSection {
    background-color: ${colors.primaryColor};
    padding: 6rem 0;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

    .chevron {
      background-color: ${colors.navBar};
      width: 30px;
      padding: 0.8rem;
      display: flex;
      align-items: center;
      img {
        width: 100%;
      }
    }
    .page {
      margin: 0 1.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      p {
        background-color: ${colors.navBar};
        padding: 0.6rem 0.8em;
        color: ${colors.colorWhite};
        margin-top: 1.5rem;
      }
    }
  }
`;

export default Read;
