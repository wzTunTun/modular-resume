import { HtmlHTMLAttributes, useEffect, useRef, useState } from 'react'
import style from './interex.module.scss'

function Interex() {


    useEffect(() => {

    }, [])

    return (

        <div className={style.container} id='2'>
            <label htmlFor="interex">实习经历：</label>
            <input type="text" name='interex'/>
        </div>
    )
}

export default Interex