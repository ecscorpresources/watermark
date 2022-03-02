import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import cart from '../../assets/img/8.png';
import colors from '../../config/colors';
import dropdown from '../../assets/img/29.png';
import logo from '../../assets/img/logo.png';
import { Search } from '../../components/styledComponents';

function Toolbar() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => {
    window.location.href = '/';
  };

  return (
    <Wrapper>
      <div className="logo">
        <img src={logo} alt="logo" onClick={handleClick} />
      </div>
      <div className="links">
        <ul>
          <li>
            <Link to="/products">Reading Club</Link>
          </li>
          <li>
            <Link to="/publish">Self Publishing</Link>
          </li>
          <li>
            <Search
              type="text"
              search
              placeholder="Type name of book"
              radius="50px"
              width="40rem"
            />
          </li>
          <div className="right">
            <li className="signin">
              <Link to="/signin">Sign in</Link>
              <img
                src={dropdown}
                alt="dropdown png"
                onClick={() => setShow(!show)}
              />
            </li>
            <li className={show ? 'signup show' : 'signup'}>
              <Link to="/signup" onClick={() => setShow(false)}>
                Sign up
              </Link>
            </li>
            <li className="cart">
              <img src={cart} alt="cart icon png" />
              <p>0</p>
            </li>
          </div>
        </ul>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  align-items: center;
  color: ${colors.colorWhite};
  background: ${colors.navBar};
  display: flex;
  font-size: 1.3em;
  padding: 0.6rem 6rem 0.6rem 6rem;
  .logo {
    cursor: pointer;
    margin-right: 6rem;
  }
  .links {
    width: 100%;
    ul {
      align-items: center;
      display: flex;
      position: relative;
      .right {
        align-items: center;
        display: flex;
        margin-left: auto;
        .cart {
          align-items: center;
          display: flex;
          background-color: ${colors.buttonBackground};
          border-radius: 50px;
          padding: 0.5rem 1.4rem;
          img {
            margin-right: 1rem;
          }
        }
      }
      .signup {
        position: absolute;
        background-color: ${colors.colorWhite};
        top: 30px;
        padding: 1rem;
        cursor: pointer;
        display: none;
      }
      .show {
        display: block;
      }
      .signin {
        img {
          margin-left: 1rem;
          cursor: pointer;
        }
      }
      li {
        font-weight: 700;
        padding-bottom: 0.3rem;
        a {
          color: ${colors.buttonBackground};
          font-weight: bold;
          text-decoration: none;
        }
        input {
          margin-left: 3rem;
          margin-bottom: 0 !important;
        }
      }
      li:not(:last-child) {
        margin-right: 3rem;
      }
    }
  }
`;

export default Toolbar;
