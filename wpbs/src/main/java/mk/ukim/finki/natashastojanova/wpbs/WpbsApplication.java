package mk.ukim.finki.natashastojanova.wpbs;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;


import java.util.logging.Logger;

@SpringBootApplication
public class WpbsApplication {

    @Bean
    public Logger Logger() {
        return Logger.getLogger(WpbsApplication.class.getName());
    }


    public static void main(String[] args) {
        SpringApplication.run(WpbsApplication.class, args);
    }

}
