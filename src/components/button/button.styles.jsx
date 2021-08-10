import styled, { css } from "styled-components";

export const Button = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

  &:not(:last-child) {
    margin-right: 8px;
  }

  ${(props) =>
    props.inverted &&
    css`
      background-color: white;
      color: black;
      border: 1px solid black;

      &:hover {
        background-color: black;
        color: white;
        border: none;
      }
    `}
  ${(props) =>
    props.social &&
    css`
      background-color: rgb(0, 132, 255);
      border: 1px solid black;

      &:hover {
        background-color: rgb(0, 132, 255);
        border: 1px solid rgb(0, 0, 0);
      }
    `};
`;
