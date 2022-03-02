import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import colors from '../config/colors';

function ProductList({ data }) {
  console.log(data[0]);
  return (
    <>
      <Wrapper>
        {data
          ? data.map((book, index) => {
              return <Book key={index} book={book} />;
            })
          : []}
      </Wrapper>
    </>
  );
}

const Book = ({ book }) => {
  return (
    <div className="book">
      <article className="about">
        <div className="read">
          <Link to="/read">Read More</Link>
        </div>
        <div className="img-container">
          <img src={book.img} alt="bird png" />
        </div>
        <div className="box">
          <div className="txt">
            <p>{book.description}</p>
          </div>
          <div className="title">
            <h5>{book.title}</h5>
            <p>{book.author}</p>
          </div>
          <div className="type">
            {book.type
              ? book.type.map((type, index) => {
                  return <p key={index}>{type}</p>;
                })
              : ''}
          </div>
        </div>
      </article>
      <article className="price">
        <p>
          N{book.price ? book.price.ebook : ''} <span>For Ebook</span>
        </p>
        <Link to={`/product/${book.id}`}>Buy</Link>
      </article>
    </div>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 230px 230px 230px 230px;
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
  color: ${colors.textColor};
  .book {
    font-family: 'AvertaDemo-Reg';
    .about {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: ${colors.primaryColor};
      padding: 1rem 2rem;
      font-size: 1.2em;
      margin: 1rem auto;
      .read {
        margin-bottom: 1rem;
        a {
          color: ${colors.colorBlack};
        }
      }
      .img-container {
        margin-bottom: 1rem;
      }
      .box {
        margin-top: auto;
        p {
          font-size: 0.9em;
        }
        .txt {
          margin-bottom: 1rem;
        }
        .title {
          margin-bottom: 4rem;
          h5 {
            font-size: 1.2em;
            font-family: 'Open sans';
          }
        }
      }
      .type {
        display: flex;
        p:not(:last-child) {
          margin-right: 1.5rem;
        }
      }
    }
    .price {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      font-size: 1.4em;
      border: 3px solid ${colors.primaryColor};
      P {
        span {
          font-size: 0.6em;
        }
      }
      a {
        border-radius: 8px;
        background-color: ${colors.buttonBackground};
        color: ${colors.colorWhite};
        text-decoration: none;
        margin-top: 0.4rem;
        padding: 0.4rem 1.5rem;
      }
    }
  }
`;

export default ProductList;
