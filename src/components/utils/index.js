export const isStr = v => typeof v === 'string';
export const isNum = v => !isNaN(v - parseFloat(v));
export const isDef = v => typeof v !== 'undefined';
export const isFunc = v => typeof v === 'function';
export const isInt = v => Number.isInteger(v);
export const isObj = v =>
  Object.prototype.toString.call(v) === '[object Object]';

export const cap = v => (isStr(v) && v ? v[0].toUpperCase() + v.slice(1) : '');
export const calcCSSValue = v => (isNum(v) ? `${v}px` : v);

let id = 0;
export const getId = () => `id-${(id++).toString(16)}`;

export const parseCSSValue = v => {
  const value = parseFloat(v);
  const unit = String(v).slice(String(value).length) || 'px';
  return { value, unit };
};

export const formatNumber = number =>
  number.replace(/[\s-]/g, '').replace(/(\d{3})(\d{2})(\d{2})/, '$1-$2-$3');
