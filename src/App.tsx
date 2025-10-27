
import './App.css'
import logo from '/vite.svg'

function App() {

  return (
    <>
      <header className="flex items-center">
          <img src={logo} alt="logo" />
          <h2 className='text-xl font-bold font-[Roboto] ml-2'>My Learning journal</h2>
          <nav className="ml-auto">
            <ul className='flex gap-6 text-xs font-medium'>
              <li>HOME</li>
              <li>ABOUT ME</li>
            </ul>
          </nav>
      </header>
      <main>
        <section>
          <p>JULY 23, 2022</p>
          <h1>My new journey as a bootcamp student.</h1>
          <p>After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.</p>
        </section>
        <section>
          <article>
            <img src="/images/blog-image.png" alt="" />
            <p>JULY 23, 2022</p>
            <h2>Blog</h2>
            <p>I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
          </article>
        </section>
      </main>
    </>
  )
}

export default App
