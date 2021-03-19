import React, { useRef, useState } from 'react';
import { Item } from './Components/Item';

interface dataType {
  id: number;
  name: string;
  number: number;
  cost: number;
}

function App() {
  const [data, setData] = useState([
    { id: 1, name: 'Apple', number: 3, cost: 1280 },
  ]);

  const [name, setName] = useState('');
  const [number, setNumber] = useState(0);
  const [cost, setCost] = useState(0);
  const remove = (id: number) => {
    setData((prev) => prev.filter((i) => i.id !== id));
  };
  console.log(name);

  const submit = (e: any) => {
    e.preventDefault();
    const obj: dataType = {
      id: new Date().getMilliseconds(),
      name: name,
      number: number,
      cost: cost,
    };
    setData((prev) => [...prev, obj]);
  };
  const editItem = (values: dataType) => {
    setData((prev) => prev.map((i) => (i.id === values.id ? values : i)));
  };
  return (
    <div className="wrapper">
      <div className="header">
        <p className="header__name">Name</p>
        <p className="header__name">Number</p>
        <p className="header__name">Cost $</p>
        <p className="empty"></p>
      </div>
      {data.map((i: dataType) => (
        <Item data={i} remove={remove} key={i.id} editItem={editItem} />
      ))}
      <form className="add" onSubmit={submit}>
        <input
          type="text"
          className="add__name"
          onChange={(e: { target: { value: any } }) => setName(e.target.value)}
          placeholder="Enter name"
        />
        <input
          type="number"
          className="add__number"
          onChange={(e: { target: { value: any } }) =>
            setNumber(+e.target.value)
          }
          placeholder="Enter number"
        />
        <input
          type="number"
          className="add__cost"
          onChange={(e: { target: { value: any } }) => setCost(+e.target.value)}
          placeholder="Enter cost"
        />
        <button className="add__submit">add</button>
      </form>
      <div className="total">
        {`Total cost: ${data.reduce(
          (prev: number, curr: { cost: number }) => prev + curr.cost,
          0
        )}$`}
      </div>
    </div>
  );
}

export default App;
