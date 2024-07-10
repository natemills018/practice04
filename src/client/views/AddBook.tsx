import React, { useState, useEffect } from "react";
import { POST } from "../services/fetcher";
import {
  useNavigate,
  Link,
  useParams,
  useResolvedPath,
} from "react-router-dom";
import type { Book } from "../types";
import { title } from "process";

interface AddProps {}

const AddBook = (props: AddProps) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('')


  const handleButton = () => {
    const url = `/api/books/`
    POST(url, { author, title }).then((book) => {
      console.log(book);
      navigate(`/books/${book.id}`);
    });
  }
  return (
    <main className="container mt-5">
      <section className="row justify-content-center">
        <div className="col-12 col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <div>
                <h1 className="d-flex justify-content-center">Add your own book!</h1>

                <div className="d-flex justify-content-center m-2">
                <input className="m-2"
                placeholder="Author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
                <input className="m-2"
                placeholder="Title"
                nonce=""
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                </div>
                <div className="d-flex justify-content-center m-2">
                <button
                  className="rounded mx-4"
                  onClick={handleButton}
                >
                  Click to Add your Book
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AddBook;
