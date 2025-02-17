export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            {/* hero images  */}
            <div className="hero-image">
              <img
                src="home.png"
                alt="Learn Together"
                width="400"
                height="500"
              />
            </div>
            <div className="hero-content">
              <h1 className="hero-content-heading">Welcome to BookWorld</h1>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                eos eum libero aliquid. Commodi quaerat quam, autem dolor
                adipisci praesentium officia voluptates corrupti reiciendis
                dolorum libero, magnam saepe, ab perspiciatis.
              </p>

              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                eos eum libero aliquid. Commodi quaerat quam, autem dolor
                adipisci praesentium officia voluptates corrupti reiciendis
                dolorum libero, magnam saepe, ab perspiciatis.
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                eos eum libero aliquid. Commodi quaerat quam, autem dolor
                adipisci praesentium officia voluptates corrupti reiciendis
                dolorum libero, magnam saepe, ab perspiciatis.
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                eos eum libero aliquid. Commodi quaerat quam, autem dolor
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                eos eum libero aliquid. Commodi quaerat quam, autem dolor
              </p>
              <br />
            </div>
          </div>
        </section>
      </main>

      {/* 3rd section  */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          <div className="hero-content">
            <h2>We are with 50000+ books</h2>
            <h1>Get Started Today</h1>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              fugiat voluptatem aspernatur voluptas deleniti eos animi obcaecati
              quo sapiente veniam autem aperiam, magnam deserunt. Itaque porro
              quod libero dolore ipsa.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
              voluptas tempore adipisci cum repellendus eveniet!
            </p>

            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quos
              saepe! Temporibus molestiae vero, deleniti excepturi hic facilis
              pariatur soluta.
            </p>
            <br />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque,
              labore.
            </p>

            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
              voluptas tempore adipisci cum repellendus eveniet!
            </p>

            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              tenetur.
            </p>

            <br />
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">Connect now</button>
              </a>
              <a href="/services">
                <button className="btn secondary-btn">Learn more</button>
              </a>
            </div>
          </div>

          {/* hero images  */}
          <div className="hero-image">
            <img
              src="design.png"
              alt="Learn together"
              width="400"
              height="500"
            />
          </div>
        </div>
      </section>
    </>
  );
};
