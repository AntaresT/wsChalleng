import React from 'react';
import { isAuthenticated, logout, TOKEN_KEY } from '../../Services/auth';

function Logout() {

    const logado = isAuthenticated();

    const handleLogout = () => {

        if (logado !== null) {
            logout(TOKEN_KEY);
            window.confirm("Voce Deslogou, Até a proxima")
            logout.push("");
        }
        window.location.reload("/");
    }

    console.log(logado);

    return (
        handleLogout()
    )
}

export default Logout;