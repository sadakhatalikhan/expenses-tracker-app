import { JwtResponse } from "../../http/models/User";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
    Onboarding: undefined;
    Login: undefined;
    Register: undefined;
    HomeScreen: {
        user: JwtResponse;
    };
    ExpensesScreen: {
        user: JwtResponse;
    };
    ProfileScreen: {
        user: JwtResponse;
    }
}