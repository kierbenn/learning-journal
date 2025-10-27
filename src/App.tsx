
import './App.css'

function App() {

  return (
    <>
      <header className="bg-white">
          <div className='flex flex-col sm:flex-row items-center max-w-5xl m-auto p-4 sm:p-6 md:px-8 gap-4'>
            <div className='flex'>
              <img src="/images/logo.svg" alt="logo" />
              <h2 className='text-xl font-bold font-[Roboto] ml-2'>My learning journal</h2>
            </div>
            <nav className="sm:ml-auto">
              <ul className='flex gap-6 text-xs font-medium'>
                <li>HOME</li>
                <li>ABOUT ME</li>
              </ul>
            </nav>
          </div>
      </header>
      <main className='flex flex-col flex-1 items-center'>
        <section className='flex bg-[url(/images/hero-image.jpg)] bg-cover bg-bottom text-white h-[293px] sm:h-[390px] md:h-[488px] w-full'>
          <div className='flex flex-col gap-2 max-w-5xl w-full mx-auto mt-auto p-4 sm:p-6 md:p-8'>
            <p className='mt-auto'>JULY 23, 2025</p>
            <h1 className='text-3xl md:text-4xl font-bold'>My new journey as a bootcamp&nbsp;student.</h1>
            <p className='font-light line-clamp-3 sm:line-clamp-none max-w-2xl'>After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.</p>
          </div>
        </section>
        <section className='py-8 px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl'>
          <article className='flex flex-col gap-3'>
            <img src="/images/blog-image.png" alt="image" />
            <p className='text-sm'>JULY 23, 2025</p>
            <h3 className='text-2xl font-bold'>Blog</h3>
            <p className='font-light'>I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
          </article>
          <article className='flex flex-col gap-3'>
            <img src="/images/blog-image.png" alt="image" />
            <p className='text-sm'>JULY 23, 2025</p>
            <h3 className='text-2xl font-bold'>Blog</h3>
            <p className='font-light'>I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
          </article>
          <article className='flex flex-col gap-3'>
            <img src="/images/blog-image.png" alt="image" />
            <p className='text-sm'>JULY 23, 2025</p>
            <h3 className='text-2xl font-bold'>Blog</h3>
            <p className='font-light'>I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
          </article>
          <article className='flex flex-col gap-3'>
            <img src="/images/blog-image.png" alt="image" />
            <p className='text-sm'>JULY 23, 2025</p>
            <h3 className='text-2xl font-bold'>Blog</h3>
            <p className='font-light'>I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
          </article>
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
