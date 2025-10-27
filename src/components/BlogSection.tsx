import { useState } from 'react'
import { blogPosts } from '../data.ts'
import Blog from './Blog.tsx'

export default function BlogSection({numberBlogs, params}: {numberBlogs:number, params?:{id:string}}) {
    // hold number of blog posts
    const [numPosts, setNumPosts] = useState(numberBlogs)
    // if params then filter, only show the other posts
    const otherPosts = params 
        ? blogPosts.filter(post => post.id != Number(params.id))
        : blogPosts
    // show more / show less - updating state
    const handleClick = (num: number) => {
        setNumPosts(num)
    }

    return (
        <>
        <section className='py-8 px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl'>
            {otherPosts 
            ? otherPosts.slice(0,numPosts).map(post => <Blog key={post.id} {...post} />)
            : <p>Loading...</p>
            }
        </section>
        {numPosts === 3 
            ? <button 
                onClick={() => handleClick(otherPosts.length)}
                className='font-bold underline m-auto p-6'>View More</button>
            : <button 
                onClick={() => handleClick(3)}
                className='font-bold underline m-auto p-6'>View Less</button>
            }
        </>
    )
}