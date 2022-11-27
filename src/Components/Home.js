import styled from 'styled-components';

export default function Home() {

    return (
        <Wrapper>
            <Header>
                <h2>
                    Olá, Fulano
                </h2>
                <ion-icon name="log-out-outline"></ion-icon>
            </Header>
            <ScreenExtract>
                <p>
                    Não há registros de entradas ou saídas
                </p>
            </ScreenExtract>
            <Buttons>
                <div>
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
                    <div>
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
    align-items: center;
    justify-content: center;
    width: 80vw;
    height: 70vh;
    background-color: #FFFFFF;
    color: #868686;
    border-radius: 5px;
    margin: 22px 0 13px;
    p{
        width: 180px;
        text-align: center;
        font-size: 20px;
    }
`

const Buttons = styled(Header)`
    width: 80vw;
    margin-bottom: 25px;
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