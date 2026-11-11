import { JwtResponse } from "../../http/models/User";

export type RootStackParamList = {
    Login: undefined;
    Register: undefined;
    Home: {
        user: JwtResponse;
    }
}