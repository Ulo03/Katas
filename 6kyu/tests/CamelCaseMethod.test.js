require('../CamelCaseMethod');

test('TestCases 1', () => {
    expect("test case".camelCase()).toBe("TestCase");
    expect("camel case method".camelCase()).toBe("CamelCaseMethod");
    expect("say hello ".camelCase()).toBe("SayHello");
    expect(" camel case word".camelCase()).toBe("CamelCaseWord");
    expect("".camelCase()).toBe("");
});