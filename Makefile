# --- Configuration ---
APP_NAME := my-next-app
PORT     := 3000

# --- Commands ---

.PHONY: dev build start stop restart logs list delete deploy

# 1. Development (Run locally without PM2 for hot-reloading)
dev:
	npm run dev

# 2. Build the application (Required before starting production)
build:
	npm run build

# 3. Start Production Server with PM2
# Note: We pass the PORT variable to ensure Next.js listens on the right port
start:
	pm2 start npm --name "$(APP_NAME)" -- run start -- -p $(PORT)

# 4. Restart the PM2 process
restart:
	pm2 restart $(APP_NAME)

# 5. Stop the PM2 process
stop:
	pm2 stop $(APP_NAME)

# 6. Delete the process from PM2
delete:
	pm2 delete $(APP_NAME)

# 7. View Logs
logs:
	pm2 logs $(APP_NAME)

# 8. Full Deploy Cycle (Build + Reload)
# Use this when you have updated your code and need to push changes to live
deploy:
	npm install
	npm run build
	pm2 reload $(APP_NAME) --update-env