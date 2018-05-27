// * Write a single if statement that logs out the message:
//  * 
//  * "I'd like two scoops of __ ice cream in a __ with __."
//  * 
//  * ...only if:
//  *   - flavor is "vanilla" or "chocolate"
//  *   - vessel is "cone" or "bowl"
//  *   - toppings is "sprinkles" or "peanuts"
//  *
//  * We're only testing the if statement and your boolean operators. 
//  * It's okay if the output string doesn't match exactly.
//  */

// change the values of flavor, vessel, and toppings to test your code
var flavor = "vanilla";
var vessel = "bowl";
var toppings = "peanuts";

function makeIceCream(flavor, vessel, toppings) {
    // first if check occurs and checks wheether flavor is either vanilla or chocolate 
    // || statements return true if one or the other are truthy
    if (flavor === 'vanilla' || flavor === 'chocolate') {
        // inside the block of the first if we can assume we have a truthy value
        // now all we need to do is check whether it's a cone or a bowl
        if (vessel === 'cone' || vessel === 'bowl') {
            // inside this if block we can assume that it passed truthy again and now
            // we check whether the toppings are sprinkles or peanuts
            if (toppings === 'sprinkles' || toppings === 'peanuts') {
                // Within quotes you can escape \ quotes although actually it wasn't needed because I used double quotes around the string
                return "I\'d like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings + ".";
            } else {
                return "You didn't choose a valid topping";
            }
        } else {
            return "You didn't choose a valid vessel";
        }
    } else {
        return "You didn't pass in a valid flavor";
    }

}

console.log(makeIceCream(flavor, vessel, toppings));