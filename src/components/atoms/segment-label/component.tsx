import React from 'react';
import { Segment, Label } from 'semantic-ui-react';
import { SemanticCOLORS } from 'semantic-ui-react/dist/commonjs/generic';

interface IProps {
  color: SemanticCOLORS;
  value: number;
}

export const SegmentLabel: React.FC<IProps> = ({ color, value }) => (
  <Segment>
    <Label as="a" color={color} ribbon>{`# ${value}`}</Label>
  </Segment>
);

export default SegmentLabel;
