import React from 'react';

import { getUser } from '../../Services/auth';

function presentation() {

    const userLoged = getUser('@apikey/username');

    if (userLoged !== null) {
        return (
            <div>
                <h1>Wellcome {userLoged}</h1>
            </div>
        )
    } else {
        return (

            <h1>WELLCOME PAGE</h1>
        )
    }

}

export default presentation;