/*from kybra import query
@query
def greet(name: str) -> str:
    return f"Hello, {name}!"
*/

actor {
    public func greet(name: Text) : async Text {
        return "Hello, " # name # "!";
    }
}
