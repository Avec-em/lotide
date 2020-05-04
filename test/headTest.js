const assertEqual = require('../assertEqual');
const head = require('../head')

assertEqual(head(["emily", "hi", "bye"]), "emily")
assertEqual(head(["hi", "bye"]), "hi")
assertEqual(head([]), undefined)
assertEqual(head([-1, 9, 8, 0]), -1)
assertEqual(head([true, false]), true)