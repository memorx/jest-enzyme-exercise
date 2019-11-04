import { max_number } from "./index";

import setupTests from '../components/setupTest.js';
import tempPolyfills from '../components/tempPolyfills';


describe("max_number", () => {
   describe("given an empty array", () => {
       it("return 0", () => {
           expect(max_number([])).toEqual(0);
       })
   });

   describe("given an array of numbers", () => {
       it("returns the max number", () => {
           expect(max_number([1,2,3])).toEqual(3);
       })
   })
});
