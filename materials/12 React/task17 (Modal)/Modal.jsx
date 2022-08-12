//! решение 1
const Header = (props) => {
  const { toggle, children } = props;
  return (
    <div className="modal-header">
      <div className="modal-title">{children}</div>
      <button
        onClick={toggle}
        type="button"
        className="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
      />
    </div>
  );
};

const Body = (props) => {
  const { children } = props;
  return <div className="modal-body">{children}</div>;
};

const Footer = (props) => {
  const { children } = props;
  return <div className="modal-footer">{children}</div>;
};

export default class Modal extends React.Component {
  static Header = Header;

  static Body = Body;

  static Footer = Footer;

  renderItems = (isOpen) => {
    const currentClasses = cn('modal', [
      {
        fade: isOpen,
        show: isOpen,
      },
    ]);
    const currentStyle = isOpen ? { display: 'block' } : { display: 'none' };
    const { children } = this.props;

    return (
      <div className={currentClasses} style={currentStyle} role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            {children}
          </div>
        </div>
      </div>
    );
  };

  render() {
    const { isOpen } = this.props;
    return this.renderItems(isOpen);
  }
}


//! решение 2 (эталон)
// BEGIN
const Header = ({ children, toggle }) => (
  <div className="modal-header">
    <div className="modal-title">
      {children}
    </div>
    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={toggle} />
  </div>
);
const Body = ({ children }) => <div className="modal-body">{children}</div>;
const Footer = ({ children }) => <div className="modal-footer">{children}</div>;

const Modal = ({ isOpen, children }) => {
  const classes = cn({
    modal: true,
    fade: isOpen,
    show: isOpen,
  });

  const style = {
    display: isOpen ? 'block' : 'none',
  };

  return (
    <div className={classes} style={style} role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  );
};

Modal.defaultProps = {
  isOpen: false,
};

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
// END