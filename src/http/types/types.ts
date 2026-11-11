import { JwtResponse } from "../../http/models/User";

export type RootStackParamList = {
    Login: undefined;
    Register: undefined;
    HomeScreen: {
        user: JwtResponse;
    }
}