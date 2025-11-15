import { useState } from 'react';
import {
  BackgroundImage,
  ContainerLoginScreen,
  ContainerLogin,
  LimitedContainer,
  TitleLogin,
} from '../styles/loginScreen.styles';
import Input from '../../../shared/components/inputs/input/input.tsx';
import Button from '../../../shared/components/buttons/button/Button.tsx';
import SVGLogo from '../../../shared/components/icons/SVGLogo.tsx';
import { useRequests } from '../../../shared/hooks/useRequests.ts';
import { useGlobalCotext } from '../../../shared/hooks/usueGlobalContext.tsx';

const LoginScreen = () => {
  const { acessToken, setAcessToken } = useGlobalCotext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { postRequest, loading } = useRequests();

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    setAcessToken('nova token');
    postRequest('http://localhost:8080/auth', {
      email: email,
      password: password,
    });
  };

  return (
    <ContainerLoginScreen>
      <ContainerLogin>
        <LimitedContainer>
          <SVGLogo width="202px" height="143px" />
          <TitleLogin level={2} type="secondary">
            Login ({acessToken})
          </TitleLogin>
          <Input title="Usuário" margin="32px 0px 0px" onChange={handleEmail} value={email} />
          <Input
            type="password"
            title="Senha"
            margin="32px 0px 0px"
            onChange={handlePassword}
            value={password}
          />
          <Button loading={loading} type="primary" margin="64px 0px 16px 0px" onClick={handleLogin}>
            Entrar
          </Button>
        </LimitedContainer>
      </ContainerLogin>
      <BackgroundImage src="./background.png" />
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
