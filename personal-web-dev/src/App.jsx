import {useState} from 'react'
import PostsList from "./components/PostsList.jsx";
import MainHeader from "./components/MainHeader.jsx";

function App() {
    const [modalIsVisible, setModelIsVisible] = useState(false);

    function hideModalHandler() {
        setModelIsVisible(false);
    }

    function showModalHandler() {
        setModelIsVisible(true);
    }

    // must use a root element to return multiple elements in JSX
    return (
        <>
            <MainHeader onCreatePost={showModalHandler}/>
            <main>
                <PostsList isPosting={modalIsVisible} onStopPosting={hideModalHandler}/>
            </main>
        </>
    );
}

export default App
