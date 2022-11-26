import FormStyled from "../Styled/FormStyled"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { register } from "../Service/Service";
import UserContext from "../Context/UserContext";
import { ThreeDots } from 'react-loader-spinner';
/* import logo from '../image/ativo2.png';
 */
export default function RegisterPage() {
    const { loading, setLoading, setConfirmPassword } = useContext(UserContext)

    const [form, setForm] = useState({
        email: "",
        name: "",
        password: ""
    });
    const navigate = useNavigate();

    function releaseSendButton (event) {
        if (form.password == event.target.value && form.email.length > 0 && form.password.length > 0 && form.name.length > 0) {
            setConfirmPassword(true)
        } else {
            setConfirmPassword(false)
        }
    }

    function handleForm(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    function Submit(event) {
        event.preventDefault();
        setLoading(true);

        register(form)
            .then(() => {
                navigate("/");
                setLoading(false);
                setConfirmPassword(false)
            }).catch(() => {
                alert((res) => {
                    alert(res.response.data.message);
                    setLoading(false)
                })
            })
    }


    return (
        <FormStyled>
{/*             <img src={logo} alt="logo"></img>
 */}            <form onSubmit={Submit}>
                <input name="name" type="text" placeholder="nome" onChange={handleForm} required></input>
                <input name="email" type="email" placeholder="email" onChange={handleForm} required></input>
                <input name="password" type="password" placeholder="senha" onChange={handleForm} required></input>
                <input name="confirm-password" type="password" placeholder="Confirme a senha" onChange={releaseSendButton} required></input>
                <button type="submit" value="Cadastrar">{loading ? <ThreeDots
                    height="80"
                    width="80"
                    radius="9"
                    color="#FFFFFF"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                /> : "Cadastrar"}</button>
            </form>
            <Link to={"/"}>
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </FormStyled>
    )
}