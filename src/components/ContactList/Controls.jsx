import { string, number, objectOf, oneOfType, func } from 'prop-types';
import { ControlsList, Control, ControlBtn } from './Controls.styled';
import { getId, cap } from 'utils';

export const Controls = ({ value, onControlClick, targetId, height }) => {
  return (
    <ControlsList height={height}>
      {Object.entries(value).map(([name, Icon]) => {
        return (
          <Control key={getId()}>
            <ControlBtn
              type="button"
              title={cap(name)}
              onClick={() => onControlClick(targetId, name.toLocaleLowerCase())}
            >
              <Icon size="100%" />
            </ControlBtn>
          </Control>
        );
      })}
    </ControlsList>
  );
};

Controls.propTypes = {
  value: objectOf(func),
  onControlClick: func,
  targetId: string,
  height: oneOfType([string, number]),
};
