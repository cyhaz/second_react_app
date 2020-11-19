import logo from './logo.svg';
import styled from "styled-components";
import './App.css';
import { diff, sum } from './utility';
import NameTag from "./NameTag";

function sample_msg(number) {
  let text = "피카츄 라이츄 파이리 꼬부긔 " + number + "마리";
  return text;
}

function sample_tag() {
  return (
    <div id="tag">
      Sample Tag
    </div>
  )
}

function App() {
  const num = 50;
  const returned = (n)=> {
    return "이 숫자는 " + n;
  }
  const result = returned(num);
  const tag = sample_tag();

  var a = 0;
  if(true) {
    a = 1;
  }

  return (
      <div className="App">
        <NameTag name="NePP ;)" tag="서울시 동대문구 제기동" color="lightgreen" />
        {/* {sample_msg(num)}<br />
        {result}
        {tag}
        {sum(59,76)}<br />
        {diff(10,1)} */}
      </div>
  );
}

export default App;
