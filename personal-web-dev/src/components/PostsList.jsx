import Post from "./Post.jsx";
import classes from './PostsList.module.css';
import NewPost from "./NewPost.jsx";
import Modal from "./Modal";
import {useState} from "react";

function PostsList({isPosting, onStopPosting}) {
    const [posts, setPosts] = useState([]); // array of posts

    function addPostHandler(postData) {
        setPosts((prevPosts) => {
            return [postData, ...prevPosts];
        });
    }

    return (
        <>
            {isPosting && (
                <Modal onClose={onStopPosting}>
                    <NewPost
                        onCancel={onStopPosting} onAddPost={addPostHandler}
                    />
                </Modal>
            )}
            {posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post) => (
                        <Post
                            key={post.id}
                            author={post.author}
                            body={post.body}
                        />
                    ))}
                </ul>
            )}
            {posts.length === 0 && (
                <div style={{textAlign: 'center', color: 'white'}}>
                    <h2> There are no posts yet ! </h2>
                    <p> Start adding new post</p>
                </div>
            )}
        </>
    )
}


/////////////////////////////////////////////
// Ternary operator approach for the modal //
/////////////////////////////////////////////

// <>
//     {modalIsVisible ? (
//         <Modal onClose={hideModalHandler}>
//             <NewPost
//                 onBodyChange={bodyChangeHandler}
//                 onAuthorChange={authorChangeHandler}
//             />
//         </Modal>
//     ) : false}
// </>


export default PostsList;