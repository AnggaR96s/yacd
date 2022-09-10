import cx from 'clsx';
import { formatDistance, Locale } from 'date-fns';
import { enUS, zhCN } from 'date-fns/locale'
import React from 'react';
import { ChevronDown } from 'react-feather';
import { useTranslation } from 'react-i18next';
import { useSortBy, useTable } from 'react-table';

import prettyBytes from '../misc/pretty-bytes';
import s from './ConnectionTable.module.scss';

const sortDescFirst = true;

const columns = [
  { accessor: 'id', show: false },
  { Header: 'Host', accessor: 'host' },
  { Header: 'PROCESS', accessor: 'process' },
  { Header: 'DL', accessor: 'download', sortDescFirst },
  { Header: 'UL', accessor: 'upload', sortDescFirst },
  { Header: 'DL Speed', accessor: 'downloadSpeedCurr', sortDescFirst },
  { Header: 'UL Speed', accessor: 'uploadSpeedCurr', sortDescFirst },
  { Header: 'Chains', accessor: 'chains' },
  { Header: 'Rule', accessor: 'rule' },
  { Header: 'Time', accessor: 'start', sortDescFirst },
  { Header: 'Source', accessor: 'source' },
  { Header: 'Destination Ip', accessor: 'destinationIP' },
  { Header: 'Type', accessor: 'type' },
];

function renderCell(cell: { column: { id: string }; value: number }, locale: Locale) {
  switch (cell.column.id) {
    case 'start':
      return formatDistance(cell.value, 0, { locale: locale });
    case 'download':
    case 'upload':
      return prettyBytes(cell.value);
    case 'downloadSpeedCurr':
    case 'uploadSpeedCurr':
      return prettyBytes(cell.value) + '/s';
    default:
      return cell.value;
  }
}

const sortById = { id: 'id', desc: true };
const tableState = {
  sortBy: [
    // maintain a more stable order
    sortById,
  ],
  hiddenColumns: ['id'],
};

function Table({ data }) {
  const { getTableProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
      initialState: tableState,
      autoResetSortBy: false,
    },
    useSortBy
  );

  const { t, i18n } = useTranslation();
  const locale = i18n.language === 'zh' ? zhCN : enUS;

  return (
    <div {...getTableProps()}>
      {headerGroups.map((headerGroup) => {
        return (
          <div {...headerGroup.getHeaderGroupProps()} className={s.tr}>
            {headerGroup.headers.map((column) => (
              <div
                {...column.getHeaderProps(column.getSortByToggleProps())}
                className={s.th}
              >
                <span>{t(column.render('Header'))}</span>
                <span className={s.sortIconContainer}>
                  {column.isSorted ? (
                    <span className={column.isSortedDesc ? '' : s.rotate180}>
                      <ChevronDown size={16} />
                    </span>
                  ) : null}
                </span>
              </div>
            ))}

            {rows.map((row, i) => {
              prepareRow(row);
              return row.cells.map((cell, j) => {
                return (
                  <div
                    {...cell.getCellProps()}
                    className={cx(
                      s.td,
                      i % 2 === 0 ? s.odd : false,
                      j >= 2 && j <= 5 ? s.du : false
                    )}
                  >
                    {renderCell(cell, locale)}
                  </div>
                );
              });
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Table;
