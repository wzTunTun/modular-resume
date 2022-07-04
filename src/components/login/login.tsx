import style from './login.module.scss'
import classNames from 'classnames'
import { useRef } from 'react'

function Login() {
    const dowebok = useRef<HTMLDivElement>(null)
    //  //onblur失去焦点事件，用户离开输入框时执行 JavaScript 代码：
    // //身份证号格式
    // function validate_idcard(idcard) {
    //     var idcardReg = /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;

    //     if (idcard != "" && idcard.search(idcardReg) != -1) {
    //         document.getElementById("test_idcard").innerHTML = "<font color='green' size='3px'>√身份证号格式正确</font>";
    //     }else {
    //         document.getElementById("test_idcard").innerHTML = "<font color='red' size='3px'>身份证号不能为空</font>";
    //     }

    // }
    // //函数1：验证用户名格式
    // function validate_username(username) {

    //     if (username != "") {
    //         document.getElementById("test_user").innerHTML = "<font color='green' size='3px'>√用户名正确</font>";
    //     } else {
    //         document.getElementById("test_user").innerHTML = "<font color='red' size='3px'>用户名错误</font>";
    //     }
    // }

    // //函数2：验证密码是否符合要求
    // function validate_password(password) {
    //     //^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6-10}$
    //     var passwordReg = /^[a-zA-Z]\w{5,17}$/;
    //     if (password != "" && password.search(passwordReg) != -1) {
    //         document.getElementById("test_pw").innerHTML = "<font color='green' size='3px'>√密码格式正确</font>";
    //     } else {
    //         document.getElementById("test_pw").innerHTML = "<font color='red' size='3px'>亲，您输入的密码格式有误哦</font>";
    //         // alert("密码由数字和字母组成!");
    //     }
    // }

    // //函数3：验证两次输入的密码是否一样
    // function validate_password2(password2) {
    //     var password = document.getElementById("password").value;
    //     //测试：console.log(password);
    //     //测试：console.log(password2);
    //     if (password == "") {
    //         document.getElementById("is_test_pw").innerHTML = "<font color='red' size='3px'>密码不为空</font>";
    //     } else if (password == password2) {
    //         document.getElementById("is_test_pw").innerHTML = "<font color='green' size='3px'>√两次输入的密码相同</font>";
    //     } else {
    //         document.getElementById("is_test_pw").innerHTML = "<font color='red' size='3px'>两次输入的密码不相同</font>";
    //         // console.log("密码由数字和字母组成!");
    //     }
    // }
    const signUp = () => {
        console.log(dowebok.current?.className)
        dowebok.current!.className = {`style.dowebok style.rightpanelactive`}
    }

    return (
        <div className={style.container}>
            <div className={style.dowebok} ref={dowebok} id="dowebok">
                <div className={[style.formcontainer, style.signupcontainer].join(' ')}>
                    <form>
                        <h1>注册</h1>
                        <span>请输入您的信息</span>
                        <input type="text" id="idcard" name="idcard" placeholder="身份证号"
                        />
                        <input type="text" id="Username" name="username" placeholder="姓名"
                        />
                        <input type="password" id="Password" name="password" placeholder="以字母开头只能包含字母、数字和下划线"
                        />
                        <input type="password" id="Password2" name="password2"
                            placeholder="确认密码" />
                        <button>注册</button>
                    </form>
                </div>
                <div className={[style.formcontainer, style.signincontainer].join(' ')}>
                    <form>
                        <h1>登录</h1>
                        <span>或使用您的帐号</span>
                        <input type="text" placeholder="身份证号" />
                        <input type="text" placeholder="姓名" />
                        <input type="password" placeholder="密码" />
                        <a href="###">忘记密码？</a>
                        <button>登录</button>
                    </form>
                </div>
                <div className={style.overlaycontainer}>
                    <div className={style.overlay}>
                        <div className={[style.overlaypanel, style.overlayleft].join(' ')}>
                            <h1>已有帐号？</h1>
                            <p>请使用您的帐号进行登录</p>
                            <button className={style.ghost} id="signIn" onClick={signUp}>登录</button>
                        </div>
                        <div className={[style.overlaypanel, style.overlayright].join(' ')}>
                            <h1>没有帐号？</h1>
                            <p>立即注册加入我们，和我们一起开始旅程吧</p>
                            <button className={style.ghost} id="signUp" onClick={signUp}>注册</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login