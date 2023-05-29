import { bool, string } from 'prop-types';
import { RotatingLines } from 'react-loader-spinner';
import Modal from 'components/Modal/Modal';

const DEF_MODAL_BGCOLOR = 'rgb(255 255 255 / 0.8)';

export const Spinner = props => (
  <RotatingLines
    strokeColor="black"
    strokeWidth="3"
    animationDuration="0.75"
    width="60"
    visible={true}
    {...props}
  />
);

export const Loader = ({
  visible,
  bgColor = DEF_MODAL_BGCOLOR,
  ...restProps
}) =>
  visible && (
    <Modal bgColor={bgColor}>
      <Spinner {...restProps} />
    </Modal>
  );

Loader.propTypes = {
  visible: bool,
  bgColor: string,
};

export default Loader;
