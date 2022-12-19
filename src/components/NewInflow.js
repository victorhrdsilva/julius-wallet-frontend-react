import FormStyled from '../styled/FormStyled';
import UserContext from '../context/UserContext';
import { useContext, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { FormMovement } from '../styled/FormMovement';
import {postNewHistory} from '../service/Service.js'
import { useNavigate } from 'react-router-dom';

export default function NewInflow() {
    const { loading, setLoading, setConfirmPassword, setReload, reload } = useContext(UserContext);
    const [form, setForm] = useState({
        value: "",
        description: "",
        type: "inflow"
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
    };

    function Submit(event) {
        event.preventDefault();
        setLoading(true);

        postNewHistory(form)
            .then(() => {
                navigate("/home");
                setLoading(false);
                setConfirmPassword(false);
                setReload(reload++)
            }).catch((res) => {
                    alert(res.response.data.message);
                    setLoading(false);
                    setConfirmPassword(false);
            })
    };

    return (
        <FormStyled>
            <FormMovement>
                <h2>Nova entrada</h2>
                <form onSubmit={Submit}>
                    <input name='value' type='number' placeholder="Valor" step="any" onChange={handleForm} required></input>
                    <input name='description' type='text' placeholder="Descrição" onChange={handleForm} required></input>
                    <button type="submit" value="Salvar entrada">{loading ? <ThreeDots
                        height="80"
                        width="80"
                        radius="9"
                        color="#FFFFFF"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                    /> : "Salvar entrada"}</button>
                </form>
            </FormMovement>
        </FormStyled>
    )
}