import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native-web";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
function MainTabs() {
    return (
        <Tab.Navigator screenOptions={{ tabBarActiveTintColor: '#6c63ff', tabBarInactiveTintColor: '#999', tabBarStyle: { backgroundColor: '#ffffff', borderTopWidth: 1, borderTopColor: '#ececec', paddingBottom: 6, paddingTop: 4, height: 60, }, headerShown: false, }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon:({size}) => (<TabIcon label="🏠" size={size}/>)}} />
            <Tab.Screen name="Profile" component={ProfileScreen}  options={{tabBarIcon:({size}) => (<TabIcon label="👤" size={size}/>)}} />
            <Tab.Screen name="Settings" component={SettingsScreen}  options={{tabBarIcon:({size}) => (<TabIcon label="⚙️" size={size}/>)}} />
        </Tab.Navigator>
    );
}
export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator screenOptions={{ drawerActiveTintColor: '#6c63ff', drawerInactiveTintColor: '#555', drawerStyle: { backgroundColor: '#f9f9f9', width: 260, }, headerStyle: { backgroundColor: '#6c63ff', }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold', }, }}>
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Profile" component={ProfileScreen} />
                <Drawer.Screen name="Settings" component={SettingsScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
function TabIcon({ label, size }) {
    return <Text style={{ color: '#fff', fontSize: size * 0.5 }}>{label}</Text>;
}