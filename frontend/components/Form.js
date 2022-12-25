import React, { useState } from 'react'

export default function Form(props) {

  const {doSubmit, current} = props;

  const [newToDo, setNewToDo] = useState("");

  const handleChange = (event) => {
    setNewToDo(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    doSubmit(
      [...current,
      {
        isim: newToDo,
        id: Date.now(),
        tamamlandi: false
      }
      ]
    );

    setNewToDo("");

  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name='newToDo'
        placeholder='type to do'
        value={newToDo}
        onChange={handleChange}
      />
      <input
        type="submit"
        value="Submit"
        disabled={newToDo === ''}
      />
    </form>
  )
}
