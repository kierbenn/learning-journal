
import BlogSection from "../components/BlogSection"

export default function About() {
    return (
        <main className='flex flex-col flex-1 items-center max-w-5xl mx-auto'>
            <section className="flex items-center gap-8 mt-20">
                <img 
                    className="size-[182px] object-cover rounded-full shrink-0"
                    src="/learning-journal/images/me.jpg" alt="Kieran Bennett profile" />
                <div className="flex flex-col gap-2">
                    <h1 className='text-3xl md:text-3xl font-bold'>Hi there! My name is Kieran and welcome to my learning journal.</h1>
                    <p>After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.</p>
                </div>
            </section>
            <section className='flex flex-col w-full items-center p-4 sm:p-6 md:p-8'>
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
            <BlogSection numberBlogs={3} />
        </main>
    )
}