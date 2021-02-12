import { HeaderContainer } from '../containers/header';

export const Home = ({ children, ...restProps }) => {
  return <HeaderContainer active="home" />;
};
