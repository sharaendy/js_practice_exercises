В этом уроке вам предстоит реализовать вкладки(табы) и переключатель тем для контента внутри вкладок:



src/App.jsx
Ознакомьтесь со списком тем. Каждая тема включает в себя класс стилей, который должен присваиваться контенту при переключении темы. Сделайте сохранение темы в состоянии компонента. Добавьте провайдер для передачи данных контекста. Данные должны содержать всё необходимое для работы: список тем, текущую выбранную тему, метод для изменения темы.

Реализуйте переключатель вкладок. Можно использовать готовый компонент Tabs из react-bootstrap.

Пример использования:

render() {
  return (
    <Tabs>
      <Tab eventKey="login" title="Login">
        <Home />
      </Tab>
      <Tab eventKey="registration" title="Registration">
        <Profile />
      </Tab>
    </Tabs>
  );
}
src/Home.jsx и src/Profile.jsx
В компонентах src/Home.jsx и src/Profile.jsx добавьте получение необходимых данных из контекста. Выведите текст из константы content. Элемент контента должен содержать класс из контекста.

Пример контента внутри вкладки:

<article class="light">Текст для вкладки Home</article>
src/ThemeSwitcher.jsx
Добавьте получение необходимых данных из контекста и реализуйте переключение темы. Переключение тем должно срабатывать для всех вкладок. Можно использовать готовый компонент ToggleButton из react-bootstrap.

Пример использования:

render() {
  return (
    <ButtonGroup className="mb-2">
      <ToggleButton
        id="toggle-check"
        type="checkbox"
        variant="secondary"
        checked={checked}
        value="1"
        onChange={(e) => setChecked(e.currentTarget.checked)}
      >
        Checked
      </ToggleButton>
    </ButtonGroup>
  );
}