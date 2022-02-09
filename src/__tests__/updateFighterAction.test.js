import { updateFighterAction } from "../store/actions/actionCreators";

describe("Given an updateFighterAction function", () => {
  describe("When called with a fighter", () => {
    test('Then it should return an object with type: "update-fighters" and the fighter.', () => {
      const fighter = { name: "Skywalker", age: 25, lightsaber: "green" };
      const expectedAction = {
        type: "update-fighter",
        fighter,
      };
      const action = updateFighterAction(fighter);
      expect(action).toEqual(expectedAction);
    });
  });
});
