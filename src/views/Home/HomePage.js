import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.scss";

const HomePage = ({ setUser }) => {
  const [testErrorState, setTestErrorState] = useState();
  const searchUser = useRef();
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const fetchUser = await fetch(
        `https://api.github.com/users/${searchUser.current.value}`
      );
      const user = await fetchUser.json();
      setUser(user);
      navigate("/repos");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="view-home">
      <div className="logo">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_29_40)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.9633 0C5.3578 0 0 5.3578 0 11.9633C0 17.2477 3.44954 21.7248 8.14679 23.3394C8.73395 23.4128 8.95413 23.0459 8.95413 22.7523C8.95413 22.4587 8.95413 21.7248 8.95413 20.6972C5.65138 21.4312 4.91743 19.0826 4.91743 19.0826C4.40367 17.6881 3.59633 17.3211 3.59633 17.3211C2.49541 16.5872 3.66972 16.5872 3.66972 16.5872C4.84404 16.6605 5.50459 17.8349 5.50459 17.8349C6.6055 19.6697 8.29358 19.156 8.95413 18.8624C9.02752 18.055 9.3945 17.5413 9.68807 17.2477C7.04587 16.9541 4.25688 15.9266 4.25688 11.3028C4.25688 9.98165 4.69725 8.95413 5.50459 8.07339C5.43119 7.85321 4.99083 6.6055 5.65138 4.99083C5.65138 4.99083 6.6789 4.69725 8.95413 6.23853C9.90826 5.94495 10.9358 5.87156 11.9633 5.87156C12.9908 5.87156 14.0183 6.01835 14.9725 6.23853C17.2477 4.69725 18.2752 4.99083 18.2752 4.99083C18.9358 6.6055 18.4954 7.85321 18.422 8.14679C19.156 8.95413 19.6697 10.055 19.6697 11.3761C19.6697 16 16.8807 16.9541 14.2385 17.2477C14.6789 17.6147 15.0459 18.3486 15.0459 19.4495C15.0459 21.0642 15.0459 22.3119 15.0459 22.7523C15.0459 23.0459 15.2661 23.4128 15.8532 23.3394C20.6239 21.7248 24 17.2477 24 11.9633C23.9266 5.3578 18.5688 0 11.9633 0Z"
              fill="#027EC5"
            />
          </g>
          <defs>
            <clipPath id="clip0_29_40">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <span>dashed</span>
      </div>
      <main>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">
            <span>Search for a Github user</span>
            <input
              ref={searchUser}
              id="username"
              placeholder="Enter valid username"
            />
          </label>
          <button type="submit" className="search">
            Search
          </button>
          <button
            type="button"
            className="test"
            onClick={(e) => {
              setTestErrorState(15);
            }}
          >
            Test error{testErrorState ? testErrorState.toLowerCase() : ""}
          </button>
        </form>
      </main>
    </section>
  );
};

export default HomePage;
