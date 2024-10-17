import React from 'react';
import styles from './Typography.module.scss';

interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p';
  weight?: 'regular' | 'bold' | 'light';
  children: React.ReactNode;
  className?: string;
  color?: 'white';
  truncate?: number | boolean;
  onClick?: () => void;
  id?: string;
}

export const Typography: React.FC<TypographyProps> = (props) => {
  const {
    variant,
    weight = 'regular',
    children,
    className,
    color,
    truncate = false,
    onClick,
    id,
  } = props;

  const Tags: Record<string, React.ElementType> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    bodyXL: 'p',
    bodyL: 'p',
    bodyM: 'p',
    bodyXS: 'p',
    bodyS: 'p',
    bodyX: 'p',
  };

  const TagName = Tags[variant] || 'div'; 

  const classNamedGenerated = [
    styles[variant],
    styles[weight],
    color && styles[color],
    className,
  ]
    .filter(Boolean) 
    .join(' ')
    .trim();

  const truncateString = (str: string, maxNumber: number) => {
    if (typeof str === 'string') {
      return str.length <= maxNumber ? str : str.slice(0, maxNumber) + '...';
    }
    return str;
  };

  return (
    <TagName onClick={onClick} id={id} className={classNamedGenerated}>
    {typeof truncate === 'number' ? truncateString(children as string, truncate) : children}
    </TagName>
  );
};
