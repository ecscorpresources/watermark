import React from 'react';
import styled from 'styled-components';

import top from '../assets/img/top.png';
import contact from '../assets/img/contactus.png';
import { Link } from 'react-router-dom';

const ScrollArrow = () => {
  const [show, setShow] = React.useState(false);
  const [showScroll, setShowScroll] = React.useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 300) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 300) {
      setShowScroll(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <Wrapper>
      <div className="fixed">
        <ul>
          <li className="fixed__item fixed__item--monkhey fixed__shadow">
            <div className="fixed__monkhey--outer">
              <div
                className="fixed__monkhey"
                onClick={() =>
                  (window.location.href = 'http://moon.ecscorppoc.com/')
                }
              >
                MONKHEY
              </div>
            </div>
          </li>
          <li
            className="fixed__item fixed__shadow"
            onMouseEnter={() => {
              setShow(true);
            }}
            onMouseLeave={() => {
              setShow(false);
            }}
          >
            <Link className="fixed__link">
              <img src={contact} alt="headset icon png" />
              {show ? (
                <div className="fixed__tip fixed__tip--service">Live Chat</div>
              ) : null}
            </Link>
          </li>
          {showScroll ? (
            <li className="fixed__item fixed__shadow" onClick={scroll}>
              <Link className="fixed__link">
                <img src={top} alt="top icon png" />
              </Link>
            </li>
          ) : null}
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .fixed {
    position: fixed;
    right: 0px;
    bottom: 20%;
    z-index: 499;
    background-color: #fff;
    box-shadow: -0.06rem 0px 0.8rem rgba(0, 0, 0, 0.2);
    font-size: 0.9em;
    ul {
      margin-bottom: 0 !important;
    }

    &__item:not(:last-child) {
      border-bottom: 1px solid #ddd;
    }

    &__item {
      padding: 0.5rem 0;
      cursor: pointer;
    }
    &__monkhey {
      writing-mode: tb-rl;
      transform: rotate(-180deg);
      font-size: 1.33em;
      text-transform: capitalize;
      font-family: 'avertaDemo';
      font-weight: bold;
    }

    &__monkhey--outer {
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.5rem 0;
    }

    &__item--monkhey {
      position: relative;
      background-color: #ffc938;
    }
    &__link {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 30px;
      min-height: 30px;
      background-color: #fff;
      text-align: center;
    }
    &__tip {
      position: absolute;
      right: 3.8rem;
      box-shadow: 0 0 0.08rem rgba(0, 0, 0, 0.3);
      text-align: center;
      color: #000;
      top: 0;
    }
    &__tip--service {
      min-width: 1rem;
      padding: 1rem 1rem;
      background: #fff;
      font-size: 14px;
      white-space: nowrap;
    }
  }
`;
export default ScrollArrow;
