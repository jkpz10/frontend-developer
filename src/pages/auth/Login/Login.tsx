import {
  Container,
  FormWrapper,
  Icon,
  InputField,
  InputIcons,
  Button,
  LoginWrapper,
} from '@/pages/auth/Login/LoginStyled';

const Login = () => {
  return (
    <Container>
      <LoginWrapper>
        <h1>Login</h1>
        <FormWrapper>
          <InputIcons>
            <Icon src={'/icons/mail.svg'} alt="email" />
            <InputField
              className="input-field"
              type="text"
              placeholder="Email Address"
            />
          </InputIcons>
          <InputIcons>
            <Icon src={'/icons/release-alert.svg'} alt="email" />
            <InputField
              className="input-field"
              type="passwowrd"
              placeholder="Password"
            />
          </InputIcons>
          <Button type="submit">Login</Button>
        </FormWrapper>
      </LoginWrapper>
    </Container>
  );
};

export default Login;
