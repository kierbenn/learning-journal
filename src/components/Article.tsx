
import type { Blog } from "../data"
import { Link } from 'react-router-dom'

export default function Article({ id, date, image, title, description }: Blog) {
    return (
        <>
            <Link to={`blog/${id}`}>
                <article className='flex flex-col gap-3'>
                    <img src={`/learning-journal/images/${image}`} alt={title} />
                    <p className='text-sm'>{date}</p>
                    <h3 className='text-2xl font-bold'>{title}</h3>
                    <p className='font-light'>{description}</p>
                </article>
            </Link>
        </>
    )
}