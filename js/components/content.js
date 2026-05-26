/**
 * Component: Content (right column)
 * Renders: About, Experience, Awards, Interests
 * @param {Object} profile - full profile.json object
 * @returns {string} HTML string
 */
export function renderContent(profile) {
  return `
    <div class="content">
      ${renderAbout(profile.about)}
      ${renderExperience(profile.experience)}
      ${renderInterests(profile.interests)}
    </div>
  `;
}

function renderAbout(text) {
  const items = Array.isArray(text) ? text : text.split('\n');
  const rows = items.map(line => `<li>${line}</li>`).join('');
  return `
    <section class="card" id="about">
      <h2 class="section-title">关于我</h2>
      <ul class="tag-list">${rows}</ul>
    </section>
  `;
}

function renderExperience(items = []) {
  const safeItems = Array.isArray(items) ? items : [];
  const entries = safeItems.map(exp => {
    const bulletSource = Array.isArray(exp?.bullet)
      ? exp.bullet
      : Array.isArray(exp?.bullets)
        ? exp.bullets
        : typeof exp?.bullet === 'string'
          ? [exp.bullet]
          : typeof exp?.bullets === 'string'
            ? [exp.bullets]
            : [];

    const bullets = bulletSource.map(b => {
      // 将 "GitHub URL:https://..." 转换成可点击链接
      const linkified = b.replace(
        /(GitHub URL:)(https?:\/\/[^\s]+)/gi,
        '$1<a href="$2" target="_blank" rel="noopener" class="inline-link">$2</a>'
      );
      return `<li>${linkified}</li>`;
    }).join('');

    return `
      <div class="entry">
        <div class="entry-header">
          <span class="entry-title">${exp?.title || ''}</span>
        </div>
        <ul class="entry-desc">${bullets}</ul>
      </div>
    `;
  }).join('');

  return `
    <section class="card" id="experience">
      <h2 class="section-title">项目 / 实习经历</h2>
      ${entries}
    </section>
  `;
}



function renderInterests(items) {
  const tags = items.map(i => `<span class="tag">${i}</span>`).join('');

  return `
    <section class="card" id="interests">
      <h2 class="section-title">兴趣爱好</h2>
      <div class="tag-row">${tags}</div>
    </section>
  `;
}
