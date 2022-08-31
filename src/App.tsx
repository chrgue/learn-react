import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Text, TextMemorized, TextWithHOC, TextWithHook } from './components/texts';

const App = () => {

    const [currentText, setCurrentText] = useState('Initial Input')
    const [mode, setMode] = useState(0)

    let modeComponents
    if (mode === 1) {
        modeComponents =
            <>
                <span>Mode: HOC vs. Hook</span>
                <TextWithHOC/>
                <TextWithHook/>
            </>

    } else if (mode === 2) {
        modeComponents =
            <>
                <span>Mode: React.memo</span>
                <TextMemorized text={'Static Text'}/>
                <TextMemorized text={currentText}/>
            </>

    } else {
        modeComponents =
            <>
                <span>Mode: Debug</span>
                <Text text={'Static Text'}/>
                <Text text={currentText}/>
            </>;
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <input onChange={(event) => setCurrentText(event.target.value)}/>
                {modeComponents}
                <button onClick={() => setMode(mode >= 2 ? 0 : mode + 1)}>Change Mode</button>
            </header>
        </div>
    );
};

export default App;
