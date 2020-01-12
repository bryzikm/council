import React, { useState, memo } from "react";

import Header from "./Header";
import Rows from "./Rows";
import "./Table.style.scss";
import { IEvent, IProps } from "./Table.types";

const Table = (props: IProps) => {
  const [sort, setSort] = useState("");
  const [reload, setReload] = useState(false);
  const { data } = props;

  function compareNumbers(a: any, b: any, columnId: string) {
    const nameA = a[columnId];
    const nameB = b[columnId];

    if (!nameA || !nameB) return 0;

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    return 0;
  }

  const handleSortColumn = (e: IEvent) => {
    const columnId = e.target.id;
    if (columnId === sort) {
      data.reverse();
      setReload(!reload);
      return null;
    }

    data.sort((a: any, b: any) => compareNumbers(a, b, columnId));
    setSort(columnId);
  };

  const handleDeleteRow = (e: IEvent) => {
    const rowId = e.target.id;
    const selectedItem = data.find((item: any) => item.id === rowId);
    if (!selectedItem) {
      return null;
    }
    data.splice(data.indexOf(selectedItem), 1);
    setReload(!reload);
  };

  return (
    <div>
      <table className="table">
        <tbody>
          <Header
            data={data}
            onClickHandle={handleSortColumn}
            sortedBy={sort}
          />
          <Rows
            data={data}
            onClickHandler={handleDeleteRow}
          />
        </tbody>
      </table>
    </div>
  );
};

export default memo(Table);
