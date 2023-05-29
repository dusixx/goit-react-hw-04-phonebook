import { IconPhone, IconUser } from 'styles/icons';

export const fieldData = {
  name: {
    title:
      'First and last name(optional) must contain only letters and be at least 2 characters long',
    pattern:
      '^\\s*[A-ZА-Я\\u0406ЇЄa-zа-яіїє]{2,}(\\s+[A-ZА-Я\\u0406ЇЄa-zа-яіїє]{2,})?\\s*$',
    icon: IconUser,
  },
  number: {
    title:
      'The number must be 7 digits long and may contain spaces and hyphens',
    pattern: '^([\\s-]*\\d[\\s-]*){7}$',
    icon: IconPhone,
  },
};
