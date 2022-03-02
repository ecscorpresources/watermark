import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { BtnLink } from '../../components/styledComponents';
import colors from '../../config/colors';
import deleteIcon from '../../assets/img/31.png';
import user from '../../data/user';
import Published from './Published';
import useActive from '../../hooks/useActive';

function Dashboard() {
  const [active, changeActive] = useActive([
    'reading',
    'purchased',
    'published',
  ]);
  const user1 = user[0];
  return (
    <Wrapper>
      <article className="greeting">
        <div className="user">
          <h1>Hi {user1.name}</h1>
          <Link to="/edit_profile">Edit Profile</Link>
        </div>
        <BtnLink to="/publish_book">Publish a Book</BtnLink>
      </article>
      <article className="content">
        <div className="tabNav">
          <p
            className={
              typeof active !== 'undefined' && active.reading ? 'active' : ''
            }
            onClick={() => changeActive('reading')}
          >
            Currently Reading
          </p>
          <p
            className={
              typeof active !== 'undefined' && active.purchased ? 'active' : ''
            }
            onClick={() => changeActive('purchased')}
          >
            Book Purchased
          </p>
          <p
            className={
              typeof active !== 'undefined' && active.published ? 'active' : ''
            }
            onClick={() => changeActive('published')}
          >
            Book Published
          </p>
        </div>
        {typeof active !== 'undefined' && active.reading ? (
          <Shelve
            read="true"
            title="Currently Reading"
            reading={user1.reading}
          />
        ) : typeof active !== 'undefined' && active.purchased ? (
          <Shelve title="Recently Purchased" reading={user1.purchased} />
        ) : (
          <Published user={user1} />
        )}
      </article>
    </Wrapper>
  );
}

const Shelve = ({ read = false, title, reading }) => {
  return (
    <div className="container">
      <div className="header">
        <h5>{title}</h5>
        <div className="img-container">
          <img src={deleteIcon} alt="delete icon png" />
        </div>
      </div>
      <div className="books">
        {reading.length > 0
          ? reading.map((book, index) => {
              return (
                <div className="book" key={index}>
                  <div className="img-container">
                    <img src={book} alt="summer png" />
                  </div>
                  <div className="read">
                    <input type="checkbox" name="summer" />
                    {read ? <Link>Read</Link> : null}
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

const Wrapper = styled.section`
  width: 80%;
  margin: 4rem auto 4rem;
  font-size: 1.4em;
  .content {
    .tabNav {
      display: flex;
      justify-content: center;
      margin-bottom: 2rem;
      p {
        padding: 0.8rem 2.5rem;
        border: 1px solid ${colors.buttonBackground};
        cursor: pointer;
      }
      .active {
        background-color: ${colors.colorLightGreen};
        color: ${colors.colorWhite};
        font-weight: bold;
        border: none;
      }
      p:not(:last-child) {
        margin-right: 2rem;
      }
    }
    .container {
      border: 1px solid ${colors.borderColor};
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem 10rem;
        border-bottom: 1px solid ${colors.borderColor};
        margin-bottom: 3rem;
        h5 {
          font-size: 1.6em;
        }
        .img-container {
          background-color: ${colors.institutionColor};
          padding: 0.2rem 0.4rem;
          cursor: pointer;
        }
      }
      .books {
        padding: 0 4rem 4rem;
        display: grid;
        grid-template-columns: repeat(4, 210px);
        grid-column-gap: 1.5rem;
        grid-row-gap: 2rem;
        justify-content: center;
        .book {
          background-color: ${colors.primaryColor};
          padding: 2rem 2rem 1rem;
          .img-container {
            margin-bottom: 0.6em;
          }
          .read {
            display: flex;
            justify-content: space-between;
            a {
              color: ${colors.colorBlack};
            }
          }
        }
      }
    }
  }
  .greeting {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    a {
      background-color: ${colors.buttonBackground};
      border-radius: 8px;
      padding: 0.8rem 3rem;
    }
    .user {
      h1 {
        font-size: 1.8em;
      }
      a {
        background-color: transparent;
        font-size: 0.8em;
        color: ${colors.colorBlack};
        padding: 0;
      }
    }
  }
`;

export default Dashboard;
