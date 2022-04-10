import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import ProductPOstModal from './ProductPOstModal';
import ProductEditModal from './ProductEditModal';
class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products:[]
        }
    }

    componentDidMount()  {
        this.fetchProducts();

    }

    fetchProducts = () => {
        axios.get('Products/Getproduct')
            .then(res => {
                console.log(res.data);
                this.setState({
                    products: res.data,

                });

            })
            .catch(e => {
                console.log(e);
            })
    }
    deleteproduct = (id) => {
        axios.delete(`Products/DeleteProduct/${id}`)
            .then(res => {
                console.log(res.data)
                this.fetchProducts();
            })
            .catch(e => {
                console.log(e)
            })


    }
   
    render() {
        const { products } = this.state
        return (
            <>
                <ProductPOstModal />
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>
                                productName

                            </Table.HeaderCell>
                            <Table.HeaderCell>
                                Price

                            </Table.HeaderCell>

                            <Table.HeaderCell>
                                Delete
                                </Table.HeaderCell>
                            <Table.HeaderCell> update</Table.HeaderCell>

                        </Table.Row>

                    </Table.Header>
                    <Table.Body>
                        {products.map(p => {
                            return (

                                <Table.Row key={p.id}>
                                    <Table.Cell>{p.productName}</Table.Cell>
                                    <Table.Cell>{p.price}</Table.Cell>
                                    <Table.Cell><Button color="red" onClick={() => this.deleteproduct(p.id)}>Delete</Button></Table.Cell>
                                    
                                        <Table.Cell><ProductEditModal /></Table.Cell>
                                    
                                </Table.Row>
                            )
                        })}

                    </Table.Body>

                </Table>

            </>
            
            );
    }
}
export default Product;