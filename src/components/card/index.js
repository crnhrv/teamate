import { Container, Group, Header, Text, Image } from './styles/card';

const Card = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Card.Group = ({ children, ...restProps }) => {
  return <Group {...restProps}>{children}</Group>;
};

Card.Header = ({ children, ...restProps }) => {
  return <Header {...restProps}>{children}</Header>;
};

Card.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

Card.Image = ({ src, alt, ...restProps }) => {
  return <Image src={src} alt={alt} {...restProps} />;
};

export default Card;
