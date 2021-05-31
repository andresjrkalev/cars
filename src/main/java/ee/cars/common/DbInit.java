package ee.cars.common;

import ee.cars.model.Car;
import ee.cars.model.User;
import ee.cars.repository.CarRepository;
import ee.cars.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Component
public class DbInit {

    private static CarRepository carRepository;
    private static UserRepository userRepository;

    @Autowired
    public void setCarRepository(CarRepository carRepository) {
        DbInit.carRepository = carRepository;
    }

    @Autowired
    public void setUserRepository(UserRepository userRepository) {
        DbInit.userRepository = userRepository;
    }

    public static void run() {
        List<Car> cars = Arrays.asList(
            createCar("Lada", "2101", "123ASD"),
            createCar("Kia", "Sorento", "534TTT")
        );
        createUser("Teet Järveküla", cars);

        cars = Arrays.asList(
            createCar("Skoda", "Octavia", "999GLF"),
            createCar("Kia", "Sorento", "555TFF")
        );
        createUser("Pille Purk", cars);

        cars = Arrays.asList(
            createCar("Skoda", "Octavia", "445KKK"),
            createCar("Audi", "A6", "997HHH")
        );
        createUser("Mati Kaal", cars);

        cars = Arrays.asList(
            createCar("BMW", "760", "444RRR"),
            createCar("Audi", "A6", "876OUI")
        );
        createUser("Külli Kukk", cars);

        cars = Collections.singletonList(
            createCar("BMW", "760", "112YUI")
        );
        createUser("Teet Kruus", cars);
    }

    private static void createUser(String name, List<Car> cars) {
        User user = User.builder().name(name).cars(cars).build();
        userRepository.save(user);
    }

    private static Car createCar(String make, String model, String numberPlate) {
        Car car = Car.builder().make(make).model(model).numberplate(numberPlate).build();
        return carRepository.save(car);
    }
}
