import React, { memo, useRef, useCallback, KeyboardEvent } from 'react';
import Button from './Button';

import { Label } from '../assets/styles/todo-list.styles';

interface TaskAddProps {
  addTodo: (value: string) => void;
}

const TaskAdd = ({ addTodo }: TaskAddProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleAddTodo = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        if (inputRef.current) {
          const value = inputRef.current.value;
          addTodo(value);
          inputRef.current.value = '';
        }
      }
    },
    [addTodo]
  );

  const handleClickAddTodo = useCallback(() => {
    if (inputRef.current) {
      const value = inputRef.current.value;
      addTodo(value);
      inputRef.current.value = '';
    }
  }, [addTodo]);

  return (
      <div className="w-550 flex justify-between items-center">
        <Label>
        <input  className="h-30 w-400 flex-1 outline-none p-2 border border-purple-800 bg-transparent text-white rounded-lg text-base tracking-widest shadow-md"
          type="text"
          placeholder="Add a new task..."
          onKeyDown={handleAddTodo}
          ref={inputRef}
        />
        </Label>
        <Button title="Add" onClick={handleClickAddTodo} />
      </div>
  );
};

export default memo(TaskAdd);
