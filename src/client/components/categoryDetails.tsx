import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import type {Book} from '../types';
import { GET } from "../services/fetcher";
import { Category } from "../types";

interface CategoryDetails {

}

const CategoryDetails = (props: CategoryDetails) => {
    const { id } = useParams();
    const [data, setData] = useState<Category | null>(null);

    useEffect(() => {
        GET(`/api/categories/${id}`)
        .then(data => setData(data))
    }, [id])

    return (
        <main className='container mt-5'>
            <section className='row justify-content-center'>
                <div className='col-12 col-md-6'>
                    <div className='card shadow'>
                        <div className='card-body bg-warning'>
                            <h2 className='card-title d-flex justify-content-center align-items-center'> Category Details for {data?.name}</h2>
                            <p className='card-title  d-flex justify-content-center text-dark align-items-center'><span className='text-decoration-underline'>Here's the #{id}</span> </p>
                            <div className="d-flex justify-content-center align-items-center">
                            <Link to='/categories/:id/update' className='btn btn-outline btn-success'>Edit Category</Link>
                            <Link to='/categories' className='btn btn-outline btn-primary mx-4'>Go Back to Categories</Link>
                            <Link to='/categories/new' className='btn btn-outline btn-light'>Add Your Own!</Link>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )

}

export default CategoryDetails;