import React from "react";
import TableRow from "./TableRow";
import "./Table.css";

class TableLeads extends React.Component {
    
    render() {
        const rows = [];

        this.props.leads.forEach(lead => {
            rows.push(
                <TableRow
                    name={lead.name}
                    email={lead.email}
                    numPhone={lead.numPhone}/>
            )
        });
        
        return (
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Celular</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}

export default TableLeads;