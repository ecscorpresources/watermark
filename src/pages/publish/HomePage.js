import React from 'react';
import styled from 'styled-components';
import { GrStar } from 'react-icons/gr';
import '../../../node_modules/video-react/dist/video-react.css';
import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton,
  BigPlayButton,
} from 'video-react';

import Categories from '../../globals/toolbar/Categories';
import bg from '../../assets/img/43.png';
import feather from '../../assets/img/19.png';
import typewriter from '../../assets/img/20.png';
import colors from '../../config/colors';
import book from '../../assets/img/21.png';
import woman from '../../assets/img/22.png';
import people from '../../assets/img/23.png';
import theKing from '../../assets/img/24.png';
import { BtnLink } from '../../components/styledComponents';
import writer from '../../assets/img/26.png';
import right from '../../assets/img/44.png';
import left from '../../assets/img/45.png';
import Tabs from '../../components/Tabs';

function HomePage() {
  const [slide, setSlide] = React.useState({
    one: 1,
    two: 2,
    three: 3,
  });

  const handleClick = (val1, val2, val3) => {
    setSlide({
      one: val1,
      two: val2,
      three: val3,
    });
  };

  const arrow = (val) => {
    if (val === 1) {
      const slideOne = slide.one !== 3 ? slide.one + val : 1;
      const slideTwo = slide.two !== 3 ? slide.two + val : 1;
      const slideThree = slide.three !== 3 ? slide.three + val : 1;
      setSlide({
        one: slideOne,
        two: slideTwo,
        three: slideThree,
      });
    } else {
      const slideOne = slide.one !== 1 ? slide.one + val : 3;
      const slideTwo = slide.two !== 1 ? slide.two + val : 3;
      const slideThree = slide.three !== 1 ? slide.three + val : 3;
      setSlide({
        one: slideOne,
        two: slideTwo,
        three: slideThree,
      });
    }
  };

  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Wrapper>
      <Categories />
      <article className="indexSection">
        <div className="txt">
          <img src={feather} alt="feather" />
          <div className="text">
            <h1>Put Pen to</h1>
            <h1>Your Passion</h1>
            <div className="paragraph">
              <p>Thousands of new writers are waking up to</p>
              <p>their passion and creating the script that</p>
              <p>touches the heart. Be our guest on Watermarks</p>
              <p>and bring your thoughts to reality</p>
            </div>
            <div className="button">
              <Button to="/publish_book">Get Started</Button>
            </div>
          </div>
        </div>
        <div className="img-container">
          <img src={typewriter} alt="typewriter png" />
        </div>
      </article>
      <article className="secondSection">
        <div className="head">
          <h6>Why you should publish with us</h6>
          <div className="steps box">
            <div className="txt">
              <h1>Publish in easy steps</h1>
              <p>Create an account with Watermarks, Upload</p>
              <p>manuscript & cover design. Select a format, Set</p>
              <p>your price & payment details and watch readers</p>
              <p>purchase your book massively.</p>
            </div>
            <div className="img-container">
              <img src={book} alt="book png" />
            </div>
          </div>
          <div className="charge box">
            <div className="img-container">
              <img src={woman} alt="book png" />
            </div>
            <div className="txt">
              <h1>You are in charge</h1>
              <p>You have full control, you can edit your source</p>
              <p>document & re-publish, also set & reset the price</p>
              <p>of your book anytime. It's your sweat, you know</p>
              <p>its worth.</p>
            </div>
          </div>
          <div className="audience box">
            <div className="img-container"></div>
            <div className="txt">
              <h1>Know your audience</h1>
              <p>Reach a wide range of readers and get detailed</p>
              <p>analysis on your sales, the number of readers</p>
              <p>& their demographics</p>
            </div>
            <img src={people} alt="people png" />
          </div>
        </div>
      </article>
      <article className="thirdSection">
        <div className="img-container">
          <img src={theKing} alt="book png" />
        </div>
        <div className="txt">
          <div>
            <h1>Grab Readers' Attention</h1>
            <h6>Premier that book</h6>
          </div>
          <div className="text">
            <p>Schedule a release date, plan your writing, create a buzz</p>
            <p>for your readers & begin to earn even before release</p>
            <p>Schedule a release date, plan your writing, create a buzz</p>
            <p>for your readers & begin to earn even before release</p>
          </div>
          <div className="button">
            <Button to="premier">Get Started</Button>
          </div>
        </div>
      </article>
      <article className="fourthSection">
        <div className="txt">
          <h3>Watch Video on</h3>
          <h3>our easy process</h3>
        </div>
        <div className="video-container">
          <Player fluid="false">
            <source src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4" />
            <BigPlayButton position="center" />
            <ControlBar>
              <ReplayControl seconds={10} order={1.1} />
              <ForwardControl seconds={30} order={1.2} />
              <CurrentTimeDisplay order={4.1} />
              <TimeDivider order={4.2} />
              <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
              <VolumeMenuButton />
            </ControlBar>
          </Player>
        </div>
      </article>
      <article className="fifthSection">
        <div className="testimonial-slider-container">
          <div className="testimonial-intro">
            <h3>...What other writers think about us </h3>
          </div>
          <div className="testimonial-control">
            <img src={left} alt="left arrow png" onClick={() => arrow(1)} />
            <img src={right} alt="right arrow png" onClick={() => arrow(-1)} />
          </div>
          <div className="testimonial-slider">
            <div
              className={
                slide.one === 1
                  ? 'slide'
                  : slide.one === 2
                  ? 'slide two'
                  : 'slide three'
              }
              onClick={() => handleClick(1, 2, 3)}
            >
              <div className="testimonial-image">
                <img src={writer} alt="writer png" />
              </div>
              <div className="testimonial-info">
                <div className="name">
                  <h3>Kennedy</h3>
                </div>
                <div className="location">
                  <p>Lagos, Nigeria</p>
                </div>
                <div className="rating-section">
                  <GrStar className="rating" />
                  <GrStar className="rating" />
                  <GrStar className="rating" />
                  <GrStar className="rating" />
                  <GrStar className="rating" />
                </div>
                <div className="content">
                  <p>
                    This is where the content for review is displayed. Write
                    more content to feel this space.
                  </p>
                </div>
              </div>
            </div>
            <div
              className={
                slide.two === 1
                  ? 'slide'
                  : slide.two === 2
                  ? 'slide two'
                  : 'slide three'
              }
              onClick={() => handleClick(3, 1, 2)}
            >
              <div className="testimonial-image">
                <img src={writer} alt="writer png" />
              </div>
              <div className="testimonial-info">
                <div className="name">
                  <h3>Kennedy Okonkwo</h3>
                </div>
                <div className="location">
                  <p>Lagos, Nigeria</p>
                </div>
                <div className="rating-section">
                  <GrStar className="rating" />
                  <GrStar className="rating" />
                  <GrStar className="rating" />
                  <GrStar className="rating" />
                  <GrStar className="rating" />
                </div>
                <div className="content">
                  <p>
                    This is where the content for review is displayed. Write
                    more content to feel this space.
                  </p>
                </div>
              </div>
            </div>
            <div
              className={
                slide.three === 1
                  ? 'slide'
                  : slide.three === 2
                  ? 'slide two'
                  : 'slide three'
              }
              onClick={() => handleClick(2, 3, 1)}
            >
              <div className="testimonial-image">
                <img src={writer} alt="writer png" />
              </div>
              <div className="testimonial-info">
                <div className="name">
                  <h3>Okonkwo</h3>
                </div>
                <div className="location">
                  <p>Lagos, Nigeria</p>
                </div>
                <div className="rating-section">
                  <GrStar className="rating" />
                  <GrStar className="rating" />
                  <GrStar className="rating" />
                  <GrStar className="rating" />
                  <GrStar className="rating" />
                </div>
                <div className="content">
                  <p>
                    This is where the content for review is displayed. Write
                    more content to feel this space.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className="sixthSection">
        <div className="faq">
          <div className="heading">
            <h1>Common Questions</h1>
          </div>
          <div className="tab">
            <Tabs />
          </div>
        </div>
      </article>
    </Wrapper>
  );
}

