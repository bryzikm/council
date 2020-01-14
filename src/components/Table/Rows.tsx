import React, { memo } from 'react';

import { IPropsData, IRowProps } from './Table.types';

const Rows = (props: IRowProps) => {
  const {
    data,
    onClickHandler
  } = props;

  const renderItem = () => {
    if (data.length === 0) {
      return null;
    }

    return data.map((item: IPropsData) => {
      const {
        id,
        name,
        birthDate,
        phone,
        city
      } = item;

      return (
        <tr key={id} className="table__row">
          <td className="table__row-element">{name}</td>
          <td className="table__row-element">{birthDate}</td>
          <td className="table__row-element">{phone}</td>
          <td className="table__row-element element-with-icon-wrapper">
            {city}
            <div className="table__row-element-trash-icon">
              <i id={id} onClick={onClickHandler} className="fa fa-trash-o"/>
            </div>
          </td>
        </tr>
      )
    });
  };

  return (
    <tbody>
      {renderItem()}
    </tbody>
  )
};

export default memo(Rows);
