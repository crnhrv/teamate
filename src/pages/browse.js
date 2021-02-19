import { HeaderContainer } from '../containers/header';
import { BrowseContainer } from '../containers/browse';
import { BrowsePageWrapper } from './styles/browse';
import { ROUTES } from '../constants/routes';
import { Tagline } from '../components';

export const Browse = () => {
  return (
    <>
      <HeaderContainer active={ROUTES.BROWSE.title} />
      <BrowsePageWrapper>
        <Tagline>
          Who's Your <Tagline.Accent>TeaMate</Tagline.Accent>?
        </Tagline>
        <BrowseContainer />
      </BrowsePageWrapper>
    </>
  );
};
