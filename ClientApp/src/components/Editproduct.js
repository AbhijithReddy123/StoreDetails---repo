import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'semantic-ui-react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';
import { Checkbox, Form } from 'semantic-ui-react';
class Editproduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            ProductName: '',
            Price:''

        }
    }
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    SubmitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.put(`Products/PutProduct/${this.state.id}`, this.state)
            .then(res => {
                console.log(res.data)
            })
            .catch(e => {
                console.log(e)
            })
    }
    render() {
        const { id, ProductName, Price } = this.state;
        return (
            <div>
                <form onSubmit={this.SubmitHandler}>
                    <Form.Field>
                <Label>id</Label>
                        <input type="number" name="id" value={id} onChange={this.changeHandler} />
                    </Form.Field>
                    <Form.Field>
                <Label>Product Name </Label>
                        <input type="text" name="ProductName" value={ProductName} onChange={this.changeHandler} />
                    </Form.Field>
                    <Form.Field>
                <Label>Price</Label>
                        <input type="number" name="Price" value={Price} onChange={this.changeHandler} />
                        </Form.Field>
                <Button color="yellow" type="edit">Submit</Button>


            </form>
            </div>
            );
    }
}

export default Editproduct;