//COMPONENTS
import Banner from "../../components/Banner";
import NavLink from "../../components/NavLink";
import ProgressBar from "../../components/ProgressBar";
import Section from "../../components/Section";

export default function Home(props) {
  return (
    <>
      <ProgressBar />
      <main>
        <Section
          image="1"
          text="A creative generalist exploring consciousness through art and technology."
        />
        <section>
          <div className="info">
            <a
              className="github-contributions"
              href="https://github.com/iseneld"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://ghchart.rshah.org/iseneld"
                alt="My github contributions over the last year"
              />
            </a>
          </div>
        </section>
        <Section
          page="home"
          image="vsc"
          text="I'm currently studying frontend development at Hyper Island."
          height={69}
        />
        <Banner text="But I'm not a developer." />
        <Section page="music" image="hypnusrecords/zodiac" height={79} />
        <Banner text="I'm a creator." />
        <Section page="me" image="hand" height={79} />
        <Banner text="A dreamer." />
        <Section image="15" height={79} />
        <Banner text="Sensory explorer." />
        <Section page="music" image="hd800s" height={79} />
        <Banner text="This is my face:" />
        <Section page="me" image="meditate" height={79} />
        {/* <Banner text="A ghost." />
        <Section page="music" image="books-2" height={79} /> */}
        <section className="respond">
          <section className="banner"></section>
          <nav className="link-list">
            <ul>
              <NavLink text="A full-stack project" to="/streaming" />
              <NavLink text="About me" to="/about" />
              {/* <NavLink text="Words" to="/words" /> */}
            </ul>
          </nav>
        </section>
        {/* <nav className="link-list" style={{ borderTop: "1rem solid black" }}>
          <ul>
            <NavLink text="About me" to="/about" />
          </ul>
        </nav> */}
      </main>
    </>
  );
}
