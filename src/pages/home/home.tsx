import Sider from '../../components/sider/sider'
import Login from '../../components/login/login'
import style from './home.module.scss'
import PubSub from 'pubsub-js'
import { useEffect, useState } from 'react'
import Resume from '../../components/resume/resume'

function Home() {
  const [h_login, seth_login] = useState(false)
  const [h_reges, seth_reges] = useState(false)

  // 发布登录按钮点击状态
  const pubLo = () => {
    seth_login(true)
    PubSub.publish('iflogin', h_login)

    // pubsub.publish('ifreges', reges)
  }
  // 发布注册按钮点击状态
  const pubRe = () => {
    seth_reges(true)
    PubSub.publish('ifreges', h_reges)

    // pubsub.publish('ifreges', reges)
  }

  useEffect(() => {
    // pubLoRe()
  }, [])

  return (
    <div>
      <div className={style.bg}>

        <div className={style.nav}>
          <button className={style.lgBtn} onClick={pubLo}>登录</button>
          <button className={style.rgBtn} onClick={pubRe}>注册</button>
        </div>
        <Sider></Sider>
      </div>
      <Login></Login>
    </div>

  )
}

export default Home