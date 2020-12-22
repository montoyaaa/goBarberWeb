import React, { ButtonHTMLAttributes } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import { Container, AiOutlineLoading3Quarters } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const style = {
  fontSize: 40,
  '@keyframes is-rotating': {
    to: {
      transform: 'rotate(1turn)',
    },
  },
  animation: 'is-rotating 1s infinite',
  paddingTop: 5,
  top: 0,
  left: 0,
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <Container type="button" {...rest}>
    {loading ? <AiOutlineLoading3Quarters style={style} /> : children}
  </Container>
);

export default Button;
