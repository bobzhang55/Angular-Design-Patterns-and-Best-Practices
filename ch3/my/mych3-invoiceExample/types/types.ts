export interface invoiceItem {
    product: string;
    quantity: number;
    price: number;
}
export type Invoice = Array<invoiceItem>;