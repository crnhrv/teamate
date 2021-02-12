import {
  Container,
  Pane,
  Title,
  Subtitle,
  Accent,
  Button,
} from './styles/hero';

const Hero = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Hero.Pane = ({ children, ...restProps }) => {
  return <Pane {...restProps}>{children}</Pane>;
};

Hero.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

Hero.Subtitle = ({ children, ...restProps }) => {
  return <Subtitle {...restProps}>{children}</Subtitle>;
};

Hero.Accent = ({ children, ...restProps }) => {
  return <Accent {...restProps}>{children}</Accent>;
};

Hero.Button = ({ size = 'm', children, ...restProps }) => {
  return (
    <Button size {...restProps}>
      {children}
    </Button>
  );
};

export default Hero;
