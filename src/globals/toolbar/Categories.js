import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../config/colors';

export default function Categories() {
  const handleClick = (url) => {
    window.location.href = url;
  };
  return (
    <Wrapper>
      <ul>
        <li onClick={() => handleClick('/products/Biography/Non-Fiction')}>
          Biography & Non-Fiction
        </li>
        <li onClick={() => handleClick('/products/Business/Finance')}>
          Business & Finance
        </li>
        <li>
          <Link to="/products/Comic/Graphic">Comic & Graphic</Link>
        </li>
        <li onClick={() => handleClick('/products/Education/Textbook')}>
          Education & Textbook
        </li>
        <li onClick={() => handleClick('/products/Kids/Teens')}>
          Kids & Teens
        </li>
        <li onClick={() => handleClick('/products/Fiction/Romance')}>
          Fiction & Romance
        </li>
        <li onClick={() => handleClick('/products/Sci-Fi/Fantasy')}>
          Sci-Fi & Fantasy
        </li>
        <li onClick={() => handleClick('/products/Suspense/Espionage')}>
          Suspense & Espionage
        </li>
        <li onClick={() => handleClick('/products/Horror/Thriller')}>
          Horror & Thriller
        </li>
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: ${colors.primaryColor};
  border-left: 1px solid ${colors.primaryColor};
  border-right: 1px solid ${colors.primaryColor};
  color: ${colors.buttonBackground};
  font-size: 1.2em;
  padding: 2.5rem 1rem 2.5rem 1rem;
  ul {
    display: flex;
    justify-content: center;
    li {
      font-weight: 600;
      cursor: pointer;
      a {
        text-decoration: none;
        color: inherit;
      }
    }
    li:not(:last-child) {
      margin-right: 2rem;
    }
  }
`;
