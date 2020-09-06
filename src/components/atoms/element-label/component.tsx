import React from 'react';

interface IProps {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const ElementLabel: React.FC<IProps> = ({
  className,
  children,
  style,
}) => (
  <div className={className} style={style}>
    {children}
  </div>
);

export default ElementLabel;
