import React, { ReactNode } from 'react';
import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd';
import styles from './Button.module.scss';
import cn from 'classnames';

type ButtonProps = AntButtonProps & {
  variant?: 'contained' | 'outlined';
  color?: 'primary' | 'secondary';
  children: ReactNode
};

const Button: React.FC<ButtonProps> = ({ variant = 'contained', color = 'primary', children }) => {

  return <AntButton className={cn(styles.btn,
    variant === 'contained' && styles.btn__contained,
    variant === 'outlined' && styles.btn__outlined
  )} >
    {children}
  </AntButton>
}
export default Button;