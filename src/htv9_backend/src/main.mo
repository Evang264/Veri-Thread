import Time "mo:base/Time";
import Array "mo:base/Array";

actor Blockchain {
    type Transaction = {
        from: Text;
        to: Text;
        amount: Nat;
        timestamp: Int;
    };

    var transactions: [Transaction] = [];

    // function to add a new transaction - API Endpoint
    public shared func addTransaction(from: Text, to: Text, amount: Nat): async () {
        let newTransaction: Transaction = {
            from = from;
            to = to;
            amount = amount;
            timestamp = Time.now();
        };
        
        transactions := Array.append([newTransaction], transactions);
    };

    // function to get a new transaction - API Endpoint
    public shared func getTransactions(): async [Transaction] {
        return transactions;
    };

    //API function to connect to QR code
    
}