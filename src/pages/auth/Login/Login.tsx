import { useAuth } from '@/hooks/use-auth';
import {
  Container,
  FormWrapper,
  Icon,
  InputField,
  InputIcons,
  Button,
  LoginWrapper,
} from '@/pages/auth/Login/LoginStyled';
import { SubmitHandler, useForm } from 'react-hook-form';

export interface IFormLogin {
  email: string;
  password: string;
}

const Login = () => {
  const { register, handleSubmit } = useForm<IFormLogin>();

  const { doLogin } = useAuth();

  const onSubmit: SubmitHandler<IFormLogin> = (data) => {
    doLogin(data);
  };

  return (
    <Container>
      <LoginWrapper>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormWrapper>
            <InputIcons>
              <Icon src={'/icons/mail.svg'} alt="email" />
              <InputField
                className="input-field"
                type="text"
                placeholder="Email Address"
                {...register('email', { required: true })}
              />
            </InputIcons>
            <InputIcons>
              <Icon src={'/icons/release-alert.svg'} alt="email" />
              <InputField
                className="input-field"
                type="password"
                placeholder="Password"
                {...register('password', { required: true })}
              />
            </InputIcons>
            <Button type="submit">Login</Button>
          </FormWrapper>
        </form>
      </LoginWrapper>
    </Container>
  );
};

export default Login;
