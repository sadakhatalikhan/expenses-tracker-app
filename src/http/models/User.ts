export interface UserRequest {
    username: string;
    phoneNumber: string;
    password: string;
}

export interface UserResponse {
    id: string;
    username: string;
    phoneNumber: string;
}

export interface AuthRequest {
    phoneNumber: string;
    password: string;
}

export interface ApiResponse<T> {
    data: T;
    message: string;
    status: number;
}

export interface AuthRequest {
    phoneNumber: string;
    password: string;
}

export interface JwtResponse {
    type: string;
    token: string;
    id: string;
    name: string;
    phoneNumber: string;
    createdDate: Date;
    updatedDate: Date;
}