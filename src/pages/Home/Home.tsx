import {
  Button,
  ButtonGroup,
  Container,
  FooterWrapper,
  TotalWrapper,
} from '@/pages/Home/HomeStyled';

const Home = () => {
  return (
    <Container>
      <TotalWrapper>
        <div
          style={{
            fontSize: '64px',
            lineHeight: '64px',
            fontWeight: 200,
          }}
        >
          2
        </div>
        <div
          style={{
            lineHeight: '18px',
            fontWeight: 600,
          }}
        >
          DEVICES <br /> ONLINE
        </div>
      </TotalWrapper>
      <FooterWrapper>
        <ButtonGroup>
          <Button background="#ffffff" color="#334850">
            Notify
          </Button>
          <Button background="#334850" color="#ffffff">
            Log Out
          </Button>
        </ButtonGroup>
      </FooterWrapper>
    </Container>
  );
};

export default Home;
