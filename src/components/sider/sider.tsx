import { useRef, useState, useEffect } from 'react'
import style from './sider.module.scss'
import Resume from '../../components/resume/resume'

function Sider() {
    // 保存工具栏开关状态
    const [oc, setoc] = useState<boolean>(true)
    let dragged: any

    useEffect(() => {
        // console.log(DataTransfer)
        document.addEventListener("drag", function (event) { }, false)
        document.addEventListener("dragstart", function (event: any) {
            event.dataTransfer.setData("text/plain", event.target.id)
            // 保存拖动元素的引用 (ref.)
            console.log('开始拖动')
            dragged = event.target;
            // 使其半透明
            event.target.style.opacity = .5;
        }, false);
        document.addEventListener("dragend", function (event: any) {
            // 重置透明度
            console.log('结束拖动')
            event.target.style.opacity = "";
        }, false);
        /* 放置目标元素时触发事件 */
        document.addEventListener("dragover", function (event: any) {
            // 阻止默认动作以启用 drop
            event.preventDefault();
        }, false);

        document.addEventListener("dragenter", function (event: any) {
            // 当可拖动的元素进入可放置的目标时高亮目标节点

            if (event.target.id == "tar") {
                console.log('进入目标区域')
                event.target.style.background = "purple";
            }

        }, false);

        document.addEventListener("dragleave", function (event: any) {
            // 当拖动元素离开可放置目标节点，重置其背景

            if (event.target.id == "tar") {
                console.log('离开目标区域')
                event.target.style.background = "";
            }

        }, false);

        document.addEventListener("drop", function (event: any) {
            // 阻止默认动作（如打开一些元素的链接）
            event.preventDefault();
            // 将拖动的元素到所选择的放置目标节点中
            if (event.target.id == "tar") {
                event.target.style.background = "";
                dragged.parentNode.removeChild(dragged);
                event.target.appendChild(dragged);
                const data = event.dataTransfer.getData('text');
                console.log(data)
            }

        }, false);
    }, [])

    return (
        <div className={style.container}>
            <div className={oc ? style.leftbox : `${style.leftbox} ${style.leftbox_close}`}>
                <ul>
                    <li>
                        <div className={style.box} draggable="true" id='abc'>111</div>
                    </li>
                    <li>
                        <div className={style.box} draggable="true">2</div>
                    </li>
                    <li>
                        <div className={style.box} draggable="true">3</div>
                    </li>
                </ul>
            </div>

            <div className={style.rightbox}>
                <div className={style.handler} onClick={() => setoc(!oc)}></div>
                <div className={style.con}>
                    <div className={style.paper} id='tar'>
                        {/* <div className={style.box} draggable="true"></div> */}
                    </div>
                    {/* <div className={style.paper} id='tar'>
                <div className={style.box} draggable="true"></div>
            </div> */}
                </div>
            </div>
        </div>
    )
}

export default Sider