export interface IDispatchInterface {
    (...args: any): void;
}

export interface IOption {
    label: string;
    value: string | number;
}