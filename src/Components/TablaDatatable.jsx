import DataTable from "react-data-table-component";
import { React, useMemo } from "react";

const columns = [
    {
        name : 'Id',
        selector : row => row.id
    },
    {
        name : 'Nombre',
        selector : row => row.nombre
    },
    {
        name : 'Apellidos',
        selector : row => row.apellidos
    }
]

// const actionsMemo = useMemo(() => <DataTable onExport={() => (data)} />, []);

const TablaDatatable = (props) =>{

    return(

        <DataTable
            columns={columns}
            data={ props.data }
            selectableRows
            expandableRows
            // expandableRowsComponent={test}
            pagination={true}
            // actions={actionsMemo}
        />
    )
}
export default TablaDatatable