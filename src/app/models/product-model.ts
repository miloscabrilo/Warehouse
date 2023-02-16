
export interface Product {
    code: string;
    quantity: number;
    floor: number;
    section: number;
}

export enum ProductFormMode {
    CREATE,
    UPDATE
}