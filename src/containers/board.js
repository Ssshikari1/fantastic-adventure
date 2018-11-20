import React, {Component} from 'react';
import { connect } from 'react-redux';
import FormComponent from '../components/create-form';
import ThreadComponent from '../components/thread';
import loadThreads from '../actions/threadAction';
import loadThreadsMore from '../actions/threadMoreAction';

import './board.css';

class BoardContainer extends Component {

    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        //console.log(nextProps.url);
        //this.props.loadTreadsAction(nextProps.url);
        //console.log("componentWillReceiveProps()");
    }

    componentDidUpdate(prevProps) {
        if (this.props.boards !== prevProps.boards && this.props.boards.currentBoard) {
            this.props.loadTreadsAction(this.props.boards.currentBoard.slug);
        }
    }

    componentDidMount() {
        //this.props.loadTreadsAction('/boards/b')
    }

    render() {
        if (this.props.threads) {
        console.log(this.props.threads);
        return (
            <div className="container">
                <div className="wrapper">
                    <FormComponent type='board'/>
                    <ThreadComponent type='board' threads={this.props.threads} 
                    sendCurrentThread={this.props.sendCurrentThreadAction}
                    loadThreadsMore={this.props.loadThreadsMoreAction}/>
                </div>
            </div>
        );
        } else return (<div></div>);
    }

}

const mapStateToProps = store => {
    return {
        threads: store.threads,
        boards: store.boards,
    };
}

const mapDispatchToProps = dispatch => {
    const sendCurrentThread = (currentThread) => dispatch({
        type: 'EDITE_CURRENT_THREAD',
        payload: currentThread});
    return {
        loadTreadsAction: (slug) => dispatch(loadThreads(slug)),
        sendCurrentThreadAction: sendCurrentThread,
        loadThreadsMoreAction: (slug) => dispatch(loadThreadsMore(slug)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);