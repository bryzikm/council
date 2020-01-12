import React, { memo } from "react";

import { IHeaderProps } from "./Table.types";

const Header = (props: IHeaderProps) => {
  const {
    data,
    onClickHandle,
    sortedBy
  } = props;

  const renderHeader = () => {
    if (data.length === 0) return null;

    const header = Object.keys(data[0]);
    return header.map((key: any, index: any) => {
      if (key === "id") {
        return null;
      }

      return (
        <th
          id={key}
          className="table__header"
          key={index}
          onClick={onClickHandle}
        >
          <i
            style={sortedBy === key ? { opacity: 1 } : { opacity: 0 }}
            className="table__header-icon fa fa-fw fa-sort"
          />
          {key.toUpperCase()}
        </th>
      )
    });
  };

  return (
    <tr className="table__row">
      {renderHeader()}
    </tr>
  )
};

export default memo(Header);
