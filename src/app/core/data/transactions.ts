import { Transaction } from "../models/transaction";

const transactions: Transaction[] = [
    {
        type: "send-money",
        name: "John Dembe",
        currency: "UGX",
        amount: "5846",
        status: "completed",
        timestamp: "4 hr"
    },
    {
        type: "collection",
        name: "Mary Kaikara",
        currency: "UGX",
        amount: "5846",
        status: "completed",
        timestamp: "4 hr"
    },
    {
        type: "withdrawal",
        name: "Philip Kenyanga",
        currency: "UGX",
        amount: "5846",
        status: "completed",
        timestamp: "2 d"
    },
    {
        type: "send-money",
        name: "Nelson Kizza",
        currency: "UGX",
        amount: "5846",
        status: "pending",
        timestamp: "5 d"
    },
    {
        type: "send-money",
        name: "Alice Mukassa",
        currency: "UGX",
        amount: "5846",
        status: "failed",
        timestamp: "5 d"
    }
];

export default transactions;