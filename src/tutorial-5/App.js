import { useState, useEffect } from 'react';
import Feedback from './components/Feedback';
import Form from './components/Form';
import { AppContext } from './context';

function App() {
  const today = new Date();
  const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  const dateTime = date + ' ' + time;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  const [list, setList] = useState([]);

  // Get all data and send it again to array(list)
  useEffect(() => {
    const dataFromLocal = localStorage.getItem('Allcomments');
    if (dataFromLocal) {
      setList(JSON.parse(dataFromLocal));
    } else {
      setList([]);
    }
  }, []);

  // We need to use Use effect to send data immediately
  useEffect(() => {
    localStorage.setItem('Allcomments', JSON.stringify(list));
  }, [list]);

  const addToList = (e) => {
    e.preventDefault();
    setList([
      ...list,
      {
        id: Date.now(),
        fullName: name,
        email: email,
        createdAt: dateTime,
        text: text,
      },
    ]);
    //Clean
    setName('');
    setEmail('');
    setText('');
  };

  const removeData = (id) => {
    let allExcept = list.filter((elem) => elem.id !== id);
    setList(allExcept);
  };

  return (
    <div>
      <AppContext.Provider
        value={{ addToList, setName, name, setEmail, email, setText, text, list, removeData }}>
        <Feedback />
        <Form />
      </AppContext.Provider>
    </div>
  );
}
export default App;
