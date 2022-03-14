import "./Login.scss"
import Logo from "../../Assets/svg/twitter-logo-login.svg"
import { useContext, useRef, useState } from "react"
import { ThemeContext } from "../../Provider/Theme"
import { LangContext } from "../../Provider/Lang"
import { Navigate, Link } from "react-router-dom"

const Login = () => {
    const { dark, setDark } = useContext(ThemeContext);
    const { Lang, changeLang } = useContext(LangContext);
    const [ status, setStatus ] = useState(false)

    const email = useRef()
    const pass = useRef()

    async function Login() {
        let user = {
            email: email.current.value,
            password: pass.current.value
        }

        let login = await fetch('https://reqres.in/api/login', {
            method:'POST',
            body:JSON.stringify(user),
            headers:{
                "Content-type":'application/json'
            }
        })
        login = await login.json()
        login.error ? alert(login.error) : setStatus(true); localStorage.setItem('token', login.token)

        email.current.value = ''
        pass.current.value = ''        
    }

    if(status){
        return <Navigate to='/home'/>
    }
    
    return (
        <div className={dark ? "login login--dark" : 'login'}>
            <div className="container">
                <div className="login__block">
                    <form className="Form" onSubmit={(e)=>{
                        e.preventDefault()
                        Login()
                    }}>

                        <img className="Form__logo" src={Logo} alt="logo" />
                        <h2 className="Form__title">{Lang.login}</h2>
                        <input className="Form__input" ref={email} type="text" placeholder={Lang.emailIn} />
                        <input className="Form__input" ref={pass} type="password" placeholder={Lang.passwordIn} />
                        <button className="Form__btn" type="submit">{Lang.logBtn}</button>
                        <div className="Form__sing">
                            <Link className="Form__link" to="#">{Lang.forgot}</Link>
                            <Link className="Form__link" to="#">{Lang.singUp}</Link>
                        </div>
                    </form>

                    <div className="login__set">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24" viewBox="0 0 24 24"><path d="M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm2.312-4.897c0 2.206 1.794 4 4 4s4-1.794 4-4-1.794-4-4-4-4 1.794-4 4zm10 0c0 3.314-2.686 6-6 6s-6-2.686-6-6 2.686-6 6-6 6 2.686 6 6z" /></svg>
                        <label className="set__label">
                            <input className="set__input" id="check" type="checkbox" onClick={() => setDark(prev => !prev)} />
                            <span className="set__span"></span>
                        </label>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-1.109 0-2.178.162-3.197.444 3.826 5.933-2.026 13.496-8.781 11.128l-.022.428c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12z" /></svg>

                        <select className="lang__select" onChange={(e) => changeLang(e.target.value)}>
                            <option className="lang__option" value="eng">eng</option>
                            <option className="lang__option" value="uz">uz</option>
                            <option className="lang__option" value="ru">ru</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login