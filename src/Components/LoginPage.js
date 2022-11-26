import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormStyled from '../Styled/FormStyled.js'
import { login } from "../Service/Service";
import UserContext from "../Context/UserContext.js";
import {ThreeDots} from 'react-loader-spinner';

export default function LoginPage() {
    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();
    const { loading, setLoading, setConfirmPassword } = useContext(UserContext)

    function handleForm(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });

        if(form.email.length > 0 && form.password.length > 0){
            setConfirmPassword(true)
        } else {
            setConfirmPassword(false)
        }
    }

    function Submit(event) {
        event.preventDefault();

        setLoading(true);

        login(form).then((res) => {
            localStorage.setItem("juliusWalletToken", res.data.token);
            navigate('/home');
            setLoading(false);
        }).catch((res) => { 
            alert(res.response.data.message);
            setLoading(false)
        });
    }

    return (
        <FormStyled>
            {/* <img src={logo} alt="logo"></img> */}
            <form onSubmit={Submit}>
                <input name="email" value={form.email} type="email" placeholder="email" onChange={handleForm} required></input>
                <input name="password" value={form.password} type="password" placeholder="senha" onChange={handleForm} required></input>
                <button>{loading ? <ThreeDots
                    height="80"
                    width="80"
                    radius="9"
                    color="#FFFFFF"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                /> : "Entrar"}</button>
            </form>
            <Link to={"/register"}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </FormStyled>
    )
}
