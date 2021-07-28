import immutable from 'immutable';

export default function accessImmutableObject(object, array) {
  const deepData = immutable.fromJS(object);
  return deepData.getIn(array, undefined);
}
