function TechnologyCard({ technology, onAddTechnology, isAdded }) {
  const formattedRating = Number(technology.rating).toFixed(1);
  const isImageIcon = typeof technology.icon === 'string' && technology.icon.startsWith('http');
  const badgeClassMap = {
    Popular: 'badge-popular',
    Versatile: 'badge-versatile',
    Fast: 'badge-fast',
    NoSQL: 'badge-nosql',
    Standard: 'badge-standard',
    'Top SQL': 'badge-top-sql',
    Cache: 'badge-cache',
    Ubiquitous: 'badge-ubiquitous',
    Essential: 'badge-essential',
    Robust: 'badge-robust',
    Modern: 'badge-modern',
    Containers: 'badge-containers',
  };
  const badgeClass = badgeClassMap[technology.badge] || 'badge-default';

  return (
    <article className="technology-card">
      <div className="card-header">
        <div className="tech-icon" aria-label={technology.name}>
          {isImageIcon ? (
            <img
              src={technology.icon}
              alt={technology.name}
              className="tech-logo-image"
            />
          ) : (
            technology.icon
          )}
        </div>
        <span className={`tech-badge ${badgeClass}`}>{technology.badge}</span>
      </div>

      <div className="card-body">
        <h3>{technology.name}</h3>
        <p>{technology.description}</p>

        <div className="meta-row">
          <span className="category-chip">{technology.category}</span>
          {technology.difficulty && (
            <span className="difficulty">{technology.difficulty}</span>
          )}
          <span className="rating-inline">
            <span className="stars">★</span>
            <span className="rating-text">{formattedRating}</span>
          </span>
        </div>
      </div>

      <button
        className="add-button"
        onClick={() => onAddTechnology(technology)}
        disabled={isAdded}
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </article>
  );
}

export default TechnologyCard;
