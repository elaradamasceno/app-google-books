import reducer from '../../../store/reducers/currentPage';

describe('CurrentPage reducer', () => {
  const page = 3;

  it('should return the initial state', () => {
    expect(reducer(undefined, [])).toEqual([]);
  });

  it('should handle CURRENT_PAGE', () => {
    const stateBefore = [];
    const action = {
      type: 'CURRENT_PAGE',
      page
    };
    const stateAfter = {data: page};
    expect(reducer(stateBefore, action)).toEqual(stateAfter);
  })
})