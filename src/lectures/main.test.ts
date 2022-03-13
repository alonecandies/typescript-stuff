import { isPositive } from "./main";

describe("isPositive", () => {
   it("should return true if number is positive", () => {
      expect(isPositive(1)).toBe(true);
      expect(isPositive(2)).toBe(true);
      expect(isPositive(3)).toBe(true);
   });
   
   it("should return false if number is negative", () => {
      expect(isPositive(-1)).toBe(false);
      expect(isPositive(-2)).toBe(false);
      expect(isPositive(-3)).toBe(false);
   });
   
   it("should return false if number is 0", () => {
      expect(isPositive(0)).toBe(false);
   });
})