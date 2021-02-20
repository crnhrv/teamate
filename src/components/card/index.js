import {
  Container,
  Group,
  Pane,
  CartPane,
  Section,
  Header,
  Text,
  Accent,
  Image,
  Button,
  Input,
} from './styles/card';

const Card = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Card.Group = ({ children, ...restProps }) => {
  return <Group {...restProps}>{children}</Group>;
};

Card.Pane = ({ children, ...restProps }) => {
  return <Pane {...restProps}>{children}</Pane>;
};

Card.CartPane = ({ children, ...restProps }) => {
  return <CartPane {...restProps}>{children}</CartPane>;
};

Card.Section = ({ children, ...restProps }) => {
  return <Section {...restProps}>{children}</Section>;
};

Card.Header = ({ children, ...restProps }) => {
  return <Header {...restProps}>{children}</Header>;
};

Card.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

Card.Accent = ({ children, ...restProps }) => {
  return <Accent {...restProps}>{children}</Accent>;
};

Card.Image = ({ src, alt, ...restProps }) => {
  return <Image src={src} alt={alt} {...restProps} />;
};

Card.Button = ({ children, ...restProps }) => {
  return <Button {...restProps}>{children}</Button>;
};

Card.Input = ({ children, ...restProps }) => {
  return <Input {...restProps}>{children}</Input>;
};

export default Card;
