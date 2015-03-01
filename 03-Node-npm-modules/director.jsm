function Director(name) {
	this['name'] = name;
	this['quotes'] = null;
	this.setAttr = function(attr, value) {
		this[attr] = value;
	},
	this.getAttr = function(attr) {
		console.log(this[attr]);
		return this[attr];
	},
	this.speak = function() {
		this['quotes'].forEach(function(item) {console.log(' says: ' + item)})
	}
};
module.exports = Director;
