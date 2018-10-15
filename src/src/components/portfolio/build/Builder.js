import React from 'react';
import MUIDataTable from "mui-datatables";

class Builder extends Component {

function CustomHeadRender(display, filter, sort, sortDirection, updateDirection) {
    function(columnMeta: {
        display: enum('true', 'false', 'excluded'),
        filter: bool,
        sort: bool,
        sortDirection: bool,
          }, 
        updateDirection: function)        
    }

    const columns = [
    {
    name: "Stock Symbol",
    options: {
    filter: true,
    sort: true,
    }
    },
    {
    name: "Stock Name",
    options: {
    filter: true,
    sort: false,
    }
    },
    {
    name: "Closing Price",
    options: {
    filter: true,
    sort: false,
    }
    },
    {
    name: "Opening Price",
    options: {
    filter: true,
    sort: false,
    }
    },
    {
    name: "Dividend Yield",
    options: {
    filter: true,
    sort: false,
    }
    },
    {
    name: "Dividend Amount",
    options: {
    filter: true,
    sort: false,
    }
    },
    ];

    const data = [
    ["Joe James", "Test Corp", "Yonkers", "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
    ];

    const options = {
    filterType: 'checkbox',
    };

    <MUIDataTable
    title={"Stock List"}
    data={data}
    columns={columns}
    options={options}
    />
}

export default Builder;