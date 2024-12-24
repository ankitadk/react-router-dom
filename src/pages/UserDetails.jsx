import users from "../NewUsers";
import { useParams } from "react-router-dom";
import Feed from "../components/Feed";

function UserDetails() {
  let { username } = useParams();
  let user = users.find((user) => user.username === username);

  return (
    <>
      <div className="w-[600px] mx-auto mt-20 mb-20 flex items-center">
        <div className="w-1/3">
          <img
            className="h-[130px] w-[130px] object-cover rounded-full "
            src={user.image}
            alt=""
          />
        </div>
        <div className="w-2/3">
          <h1 className="font-bold text-2xl">{user.name}</h1>
          <p>{user.profession}</p>
          <p className="text-sm">{user.description}</p>
          <div className="flex gap-3 mt-2">
            <div className="bg-neutral-200 rounded-md px-3 py-1">
              {user.followers} Followers
            </div>
            <div className="bg-neutral-200 rounded-md px-3 py-1">
              {user.following} Following
            </div>
          </div>
        </div>
      </div>

      <div className="w-[800px] mx-auto mb-10">
        <div className="flex gap-4 flex-wrap justify-center">
          {user.posts.map((post) => {
            return (
              <Feed
                key={`${user.name}_${post.id}`}
                img={post.image}
                id={post.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default UserDetails;
