i:
	npm install
update:
	npm install -g npm
dev:
	npm run dev
build:
	npm run build
start:
	npm run start
generate:
	npm run generate
reset:
	rm -rf node_modules && rm package-lock.json && npm cache clear --force && npm cache clean --force && npm i && npm audit fix --force
lint:
	npm run lintfix
package:
	npm install --save-exact @nuxtjs/auth-next
eslint:
	npm i eslint babel-eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue eslint-loader prettier -D && npm audit fix --force
cache:
	rm -rf node_modules/.cache/hard-source/
ana:
	npx nuxt build --a
