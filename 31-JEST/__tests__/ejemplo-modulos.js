import { suma } from '../js/funciones2.js';

describe('Suma 2 números', () => {
    test('Sumar 10 y 20 y arrojar 30', () => {
        expect(suma(10,20)).toBe(30);
    })
})