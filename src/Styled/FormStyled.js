import { useContext } from 'react';
import styled from 'styled-components';
import UserContext from '../Context/UserContext';

export default function FormStyled({ children }) {
    const { confirmPassword, loading } = useContext(UserContext);

    return (
        <>
            {loading ? <InvisibleLayer></InvisibleLayer> : ""}
            <Wrapper confirmPassword={confirmPassword} loading={loading}>
                {children}
            </Wrapper>
        </>
    )
}

const InvisibleLayer = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.3);
    z-index: 2;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #8c11be;

    img{
        width: 50vw;
        margin-bottom: 40px;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    input {
   
        width: 85vw;
        max-width: 326px;
        height: 56px;
        border: 1px solid var(--border-color-input);
        border-radius: 5px;
        margin-bottom: 13px;
        box-sizing: border-box;
        padding-left: 11px;
        font-size: 20px;
        color: ${props => props.loading ? '#AFAFAF' : "black"};
        background-color: ${props => props.loading ? '#FFFFFF' : 'var(--secundary-background-color)'};

    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 85vw;
        max-width: 326px;
        height: 46px;
        border-radius: 5px;
        box-sizing: border-box;
        background-color: #A328D6;
        color: ${props => props.confirmPassword ? '#FFFFFF' : '#A366D6'};
        font-size: 21px;
        border: none;
        font-weight: 700;
        transition: all 0.4s 0s ease;
        pointer-events: ${props => props.confirmPassword ? 'auto' : 'none'};
    }
    p {
        color: #FFFFFF;
        text-decoration: underline;
        margin-top: 25px;
        text-align: center;
        max-width: 80vw;
    }
`

