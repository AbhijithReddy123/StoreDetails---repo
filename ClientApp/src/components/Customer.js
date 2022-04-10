import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';
import CustomerModal from './CustomerModal';
import CustomerEditModal from './CustomerEditModal';
class Customer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: []

        };
    }
    componentDidMount() {
        this.fetchCustomers();
    }

    fetchCustomers = () => {
        axios.get('Customers/GetCustomer')
            .then(res => {
                console.log(res.data);
                this.setState({
                    customers: res.data,

                });

            })
            .catch(e => {
                console.log(e);
            })
    }

    deletecustomer = (id) => {
        axios.delete(`Customers/DeleteCustomer/${id}`, this.state)
            .then(res => {
                console.log(res.data);
               
            
                this.fetchCustomers();

            })
            .catch(e => {
                console.log(e);
            })
    }

    
 
    
    render() {
        const { customers } = this.state;
        return (
            <div>

               <CustomerModal />

                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>
                                Name

                            </Table.HeaderCell>
                            <Table.HeaderCell>
                                Address

                            </Table.HeaderCell>
                            <Table.HeaderCell>Update</Table.HeaderCell>
                            <Table.HeaderCell> Delete </Table.HeaderCell>
                        </Table.Row>

                    </Table.Header>
                    <Table.Body>
                        {customers.map(c => {
                            return (

                                <Table.Row key={c.id}  >
                                    <Table.Cell>{c.customerName}</Table.Cell>
                                    <Table.Cell>{c.customerAddress}</Table.Cell>

                                    <td><CustomerEditModal  /></td>
                                        
                                    <td><Button color="red" onClick={() => this.deletecustomer(c.id)} >Delete</Button></td>
                                </Table.Row>
                                )
                        })}

                    </Table.Body>

                </Table>

            </div>
            );

    }
}
export default Customer;