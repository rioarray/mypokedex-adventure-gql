import React from 'react';

interface IProps {
  children: React.ReactNode;
}

export const ElementColumn: React.FC<IProps> = ({ children }) => (
  <div className="column">
    <div className="ui segment">{children}</div>
  </div>
);

export default ElementColumn;
