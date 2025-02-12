up:
	docker compose up -d

down:
	docker compose down

status:
	docker compose ps --format "table {{.Name}}\t{{.Status}}\t{{.Ports}}"

shell:
	docker compose exec node bash

backend:
	docker compose exec node bash -c "cd _Backend && bash"

frontend:
	docker compose exec node bash -c "cd _Frontend && bash"

bot:
	docker compose exec node bash -c "cd _Bot && bash"
