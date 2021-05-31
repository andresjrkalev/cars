package ee.cars.controller;

import ee.cars.model.Car;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.platform.runner.JUnitPlatform;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertTrue;

@ExtendWith(MockitoExtension.class)
@RunWith(JUnitPlatform.class)
public class CarControllerTest {

    @Mock
    CarController carController;

    @Test
    public void should_findAll() {
        List<Car> cars = carController.findAll(null, null, null, null);
        assertTrue(cars.isEmpty());
    }
}
