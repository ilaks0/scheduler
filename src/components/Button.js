import React from "react";
import "./Button.scss";
const classNames = require('classnames'); 


export const Button = (props) => {
  const buttonClass = classNames('button', {'button--confirm': props.confirm, 'button--danger': props.danger});
  return (
  <button disabled={props.disabled} onClick={props.onClick} className={buttonClass}>
  {props.children}
  </button>
  );
}
