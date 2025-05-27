.PHONY: format compile dev test merge

format:
	@npx prettier lib --write

compile:
	@npx tsc && npx tsc-alias

dev:
	@trap 'npx pm2 delete boyholic-badminton-api' SIGINT; npx pm2 start --no-daemon

test:
	@npx jest --forceExit --detectOpenHandles --passWithNoTests

merge:
	@node src/main.js merge --inputs examples/inputs/users_to_be_merged_1.json examples/inputs/users_to_be_merged_2.json examples/inputs/users_to_be_merged_3.json --output examples/outputs/users_merged.json