import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';
import StorePostModal from './StorePostModal';
import StoreEditModal from './StoreEditModal';
class Store extends Component {
    constructor(props) {
        super(props);
        this.state = {
            store: []

        };
        
        
    }
    componentDidMount() {
        this.fetchstore();
    }
    fetchstore = () => {
        axios.get('Stores/GetStore')
            .then(res => {
                console.log(res.data)
                this.setState({
                    store: res.data,

                })
            })
                    .catch(e => {
                        console.log(e)
                    })
           
    }
    deletestore = (id) => {
        axios.delete(`Stores/DeleteStore/${id}`, this.state)
            .then(res => {
                console.log(res.data);


                this.fetchstore();

            })
            .catch(e => {
                console.log(e);
            })
    }

    render() {
        const { store } = this.state;
        return (
            
            <div>

                <StorePostModal />
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>
                                Store Name

                            </Table.HeaderCell>
                            <Table.HeaderCell>
                                Store Address

                            </Table.HeaderCell>
                            <Table.HeaderCell>Update</Table.HeaderCell>
                            <Table.HeaderCell>Delete</Table.HeaderCell>

                        </Table.Row>


                    </Table.Header>
                    <Table.Body>
                        {store.map(s => {
                            return (
                                <Table.Row key={s.id}>
                                    <Table.Cell>{s.storeName}</Table.Cell>
                                    <Table.Cell>{s.storeAddress}</Table.Cell>
                                    
                                        <Table.Cell><StoreEditModal /></Table.Cell>
                                    
                                    <Table.Cell><Button color="red" onClick={() => this.deletestore(s.id)}>Delete</Button></Table.Cell>

                                </Table.Row>
                                )
                        })}

                    </Table.Body>
                </Table>

            </div>
            )
    }
}
export default Store;