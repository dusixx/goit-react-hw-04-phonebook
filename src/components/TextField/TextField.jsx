import { func, string, number, oneOfType } from 'prop-types';
import { IconClose } from 'styles/icons';

import {
  ClearBtn,
  InputWrapper,
  Input,
  Field,
  IconWrapper,
} from './TextField.styled';

export const TextField = ({
  value,
  icon: ReactIcon,
  type,
  onChange,
  height,
  width,
  ...restProps
}) => {
  return (
    <Field height={height} width={width}>
      <InputWrapper>
        <Input
          type={type || 'text'}
          onChange={onChange}
          value={value}
          {...restProps}
        />

        {/* Icon */}
        {ReactIcon && (
          <IconWrapper>
            <ReactIcon size="100%" />
          </IconWrapper>
        )}

        {/* Clear btn */}
        {value && (
          <ClearBtn type="button" onClick={() => onChange(null)}>
            <IconClose size="100%" />
          </ClearBtn>
        )}
      </InputWrapper>
    </Field>
  );
};

TextField.propTypes = {
  value: string,
  type: string,
  onChange: func,
  width: oneOfType([string, number]),
  height: oneOfType([string, number]),
};
