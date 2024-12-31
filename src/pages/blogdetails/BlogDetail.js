import axios from "axios";
import React, { useEffect, useState } from "react";
import "./blogdetail.scss"; // Ensure you create a corresponding SCSS file for styling
import { useParams } from "react-router-dom";
import Pagetop from "../../comp/pagetop/Pagetop";

const BlogDetailPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  console.log("loading ");
  const fetchPost = async () => {
    try {
      const response = await axios.get(
        `https://api.gandhitravels.co.in/wp-json/wp/v2/posts?slug=${slug}&_embed`
      );
      setPost(response.data[0]); // Assuming the API returns an array with a single post
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [slug]);

  if (!post) {
    return <div>Loading...</div>;
  }

  const imageUrl =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "/default-image.jpg"; // Fallback image
  const category =
    post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Uncategorized";
  const title = post.title.rendered;
  const date = new Date(post.date).toLocaleDateString();
  const content = post.content.rendered;

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
