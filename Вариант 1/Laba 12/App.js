import logo from './logo.svg';
import './App.css';
import { nanoid } from 'nanoid';
import React, { useState } from 'react';
function App() {
  const items = <div><li>text1</li><li>text2</li><li>text3</li></div>;
  function id1() {
    return nanoid(); 
  }
  const user = [
    {id: id1(), name: 'Mariya', surname: 'Sykes', age: '18'},
		{id: id1(), name: 'Ivan', surname: 'Petrov', age: '33'},
		{id: id1(), name: 'Alex', surname: 'Li', age: '15'},
  ];
  const res = user.map(function(item) {
		return <p>{item.id} {item.name} {item.surname}, {item.age}</p>;
	});
  const [id, setId] = useState(id1());
	const [name, setName] = useState('Olga');
	const [surname, setSurname] = useState('Boltrushko');
	const [age, setAge] = useState(18);
	const [value1, setValue1] = useState();
	const [value2, setValue2] = useState();
	const [value1_1, setValue1_1] = useState();
	const [value2_2, setValue2_2] = useState();
	const [result, setResult] = useState();

  return (
    < div >
      <h3>Задание 2</h3>
        Поэзия успокаивает: она позволяет сосредоточить свои мысли, 
       найти время, чтобы прочитать ее продуктивно и с пользой для себя.
     <h3>Задание 3</h3>
      <ul>
        {items}
      </ul>
      <h3>Задание 4</h3>
      <p>{res}</p>
      <h3>Задание 5</h3>
      <span>{id} </span>
      <span>{name} </span>
      <span>{surname}, </span>
      <span>{age}</span>
      <h3>Задание 6</h3>
      <input value={value1} onChange={event => setValue1(event.target.value)} /> 
      <input value={value2} onChange={event => setValue2(event.target.value)} /> 
      <p>{value1}</p>
      <p>{value2}</p>
      <h3>Задание 7</h3>
      <input value={value1_1} onChange={event => setValue1_1(event.target.value)} /> 
      <input value={value2_2} onChange={event => setValue2_2(event.target.value)} /> 
      <button onClick={() => setResult(Number(value1_1)  + Number(value2_2))}>Сумма</button>
      <button onClick={() => setResult(Number(value1_1)  * Number(value2_2))}>Произведение</button> 
      <p>Ответ: {result}</p>
    </div>
  );
}
export default App;
