import React, { useState } from 'react';
import TodoPage from './TodoPage';

export default function App() {
  const [state, setState] = useState({
    todoTitle: '',
    todoList: [],
  });

  const { todoTitle, todoList } = state;

  function handleChangeTitle(text) {
    setState({
      ...state,
      todoTitle: text,
    });
  }

  function handleClickAdd() {
    if (todoTitle.trim() === '') {
      return;
    }

    setState({
      todoTitle: '',
      todoList: [...todoList, { id: Date.now(), title: todoTitle }],
    });
  }

  function handleClickDelete(id) {
    setState({
      ...state,
      todoList: todoList.filter((todo) => id !== todo.id),
    });
  }

  return (
    <TodoPage
      todoTitle={todoTitle}
      todoList={todoList}
      onChangeTitle={handleChangeTitle}
      onClickAdd={handleClickAdd}
      onClickDelete={handleClickDelete}
    />
  );
}
