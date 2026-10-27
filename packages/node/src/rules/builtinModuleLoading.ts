import { SyntaxKind } from "typescript";

import {
	getTSNodeRange,
	typescriptLanguage,
} from "@flint.fyi/typescript-language";

import { ruleCreator } from "./ruleCreator.ts";

export default ruleCreator.createRule(typescriptLanguage, {
	about: {
		description:
			"Prefer process.getBuiltinModule() when loading Node.js built-in modules.",
		id: "builtinModuleLoading",
		presets: ["stylistic", "stylisticStrict"],
	},
	messages: {
		preferBuiltinModuleLoading: {
			primary:
				"Prefer `process.getBuiltinModule()` over loading Node.js built-in modules.",
			secondary: [],
			suggestions: [""],
		},
	},
	setup(context) {
		return {
			visitors: {
				ImportDeclaration(node, { sourceFile }) {},
			},
		};
	},
});
