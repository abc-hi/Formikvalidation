// Home.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { formatDate } from "./utils";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

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

  return (


  
  <div >    
<div className="color" style={{ backgroundColor: "orange" }}>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {products.map((item, index) => (
            <div key={index} className="col">
              <div className="card" >
                <div className="card-body">
                  <h5 className="card-title">{item.book_title}</h5>
                  <h5 className="card-title">{item.Publication_date}</h5>
                  <p className="card-text">{item.ISBN_Number}</p>
                  <h5 className="card-title">{item.book_author}</h5>
                  <h5 className="card-title">{item.author_name}</h5>
                  <h5 className="card-title">{item.biography}</h5>
                  <h5 className="card-title">{item.birth_date}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
