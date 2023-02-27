
export interface Product {
    code: string;
    quantity: number;
    floor: number;
    section: number;
}

export interface FilterField {
    label: string;
    name: string;
    type: 'text' | 'number' | 'date' | 'select';
    options?: number[];
  }