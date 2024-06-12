import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './Table.css';

export default function DataTable({rows,columns}) {
  return (
    <div style={{ height: 400, width: '56%'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: '#f5f5f5',
            borderBottom: '2px solid #ccc',
            textAlign: 'center',
          },
          '& .MuiDataGrid-columnHeaderTitleContainer': {
            display: 'flex',
            justifyContent: 'center',
          },
          '& .MuiDataGrid-cell': {
            textAlign: 'center',
          },
          
        }}
      />
    </div>
  );
}
