const { getSexagenaryYear } = require("../src/index");

describe("getSexagenaryYear", () => {
  test("AD year examples", () => {
    expect(getSexagenaryYear(1984, "han")).toBe("甲子");
    expect(getSexagenaryYear(1984, "kr")).toBe("갑자");
    expect(getSexagenaryYear(1984, "vn")).toBe("Giáp Tý");

    expect(getSexagenaryYear(2025, "han")).toBe("乙巳");
    expect(getSexagenaryYear(2025, "kr")).toBe("을사");
    expect(getSexagenaryYear(2025, "vn")).toBe("Ất Tỵ");
  });

  test("BC year examples (no year 0 rule)", () => {
    // BC 1 == -1
    expect(typeof getSexagenaryYear(-1, "han")).toBe("string");
    // year 0 should throw
    expect(() => getSexagenaryYear(0, "kr")).toThrow();
  });

  test("invalid year input", () => {
    expect(() => getSexagenaryYear(1984.5, "han")).toThrow(TypeError);
    expect(() => getSexagenaryYear(NaN, "han")).toThrow(TypeError);
  });

  test("invalid locale", () => {
    expect(() => getSexagenaryYear(1984, "xx")).toThrow(/Invalid locale/i);
  });
});
