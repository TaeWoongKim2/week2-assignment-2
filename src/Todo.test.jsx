import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Todo from './Todo';

// 자주 사용되는 jest 명령어
// describe - context - it
// given

test('Todo', () => {
  const todo = {
    id: 1,
    title: '뭐라도 하기',
  };

  const handleClick = jest.fn();

  const { container, getByText } = render((
    <Todo todo={todo} onClickDelete={handleClick} />
  ));

  expect(container).toHaveTextContent('뭐라도 하기');
  // --> "뭐라도 하기"
  expect(container).toHaveTextContent('완료');
  // --> "완료" 버튼

  // const button = getByText('완료');
  // console.log(button);

  fireEvent.click(getByText('완료'));

  expect(handleClick).toBeCalledWith(1);
});
