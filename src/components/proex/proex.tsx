import { HtmlHTMLAttributes, useEffect, useRef, useState } from 'react'
import style from './proex.module.scss'

function Proex() {



    useEffect(() => {

    }, [])

    return (

        <div id='1'>
            <label htmlFor="proex">项目经历：</label>
            <input type="text" name='proex'/>
        </div>
    )
}

export default Proex