import { HeaderContainer } from '../containers/header';
import { ROUTES } from '../constants/routes';

export const About = () => {
  return <HeaderContainer active={ROUTES.ABOUT.title} />;
};
