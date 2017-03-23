SHELL := /bin/bash
PATH := ./node_modules/.bin:$(PATH)

dev-server:
	webpack-dev-server --hot

ts-check:
	tsc -p . -w --noEmit --pretty

tcm:
	tcm -w src/

start:
	concurrently --raw 'make dev-server' 'make ts-check' 'make tcm'

.PHONY: dev-server ts-check tcm start
