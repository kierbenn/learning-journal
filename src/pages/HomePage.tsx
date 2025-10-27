import BlogSection from '../components/BlogSection.tsx'

export default function Home() {
    return (
        <main className='flex flex-col flex-1 items-center'>
            <section className='flex bg-[url(/learning-journal/images/hero-image.jpg)] bg-cover bg-bottom text-white h-[293px] sm:h-[390px] md:h-[488px] w-full'>
            <div className='flex flex-col gap-2 max-w-5xl w-full mx-auto mt-auto p-4 sm:p-6 md:p-8'>
                <p className='mt-auto'>JULY 23, 2025</p>
                <h1 className='text-3xl md:text-4xl font-bold'>My new journey as a bootcamp&nbsp;student.</h1>
                <p className='font-light line-clamp-3 sm:line-clamp-none max-w-2xl'>After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.</p>
            </div>
            </section>
            <BlogSection numberBlogs={3} />
        </main>
    )
}