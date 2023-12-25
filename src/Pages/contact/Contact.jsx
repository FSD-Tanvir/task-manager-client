const Contact = () => {
  return (
    <div className="container mx-auto">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/d42R0Rz/Contact-us.jpg"
            className="md:max-w-md lg:h-96 object-cover rounded-lg shadow-2xl"
            alt="Contact Us"
          />
          <div>
            <h1 className="text-5xl font-bold">Contact us</h1>
            <p className="py-6">
              We value your feedback and are here to assist you. If you have any
              questions, suggestions, or concerns, feel free to reach out to us.
              Our dedicated support team is ready to help you make the most of
              your <span className="text-primary">Task Tracker</span>{" "}
              experience.
              <br /> <br />
              <span className="text-primary">Email:</span>{" "}
              support@yourappname.com <br /> <br />
              <span className="text-primary">Phone:</span> +1 (555) 123-4567{" "}
              <br />
              <br />
              <span className="text-primary">General Inquiries:</span>
              info@tasktracker.com. Follow us on social media for the latest
              updates and tips.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
