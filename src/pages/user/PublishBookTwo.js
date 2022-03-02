import React from 'react';
import styled from 'styled-components';

import {
  HALFGRID,
  PrimaryButton,
  TextArea,
} from '../../components/styledComponents';
import colors from '../../config/colors';
import { FilePicker } from '../publish/PremierBook';
import back from '../../assets/img/42.png';

function PublishBookTwo({ changeActive }) {
  const fileUpload = React.useRef();

  const handleClick = () => {
    fileUpload.current.click();
  };
  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Wrapper>
      <div className="upload">
        <div
          className="back"
          onClick={() => {
            changeActive('one');
          }}
        >
          <img src={back} alt="back button png" />
          <p>Back to Previous</p>
        </div>
        <h3>Upload Cover & Manuscript</h3>
      </div>
      <form>
        <FilePicker
          fileUpload={fileUpload}
          handleClick={handleClick}
          title="Upload Manuscript"
        />
        <div className="format">
          <p>File formats: EPUB, DOCK, RTF, ODT</p>
        </div>
        <FilePicker
          fileUpload={fileUpload}
          handleClick={handleClick}
          title="Upload Cover Design"
        />
        <div className="format">
          <p>File formats: JPG, PNG</p>
          <p>Dimension: 612 X 792</p>
        </div>
        <input type="checkbox" name="print" />
        <label htmlFor="print">Print On Demand</label>
        <HALFGRID>
          <p className="isbn">Enter ISBN</p>
          <TextArea type="text" />
        </HALFGRID>
        <div className="button">
          <PrimaryButton
            hallwidth
            onClick={() => {
              changeActive('three');
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
  .upload {
    display: flex;
    align-items: flex-start;
    margin: 0 auto;
    padding: 2rem 2rem 0;
    background-color: ${colors.primaryColor};
    width: 70%;
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
      margin-left: 6rem;
      font-weight: bolder;
    }
  }
  form {
    background-color: ${colors.primaryColor};
    padding: 3rem 8rem 3rem 10rem;
    color: ${colors.textColor};
    width: 70%;
    margin: 0 auto 3rem;
    label {
      font-weight: bold;
      margin-left: 1rem;
    }
    .button {
      margin-top: 4rem;
    }
    .isbn {
      font-weight: bolder;
    }
    .format {
      margin: 0.5rem 0 6rem;
      p {
        font-size: 0.9em;
      }
    }
  }
`;

export default PublishBookTwo;
