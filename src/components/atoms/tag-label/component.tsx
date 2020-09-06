import React from 'react';
import styled from '@emotion/styled';

interface IProps {
  className?: string;
  style?: React.CSSProperties;
  value: string;
}

const Container = styled.div((props) => ({
  backgroundColor: props.style?.backgroundColor,
  borderColor: props.style?.borderColor,
  color: props.style?.color,
}));

export const TagLabel: React.FC<IProps> = ({ className, style, value }) => (
  <Container className={className} style={style}>
    {value}
  </Container>
);

export default TagLabel;
