import { func, string, number, oneOfType } from 'prop-types';
import {
  ClearBtn,
  InputWrapper,
  Input,
  Field,
  IconWrapper,
} from './TextField.styled';
import { VscClose as IconClose } from 'react-icons/vsc';

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
        {ReactIcon && (
          <IconWrapper>
            <ReactIcon size="100%" />
          </IconWrapper>
        )}
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
