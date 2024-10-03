import React from "react";
import Form from "./Form";
import TableLeads from "./TableLeads";
import "./MainDiv.css";

class Main extends React.Component {
    constructor (props) {
        super(props);

        let leads = props.leads;

        this.state = {
            leads
        }
    }

    onHandleSubmit = (lead) => {
        this.setState({
            leads: [...this.state.leads, lead]
        })
    }

    onHandleDeleteLead = (index) => {
        const { leads } = this.state;

        this.setState({
            leads: leads.filter((leads, i) => {
                return i != index;
            })
        })
    }

    render() {
        return(
            <main>
                <Form onHandleSubmit={this.onHandleSubmit}/>
                <TableLeads leads={this.state.leads} onDeleteLead={this.onHandleDeleteLead}/>
            </main>
        )
    }
}

export default Main;