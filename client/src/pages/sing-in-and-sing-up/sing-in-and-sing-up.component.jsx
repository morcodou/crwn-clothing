import React from 'react';

import './sing-in-and-sing-up.styles.scss';

import SingIn from '../../components/sign-in/sign-in.component';
import SingUp from '../../components/sign-up/sign-up.component';

const SinInAndSingUpPage = () => (
    <div className='sing-in-and-sing-up'>
        <SingIn />
        <SingUp />
    </div>
);

export default SinInAndSingUpPage;