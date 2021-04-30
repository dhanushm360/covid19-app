import { ParamListBase, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';

export interface StackNavigationProps<
    ParamList extends ParamListBase,
    RouteName extends keyof ParamList = string
>   {
    navigation: StackNavigationProp<ParamList, RouteName>;
    route: RouteProp<ParamList, RouteName>;
    onPress: () => void;
    useState: () => void;
    item: any;
}

export type Routes = {
    SplashScreen: undefined;
    HomeScreen: undefined;
    DataScreen: undefined,
    AboutScreen: undefined,
    PrecautionsScreen: undefined,
    TestingScreen: undefined,
    AboutCOVID19Screen: undefined,
    SymptomsScreen: undefined,
    RiskScreen: undefined,
    VariantsScreen: undefined,
    SearchScreen: undefined,
    HomeStackScreen: undefined,
    SearchStackScreen: undefined,
    MainTabNavigator: undefined,
    LocationResultsScreen: undefined,
    SearchScreenHeader: undefined,
    LocationDataScreen: undefined,
    

};