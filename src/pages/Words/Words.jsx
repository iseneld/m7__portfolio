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
          text="Slow down."
          stylez={{
            backgroundColor: "var(--color-blood)",
            color: "var(--color-white)",
          }}
        />
        {/* <Banner text="If you want to understand your mind, sit down and observe it." /> */}
        {/* <Banner text="Creativity brings order to chaos." /> */}
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
        <Section image="4" height={79} />
        <Banner
          text="Read slowly."
          stylez={{
            backgroundColor: "var(--color-blood)",
            color: "var(--color-white)",
          }}
        />
        <Banner text="Identify with your ignorance." />
        {/* <Banner text="Knowledge is limited. Ignorance is boundless." /> */}
        {/* <Banner text="Determinism cures hatred." /> */}
        <Banner text="There is no free will." />
        <Banner text="We do not control, we react." />
        <Banner text="Pain and pleasure steers us." />
        <Banner text="You're not experiencing. You are the experience." />
        <Banner text="That life is inherently meaningless is not a problem, it's an opportunity." />
        <Banner text="We create meaning through our sacrifices." />
        {/* <Banner text="Honor is an underrated virtue." /> */}
        {/* <Banner text="Make promises and keep them." /> */}
        <Banner
          text="Why did I make this page?"
          stylez={{
            backgroundColor: "var(--color-blood)",
            color: "var(--color-white)",
          }}
        />
        <Banner text="The universe is an answer. Science is the question." />
        <Banner text="Imagination makes us human." />
        <Banner text="Nature does not care about our hopes and dreams." />
        <Banner text="Everything we hold dear sprouts from our imagination." />
        <Banner text="Imagination is a miracle." />
        <Banner text="Consciousness is a controlled hallucination." />
        <Banner text="Attention is psychedelic." />
        <Banner text="Am I authentic or insane?" />
        <Banner text="The difference between genius and insanity is measured in success." />
        <Banner text="Sanity is a matter of degree." />
        <Banner text="We adapt to function." />
        <Banner text="Trends are societal narcotics." />
        <Banner text="Be different." />
      </main>
    </>
  );
}
