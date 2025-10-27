
import './App.css'
import Article from './components/Article.tsx'
import Header from './components/Header.tsx'
import { blogPosts } from './data.ts'

function App() {

  console.log(blogPosts)

  return (
    <>
      <Header />
      <main className='flex flex-col flex-1 items-center'>
        <section className='flex bg-[url(images/hero-image.jpg)] bg-cover bg-bottom text-white h-[293px] sm:h-[390px] md:h-[488px] w-full'>
          <div className='flex flex-col gap-2 max-w-5xl w-full mx-auto mt-auto p-4 sm:p-6 md:p-8'>
            <p className='mt-auto'>JULY 23, 2025</p>
            <h1 className='text-3xl md:text-4xl font-bold'>My new journey as a bootcamp&nbsp;student.</h1>
            <p className='font-light line-clamp-3 sm:line-clamp-none max-w-2xl'>After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.</p>
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
      <footer className='flex flex-col p-8 bg-black text-[#ECECEC] text-center text-xs font-medium gap-1'>
        <p>My Learning Journal</p>
        <p className='text-[#D7D7D7] font-light'>Copyright ©2025</p>
      </footer>
    </>
  )
}

export default App
