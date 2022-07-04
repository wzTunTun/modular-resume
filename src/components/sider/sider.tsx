import { useRef, useState } from 'react'
import style from './sider.module.scss'

function Sider() {
    // 保存工具栏开关状态
    const [oc, setoc] = useState<boolean>(true)
    const leftbox = useRef<HTMLDivElement>(null)

    const ocSider = () => {
        if (oc) {
            leftbox.current!.style.width = '0'
            setoc(false)
        } else {
            leftbox.current!.style.width = '15rem'
            setoc(true)
        }
    }
    return (
        <div className={style.container}>
            <div ref={leftbox} className={style.leftbox}>
                <ul>
                    <li>
                        样式1
                    </li>
                    <li>
                        样式2
                    </li>
                    <li>
                        样式3
                    </li>
                </ul>
            </div>
            <div className={style.rightbox}>
            <div className={style.handler} onClick={ocSider}></div>
            </div>
        </div>
    )
}

export default Sider