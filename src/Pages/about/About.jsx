/* eslint-disable react/no-unescaped-entities */
const About = () => {
  return (
    <div className="container mx-auto ">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/Qf7cpWt/About-Us.jpg"
            className=" md:max-w-lg rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">About us</h1>
            <p className="py-6">
            Welcome to Task Tracker – your dedicated task management companion. At Task Tracker, we're on a mission to simplify your life by helping you stay organized and focused. Our user-centric design and feature-rich functionality make task tracking a breeze, whether you're a solo achiever or part of a collaborative team. We understand the nuances of productivity, and our customizable options cater to your unique workflow. Behind Task Tracker is a passionate team committed to providing you with a seamless and enjoyable task management experience. Join us on this journey, and let's conquer tasks together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
