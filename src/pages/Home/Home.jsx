import { Link } from "react-router-dom";

//COMPONENTS
import Banner from "../../components/Banner";
import ProgressBar from "../../components/ProgressBar";
import Section from "../../components/Section/Section";

export default function Home(props) {
  const linkList = props.linkList.map((object, i) => {
    object.id = i;
    return object;
  });

  return (
    <>
      <ProgressBar />
      <main>
        <Section
          image="1"
          text="Creative generalist exploring consciousness through art and
            technology."
        />
        <section className="respond">
          <section className="banner"></section>
          <section className="link-list">
            <ul>
              <li>
                <Link to="/streaming">
                  <h2>Full-stack project</h2>
                  {/* <div style={{ marginLeft: "1rem" }}>
                    <img
                      src="./images/icons/express.png"
                      alt="Express Icon"
                      className="tech-icon"
                    />
                    <img
                      src="./images/icons/node.png"
                      alt="Node Icon"
                      className="tech-icon"
                    />

                    <img
                      src="./images/icons/mongodb.png"
                      alt="MongoDB Icon"
                      className="tech-icon"
                    />
                  </div> */}
                  <span>{`>`}</span>
                </Link>
              </li>
              <li>
                <Link to="/music">
                  <h2>Music</h2>
                  <span>{`>`}</span>
                </Link>
              </li>
              <li>
                <Link to="/photography">
                  <h2>Photo</h2>
                  <span>{`>`}</span>
                </Link>
              </li>
              {linkList.map((x) => (
                <li
                  key={x.id} // KEY PROP ADDED HERE!
                  style={{
                    backgroundImage: `url(./images/${x.img})`,
                  }}
                >
                  <a href={x.url} target="_blank" rel="noreferrer">
                    <h2>{x.title} </h2> <span>{`>`}</span>
                    {x.class !== "none" && (
                      <img
                        src={`/images/icons/${x.class}.png`}
                        alt={`${x.title} Icon`}
                        className="tech-icon"
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </section>
        <Section
          page="home"
          image="vsc"
          text="I am currently studying frontend development at Hyper Island."
          height={54}
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
        <Section image="15" />
        <Banner text="This site is under construction 🚧" />
      </main>
    </>
  );
}
