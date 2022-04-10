import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'semantic-ui-react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';
import { Checkbox, Form } from 'semantic-ui-react';
class CustomerEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            customerName: '',
            customerAddress: ''

        }
    }
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    SubmitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.put(`Customers/PutCustomer/${this.state.id}` , this.state)
            .then(res => {
                console.log(res.data)
            })
            .catch(e => {
                console.log(e)
            })
    }
    render() {
        const { id, customerName, customerAddress } = this.state;
        return (
            <div>
                <form onSubmit={this.SubmitHandler}>
                    <Form.Field>
                    <Label>id</Label>
                        <input type="number" name="id" value={id} onChange={this.changeHandler} />
                    </Form.Field>
                    <Form.Field>
                    <Label>Name</Label>
                        <input type="text" name="customerName" value={customerName} onChange={this.changeHandler} />
                    </Form.Field>
                    <Form.Field>
                    <Label>Address</Label>
                        <input type="text" name="customerAddress" value={customerAddress} onChange={this.changeHandler} />
                        </Form.Field>

                    <Button color="yellow" type="submit"><Icon name="checkmark" />Update</Button>

                </form>

            </div>
            
            );
    }
}
export default CustomerEdit;