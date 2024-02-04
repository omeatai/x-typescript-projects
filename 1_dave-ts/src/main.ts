// Never Type
const infinite = (): void => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break;
  }
};

const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (isNumber(value)) return "number";
  return createError("This should never happen!");
};
