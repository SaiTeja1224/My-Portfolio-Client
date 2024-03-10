import { useEffect, useRef } from "react";

const Hero = () => {
  const wave1Ref = useRef(null);
  const wave2Ref = useRef(null);
  const wave3Ref = useRef(null);
  const wave4Ref = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      let value = this.scrollY;

      (wave1Ref.current as any).style.backgroundPositionX = 400 + value + "px";
      (wave2Ref.current as any).style.backgroundPositionX = 300 + value + "px";
      (wave3Ref.current as any).style.backgroundPositionX = 200 + value + "px";
      (wave4Ref.current as any).style.backgroundPositionX = 100 + value + "px";
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  });

  const handleDownload = () => {
    const url = "/assets/files/SaiResume.pdf";
    const a = document.createElement("a");
    a.href = url;
    a.download = "sai-teja-resume.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <>
      <article className="hero" id="home">
        <section className="intro">
          <aside className="intro__profile"></aside>
          <h1 className="intro__title">
            Hey there! I'm Sai. A <strong>full-stack developer</strong> with{" "}
            <strong>1 year</strong> of experience. I have a passion for creating
            sites & apps with a slick and responsive design.{" "}
            <u>
              <em>React & Node</em>
            </u>{" "}
            are my primary fields.
          </h1>
          <div className="cta__wrapper">
            <section className="intro__cta">
              <button
                className="section-btn button-resume"
                onClick={handleDownload}
              >
                Download Resume
                <img
                  src="/image/download-white.svg"
                  width={20}
                  height={18}
                />
              </button>
              <a className="section-btn button-contact" href="#contact-form">
                Contact me here{" "}
                <img
                  src="/image/contact-arrow.gif"
                  width={25}
                  height={20}
                />
              </a>
            </section>
            <section className="intro__socials">
              <a href="https://www.linkedin.com/in/sai-teja-j/" target="_blank">
                <img
                  src="/image/linked-in.svg"
                  alt="linkedin link"
                  width={30}
                  height={30}
                />
              </a>
              <a href="https://github.com/saiteja1224" target="_blank">
                <img
                  src="/image/github.svg"
                  alt="github link"
                  width={32}
                  height={32}
                />
              </a>
            </section>
          </div>
        </section>
        <div className="wave-block">
          <div className="wave wave-1" ref={wave1Ref}></div>
          <div className="wave wave-2" ref={wave2Ref}></div>
          <div className="wave wave-3" ref={wave3Ref}></div>
          <div className="wave wave-4" ref={wave4Ref}></div>
        </div>
      </article>
    </>
  );
};

export default Hero;
