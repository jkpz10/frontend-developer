import { useAuth } from '@/hooks/use-auth';
import {
  Button,
  ButtonGroup,
  Container,
  FooterWrapper,
  TotalWrapper,
} from '@/pages/Home/HomeStyled';
import { useFetchDevicesQuery } from '@/store/features/api/api-slice';
import { useEffect } from 'react';

const Home = () => {
  const { data, refetch } = useFetchDevicesQuery({});
  const { doLogout } = useAuth();

  useEffect(() => {
    const interval = setInterval(() => {
      refetch();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
          {data?.devices?.length ?? 0}
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
          <Button background="#334850" color="#ffffff" onClick={doLogout}>
            Log Out
          </Button>
        </ButtonGroup>
      </FooterWrapper>
    </Container>
  );
};

export default Home;
