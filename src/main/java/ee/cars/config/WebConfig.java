package ee.cars.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.header.writers.StaticHeadersWriter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Collections;

import static ee.cars.common.Constants.HEADER_ACCESS_CONTROL_ALLOW_ORIGIN;
import static ee.cars.common.Constants.SYMBOL_ASTERISK;

@Configuration
@EnableWebSecurity
public class WebConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors().and().csrf().disable().headers().addHeaderWriter(
                new StaticHeadersWriter(HEADER_ACCESS_CONTROL_ALLOW_ORIGIN, SYMBOL_ASTERISK)
        );
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Collections.singletonList(SYMBOL_ASTERISK));
        configuration.setAllowedMethods(Collections.singletonList(SYMBOL_ASTERISK));
        configuration.setAllowedHeaders(Collections.singletonList(SYMBOL_ASTERISK));
        configuration.setAllowCredentials(false);
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}
