dev:
	SERVER_NAME=www.prueba.local \
	APP_SECRET=secret \
	POSTGRES_PASSWORD=secret \
	POSTGRES_USER=api-platform \
	POSTGRES_DB=api \
	POSTGRES_VERSION=14 \
	CADDY_MERCURE_JWT_SECRET=PVJJnvxyUXlDbIW6K1P9JmEaFqWv+UP77jNJjFzuPH4 \
	docker-compose  up -d

prod:
	echo "para levantar la aplicación en producción, ejecutar este comando directamente en una terminal"

	SERVER_NAME=prueba.local \
	APP_SECRET=secret \
	POSTGRES_PASSWORD=secret \
	POSTGRES_USER=api-platform \
	POSTGRES_DB=api \
	POSTGRES_VERSION=14 \
	CADDY_MERCURE_JWT_SECRET=PVJJnvxyUXlDbIW6K1P9JmEaFqWv+UP77jNJjFzuPH4 \
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d

down:
	docker-compose  down --remove-orphans

restart:
	make down && make dev

build:
	SERVER_NAME=prueba.local \
	APP_SECRET=secret \
	POSTGRES_PASSWORD=secret \
	POSTGRES_USER=api-platform \
	POSTGRES_DB=api \
	POSTGRES_VERSION=14 \
	CADDY_MERCURE_JWT_SECRET=api-platform \
	docker-compose  build

blueprint:
	(cd api; ../../blueprint/bin/entrypoint && php-cs-fixer fix src)

qa:
	(cd api; bin/qa src)

tests:
	docker-compose exec -T php bin/phpunit --no-coverage

coverage:
	docker-compose exec -T php bin/phpunit
