// Product.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { formatDate } from "./utils";

const Product = ({ setId }) => {
  const [products, setProducts] = useState([]);
  const [deleteData, setDeleteData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [deleteData]);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://65d732ed27d9a3bc1d7a6e86.mockapi.io/api/Library");
      const formattedProducts = res.data.map(item => ({
        ...item,
        birth_date: formatDate(item.birth_date),
        Publication_date: formatDate(item.Publication_date)
      }));
      setProducts(formattedProducts);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (id) => {
    setId(id);
    navigate(`/Formikedit/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://65d732ed27d9a3bc1d7a6e86.mockapi.io/api/Library/${id}`);
      setDeleteData(id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Serial Number</th>
            <th scope="col">BookTitle</th>
            <th scope="col">Publication Date</th>
            <th scope="col">ISBN</th>
            <th scope="col">BookAuthor</th>
            <th scope="col">AuthorName</th>
            <th scope="col">Biography</th>
            <th scope="col">BirthDate</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={index}>
              <th scope="row">{item.id}</th>
              <td>{item.book_title}</td>
              <td>{item.Publication_date}</td>
              <td>{item.ISBN_Number}</td>
              <td>{item.book_author}</td>
              <td>{item.author_name}</td>
              <td>{item.biography}</td>
              <td>{item.birth_date}</td>
              <td>
                <button onClick={() => handleEdit(item.id)}>UserEdit</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => navigate('/Formikcreate')}>UserCreate</button>
    </div>
  );
};

export default Product;
