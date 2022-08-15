src/MarkdownEditor.jsx
Реализуйте компонент <MarkdownEditor />, который является React оберткой плагина @toast-ui/editor. Этот плагин позволяет встроить в страницу Markdown-редактор.

const editor = new Editor({
  el: element,
  hideModeSwitch: true,
});

editor.addHook('change', () => {
  const content = editor.getMarkdown();
  // код который будет вызван при изменении содержимого редактора
});
Компонент принимает на вход функцию как свойство onContentChange, которая вызывается при каждом изменении в редакторе. Функция принимает на вход содержимое редактора. Его использование видно в файле src/index.jsx.

Посмотреть пример работы редактора можно на странице документации.