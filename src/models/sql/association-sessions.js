'use strict';

const Sequelize = require('sequelize');


class Sessions {
	constructor(sql) {
		this.Sessions = sql.define('association_sessions', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			token: {
				type: Sequelize.STRING
			},
			connectionId: {
				type: Sequelize.STRING,
				field: 'connection_id'
			}
		}, {
			timestamps: false
		});
	}

	count(options) {
		let self = this;

		return this.Sessions.sync()
			.then(function() {
				return self.Sessions.count(options);
			});
	}

	create(val) {
		let self = this;

		return this.Sessions.sync()
			.then(function() {
				return self.Sessions.create(val);
			});
	}

	destroy(val, options) {
		let self = this;

		return this.Sessions.sync()
			.then(function() {
				return self.Sessions.destroy(val, options);
			});
	}

	update(val, options) {
		let self = this;

		return this.Sessions.sync()
			.then(function() {
				return self.Sessions.update(val, options);
			});
	}

	find(options) {
		let self = this;

		return this.Sessions.sync()
			.then(function() {
				return self.Sessions.find(options);
			});
	}

	findAll() {
		let self = this;

		return this.Sessions.sync()
			.then(function() {
				return self.Sessions.findAll();
			});
	}

	findOne(options) {
		let self = this;

		return this.Sessions.sync()
			.then(function() {
				return self.Sessions.findOne(options);
			});
	}

	findOrCreate(options) {
		let self = this;

		return this.Sessions.sync()
			.then(function() {
				return self.Sessions.findOrCreate(options);
			});
	}
}


module.exports = Sessions;