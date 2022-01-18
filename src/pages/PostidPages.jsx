import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostServise from "../Api/PostService";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";

const PostidPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([])

    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostServise.getById(id);
        setPost(response.data)
    })
    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostServise.getCommentsByPostId(id);
        setComments(response.data)
    })

    useEffect(()=>{
        fetchPostById(params.id);
        fetchComments(params.id)
    },[])
    
    return(
        <div>
        <h1>Post with id: {params.id}</h1>
        {isLoading 
            ? <Loader />
            : <div>{post.id}. {post.title}</div> 
        }
        <h2>
            Comments
        </h2>
        {isComLoading
        ?  <Loader />
        : <div>
            {comments.map(comm => 
                <div key={comm.id} style={{marginTop: '5px'}}>
                    <h5>{comm.email}</h5>
                    <div>{comm.body}</div>
                </div>
            )}    
        </div>}
        </div>
    )
}

export default PostidPage;