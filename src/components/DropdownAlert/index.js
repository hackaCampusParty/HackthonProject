import React from 'react';
import PropTypes from 'prop-types';
import DropdownAlert from 'react-native-dropdownalert';

const DropdownAlertCustom = ({
	paramRef,
	color,
	transparent,
	inactiveStatusBarStyle,
}) => (
	<DropdownAlert
		ref={paramRef}
		translucent={!!transparent}
		inactiveStatusBarStyle={inactiveStatusBarStyle}
		inactiveStatusBarBackgroundColor={color}
		successColor="#23D160"
		errorColor="#FF3860"
		warnColor="#FFDD57"
		infoColor="#209CEE"
	/>
);

DropdownAlertCustom.propTypes = {
	paramRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape()]).isRequired,
	color: PropTypes.string.isRequired,
	transparent: PropTypes.bool,
	inactiveStatusBarStyle: PropTypes.string,
};

DropdownAlertCustom.defaultProps = {
	transparent: false,
	inactiveStatusBarStyle: null,
};

export default DropdownAlertCustom;
