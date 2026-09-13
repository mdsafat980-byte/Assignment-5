function YourStack({ stack, onRemoveTechnology, onRemoveAll }) {
  const countLabel = `${stack.length} Technology${stack.length === 1 ? '' : 'ies'} Selected`;

  return (
    <aside className="stack-panel">
      <div className="stack-panel-top">
        <h3>Your Stack</h3>
        <span className="stack-count">{countLabel}</span>
      </div>

      {stack.length === 0 ? (
        <div className="empty-stack">
          <p className="empty-stack-message">No technologies selected yet.</p>
          <div className="empty-stack-box">
            <p>Your stack is empty.</p>
          </div>
        </div>
      ) : (
        <>
          <div className="stack-list">
            {stack.map((item) => {
              const isImageIcon =
                typeof item.icon === 'string' && item.icon.startsWith('http');

              return (
                <div className="stack-item" key={item.id}>
                  <div className="stack-item-left">
                    <span className="stack-icon">
                      {isImageIcon ? (
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="stack-logo-image"
                        />
                      ) : (
                        item.icon
                      )}
                    </span>

                    <div className="stack-item-copy">
                      <span className="stack-item-name">{item.name}</span>
                      <span className="stack-item-category">{item.category}</span>
                    </div>
                  </div>

                  <button
                    className="stack-remove"
                    onClick={() => onRemoveTechnology(item.id)}
                    aria-label={`Remove ${item.name}`}
                  >
                    ×
                  </button>
                </div>
              );
            })}
          </div>

          <button
            className="remove-all-button"
            onClick={onRemoveAll}
            disabled={stack.length === 0}
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
}

export default YourStack;
