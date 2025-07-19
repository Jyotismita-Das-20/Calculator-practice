import Button from "./Button";

const NumberPad = () => {
  
  const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];

  const operations = ["+", "-", "*", "/"];

  return <>
    <Button text="c" />
    <br />
    {buttons.map(text => <Button text={text} />)}
    <br />
    {operations.map(text => <Button text={text} />)}
    <br />
    <Button text="="/>
  </>
};

export default NumberPad;