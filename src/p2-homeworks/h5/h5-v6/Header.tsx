import React from 'react'
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'
import {PATH} from "./Pages";


function Header() {
    return (
        <div className={s.header}>
            <NavLink to={PATH.PRE_JUNIOR} className={s.link}>PreJunior</NavLink>
            <NavLink to={PATH.JUNIOR} className={s.link}>Junior</NavLink>
            <NavLink to={PATH.JUNIOR_PlUS} className={s.link}>JuniorPlus</NavLink>
            <div className={s.block}/>
        </div>
    )
}

export default Header
