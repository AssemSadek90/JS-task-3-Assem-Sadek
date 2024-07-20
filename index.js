// First task
const array1 = [
  8,
  "55",
  [2, "Hello World", { a: 2, b: 5 }, false],
  {
    arr: [true, 1, NaN, new Array(2, 33)],
    test: null,
    obj: { d: "Moha", last: [2, false, undefined] },
  },
];

const deStructure = (array) => {
  const [
    ,
    ,
    ,
    {
      arr: [, , , [, firstReq]],
      obj: { d: secondReq },
    },
  ] = array;
  return [firstReq, secondReq];
};
// Second task
const array2 = [
  2,
  4,
  [22, "test"],
  false,
  null,
  { a: 2 },
  [22, "test"],
  "null",
];

const searchDuplicates = (array) => {
  const map = new Map();
  for (const element of array) {
    const stringifiedElement = JSON.stringify(element);
    if (map.has(stringifiedElement)) {
      return true;
    }
    map.set(stringifiedElement, true);
  }
  return false;
};

outputTask1 = deStructure(array1);

outputTask2 = searchDuplicates(array2);

const firstTask = document.createElement("p");
const secondTask = document.createElement("p");

firstTask.innerHTML = `First Task: [${outputTask1.join(", ")}]`;
secondTask.innerHTML = `Second Task: ${outputTask2}`;

const resultsDiv = document.getElementById("results");
resultsDiv.appendChild(firstTask);
resultsDiv.appendChild(secondTask);
