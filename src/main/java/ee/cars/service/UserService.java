package ee.cars.service;

import ee.cars.model.Car;
import ee.cars.model.User;
import org.springframework.data.domain.Sort;

import java.util.List;

public interface UserService {
    List<User> findAll(String find, String sort);
    User findById(long id);
    List<Car> findCarsById(long id);
}
