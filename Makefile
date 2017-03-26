SHELL := /bin/bash
PATH := ./node_modules/.bin:$(PATH)

dev-server:
	webpack-dev-server --hot

ts-check:
	tsc -p . -w --noEmit --pretty

tcm:
	tcm src/

tcm-watch:
	tcm -w src/

start: tcm
	concurrently --raw 'make dev-server' 'make ts-check' 'make tcm-watch'

clean:
	rm -rf index.html assets/
	rm -rf src/**/*.css.d.ts

build: clean tcm
	NODE_ENV=production webpack -p

.PHONY: dev-server ts-check tcm tcm-watch start build
