import Post from "./Post"
import { use } from "react"

export default function Posts({postsPromise}){

    
    const posts = use(postsPromise)
    console.log(postsPromise)
    return(
        <div className="newCard">
            <h2>All posts are here: {posts.length}</h2>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    )
}
