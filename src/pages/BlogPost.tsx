
import { blogPosts } from '../data.ts'
import Article from '../components/Article'
import { useParams } from 'react-router-dom'

export default function BlogPost() {
    
    const params = useParams()
    console.log(params)
    const post = blogPosts.filter(post => post.id === Number(params.id))[0]
    console.log(post)
    
    return (
        <main className='flex flex-col flex-1 items-center'>
            <section className='flex w-full'>
            <div className='flex flex-col gap-2 max-w-5xl w-full mx-auto mt-auto p-4 sm:p-6 md:p-8'>
                <img src={`/learning-journal/images/${post.image}`} alt="" />
                <p className='mt-auto'>{post.date}</p>
                <h1 className='text-3xl md:text-4xl font-bold'>{post.title}</h1>
                <p className='font-light line-clamp-3 sm:line-clamp-none max-w-2xl'>{post.description}</p>
            </div>
            </section>
            <section className='py-8 px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl'>
            {blogPosts ? blogPosts.map(post =>
                <Article key={post.id} {...post} />
            )
            : <p>Loading...</p>}
            </section>
            <button className='font-bold underline m-auto p-6'>View More</button>
        </main>
    )
}