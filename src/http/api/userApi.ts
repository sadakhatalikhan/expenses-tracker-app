import axiosInstance from "./axiosInstance";

import { UserRequest, UserResponse, ApiResponse, AuthRequest } from "../../http/models/User";

export const addUser = async (user: UserRequest): Promise<ApiResponse<UserResponse>> => {
        
    const response = await axiosInstance.post<ApiResponse<UserResponse>>("/add", user);
    return {
        data: response.data.data,
        message: response.data.message,
        status: response.status
    }
}

export const loginUser = async (login: AuthRequest): Promise<ApiResponse<JwtResponse>> => {
    const response = await axiosInstance.post<ApiResponse<JwtResponse>>("/auth/login", login);
    return {
        data: response.data.data,
        message: response.data.message,
        status: response.status
    }
}