/*
 * Copyright (c) 2019 BSI Business Systems Integration AG.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Distribution License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/org/documents/edl-v10.html
 *
 * Contributors:
 *     BSI Business Systems Integration AG - initial API and implementation
 */

const baseConfig = require('pnpm_a/webpack-defaults');
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = (env, args) => {
    args.mode = env.NODE_ENV;
    let devMode = args.mode === "development";
    const config = baseConfig(env, args);

    config.entry = {
        'app': './src/index.js',
    };
    config.devtool = devMode ? "source-map" : "nosources-source-map";
    config.plugins = [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.join(__dirname, "public/index.html"),
            inject: true
        })
    ];
    return config;
};
