import { Button } from '@mui/material';
import React, { useState } from 'react';

function App8() {
  const [list, setList] = useState([]);

  //1 Then
  // const displayUsers = () => {
  //   fetch('https://61769fdd03178d00173dada7.mockapi.io/user_data').then((res) => {
  //     res.json().then((user) => setList(user));
  //   });
  // };

  //Async
  const displayUsers = async () => {
    try {
      let response = await fetch('https://61769fdd03178d00173dada7.mockapi.io/user_data');
      let data = await response.json();
      setList(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <ul>
        {list.map((elem) => {
          return <li key={elem.id}>{elem.name}</li>;
        })}
      </ul>
      <Button variant="contained" onClick={displayUsers}>
        Get Data
      </Button>
    </div>
  );
}

export default App8;
