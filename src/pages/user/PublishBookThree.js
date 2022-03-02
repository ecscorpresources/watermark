import React from 'react';
import styled from 'styled-components';
import {
  EQUALGRID,
  GRID,
  HALFGRID,
  PrimaryButton,
  Select,
  TextInput,
  THREEHALFGRID,
} from '../../components/styledComponents';
import colors from '../../config/colors';
import back from '../../assets/img/42.png';

function PublishBookThree({ changeActive }) {
  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Wrapper>
      <form>
        <div className="upload">
          <div
            className="back"
            onClick={() => {
              changeActive('two');
            }}
          >
            <img src={back} alt="back button png" />
            <p>Back to Previous</p>
          </div>
          <h3>Pricing & Payee</h3>
        </div>
        <article className="divisionOne">
          <HALFGRID>
            <label htmlFor="location">
              Set Location where you want your book sold
            </label>
            <Select>
              <option value="Afghanistan">Afghanistan</option>
            </Select>
          </HALFGRID>
          <THREEHALFGRID>
            <div className="box">
              <label htmlFor="ebook">Set Ebook Price</label>
              <TextInput type="text" />
            </div>
            <div className="box">
              <label htmlFor="ebook">Set Paperback Price</label>
              <TextInput type="text" />
            </div>
            <div className="box">
              <label htmlFor="ebook">Set Hardback Price</label>
              <TextInput type="text" />
            </div>
          </THREEHALFGRID>
        </article>
        <article className="divisionTwo">
          <div className="heading">
            <h3>Enter Payee Information</h3>
            <EQUALGRID>
              <TextInput type="text" placeholder="First Name" />
              <TextInput type="text" placeholder="Last Name" />
            </EQUALGRID>
            <EQUALGRID>
              <TextInput type="email" placeholder="Email" />
              <TextInput type="text" placeholder="Phone No" />
            </EQUALGRID>
            <EQUALGRID>
              <Select>
                <option value="country">Country</option>
              </Select>
              <TextInput type="text" placeholder="State/Province/LGA" />
            </EQUALGRID>
            <GRID>
              <TextInput type="text" placeholder="Address" />
            </GRID>
            <EQUALGRID>
              <TextInput type="text" placeholder="Postal Code" />
              <Select>
                <option value="USD">USD</option>
              </Select>
            </EQUALGRID>
            <div className="payment">
              <h3>Payment Portal</h3>
              <div className="cont">
                <div className="box">
                  <input type="checkbox" name="card" className="rounded" />
                  <label htmlFor="card">Credit Card</label>
                </div>
                <div className="box">
                  <input type="checkbox" name="paypal" className="rounded" />
                  <label htmlFor="paypal">Paypal</label>
                </div>
                <div className="box">
                  <input
                    type="checkbox"
                    name="Flutterwave"
                    className="rounded"
                  />
                  <label htmlFor="card">Flutterwave</label>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className="divisionThree">
          <p>You currently have no Payee Information entered yet</p>
        </article>
        <div className="button">
          <PrimaryButton hallwidth>Publish Book</PrimaryButton>
        </div>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  form {
    background-color: ${colors.primaryColor};

    color: ${colors.textColor};
    width: 70%;
    margin: 3rem auto;
    label {
      font-weight: bold;
      margin-left: 0.5rem;
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

    .button {
      margin-top: 4rem;
      padding: 0rem 8rem 3rem 8rem;
      font-size: 1.3em;
    }
    .upload {
      display: flex;
      align-items: flex-start;
      padding: 3rem 8rem 0rem 5rem;
      .back {
        display: flex;
        align-items: center;
        cursor: pointer;
        p {
          margin-left: 1rem;
        }
      }
      h3 {
        text-align: center;
        font-size: 1.3em;
        margin-bottom: 2rem;
        margin-left: 14rem;
        font-weight: bolder;
      }
    }
    .divisionOne {
      padding: 3rem 8rem 5rem 8rem;
      border-bottom: 1px solid ${colors.borderColor};
      .box {
        margin-top: 2rem;
      }
    }
    .divisionTwo {
      padding: 3rem 8rem 5rem 8rem;
      border-bottom: 1px solid ${colors.borderColor};
      .heading {
        h3 {
          font-size: 1.3em;
          margin-bottom: 2rem;
          font-weight: bolder;
        }
      }
      .payment {
        margin-top: 2rem;
        h3 {
          margin-bottom: 1rem;
        }
        .cont {
          display: flex;
          .box:not(:last-child) {
            margin-right: 4rem;
          }
          .box {
            display: flex;
            align-items: center;
            label {
              font-weight: lighter;
            }
          }
        }
      }
    }
    .divisionThree {
      padding: 3rem 8rem 3rem 8rem;
    }
  }
`;

export default PublishBookThree;
