// function getFirstElement(array: any[]) {} - bad code

// add a Generic <ElementType>
function getFirstElement<ElementType>(array: ElementType[]) {
  return array[0];
}

const numbers = [1, 2, 3, 4, 5];
// => function getFirstElement<number>(array: number[]): number
const firstNum = getFirstElement(numbers);

const strings = ["1", "2", "3", "4", "5"];
// => function getFirstElement<string>(array: string[]): string
const firstStr = getFirstElement(strings);

console.log(firstNum);
console.log(firstStr);

////////////////////////////////////////////////////////////////////

// => const input: Element | null
const input2 = document.querySelector(".input");

console.log(input2);
// console.log(input2?.value);
// receive 2 errors - 'input' is possibly 'null'

// to fix - add generic => input: HTMLInputElement | null
const input = document.querySelector<HTMLInputElement>(".input");
console.log(input?.value);

////////////////////////////////////////////////////////////////////

const map = new Map<string, number>();
// => set(key: string, value: number): Map<string, number>
map.set("first", 5);

const newMap = new Map<string, Map<string, number>>();
// newMap.set("second", new Map([["key", 5]]));

// or
const defaultMapValue = {
  key: 5,
};
newMap.set("second", new Map(Object.entries(defaultMapValue)));

// const a = {
//   second: {
//     key: 5,
//   },
// };

////////////////////////////////////////////////////////////////////

type ApiResponse<Data> = {
  data: Data;
  isError: boolean;
};

type UserResponse = ApiResponse<{ name: string; age: number }>;
type BlogResponse = ApiResponse<{ title: string }>;
type StatusResponse = ApiResponse<{ status: number }>;

const response: UserResponse = {
  data: {
    name: "Nick",
    age: 30,
  },
  isError: false,
};

const response2: BlogResponse = {
  data: {
    title: "Nick",
  },
  isError: false,
};

const response3: StatusResponse = {
  data: {
    status: 200,
  },
  isError: false,
};

console.log(response, response2, response3);

////////////////////////////////////////////////////////////////////
// type ApiNewResponse<Data extends object = { status: number }> = {} - adding default value

type ApiNewResponse<Data extends object> = {
  data: Data;
  isError: boolean;
};

const newResponse: ApiNewResponse<{ name: string }> = {
  data: {
    name: "Mimi",
  },
  isError: false,
};

console.log(newResponse);
