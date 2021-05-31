package ee.cars.controller;

import ee.cars.model.Car;
import ee.cars.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static ee.cars.common.Constants.API_PATH_CAR_V1;
import static ee.cars.common.Constants.API_PATH_ID;

@RestController
@RequestMapping(API_PATH_CAR_V1)
public class CarController {

    @Autowired
    CarService carService;

    @GetMapping
    public List<Car> findAll(
            @RequestParam(required = false) String make,
            @RequestParam(required = false) String model,
            @RequestParam(required = false) String numberPlate,
            @RequestParam(required = false) String sort) {
        return carService.findAll(make, model, numberPlate, sort);
    }

    @GetMapping(API_PATH_ID)
    public Car findById(@PathVariable long id) {
        return carService.findById(id);
    }
}
