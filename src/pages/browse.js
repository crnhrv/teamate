import { HeaderContainer } from '../containers/header';
import { ROUTES } from '../constants/routes';

export const Browse = () => {
  return <HeaderContainer active={ROUTES.BROWSE.title} />;
};
