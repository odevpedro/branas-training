import { calc } from "../../src/v1/calc"

test("Must calculate a run at normal times", function() {
    const fare = calc([{dist: 10, ds: new Date("2021-03-10T10:00:00")}]);
    expect(fare).toBe(21)
})

test("Should calculate a night run", function() {
    const fare = calc([{dist: 10, ds: new Date("2021-03-10T22:00:00")}]);
    expect(fare).toBe(39)
})

test("Must calculate a race on a Sunday", function() {
    const fare = calc([{dist: 10, ds: new Date("2021-03-07T10:00:00")}]);
    expect(fare).toBe(29)
})

test("Must calculate a race on a night run in Sunday", function() {
    const fare = calc([{dist: 10, ds: new Date("2021-03-07T22:00:00")}]);
    expect(fare).toBe(50)
})

test("Should not calculate a race with an invalid distance", function() {
    const fare = calc([{dist: -10, ds: new Date("2021-03-07T22:00:00")}]);
    expect(fare).toBe(-1)
})

test("Should not calculate a race with an invalid date", function() {
    const fare = calc([{dist: 10, ds: new Date("java")}]);
    expect(fare).toBe(-2)
})


test("Should calculate a race at normal times with a minimum value", function() {
    const fare = calc([{dist: 3, ds: new Date("2021-03-10T10:00:00")}]);
    expect(fare).toBe(10)
})