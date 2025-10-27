
import { blogPosts } from '../data.ts'
import BlogSection from '../components/BlogSection.tsx'
import { useParams } from 'react-router-dom'

export default function BlogPost() {
    
    const params = useParams()
    // filter to get blog post info
    const post = blogPosts.filter(post => post.id === Number(params.id))[0]
    
    return (
        <main className='flex flex-col flex-1 items-center max-w-5xl mx-auto'>
            <section className='flex flex-col w-full items-center p-4 sm:p-6 md:p-8'>
                <div className='flex flex-col gap-4 max-w-5xl w-full mx-auto mt-auto py-4 sm:p-6 md:p-8'>
                    <p className='mt-auto'>{post.date}</p>
                    <h1 className='text-3xl md:text-4xl font-bold'>{post.title}</h1>
                    <p className='font-light'>{post.description}</p>
                </div>
                <img 
                    className='w-full max-h-[488px] object-cover'
                    src={`/learning-journal/images/${post.image}`} alt={post.title} 
                />
                <div className='flex flex-col gap-4 max-w-5xl w-full mx-auto mt-auto py-4 sm:p-6 md:p-8'>
                    <h2 className='text-2xl font-bold'>How I stay committed to learning</h2>
                    <p className='font-light'>I like to think of myself as a lifelong learner. I used to spend hours and hours learning, then try to create simple projects using what I learned or work new techniques into existing projects.</p>
                    <p className='font-light'>While that was fun, I felt like it would be helpful to share what I was learning and most things about my journey with the world.</p>
                    <h2 className='text-2xl font-bold'>How I got started</h2>
                    <p className='font-light'>I started simple and gradually grew my learning journal site. I would take notes about what I was learning. After each learning session, I'd use my notes to not only reflect on what I learned but also write short summaries of what I learned using my own words.</p>
                    <p className='font-light'>That helped me grok what I was learning, and I realized that posting my learning summaries was also helping others learn and stay motivated.</p>
                </div>
                <div className='max-w-5xl w-full mx-auto mt-auto pt-2 sm:pt-4 md:pt-6 text-center'>
                    <h2 className='text-2xl font-bold'>Recent posts</h2>
                </div>
            </section>
            <BlogSection numberBlogs={3} params={{ id: params.id ?? '' }} />
        </main>
    )
}



