import { useRef, useState, useEffect } from 'react'
import style from './sider.module.scss'
import Basicinfo from '../basicinfo/basicinfo'
import Proex from '../proex/proex'
import Interex from '../interex/interex'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

function Sider() {
    let i = 0, j = 0
    let newshoitems: any = [1,221,1]
    let newediitems: any = []
    // 保存工具栏开关状态
    const [oc, setoc] = useState<boolean>(true)
    const [oc2, setoc2] = useState<boolean>(true)

    const tar = useRef<any>(null)
    const yi = useRef<any>(null)
    const er = useRef<any>(null)
    const san = useRef<any>(null)
    const [ediitems, setediitems] = useState<any>(newediitems)
    const [shoitems, setshoitems] = useState<any>(newshoitems)
    const [selitems, setselitems] = useState([{
        id: 0,
        ob: <Basicinfo></Basicinfo>
    }, {
        id: 1,
        ob: <Proex></Proex>
    }, {
        id: 2,
        ob: <Interex></Interex>
    }])
    let dragged: any

    // 组件查找
    const findid = (itemid: number) => {
        return itemid
    }

    // 编辑框展示编辑内容
    const showedit = () => {
        console.log(1111)
    }

    // let canvas = document.createElement("canvas");
    // let w = tar.current.clientWidth;
    // let h = tar.current.clientHeight;
    // canvas.width = w;
    // canvas.height = h;
    // canvas.style.width = w + "px";
    // canvas.style.height = h + "px";
    // canvas.style.background = '#ffffff';
    // const download = () => {
    //     html2canvas(tar.current, { canvas: canvas}).then(function(canvas) {
    //     let contentWidth = canvas.width;
    //     let contentHeight = canvas.height;
    //     let position = 0;
    //     let imgWidth = 595.28;
    //     let imgHeight = 592.28/contentWidth * contentHeight;
    //     let pageData = canvas.toDataURL('image/jpeg', 1.0);
    //     let pdf = new jsPDF('', 'pt', 'a4');
    //     pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
    //     pdf.save('简历.pdf');
    // });
    // }



    useEffect(() => {
        PubSub.subscribe('basic', (msg, data: boolean) => {
            console.log('11',data)
            newediitems = data
            console.log(newediitems)
            setediitems(newediitems)
        })

        document.addEventListener("drag", function (event) { }, false)
        document.addEventListener("dragstart", function (event: any) {
            event.dataTransfer.setData("text/plain", event.target.id)
            // 保存拖动元素的引用 (ref.)
            console.log('开始拖动')
            dragged = event.target;
            console.log(dragged)
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
                console.log('目标id', event.target.id)
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
            event.target.style.background = "";
            // 将拖动的元素到所选择的放置目标节点中
            if (event.target.id == "tar" && dragged.parentNode.id !== 'tar') {
                event.target.style.background = "";
                const gol: any = selitems.find(item => item.id == findid(Number(dragged.id)))
                newshoitems = [...newshoitems, gol.ob]
                // console.log("newshowitems:", newshoitems)
                setshoitems(newshoitems)
                const data = event.dataTransfer.getData('text');
                // console.log(dragged)
                dragged.removeAttribute('draggable')
            }
            if (event.target.id !== "tar" && dragged.parentNode.id == 'tar') {
                console.log('删除成功')
                let valueid = dragged.childNodes[0].id.toString()
                // console.log('元素', valueid)
                let value = document.getElementById(`${dragged.childNodes[0].id.toString()}`)
                // console.log(value)
                value?.setAttribute('draggable', 'true')
                // console.log('目标id', event.target.id)
                dragged.parentNode.removeChild(dragged);
            }
        }, false);
    }, [])

    return (
        <div className={style.container}>
            <div className={oc ? style.leftbox : `${style.leftbox} ${style.leftbox_close}`}>
                <ul>
                    <li draggable="true" id='0'>
                        <div>基本信息</div>
                    </li>
                    <li draggable="true" id='1'>
                        <div>项目经历</div>
                    </li>
                    <li draggable="true" id='2'>
                        <div>实习经历</div>
                    </li>
                </ul>
            </div>
            <div className={style.rightcon}>
                <div className={!oc2 ? style.rightbox : `${style.rightbox} ${style.rightbox_close}`}>
                    <div className={style.handler} onClick={() => setoc(!oc)}></div>
                    <div className={oc2 ? style.con : `${style.con} ${style.con_open}`}>
                        {/* <button onClick={download}></button> */}
                        <div className={style.paper} id='tar' ref={tar}>
                            {shoitems.map((item) => {
                                i++
                                return <div draggable="true" key={i} className={style.box}>{item}</div>
                            })}
                        </div>
                    </div>
                    <div className={style.handler2} onClick={() => setoc2(!oc2)}></div>
                </div>
                <div className={oc2 ? style.downbox : `${style.downbox} ${style.downbox_close}`} onClick={() => console.log(ediitems)}>
                    {ediitems.map((item) => {
                        j++
                        return item
                    })}
                </div>
            </div>

        </div>
    )
}

export default Sider