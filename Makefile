.PHONY: help dev build start lint test test-watch clean install coverage

help: ## Show this help message
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Targets:'
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

install: ## Install dependencies
	npm install

dev: ## Start the development server
	npm run dev

build: ## Build the application for production
	npm run build

start: ## Start the production server
	npm run start

lint: ## Run ESLint
	npm run lint

test: ## Run the test suite
	npm test

test-watch: ## Run tests in watch mode
	npm run test:watch

coverage: ## Run tests with coverage report
	npm run test:coverage

clean: ## Clean build artifacts
	rm -rf .next node_modules
