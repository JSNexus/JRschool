import Banner from "./components/Banner/index";
import Companies from "./components/Companies/Companies";
import Mentor from "./components/Mentor/index";
import Testimonials from "./components/Testimonials/index";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const Home = () => {
  return (
    <main>
      <Banner />
      <Companies />
      {/*<Courses />*/}
      <Mentor />
      <Testimonials />
      {/*<Newsletter />*/}
    </main>
  );
};

export default Home;
