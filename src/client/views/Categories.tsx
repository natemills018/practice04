import React, {useState, useEffect} from "react";
import type { Book } from "../types";
import { Link } from "react-router-dom";
import { GET } from "../services/fetcher";
import { Category } from "../types";


interface CategoriesProps {

}


const Categories = (props: CategoriesProps) => {
    const [list, setList] = useState<Category[]>([])

    useEffect(() => {
        GET('/api/categories')
        .then(list => setList(list));
    }, [])

    return (
        <main className='container mt-5'>
            <section className='row justify-content-center mt-5'>

                {/* <h1 className='d-flex justify-content-center align-items-center mb-5'> Author's Enpoint
                </h1> */}

            
                {/* <div className='col-12 col-md-6'>  */}
                   
                        {list.map((category) => (
                            <div className="col-md-5 m-3 card card-shadow bg-caution" key={`category-${category.id}`}>
                            <h5 className="card-title mt-2 text-center font-italic"> 
                                {category.name}
                            </h5>
                            
                            {/* <div className='d-flex justify-content-center pb-3'>
                                <Link to={`/categories/${category.id}`} className='btn btn-md btn-danger'>Details</Link>
                            </div> */}
                        </div>
                        ))}
                    

                {/* </div> */}
            </section>
        </main>
    )
}

export default Categories;

