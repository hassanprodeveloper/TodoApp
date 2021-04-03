import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
    Avatar,
    Switch,
    ScrollView,
    Text,
    Caption,
    Paragraph,
    Drawer,
    Title,
    TouchableRipple
} from 'react-native-paper'
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const DrawerContent = (props) => {

    const [inDarkTheme, setIsDarkTheme] = React.useState(false);
    const toggleTheme = () => {
        setIsDarkTheme(!inDarkTheme)
    }

    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {... props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfSection}>
                        <View style={{flexDirection:'row', marginTop:15}}>
                            <Avatar.Image
                                source={{
                                    uri:'https://lh3.googleusercontent.com/a-/AOh14Gi54nn3v3q90STJ1B4F2qDfsjHVvRQiXm4QUZNG7A=s88-c-k-c0x00ffffff-no-rj-mo'
                                    }}
                                    size={50}
                            />
                            <View style={{ marginLeft:15}}>
                                <Title style={styles.title}>HA Developer</Title>
                                <Caption style={styles.caption}>@reactNative</Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({color, size}) => (
                              <Icon
                                name='home-outline'
                                color={color}
                                size={size}
                              />
                            )}
                            label='Welcome'
                            onPress={() => props.navigation.navigate('DrawerWelcome')}
                        />
                        
                        <DrawerItem
                            icon={({color, size}) => (
                              <Icon
                                name='home-outline'
                                color={color}
                                size={size}
                              />
                            )}
                            label='Home'
                            onPress={() => props.navigation.navigate('DrawerHome')}
                        />

                        <DrawerItem
                            icon={({color, size}) => (
                              <Icon
                                name='home-outline'
                                color={color}
                                size={size}
                              />
                            )}
                            label='About'
                            onPress={() => props.navigation.navigate('DrawerAbout')}
                        />

                    </Drawer.Section>
                    <Drawer.Section title='Preferences'>
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preferences}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={inDarkTheme}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>

                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon
                            name='exit-to-app'
                            color={color}
                            size={size}
                        />
                    )}
                    label='Sign Out'
                    onPress={() => {}}
                 />
            </Drawer.Section>
        </View>
    );
}

export default DrawerContent;

// STYLE SHEET DWON HERE 
const styles = StyleSheet.create({
    drawerContent:{
        flex:1
    },
    userInfSection:{
        paddingLeft:20,
    },
    title:{
        fontSize:16,
        fontWeight:'bold',
        marginTop:3
    },
    caption:{
        fontSize:14,
        lineHeight:14,
    },
    row:{
        marginTop:20,
        flexDirection:'row',
        alignItems:'center'
    },
    section:{
        marginRight:15,
        alignItems:'center',
        flexDirection:'row',
    },
    paragraph:{
        fontWeight:'bold',
        marginRight:3,
    },
    drawerSection:{
        marginTop:15,
    },
    bottomDrawerSection:{
        marginBottom:15,
        borderTopColor:'#f4f4f4',
        borderTopWidth: 1,
    },
    preferences:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:12,
        paddingHorizontal:16,
    },

})
