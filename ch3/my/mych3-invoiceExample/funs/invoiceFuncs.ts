import type { Invoice } from '../types/types';

function getTotalInvoice(invoice: Invoice): number {
    let invoiceTotal = invoice.reduce(
        (total, item) => total + item.quantity * item.price,
        0
    );
    return invoiceTotal;
}
export function invoiceExample() {
    let example: Invoice = [
        { product: "banana", price: 1.5, quantity: 3 },
        { product: "apple", price: 0.5, quantity: 11 },
        { product: "pinaple", price: 3, quantity: 12 },
    ];
    console.log(`Invoice Total:${getTotalInvoice(example)}`);
}
