package com.steckinc

import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.module.kotlin.KotlinModule
import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.EnableAutoConfiguration
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.context.annotation.Primary
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter


@Configuration
@EnableAutoConfiguration
@SpringBootApplication
class App : WebMvcConfigurerAdapter() {
    override fun addResourceHandlers(registry: ResourceHandlerRegistry) {
        registry.addResourceHandler("/resources/**")
                .addResourceLocations("classpath:/resources/")
    }

    @Bean
    @Primary
    fun objectMapper() = ObjectMapper().registerModule(KotlinModule())!!
}

fun main(args: Array<String>) {
    SpringApplication.run(App::class.java, *args)
}