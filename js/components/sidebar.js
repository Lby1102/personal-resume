/**
 * Component: Sidebar (left column)
 * Renders: Skills (学习经历)
 * @param {Object} profile - full profile.json object
 * @returns {string} HTML string
 */
export function renderSidebar(profile) {
  return `
    <aside class="sidebar">
      ${renderSkills(profile.skills)}
    </aside>
  `;
}

function renderSkills(items) {
  const rows = items.map(item => {
    const hasUrl = item.url && item.url.trim() !== '';
    const link = hasUrl
      ? `<a href="${item.url}" class="skill-url" target="_blank" rel="noopener">↗</a>`
      : '';
    return `<li class="skill-entry"><span>${item.name}</span>${link}</li>`;
  }).join('');

  return `
    <section class="card" id="skills">
      <h2 class="section-title">学习经历</h2>
      <ul class="skill-entry-list">${rows}</ul>
    </section>
  `;
}
