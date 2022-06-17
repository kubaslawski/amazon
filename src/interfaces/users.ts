export interface ICreateUser {
    email: string;
    password: string;
    confirmPassword: string;
}


export interface ISeller {
    id: number;
    email: string;
    first_name: string;
    last_Name: string;
}