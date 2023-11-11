import { calc } from "../../src/v1/calc"

test("Must calculate a run at normal times", function() {
    const fare = calc([{dist: 10, ds: new Date("2021-03-10T10:00:00")}]);
    expect(fare).toBe(21)
})