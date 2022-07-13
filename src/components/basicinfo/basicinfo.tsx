import { HtmlHTMLAttributes, useEffect, useRef, useState } from 'react'
import style from './basicinfo.module.scss'
import PubSub from 'pubsub-js'

function Basicinfo() {
    let newxm: any = []
    const basicinfo = useRef(null)
    const [xm, setxm] = useState([])
    const showedit = () => {
        let basic: any = basicinfo.current
        let data = basic.childNodes
        data = Array.from(data)
        PubSub.publish('basic', data)
    }
    const getmsg = () => {
        PubSub.subscribe('1', (msg: string, data) => {
            newxm = [...newxm, data]
            newxm = newxm.join('')
            let i0 = document.getElementById('bas1')
            i0!.innerHTML = newxm
            console.log(newxm)
            console.log(msg)
        })
    }


    useEffect(() => {
        getmsg()

    }, [])

    return (

        <div className={style.container} id='0' onClick={showedit} ref={basicinfo}>
            <label htmlFor="name">姓名：</label>
            <div id='bas1'/>
            <label htmlFor="tel">电话：</label>
            <div id='bas3'/>
            <label htmlFor="gen">性别：</label>
            <div id='bas5'/>
            <label htmlFor="birth">出生年月：</label>
            <div id='bas7'/>
        </div>
    )
}

export default Basicinfo