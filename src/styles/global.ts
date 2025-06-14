import { css } from "@emotion/react";
import "pretendard/dist/web/variable/pretendardvariable.css";

const globalStyle = css`
  * {
    font-family: "Pretendard", "system-ui", "-apple-system",
      "BlinkMacSystemFont", "Open Sans", "Helvetica Neue", sans-serif;
    font-synthesis: none;
    box-sizing: border-box;
    font-size: 16px;
  }

  body {
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    font-family: "Pretendard Variable", sans-serif;
  }

  #root {
    max-width: 540px;
    width: 100%;
  }

  html,
  body,
  div,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  form,
  label,
  table {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  body {
    line-height: 1.3;
    background-color: "#FFFFFF";
  }

  ol,
  ul {
    list-style: none;
  }

  button {
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default globalStyle;
