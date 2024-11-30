import React, { useEffect, useState } from "react";
import "./blog.scss";
import axios from "axios";
import AOS from "aos";
import { Link } from "react-router-dom";
import Pagetop from "../../comp/pagetop/Pagetop";
import { Helmet } from "react-helmet";

const Blog = () => {
  const [visibleblog, setVisibleBlogs] = useState(3); // Start with 3 blogs visible
  const [data, setData] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        "https://headless.pandozasolutions.com/wp-json/wp/v2/posts?_embed"
      );
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const loadMoreBlogs = () => {
    setVisibleBlogs((prevVisible) => prevVisible + 3); // Load 3 more blogs
  };

  useEffect(() => {
    fetchBlogs();
    AOS.init();
  }, []);


  function formatDate(dateString) {
    // Create a new Date object from the input string
    const date = new Date(dateString);
  
    // Get the day, month, and year
    const day = String(date.getDate()).padStart(2, '0'); // Add leading zero if needed
    const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() is zero-based, so add 1
    const year = date.getFullYear();
  
    // Return the date in dd/mm/yyyy format
    return `${day}/${month}/${year}`;
  }
  return (
    
   <>
      <Helmet>
        <title>Blog Details | Gandhi Travels Blog</title>
        <meta
          name="description"
          content="Read the latest blog post from Gandhi Travels, offering insightful travel tips, updates, and stories from our car rental services in Pune and beyond."
        />
        <meta
          name="keywords"
          content="travel blog, car rental blog, Gandhi Travels blog, Pune travel tips, Pune to Shirdi travel, car rental services blog, travel stories, Pune taxi blog, corporate travel blog, family travel tips, vehicle rental blog, travel advice, Lonavala travel, Shirdi taxi, car hire in Pune, travel updates"
        />
        <link rel="canonical" href="https://gandhitravels.co.in/blogdetail" />
      </Helmet>
   <Pagetop pagetop_text="Blogs" /> <div className="blog-parent parent">
   <div className="blog-cont cont" data-aos="fade-up">
     <div className="card-box" data-aos="fade-up" data-aos-delay="200">
       {data &&
         data.slice(0, visibleblog).map((blog, index) => {
           const imageUrl =
             blog._embedded["wp:featuredmedia"] &&
             blog._embedded["wp:featuredmedia"][0].source_url;

           const category =
             blog._embedded["wp:term"] &&
             blog._embedded["wp:term"][0][0].name;

           return (
             <Link
               to={`/blogs/${blog.id}`}
               className="card-link"
               key={index}
             >
               <div className="card">
                 <div className="card-data">
                   <div
                     className="card-image bg-img-cover"
                     style={{ backgroundImage: `url(${imageUrl})` }}
                   ></div>
                   <h4 className="card-title">{blog.title.rendered}</h4>
                   <p
                     className="short-desc"
                     dangerouslySetInnerHTML={{
                       __html: blog.excerpt.rendered.slice(0, 150),
                     }}
                   ></p>
                 </div>
                 <div className="bottom-card">
                   <div className="category">{category}</div>
                   <div className="date">{ formatDate(blog.date)}</div>
                 </div>
               </div>
             </Link>
           );
         })}
     </div>
     {visibleblog < data.length && (
       <div className="load-more">
         <button className="btn" onClick={loadMoreBlogs}>Load More Blog</button>
       </div>
     )}
   </div>
 </div></>
  );
};

export default Blog;
