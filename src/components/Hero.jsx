import bannerStack from '../../assets/banner-stack.png';

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>
            Build Your Ideal <span>Development Stack</span>
          </h1>
          <p className="hero-description">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits your
            next project.
          </p>

          <div className="hero-actions">
            <a href="#technologies" className="primary-button">
              Explore Technologies
            </a>
            <a href="#about" className="secondary-button">
              Learn More
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card">
            <img src={bannerStack} alt="Developer workspace" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
