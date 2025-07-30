import { foo } from "./example";

describe("foo", () => {
  it("outputs \"bar\"", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();
    foo();
    expect(consoleSpy).toHaveBeenCalledWith("bar");
    consoleSpy.mockRestore();
  });
});
