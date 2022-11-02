FROM php:8.0-apache

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
    postgresql-client libpq-dev \
    && docker-php-ext-install \
    pdo \
    pdo_pgsql


WORKDIR /var/www/html

COPY home.php index.php
COPY action action
COPY css css
COPY img ima
COPY js js
COPY partial partial
COPY *.php .

EXPOSE 80
