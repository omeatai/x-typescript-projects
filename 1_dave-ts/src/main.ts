// Type Aliases

type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];
type stringOrNumberArray2 = Array<string | number>;

type Guitarist = {
  name?: string;
  active: boolean;
  albums: stringOrNumberArray;
};
