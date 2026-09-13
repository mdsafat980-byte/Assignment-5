import TechnologyCard from './TechnologyCard';
import YourStack from './YourStack';

function TechnologyList({
  technologies,
  stack,
  loading,
  onAddTechnology,
  onRemoveTechnology,
  onRemoveAll,
}) {
  if (loading) {
    return (
      <section className="technologies-section" id="technologies">
        <div className="container">
          <div className="loading-box">Loading technologies...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="technologies-section" id="technologies">
      <div className="container technologies-shell">
        <div className="section-heading">
          <h2>
            Explore the <span className="gradient-text">Technologies</span>
          </h2>
          <p>Pick one technology per category to build your ideal stack.</p>
        </div>

        <div className="technologies-layout">
          <div className="technology-grid">
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                isAdded={stack.some((item) => item.id === technology.id)}
                onAddTechnology={onAddTechnology}
              />
            ))}
          </div>

          <YourStack
            stack={stack}
            onRemoveTechnology={onRemoveTechnology}
            onRemoveAll={onRemoveAll}
          />
        </div>
      </div>
    </section>
  );
}

export default TechnologyList;
