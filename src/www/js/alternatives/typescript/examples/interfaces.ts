// <<: interface
interface HasName {
  firstName: string;
  lastName: string;
}

function fullName(x: HasName): string {
  return `${x.firstName} ${x.lastName}`;
}
// :>>

let p = {firstName: "Juan", lastName: "Jacob"};
console.assert(fullName(p) === "Juan Jacob");
