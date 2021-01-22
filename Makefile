commit:
	rm -r test/__snapshots__
	git add .
	git commit -m "$m"

push:
	git push

install:
	npm install

dev:
	npm run dev

test:
	npm test

test-update:
	npm test -u

build:install
	npm run generate