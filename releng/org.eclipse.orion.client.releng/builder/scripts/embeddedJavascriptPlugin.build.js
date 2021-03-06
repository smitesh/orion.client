/*******************************************************************************
 * Copyright (c) 2013 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials are made 
 * available under the terms of the Eclipse Public License v1.0 
 * (http://www.eclipse.org/legal/epl-v10.html), and the Eclipse Distribution 
 * License v1.0 (http://www.eclipse.org/org/documents/edl-v10.html). 
 *
 * Contributors:
 *     IBM Corporation - initial API and implementation
 *******************************************************************************/
 
// optimization script to concat/minify the Orion editor javascript code
 
({
    baseUrl: '.',
	paths: {
        almond: 'requirejs/almond',
        i18n: 'requirejs/i18n',
        text: 'requirejs/text',
		esprima: "esprima/esprima",
		estraverse: "estraverse/estraverse",
		escope: "escope/escope",
		logger: "javascript/logger",
		doctrine: 'doctrine/doctrine',
        'orion/bootstrap': 'embeddedEditor/builder/buildFrom/bootstrap'
	},
	packages: [
		{
			name: "eslint/conf",
			location: "eslint/conf"
		},
		{
			name: "eslint",
			location: "eslint/lib",
			main: "eslint"
		},
	],
	name: "almond",
	//locales: ["ja", "zh", "zh-tw", "fr", "de", "it", "es", "pt-br"],						
	include: "javascript/plugins/javascriptPlugin",
	preserveLicenseComments: false,
	wrap: {
		start: "\
			(function (root, factory) {\
				if (typeof define === 'function' && define.amd) {\
					define([], factory);\
				} else {\
					root.orion = root.orion || {};\
					root.orion.webtools = root.orion.webtools || {};\
					root.orion.webtools.javascript = factory();\
				}\
			}(this, function () {\
		",
		end: "\
				return require('javascript/plugins/javascriptPlugin');\
			}));\
		"
	}
})