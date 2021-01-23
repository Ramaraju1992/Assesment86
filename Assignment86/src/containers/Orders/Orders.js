import React, { Component } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';

import { connect } from 'react-redux';
import { AppColors } from '@theme/';

const mapStateToProps = state => {
    return ({
        sample_data: state.router.data_list,
    })
};
const mapDispatchToProps = {
};

/* Component ==================================================================== */
class Orders extends Component {
    static componentName = 'Orders';
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render = () => {
        
        return (
            <View style={styles.containerStyle} >
                <View />
                
            </View>
        );
    }
}
/* Styles ==================================================================== */
const styles = StyleSheet.create({
    containerStyle: { flex: 1, backgroundColor: AppColors.background },
});
/* Export Component ==================================================================== */
export default connect(mapStateToProps, mapDispatchToProps)(Orders);