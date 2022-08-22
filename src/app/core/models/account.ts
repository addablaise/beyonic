export interface Account {
    currency: string,
    balance: number,
    weekly?: number,
    incoming?: number,
    outgoing?: number,
}