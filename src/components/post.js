import React, {Component} from 'react';

import './post.css';

export default class PostComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.posts != undefined){
        if (this.props.posts === 0) {
            return (<div></div>);
        }
        return this.props.posts.map(post => {
            return (
                <li key={post.id}>
                    <div className="post-ap row">
                        <div className="col-md-12">
                            <span >#{post.id}</span>
                            <ul className="list">
                                <li><img src="#" alt="here pic"></img></li>
                                <li><img src="#" alt="here pic"></img></li>
                            </ul>
                        </div>
                        <div className="col-md-12">
                            <p>{post.body}</p>
                        </div>
                    </div>
                </li>
            );
        });
        }
        return (
            <li>
                <div className="post-ap row">
                    <div className="col-md-12">
                        <span >#1</span>
                        <ul className="list">
                            <li><img src="#" alt="here pic"></img></li>
                            <li><img src="#" alt="here pic"></img></li>
                        </ul>
                    </div>
                    <div className="col-md-12">
                        <p>some text fgsdgdfghdshdddfhdfhfdhfdfdfdhhdfh</p>
                    </div>
                </div>
            </li>
        );
    }

}