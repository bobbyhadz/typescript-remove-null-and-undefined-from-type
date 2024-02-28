export {};

// EXAMPLE 1 - Remove Null and Undefined from a Type in TypeScript

type Salary = null | undefined | number;

// 👇️ type T0 = number
type T0 = NonNullable<Salary>;

// ---------------------------------------------------

// // EXAMPLE 2 - Using the `NonNullable` type recursively

// type WithoutNullableKeys<Type> = {
//   [Key in keyof Type]-?: WithoutNullableKeys<NonNullable<Type[Key]>>;
// };

// type Employee = {
//   name?: string | null;
//   country?: string | null;
//   salary?: number | null;
// };

// // 👇️ type T1 = {
// //     name: string;
// //     country: string;
// //     salary: number;
// //    }
// type T1 = WithoutNullableKeys<Employee>;
