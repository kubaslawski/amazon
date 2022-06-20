export interface IAuth {
    email: string;
    password: string;
}

export interface ICreateUser extends IAuth{
    confirmPassword: string;
}


export interface ISeller {
    id: number;
    email: string;
    first_name: string;
    last_Name: string;
}