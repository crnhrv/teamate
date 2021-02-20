import { HeaderContainer } from '../containers/header';
import { HEADER_ROUTES } from '../constants/routes';

export const Contact = () => {
  return <HeaderContainer active={HEADER_ROUTES.CONTACT.title} />;
};
