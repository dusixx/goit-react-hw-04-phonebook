import { Component } from 'react';
import { createPortal } from 'react-dom';
import { func } from 'prop-types';
import { Backdrop, Container } from './Modal.styled';
import ScrollToggler from './scrollToggler';

const scroll = new ScrollToggler();
const rootModal = document.querySelector('#root-modal');

export default class Modal extends Component {
  static propTypes = {
    onClose: func,
  };

  componentDidMount() {
    scroll.disable();
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    scroll.enable();
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = e => {
    const { onClose } = this.props;
    if (e.code === 'Escape') onClose && onClose(e);
  };

  handleBackdropClick = e => {
    const { onClose } = this.props;
    if (e.currentTarget !== e.target) return;
    onClose && onClose(e);
  };

  render() {
    const { children, bgColor } = this.props;
    const { handleBackdropClick } = this;

    return createPortal(
      <Backdrop onClick={handleBackdropClick} bgColor={bgColor}>
        <Container>{children}</Container>
      </Backdrop>,
      rootModal
    );
  }
}
