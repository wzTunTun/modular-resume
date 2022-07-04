import { useRef, useState } from 'react'
import style from './sider.module.scss'

function Sider() {
    // 保存工具栏开关状态
    const [oc, setoc] = useState<boolean>(true)

    return (
        <div className={style.container}>
            <div className={oc ? style.leftbox : `${style.leftbox} ${style.leftbox_close}`}>
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
            <div className={style.handler} onClick={() => setoc(!oc)}></div>
            </div>
        </div>
    )
}

export default Sider