import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import './Main.css'

const Main = () => {
    return (
        <div className='main bg-sky-50'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;