import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Table, TableBody, TableHead, TableRow, Paper } from '@material-ui/core/';
import Build from './Build';

class TableRender extends React.Component {
  render() {
    <Build/>;
  }
}
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
  createData(stockSymbol, stockName, closingPrice, openingPrice, divYield, divAmount),
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

export default withStyles(styles)(TableRender);