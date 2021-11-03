import { useCallback, useMemo, useState } from 'react';
import './App.css';
import Button from './components/UI/Button/Button';
import DemoList from './components/Demo/DemoList';

function App() {
  const [listTitle, setListTitle] = useState('My List'); 

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const listItems = useMemo(() => [5, 3, 10, 1, 9], []);      // useMemo() uses the memory to store the passed values in memory

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />   {/* Even arrays having the same elementa in the same order they are not same, as it is non-primitive data */}
      <Button onClick={changeTitleHandler}>
        Change List Title
      </Button>
    </div>
  );
}

export default App;
