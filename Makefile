.DEFAULT_GOAL := help

.PHONY: help install dev build preview test coverage lint lint-fix

help: ## Show available commands
	@echo ""
	@echo "Project commands:"
	@echo ""
	@awk 'BEGIN {FS = ":.*## "}; /^[a-zA-Z0-9_.-]+:.*## / {printf "  \033[36m%-12s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)
	@echo ""

install: ## Install dependencies
	npm install

dev: ## Run development server
	npm run dev

build: ## Build project for production
	npm run build

preview: ## Preview production build
	npm run preview

test: ## Run tests in watch mode
	npm run test

coverage: ## Run tests with coverage
	npm run test:coverage

lint: ## Lint source files
	npm run lint

lint-fix: ## Lint and auto-fix issues
	npm run lint:fix
