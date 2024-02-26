import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";

const FormikEdit = ({ id }) => {
  const navigate = useNavigate();
  const [FormikEditData, setFormikEditData] = useState({
    // book_image:'',
    book_title: "",
    Publication_date: "",

    ISBN_Number: "",
    book_author: "",
    author_name: "",
    biography: "",
    birth_date: "",
  });
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get(`https://65d732ed27d9a3bc1d7a6e86.mockapi.io/api/Library/${id}`)
      .then((res) => setFormikEditData(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    Formik.setValues(FormikEditData);
  }, [FormikEditData]);

  const validationSchema = Yup.object().shape({
    book_title: Yup.string().required("book_title is required"),
    Publication_date: Yup.string().required("Publication_date is required"),

    ISBN_Number: Yup.string().required("ISBN_Number is required"),
    book_author: Yup.string().required("book_author is required"),

    author_name: Yup.string().required("author_name is required"),
    biography: Yup.string().required("biography is required"),

    birth_date: Yup.string().required("birth_date is required"),
  });

  const Formik = useFormik({
    initialValues: {
      book_title: "",
      Publication_date: "",

      ISBN_Number: "",
      book_author: "",
      author_name: "",
      biography: "",
      birth_date: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      await axios
        .put(
          `https://65d732ed27d9a3bc1d7a6e86.mockapi.io/api/Library/${id}`,
          values
        )
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));

      navigate("/product");
    },
  });

  return (
    <div className="container">
      <form onSubmit={Formik.handleSubmit}>
        {/* <label> BookImage: <input type='text' name='book_image' value={editData.book_image} onChange={handleChange} />  </label><br /> */}
        <label>
          {" "}
          Book Title:{" "}
          <input
            type="text"
            name="book_title"
            value={Formik.values.book_title}
            onChange={Formik.handleChange}
          />{" "}
        </label>
        <br />
        <div className="text-danger">{Formik.errors.book_title}</div>
        <label>
          {" "}
          Publication_date:{" "}
          <input
            type="text"
            name="Publication_date"
            value={Formik.values.Publication_date}
            onChange={Formik.handleChange}
          />{" "}
        </label>
        <br />
        <div className="text-danger">{Formik.errors.Publication_date}</div>
        <label>
          {" "}
          ISBN:{" "}
          <input
            type="text"
            name="ISBN_Number"
            value={Formik.values.ISBN_Number}
            onChange={Formik.handleChange}
          />{" "}
        </label>
        <br />
        <div className="text-danger">{Formik.errors.ISBN_Number}</div>

        <label>
          {" "}
          Book Author:{" "}
          <input
            type="text"
            name="book_author"
            value={Formik.values.book_author}
            onChange={Formik.handleChange}
          />{" "}
        </label>
        <br />
        <div className="text-danger">{Formik.errors.book_author}</div>

        <label>
          {" "}
          Author Name:{" "}
          <input
            type="text"
            name="author_name"
            value={Formik.values.author_name}
            onChange={Formik.handleChange}
          />{" "}
        </label>
        <br />
        <div className="text-danger">{Formik.errors.author_name}</div>

        <label>
          {" "}
          Biography:{" "}
          <input
            type="text"
            name="biography"
            value={Formik.values.biography}
            onChange={Formik.handleChange}
          />{" "}
        </label>
        <br />
        <div className="text-danger">{Formik.errors.biography}</div>

        <label>
          {" "}
          birth_date:{" "}
          <input
            type="text"
            name="birth_date"
            value={Formik.values.birth_date}
            onChange={Formik.handleChange}
          />{" "}
        </label>
        <br />
        <div className="text-danger">{Formik.errors.birth_date}</div>

        <button type="submit">update</button>
      </form>
    </div>
  );
};

export default FormikEdit;
