import Array "mo:base/Array";
import Nat "mo:base/Nat";
import Char "mo:base/Char";

actor Day_1 {

  var counter : Float = 0;

  public func add(x : Float) : async Float {
    counter += x;
    return counter;
  };

  public func sub(x : Float) : async Float {
    counter -= x;
    return counter;
  };

  public func mul(x : Float) : async Float {
    counter *= x;
    return counter;
  };

  public func div(x : Float) : async ?Float {
    if (x == 0) {
      // 'null' encodes the division by zero error.
      return null;
    } else {
      counter /= x;
      return ?counter;
    };
  };

  public func square() : async Float {
    return (counter * counter);
  };

};
