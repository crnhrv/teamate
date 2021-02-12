import { Container, Image } from './styles/background';

const Background = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Background.Image = ({ src, alt, ...restProps }) => {
  console.log(src, alt);
  return <Image src={src} alt={alt} {...restProps}></Image>;
};

export default Background;
