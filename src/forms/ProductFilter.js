import React from "react";
import styled from "styled-components";
import { GrStar } from "react-icons/gr";
import colors from "../config/colors";
import { Link } from "react-router-dom";

export default function ProductFilter() {
  return (
    <Wrapper>
      <div className="category container">
        <h5>Category</h5>
        <div className="box">
          <input type="checkbox" name="biography" />
          <label htmlFor="biography">Biography & Non-Fiction</label>
        </div>
        <div className="box">
          <input type="checkbox" name="business" />
          <label htmlFor="business">Business & Finance</label>
        </div>
        <div className="box">
          <input type="checkbox" name="comic" />
          <label htmlFor="comic">Comic & Graphic</label>
        </div>
        <div className="box">
          <input type="checkbox" name="education" />
          <label htmlFor="education">Education & Textbook</label>
        </div>
        <div className="box">
          <input type="checkbox" name="kids" />
          <label htmlFor="kids">Kids & Teens</label>
        </div>
        <div className="box">
          <input type="checkbox" name="fiction" />
          <label htmlFor="fiction">Fiction & Suspense</label>
        </div>
        <div className="box">
          <input type="checkbox" name="sci-fi" />
          <label htmlFor="sci-fi">Sci-Fi & Fantasy</label>
        </div>
        <div className="box">
          <input type="checkbox" name="horror" />
          <label htmlFor="horror">Horror & Thriller</label>
        </div>
      </div>
      <div className="type container">
        <h5>Type</h5>
        <div className="box">
          <input type="checkbox" name="ebook" />
          <label htmlFor="ebook">Ebook</label>
        </div>
        <div className="box">
          <input type="checkbox" name="paper" />
          <label htmlFor="paper">Paperback</label>
        </div>
        <div className="box">
          <input type="checkbox" name="hardback" />
          <label htmlFor="hardback">Hardback</label>
        </div>
      </div>
      <div className="price container">
        <h5>Price</h5>
        <div className="form">
          <input type="text" placeholder="# Minimum" />
          <input type="text" placeholder="# Maximum" />
        </div>
      </div>
      <div className="rating-box container">
        <h5>Rating</h5>
        <div className="box">
          <input type="checkbox" name="four" />
          <div className="rating-section">
            <GrStar className="rating" />
            <GrStar className="rating" />
            <GrStar className="rating" />
            <GrStar className="rating" />
            <GrStar className="rating" />
            <span className="rating-number">& above</span>
          </div>
        </div>
        <div className="box">
          <input type="checkbox" name="four" />
          <div className="rating-section">
            <GrStar className="rating" />
            <GrStar className="rating" />
            <GrStar className="rating" />
            <GrStar className="rating" />
            <GrStar className="rating" />
            <span className="rating-number">& above</span>
          </div>
        </div>
        <div className="box">
          <input type="checkbox" name="four" />
          <div className="rating-section">
            <GrStar className="rating" />
            <GrStar className="rating" />
            <GrStar className="rating" />
            <GrStar className="rating" />
            <GrStar className="rating" />
            <span className="rating-number">& above</span>
          </div>
        </div>
        <div className="box">
          <input type="checkbox" name="four" />
          <div className="rating-section">
            <GrStar className="rating" />
            <GrStar className="rating" />
            <GrStar className="rating" />
            <GrStar className="rating" />
            <GrStar className="rating" />
            <span className="rating-number">& above</span>
          </div>
        </div>
        <div className="box">
          <input type="checkbox" name="four" />
          <div className="rating-section">
            <GrStar className="rating" />
            <GrStar className="rating" />
            <GrStar className="rating" />
            <GrStar className="rating" />
            <GrStar className="rating" />
            <span className="rating-number">& above</span>
          </div>
        </div>
      </div>
      <div className="link">
        <Link>Filter</Link>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 0 2rem 2rem 4rem;
  font-size: 1.4em;
  margin: 0 auto;
  p {
    font-size: 1.2em;
  }
  h5 {
    margin-bottom: 1rem;
  }
  label {
    font-size: 0.9em;
    margin-left: 1rem;
  }
  .link {
    margin-top: 3rem;
    a {
      border: 1px solid ${colors.buttonBackground};
      border-radius: 8px;
      color: ${colors.buttonBackground};
      text-decoration: none;
      margin-top: 0.4rem;
      padding: 0.4rem 5rem;
    }
  }
  .container {
    margin-bottom: 1.5rem;
  }
  .box {
    margin-bottom: 0.5rem;
  }
  .price {
    .form {
      display: flex;
      input {
        width: 35%;
        padding: 0.5rem 0.7rem;
        border-radius: 8px;
        border: 2px solid ${colors.primaryColor};
      }
      input:nth-child(1) {
        margin-right: 1rem;
      }
    }
  }
  .rating-box {
    span {
      font-size: 0.7em;
      font-weight: bold;
    }
    .box {
      display: flex;
      align-items: center;
    }
    .box:nth-child(3) {
      .rating:nth-child(4) {
        fill: #ddd;
      }
      .rating:nth-child(5) {
        fill: #ddd;
      }
    }
    .box:nth-child(4) {
      .rating:nth-child(3) {
        fill: #ddd;
      }
      .rating:nth-child(4) {
        fill: #ddd;
      }
      .rating:nth-child(5) {
        fill: #ddd;
      }
    }
    .box:nth-child(5) {
      .rating:nth-child(2) {
        fill: #ddd;
      }
      .rating:nth-child(3) {
        fill: #ddd;
      }
      .rating:nth-child(4) {
        fill: #ddd;
      }
      .rating:nth-child(5) {
        fill: #ddd;
      }
    }
    .box:nth-child(6) {
      .rating {
        fill: #ddd;
      }
    }
    .rating-section {
      font-size: 1.6rem;
      margin-left: 1rem;
      margin-right: 1rem;
      .rating {
        font-size: 1.5rem;
        fill: #f58634;
      }

      .rating:nth-child(5) {
        fill: #ddd;
      }
      .rating-number {
        display: inline-block;
        margin-left: 1rem;
      }
    }
  }
`;
