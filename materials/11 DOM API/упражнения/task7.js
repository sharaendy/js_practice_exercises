//! решение 1
function extractData(document) {
  const mainTitle = document.querySelector('div > h1').innerHTML;
  const mainDescription =
    document.getElementsByClassName('description')[0].innerHTML;
  const articleTitles = document.querySelectorAll('h2 a');
  const articleDescriptions = document.querySelectorAll('h2 ~ p');

  function objCreator(titles, descriptions) {
    const articleTitlesArr = Array.from(titles);

    const articleDescriptionsArr = Array.from(descriptions);
    const result = [];

    for (let i = 0; i < articleTitlesArr.length; i += 1) {
      const article = {
        title: articleTitlesArr[i].innerHTML,
        description: articleDescriptionsArr[i].innerHTML,
      };
      result.push(article);
    }
    return result;
  }

  const normallize = objCreator(articleTitles, articleDescriptions);

  const finalObj = {
    title: mainTitle,
    description: mainDescription,
    items: normallize,
  };

  return finalObj;
}

const data = extractData(document);
console.log(data);

//! решение 2
function extractData(document) {
  const root = document.querySelector('.content');

  const categoryTitleElement = root.querySelector('h1');
  const categoryTitle = categoryTitleElement.innerHTML;
  const categoryDescriptionElement = root.querySelector('.description');
  const categoryDescription = categoryDescriptionElement.innerHTML;

  const itemElements = root.querySelectorAll('.links div');
  const items = Array.from(itemElements).map((element) => {
    const titleElement = element.querySelector('a');
    const descriptionElement = element.querySelector('p');

    return {
      title: titleElement.innerHTML,
      description: descriptionElement.innerHTML,
    };
  });

  return {
    title: categoryTitle,
    description: categoryDescription,
    items,
  };
}
