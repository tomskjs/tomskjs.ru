import fs from 'fs'
import path from 'path'
import webpack from 'webpack'
import filesize from 'filesize'
import makeConfig from './make-webpack-config'
import 'colors'

const config = makeConfig({
	optimize: true,
})
const prerenderConfig = makeConfig({
	optimize: true,
	prerender: true,
	nyan: true,
})
const compilers = [
	webpack(config),
	webpack(prerenderConfig),
]

compilers.forEach(compiler => {
	compiler.run((err, stats) => {
		// console.log('Completed in ' + ((stats.endTime - stats.startTime) / 1000))
		if (err) {
			throw new Error(err.message.red.bgBlack)
		}

		const errors = stats.compilation.errors
		if (errors && errors.length) {
			for (const error of errors) {
				console.log(error)
			}
		} else {
			const opts = stats.compilation.outputOptions
			const resultSize = fs.statSync(path.join(opts.path, opts.filename)).size
			console.log(filesize(resultSize))
		}
	})
})
