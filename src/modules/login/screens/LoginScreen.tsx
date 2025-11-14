import { useState } from "react";
import axios from "axios";
import Button from "../../../shared/buttons/button/Button";
import Input from "../../../shared/inputs/input/input";
import { BackgroundImage, ContainerLoginScreen, ContainerLogin, LimitedContainer, TitleLogin } from "../styles/loginScreen.styles";
import SVGLogo from "../../../shared/icons/SVGLogo.tsx";


const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleLogin = async () => {
         const returnObject = await axios({
            method: "post",
            url: "http://localhost:8080/auth",
            data: {
                email: email,
                password: password,
             },
            })
            .then((result) => {
                alert(`fez login`)
                return result.data
            })
            .catch(() => {
                alert('Usuário ou senha inválido');
            });
            console.log(returnObject, 'returnObject')
        
    };

    return  (
    <ContainerLoginScreen>
        <ContainerLogin>
            <LimitedContainer>
                
                <SVGLogo width="202px" height="143px"  />
                <TitleLogin level={2} type="secondary" >Login</TitleLogin>
                <Input title='Usuário' margin="32px 0px 0px" onChange={handleEmail} value={email}/>
                <Input type="password" title='Senha' margin="32px 0px 0px" onChange={handlePassword} value={password}/>
                <Button type="primary" margin="64px 0px 16px 0px" onClick={handleLogin}>Entrar</Button>
            </LimitedContainer>
        </ContainerLogin>
         <BackgroundImage src="./background.png"/>   
    </ContainerLoginScreen>
    
    );
};

export default LoginScreen;