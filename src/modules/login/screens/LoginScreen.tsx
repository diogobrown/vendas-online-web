
import Button from "../../../shared/buttons/button/Button";
import Input from "../../../shared/inputs/input/input";
import { BackgroundImage, ContainerLoginScreen, ContainerLogin, LimitedContainer, LogImage, TitleLogin } from "../styles/loginScreen.styles";

const LoginScreen = () => {
    return  (
    <ContainerLoginScreen>
        <ContainerLogin>
            <LimitedContainer>
                <LogImage src ="./logo.png"/>
                <TitleLogin level={2} type="secondary">Login</TitleLogin>
                <Input title='Usuário'/>
                <Input title='Senha'/>
                <Button type="primary" margin="64px 0px 16px 0px">Entrar</Button>
            </LimitedContainer>
        </ContainerLogin>
         <BackgroundImage src="./background.png"/>   
    </ContainerLoginScreen>
    
    );
};

export default LoginScreen;