const analyseArray = (array) => {
  const object = {
    average: 0,
    min: 0,
    max: 0,
    length: 0,
  };

  object.average =
    array.reduce((acc, current) => acc + current, 0) / array.length;

  const minMaxSorted = array.sort((a, b) => a - b);
  object.min = minMaxSorted[0];
  object.max = minMaxSorted[array.length - 1];

  object.length = array.length;

  return object;
};

export default analyseArray;
