import { HeaderContainer } from '../containers/header';
import { ROUTES } from '../constants/routes';
import { Link } from 'react-router-dom';
import { Background, Hero } from '../components';
import backgroundImg from '../img/tea-leaf.png';

export const Home = () => {
  return (
    <>
      <HeaderContainer active={ROUTES.HOME.title} />
      <Hero>
        <Hero.Title>
          The
          <br />
          Perfect
          <br />
          <Hero.Accent>Tea</Hero.Accent>
        </Hero.Title>
        <Hero.Pane>
          <Hero.Subtitle>Find your brew today.</Hero.Subtitle>
          <Link to={ROUTES.BROWSE.path}>
            <Hero.Button>browse</Hero.Button>
          </Link>
        </Hero.Pane>
        <Hero.Pane></Hero.Pane>
        <Hero.Pane></Hero.Pane>
      </Hero>
      <Background>
        <Background.Image src={backgroundImg} />
      </Background>
    </>
  );
};
