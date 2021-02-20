import { HeaderContainer } from '../containers/header';
import { HEADER_ROUTES } from '../constants/routes';

export const About = () => {
  return <HeaderContainer active={HEADER_ROUTES.ABOUT.title} />;
};
