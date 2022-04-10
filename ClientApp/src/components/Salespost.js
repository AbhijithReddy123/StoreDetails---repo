import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'semantic-ui-react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';
import { Checkbox, Form } from 'semantic-ui-react';

class Salespost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Customerid: '',
            Productid: '',
            Storeid: '',
            Datesold:''

        }
    }
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post('Sales/PostSales', this.state)
            .then(res => {
                console.log(res.data)
            })
            .catch(e => {
                console.log(e)
            })

    }

    render() {
        const { Customerid, Productid, Storeid, Datesold } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <Form.Field>
                    <Label>customer id</Label>
                        <input type="number" name="Customerid" value={Customerid} onChange={this.changeHandler} />
                    </Form.Field>
                    <Form.Field>
                    <Label>product id</Label>
                        <input type="number" name="Productid" value={Productid} onChange={this.changeHandler} />
                    </Form.Field>
                    <Form.Field>
                    <Label> Store id</Label>
                        <input type="number" name="Storeid" value={Storeid} onChange={this.changeHandler} />
                    </Form.Field>
                    <Form.Field>
                    <Label> Date sold</Label>
                        <input type="date" name="Datesold" value={Datesold} onChange={this.changeHandler} />
                    </Form.Field>
                    <Button primary type="submit"><Icon name="checkmark" />submit</Button>

                </form>

            </div>
            )
    }
}
export default Salespost;