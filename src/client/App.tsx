import React, { useState, useEffect } from "react";
import { GET, fetcher } from "./services/fetcher";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import Books from "./views/Books";
import BookDetails from "./components/bookDetails";
import './styles/app.scss';


interface AppProps {}

const App = (props: AppProps) => {

    return (
		<BrowserRouter>
			{/* <NavBar/> */}
			<div>
			<div className='m-3 fw-bold d-flex justify-content-center align-items-center '>Welcome to the Bookstore</div>
			</div>
			<div className='px-5 py-2 d-flex justify-content-center'>
				<Link to='/' className='btn btn-outline btn-primary m-3'>Home</Link>
                <Link to='/books' className='btn btn-outline btn-secondary m-3'>Books</Link>
				<Link to='/categories' className='btn btn-outline btn-light m-3'>Categories</Link>
				<Link to='/login' className='btn btn-outline btn-danger m-3'>Login!</Link>
				
			</div>

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/books/:id' element={<BookDetails />} />
				{/* <Route path='/categories/:id' element={<Blog />} />
				<Route path='/books/new' element={<Authors />} />
				<Route path='/books/:id/update' element={<Blogs />} /> */}
                <Route path='/books' element={<Books />} />
				
			</Routes>
		</BrowserRouter>


	);

};

export default App;
