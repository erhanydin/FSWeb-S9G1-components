import React from 'react'
import Todo from './Todo'

export default function TodoList(props) {

  const { list, update } = props;

    return (
      <div>
        <ul>
          {list.map((p) => 
          <Todo item={p} key={p.id} updateMain={update} currents={list}/>
          )}
        </ul>
      </div>
    )
}
