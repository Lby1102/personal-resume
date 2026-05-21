/**
 * Component: Hero
 * Renders the top header section from profile data.
 * @param {Object} profile - full profile.json object
 * @returns {string} HTML string
 */
export function renderHero(profile) {
  const { name, initials, title, studentId, contact, heroNotes = [] } = profile;

  const avatarHTML = `<img src="./profile_photo.png" alt="${name} 的头像" />`;

  const links = [];
  if (contact.email)    links.push(`<span class="contact-item"><span class="contact-label">邮箱</span><a href="mailto:${contact.email}" class="contact-link">${contact.email}</a></span>`);
  if (contact.github)   links.push(`<span class="contact-item"><span class="contact-label">GitHub</span><a href="${contact.github}" class="contact-link" target="_blank" rel="noopener">${contact.github.replace('https://github.com/', '')}</a></span>`);
  if (contact.linkedin) links.push(`<span class="contact-item"><span class="contact-label">LinkedIn</span><a href="${contact.linkedin}" class="contact-link" target="_blank" rel="noopener">${contact.linkedin}</a></span>`);
  if (contact.phone)    links.push(`<span class="contact-item"><span class="contact-label">电话</span><a href="tel:${contact.phone}" class="contact-link">${contact.phone}</a></span>`);

  const contactHTML = links.join('');
  const notesHTML = heroNotes.map(note => `<p class="hero-note">${note}</p>`).join('');

  return `
    <div class="container">
      <div class="hero-content">
        <div class="hero-main">
          <div class="avatar">${avatarHTML}</div>
          <div class="hero-text">
            <h1>${name}</h1>
            <p class="hero-title">${title}</p>
            <p class="hero-student-id">学号：${studentId}</p>
            <div class="contact-row">${contactHTML}</div>
          </div>
        </div>
        <div class="hero-notes">${notesHTML}</div>
      </div>
    </div>
  `;
}
