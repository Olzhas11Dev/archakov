import React from 'react';

function Articles() {
  const { pathname } = window.location;
  const getNum = pathname.split('/');
  const Id = getNum[getNum.length - 1];
  return (
    <div>
      <h1>Статья №{Id}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae distinctio fuga animi
        aliquam sit id veritatis, doloribus ducimus quas, dignissimos non minima quia amet possimus?
        Impedit nemo ducimus fuga rem!
      </p>
      <a href="/">
        <button>Назад</button>
      </a>
    </div>
  );
}

export default Articles;
