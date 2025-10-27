
import './App.css'

function App() {

  return (
    <>
      <header className="flex items-center p-4">
          <img src="/images/logo.svg" alt="logo" />
          <h2 className='text-xl font-bold font-[Roboto] ml-2'>My learning journal</h2>
          <nav className="ml-auto">
            <ul className='flex gap-6 text-xs font-medium'>
              <li>HOME</li>
              <li>ABOUT ME</li>
            </ul>
          </nav>
      </header>
      <main className='bg-[#FAFAFA]'>
        <section className='flex flex-col bg-[url(/images/hero-image.jpg)] bg-cover text-white h-[293px] p-4'>
          <p className='mt-auto'>JULY 23, 2022</p>
          <h1 className='text-3xl font-bold'>My new journey as a bootcamp&nbsp;student.</h1>
          <p className='font-light'>After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.</p>
        </section>
        <section className='py-8 px-4 grid grid-cols-1 gap-8'>
          <article className='flex flex-col gap-3'>
            <img src="/images/blog-image.png" alt="image" />
            <p className='text-sm'>JULY 23, 2022</p>
            <h3 className='text-2xl font-bold'>Blog</h3>
            <p className='font-light'>I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
          </article>
          <article className='flex flex-col gap-3'>
            <img src="/images/blog-image.png" alt="image" />
            <p className='text-sm'>JULY 23, 2022</p>
            <h3 className='text-2xl font-bold'>Blog</h3>
            <p className='font-light'>I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
          </article>
          <button className='font-bold underline'>View More</button>
        </section>
      </main>
      <footer className='flex flex-col p-8 bg-black text-[#ECECEC] text-center text-xs font-medium'>
        <p>My Learning Journal</p>
        <p className='text-[#D7D7D7] font-light'>Copyright ©2022</p>
      </footer>
    </>
  )
}

export default App
