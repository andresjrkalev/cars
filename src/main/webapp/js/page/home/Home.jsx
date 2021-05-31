import React, { Component } from 'react';
import Card from '../../component/Card';
import Input from '../../component/Input';
import Label from '../../component/Label';
import Row from '../../component/Row';
import Sort from '../../component/Sort';
import {
    API_PATH_CARS,
    API_PATH_CAR_V1,
    API_PATH_USER_V1,
    KEY_CAR,
    KEY_CARS,
    KEY_USER,
    LABEL_CARS,
    LABEL_ID,
    LABEL_MARK,
    LABEL_MODEL,
    LABEL_NAME,
    LABEL_NUMBER_PLATE,
    LABEL_USERS,
    LABEL_USERS_WITH_CARS,
    PARAM_ID,
    STRING_EMPTY,
    TEXT_SIZE_18
} from '../../common/constants';

const Home = ({
    car,
    cars,
    error,
    find,
    id,
    make,
    model,
    numberPlate,
    sort,
    user,
    userCars,
    users,
    findCar,
    findCars,
    findUser,
    findUserCars,
    findUsers,
    setId,
    setFind,
    setMake,
    setModel,
    setNumberPlate,
    setSort
}) =>
    <>
        <Label text={LABEL_USERS_WITH_CARS} fontSize={TEXT_SIZE_18} />
        <Card
            header={API_PATH_USER_V1}
            execute={() => findUsers(find, sort.user)}
            response={error.users || users.length ? users : STRING_EMPTY}
        >
            <Row>
                <Label text={LABEL_NAME} />
                <Input value={find} onChange={value => setFind(value)} />
            </Row>
            <Row>
                <Sort value={sort.user} onChange={value => setSort(KEY_USER, value)} />
            </Row>
        </Card>
        <Card
            header={`${API_PATH_USER_V1}${PARAM_ID}`}
            execute={() => findUser(id.user)}
            response={error.user || user ? user : STRING_EMPTY}
        >
            <Row>
                <Label text={LABEL_ID} />
                <Input value={id.user} onChange={value => setId(KEY_USER, value)} />
            </Row>
        </Card>
        <Card
            header={`${API_PATH_USER_V1}${PARAM_ID}${API_PATH_CARS}`}
            execute={() => findUserCars(id.cars)}
            response={error.user.car || userCars.length ? userCars : STRING_EMPTY}
        >
            <Row>
                <Label text={LABEL_ID} />
                <Input value={id.cars} onChange={value => setId(KEY_CARS, value)} />
            </Row>
        </Card>
        <Card
            header={API_PATH_CAR_V1}
            execute={() => findCars(make, model, numberPlate, sort.car)}
            response={error.cars || cars.length ? cars : STRING_EMPTY}
        >
            <Row>
                <Label text={LABEL_MARK} />
                <Input value={make} onChange={value => setMake(value)} />
            </Row>
            <Row>
                <Label text={LABEL_MODEL} />
                <Input value={model} onChange={value => setModel(value)} />
            </Row>
            <Row>
                <Label text={LABEL_NUMBER_PLATE} />
                <Input value={numberPlate} onChange={value => setNumberPlate(value)} />
            </Row>
            <Row>
                <Sort value={sort.car} onChange={value => setSort(KEY_CAR, value)} />
            </Row>
        </Card>
        <Card
            header={`${API_PATH_CAR_V1}${PARAM_ID}`}
            execute={() => findCar(id.car)}
            response={error.car || car ? car : STRING_EMPTY}
        >
            <Row>
                <Label text={LABEL_ID} />
                <Input value={id.car} onChange={value => setId(KEY_CAR, value)} />
            </Row>
        </Card>
    </>;

export default Home;