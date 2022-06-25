//! решение 1 (последний тест не проходит)
function prettify(document) {
  const dives = document.body.querySelectorAll('div');
  Array.from(dives).map((element) => {
    const nodes = element.childNodes;
    Array.from(nodes).map((node) => {
      if (node instanceof Text && node.textContent.trim() !== '') {
        const data = node.textContent.trim();
        const p = document.createElement('p');
        p.textContent = data;
        node.parentNode.append(p);
        node.remove();
      }
      return node;
    });
    return element;
  });
}
prettify(document);

//! решение 2
export default (document) => {
  const divs = [...document.getElementsByTagName('div')];
  divs.forEach((div) => {
    const textNodes = [...div.childNodes]
      .filter((child) => child instanceof Text)
      .filter((child) => child.textContent.trim() !== '');
    textNodes.forEach((node) => {
      const p = document.createElement('p');
      p.textContent = node.textContent;
      node.replaceWith(p);
    });
  });
};