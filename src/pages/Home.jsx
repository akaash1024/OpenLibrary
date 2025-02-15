import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>We are open source library</p>
              <h1>Welcome to Akash Library</h1>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
                minus ducimus, tempora officiis illo architecto, facere ad enim
                praesentium ipsam, eius fugiat atque adipisci. Odit molestiae in
                exercitationem id dolor?
              </p>

              <div className="btn btn-group">
                <NavLink to="/">
                  <button className="btn">Connect Now</button>
                </NavLink>
                <NavLink to="/about">
                  <button className="btn">About</button>
                </NavLink>
              </div>
            </div>

            {/* hero images  */}
            <div className="hero-image">
              <img
                src="/public/homePage.jpg"
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
