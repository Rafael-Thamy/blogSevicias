import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/SideBar";
import "./homepage.css";
import axios from "axios";
import { useLocation } from "react-router";
import BasicGrid from "../../components/basicGrid/BasicGrid";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axiosInstance.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />

      <div className="home">
        <Posts posts={posts} />

        <Sidebar />
      </div>
    </>
  );
}

//here we put our main components, that will be loaded at the first render


//From here we load all the pages of the project, 
//by making links using react-router-dom and its components