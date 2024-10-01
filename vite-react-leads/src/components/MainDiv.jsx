import React from "react";
import Form from "./Form";
import TableLeads from "./TableLeads";
import "./MainDiv.css";

class Main extends React.Component {
    render() {
        return(
            <main>
                <Form/>
                <TableLeads leads={this.props.leads}/>
            </main>
        )
    }
}

export default Main;