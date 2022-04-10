import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'semantic-ui-react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';
import { Checkbox, Form } from 'semantic-ui-react';

class Productpost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: '',
            price: ''

        }
    }
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post('Products/PostProduct', this.state)
            .then(res => {
                console.log(res.data)
            })
            .catch(e => {
                console.log(e)
            })

    }

    render() {
        const { productName, price } = this.state
        return (
            <form onSubmit={this.submitHandler}>
                <Form.Field>
                <Label>Name</Label>
                    <input type="text" name="productName" value={productName} onChange={this.changeHandler} />
                </Form.Field>
                <Form.Field>
                <Label>Price</Label>
                    <input type="number" name="price" value={price} onChange={this.changeHandler} />
                </Form.Field>
                <Button primary type="submit"><Icon name="checkmark" />Add Product</Button>

            </form>
        )
    }
}
export default Productpost;