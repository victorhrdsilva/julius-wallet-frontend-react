import FormStyled from '../Styled/FormStyled';
import UserContext from '../Context/UserContext';
import { useContext, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { FormMovement } from '../Styled/FormMovement';
import {registerOutflow} from '../Service/Service.js'
import { useNavigate } from 'react-router-dom';

export default function NewOutflow() {
    const { loading, setLoading, setConfirmPassword } = useContext(UserContext);
    const [form, setForm] = useState({
        value: "",
        description: ""
    });
    const navigate = useNavigate();


    function handleForm(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });

        if(form.value.length > 0 && form.description.length > 0){
            setConfirmPassword(true)
        } else {
            setConfirmPassword(false)
        }
    }

    function Submit(event) {
        event.preventDefault();
        setLoading(true);

        registerOutflow(form)
            .then(() => {
                navigate("/home");
                setLoading(false);
                setConfirmPassword(false);
            }).catch(() => {
                alert((res) => {
                    alert(res.response.data.message);
                    setLoading(false);
                    setConfirmPassword(false);
                })
            })
    }
    return (
        <FormStyled>
            <FormMovement>
                <h2>Nova saída</h2>
                <form onSubmit={Submit}>
                    <input name='value' type='number' placeholder="Valor" onChange={handleForm} required></input>
                    <input name='description' type='text' placeholder="Descrição" onChange={handleForm} required></input>
                    <button type="submit" value="Salvar saída">{loading ? <ThreeDots
                        height="80"
                        width="80"
                        radius="9"
                        color="#FFFFFF"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                    /> : "Salvar saída"}</button>
                </form>
            </FormMovement>
        </FormStyled>
    )
}