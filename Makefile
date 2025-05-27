.PHONY: format compile dev test

format:
	@npx prettier lib --write

compile:
	@npx tsc && npx tsc-alias

dev:
	@trap 'npx pm2 delete boyholic-badminton-api' SIGINT; npx pm2 start --no-daemon

test:
	@npx jest --forceExit --detectOpenHandles --passWithNoTests