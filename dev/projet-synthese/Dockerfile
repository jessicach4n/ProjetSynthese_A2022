FROM php:8.0-apache
WORKDIR /var/www/html

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
    libicu-dev \
    zlib1g-dev \
    libpq-dev \
    libzip-dev \
    libpcre3-dev \
    vim zip \
    && docker-php-ext-install \
    pdo \
    pdo_pgsql \
    zip

COPY src/api/ ./
COPY build/ ./

RUN a2enmod rewrite
COPY apache/site.conf /etc/apache2/sites-available/000-default.conf
EXPOSE 80