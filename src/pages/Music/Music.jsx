// COMPONENTS
import ProgressBar from "../../components/ProgressBar";
import Section from "../../components/Section";

export default function Music(props) {
  return (
    <>
      <ProgressBar />
      <main>
        <Section page="music" image="studio-1" text="Aural dreamweaving." />
        <section className="link-list">
          <ul style={{ borderTop: "1rem solid var(--color-dark)" }}>
            <li>
              <a
                href="https://aethermechanics.bandcamp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <h2>Aether Mechanics</h2>
                <span>{`>`}</span>
              </a>
            </li>
            <li>
              <a
                href="https://tomerecords.bandcamp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <h2>Ntogn</h2>
                <span>{`>`}</span>
              </a>
            </li>
            <li>
              <a
                href="https://hypnus.bandcamp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <h2>Hypnus Records</h2>
                <span>{`>`}</span>
              </a>
            </li>
          </ul>
        </section>
        <Section page="music" image="ntogn" />
        <Section page="music" image="modular-1" />
        <Section page="music" image="studio-2" />
        <Section page="music" image="hd800s" />
        <Section page="music" image="hypnus-basel" />
        <Section page="music" image="hypnus-bryssel" />
        <Section page="music" image="hypnus-monument" />
        <section>
          <div className="info">
            <h2>
              I'll teach you at{" "}
              <a
                href="https://www.patreon.com/micheliseneld"
                target="_blank"
                rel="noreferrer"
              >
                Patreon
              </a>
              .
            </h2>
          </div>
        </section>
      </main>
    </>
  );
}
