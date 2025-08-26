// 1.
function identity(arg: unknown) {
  return arg;
}

const arg = identity("str");

// 2.
interface User {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
}

/* 1. Создай тип UserUpdate, который позволяет обновлять только часть полей пользователя
   (то есть ни одно поле не должно быть обязательным) */
type UserUpdate = unknown;

/* 2. Создай тип PublicUser, который содержит только id и name,
   чтобы отдавать клиенту */
type PublicUser = unknown;

/* 3. Создай функцию makeReadonly, которая принимает объект типа User и делает его только
  для чтения */

function makeReadonly(user: unknown): unknown {
  return user;
}

/* 4. Создай тип UserRecords, который представляет словарь пользователей по id,
   где ключ — id, а значение — User */
type UserRecords = unknown;

// 3.
const nums = [1, 2, null, undefined, 5];
const strings = ["str", "jkjk", null, undefined, "mjki"];

const filteredNumbers = nums.filter((n) => {
  if (n !== null && n !== undefined) {
    return true;
  }

  return false;
});

const filteredStrings = strings.filter((s) => {
  if (s !== null && s !== undefined) {
    return true;
  }

  return false;
});

// 4.

type UserEmailOnly = Pick<User, "email">;

type MyPick = unknown;

// 5. Свой ReturnType

function getUser() {
  return { id: 1, name: "Alice" };
}

function sum(a: number, b: number) {
  return a + b;
}

/* Твоя задача:
   1. Создай свой generic тип MyReturnType<T>, который извлекает тип возвращаемого значения функции T
   2. Используй MyReturnType, чтобы получить типы возвращаемых значений для getUser и sum
   3. Присвой эти типы переменным userType и sumType

 Пример использования твоего типа:

 type UserType = MyReturnType<typeof getUser>;
 ожидается { id: number; name: string }

 type SumType = MyReturnType<typeof sum>;
 ожидается number
 */

type MyReturnType = unknown;
