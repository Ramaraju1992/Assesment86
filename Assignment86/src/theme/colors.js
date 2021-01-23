/**
 * App Theme - Colors
 */

const app = {
  background: '#FFF',
};
const brand = {
  brand: {
    primary: '#0071ce',
    secondary: '#FFFFFF',
  },
};
const borders = {
  border: '#D0D1D5',
};
const tabbar = {
  tabbar: {
    background: '#ffffff',
    iconDefault: '#BABDC2',
    iconSelected: brand.brand.primary,
  },
};

export default {
  ...app,
  ...brand,
  ...borders,
  ...tabbar,
};
