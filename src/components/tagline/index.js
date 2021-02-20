import { Title, Subtitle, Accent } from './styles/tagline';

const Tagline = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

Tagline.Subtitle = ({ children, ...restProps }) => {
  return <Subtitle {...restProps}>{children}</Subtitle>;
};

Tagline.Accent = ({ children, ...restProps }) => {
  return <Accent {...restProps}>{children}</Accent>;
};

export default Tagline;
