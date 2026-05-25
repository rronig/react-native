import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import AboutScreen from "./screens/AboutScreen";
const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: "#3498db"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontWeight: "bold"
            }
        }}>
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Home Page" }} />
            <Stack.Screen name="Details" component={DetailsScreen} />
            <Stack.Screen name="About" component={AboutScreen}/>
        </Stack.Navigator>
    );
}