import { Link } from 'react-router-dom';
import styled from 'styled-components';

import colors from '../config/colors';
import icon from '../assets/img/29.png';
import search from '../assets/img/36.png';

export const ButtonLink = styled(Link)`
  background-color: ${(props) =>
    props.bg ? props.bg : colors.buttonBackground};
  border: ${(props) => (props.border ? `1px solid ${props.color}` : 'none')};
  border-radius: ${(props) => (props.radius ? props.radius : '50px')};
  color: ${(props) => (props.color ? props.color : colors.colorWhite)};
  font-size: 1.3em;
  padding: 0.8rem 2.2rem;
  text-align: center;
  text-decoration: none;
  width: ${(props) => (props.width ? props.width : '100%')};
`;

export const Search = styled.input`
  background: ${(props) => (props.search ? `url(${search})` : '')};
  background-color: ${colors.colorWhite};
  background-repeat: no-repeat;
  background-position: 98% center;
  border: 1px solid #fff;
  border-radius: ${(props) => (props.radius ? props.radius : 0)};
  font-size: 1.3rem;
  padding-bottom: 1.2rem;
  padding-left: 2rem;
  padding-right: 1rem;
  padding-top: 1.2rem;
  margin-bottom: 1.1rem;
  width: ${(props) => (props.width ? props.width : '100%')};
  &:focus {
    outline: none;
  }
`;

export const Categories = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    li {
      font-size: 13px;
      background: #306668;
      margin-bottom: 5px;
      padding: 2px 10px;
      color: #fff;
      font-weight: 600;
    }
  }
`;

export const Skills = styled.div`
  ul {
  }
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  li {
    font-size: 13px;
    background: #ddd;
    margin-bottom: 5px;
    padding: 2px 10px;
    color: #fff;
    font-weight: 600;
  }
`;

export const Viewtask = styled(Link)`
  text-align: center;
  text-decoration: none;
  color: #306668;
  border: 1px solid #306668;
  padding: 1px 0;
  border-radius: 50px;
  font-size: 14px;
  display: inline-block;

  &:hover {
    text-decoration: none;
    color: #306668;
  }
`;

export const FindATask = styled(Link)`
  color: #306668;
  text-decoration: none;
  border: 1px solid #306668;
  padding: 6px 40px;
  border-radius: 50px;
  display: inline-block;

  &:hover {
    text-decoration: none;
    color: #306668;
  }
`;

export const BtnLink = styled(Link)`
  background-color: ${colors.buttonColor};
  color: ${colors.colorWhite};
  text-decoration: none;
  margin-top: 0.4rem;
  padding: 0.8rem 1.5rem;

  &:hover {
    text-decoration: none;
    color: #fff;
  }
`;

export const InviteLink = styled(Link)`
  text-decoration: none;
  background: #306668;
  padding: 4px 9px;
  font-size: 0.9rem;
  display: inline-block;
  border-radius: 50px;
  color: #fff;

  &:hover {
    text-decoration: none;
    color: #fff;
  }
`;

export const AuthLink = styled(Link)`
  font-size: 0.8rem;
  display: inline-block;
  margin-top: 1rem;
  color: #306668;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
    color: #306668;
    text-decoration: underline;
  }
`;

export const PrimaryLink = styled(Link)`
  color: ${(props) => (props.primary ? '#fff' : '#333')};
  background-color: ${(props) => (props.primary ? '#094a6a;' : 'transparent')};
  border: ${(props) => (props.primary ? 'none' : '1px solid #333;')};
  text-decoration: none;
  text-align: center;
  display: inline-block;
  font-size: 14px;
  border-radius: 50px;
  padding: 7px 35px;
  font-family: 'Open Sans', sans-serif;

  &:hover {
    text-decoration: none;
    color: ${(props) => (props.primary ? '#fff' : '#333')};
  }
`;

export const LoginLink = styled(PrimaryLink)`
  display: block;
  background-color: #606c86;
  color: #fff;
  border: none;

  &:hover {
    color: #fff;
  }
`;

export const SecondaryLink = styled(Link)`
  color: #fff;
  background-color: #fff;
  border: none;
  text-decoration: none;
  text-align: center;
  display: inline-block;
  font-size: 13px;
  padding: 7px 10px;
  font-family: 'Open Sans', sans-serif;

  &:hover {
    text-decoration: none;
    color: #fff;
  }
`;

export const PrimaryButton = styled.button`
  color: #fff;
  background-color: ${colors.buttonBackground};
  border-radius: 8px;
  padding: 0.8rem 3rem;
  text-align: center;
  width: ${(props) => (props.hallwidth ? '' : '100%')};
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export const SecondaryButton = styled.button`
  background-color: #5e8799;
  color: #fff;
  border-radius: 4px;
  padding: 10px 35px;
  display: block;
  text-align: center;
  border: none;
`;

// FORMS

export const TextInput = styled.input`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding-left: 10px;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  font-size: 14px;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
  resize: none;
  padding-left: 10px;
  padding-top: 8px;
  font-size: 14px;
  &:focus {
    outline: none;
  }
`;

export const Select = styled.select`
  appearance: none;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding-left: 10px;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  background: url(${icon});
  background-repeat: no-repeat;
  background-position: 95% center;
  font-size: 14px;
  width: 100%;
  color: gray;
  &:focus {
    outline: none;
  }
`;

export const Title = styled.article`
  display: flex;
  justify-content: space-between;
  padding-bottom: 4rem;

  h4 {
    font-size: 2rem;
    color: #30458d;
  }

  a {
    text-decoration: underline;
    font-size: 1.2rem;
    color: #40759d;
  }
`;

export const EQUALGRID = styled.article`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 6px;
  margin-bottom: 1rem;
  align-items: flex-end;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const THREECOLUMNGRID = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 6px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const FIVECOLUMNGRID = styled.article`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 6px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const HALFGRID = styled.article`
  display: grid;
  grid-template-columns: 0.5fr;
  column-gap: 6px;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const THREEHALFGRID = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 0.5fr);
  column-gap: 10px;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const UNEQUALEDGRID = styled.article`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  column-gap: 6px;
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

export const GRID = styled.article`
  display: grid;
  margin-bottom: 1rem;
  grid-template-columns: 1fr;
`;
