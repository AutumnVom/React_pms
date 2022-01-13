import React, { useState } from 'react';
import './App.css';

/* 
※ 첫번째 숙제 
 - 객실관리프로그램 -
1. aryData 값을 useState에 저장한다.
2. .room에 map함수를 이용해 aryData를 리스팅한다.
3. Reservation, Room 컴포넌트에서 객실배정 로직을 구현(이름 입력 => 배정추가)
 예) 101호를 선택하고 "정가을"을 입력 후 배정 버튼을 누르면 해당 객실에 "정가을"이 표시
4. 내림차순 기능 구현. 
5. 배정삭제 기능을 구현.
6. 시간이 남으면 원하는 기능을 추가로 구현
*/

function App() {

  let aryData = ['동주', '정대지', '이누', '정가을', '류뚱'];
  
  const [data, setData] = useState(aryData);
  const [check, setCheck] = useState(false);
  const [name, setName] = useState('');

  const sorting = () => {
    // let newData = [...data];
    // newData = data.reverse();
    // setData(newData);
    setData([...data].reverse());
  }

  const assign = () => {
    if ( name == '' ) {
      alert('이름을 입력해 주세요.');
      return;
    }
    setData([...data, name]);
    setName('');
  }

  const remove = (idx) => {
    let newData = data.filter((value, index) => {
     return idx != index
    });
    setData(newData);
  }

  return (
    <div className="app">
      <div className="reservation">
        <input type="text" placeholder="이름을 입력해주세요." value={name} onChange={ (e) => { setName(e.target.value)} }/>
        <button type="button" onClick={assign}>배정</button>
        <label>
          <input type="checkbox" checked={check} onChange={ (e) => {setCheck(e.target.checked); sorting()} }/> 내림차순
        </label>
      </div>
      <ul className="rooms">
        {
          data.map( (name, index) => <Room key={index} room={index} name={name} idx={index} remove={remove}/> )
        }
      </ul>
    </div>
  );
}
 

function Room( props ) {
  const {room, name, idx, remove} = props;

  return (
    <li className="room"> 
      <div className="box">
        <div className="head">
          <p>{room}</p> 
          <button type="button" className="cancel" onClick={ () => {remove(idx)}}>삭제</button>
        </div>
        <div className="name">{name}</div>
      </div>
    </li>
  )
}

export default App;