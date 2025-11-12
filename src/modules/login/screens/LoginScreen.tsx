
import Input from "../../../shared/inputs/input/input";
import { BackgroundImage, ContainerLoginScreen, ContainerLogin, LimitedContainer, LogImage } from "../styles/loginScreen.styles";

const LoginScreen = () => {
    return  (
    <ContainerLoginScreen>
        <ContainerLogin>
            <LimitedContainer>
                <LogImage src ="./logo.png"/>
                <Input title='Usuário'/>
                <Input title='Senha'/>
            </LimitedContainer>
        </ContainerLogin>
         <BackgroundImage src="./background.png"/>   
    </ContainerLoginScreen>
    
    );
};

export default LoginScreen;