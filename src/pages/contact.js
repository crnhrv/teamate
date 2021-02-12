import { HeaderContainer } from '../containers/header';
import { ROUTES } from '../constants/routes';

export const Contact = () => {
  return <HeaderContainer active={ROUTES.CONTACT.title} />;
};
