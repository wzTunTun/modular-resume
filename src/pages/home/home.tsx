import Sider from '../../components/sider/sider'
import Login from '../../components/login/login'
import style from './home.module.scss'

function Home() {

    return (
      <div>
        
        <div className={style.bg}>
          <Sider></Sider>
          <div className={style.nav}>
            <button className={style.lgBtn}>登录</button>
            <button className={style.rgBtn}>注册</button>
          </div>
        </div>
         <Login></Login>
      </div>
        
      )
}

export default Home