import React, {Component} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import './create-form.css';

export default class FormComponent extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="background">
                <h2 color="black" align="center">Добро пожаловать!</h2>
            
            <div className="borderr">
                <Form onSubmit={this.handleSubmit} id="formm">
                    <FormGroup >
                        <h4 align="center" color="black">Новый тред</h4>
                        <Label for="txtmsg">Текст сообщения</Label>
                        <Input type="textarea" name="txt" id="txtmsg" value={this.value} onChange={this.handleChange} rows={5} />
                        <div className="btns">
                            <Button color="dark">Загрузить изображение</Button>
                            <Button color="dark" className="float-right" type="submit">Отправить</Button>
                        </div>
                    </FormGroup>
                </Form>
            </div>
            </div>
        );
    }

}