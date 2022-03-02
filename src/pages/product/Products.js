import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import banner from '../../assets/img/07.png';
import Categories from '../../globals/toolbar/Categories';
import books from '../../data/books';
import ProductList from '../../components/ProductList';
import ProductFilter from '../../forms/ProductFilter';

export default function Products(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    window.scroll(0, 0);
    const category = props.match.params.category;
    const pair = props.match.params.pair;
    const book = books.filter(
      (book) => book.category.includes(category) || book.category.includes(pair)
    );
    category && pair ? setData(book) : setData(books);
  }, []);
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
        <div className="secondSection">
          <ProductFilter />
          <ProductList data={data} />
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  margin-bottom: 8rem;
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
      height: fit-content;
      h1 {
        font-size: 1.7em;
      }
      p {
        margin-top: 0.6em;
      }
    }
  }
  .secondSection {
    width: 90%;
    display: grid;
    margin: 0 auto;
    grid-template-columns: 240px 3fr;
    grid-column-gap: 1rem;
    justify-content: center;
  }
`;
