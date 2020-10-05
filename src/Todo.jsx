import React from 'react';

export default function Todo({
  todo: { id, title },
  onClickDelete,
}) {
  return (
    <div>
      {title}
      <button type="button" onClick={() => onClickDelete(id)}>
        완료
      </button>
    </div>
  );
}
