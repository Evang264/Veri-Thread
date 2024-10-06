import Time "mo:base/Time";
import Array "mo:base/Array";

actor Blockchain {
    type Block = {
        timestamp: Int;
        hash: Nat;
        location: Text;
        prev_location: Text;
        description: Text;
    };

    var blocks: [Block] = [];

    public shared query func get(serial_code: Nat): async [Block] {
        return Array.filter<Block>(blocks, func(block) { block.hash == calc_hash(serial_code) });
    };

    // function to add a new transaction - API Endpoint
    public shared func add(serial_code: Nat, location: Text, prev_location: Text, description: Text): async Bool {
        let currentTime: Int = Time.now();
        let hash: Nat = calc_hash(serial_code);

        let newBlock: Block = {
            timestamp = currentTime;
            hash = hash;
            location = location;
            prev_location = prev_location;
            description = description;
        };
        
        blocks := Array.append<Block>([newBlock], blocks);
        let blocksWithSerial = await get(serial_code);
        if (blocksWithSerial.size() > 0) {
            return true;
        } else {
            return false;
        }
    };

    private func calc_hash(serial_code: Nat): Nat {
        var hash: Nat = 0;
        var code = serial_code;
        while (code > 0) {
            hash := (hash * 31) + (code % 10);
            code /= 10;
        };
        return hash;
    }
}