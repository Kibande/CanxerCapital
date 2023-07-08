import React from "react";
import { Route, Routes } from 'react-router-dom';

import Client from './Divisions/Client/Client';
// import Admin from './Divisions/Admin/Admin';


const App =() => {



    return (
    <Routes>
        <Route exact path='/' element={<Client />}></Route>,
        {/* <Route exact path='/' element={<Admin />}></Route> */}
    </Routes>
    )
}

export default App