package ee.cars.controller;

import ee.cars.model.Car;
import ee.cars.model.User;
import ee.cars.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static ee.cars.common.Constants.*;

@RestController
@RequestMapping(API_PATH_USER_V1)
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping
    public List<User> findAll(
            @RequestParam(required = false) String find,
            @RequestParam(required = false) String sort) {
        return userService.findAll(find, sort);
    }

    @GetMapping(API_PATH_ID)
    public User findById(@PathVariable String id) {
        return userService.findById(Long.parseLong(id));
    }

    @GetMapping(API_PATH_ID + API_PATH_CAR)
    public List<Car> findCarsById(@PathVariable String id) {
        return userService.findCarsById(Long.parseLong(id));
    }
}
