import immutable from 'immutable';

export const map = immutable.Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
});

export const map2 = map.withMutations((item) => {
  item.set(2, 'Benjamin').set(4, 'Oliver');
});
