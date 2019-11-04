import React, {Component} from "react";
import {Form, FormGroup, FormControl, FormLabel, Button} from "react-bootstrap"

class Gift extends Component {
    constructor() {
        super();

        this.state = {
            person: "",
            present: ""
        };
    }

    render() {
        return (
            <div className="gift">
                <Form>
                    <FormGroup>
                        <FormLabel>Person</FormLabel>
                        <FormControl
                            onChange={event => this.setState({person: event.target.value})}
                            className="input-person"/>
                    </FormGroup>

                    <FormGroup>
                        <FormLabel>Present</FormLabel>
                        <FormControl
                            onChange={event => this.setState({present: event.target.value}) }
                            className="input-present"/>
                    </FormGroup>

                </Form>
                <Button className="btn-remove"
                    onClick={() => this.props.removeGift(this.props.gift.id)}>Remove Gift
                </Button>

            </div>
        )

    }

}

export default Gift;
