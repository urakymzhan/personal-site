import { Link } from "react-router-dom";
import { blogs } from "../blogs/headline";
import PageHeader from "../utils/Helmet";
import { BlogHeaders, BlogTitles } from "./styled";

export default function Blogs() {
  return (
    <BlogHeaders>
      <PageHeader title="All Blogs - Ulan Rakymzhanov" />
      <h2>All blogs</h2>
      <hr />
      <BlogTitles>
        {blogs.map((blog) => {
          return (
            <Link
              key={blog.id}
              to={{
                pathname: `/blogs/${blog.link}`,
              }}
            >
              <h3 className="blog-headline-header">
                {blog.title}{" "}
                <span className="blog-headline-tags">#{blog.tag}</span>
              </h3>
            </Link>
          );
        })}
      </BlogTitles>
    </BlogHeaders>
  );
}
