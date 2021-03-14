import Counter "canister:Counter";
import Nat "mo:base/Nat";
actor {
  public func greet() : async Text {
    let result = await Counter.get();
    "The current counter is " # Nat.toText(result)
  };
}