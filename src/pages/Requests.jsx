import users from "../Users";
import UserCard from "../components/UserCard";

function Requests() {
  return (
    <>
      <div className="w-[400px] mx-auto mt-20 mb-20">
        <h1 className="text-2xl font-black">Your Follow requests</h1>
        <p className="">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo ipsam
          cupiditate suscipit.
        </p>

        {users.map((user, index) => {
          return (
            <UserCard
              key={`${user.name}_${index}`}
              img={user.image}
              name={user.name}
              prof={user.profession}
              username={user.username}
            />
          );
        })}
      </div>
    </>
  );
}

export default Requests;
