SHELL := /bin/bash
PATH := ./node_modules/.bin:$(PATH)

dev-server:
	webpack-dev-server --hot
.PHONY: dev-server

ts-check:
	tsc -p . -w --noEmit --pretty
.PHONY: ts-check

tcm:
	tcm src/
.PHONY: tcm

tcm-watch:
	tcm -w src/
.PHONY: tcm-watch

start: tcm
	concurrently --raw 'make dev-server' 'make ts-check' 'make tcm-watch'
.PHONY: start

clean:
	rm -rf index.html assets/
	rm -rf src/**/*.css.d.ts
.PHONY: clean

build: clean tcm
	NODE_ENV=production webpack -p
.PHONY: build
