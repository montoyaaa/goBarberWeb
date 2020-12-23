import React, { ButtonHTMLAttributes } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import { Container, AiOutlineLoading } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  // disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <Container type="button" disabled={loading} {...rest}>
    {loading ? (
      <AiOutlineLoading>
        {' '}
        <AiOutlineLoading3Quarters />{' '}
      </AiOutlineLoading>
    ) : (
      children
    )}
  </Container>
);
export default Button;
