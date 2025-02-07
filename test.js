// Importo las funciones desde app.js
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("One euro should be 1.07 dollars", function() {
    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros deben ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(dollars).toBe(expected);
});

test("One dollar should be 156.5 yen", function() {
    // 3.5 dólares a yenes
    const yen = fromDollarToYen(3.5);

    // Si 1 dólar son 156.5 yenes, entonces 3.5 dólares deben ser (3.5 * 156.5)
    const expected = 3.5 * 156.5;

    expect(yen).toBe(expected);
});

test("One yen should be 0.87 pounds", function() {
    // 3.5 yenes a libras
    const pounds = fromYenToPound(3.5);

    // Si 1 yen es 0.87 libras, entonces 3.5 yenes deben ser (3.5 * 0.87)
    const expected = 3.5 * 0.87;

    expect(pounds).toBe(expected);
});
