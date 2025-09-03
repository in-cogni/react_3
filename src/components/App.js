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
    state =
        {
            // posts:
            //     [
            //         {id:"1", title:"Процедурное программирование на языке c++", content:"Изучаются базовые конструкции языка c++"},
            //         {id:"2", title:"Объектно-ориентированное программирование на языке c++", content:"Изучаются базовые концепции ООП"},
            //         {id:"3", title:"DataContainers", content:"Изучаются основные структуры данных и контейнеры, основанные на них"}
            //     ],
            posts: [],
            selectedFile: null
        }

    fileSelect = (event) => {
        const file = event.target.files[0];
        if (file && file.type === 'text/plain') {
            this.setState({ selectedFile: file }, () => {
                this.fileRead(file);
            });
        }
        else {
            alert('Пожалуйста, выберите текстовый файл (.txt)');
        }
    }
    fileRead = (file) => {
        const reader = new FileReader();

        reader.onload = (e) => {
            const content = e.target.result;
            const file_name = file.name.replace('.txt', '');

            const newPost = {
                id: Date.now().toString(),
                title: file_name,
                content: content
            };

            this.setState(prevState => ({
                posts: [...prevState.posts, newPost],
                selectedFile: null
            }));
        };
        reader.onerror = (error) => {
            console.error('Ошибка чтения файла:', error);
            alert('Ошибка при чтении файла');
        };
        reader.readAsText(file);

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
                {/* {typeof(this.state.posts)} */}
                <div>
                    <input type="file" id="file_input" accept=".txt" onChange={this.fileSelect} style={{display:'none'}}/>
                    <label htmlFor="file_input" id="file_input_btn">Open file</label>
                </div>
                <Posts posts={this.state.posts} />
            </div>
        );
    }
}

export default App;
