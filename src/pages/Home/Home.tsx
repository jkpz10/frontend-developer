import { useAuth } from '@/hooks/use-auth';
import {
  Button,
  ButtonGroup,
  Container,
  FooterWrapper,
  OuterOrbit,
  TotalWrapper,
} from '@/pages/Home/HomeStyled';
import {
  useFetchDevicesQuery,
  useNotifyMutation,
} from '@/store/features/api/api-slice';
import { useEffect } from 'react';

const Home = () => {
  const { data, refetch } = useFetchDevicesQuery({});
  const { doLogout } = useAuth();

  const [doNotify] = useNotifyMutation();

  const handleNotify = () => {
    const payload = {
      name: 'Jazer Kemuel Zayas',
      email: 'jazer.zayas10@gmail.com',
      repoUrl: 'https://github.com/jkpz10/frontend-developer',
      message:
        'Hey there! 🎉 Just wanted to drop a quick note to let you know that the test is all wrapped up and good to go! If you need anything else or have questions, feel free to give me a shout. Cheers! Coffee is on me. ☕💻',
    };

    doNotify(payload);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      refetch();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <TotalWrapper>
        <div>
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
        </div>

        <OuterOrbit id="orbit-container">
          {/* <div
            className="circle"
            style={{
              top: '-17px',
              left: '125px',
            }}
          /> */}
          {data?.devices?.length > 0
            ? data?.devices?.map((item: any, index: number) => {
                // Calculate angle for each device
                const angle = (index / data.devices.length) * 360;

                // Calculate position based on angle and radius
                const radius = 150; // Adjust the radius as needed
                const deviceTop = `${
                  Math.sin((angle * Math.PI) / 180) * radius - 17 + 160
                }px`;
                const deviceLeft = `${
                  Math.cos((angle * Math.PI) / 180) * radius + 125 + 20
                }px`;

                return (
                  <div
                    key={item.id}
                    className="circle"
                    style={{
                      top: deviceTop,
                      left: deviceLeft,
                    }}
                  />
                );
              })
            : null}
        </OuterOrbit>
      </TotalWrapper>
      <FooterWrapper>
        <ButtonGroup>
          <Button background="#ffffff" color="#334850" onClick={handleNotify}>
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
