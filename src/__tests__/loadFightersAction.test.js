import { loadFightersAction } from "../store/actions/actionCreators";

describe("Given a loadFighterAction function", () => {
  describe("When called with an array", () => {
    test('Then it should return an object with type: "load-fighters" and the array.', () => {
      const starFighters = [1, 2, 3];
      const expectedAction = {
        type: "load-fighters",
        starFighters,
      };
      const action = loadFightersAction(starFighters);
      expect(action).toEqual(expectedAction);
    });
  });
});
