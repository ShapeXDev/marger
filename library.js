/*
 * @param {object} parent
 * @param {any} children
 * @param {boolean} [redefine=true]
 */
exports.merge = function(parent, children, redefine = true) {
	const hasOwnProperty = Object.prototype.hasOwnProperty;

	if (!parent) {
		return console.error(`Parent object was not found!`);
	}

	if (typeof parent !== "object" || Array.isArray(parent)) {
		return console.error(`Parent is not a object!`);
	}

	if (!children) {
		return console.error(`Children was not found!`);
	}

	if (redefine === undefined || redefine === null) {
		redefine = true;
	}

	Object.getOwnPropertyNames(children).forEach(name => {
    if (!redefine && hasOwnProperty.call(parent, name)) {
      return;
    }

    const descriptor = Object.getOwnPropertyDescriptor(children, name)
    Object.defineProperty(parent, name, descriptor);
  })

	return parent;
}