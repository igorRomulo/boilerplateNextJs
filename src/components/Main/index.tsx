import { Wrapper, Title, Description, Logo, Illustration } from './styles'

const Main = () => (
  <Wrapper>
    <Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    />
    <Title>React Avançado</Title>
    <Description>TypeScript, ReactJS, NextJS e Styled Components</Description>
    <Illustration src="/img/hero-illustration.svg" />
  </Wrapper>
)

export default Main
