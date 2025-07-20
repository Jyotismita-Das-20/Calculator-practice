import { Bs0Square, Bs1Square, Bs2Square, Bs3Square, Bs4Square, Bs5Square, Bs6Square, Bs7Square, Bs8Square, Bs9Square } from "react-icons/bs";
import { CiSquarePlus,CiSquareMinus } from "react-icons/ci";
import { LuSquareAsterisk, LuSquareSlash } from "react-icons/lu";
import Button from "./Button";

const NumberPad = ({displayVal, setDisplayVal}) => {
  
  const buttons = [<Bs1Square />, <Bs2Square />, <Bs3Square />, <Bs4Square />, <Bs5Square />, <Bs6Square />, <Bs7Square />, <Bs8Square />, <Bs9Square />, <Bs0Square />];
  const operations = [<CiSquarePlus />, <CiSquareMinus />, <LuSquareAsterisk />, <LuSquareSlash />];

  const addToDisplay = (text) => {
    setDisplayVal(displayVal + text);
  }

  const evaluateExpression = () => {
    const result = eval(displayVal);
    setDisplayVal(result);
  }

  return <>
    <Button text="C" onClickHandler={() => setDisplayVal('')}/>
    <br />
    {buttons.map(text => <Button key={text} text={text} onClickHandler={() => addToDisplay(text)} />)}
    <br />
    {operations.map(text => <Button key={text} text={text} onClickHandler={() => addToDisplay(text)}/>)}
    <br />
    <Button text="=" onClickHandler={evaluateExpression}/>
  </>
};

export default NumberPad;