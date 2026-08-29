// Layermate LP interactions
document.addEventListener('DOMContentLoaded', () => {
  // FAQ accordion: keep the first answer open, toggle the rest on click.
  document.querySelectorAll('.faq-item').forEach((item) => {
    const question = item.querySelector('.faq-q');
    const answer = item.querySelector('.faq-a');
    const icon = item.querySelector('.faq-icon');
    if (!question || !answer) return;

    question.setAttribute('role', 'button');
    question.setAttribute('tabindex', '0');
    // Answers present in the comp are the expanded states; keep that visual state on load.
    question.setAttribute('aria-expanded', 'true');
    answer.classList.add('is-open');
    answer.hidden = false;

    const toggle = () => {
      const isOpen = question.getAttribute('aria-expanded') === 'true';
      question.setAttribute('aria-expanded', String(!isOpen));
      answer.hidden = isOpen;
      answer.classList.toggle('is-open', !isOpen);
      if (icon) icon.textContent = isOpen ? '▸' : '▾';
    };

    question.addEventListener('click', toggle);
    question.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggle();
      }
    });
  });

  // Demo CTA placeholders: provide a clear, non-blocking interaction until real URLs are supplied.
  document.querySelectorAll('.btn-primary, .btn-secondary').forEach((button) => {
    if (button.tagName === 'A' || button.dataset.bound) return;
    button.dataset.bound = 'true';
    button.addEventListener('click', () => {
      const label = button.textContent.trim();
      if (label.includes('デモ')) {
        document.querySelector('#demo')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });
});
