import { HeaderContainer } from '../containers/header';
import { BrowseContainer } from '../containers/browse';
import { BrowsePageWrapper } from './styles/browse';
import { HEADER_ROUTES } from '../constants/routes';
import { Tagline } from '../components';

export const Browse = () => {
  return (
    <>
      <HeaderContainer active={HEADER_ROUTES.BROWSE.title} />
      <BrowsePageWrapper>
        <Tagline margin={'1em 0 0 1em'} align="left">
          Who's Your <Tagline.Accent>TeaMate</Tagline.Accent>?
        </Tagline>
        <BrowseContainer />
      </BrowsePageWrapper>
    </>
  );
};
