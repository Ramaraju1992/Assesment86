import React from 'react';
import PropTypes from 'prop-types';
import {
	Modal, Alert, View, TouchableOpacity, Image, Text, StyleSheet, TouchableHighlight, Dimensions,
	StatusBar, NetInfo, Platform,
} from 'react-native';
import { Avatar } from 'react-native-elements';
import { AppColors, AppStyles } from '@theme/';
import { connect } from 'react-redux';
var styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
// What data from the store shall we send to the component?
const mapStateToProps = state => {
	return ({
	})
};
const mapDispatchToProps = {
};


/* Component ==================================================================== */
class AppHeader extends React.Component {
	static propTypes = {
		title: PropTypes.string,
	}
	static defaultProps = {
		title: '',
	}
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render = () => {
		return (<View style={{ height: 80, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10 }}>
			<Avatar size={60} rounded source={require('@images/Group.png')} />
			<Text style={{ fontSize: 24, fontWeight: 'bold', color:'#1e272e' }}>{this.props.title}</Text>
			<Avatar size={30} rounded source={require('@images/Bell.png')} />
		</View>);
	}
}

/* Export Component ==================================================================== */
export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
