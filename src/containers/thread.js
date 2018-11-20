import React, {Component} from 'react';
import { connect } from 'react-redux';
import FormComponent from '../components/create-form';
import ThreadComponent from '../components/thread';

import './thread.css';

class ThreadContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="wrapper">
                    <FormComponent type='thread'/>
                    <ThreadComponent type='thread' currentThread={this.props.threads.currentThread}/>
                </div>
            </div>
        );
    }

}

const mapStateToProps = store => {
    return {
        threads: store.threads,
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThreadContainer);