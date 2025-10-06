import user from "../Images/user.png";

const User = () => {
  return (
    <div>
      <h1> User is rendered.</h1>
      <img src={user} className="userImage" />
    </div>
  );
};

export default User;
