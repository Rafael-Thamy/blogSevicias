import { useContext, useState } from "react";
import "./write.css";
import axios from "axios";
import { Context } from "../../context/Context";

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [name, setName] = useState("");
  const [categories, setCategories] = useState([]);
  const [file, setFile] = useState(null); //this is for uploading a file at the moment of posting
  const { user } = useContext(Context);
  const axiosInstance = axios.create({baseURL:process.env.REACT_APP_API_URL})


  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      username: user.username,
      title,
      desc,
      categories, //array type
    };

    const newCat = {
      name: newPost.categories, //string type
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axiosInstance.post("/posts", newPost);
      const answ = await axiosInstance.post("/categories", newCat);

      window.location.replace("/" /* + res.data._id */);
    } catch (err) {}
  };

  return (
    <div className="write">
      {/* {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )} */}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          {/* <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          /> */}
          <input
            type="text"
            placeholder="Título"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          {" "}
          <input
            type="text"
            placeholder="Categoria"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setCategories(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Digite seu poema..."
            type="text"
            className="writeInput writeText"
            /*             id="a"
             */ onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>

        <button className="writeSubmit" type="submit">
          Publicar
        </button>
      </form>
    </div>
  );
}


