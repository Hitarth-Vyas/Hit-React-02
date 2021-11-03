import { useCallback, useState } from 'react';
import './App.css';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);  // At the beginning the react Initialises the state but then after it only upadtes the state unless the component is totally removed from the DOM and the same happens in the case of reducers.
  const [allowToggle, setAllowToggle] = useState(false);    // Even there are more than 1 state update, first react will not immedeately update the state rather it will schedule the state update, then if all states are scheduled for change, then react will perform the change at once in the end.


  console.log('APP RUNNING');

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShownParagraph) => !prevShownParagraph);
    }
  }, [allowToggle]);                    // Uses array of dependencies

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi here!</h1>
      {/* {showParagraph && <p>This is new!</p>} */}
      {/* <DemoOutput show={showParagraph} />  */}
      <DemoOutput show={showParagraph} /> 
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Toogle Paragraph!</Button>
    </div>
  );
}

export default App;
