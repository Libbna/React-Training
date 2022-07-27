import { useRef, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Textarea from "./components/TextBox";

function App() {
  const textAreaRef = useRef();
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");
  const [wordCount, setWordCount] = useState(0);

  const onChangeHandler = (e) => {
    setText(e.target.value);
  }
  const uppercaseText = () => {
    setOutput(text.toUpperCase())
  }
  const lowercaseText = () => {
    setOutput(text.toLowerCase())
  }

  const copyText = () => {
    navigator.clipboard.writeText(this.state.setOutput);
  }
  const countWords = (e) => {
    const text = textAreaRef.current.value;
    setWordCount(text.split(" ").length);
  }
  const camelCase = () => {
    setOutput(text.replace(/\W+(.)/g, function (match, char) {
      return char.toUpperCase();
    }));
  }

  return (
    <div className="App">
      <p>Output: {output}</p>
      <p>Words Count: {wordCount} words.</p>
      <Textarea className="textArea" value={text} ref={textAreaRef} onChange={onChangeHandler}></Textarea>
      <div>
        <Button onClick={uppercaseText}>Uppercase</Button>
        <Button onClick={lowercaseText}>Lowercase</Button>
        <Button onClick={copyText}>Copy Text</Button>
        <Button onClick={countWords}>Word Count</Button>
        <Button onClick={camelCase}>CamelCase</Button>
      </div>
    </div>
  );
}

export default App;