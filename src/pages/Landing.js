import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Slider from 'react-slick';

import bg from '../assets/img/01.png';
import banner from '../assets/img/06.png';
import colors from '../config/colors';
import Categories from '../globals/toolbar/Categories';
import topbooks from '../data/topbooks';

const sliders = () => {
  return topbooks.map((book, index) => (
    <div className="book" key={index}>
      <img src={book.img} alt="book" />
      <div className="txt">
        <h5>{book.title}</h5>
        <p>{book.author}</p>
      </div>
      <div className="box">
        <div className="type">
          {book.type.map((res, i) => (
            <p key={i}>{res}</p>
          ))}
        </div>
        <div className="buy">
          <Link to="/read">Read</Link>
          <Link to={`/product/${book.id}`}>Buy</Link>
        </div>
      </div>
    </div>
  ));
};

export default function Landing() {
  var settings = {
    className: 'slider variable-width',
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    prevButton: false,
    nextButton: false,
    autoplaySpeed: 2000,
    variableWidth: true,
  };
  const changeRoute = (url) => {
    window.location.href = url;
  };
  return (
    <Wrapper>
      <Categories />
      <div className="indexSection">
        <div className="txt">
          <h1>Read & Buy</h1>
          <p>from a wide array of authors</p>
        </div>
      </div>
      <div className="secondSection">
        <div className="box" onClick={() => changeRoute('/products')}>
          <h1>Buy</h1>
          <p>ebooks and paperback and have it</p>
          <p>delivered whenever you are</p>
        </div>
        <div className="box" onClick={() => changeRoute('/publish')}>
          <h1>Publish</h1>
          <p>for free watch your book trend and</p>
          <p>begin to earn with ease</p>
        </div>
        <div className="box" onClick={() => changeRoute('/products')}>
          <h1>Read</h1>
          <p>from our vast collections of interesting</p>
          <p>books from vibrant authors</p>
        </div>
      </div>
      <div className="thirdSection">
        <h1>Top 10 Most Read Books</h1>
        <div className="most">
          <Slider {...settings}>{sliders()}</Slider>
        </div>
        <div className="banner">
          <h6>Share Your thoughts</h6>
          <p>In A Book</p>
          <h6>and Earn Cash</h6>
          <Link to="/publish">Publish that book</Link>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .indexSection {
    align-items: flex-end;
    background: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: ${colors.colorWhite};
    display: flex;
    font-family: 'AvertaDemo-Reg';
    flex-direction: column;
    font-size: 1.6em;
    height: 60vh;
    justify-content: center;
    margin-bottom: 5rem;
    padding-right: 18rem;
    .txt {
      h1 {
        font-size: 2em;
      }
    }
  }
  .secondSection {
    color: ${colors.textColor};
    display: grid;
    grid-template-columns: 300px 300px 300px;
    grid-column-gap: 2rem;
    font-size: 1.6em;
    justify-content: center;
    margin: 0 auto 5rem;
    h1 {
      font-size: 1.5em;
    }
    .box {
      padding: 2rem;
      cursor: pointer;
      h1 {
        margin-bottom: 1rem;
      }
      p {
        font-size: 0.9em;
      }
    }
    .box:nth-child(1) {
      background: ${colors.secondaryColor};
    }
    .box:nth-child(2) {
      background: ${colors.tertiaryColor};
    }
    .box:nth-child(3) {
      background: ${colors.institutionColor};
    }
  }
  .thirdSection {
    background-color: ${colors.primaryColor};
    display: grid;
    font-size: 1.4em;
    padding: 3rem 10rem 6rem;
    h1 {
      font-size: 1.7em;
      font-family: 'Libre Baskerville', sans-serif;
      margin: 0 auto 2rem;
      width: 90%;
    }
    .banner {
      background: url(${banner});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      color: ${colors.colorWhite};
      height: 60vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      line-height: 1.2;
      h6 {
        font-size: 2.5em;
        text-align: center;
        font-family: 'OpenSans-Light', sans-serif;
        margin-block-start: 0;
        margin-block-end: 0;
      }
      h6:nth-child(1) {
        margin-bottom: 0.6rem;
      }
      p {
        font-size: 2.5em;
        font-family: 'LeagueSpartan-Bold';
      }
      a {
        border: 1px solid ${colors.colorWhite};
        border-radius: 50px;
        background: transparent;
        color: ${colors.colorWhite};
        font-family: 'AvertaDemo-Reg';
        text-decoration: none;
        margin-top: 3rem;
        padding: 0.4rem 2rem;
        font-size: 1.5em;
      }
    }
    .most {
      color: ${colors.buttonBackground};
      overflow: hidden;
      margin: 0 auto 5rem;
      width: 90%;
      .slick-track {
        display: flex;
        justify-content: space-between;
      }
      .slick-arrow {
        display: none !important;
      }
      .book {
        align-items: center;
        display: flex;
        background-color: ${colors.colorWhite};
        flex-direction: column;
        font-size: 0.9em;
        padding: 2rem 3rem 1rem;
        /* margin-right: 1rem; */
        width: 240px;
        .txt {
          margin: 1.5rem 0;
          width: 95%;
        }
        .box {
          align-items: center;
          display: flex;
          justify-content: space-between;
          margin-top: auto;
          width: 95%;
          .type {
            /* margin-right: 2rem; */
          }
          .buy {
            align-items: center;
            display: flex;
            flex-direction: column;
            a {
              color: ${colors.textColor};
              display: block;
            }
            a:nth-child(2) {
              border-radius: 8px;
              background-color: ${colors.buttonBackground};
              color: ${colors.colorWhite};
              text-decoration: none;
              margin-top: 0.4rem;
              padding: 0.4rem 1.5rem;
            }
          }
        }
      }
    }
  }
`;
