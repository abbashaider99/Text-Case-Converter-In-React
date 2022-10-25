import "./CaseConverter.css";
import { react, useState } from "react";

const CaseConverter = (props) => {
  const [text, setText] = useState("");
  const [casetitle, setCase] = useState("Text Case Converter");

  //uppercase conversion
  const uppercaseHandler = () => {
    let changedText = text.toUpperCase();
    setText(changedText);
    setCase("UpperCase");
    console.log(react);
  };

  //lowercase conversion
  const lowercaseHandler = () => {
    let changedText = text.toLowerCase();
    setText(changedText);
    setCase("LowerCase");
  };

  const onChangeHandler = (event) => {
    setText(event.target.value);
  };

  document.title = casetitle;

  return (
    <div className="wrapper">
    <div className="container">
      <h2>{props.heading}</h2>
      <textarea name="mytext" className="mytext" value={text} onChange={onChangeHandler} cols="100" rows="22" placeholder="Please enter text here..."></textarea>
    </div>
    <div className="btns">
      <button className="btn-upr" onClick={uppercaseHandler}>Convert into UpperCase</button>
      <button className="btn-lwr" onClick={lowercaseHandler}>Convert into LowerCase</button>
    </div>
    </div>
  );
};

//PropsType

// CaseConverter.prototype = {
//   heading: PropTypes.string,
//   // heading: PropTypes.string.isRequired
// }

// CaseConverter.defaultProps = {
//   heading: 'In case we forget to pass props then it will take place'
// }

export default CaseConverter;
