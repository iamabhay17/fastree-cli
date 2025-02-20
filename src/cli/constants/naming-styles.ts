export enum Naming {
  Uppercase = "UPPERCASE",
  Lowercase = "LOWERCASE",
  Capitalized = "CAPITALIZED",
  KebabCase = "KEBAB_CASE",
  SnakeCase = "SNAKE_CASE",
  PascalCase = "PASCAL_CASE",
  CamelCase = "CAMEL_CASE",
}

export const NAMING_STYLES = [
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
