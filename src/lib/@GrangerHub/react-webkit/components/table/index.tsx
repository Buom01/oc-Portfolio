"use client";
import clsx from "clsx";
import { useState, Children, ReactElement } from "react";

import classes from './table.module.scss';


export const Row = ({children, spoiler = undefined, full = false}: {children: any, spoiler?: ReactElement, full?: Boolean}) =>
{
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <tr className={classes.tableRow} onClick={() => setOpen((open) => (!open))}>
        <td className={clsx(classes.spoilerIndicator, !!spoiler && classes.hasSpoiler, open && classes.spoilerOpen)}></td>
        {
          Children.map(
            children,
            (child, index) => (
              <td className={classes.tableCell} colspan={full ? 100 : undefined}>{child}</td>
            )
          )
        }
      </tr>
      {!!spoiler && 
        <tr className={clsx(classes.spoiler, open && classes.spoilerOpen)}>
          <td colspan="100" className={classes.spoilerCell}>
            {spoiler}
          </td>
        </tr>
      }
    </>
  );
}

export const TableHead = ({children}) => (
  <thead className={classes.tableHead}>
    <Row>
      {children}
    </Row>
  </thead>
)

export const TableBody = ({children}) => (
  <tbody className={classes.tableBody}>
    {children}
  </tbody>
)

export const TableFoot = ({children, ...props}) => (
  <tfoot className={classes.tableFoot}>
    <Row {...props}>
      {children}
    </Row>
  </tfoot>
)

export const Table = ({children}) =>
{
  return (
    <div className={classes.tableContainer}>
      <table className={classes.table}>
        {children}
      </table>
    </div>
  );
}