const Button = styled(BtnLink)`
  padding: 0.6rem 3rem;
  font-size: 1.4em;
`;

const Wrapper = styled.section`
  .button {
    margin-top: 4rem;
  }
  .indexSection {
    padding: 10rem 0;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4em;
    .txt {
      display: flex;
      align-items: flex-start;
      line-height: 1;
      margin-right: 11rem;
      img {
        margin-top: 1.5rem;
      }
      .text {
        h1 {
          font-size: 4em;
        }
        .paragraph {
          margin-top: 0.6rem;
          line-height: 1.4;
        }
      }
    }
  }
  .secondSection {
    background-color: ${colors.primaryColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0 6rem;
    font-size: 1.5em;
    .head {
      h6 {
        margin-bottom: 15rem;
        text-align: center;
        font-size: 1.3em;
        font-family: 'OpenSans-Light', sans-serif;
      }
    }
    .box {
      display: flex;
      h1 {
        font-size: 1.7em;
      }
      p {
        font-size: 1.1em;
      }
    }
    .steps,
    .audience {
      margin-bottom: 10rem;
      img {
        margin-left: -20px;
      }
    }
    .audience {
      margin-bottom: 8rem;
    }
    .charge {
      align-items: center;
      margin-bottom: 15rem;
    }
    img {
      margin-right: -20px;
    }
  }
  .thirdSection {
    height: 700px;
    background: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 5rem 10rem 5rem 16rem;
    display: flex;
    align-items: center;
    .img-container {
      width: 250px;
      padding: 2rem;
      border: 1px solid ${colors.colorWhite};
      img {
        width: 100%;
      }
    }
    .txt {
      margin-left: 5rem;
      font-size: 1.4em;
      color: ${colors.colorWhite};
      line-height: 1.2;
      h1 {
        font-size: 2.8em;
      }
      h6 {
        font-size: 1.7em;
      }
      .text {
        margin-top: 1.5rem;
        line-height: 1.4;
        margin-bottom: 6rem;
        p {
          font-size: 1.2em;
        }
      }
      .button {
        margin-left: 25rem;
      }
    }
  }
  .fourthSection {
    display: flex;
    font-size: 1.4em;
    justify-content: center;
    align-items: center;
    padding: 8rem 0;
    background-color: ${colors.primaryColor};
    .txt {
      margin-right: 5rem;
      h3 {
        font-size: 1.5em;
      }
    }
    .video-container {
      width: 400px;
      height: 250px;
      .video-react.video-react-fluid,
      .video-react.video-react-16-9,
      .video-react.video-react-4-3 {
        height: 100% !important;
      }
    }
  }
  .fifthSection {
    padding: 5rem 0;
    font-size: 1.4em;
    height: 650px;
    .testimonial-slider-container {
      position: relative;
      .testimonial-control {
        img {
          position: absolute;
          top: 270px;
          cursor: pointer;
        }
        img:nth-child(1) {
          left: 70px;
        }
        img:nth-child(2) {
          right: 70px;
        }
      }
      .testimonial-intro {
        text-align: center;
        font-size: 1.5em;
      }
      .testimonial-slider {
        position: relative;
        margin: 0 auto;
        .slide {
          display: inline-block;
          position: absolute;
          transform-origin: 0px 0px;
          z-index: 100;
          transform: translate(410.5px, 76.5px) scale(1);
          background-color: ${colors.primaryColor};
          transition: transform 0.5s linear;
          width: 400px;
          text-align: center;
          min-height: 400px;
          .testimonial-image {
            width: 95px;
            height: 95px;
            overflow: hidden;
            border-radius: 100px;
            position: relative;
            margin: 0 auto;
            bottom: 45px;
          }

          .testimonial-info {
            .rating-section {
              font-size: 1.6rem;
              margin-left: 1rem;
              margin-right: 1rem;
              .rating {
                font-size: 1.5rem;
                fill: ${colors.colorBlack};
              }

              .rating:nth-child(5) {
                fill: #ddd;
              }
            }
            .name {
              h3 {
                font-size: 1.4em;
              }
            }
            .location {
              margin-bottom: 1.5rem;
            }
            .content {
              width: 50%;
              margin: 1rem auto 0;
            }
          }
        }
        .two {
          transform-origin: 0px 0px;
          z-index: 62;
          transform: translate(830.714px, 139.5px) scale(0.625);
          transition: transform 0.5s linear;
        }
        .three {
          transform-origin: 0px 0px;
          z-index: 62;
          transform: translate(140.786px, 139.5px) scale(0.625);
          transition: transform 0.5s linear;
        }
      }
    }
  }
  .sixthSection {
    background-color: ${colors.primaryColor};
    padding: 8rem 0;
    font-size: 1.4em;
    .faq {
      width: 60%;
      margin: 0 auto;
      .heading {
        background-color: ${colors.colorWhite};
        padding: 1rem 3rem;
        h1 {
          font-size: 1.4em;
        }
      }
    }
  }
`;

export default HomePage;
