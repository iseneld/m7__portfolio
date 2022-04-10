import Goals from "../components/Goals";
import { Link } from "react-router-dom";

export default function Home(props) {
  const linkList = props.linkList.map((object, i) => {
    object.id = i;
    return object;
  });

  return (
    <>
      <main>
        <section className="michel">
          <h2>Creative generalist exploring consciousness through art and technology.</h2>
        </section>
        <section className="landing__top home__top">
            
          <section className="landing__banner">
            <h2>I am currently studying frontend development at Hyper Island.</h2>
          </section>
          <section className="landing-list">
            <section>
              <ul className="home-list">
                <li
                  style={{
                    background: `#af3333`,
                  }}
                >
                  <Link
                    to="/streaming"
                    className={`landing-list school-project`}
                  >
                    <h2>Data Interaction</h2>

                    <div>
                      <img
                        src="./images/icons/react.png"
                        alt="React Icon"
                        className="icon"
                      />
                      <img
                        src="./images/icons/node.png"
                        alt="Node Icon"
                        className="icon"
                      />
                      <img
                        src="./images/icons/express.png"
                        alt="Express Icon"
                        className="icon"
                      />
                      <img
                        src="./images/icons/mongodb.png"
                        alt="MongoDB Icon"
                        className="icon"
                      />
                    </div>
                  </Link>
                </li>
                {linkList.map((x) => (
                  <li
                    className={`landing-list`}
                    key={x.id} // KEY PROP ADDED HERE!
                    style={{
                      backgroundImage: `url(./images/${x.img})`,
                    }}
                  >
                    <a href={x.url} target="_blank" rel="noreferrer">
                      <h2>{x.title} </h2>{" "}
                      {x.class !== "none" && (
                        <img
                          src={`/images/icons/${x.class}.png`}
                          alt={`${x.title} Icon`}
                          className="icon"
                        />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </section>
        </section>
        <section className="landing__second">
          <div>
            <h2>I'm learning!</h2>
            <br />
            <p>
              <img
                src="./images/icons/html5.png"
                alt="HTML5 Icon"
                className="icon"
              />
              <img
                src="./images/icons/css3.png"
                alt="CSS3 Icon"
                className="icon"
              />
              <img
                src="./images/icons/sass.png"
                alt="Sass Icon"
                className="icon"
              />
              <img
                src="./images/icons/js.png"
                alt="Javascript Icon"
                className="icon"
              />
              <img
                src="./images/icons/react.png"
                alt="React.js Icon"
                className="icon"
              />
              <img
                src="./images/icons/node.png"
                alt="Node.js Icon"
                className="icon"
              />
              <img
                src="./images/icons/express.png"
                alt="Express Icon"
                className="icon"
              />
              <img
                src="./images/icons/mongodb.png"
                alt="MongoDB Icon"
                className="icon"
              />
            </p>
            <p>
              Below you see the progress I've made with my course goalz.
            </p>
            <p>
              <span className="passed">Passed</span>{" "}
              <span className="wip">Learning</span>{" "}
              <span className="future">Future</span>
            </p>
          </div>
        </section>
        <Goals />
        <section className="landing__second">
          <div>
            <h2>🚧 Under Construction 🚧</h2>
            <p>Moar coming! Idk wat 2 put, butt it prolly b gr8.</p>
          </div>
        </section>
      </main>
    </>
  );
}
