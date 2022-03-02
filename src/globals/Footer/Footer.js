import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import colors from "../../config/colors";
import facebook from "../../assets/img/facebook.png";
import instagram from "../../assets/img/instagram.png";
import linkedin from "../../assets/img/linkedin.png";
import twitter from "../../assets/img/twitter.png";
import youtube from "../../assets/img/youtube.png";

const Footer = () => {
  return (
    <FooterWrapper>
      <footer className="container-fluid">
        <div className="row first_row">
          <ul className="links">
            <li>
              <Link to="/">Read a Book</Link>
            </li>
            <li>
              <Link to="/">Publish a Book</Link>
            </li>
            <li>
              <Link to="/">Buy a Book</Link>
            </li>
            <li>
              <Link to="/">Jobs at Watermarks</Link>
            </li>
            <li>
              <Link to="/">FAQ</Link>
            </li>
            <li>
              <Link to="/">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="row social">
          <div className="col-md-12">
            <ul className="socials">
              <li>
                <Link to="/">
                  <img src={facebook} alt="facebook logo png" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src={youtube} alt="youtube logo png" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src={linkedin} alt="linkedin logo png" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src={instagram} alt="instagram logo png" />
                </Link>
              </li>

              <li>
                <Link to="/">
                  <img src={twitter} alt="twitter logo png" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p>Copyright &copy; 2020 WATERMARK. All Rights Reserved</p>
      </footer>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.section`
  footer {
    align-items: center;
    background-color: ${colors.footer};
    color: ${colors.textColor};
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 1.3em;
    padding: 3rem 0;
    .links {
      display: flex;
      justify-content: center;
      li {
        padding: 0 1rem;
      }
    }
    .links li:not(:last-child) {
      border-right: 1px solid ${colors.textColor};
    }
  }

  .row {
    display: flex;
  }

  footer ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  footer ul li {
    padding-bottom: 10px;
  }

  footer ul li a {
    color: ${colors.textColor};
    text-decoration: none !important;
    font-size: 15px;
    font-family: "Open Sans", sans-serif;
  }

  footer ul li a:hover {
    color: #434f9d !important;
  }

  footer .col-md-2 div {
    display: flex;

    img {
      align-self: flex-start;
    }
  }

  footer p {
    text-align: center;
    font-size: 0.8rem;
    padding-bottom: 20px;
    margin-bottom: 0;

    @media screen and(max-width:768px) {
      text-align: left;
    }
  }

  footer .row.social {
    margin-top: 1rem;
    padding: 20px 0;
  }

  footer .row.social .col-md-12 {
    display: flex;
    justify-content: center;
  }

  footer .row.social ul li {
    display: inline;
    margin-right: 20px;
  }
`;

export default Footer;
