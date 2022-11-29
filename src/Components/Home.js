import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


export default function Home() {
    const navigate = useNavigate();

    const data = [
        {
            date: "27/11",
            description: "Mercado",
            value: 21.2,
            type: "inflow"
        },
        {
            date: "27/11",
            description: "Mercado",
            value: 21.2,
            type: "inflow"
        },
        {
            date: "27/11",
            description: "Mercado",
            value: 21.2,
            type: "outflow"
        }
    ]

    function calculateBalance() {
        const result = data.reduce((accumulator, object) => {
            if (object.type == "inflow") {
                return accumulator + object.value
            } else {
                return accumulator - object.value
            }
        }, 0).toFixed(2);

        if (result >= 0) {
            return (
                <Moviment type={"inflow"}>
                    <strong>
                        SALDO
                    </strong>
                    <span>R$ {result}</span>
                </Moviment>
            )
        } else {
            return (
                <Moviment type={"outflow"}>
                    <strong>
                        SALDO
                    </strong>
                    <span>R$ {result}</span>
                </Moviment>
            )
        };

    }

    return (
        <Wrapper>
            <Header>
                <h2>
                    Olá, Fulano
                </h2>
                <ion-icon onClick={() => {
                    localStorage.removeItem("juliusWalletToken")
                    navigate('/')
                }} name="log-out-outline"></ion-icon>
            </Header>
            <ScreenExtract>
                {/*                 <Datas>
                    Não há registros de entradas ou saídas
                </Datas> */}
                <div>
                    {data.map((element) => {
                        return (
                            <Moviment type={element.type}>
                                <div>
                                    <span>
                                        {element.date}
                                    </span>
                                    <p>
                                        {element.description}
                                    </p>
                                </div>
                                <span>
                                    R$ {element.value.toFixed(2)}
                                </span>
                            </Moviment>
                        )
                    })}
                </div>
                {calculateBalance()}
            </ScreenExtract>
            <Buttons>
                <div onClick={() => navigate('/inflow')}>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <div>
                        <p>
                            Nova
                        </p>
                        <p>
                            entrada
                        </p>
                    </div>
                </div>
                <div>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <div onClick={() => navigate('/outflow')}>
                        <p>
                            Nova
                        </p>
                        <p>
                            saída
                        </p>
                    </div>
                </div>
            </Buttons>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #8c11be;
`
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80vw;
    color: #FFFFFF;
    font-size: 35px;
    margin-top: 25px;
    h2{
        font-weight: 700;
        font-size: 26px;
    }
`
const ScreenExtract = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 80vw;
    height: 70vh;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin: 22px 0 13px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 16px;
    strong{
        font-weight: 700;
        font-size: 18px;
    }
    div{
        max-height: 90%;
        overflow: scroll;
    }
`

const Buttons = styled(Header)`
    width: 80vw;
    margin: 0 0 25px;
    div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 38vw;
        height: 114px;
        background-color: #A328D6;
        border: none;
        color: #FFFFFF;
        font-weight: 700;
        padding: 10px;
        box-sizing: border-box;
        font-size: 30px;
        div{
            font-size: 17px;
            width: auto;
            height: auto;
            padding: 0;
            background-color: transparent;
        }
    }
`
const Datas = styled(ScreenExtract)`
    align-items: center;
    justify-content: center;
    color: #868686;
    p{
        width: 180px;
        text-align: center;
        font-size: 20px;
    }
`

const Moviment = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    div{
        display: flex;
        span{
            margin-right: 15px;
            color: #C6C6C6;
        }
        p{
            color: black;
            max-width: 70%;
            overflow: hidden;
        }
    }
    span {
        color: ${props => props.type == 'inflow' ? '#03AC00' : "#C70000"};
        white-space: nowrap;
    }
`
