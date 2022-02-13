import actionTypes from "../store/actions/actionTypes";
import statusReducer from "../store/reducers/statusReducer";

describe("Given a starReducer function", () => {
  describe("When called with a setLoadingAction", () => {
    test("Then it should set loading to true", () => {
      const apiStatus = { error: false, loading: false };
      const expectedStatus = { error: false, loading: true };
      const action = {
        type: actionTypes.setLoading,
      };

      const status = statusReducer(apiStatus, action);

      expect(status).toEqual(expectedStatus);
    });
  });

  describe("When called with an unsetLoadingAction", () => {
    test("Then it should set loading to false", () => {
      const apiStatus = { error: false, loading: true };
      const expectedStatus = { error: false, loading: false };
      const action = {
        type: actionTypes.unsetLoading,
      };

      const status = statusReducer(apiStatus, action);

      expect(status).toEqual(expectedStatus);
    });
  });

  describe("When called with a setErrorAction", () => {
    test("Then it should set error to true", () => {
      const apiStatus = { error: false, loading: false };
      const expectedStatus = { error: true, loading: false };
      const action = {
        type: actionTypes.setError,
      };

      const status = statusReducer(apiStatus, action);

      expect(status).toEqual(expectedStatus);
    });
  });

  describe("When called with a unsetErrorAction", () => {
    test("Then it should set error to false", () => {
      const apiStatus = { error: true, loading: false };
      const expectedStatus = { error: false, loading: false };
      const action = {
        type: actionTypes.unsetError,
      };

      const status = statusReducer(apiStatus, action);

      expect(status).toEqual(expectedStatus);
    });
  });

  describe("When called with a wrong action type", () => {
    test("Then it should return de status as it was", () => {
      const apiStatus = { error: false, loading: false };
      const expectedStatus = { error: false, loading: false };
      const action = {
        type: "wrong type",
      };

      const status = statusReducer(apiStatus, action);

      expect(status).toEqual(expectedStatus);
    });
  });
});
