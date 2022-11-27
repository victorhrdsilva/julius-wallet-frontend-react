import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import GlobalStyle from '../Styled/GlobalStyles.js';
import UserContext from '../Context/UserContext.js';
import LoginPage from './LoginPage.js';
import RegisterPage from './RegisterPage'
import Home from './Home.js';



export default function App() {
    const [loading, setLoading] = useState(false);
    const [reload, setReload] = useState(0);
    const [confirmPassword, setConfirmPassword] = useState(false)

    return (
        <>
            <GlobalStyle />
            <UserContext.Provider
                value={
                    {
                        loading,
                        setLoading,
                        reload,
                        setReload,
                        confirmPassword,
                        setConfirmPassword
                    }
                }>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LoginPage />}></Route>
                        <Route path='/register' element={<RegisterPage />}></Route>
                        <Route path='/home' element={<Home />}></Route>
{/*                         <Route
                            path="/home"
                            element={
                                <PrivatePage>
                                    <Home />
                                </PrivatePage>
                            }
                        /> */}
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </>
    )
}