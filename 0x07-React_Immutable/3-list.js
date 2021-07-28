import immutable from 'immutable';

export function getListObject(array) {
  return immutable.List(array);
}

export function addElementToList(list, element) {
  return list.push(element);
}
