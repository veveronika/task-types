type Gender = 'male' | 'female';

interface Person {
  name: string;
  age: number;
  gender: Gender;
}

interface Employee extends Person {
  company: string;
}

export function getPersons(): Person[];

export function personToString(person: Person | Employee): string;