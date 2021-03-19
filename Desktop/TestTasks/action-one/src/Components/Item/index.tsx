import React, { useState } from 'react';

interface dataType {
  id: number;
  name: string;
  number: number;
  cost: number;
}
export const Item = (props: { data: dataType; remove: any; editItem: any }) => {
  const [disabled, setDisabled] = useState(true);
  const { id, name, number, cost } = props.data;
  const [values, setValues] = useState({
    id,
    name,
    number,
    cost,
  });
  const edit = (e: any) => {
    e.preventDefault();
    !disabled && props.editItem(values);
    setDisabled((prev) => !prev);
  };
  return (
    <form className="item" onSubmit={edit}>
      <input
        className="item__name"
        value={values.name}
        disabled={disabled}
        onChange={(e) =>
          setValues((prev) => ({ ...prev, name: e.target.value }))
        }
      />
      <input
        className="item__number"
        value={values.number}
        disabled={disabled}
        type="number"
        onChange={(e) =>
          setValues((prev) => ({ ...prev, number: +e.target.value }))
        }
      />
      <input
        className="item__cost"
        value={values.cost}
        disabled={disabled}
        type="number"
        onChange={(e) =>
          setValues((prev) => ({ ...prev, cost: +e.target.value }))
        }
      />
      <div className="item__buttons">
        <button className="item__edit" type="submit">
          {disabled ? 'edit' : 'confirm'}
        </button>
        <button
          className="item__remove"
          onClick={() => props.remove(id)}
          type="button"
        >
          remove
        </button>
      </div>
    </form>
  );
};
