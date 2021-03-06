import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles, Table, TableBody, TableCell, TableHead, TablePagination, 
TableRow, TableSortLabel, Toolbar, Typography, Paper, Checkbox, IconButton,
Tooltip } from '@material-ui/core/';
import { DeleteIcon, FilterListIcon } from '@material-ui/icons/';
import { lighten } from '@material-ui/core/styles/colorManipulator';

const toolbarStyles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 1020,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  root: {
    paddingRight: theme.spacing.unit,
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    color: theme.palette.text.secondary,
  },
  title: {
    flex: '0 0 auto',
  },
});

let counter = 0;
function createData(stockName, stockSymbol, closingPrice, openingPrice, divYield, divAmount) {
  counter += 1;
  return { id: stockName, stockSymbol, closingPrice, openingPrice, divYield, divAmount };
}

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

let stockName;
let stockSymbol;
let closingPrice;
let openingPrice;
let divAmount;
let divYield;
const displayData  = [
  stockName: '',
  stockSymbol: '',
  closingPrice: '',
  openingPrice: '',
  divYield: '',
  divAmount: ''
]

const rows = [
  { id: '', numeric: false, disablePadding: true, label: '' },
  { id: '', numeric: false, disablePadding: true, label: '' },
  { id: '', numeric: false, disablePadding: true, label: '' },
  { id: '', numeric: false, disablePadding: true, label: '' },
  { id: '', numeric: false, disablePadding: true, label: '' },
  { id: '', numeric: false, disablePadding: true, label: '' }
];

class Build extends Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  state = {
    order: 'asc',
    orderBy: '',
    selected: [],
    data: [
      createData(displayData),
    ],
    page: 0,
    rowsPerPage: 6,
  };

  render() {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount } = this.props;

    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={numSelected === rowCount}
              onChange={onSelectAllClick}
            />
          </TableCell>
          {rows.map(row => {
            return (
              <TableCell
                key={row.id}
                numeric={row.numeric}
                padding={row.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === row.id ? order : false}
              >
                <Tooltip
                  title="Sort"
                  placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === row.id}
                    direction={order}
                    onClick={this.createSortHandler(row.id)}
                  >
                    {row.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            );
          }, this)}
        </TableRow>
      </TableHead>
    );
  }


Build.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};



let EnhancedTableToolbar = props => {
  const { numSelected, classes } = props;

  // return (
  //   <Toolbar
  //     className={classNames(classes.root, {
  //       [classes.highlight]: numSelected > 0,
  //     })}
  //   >
  //     <div className={classes.title}>
  //       {numSelected > 0 ? (
  //         <Typography color="inherit" variant="subtitle1">
  //           {numSelected} selected
  //         </Typography>
  //       ) : (
  //         <Typography variant="h6" id="tableTitle">
  //           Nutrition
  //         </Typography>
  //       )}
  //     </div>
  //     <div className={classes.spacer} />
  //     <div className={classes.actions}>
  //       {numSelected > 0 ? (
  //         <Tooltip title="Delete">
  //           <IconButton aria-label="Delete">
  //             <DeleteIcon />
  //           </IconButton>
  //         </Tooltip>
  //       ) : (
  //         <Tooltip title="Filter list">
  //           <IconButton aria-label="Filter list">
  //             <FilterListIcon />
  //           </IconButton>
  //         </Tooltip>
  //       )}
  //     </div>
  //   </Toolbar>
  // );
};

// Build.propTypes = {
//   classes: PropTypes.object.isRequired,
//   numSelected: PropTypes.number.isRequired,
// };

EnhancedTableToolbar = withStyles(toolbarStyles)(Build);



  function handleRequestSort(event, property) {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy });
  };

  function handleSelectAllClick(event) {
    if (event.target.checked) {
      this.setState(state => ({ selected: state.data.map(n => n.id) }));
      return;
    }
    this.setState({ selected: [] });
  };

  function handleClick(event, id) {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    this.setState({ selected: newSelected });
  };

  function handleChangePage(event, page) {
    this.setState({ page });
  };

  function handleChangeRowsPerPage(event) {
    this.setState({ rowsPerPage: event.target.value });
  };

  function isSelected(id) {
    this.state.selected.indexOf(id) !== -1;
  } 
  
  Build.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
}  
  export default withStyles(styles)(Build);


//   render() {
//     const { classes } = this.props;
//     const { data, order, orderBy, selected, rowsPerPage, page } = this.state;
//     const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

//     return (
//       <Paper className={classes.root}>
//         <EnhancedTableToolbar numSelected={selected.length} />
//         <div className={classes.tableWrapper}>
//           <Table className={classes.table} aria-labelledby="tableTitle">
//             <EnhancedTableHead
//               numSelected={selected.length}
//               order={order}
//               orderBy={orderBy}
//               onSelectAllClick={this.handleSelectAllClick}
//               onRequestSort={this.handleRequestSort}
//               rowCount={data.length}
//             />
//             <TableBody>
//               {stableSort(data, getSorting(order, orderBy))
//                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                 .map(n => {
//                   const isSelected = this.isSelected(n.id);
//                   return (
//                     <TableRow
//                       hover
//                       onClick={event => this.handleClick(event, n.id)}
//                       role="checkbox"
//                       aria-checked={isSelected}
//                       tabIndex={-1}
//                       key={n.id}
//                       selected={isSelected}
//                     >
//                       <TableCell padding="checkbox">
//                         <Checkbox checked={isSelected} />
//                       </TableCell>
//                       <TableCell component="th" scope="row">
//                   {n.stockSymbol}
//                 </TableCell>
//                 <TableCell>{n.stockName}</TableCell>
//                 <TableCell numeric>{n.openingPrice}</TableCell>
//                 <TableCell numeric>{n.closingPrice}</TableCell>
//                 <TableCell numeric>{n.divYield}</TableCell>
//                 <TableCell numeric>{n.divAmount}</TableCell>
//                     </TableRow>
//                   );
//                 })}
//               {emptyRows > 0 && (
//                 <TableRow style={{ height: 49 * emptyRows }}>
//                   <TableCell colSpan={6} />
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>
//         </div>
//         <TablePagination
//           component="div"
//           count={data.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           backIconButtonProps={{
//             'aria-label': 'Previous Page',
//           }}
//           nextIconButtonProps={{
//             'aria-label': 'Next Page',
//           }}
//           onChangePage={this.handleChangePage}
//           onChangeRowsPerPage={this.handleChangeRowsPerPage}
//         />
//       </Paper>
//     );
//   }
// }






// axios.get(`http://web-01.dockerhearts.online:5000/api/v1/users`)
//     .then(res => {
//         console.log(res.data);
//         this.setState({
//             runners: res.data
//         })
//     }).catch((error) => {
//         alert(error);
//     })

// axios.get(`http://web-01.dockerhearts.online:5000/api/v1/users`)
//     .then(res => {
//         console.log(res.data);
//         this.setState({
//             runners: res.data
//         })
//     }).catch((error) => {
//         alert(error);
//     })

// axios.get(`http://web-01.dockerhearts.online:5000/api/v1/users`)
//     .then(res => {
//         console.log(res.data);
//         this.setState({
//             runners: res.data
//         })
//     }).catch((error) => {
//         alert(error);
//     })

