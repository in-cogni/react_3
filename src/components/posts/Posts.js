import React from 'react';
import Post from '../post/Post.js';
import './Posts.css';

class Posts extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state =
    //     {
    //         props: props
    //     }
    // }
    render() {
        if (!this.props.posts || !Array.isArray(this.props.posts)) {
            return <div>Нет данных для отображения</div>;
        }

        return (
            <div>
                {
                    this.props.posts.map(
                        post =>
                        (
                            <Post key={post.id} title={post.title} content={post.content} />
                        )
                    )

                }
            </div>
        )
    }
}
export default Posts;