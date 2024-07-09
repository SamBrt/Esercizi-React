import { useEffect } from "react";
import { useState } from "react";

export function Login() {
    const [data, setData] = useState({
        username: '',
        password: '',
        session: false,
    });

    const handleInputChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        const checked = event.target.checked
        const type = event.target.type

        setData((data) => {
            return {
                ...data,
                [name]: type === 'checkbox' ? checked : value,
            };
        });

    };

    function handleResetForm(event) {
        event.preventDefault(); 
        setData({
            username: '',
            password: '',
            session: false,
        });
    }

    return (
        <div>
            <form id="login-form">
                <input name="username" placeholder="Username" value={data.username} onChange={handleInputChange} />
                <input name="password" type="password" placeholder="Password" value={data.password} onChange={handleInputChange} />
                <div id="remember-div">
                    <p>Remember me</p>
                    <input id="checkbox" name="session" type="checkbox" checked={data.session} onChange={handleInputChange} />
                </div>
                <button onClick={handleResetForm}>Reset</button>
            </form>
        </div>
    );
}
