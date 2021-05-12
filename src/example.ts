// Primitive types

function concat(base: string, addition: string): string {
  return base + addition;
}

concat('Hello', 'world');

// Interfaces

type strOrNum = string | number;

interface WithData {
  [key: string]: string | strOrNum[];
}
interface MyHomeTask {
  howIDoIt: string;
  simeArray: strOrNum[];
  withData: WithData[];
}

const myHometask: MyHomeTask = {
  howIDoIt: 'I Do It Wel',
  simeArray: ['string one', 'string two', 42],
  withData: [{ howIDoIt: 'I Do It Wel', simeArray: ['string one', 23] }],
};

myHometask.howIDoIt = 'eslint rygalsya ochen';

// Function types using Generic

interface MyArray<T> {
  [N: number]: T;

  reduce<U>(cb: (el: T, cur: number, index?: number, acc?: U) => U): U;
}

const myArray: MyArray<number> = [1, 2, 3];

myArray.reduce((acc: number, cur: number) => acc + cur, 0);
