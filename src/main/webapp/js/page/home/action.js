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
    ACTION_GET_USERS,
    KEY_MAKE,
    KEY_NAME,
    ACTION_SET_FIND,
    ACTION_SET_ID,
    ACTION_SET_MAKE,
    ACTION_SET_MODEL,
    ACTION_SET_NUMBER_PLATE,
    ACTION_SET_SORT,
    API_PATH_CARS,
    API_PATH_CAR_V1,
    API_PATH_USER_V1,
    SYMBOL_SLASH
} from '../../common/constants';
import httpClient from '../../common/httpClient';

export const setFind = find => ({
    type: ACTION_SET_FIND,
    find
});

export const setSort = (key, sort) => ({
    type: ACTION_SET_SORT,
    key,
    sort
});

export const findUsers = (dispatch, find, sort) => {
    const params = { sort: `${KEY_NAME}${sort}` };
    if (find) params.find = find;
    httpClient
        .get(API_PATH_USER_V1, { params })
        .then(response => response && dispatch({ type: ACTION_FIND_USERS, data: response.data }))
        .catch(() => dispatch({ type: ACTION_ERROR_USERS }));
};

export const setId = (key, id) => ({
    type: ACTION_SET_ID,
    key,
    id
});

export const findUserById = (id, dispatch) =>
    httpClient
        .get(`${API_PATH_USER_V1}${SYMBOL_SLASH}${id}`)
        .then(response => response && dispatch({ type: ACTION_FIND_USER, data: response.data }))
        .catch(() => dispatch({ type: ACTION_ERROR_USER }));

export const findUserCars = (id, dispatch) =>
    httpClient
        .get(`${API_PATH_USER_V1}${SYMBOL_SLASH}${id}${API_PATH_CARS}`)
        .then(response => response && dispatch({ type: ACTION_FIND_USER_CARS, data: response.data }))
        .catch(() => dispatch({ type: ACTION_ERROR_USER_CARS }));

export const findCars = (dispatch, make, model, numberPlate, sort) => {
    const params = { sort: `${KEY_MAKE}${sort}` };
    if (make) params.make = make;
    if (model) params.model = model;
    if (numberPlate) params.numberPlate = numberPlate;
    httpClient
        .get(API_PATH_CAR_V1, { params })
        .then(response => response && dispatch({ type: ACTION_FIND_CARS, data: response.data }))
        .catch(() => dispatch({ type: ACTION_ERROR_CARS }));
};

export const setMake = make => ({
    type: ACTION_SET_MAKE,
    make
});

export const setModel = model => ({
    type: ACTION_SET_MODEL,
    model
});

export const setNumberPlate = numberPlate => ({
    type: ACTION_SET_NUMBER_PLATE,
    numberPlate
});

export const findCarById = (id, dispatch) =>
    httpClient
        .get(`${API_PATH_CAR_V1}${SYMBOL_SLASH}${id}`)
        .then(response => response && dispatch({ type: ACTION_FIND_CAR, data: response.data }))
        .catch(() => dispatch({ type: ACTION_ERROR_CAR }));