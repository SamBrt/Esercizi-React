import React, { useState } from 'react';
import { Login } from './components/Login';
import './App.css';

function App() {
const [data, setData] = useState("");

        const handleLogin = (data) => {
            console.log(data)
        }

    return (
        <div className="App">
            <h1>Login</h1>
            <Login onLogin={handleLogin} />
        </div>
    );
}

export default App;
