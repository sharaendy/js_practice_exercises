//! решение 1
const bodyContent = document.body.innerHTML.trim();
const normalizer = (content) => content.split('\n').map((str) => `<p>${str}</p>`).join('\n');

document.body.innerHTML = normalizer(bodyContent);

//! решение 2
const text = document.body.innerHTML.trim();
const lines = text.split('\n');
const tags = lines.map((line) => `<p>${line}</p>`);
document.body.innerHTML = tags.join('\n');
