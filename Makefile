commit:
	git add .
	git commit -m "$m"
	git push
build:
	npm install
	npm run generate
docker: build
	docker-compose up -d
dev:
	npm run dev