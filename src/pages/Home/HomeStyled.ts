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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  position: relative;
  top: 25px;
  left: 25px;
  height: 300px;
  width: 300px;
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

export const OuterOrbit = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 294px;
  height: 294px;
  /* border: 2px #4A437F dashed; */
  border-radius: 100%;
  -webkit-animation: spin-right 20s linear infinite;
  animation: spin-right 20s linear infinite;

  .circle {
    position: absolute;
    height: 30px;
    width: 30px;
    border-radius: 100%;
    background-color: #fff;
    transform: translate(-50%, -50%); 
  }

  @-webkit-keyframes spin-right {
    100% {
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
