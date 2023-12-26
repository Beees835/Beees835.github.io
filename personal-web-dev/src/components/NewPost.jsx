import classes from './NewPost.module.css';
import {useState} from "react";
function NewPost({onCancel, onAddPost}) {
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault(); // prevent the browser from sending an http request
        const postData = {
            body: enteredBody,
            author: enteredAuthor
        };
        // console.log(postData); check the console to see the data output when submit the form
        onAddPost(postData); // pass the data to the parent component
        onCancel(); // close the form
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={bodyChangeHandler}/>
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required onChange={authorChangeHandler}/>
            </p>
            <p className={classes.actions}>
                <button type="button" onClick={onCancel}> Cancel </button>
                <button> Submit </button>
            </p>
        </form>
    );
}

export default NewPost;