import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'semantic-ui-react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';
import { Checkbox, Form } from 'semantic-ui-react';
class Storepost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            StoreName: '',
            StoreAddress:''

        }
    }
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post('Stores/PostStore', this.state)
            .then(res => {
                console.log(res.data)
            })
            .catch(e => {
                console.log(e)
            })

    }
    render() {
        const { StoreName, StoreAddress } = this.state

        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <Form.Field>
                    <Label>name</Label>
                        <input type="text" name="StoreName" value={StoreName} onChange={this.changeHandler} />
                    </Form.Field>
                    <Form.Field>
                    <Label>Address</Label>
                        <input type="text" name="StoreAddress" value={StoreAddress} onChange={this.changeHandler} />
                    </Form.Field>
                    <Button primary type="submit"><Icon name="checkmark" />Add Store</Button>

                </form>

            </div>
            );

    }
}

export default Storepost;