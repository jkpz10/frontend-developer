import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginWrapper = styled.div`
  background: #fffefe;
  color: #8d8d8c;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border-radius: 4px;
  width: 240px;
  gap: 8px;

  h1 {
    font-weight: normal;
    margin: 0;
  }
`;

export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const InputIcons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  img {
    position: absolute;
  }
`;

export const Icon = styled.img`
  padding: 10px;
  max-width: 50px;
  text-align: center;
`;

export const InputField = styled.input`
  width: 98%;
  padding: 10px 10px 10px 45px;
  text-align: left;
  background: #eaeff0;
  border: 0;
  border-radius: 4px;
  color: #8d8d8c;

  :focus-visible {
    color: #8d8d8c;
  }
`;

export const Button = styled.button`
  width: 50%;
  background: #0178c3;
  color: #fff;
  font-weight: 600;
  padding: 12px 24px;
  margin-top: 8px;

  border: 0;
  border-radius: 4px;
  text-transform: uppercase;
  cursor: pointer;
`;
