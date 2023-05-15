// let color: any;
// color = "green";
// color = false; // Type 'boolean' is not assignable to type 'string'

let status1: string | number; // Types as Sets
status1 = "OK";
status1 = 200;
// status1 = true;

//status = true; // Type 'boolean' is not assignable to type 'string | number'

type Status = string | number; // custom TYPE
let responseStatus: Status;
type Config = {
  name: string;
  x: number;
  ready?: boolean; // optional prop
};

export function getConfig(name: string): Config {
  return {
    name: name,
    x: 1,
    ready: false
  }; // Must return a value OR Property 'x' is missing
}
const conf: Config = getConfig("matei");
const config = getConfig("json"); // if getConfig has return type
