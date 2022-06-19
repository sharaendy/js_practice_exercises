//! решение 1
export default function extractData(html) {
  const allBodyElements = html.lastElementChild.getElementsByTagName('p');
  const allElementsArray = Array.from(allBodyElements);

  return allElementsArray.map((paragraph) => paragraph.innerHTML.trim());  
}

extractData(document.documentElement);

//! решение 2
const extractData = (root) => {
  const children = Array.from(root.parentNode.body.children);
  return children
    .filter((element) => element.tagName === 'P')
    .map((element) => element.innerHTML.trim());
};
console.log(extractData(document.documentElement))