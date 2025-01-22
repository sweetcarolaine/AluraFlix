import VideoCard from "../videocard/VideoCard";
import "./Category.css";

function Category({ title, videos }) {
  return (
    <section className="category">
      <h2 className="category-title">{title}</h2>
      <div className="category-videos">
        {videos.map((video) => (
          <VideoCard key={video.id} {...video} />
        ))}
      </div>
    </section>
  );
}

export default Category;
