FROM php:7-apache-stretch
COPY php.ini /usr/local/etc/php/
RUN docker-php-ext-install pdo_mysql mysqli
RUN a2enmod rewrite
