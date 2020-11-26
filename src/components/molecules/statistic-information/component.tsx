import React from 'react';
import { ElementLabel, ElementColumn } from 'components/atoms';

interface IProps {
  maxHp: string | number;
  maxCp: string | number;
}

export const DataGridColumnInformation: React.FC<IProps> = ({
  maxHp,
  maxCp,
}) => (
  <div className="ui stackable two column grid">
    <ElementColumn>
      <>
        <ElementLabel className="font-weight-700">Max HP</ElementLabel>
        <ElementLabel>{maxHp}</ElementLabel>
      </>
    </ElementColumn>
    <ElementColumn>
      <>
        <ElementLabel className="font-weight-700">Max CP</ElementLabel>
        <ElementLabel>{maxCp}</ElementLabel>
      </>
    </ElementColumn>
  </div>
);

export default DataGridColumnInformation;
