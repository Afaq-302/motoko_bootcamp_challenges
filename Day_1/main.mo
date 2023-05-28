import Array "mo:base/Array";
import Nat "mo:base/Nat";
import Char "mo:base/Char";
import Option "mo:base/Option";
import Calculator "Calculator";
import Debug "mo:base/Debug";

actor Day_1 {

  var counter : Float = 0;

  public func add(x : Float) : async Float {
    counter := Calculator.add(counter, x);
    return counter;
  };

  public func sub(x : Float) : async Float {
    counter := Calculator.sub(counter, x);
    return counter;
  };

  public func mul(x : Float) : async Float {
    counter := Calculator.mul(counter, x);
    return counter;
  };

  public func div(x : Float) : async ?Float {
    counter := Option.get(Calculator.divide(counter, x), counter);
    return Option.make(counter);
  };

  // dfx canister call bc2305 reset
  // Should set the counter to: 0
  public func reset() : async () {
    counter := 0;
  };

  public query func see() : async Float {
    return counter;
  };

  public func power(x : Float) : async Float {
    counter := Calculator.power(counter, x);
    return counter;
  };

  public func sqrt() : async Float {
    counter := Calculator.sqrt(counter);
    return counter;
  };

};
