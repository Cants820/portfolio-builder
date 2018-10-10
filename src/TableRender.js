import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Table, TableBody, TableHead, TableRow, Paper } from '@material-ui/core/';

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
};

let id = 0;
function createData(stockSymbol, stockName, closingPrice, openingPrice, divYield, divAmount) {
  id += 1;
  return { id, stockSymbol, stockName, closingPrice, openingPrice, divYield, divAmount };
}

const data = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Stock Ticker</TableCell>
            <TableCell>Stock Name</TableCell>
            <TableCell numeric>Opening Price (USD)</TableCell>
            <TableCell numeric>Closing Price (USD) </TableCell>
            <TableCell numeric>Dividend Yield (%)</TableCell>
            <TableCell numeric>Dividend Amount (USD)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell component="th" scope="row">
                  {n.stockSymbol}
                </TableCell>
                <TableCell>{n.stockName}</TableCell>
                <TableCell numeric>{n.openingPrice}</TableCell>
                <TableCell numeric>{n.closingPrice}</TableCell>
                <TableCell numeric>{n.divYield}</TableCell>
                <TableCell numeric>{n.divAmount}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);