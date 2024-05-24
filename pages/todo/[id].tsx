import { NextPageContext } from 'next';
import Link from 'next/link';
import React from 'react';

type Todo = {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
};

const Todo = ({ todo }: { todo: Todo }) => {
  return (
    <>
      <h1>{todo.title}</h1>

      <ul>
        <li>
          <Link href="/todo/1">1번</Link>
        </li>

        <li>
          <Link href="/todo/2">2번</Link>
        </li>

        <li>
          <Link href="/todo/3">3번</Link>
        </li>
      </ul>
    </>
  );
};

Todo.getInitialProps = async (ctx: NextPageContext) => {
  const {
    query: { id = '' },
  } = ctx;
  const isServer = ctx.req;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  const result = await response.json();
  console.log(`fetch complete in ${isServer ? 'server' : 'client'}`);

  return { todo: result };
};

export default Todo;
