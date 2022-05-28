//COMPONENTS
import Banner from "../../components/Banner";
import NavLink from "../../components/NavLink";
import ProgressBar from "../../components/ProgressBar";
import Section from "../../components/Section/Section";

export default function Words() {
  return (
    <>
      <ProgressBar />
      <main>
        <Banner
          text="Read slowly."
          stylez={{
            backgroundColor: "var(--color-blood)",
            color: "var(--color-white)",
          }}
        />
        <section className="respond">
          <section className="banner banner__blog">
            <h1 className="dragon-text">Free will is an illusion</h1>
          </section>
          <section className="link-list">
            <nav>
              <ul>
                <NavLink
                  text="My application to Hyper Island"
                  to="/blog/hi-application"
                  blob="BLOG: 3 MIN"
                />
                <NavLink
                  text="Imagination is the key"
                  to="/blog/imagination"
                  blob="BLOG: 3 MIN"
                />
              </ul>
            </nav>
          </section>
        </section>
        <Banner text="You're not experiencing. You are the experience." />
        <Banner text="If you want to understand your mind, sit down and observe it." />
        <Banner text="Creativity brings order to chaos." />
        <Banner text="The surest way to predict the future is to create it." />
        <Banner text="Innovation happens at the speed of trust." />
        <Banner text="Iteration outperforms design." />
        <Banner text="Consistency compounds." />
        <Banner text="Progress is propelled by problems. " />
        <Banner text="Being wrong means you've grown." />
        <Banner text="All mistakes can be good mistakes, if you learn." />
        <Banner text="No risk, no story." />
        <Banner
          text="Fail fast."
          stylez={{
            backgroundColor: "var(--color-grey)",
          }}
        />
        <Section image="4" height={79} />
        <Banner
          text="Slow down."
          stylez={{
            backgroundColor: "var(--color-blood)",
            color: "var(--color-white)",
          }}
        />
        <Banner text="Identify with your ignorance." />
        <Banner text="Knowledge is limited. Ignorance is boundless." />
        <Banner text="Determinism cures hatred." />
        <Banner text="There is no free will." />
        <Banner text="We do not control, we react." />
        <Banner text="Pain and pleasure steers us." />
        <Banner text="Life is inherently meaningless. This is not a problem, it's an opportunity." />
        <Banner text="We create meaning through our sacrifices." />
        <Banner text="Honor is an underrated virtue." />
        <Banner text="Make promises and keep them." />
        <Banner
          text="What am I trying to say?"
          stylez={{
            backgroundColor: "var(--color-blood)",
            color: "var(--color-white)",
          }}
        />
        <Banner text="Nature doesn't care about what matters to us. " />
        <Banner text="The universe is an answer. The question is science." />
        <Banner text="Imagination makes us human." />
        <Banner text="Everything we hold dear sprouts from our imagination." />
        <Banner text="Imagination is a miracle." />
        <Banner text="Consciousness is controlled hallucination." />
        <Banner text="Attention is psychedelic." />
        <Banner text="What's the difference between authenticity and insanity?" />
        <Banner text="We adapt to function." />
        <Banner text="Sanity is a matter of degree." />
      </main>
    </>
  );
}
