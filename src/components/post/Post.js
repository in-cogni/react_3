import React from 'react';
import './Post.css';

class Post extends React.Component {
    // constructor(props)
    // {
    //     super(props);
    //     // this.setState({[this.state.title]: props.title});
    //     // this.setState({[this.state.content]: props.content});
    //     this.state =
    //     {
    //         title: props.title,
    //         content: props.content
    //     }
    // }

    render()
    {
        return(
            <div className="post">
                <h2>{this.props.title}</h2>
                <p>{this.props.content}</p>
            </div>
        )
    }
}
export default Post;