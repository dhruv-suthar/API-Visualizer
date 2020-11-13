"use strict";

export const keyify = (obj, prefix = "res.") =>
  Object.keys(obj).reduce((res, el) => {
    if (Array.isArray(obj[el]) && obj[el] !== null) {
      const reg = /[^0-9]/g;
      if (el.match(reg)) {
        return [...res, ...keyify(obj[el], prefix + el + "[]")];
      } else {
        return [...res, ...keyify(obj[el], prefix + "[]")];
      }
    } else if (typeof obj[el] === "object" && obj[el] !== null) {
      const reg = /[^0-9]/g;

      if (el.match(reg)) {
        return [...res, ...keyify(obj[el], prefix + el + ".")];
      } else {
        return [...res, ...keyify(obj[el], prefix + ".")];
      }
    }

    return [...res, prefix + el];
  }, []);

export function filter_keys(output) {
  const final_filterkeys = output =>
    output.filter((v, i) => output.indexOf(v) === i);
  return final_filterkeys(output);
}

export function ex_key_name(data) {
  var extracted_keys = [];
  for (let i = 0; i < data.length; i++) {
    let indices_of_dot = [];

    for (let j = 0; j < data[i].length; j++) {
      if (data[i][j] === ".") {
        indices_of_dot.push(j);
      }
    }

    if (indices_of_dot.length >= 2) {
      var id = indices_of_dot[indices_of_dot.length - 1];

      if (data[i].indexOf("]") == id - 1) {
        extracted_keys.push(
          data[i].substring(
            indices_of_dot[indices_of_dot.length - 1] + 1,
            data[i].length
          )
        );
      } else {
        extracted_keys.push({
          parent: data[i].substring(
            indices_of_dot[indices_of_dot.length - 2] + 1,
            indices_of_dot[indices_of_dot.length - 1]
          ),
          child: data[i].substring(
            indices_of_dot[indices_of_dot.length - 1] + 1,
            data[i].length
          )
        });
      }
    } else {
      extracted_keys.push(
        data[i].substring(
          indices_of_dot[indices_of_dot.length - 1] + 1,
          data[i].length
        )
      );
    }
  }

  return extracted_keys;
}

export function findAllByKey(obj, keyToFind, parent_key = "res") {
  if (typeof keyToFind == "object") {
    return (
      Object.entries(obj).reduce(
        (acc, [key, value]) =>
          key === keyToFind.child && parent_key === keyToFind.parent
            ? acc.concat(value === null ? 0 : value)
            : typeof value === "object" && value
            ? acc.concat(findAllByKey(value, keyToFind, key))
            : acc,
        []
      ) || []
    );
  } else {
    return (
      Object.entries(obj).reduce(
        (acc, [key, value]) =>
          key === keyToFind
            ? acc.concat(value === null ? 0 : value)
            : typeof value === "object" && value
            ? acc.concat(findAllByKey(value, keyToFind))
            : acc,
        []
      ) || []
    );
  }
}
