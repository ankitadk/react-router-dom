import { Link } from "react-router-dom";

function Feed({ img, id }) {
  return (
    <>
      <Link to={`/post/${id}`}>
        <img src={img} className="w-[220px] h-[220px] object-cover" alt="" />
      </Link>
    </>
  );
}

export default Feed;
