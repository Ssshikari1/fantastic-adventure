import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink} from 'reactstrap';
import loadBoards from '../actions/navigationActions';
import loadThreads from '../actions/threadAction';
import {Link} from 'react-router-dom';

import './navigation.css';

class Navigation extends Component {

    listBoards = null;

    constructor(props) {
        super(props);

        //this.onNavItemClick = this.onNavItemClick.bind(this);
    }

    componentDidMount() {
        this.props.loadBoardsAction();
    }

    onNavItemClick = e => {
        const cb = e.currentTarget.innerText;
        console.log(this.listBoards.boards);
        const currentBoard = this.listBoards.boards.find((element, index, array) => {
            if (element.name === cb)
                return element;
        });
        this.props.sendCurrentBoard(currentBoard);
        //this.props.loadTreads(currentBoard.slug);
    }

    listItemBar () {
        this.listBoards = this.props.boards.listBoards;
        if(this.listBoards) {
        return this.listBoards.boards.map((board) => {
            return (
                <NavItem onClick={this.onNavItemClick} key={board.id}>
                        <NavLink><Link to={`/board/${board.slug}`}>{board.name}</Link></NavLink>
                </NavItem>
            );
        });
        }
    }

    render() {
        return (
            <div>
            <Navbar color="danger" light expand="md">
                <NavbarBrand><Link to='/'>YoBa</Link></NavbarBrand>
                <Nav navbar>
                    {this.listItemBar()}
                </Nav>
            </Navbar>
            </div> 
        );
    }


}

const mapStateToProps = store => {
    return {
        boards: store.boards,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        loadBoardsAction: () => dispatch(loadBoards()),
        sendCurrentBoard: (currentBoard) => dispatch({
            type: 'EDITE_CURRENT_TITLE',
            payload: currentBoard}),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);