import { addFighterAction } from "../store/actions/actionCreators";

describe("Given a addFighterAction function", () => {
  describe("When called with an array", () => {
    test('Then it should return an object with type: "load-fighters" and the array.', () => {
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
