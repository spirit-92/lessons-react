import "./PostsStyle.css"
import PostComponent from "./PostComponent";
import {useEffect, useState} from "react";


function PostsComponent() {
    const [posts, changePost] = useState(null)
    const [error, setError] = useState('')
    const [loading, setPost] = useState(true)

    useEffect(() => {
        // #1
        // (async () => {
        //     try {
        //         const data = await fetch('https://jsonplaceholder.typicode.com/posts')
        //         const post = await data.json()
        //         changePost(post)
        //     } catch (e) {
        //         setError(e.message)
        //     }
        //     setPost(false)
        // })()

        // #2
        // const getData = async () => (await fetch('https://jsonplaceholder.typicode.com/posts')).json()
        // getData()
        //     .then(post => changePost(post))
        //     .catch(error => setError(error.message))
        //     .finally(()=> setPost(false) )

        // #3
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(post => post.json())
            .then(post => changePost(post))
            .catch(error =>{
                setError(error.message)
            })
            .finally(()=> setPost(false) )

    }, [])

    return (
        <div>
            <ul className="ul_posts">
                {loading ? 'loading' : posts ?
                    posts.map((post) => {
                        return <PostComponent key={post.id} {...post} />
                    })
                    : error}

            </ul>
        </div>
    )
}

export default PostsComponent