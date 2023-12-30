import React from 'react';
import {
    StyledTable,
    TableBody,
    TableContainer,
    TableDataCell,
    TableHead,
    TableHeaderCell
} from "./FormTable.style";


function FormTable({data}) {
    return (
        <TableContainer>
            <StyledTable>
                <TableHead>
                    <tr>
                        <TableHeaderCell>Name</TableHeaderCell>
                        <TableHeaderCell>Country</TableHeaderCell>
                    </tr>
                </TableHead>
                <TableBody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <TableDataCell>{item.name}</TableDataCell>
                            <TableDataCell>{item.country}</TableDataCell>
                        </tr>
                    ))}
                </TableBody>
            </StyledTable>
        </TableContainer>
    );
}

export default FormTable;
