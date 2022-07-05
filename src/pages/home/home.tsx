import Sider from '../../components/sider/sider'
import Login from '../../components/login/login'
import style from './home.module.scss'
import PubSub from 'pubsub.js'
import { useEffect, useState } from 'react'

function Home() {
  const [h_login, seth_login] = useState(false)
  const [reges, setreges] = useState(false)

  // 发布登录注册按钮点击状态
  const pubLo = () => {
    console.log('已发送', h_login)
    seth_login(true)
    PubSub.publish('iflogin', h_login)
    
    // pubsub.publish('ifreges', reges)
  }

  useEffect(() => {
    // pubLoRe()
  }, [])

  return (
    <div>
      <div className={style.bg}>
        <Sider></Sider>
        <div className={style.nav}>
          <button className={style.lgBtn} onClick={pubLo}>登录</button>
          <button className={style.rgBtn}>注册</button>
        </div>
      </div>
      <Login></Login>
    </div>

  )
}

export default Home