import React from 'react';
import styled from 'styled-components';

import addIcon from '../../assets/img/30.png';
import {
  EQUALGRID,
  GRID,
  HALFGRID,
  PrimaryButton,
  Select,
  TextArea,
  TextInput,
} from '../../components/styledComponents';
import close from '../../assets/img/35.png';
import colors from '../../config/colors';

function PublishBookOne({ changeActive }) {
  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Wrapper>
      <form>
        <h3>Fill in the book details</h3>
        <EQUALGRID>
          <TextInput type="text" placeholder="Book Title" />
          <TextInput type="text" placeholder="Sub-Title" />
        </EQUALGRID>
        <EQUALGRID>
          <Select>
            <option>Country</option>
          </Select>
          <Select>
            <option>Language</option>
          </Select>
        </EQUALGRID>
        <EQUALGRID>
          <div className="box">
            <label htmlFor="name">Author/Pseudo Name</label>
            <TextInput type="text" placeholder="First Name" />
          </div>
          <TextInput type="text" placeholder="First Name" />
        </EQUALGRID>
        <div className="contributors">
          <EQUALGRID>
            <PrimaryButton>Add Other Contributor</PrimaryButton>
            <Select>
              <option value="author">By Author</option>
            </Select>
          </EQUALGRID>
          <EQUALGRID>
            <TextInput type="text" placeholder="First Name" />
            <TextInput type="text" placeholder="Last Name" />
          </EQUALGRID>
          <div className="forward">
            <div className="box">
              <p>
                1. <span>Forwarded by: </span>
                Israel Edward
              </p>
              <img src={close} alt="close png" />
            </div>
            <div className="box">
              <p>
                2. <span>Forwarded by: </span>
                Israel Edward
              </p>
              <img src={close} alt="close png" />
            </div>
          </div>
        </div>
        <GRID>
          <TextArea placeholder="Book Synopsis" cols="30" rows="10" />
        </GRID>
        <HALFGRID>
          <TextInput
            type="text"
            placeholder="Input Keywords"
            className="keywords"
          />
          <div className="words">
            <p>Search</p>
            <p>Search</p>
          </div>
        </HALFGRID>
        <GRID>
          <div className="policy">
            <input type="checkbox" name="copyright" className="rounded" />
            <label htmlFor="copyright">
              I own the copyright & necessary publishing right
            </label>
          </div>
          <div className="policy">
            <input type="checkbox" name="public" className="rounded" />
            <label htmlFor="copyright">This is public domain work</label>
          </div>
        </GRID>
        <div className="button">
          <PrimaryButton
            hallwidth
            onClick={() => {
              changeActive('two');
            }}
          >
            Save & Proceed
          </PrimaryButton>
        </div>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  form {
    background-color: ${colors.primaryColor};
    padding: 3rem 8rem;
    color: ${colors.textColor};
    width: 70%;
    margin: 3rem auto;
    h3 {
      text-align: center;
      font-size: 1.3em;
      margin-bottom: 2rem;
    }
    .button {
      margin-top: 4rem;
    }
    .policy {
      display: flex;
      align-items: center;
      margin-bottom: 0.5rem;
      label {
        margin-left: 1rem;
      }
      .rounded {
        width: 1.3em;
        height: 1.3em;
        background-color: ${colors.colorWhite};
        border-radius: 50%;
        vertical-align: middle;
        border: 1px solid ${colors.colorGreyDark};
        -webkit-appearance: none;
        outline: none;
        cursor: pointer;
      }
      .rounded:checked {
        background-color: ${colors.institutionColor};
        border: 1px solid ${colors.colorBlack};
      }
    }
    .keywords {
      background: url(${addIcon});
      background-repeat: no-repeat;
      background-position: 97% center;
      background-color: ${colors.colorWhite};
    }
    .words {
      p {
        margin: 0.7rem 0.5rem;
        background-color: ${colors.colorGreyDark};
        width: fit-content;
        padding: 0.6rem;
        color: ${colors.colorWhite};
      }
    }
    .contributors {
      background-color: ${colors.colorGrey};
      padding: 2rem 3rem;
      margin: 4rem 0;
      input,
      select {
        border: 1px solid ${colors.colorBlack};
      }
      button {
        background-color: ${colors.colorLightGreen};
        padding: 1.6rem 10px;
        border-radius: 6px;
      }
      .forward {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 6px;
        width: 100%;
        .box {
          display: flex;
          align-items: center;
          background-color: ${colors.primaryColor};
          padding: 1.5rem 10px;
          img {
            margin-left: auto;
          }
          p {
            span {
              font-weight: bold;
            }
          }
        }
      }
    }
  }
`;

export default PublishBookOne;
