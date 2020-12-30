module.exports = {
	"roots": [
		"questions/",
    "functions/"
	],
	"testMatch": [
		"**/__tests__/**/*.+(ts|tsx|js)",
		"**/?(*.)+(spec|test).+(ts|tsx|js)"
	],
	"transform": {
		"^.+\\.(ts|tsx)$": "ts-jest"
	},
}
