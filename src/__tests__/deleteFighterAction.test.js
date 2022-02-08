import { deleteFighterAction } from "../store/actions/actionCreators";

describe("Given a deleteFighterAction function", () => {
  describe("When called with an id of 3", () => {
    test('Then it should return an object with type: "delete-fighters" and the id: 3.', () => {
      const id = 3;
      const expectedAction = {
        type: "delete-fighter",
        id,
      };
      const action = deleteFighterAction(id);
      expect(action).toEqual(expectedAction);
    });
  });
});
