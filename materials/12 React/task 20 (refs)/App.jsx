// @ts-check

import React from 'react';
import Editor from '@toast-ui/editor';


//! решение 1
// BEGIN (write your solution here)
export default class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.markdownEditor = React.createRef();
  }

  componentDidUpdate() {
    const { onContentChange } = this.props;
    
    const editor = new Editor({
      el: this.markdownEditor.current,
      hideModeSwitch: true,
      height: '500px',
      initialEditType: 'markdown',
      previewStyle: 'vertical',
    });

    editor.addHook('change', () => {
      const content = editor.getMarkdown();
      onContentChange(content);
    });
  }

  render() {
    return <div ref={this.markdownEditor} />;
  }
}
// END


//! решение 2
// BEGIN
export default class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.rootElement = React.createRef();
  }

  componentDidMount() {
    const editor = new Editor({
      el: this.rootElement.current,
      hideModeSwitch: true,
    });
    editor.addHook('change', () => this.onChange(editor));
  }

  onChange = (editor) => {
    const { onContentChange } = this.props;
    onContentChange(editor.getMarkdown());
  }

  render() {
    return <div ref={this.rootElement} />;
  }
}
// END