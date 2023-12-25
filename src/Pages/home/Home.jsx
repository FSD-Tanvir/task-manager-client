import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mx-auto">
      {/* banner start*/}
      <div className="hero relative   ">
        <img src="https://i.ibb.co/C2KzkrW/task-Banner.png" alt="" />

        <div className="absolute bottom-4 md:bottom-20 content-center">
          <Link to={'/task-board'} className="bg-purple-700 text-white px-4 py-2 rounded-md">
            Let’s Explore
          </Link>
        </div>
      </div>
      {/* banner end*/}
    </div>
  );
};

export default Home;
