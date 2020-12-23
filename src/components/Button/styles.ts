import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  disabled?: boolean;
}

const customShade = {
  orange: shade(0.2, '#ff9000'),
};

export const Container = styled.button<ContainerProps>`
  background: ${props => (props.disabled ? '#232129' : '#ff9000')};
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #312e38;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;
  &:hover {
    background: ${props => (props.disabled ? '#232129' : customShade.orange)};
    cursor: ${props => (props.disabled ? 'initial' : 'pointer')};
  }
`;

const spin = keyframes`
 to {transform: rotate(360deg)}
`;

export const AiOutlineLoading = styled.h2`
  padding-top: 8px;
  font-size: 35px;
  cursor: initial;

  animation-name: ${spin};
  animation-duration: 1500ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;
