import React from 'react';
import logo from '../logo.svg';
import './App.css';
import Header from './header/Header.js';
import Hello from './hello/Hello.js';
import Length from './length/Length.js';
import Convert from './convert/Convert.js';
import Form from './form/Form.js';
import Range from './range/Range.js';
import Post from './post/Post.js';
import Posts from './posts/Posts.js';

class App extends React.Component {
    state=
    {
        posts: 
        [
            {id:"1", title:"Процедурное программирование на языке c++", content:"Изучаются базовые конструкции языка c++"},
            {id:"2", title:"Объектно-ориентированное программирование на языке c++", content:"Изучаются базовые концепции ООП"},
            {id:"3", title:"DataContainers", content:"Изучаются основные структуры данных и контейнеры, основанные на них"}
        ]
    }
    render() {
        return (
            <div className="App">
                {<Header />
                /*<Hello />
                <Length/>
                <Convert/>
                <Form/>
                <Range/> */}
                {typeof(this.state.posts)}
                <Posts posts={this.state.posts}/>
                {/* <Post title="Title" content="Content"/> */}
            </div>
        );
    }
}

export default App;
