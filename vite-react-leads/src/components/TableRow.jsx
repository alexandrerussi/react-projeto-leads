import React from "react";

class TableRow extends React.Component {
    render() {
        return(
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.email}</td>
                <td>{this.props.numPhone}</td>
                <td>
                    <button>Excluir</button>
                </td>
            </tr>
        );
    }
}

export default TableRow;