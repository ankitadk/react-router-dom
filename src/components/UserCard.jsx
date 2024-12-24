import { Link } from "react-router-dom";

function UserCard(props) {
  //   console.log(props);
  let { img, name, prof, username } = props;

  return (
    <>
      <Link to={`/userdetails/${username}`} className="hover:cursor-pointer">
        <div className="flex gap-5 items-center mt-4">
          <img
            className="h-11 w-11 object-cover rounded-full"
            src={img}
            alt=""
          />
          <div>
            <p>{name}</p>
            <p className="text-sm text-neutral-600">{prof}</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default UserCard;
