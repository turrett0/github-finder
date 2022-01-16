import { Link } from "react-router-dom";
import propTypes from "prop-types";

function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className="card shadow-md compact side bg-base-100">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow w-14 h-14">
              <img src={avatar_url} alt="Profile img" />
            </div>
          </div>
        </div>
        <div>
        <h2 className="card-title">{login}</h2>
        <Link
          className="text-bash-content text-opacity-40"
          to={`/users/${login}`}
        >
          Visit Profile
        </Link>
        </div>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  user: propTypes.object.isRequired,
};

export default UserItem;
