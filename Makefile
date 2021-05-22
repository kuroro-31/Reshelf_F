dev:
	npm run dev
build:
	npm run build
start:
	npm run start
generate:
	npm run generate
reset:
	rm -rf node_modules && rm package-lock.json && npm cache clear --force && npm cache clean --force && npm i && npm audit fix
lint:
	npm run lintfix
package:
	npm install --save-exact @nuxtjs/auth-next
cache:
	rm -rf node_modules/.cache/hard-source/
ana:
	npx nuxt build --a
