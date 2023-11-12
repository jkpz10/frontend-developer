import styled from 'styled-components';

interface ButtonProps {
  background?: string;
  color?: string;
}

export const Container = styled.div`
  background: #fe6530;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TotalWrapper = styled.div`
  position: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const FooterWrapper = styled.div`
  background: #e76138;
  width: 100%;

  position: fixed;
  bottom: 0;
  padding: 16px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;

export const Button = styled.button<ButtonProps>`
  background: ${(props) => props.background ?? 'unset'};
  color: ${(props) => props.color ?? '#334850'};
  font-weight: 600;
  padding: 8px 16px;

  border: 0;
  border-radius: 4px;
  text-transform: uppercase;
  cursor: pointer;
`;
