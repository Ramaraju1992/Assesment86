/**
 * Tabbar Icon
 */
import React from 'react';
import {
  View, Text
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { AppColors } from '@theme/';

/* Component ==================================================================== */
const TabIcon = ({ icon, focused, title }) => (
  <View style={{ alignItems: 'center', justifyContent: 'center' }}>
    <Icon name={icon} size={26}
      color={focused ? AppColors.tabbar.iconSelected : AppColors.tabbar.iconDefault} />
    <Text style={{ fontSize:16, color: focused ? AppColors.tabbar.iconSelected : AppColors.tabbar.iconDefault }}>{title}</Text>
  </View>
);

TabIcon.propTypes = { icon: PropTypes.string.isRequired, selected: PropTypes.bool };
TabIcon.defaultProps = { icon: 'home', selected: false };

/* Export Component ==================================================================== */
export default icon => props => TabIcon({ ...props, icon });
