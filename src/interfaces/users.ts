export interface IAuth {
    email: string;
    password: string;
}

export interface ICreateUser extends IAuth{
    confirmPassword: string;
}
