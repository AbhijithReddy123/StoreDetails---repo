import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';
import SalesPostModal from './SalesPostModal';
class Sales extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sales: []
        }
    }

    componentDidMount() {
        this.fetchsales();

    }

    fetchsales = () => {
        axios.get('Sales/GetSales')
            .then(res => {
                console.log(res.data);
                this.setState({
                    sales: res.data,

                });

            })
            .catch(e => {
                console.log(e);
            })
    }
    deletesales = (id) => {
        axios.delete(`Sales/DeleteSales/${id}`, this.state)
            .then(res => {
                console.log(res.data);


                this.fetchsales();

            })
            .catch(e => {
                console.log(e);
            })
    }
    render() {
        const { sales } = this.state
        return (
            <div>
                <SalesPostModal />
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>
                                customerName

                            </Table.HeaderCell>
                            <Table.HeaderCell>
                                productName

                            </Table.HeaderCell>
                            <Table.HeaderCell>Store Name</Table.HeaderCell>
                            <Table.HeaderCell> Date Sold</Table.HeaderCell>

                            <Table.HeaderCell>Delete</Table.HeaderCell>
                        </Table.Row>

                    </Table.Header>
                    <Table.Body>
                        {sales.map(s => {
                            return (

                                <Table.Row key={s.salesId}>
                                    <Table.Cell>{s.customer.name}</Table.Cell>
                                    <Table.Cell>{s.product.name}</Table.Cell>
                                    <Table.Cell>{s.store.name}</Table.Cell>
                                    <Table.Cell>{s.dateSold}</Table.Cell>

                                    <Table.Cell><Button color="red" onClick={() => this.deletesales(s.salesId)}>Delete</Button></Table.Cell>

                                </Table.Row>
                            )
                        })}

                    </Table.Body>

                </Table>

            </div>

        );
    }
}
export default Sales;