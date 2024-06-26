export default function Home() {
  return (
    <div className="container">
      <section className="home row">
        <div className="home-img col-md-6 d-flex align-items-center justify-content-center order-md-last">
          <img src="/home.png" className="float-end" />
        </div>
        <div className="home-content col-md-6 d-flex flex-column justify-content-center text-center text-md-start order-md-first">
          <div>
            <h3 className="fw-bold">Hallo, introduce me</h3>
            <h1 className="fw-bold">ABIZAR ARRIFA&apos;I</h1>
            <p className="fs-5">
              and i&apos;m a <span className="fw-bold">Fullstack Developer.</span>
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
            <a href="https://drive.google.com/file/d/1tRIkpOKnMpOGKsNuhidMXYceVUl4Oky7/view?usp=drive_link" target="_blank" type="button" className="btn ">
              Download CV
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
