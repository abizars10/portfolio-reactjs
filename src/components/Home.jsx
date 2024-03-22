export default function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content container-md">
        <h3>Hallo, introduce me</h3>
        <h1>Abizar Arrifa&apos;i</h1>
        <p>
          and i&apos;m a <span>Fullstack Developer</span>
        </p>

        <div className="social-media">
          <a href="https://web.facebook.com/?_rdc=1&_rdr" target="_blank">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="https://twitter.com/?lang=en-id" target="_blank">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="https://www.instagram.com/abizars10/" target="_blank">
            <i className="bx bxl-instagram-alt"></i>
          </a>
          <a href="https://www.linkedin.com/in/abizar-arrifa-i-7124b1271/" target="_blank">
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
        <a href="https://drive.google.com/file/d/1tRIkpOKnMpOGKsNuhidMXYceVUl4Oky7/view?usp=drive_link" target="_blank" type="button" className="btn btn-outline-primary">
          Download CV
        </a>
      </div>
      <div className="home-img">
        <img src="/home.png" className="float-end" />
      </div>
    </section>
  );
}
