import Home from './Home';
import { connect } from 'react-redux';
import {
    findCarById,
    findCars,
    findUserById,
    findUserCars,
    findUsers,
    setFind,
    setId,
    setMake,
    setModel,
    setNumberPlate,
    setSort
} from './action';

const mapStateToProps = state => ({
    car: state.home.car,
    cars: state.home.cars,
    error: state.home.error,
    find: state.home.find,
    id: state.home.id,
    make: state.home.make,
    model: state.home.model,
    numberPlate: state.home.numberPlate,
    sort: state.home.sort,
    user: state.home.user,
    userCars: state.home.userCars,
    users: state.home.users
});

const mapDispatchToProps = dispatch => ({
    findCar: id => findCarById(id, dispatch),
    findCars: (make, model, numberPlate, sort) => findCars(dispatch, make, model, numberPlate, sort),
    findUser: id => findUserById(id, dispatch),
    findUserCars: id => findUserCars(id, dispatch),
    findUsers: (find, sort) => findUsers(dispatch, find, sort),
    setFind: find => dispatch(setFind(find)),
    setId: (key, id) => dispatch(setId(key, id)),
    setMake: make => dispatch(setMake(make)),
    setModel: model => dispatch(setModel(model)),
    setNumberPlate: numberPlate => dispatch(setNumberPlate(numberPlate)),
    setSort: (key, sort) => dispatch(setSort(key, sort))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);