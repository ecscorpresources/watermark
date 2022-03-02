import React from 'react';
import styled from 'styled-components';

import {
  BtnLink,
  EQUALGRID,
  GRID,
  HALFGRID,
  PrimaryButton,
  Select,
  TextInput,
} from '../../components/styledComponents';
import colors from '../../config/colors';
import icon from '../../assets/img/29.png';
import { Link } from 'react-router-dom';

function ProfileEdit() {
  return (
    <Wrapper>
      <form>
        <div className="header">
          <h1>Edit Profile</h1>
          <Link to="/dashboard">Back to Dashboard</Link>
        </div>
        <HALFGRID>
          <Select>
            <option value="Country">Country</option>
          </Select>
        </HALFGRID>
        <EQUALGRID>
          <TextInput type="text" placeholder="First Name" />
          <TextInput type="text" placeholder="Last Name" />
        </EQUALGRID>
        <EQUALGRID>
          <div className="box">
            <TextInput type="text" placeholder="Phone No" />
            <Select className="phone">
              <option>+234</option>
            </Select>
          </div>
          <TextInput type="email" placeholder="Email" />
        </EQUALGRID>
        <GRID>
          <TextInput type="text" placeholder="Address" />
        </GRID>
        <EQUALGRID>
          <TextInput type="text" placeholder="State" />
          <TextInput type="text" placeholder="City" />
        </EQUALGRID>
        <div className="button">
          <PrimaryButton hallwidth>Update Profile</PrimaryButton>
        </div>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 5rem;
  margin: 0 auto;
  form {
    width: 60%;
    background-color: ${colors.primaryColor};
    padding: 4rem;
    font-size: 1.5em;
    margin: 0 auto;
    .header {
      margin-bottom: 2rem;
      h1 {
        font-size: 1.5em;
        color: ${colors.buttonBackground};
      }
      a {
        background-color: transparent;
        font-size: 0.8em;
        color: ${colors.colorBlack};
        padding: 0;
      }
    }

    .button {
      margin-top: 4rem;
    }

    .box {
      position: relative;
      input {
        padding-left: 8rem;
      }
      .phone {
        background: url(${icon});
        background-repeat: no-repeat;
        background-position: 95% center;
        background-color: ${colors.colorWhite};
        appearance: none;
        position: absolute;
        padding-top: 1rem;
        padding-bottom: 1rem;
        border: none;
        left: 3px;
        top: 5px;
        width: 20%;
        &:focus {
          outline: none;
        }
      }
    }
  }
`;

export default ProfileEdit;
