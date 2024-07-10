import React, {useState, useEffect} from "react";
import type { Book } from "../types";
import { Link } from "react-router-dom";
import { GET } from "../services/fetcher";


interface BooksProps {

}


const Books = (props: BooksProps) => {
    const [list, setList] = useState<Book[]>([])

    useEffect(() => {
        GET('/api/books')
        .then(list => setList(list));
    }, [])

    return (
        <main className='container mt-5'>
            <section className='row justify-content-center mt-5'>
                        {list.map((cat) => (
                            <div className="col-md-5 m-3 card card-shadow bg-caution" key={`cat-${cat.id}`}>
                            <h5 className="card-title mt-2 text-center font-italic"> 
                                Written by {cat.author}
                            </h5>
                            <div className="card-body mx-1">
                            <h1 className='d-flex justify-content-center align-items-center'>
                                {cat.title}
                            </h1>
                            <h4 className='font-italic d-flex justify-content-center m-2'>${cat.category_id}
                            </h4>

                            </div>
                            
                            <div className='d-flex justify-content-center pb-3'>
                                <Link to={`/books/${cat.id}`} className='btn btn-md btn-danger'>Details</Link>
                            </div>
                        </div>
                        ))}
        
            </section>
        </main>
    )
}

export default Books;

