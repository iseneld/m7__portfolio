// COMPONENTS
import Banner from "../../../components/Banner";
import NavLink from "../../../components/NavLink";
import ProgressBar from "../../../components/ProgressBar";
import Section from "../../../components/Section";

export default function Ntogn(props) {
  return (
    <>
      <ProgressBar />
      <main>
        <Banner text="Sonic spells and roaring dragons." />
        <Section page="music/ntogn" image="ntogn" text="" height={49} />
        <nav className="link-list">
          <ul style={{ borderTop: "1rem solid var(--color-dark)" }}>
            <NavLink text="Bandcamp" url="https://tomerecords.bandcamp.com/" />
            <NavLink
              text="Discogs"
              url="https://www.discogs.com/artist/3641884-Ntogn"
            />
            <NavLink text="Soundcloud" url="https://soundcloud.com/ntogn" />
            <NavLink
              text="Youtube Music"
              url="https://music.youtube.com/channel/UCsoEC0nREkeuQOjqdyXSVFg?feature=share"
            />
          </ul>
        </nav>
        <Section page="music/ntogn" image="utopia" />
        <Banner
          text="This page is under construction 🚧"
          stylez={{ backgroundColor: "var(--color-yellow)" }}
        />
        <nav className="link-list">
          <ul style={{ borderTop: "1rem solid var(--color-dark)" }}>
            <NavLink text="Go back" to="/music" />
          </ul>
        </nav>
      </main>
    </>
  );
}
