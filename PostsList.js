import { useSelector } from "react-redux";
import { selectPostIds, getPostsError, getPostsStatus } from "./postsSlice";
import PostsExcerpts from "./PostsExcerpts";

const PostsList = ()=>{
    const orderedPostsId = useSelector(selectPostIds)
    const postStatus = useSelector(getPostsStatus)
    const error = useSelector(getPostsError)

    let content;
    if (postStatus==='loading'){
        content = <p>"Loading..."</p>
    } else if (postStatus==='succeeded'){
        content = orderedPostsId.map(postId=> 
            <PostsExcerpts key={postId} postId={postId}/>
        )
    } else if (postStatus==='failed'){
        content = <p>{error}</p>
    }
    return (
        <section>
            <h2>Posts</h2>
            {content}
        </section>
    )
}

export default PostsList