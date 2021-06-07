import reducer from '../../../store/reducers/currentPage';

describe('CurrentPage reducer', () => {
  const initialState = { data: [] };
  const page = 3;

  it('should return the initial state', () => {
    expect(reducer(undefined, [])).toEqual(initialState);
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