import axios from "axios";
import React, { useEffect, useState } from "react";
import "./blogdetail.scss"; // Ensure you create a corresponding SCSS file for styling
import { useParams } from "react-router-dom";
import Pagetop from "../../comp/pagetop/Pagetop";

const BlogDetailPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  console.log("loading ");
  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        `https://headless.pandozasolutions.com/wp-json/wp/v2/posts/${id}?_embed`
      );
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  const imageUrl =
    data._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "/default-image.jpg"; // Fallback image
  const category =
    data._embedded?.["wp:term"]?.[0]?.[0]?.name || "Uncategorized";
  const title = data.title.rendered;
  const date = new Date(data.date).toLocaleDateString();
  const content = data.content.rendered;

  return (

   <>
   <Pagetop pagetop_text={title} />
    <div className="parent blog-detail-parent">
 <div className="blog-detail-container cont">
      <div
        className="blog-image bg-img-cover"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="blog-content">
        <div className="blog-meta">
          <span className="blog-category cta-btn">{category}</span>
          <span className="blog-date cta-btn">{date}</span>
        </div>
        <h1 className="blog-title">{title}</h1>
        <div
          className="blog-description"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </div>
    </div></>
   
  );
};

export default BlogDetailPage;
