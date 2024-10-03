import React from "react";

class TableRow extends React.Component {
    render() {
        const {name, email, numPhone, index, deleteLead} = this.props;

        return(
            <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{numPhone}</td>
                <td>
                    <button onClick={() => {deleteLead(index)}}>Excluir</button>
                </td>
            </tr>
        );
    }
}

export default TableRow;