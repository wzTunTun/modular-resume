import { HtmlHTMLAttributes, useEffect, useRef, useState } from 'react'
import style from './basicinfo.module.scss'

function Basicinfo() {



    useEffect(() => {

    }, [])

    return (

        <div className={style.container}>
            <label htmlFor="name">姓名：</label>
            <input type="text" name='name'/>
            <label htmlFor="tel">电话：</label>
            <input type="text" name='tel'/>
            <label htmlFor="gen">性别：</label>
            <input type="text" name='gen'/>
            <label htmlFor="birth">出生年月：</label>
            <input type="text" name='birth'/>
        </div>
    )
}

export default Basicinfo