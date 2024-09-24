/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Container, Postcard } from '../Components'
import service from '../appwrite/config'

function AllPost() {
    const [post, setPost] = useState([])

    useEffect(() => {
    }, [])

    service.getAllPost([]).then((post) => {
        if (post)
            setPost(post.documents)
    })

    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {post.map((postItem) => (
                        <div key={postItem.$id} className="p-2 w-1/4">
                            <Postcard {...postItem} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPost