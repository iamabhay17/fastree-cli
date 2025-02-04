export var Naming;
(function (Naming) {
    Naming["Uppercase"] = "UPPERCASE";
    Naming["Lowercase"] = "LOWERCASE";
    Naming["Capitalized"] = "CAPITALIZED";
    Naming["KebabCase"] = "KEBAB_CASE";
    Naming["SnakeCase"] = "SNAKE_CASE";
    Naming["PascalCase"] = "PASCAL_CASE";
    Naming["CamelCase"] = "CAMEL_CASE";
})(Naming || (Naming = {}));
export const NAMING_STYLES = [
    {
        label: "UPPERCASE",
        value: Naming.Uppercase,
    },
    {
        label: "lowercase",
        value: Naming.Lowercase,
    },
    {
        label: "Capitalized",
        value: Naming.Capitalized,
    },
    {
        label: "kebab-case",
        value: Naming.KebabCase,
    },
    {
        label: "snake_case",
        value: Naming.SnakeCase,
    },
    {
        label: "PascalCase",
        value: Naming.PascalCase,
    },
    {
        label: "camelCase",
        value: Naming.CamelCase,
    },
];
