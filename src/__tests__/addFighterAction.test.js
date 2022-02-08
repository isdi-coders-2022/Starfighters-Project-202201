import { addFighterAction } from "../store/actions/actionCreators";

describe("Given a addFighterAction function", () => {
  describe("When called with a fighter", () => {
    test('Then it should return an object with type: "add-fighters" and the fighter.', () => {
      const fighter = { name: "Skywalker", age: 25, lightsaber: "green" };
      const expectedAction = {
        type: "add-fighter",
        fighter,
      };
      const action = addFighterAction(fighter);
      expect(action).toEqual(expectedAction);
    });
  });
});
