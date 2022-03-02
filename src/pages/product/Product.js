import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GrStar } from 'react-icons/gr';

import banner from '../../assets/img/07.png';
import books from '../../data/books';
import Categories from '../../globals/toolbar/Categories';
import cart from '../../assets/img/8.png';
import colors from '../../config/colors';
import useActive from '../../hooks/useActive';
import Desc from './Desc';
import Review from '../Review';
import Author from './Author';
import close from '../../assets/img/35.png';
import { BtnLink } from '../../components/styledComponents';

function Product(props) {
  const [data, setData] = useState({});
  const [active, changeActive] = useActive(['author', 'desc', 'review']);

  useEffect(() => {
    window.scroll(0, 0);
    const id = props.match.params.id;
    const book = books.filter((book) => {
      return book.id == id;
    });
    setData(book[0]);
  }, []);

  return (
    <Wrapper>
      <Categories />
      <div className="banner">
        <div className="txt">
          <h1>A story about</h1>
          <h1>The Honest Black Fighter</h1>
          <p>A Biography Of An American President</p>
        </div>
      </div>
      <div className="secondSection">
        <div className="container one">
          <div className="img-container">
            <img src={data.img2} alt="book png" />
          </div>
          <div className="box">
            <div className="title">
              <div className="title__category">
                <h1>{data.title}</h1>
                <div className="rating-section">
                  <GrStar className="rating" />
                  <GrStar className="rating" />
                  <GrStar className="rating" />
                  <GrStar className="rating" />
                  <GrStar className="rating" />
                </div>
                <p>{data.category ? data.category[0] : ''}</p>
              </div>
              <p>{data ? data.author : ''}</p>
            </div>
            <div className="description">
              <p>{data ? data.description : ''}</p>
            </div>
            <div className="bottom">
              <div className="type">
                <div>
                  <div className="ebook cont">
                    <input type="checkbox" name="ebook" id="" />
                    <label htmlFor="ebook">Ebook</label>
                  </div>
                  <div className="paperback cont">
                    <input type="checkbox" name="paperback" id="" />
                    <label htmlFor="paperback">Paperback</label>
                  </div>
                  <div className="hardback cont">
                    <input type="checkbox" name="hardback" id="" />
                    <label htmlFor="hardback">Hardback</label>
                  </div>
                </div>{' '}
                <div className="price">
                  <p>N {data.price ? data.price.ebook : ''} </p>
                  <p>N {data.price ? data.price.paperbook : ''}</p>
                  <p>N {data.price ? data.price.hardback : ''}</p>
                </div>
              </div>
              <div className="link">
                <BtnLink>
                  <img src={cart} alt="cart png" />
                  Add to Cart
                </BtnLink>
              </div>
            </div>
          </div>
        </div>
        <div className="container two">
          <div className="tab">
            <div className="heading">
              <p
                className={
                  typeof active !== 'undefined' && active.author ? 'active' : ''
                }
                onClick={() => changeActive('author')}
              >
                About Author
              </p>
              <p
                className={
                  typeof active !== 'undefined' && active.desc ? 'active' : ''
                }
                onClick={() => changeActive('desc')}
              >
                Book Description
              </p>
              <p
                className={
                  typeof active !== 'undefined' && active.review ? 'active' : ''
                }
                onClick={() => changeActive('review')}
              >
                Review
              </p>
            </div>
            <div className="tabContent">
              {typeof active !== 'undefined' && active.author ? (
                <Author />
              ) : typeof active !== 'undefined' && active.desc ? (
                <Desc />
              ) : (
                <Review />
              )}
            </div>
          </div>
          <div className="cart">
            <div className="head">
              <h1>Shopping Cart</h1>
              <p>4 items</p>
            </div>
            <div className="box">
              <h1>Summer Bird Blue</h1>
              <table>
                <tbody>
                  <tr>
                    <td>Ebook</td>
                    <td>N177</td>
                    <td></td>
                    <td>
                      <img src={close} alt="close button png" />
                    </td>
                  </tr>
                  <tr>
                    <td>Ebook</td>
                    <td>N177</td>
                    <td>
                      <select name="num">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                      </select>
                    </td>
                    <td>
                      <img src={close} alt="close button png" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="box">
              <h1>Dragon Spring Road</h1>
              <table>
                <tbody>
                  <tr>
                    <td>Ebook</td>
                    <td>N177</td>
                    <td></td>
                    <td>
                      <img src={close} alt="close button png" />
                    </td>
                  </tr>
                  <tr>
                    <td>Ebook</td>
                    <td>N177</td>
                    <td>
                      <select name="num">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                      </select>
                    </td>
                    <td>
                      <img src={close} alt="close button png" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="total">
              <p>Total</p>
              <p>N6095</p>
            </div>
            <div className="button">
              <BtnLink>Move to Checkout</BtnLink>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .banner {
    background: url(${banner});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: initial;
    height: 170px;
    margin-bottom: 10rem;
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
  .secondSection {
    padding: 0 4rem;
    width: 85%;
    margin: 0 auto 4rem;
    .two {
      display: grid;
      grid-template-columns: 3fr 280px;
      grid-column-gap: 2.5rem;
      margin-top: 3rem;
      .cart {
        border: 1px solid ${colors.borderColor};
        font-size: 1.4em;
        background-color: ${colors.primaryColor};
        .head {
          padding: 1.5rem 2rem;
          background-color: ${colors.colorLightGreen};
          color: ${colors.colorWhite};
          display: flex;
          align-items: flex-end;
          p {
            font-size: 0.8em;
            margin-left: auto;
            text-decoration: underline;
          }
          h1 {
            font-size: 1.3em;
          }
        }
        .box {
          padding: 1.5rem 1rem 1.5rem 2rem;
          border-bottom: 1px solid ${colors.borderColor};
          h1 {
            margin-bottom: 0.5rem;
          }
          select {
            padding: 0.3em 0.5em;
          }
          table tr td {
            padding: 5px 15px 5px 8px;
          }
        }
        table tr td:nth-child(1) {
          padding-right: 30px;
        }
        .total {
          padding: 1.5rem 2rem;
          display: flex;
          justify-content: space-between;
          margin-bottom: 4rem;
          p {
            font-size: 1.2em;
            font-weight: bold;
          }
        }
        .button {
          margin: 0 auto 1.5rem;
          text-align: center;
          a {
            border-radius: 8px;
            background-color: ${colors.buttonBackground};
          }
        }
      }

      .tab {
        background-color: ${colors.primaryColor};
        color: ${colors.textColor};
        font-size: 1.4em;
        height: 300px;
        overflow-y: scroll;
        .heading {
          padding: 1.5rem 0rem 1rem;
          border-bottom: 1px solid ${colors.borderColor};
          display: flex;
          justify-content: space-evenly;
          p {
            font-size: 1.4em;
            cursor: pointer;
          }
          .active {
            border-bottom: 2px solid ${colors.textColor};
          }
        }
        .author,
        .desc,
        .review {
          padding: 2rem 4rem;
        }
      }
    }
    .one {
      display: grid;
      grid-template-columns: 1fr 3fr;
      grid-column-gap: 2.5rem;
      .box {
        background-color: ${colors.primaryColor};
        padding: 2rem 3rem;
        font-size: 1.6em;
        color: ${colors.textColor};
        display: flex;
        flex-direction: column;
        .title {
          margin-bottom: 1.5rem;
          &__category {
            display: flex;
            h1 {
              margin-right: 3rem;
              font-size: 1.3em;
            }
            p {
              margin-left: auto;
            }
            .rating-section {
              font-size: 1.6rem;
              margin-left: 1rem;
              margin-right: 1rem;
              .rating {
                font-size: 1.5rem;
                fill: #f58634;
              }

              .rating:nth-child(5) {
                fill: #ddd;
              }
              .rating-number {
                display: inline-block;
                margin-left: 1rem;
              }
            }
          }
        }
        .description {
          width: 80%;
        }
      }
      .bottom {
        margin-top: auto;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        .type {
          display: flex;
          .cont {
            margin-right: 3rem;
            label {
              margin-left: 1rem;
            }
          }
        }
        .link {
          a {
            background-color: ${colors.buttonBackground};
            border-radius: 8px;
            display: flex;
            align-items: center;
            img {
              margin-right: 1rem;
            }
          }
        }
      }
    }
  }
`;

export default Product;
