FROM php:7-fpm-alpine

WORKDIR /srv

RUN apk add --update bash freetype-dev libjpeg-turbo-dev libmcrypt-dev libpng-dev icu-dev
RUN pecl install intl && docker-php-ext-install intl mcrypt mbstring && rm -r /tmp/pear
RUN docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ && docker-php-ext-install gd

RUN set -ex \
  && apk --no-cache add \
    postgresql-dev
RUN docker-php-ext-install pdo_pgsql pgsql

RUN curl -sS https://getcomposer.org/installer | php -- /tmp/composer-setup.php --no-ansi --install-dir=/usr/local/bin --filename=composer

EXPOSE 9000

