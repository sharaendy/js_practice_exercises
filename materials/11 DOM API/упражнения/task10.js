//! решение 1
function normalize(document) {
  const elemsColl = document.body.getElementsByTagName('*');
 
  Array.from(elemsColl).forEach((element) => {
    console.log('element = ', element);
    if (element.classList.length === 0) {
      return;
    }
    Array.from(element.classList).forEach((currentClass) => {
      const newClass = _.camelCase(currentClass);
      console.log('!!!', newClass)
      element.classList.replace(currentClass, newClass);
    });
  });
}

normalize(document)


//! решение 2
export default (document) => {
  const allNodes = [...document.body.getElementsByTagName('*')];
  allNodes.forEach((node) => {
    const process = (item) => node.classList.replace(item, camelCase(item));
    node.classList.forEach(process);
  });
};