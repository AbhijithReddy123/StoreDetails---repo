import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'semantic-ui-react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';
import { Checkbox, Form } from 'semantic-ui-react';
class Storeedit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            StoreName: '',
            StoreAddress: ''

        }
    }
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    SubmitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.put(`Stores/PutStore/${this.state.id}`, this.state)
            .then(res => {
                console.log(res.data)
            })
            .catch(e => {
                console.log(e)
            })
    }
    render() {
        const { id, StoreName, StoreAddress } = this.state;
        return (
            <div>
                <form onSubmit={this.SubmitHandler}>
                    <Form.Field>
                    <Label>id</Label>
                        <input type="number" name="id" value={id} onChange={this.changeHandler} />
                    </Form.Field>
                    <Form.Field>
                    <Label>Store Name </Label>
                        <input type="text" name="StoreName" value={StoreName} onChange={this.changeHandler} />
                    </Form.Field>
                    <Form.Field>
                    <Label>Store Address</Label>
                        <input type="text" name="StoreAddress" value={StoreAddress} onChange={this.changeHandler} />
                        </Form.Field>
                    <Button color="yellow" type="submit">Edit Store</Button>


                </form>
            </div>
        );
    }
}

export default Storeedit;