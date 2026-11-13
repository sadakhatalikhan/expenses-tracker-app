import { JwtResponse } from "../../http/models/User";

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
    StaticsScreen: {
        user: JwtResponse;
    };
    ProfileScreen: {
        user: JwtResponse;
    }
}

export type HomeTabParamList = {
    Home: {
        user: JwtResponse;
    };
    Expenses: {
        user: JwtResponse;
    };
    Statistics: {
        user: JwtResponse;
    };
    Profile: {
        user: JwtResponse;
    };
}