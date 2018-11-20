import React, {Component} from 'react';
import {Button} from 'reactstrap';
import PostComponent from './post';
import {Link} from 'react-router-dom';

import './thread.css';

export default class ThreadComponent extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            
        }
        this.openThread = this.openThread.bind(this);
        this.loadMore = this.loadMore.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    openThread(id, e) {
        
        const currentThread = this.props.threads.listThreads.threads.find((element, index, array) => {
            if (element.id === id) {
                alert(element);
                return element;
            }
        });
        this.props.sendCurrentThread(currentThread);
        console.log(currentThread.posts.slice(1));
        e.preventDefault();
    }

    goBack(){
        this.props.history.goBack();
    }

    loadMore = e => {
        this.props.loadThreadsMore(this.props.slug);
    }

    componentDidUpdate(prevProps) {
        if (this.props.threads !== prevProps.threads) {
            this.setState({
                listThreads: this.props.threads.listThreads,
            })
        }
    }

    lastPosts(arr) {
        if (arr.length === 1)
            return 0;
        if (arr.length === 2)
            return arr.slice(arr.length - 1);
        return arr.slice(arr.length - 2);
    }

    countSkipPost(arr) {
        if (arr.length === 1 || arr.length === 2)
            return 0;
        return arr.length - arr.slice(arr.length - 2).length;

    }

    threadWall() {
        return this.state.listThreads.threads.map((th) => {
            return (
                <li key={th.id}>
                    <div className="post-op row">
                        <div className="col-md-10">
                            <span>ID #{th.id}</span>
                            <ul className="list">
                                <li><img src="#" alt="here pic"></img></li>
                                <li><img src="#" alt="here pic"></img></li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <Button className="float-right" color="dark" onClick={this.openThread.bind(this, th.id)}>
                            <Link to={`/thread`}>Открыть</Link></Button>
                        </div>
                        <div className="col-md-12">
                            <p>{th.posts[0].body}</p>
                            <span>{this.countSkipPost(th.posts)} постов пропущено</span>
                        </div>
                    </div>
                    <div>
                        <ul>
                            <PostComponent posts={this.lastPosts(th.posts)}/>
                        </ul>
                    </div>
                </li>
            );
        });
    }
    

    render() {
        console.log(this.state.listThreads);
        if (this.props.type === 'board' && this.state.listThreads) {
        return (
            <div>
                <ul className="main-ul">
                    {this.threadWall()}
                </ul>

                <div className="row"><div className="center">
                <Button color="dark">Загрузить еще</Button></div></div>
            </div>
        );
        }
        if (this.props.type === 'thread') {
            return (
                <li>
                    <div className="post-op row">
                        <div className="col-md-10">
                            <span>ID #{this.props.currentThread.id}</span>
                            <ul className="list">
                                <li><img src="#" alt="here pic"></img></li>
                                <li><img src="#" alt="here pic"></img></li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <Button className="float-right" color="dark" onClick={this.goBack}>
                            Назад</Button>
                        </div>
                        <div className="col-md-12">
                            <p>{this.props.currentThread.posts[0].body}</p>
                        </div>
                    </div>
                    <div>
                        <ul>
                            <PostComponent posts={this.props.currentThread.posts.slice(1)}/>
                        </ul>
                    </div>
                </li>
            );
        }
        return (<div></div>);
    }

}