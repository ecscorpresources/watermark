import React from 'react';
import styled from 'styled-components';

import colors from '../../config/colors';

function Published({ user }) {
  return (
    <Wrapper>
      <div className="publish">
        <div className="summary">
          <div className="box">
            <h1>3</h1>
            <h3>Total</h3>
            <h3>Book Published</h3>
          </div>
          <div className="box">
            <h1>2488</h1>
            <h3>Total</h3>
            <h3>Quantity Sold</h3>
          </div>
          <div className="box">
            <h1>N128,400</h1>
            <h3>Total</h3>
            <h3>Net Income</h3>
          </div>
          <div className="box">
            <h1>N83,200</h1>
            <h3>Total</h3>
            <h3>Payed Out</h3>
          </div>
        </div>
        <div className="books">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Date Created</th>
                <th>Date Published</th>
                <th>Quantity Sold</th>
                <th>Net Income</th>
                <th>Payed Out</th>
              </tr>
            </thead>
            <tbody>
              {user.published.map((book, index) => (
                <tr key={index} className="border">
                  <td>
                    <img src={book.img} alt="book png" />
                  </td>
                  <td>
                    <p>{book.dateCreated}</p>
                    <p>{book.title}</p>
                    {book.category.map((cat, i) => {
                      if (i === 0) return <span key={i}>{cat}, </span>;
                      else if (i % 2 === 0) return <span key={i}>, {cat}</span>;
                      return <span key={i}>{cat}</span>;
                    })}
                  </td>
                  <td>{book.datePublished}</td>
                  <td>{book.quantitySold}</td>
                  <td>{book.income}</td>
                  <td>{book.payedOut}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
        .publish {
      background-color: ${colors.dashboardBg};
      border: 1px solid ${colors.borderColor};
      padding: 2em 0;
      .books {
        table {
          width: 80%;
          margin: 0 auto 2rem;
          border-collapse: collapse;
          padding: 0 4rem;
        }
        table tr td,
        table tr th {
          padding: 7px 20px 7px 20px;
        }
        table tr th {
          text-align: left;
        }
        table tbody tr.border {
          border-top: 1px solid ${colors.borderColor};
        }
        table tbody tr.border td {
          p:nth-child(2) {
            font-weight: bold;
          }
        }
      }
      .summary {
        display: grid;
        grid-template-columns: repeat(4, 200px);
        grid-gap: 2rem;
        justify-content: center;
        margin-bottom: 4rem;
        .box {
          display: flex;
          flex-direction: column;
          padding: 1rem 2rem;
          font-size: 1.2em;
          h1 {
            margin-left: auto;
            font-size: 1.3em;
          }
        }
        .box:nth-child(1) {
          background-color: ${colors.dashboardBoxOne};
        }
        .box:nth-child(2) {
          background-color: ${colors.dashboardBoxTwo};
        }
        .box:nth-child(3) {
          background-color: ${colors.dashboardBoxThree};
        }
        .box:nth-child(4) {
          background-color: ${colors.dashboardBoxFour};
        }
      }
    }
  }
`;

export default Published;
