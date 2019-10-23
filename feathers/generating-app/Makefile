.PHONY: all
all: docker

.PHONY: docker
docker:
	docker build -t react .
	docker run --rm -it -p 3000:3030 -v $(PWD):/app  -u $(shell id -u ${USER}):$(shell id -g ${USER}) react
