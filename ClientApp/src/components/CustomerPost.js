import React, { Component } from 'react';
import axios from 'axios';
import { Button, Modal } from 'semantic-ui-react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';
import { Checkbox, Form } from 'semantic-ui-react';

class CustomerPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
            customerName: '',
            customerAddress:''

        }
    }
    
  


    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post('Customers/PostCustomer', this.state)
            .then(res => {
                console.log(res.data)
            })
            .catch(e => {
                console.log(e)
            })
        
    }

    render() {
        const { customerName, customerAddress } = this.state
        return (

            <form onSubmit={this.submitHandler}>
                <Form.Field>
                    <Label>Name</Label>
                    <input type="text" name="customerName" value={customerName} onChange={this.changeHandler} />
                </Form.Field>
                <Form.Field>
                    <Label>Address</Label>
                    <input type="text" name="customerAddress" value={customerAddress} onChange={this.changeHandler} />
                </Form.Field>

                <Button color="green" type="submit"><Icon name="checkmark" />Add Customer</Button>

            </form>

        )
            
    }

}


export default CustomerPost;