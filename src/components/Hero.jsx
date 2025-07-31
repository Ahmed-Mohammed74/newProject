import "./Hero.css";
import ava from "../assets/ava.jpg"; // Make sure ava.jpg is in src/assets/
function Hero() {
  return (
    <section className="hero" id="hero">
      <img src={ava} alt="Avatar" className="hero-img" />{" "}
      {/* Added image here */}
      <h1>START FRAMEWORK</h1>
        <hr/>
      <p>Graphic Artist - Web Designer - Illustrator</p>
    </section>
  );
}

export default Hero;