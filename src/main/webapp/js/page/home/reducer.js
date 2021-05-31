import {
    ACTION_ERROR_CAR,
    ACTION_ERROR_CARS,
    ACTION_ERROR_USER,
    ACTION_ERROR_USER_CARS,
    ACTION_ERROR_USERS,
    ACTION_FIND_CAR,
    ACTION_FIND_CARS,
    ACTION_FIND_USER,
    ACTION_FIND_USER_CARS,
    ACTION_FIND_USERS,
    ACTION_SET_ID,
    ACTION_SET_FIND,
    ACTION_SET_MAKE,
    ACTION_SET_MODEL,
    ACTION_SET_NUMBER_PLATE,
    ACTION_SET_SORT,
    ERROR
} from '../../common/constants';

const initialState = {
    car: undefined,
    cars: [],
    error: {
        car: undefined,
        cars: undefined,
        user: {
            id: undefined,
            cars: undefined
        },
        users: undefined
    },
    find: undefined,
    id: {
        car: undefined,
        cars: undefined,
        user: undefined
    },
    make: undefined,
    model: undefined,
    numberPlate: undefined,
    sort: {
        car: undefined,
        user: undefined
    },
    user: undefined,
    userCars: [],
    users: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_SET_MAKE:
        return { ...state, make: action.make };
    case ACTION_SET_MODEL:
        return { ...state, model: action.model };
    case ACTION_SET_NUMBER_PLATE:
        return { ...state, numberPlate: action.numberPlate };
    case ACTION_FIND_CAR:
        return { ...state, car: action.data };
    case ACTION_SET_SORT:
        return { ...state, sort: { [action.key]: action.sort } };
    case ACTION_FIND_USERS:
        return { ...state, users: action.data };
    case ACTION_ERROR_USERS:
        return { ...state, error: { ...state.error, users: ERROR } };
    case ACTION_SET_ID:
        return { ...state, id: { [action.key]: action.id } };
    case ACTION_SET_FIND:
        return { ...state, find: action.find };
    case ACTION_ERROR_CAR:
        return { ...state, error: { ...state.error, car: ERROR } };
    case ACTION_ERROR_CARS:
        return { ...state, error: { ...state.error, cars: ERROR } };
    case ACTION_ERROR_USER:
        return { ...state, error: { ...state.error, user: { ...state.error.user, id: ERROR } } };
    case ACTION_ERROR_USER_CARS:
        return { ...state, error: { ...state.error, user: { ...state.error.user, cars: ERROR } } };
    case ACTION_FIND_USER_CARS:
        return { ...state, userCars: action.data };
    case ACTION_FIND_USER:
        return { ...state, user: action.data };
    case ACTION_FIND_CARS:
        return { ...state, cars: action.data };
    default:
        return state;
  }
};