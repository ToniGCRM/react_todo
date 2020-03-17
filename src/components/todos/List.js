import React from 'react';

const List = ({ name, todos}) => (
  <div>
    <h1>{name}</h1>
    <ul>
      {
        todos.map( todo => <li key={todo.id}>{todo.title}</li>)
      }
    </ul>
  </div>

)

export default List;