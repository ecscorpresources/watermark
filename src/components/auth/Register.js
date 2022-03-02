import React, { useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import Categories from '../../globals/toolbar/Categories';
import colors from '../../config/colors';

const Register = () => {
  const [state, setState] = useState({ value: 'student' });
  const handleClick = (e) => {
    e.preventDefault();
    window.location.href = '/';
  };

  const handleChange = (e) => {
    setState({ ...state, value: e.target.value });
  };
  return (
    <>
      <Wrapper>
        <Categories />
        <section className="login">
          <form>
            <div className="form-header">
              <h1>Register</h1>
              <p>
                Already have an account? <a href="/signin">Login Here</a>
              </p>
            </div>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="First Name"
            />
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Last Name"
            />
            <input type="email" name="email" id="email" placeholder="Email" />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <input
              type="password"
              name="confirm_password"
              id="confirm_password"
              placeholder="Confirm Password"
            />
            <div className="policy">
              <input type="checkbox" name="policy" />
              <label htmlFor="policy">
                I have read and agreed to the Terms & Conditions of Monkhey and
                Watermarks
              </label>
            </div>
            <button onClick={handleClick}>SIGNUP</button>
            <p>Signing up with Watermarks gets you signed up</p>
            <p>on all Monkhey services</p>
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
      padding: 4rem 6rem;
      background-color: ${colors.primaryColor};
      margin: 0 auto;
      width: 45%;
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

      .policy {
        display: flex;
        align-items: center;
        margin-top: 1rem;
        input[type='checkbox'] {
          width: 10%;
        }
        label {
          margin-left: 1rem;
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
        margin: 3rem 0 1rem;
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

export default withRouter(Register);
