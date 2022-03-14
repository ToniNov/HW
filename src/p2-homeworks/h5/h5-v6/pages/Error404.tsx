import React from 'react';
import s from './Error404.module.css'

function Error404() {
    return (
        <div className={s.error404} >
            <div className={s.e404}>404</div>
            <div className={s.text}>Page not found!</div>
            <div className={s.cat}>ฅ/ᐠ.̫ .ᐟ\ฅ</div>
        </div>
    )
}

export default Error404
