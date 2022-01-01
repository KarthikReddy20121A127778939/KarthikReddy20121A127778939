import React from 'react';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import ListRendering from '../ListRendering';
import FormRendering from './FormRendering';
import StateinClassComponent from './StateinClassComponent';

export default function Home() {
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Main/>}></Route>
                <Route path="/home1" element={<ListRendering/>}></Route>
                <Route path="/login" element={<FormRendering/>}></Route>
                <Route path="/home3" element={<StateinClassComponent/>}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}

function Main()
{
    return(
        <>
        <h1>::Home Page::</h1>
        <Link to="/login"><button>Login</button></Link>
        </>
    )
}
