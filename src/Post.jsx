export default function Post({post}){
    return(
        <div className="newCard">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}