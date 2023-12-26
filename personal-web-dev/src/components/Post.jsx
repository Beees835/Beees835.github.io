import classes from './Post.module.css';

function Post( {author, body} ) {
    // const { author, body } = props; can use this instead of props. in return
    return (
        <li className={classes.post}>
            <h1 className={classes.author}>{author} </h1>
            <p className={classes.text}>{body} </p>
        </li>
    );
}

export default Post;