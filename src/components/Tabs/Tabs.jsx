export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const active = tabs.find(j => j.id === activeTabId) || tabs[0];

  return (
    <div>
      <ul>
        {tabs.map(i => (
          <li
            data-cy="Tab"
            key={i.id}
            className={i.id === activeTabId ? 'is-active' : ''}
          >
            <a data-cy="TabLink" href={`#tab-${i.id}`}
             onClick={(e) => onTabSelected(i.id)
             }>
              <h1>{i.title}</h1>
            </a>
          </li>
        ))}
      </ul>
      
      <div data-cy="TabContent">
      {active.content}
    </div>
    </div>
  );
};
