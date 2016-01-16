function extsToRegExp(exts) {
	return new RegExp('\\.(' + exts.map(ext => {
		return ext.replace(/\./g, '\\.')
	}).join('|') + ')(\\?.*)?$')
}

module.exports = function loadersByExtension(obj) {
	const loaders = []
	let extensions = Object.keys(obj).map(key => {
		return key.split('|')
	})

	extensions = extensions.reduce((arr, a) => {
		arr.push.apply(arr, a)
		return arr
	}, [])

	Object.keys(obj).forEach(key => {
		const exts = key.split('|')
		const value = obj[key]
		const entry = {
			extensions: exts,
			test: extsToRegExp(exts),
			loaders: value,
		}

		if (Array.isArray(value)) {
			entry.loaders = value
		} else if (typeof value === 'string') {
			entry.loader = value
		} else {
			Object.keys(value).forEach(property => {
				entry[property] = value[property]
			})
		}

		loaders.push(entry)
	})

	return loaders
}
