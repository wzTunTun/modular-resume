import { useRef, useState, useEffect } from 'react'
import style from './sider.module.scss'
import Basicinfo from '../basicinfo/basicinfo'
import Proex from '../proex/proex'
import Interex from '../interex/interex'

function Sider() {
    let i = 0
    let newshoitems: any = []
    // 保存工具栏开关状态
    const [oc, setoc] = useState<boolean>(true)
    const [shoitems, setshoitems] = useState<any>(newshoitems)
    const [selitems, setselitems] = useState([{
        id:1,
        ob:<Basicinfo></Basicinfo>
    },{
        id:2,
        ob:<Proex></Proex>
    },{
        id:3,
        ob:<Interex></Interex>
    }])
    let dragged: any

    // 组件查找
    const findid = (itemid: number) => {
        return itemid
    }

    useEffect(() => {
        // console.log(DataTransfer)
        document.addEventListener("drag", function (event) { }, false)
        document.addEventListener("dragstart", function (event: any) {
            event.dataTransfer.setData("text/plain", event.target.id)
            // 保存拖动元素的引用 (ref.)
            console.log('开始拖动')
            console.log(shoitems)
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
                // event.target.appendChild(basinf);
                // console.log(dragged.id === 1)
                const gol: any = selitems.find(item => item.id === findid(Number(dragged.id)))
                newshoitems = [...newshoitems, gol.ob]
                console.log("newshowitems:", newshoitems)
                console.log("showitems:", shoitems)
                setshoitems(newshoitems)
                // const newshoitems2: any = [...shoitems, gol?.ob]
                // setshoitems(newshoitems2)
                const data = event.dataTransfer.getData('text');
                // console.log(data)
                // console.log(shoitems)
            }
        }, false);
    }, [])

    return (
        <div className={style.container}>
            <div className={oc ? style.leftbox : `${style.leftbox} ${style.leftbox_close}`}>
                <ul>
                    <li>
                        <div draggable="true" id='1'>基本信息</div>
                    </li>
                    <li>
                        <div draggable="true" id='2'>项目经历</div>
                    </li>
                    <li>
                        <div draggable="true" id='3'>实习经历</div>
                    </li>
                </ul>
            </div>

            <div className={style.rightbox}>
                <div className={style.handler} onClick={() => setoc(!oc)}></div>
                <div className={style.con}>
                    <div className={style.paper} id='tar'>
                        {shoitems.map((item) => {
                            i++
                            return <div key={i} className={style.box}>{item}</div>
                        })}
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