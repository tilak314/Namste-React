import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css';

import Header from './components/Header';
import Body from './components/Body';


const App = () => {
    return(
        <div className='app'>
            <Header/>
            <Body/>
        </div>
    )
}


const heading = React.createElement("h1", {}, "Hello World");;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>);