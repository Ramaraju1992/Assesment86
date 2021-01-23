import React, { Component } from 'react';
import {
    View, Text, Image, StyleSheet,
    TextInput,  ScrollView
} from 'react-native';

import { connect } from 'react-redux';
import * as RouterActions from '@redux/router/actions';
import { AppColors } from '@theme/';
import AppHeader from '@components/AppHeader';
import { Avatar } from 'react-native-elements';

const mapStateToProps = state => {
    return ({
        sample_data: state.router.data_list,
    })
};
const mapDispatchToProps = {
    apicallmethods: RouterActions.hit_Api_call_here,
};

/* Component ==================================================================== */
class HomePage extends Component {
    static componentName = 'HomePage';
    constructor(props) {
        super(props);
        this.state = {
            core_data: props.sample_data,
            banners: [
                { "id": 0, "disc": 'Invite friends & to Join Project86', "offer": 25, },
                { "id": 1, "disc": 'Invite friends & to Join Project86', "offer": 30 },
                { "id": 2, "disc": 'Invite friends & to Join Project86', "offer": 15 },
                { "id": 3, "disc": 'Invite friends & to Join Project86', "offer": 27 },
            ],
            categories: [
                { "id": 0, "name": "Vegetables", "source": require('@images/Vegetables.png') },
                { "id": 1, "name": "Fruits", "source": require('@images/Fruits.png') },
                { "id": 2, "name": "Cleaning", "source": require('@images/Cleaning.png') },
                { "id": 3, "name": "Grocery", "source": require('@images/Grocery.png') },
                { "id": 4, "name": "Edible Oils", "source": require('@images/EdibleOils.png') },
                { "id": 5, "name": "Meat", "source": require('@images/Meat.png') },
                { "id": 6, "name": "Meat", "source": require('@images/Fish.png') },
                { "id": 7, "name": "Spice", "source": require('@images/Spice.png') }
            ],
        };
    }
    render = () => {
        const textColor = '#bbbec0';

        var banners = this.state.banners.map((banner) => {
            return (
                <View key={banner.id} style={{ margin: 10,  }}>
                    <Image style={{ height: 250, width: 300 }} source={require('@images/Banner.png')} />
                </View>
            )
        });
        var categories = this.state.categories.map((category) => {
            return (
                <View key={category.source} style={{ alignItems: 'center', justifyContent: 'center', margin: 10 }}>
                    <Avatar rounded size={60} source={category.source} />
                    <Text>{category.name}</Text>
                </View>

            )
        });

        return (
            <View style={styles.containerStyle} >
                <AppHeader title={'Welcome to 86'}/>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ padding: 20, }}>
                        <Text style={{ fontSize: 16, color: textColor }}>Find your daily goods</Text>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 10 }}>
                            <View style={{ flex: 1, marginRight: 10, borderRadius: 10, backgroundColor: '#f6f7f7', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15 }}>
                                <Avatar size={23} source={require('@images/search.png')} />
                                <TextInput placeholder={'Search here...'} style={{ fontSize: 18, color: textColor }} />
                            </View>
                            <Avatar size={50} source={require('@images/filter.png')} />
                        </View>
                        <View style={{ padding: 10, marginVertical: 10, paddingVertical: 20, borderRadius: 10, backgroundColor: '#fdf8e2', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Avatar rounded size={28} source={require('@images/icon01.png')} />
                            <View style={{ flex: 1, paddingHorizontal: 10, }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold', color: textColor }}>Complete your profile</Text>
                                <Text style={{ fontSize: 16, color: textColor }}>Order to complete your registration kindly update your profile</Text>
                            </View>
                            <Avatar rounded size={18} source={require('@images/icon02.png')} />
                        </View>
                    </View>
                    <View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 20 }}>
                            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Promotions</Text>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>See all</Text>
                        </View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ height: 180, backgroundColor:'#FFF' }}>
                            {banners}
                        </ScrollView>
                        <View style={{ flexWrap: 'wrap', margin: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            {categories}
                        </View>
                    </View>

                </ScrollView>

            </View>
        );
    }
}
/* Styles ==================================================================== */
const styles = StyleSheet.create({
    containerStyle: { flex: 1, backgroundColor: AppColors.background, paddingTop: 10 },
});
/* Export Component ==================================================================== */
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);