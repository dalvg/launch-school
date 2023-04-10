const Car = require("./car");

describe("The Car class", () => {
    let car;
    beforEach(() => {
        car = new Car();
    })
    test("has four wheels", () => {
        let car = new Car();
        expect(car.wheels).toBe(4);
    });

    xtest('bad wheels', () => {
        let car = new Car();
        expect(car.wheels).toBe(3);
    });

    test('two new cars are equal', () => {
        let car1 = new Car();
        let car2 = new Car();
        expect(car1).toEqual(car2);
    });

    test('drive erro',  () => {
       let car = new Car();
       expect(() => car.drive()).toThrow();
    })
});