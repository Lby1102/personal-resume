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
      ${renderAwards(profile.awards)}
      ${renderInterests(profile.interests)}
    </div>
  `;
}

function renderAbout(text) {
  const html = text.replace(/\n/g, '<br>');
  return `
    <section class="card" id="about">
      <h2 class="section-title">关于我</h2>
      <p>${html}</p>
    </section>
  `;
}

function renderExperience(items) {
  const entries = items.map(exp => {
    const bullets = exp.bullets.map(b => `<li>${b}</li>`).join('');
    return `
      <div class="entry">
        <div class="entry-header">
          <span class="entry-title">${exp.title}</span>
          <span class="entry-date">${exp.start} — ${exp.end}</span>
        </div>
        <p class="entry-sub">${exp.role} · ${exp.org}</p>
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

function renderAwards(items) {
  const rows = items.map(a => `
    <li>
      <span class="award-name">${a.name}</span>
      <span class="award-date">${a.year}</span>
    </li>
  `).join('');

  return `
    <section class="card" id="awards">
      <h2 class="section-title">荣誉与奖项</h2>
      <ul class="award-list">${rows}</ul>
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
