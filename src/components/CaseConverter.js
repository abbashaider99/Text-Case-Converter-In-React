import "./CaseConverter.css";
import { react, useState } from "react";

const CaseConverter = (props) => {
  const [text, setText] = useState("");
  const [casetitle, setCase] = useState("Text Case Converter");

  //uppercase conversion
  const uppercaseHandler = () => {
    let changedText = text.toUpperCase();
    setText(changedText);
    setCase("UpperCase")
    console.log(react);
  };

  //lowercase conversion
  const lowercaseHandler = () => {
    let changedText = text.toLowerCase();
    setText(changedText);
    setCase("LowerCase")
  };

  const onChangeHandler = (event) => {
    setText(event.target.value);
  };

  document.title = casetitle;

  return (
    <div className="container">
      <br />
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea
          className="form-control mytext"
          id="text-box"
          rows="5"
          value={text}
          onChange={onChangeHandler}
          placeholder="Please enter text here..."
        ></textarea>
        <br />
        <button className="btn btn-primary mybtn" onClick={uppercaseHandler}>
          Convert into UpperCase
        </button>
        &nbsp;
        <button className="btn btn-info mybtn" onClick={lowercaseHandler}>
          Convert into LowerCase
        </button>
      </div>
    </div>
  );
};

export default CaseConverter;
