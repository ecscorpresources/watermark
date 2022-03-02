import React from 'react';
import styled from 'styled-components';

import addIcon from '../../assets/img/30.png';
import computer from '../../assets/img/27.png';
import dropbox from '../../assets/img/28.png';
import {
  EQUALGRID,
  GRID,
  HALFGRID,
  PrimaryButton,
  Select,
  TextArea,
  TextInput,
} from '../../components/styledComponents';
import colors from '../../config/colors';

function PremierBook() {
  const fileUpload = React.useRef();

  const handleClick = () => {
    fileUpload.current.click();
  };
  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Wrapper>
      <h1>Premier Your Book</h1>
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
        <FilePicker
          fileUpload={fileUpload}
          handleClick={handleClick}
          title="Upload Cover Design"
        />
        <div className="format">
          <p>File formats: JPG, PNG</p>
          <p>Dimension: 612 X 792</p>
        </div>
        <div className="button">
          <PrimaryButton hallwidth>Set up Premier</PrimaryButton>
        </div>
      </form>
    </Wrapper>
  );
}

export const FilePicker = ({ fileUpload, handleClick, title }) => {
  return (
    <FileUpload>
      <div className="dashed">
        <input
          type="file"
          id="file"
          ref={fileUpload}
          style={{ display: 'none' }}
        />
        <h4>{title}</h4>
        <div className="pick">
          <div className="box" onClick={handleClick}>
            <img src={computer} alt="computer png" />
            <p>From Computer</p>
          </div>
          <div className="divider"></div>
          <div className="box">
            <img src={dropbox} alt="dropbox png" />
            <p>From Dropbox</p>
          </div>
        </div>
      </div>
    </FileUpload>
  );
};

const FileUpload = styled.section`
  .dashed {
    padding: 2rem 4rem;
    background-color: ${colors.colorWhite};
    width: 85%;
    border: 1px dashed ${colors.tertiaryColor};
    .pick {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 2rem 0;
      .box {
        display: flex;
        align-items: center;
        cursor: pointer;
        p {
          margin-left: 1rem;
        }
      }
      .divider {
        width: 1px;
        background-color: ${colors.textColor};
        margin: 0 2rem;
        height: 50px;
      }
    }
  }
`;

const Wrapper = styled.section`
  width: 90%;
  margin: 4rem auto;
  font-size: 1.4em;
  h1 {
    font-size: 1.8em;
    color: ${colors.textColor};
    margin-bottom: 5rem;
    padding-left: 10rem;
  }
  form {
    background-color: ${colors.primaryColor};
    padding: 3rem 8rem;
    color: ${colors.textColor};
    width: 70%;
    margin: 0 auto;
    h3 {
      text-align: center;
      font-size: 1.3em;
      margin-bottom: 2rem;
    }
    label {
      font-weight: bold;
    }
    .button {
      margin-top: 4rem;
    }

    .format {
      p {
        font-size: 0.9em;
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
  }
`;

export default PremierBook;
