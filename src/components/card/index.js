import { Container, Header, Text, Image } from './styles/card';

const Card = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Card.Header = ({ children, ...restProps }) => {
  return <Header {...restProps}>{children}</Header>;
};

Card.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

Card.Image = ({ src, alt, children, ...restProps }) => {
  return (
    <Image src={src} alt={alt} {...restProps}>
      {children}
    </Image>
  );
};

export default Card;
