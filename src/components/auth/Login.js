import React, { useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import Categories from '../../globals/toolbar/Categories';
import colors from '../../config/colors';

const Login = () => {
  const [state, setState] = useState({ value: 'student' });
  const handleClick = (e) => {
    e.preventDefault();
    window.location.href = '/dashboard';
  };

  const handleChange = (e) => {
    setState({ ...state, value: e.target.value });
  };
  return (
    <>
      <Categories />
      <Wrapper>
        <section className="login">
          <form>
            <div className="form-header">
              <h1>Login</h1>
              <p>
                Don't have an account? <a href="/signup">Register Here</a>
              </p>
            </div>
            <input type="email" name="email" id="email" placeholder="Email" />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <div className="form-footer">
              <p>Forgot Password</p>
            </div>
            <button onClick={handleClick}>LOGIN</button>
          </form>
        </section>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  section.login {
    width: 80%;
    margin: 6rem auto;
    color: ${colors.textColor};
    font-size: 1.4em;
    form {
      display: flex;
      flex-direction: column;
      padding: 4rem;
      background-color: ${colors.primaryColor};
      margin: 0 auto;
      width: 40%;
      .form-header {
        margin-bottom: 2rem;
        h1 {
          font-family: 'Open Sans';
          font-weight: bolder;
          font-size: 1.8em;
          margin-bottom: 0.5rem;
        }
        p {
          a {
            color: #f58634;
            cursor: pointer;
            margin-left: 0.3rem;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }

      input {
        display: block;
        padding: 1.5rem 3rem;
        margin-bottom: 1rem;
        width: 100%;
        border-radius: 6px;
        border: 1px solid ${colors.textColor};
      }
      input::placeholder {
        color: #606c86;
        opacity: 0.5;
      }

      :-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        color: #606c86;
      }

      ::-ms-input-placeholder {
        /* Microsoft Edge */
        color: #606c86;
      }
      input:focus {
        outline: none;
      }
      .form-footer {
        margin-left: auto;
        margin-bottom: 3rem;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
      button {
        background: ${colors.textColor};
        padding: 1.5rem 1rem;
        color: white;
        cursor: pointer;
        border-radius: 6px;
        font-weight: bold;
        border: none;
        &:focus {
          outline: none;
        }
        &:hover {
          border: 1px solid #094a6a;
          color: #094a6a;
          background-color: #fff;
        }
      }
    }
  }
`;

export default withRouter(Login);
