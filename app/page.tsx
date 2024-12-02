import Banner from "./components/Banner/index";
import Companies from "./components/Companies/Companies";
import Mentor from "./components/Mentor/index";
import Testimonials from "./components/Testimonials/index";

export default function Home() {
  console.log("Home component rendered");

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
}
