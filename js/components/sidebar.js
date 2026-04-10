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
    // support \n in name: first line = title, rest = description
    const [title, ...descParts] = item.name.split('\n');
    const desc = descParts.join(' ');
    const descHTML = desc
      ? `<span class="skill-entry-desc">${desc}</span>`
      : '';

    const hasUrl = item.url && item.url.trim() !== '';
    const urlLine = hasUrl
      ? `<a href="${item.url}" class="skill-url-text" target="_blank" rel="noopener">课程链接</a>`
      : '';

    return `<li class="skill-entry">
      <span class="skill-entry-name">${title}</span>
      ${descHTML}
      ${urlLine}
    </li>`;
  }).join('');

  return `
    <section class="card" id="skills">
      <h2 class="section-title">学习经历</h2>
      <ul class="skill-entry-list">${rows}</ul>
    </section>
  `;
}
