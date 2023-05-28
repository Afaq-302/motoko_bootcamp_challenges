import Option "mo:base/Option";
import Int "mo:base/Int";
import Float "mo:base/Float";

module Calculator {

    public func add(counter : Float, val : Float) : Float {
        return counter + val;
    };

    public func sub(counter : Float, val : Float) : Float {
        return counter -val;
    };

    public func mul(counter : Float, val : Float) : Float {
        return counter * val;
    };

    public func divide(counter : Float, val : Float) : ?Float {
        assert (val != 0);
        var result : ?Float = null;

        if (val != 0) {
            result := Option.make<Float>(Float.div(counter, val));
        };

        return result;
    };

    public func sqrt(counter : Float) : Float {
        return Float.sqrt(counter);
    };

    public func power(counter : Float, val : Float) : Float {
        return Float.pow(counter, val);
    };

};
