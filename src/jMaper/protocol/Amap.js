jMaper.Tile.Amap = jMaper.Tile.Extend({

	namespace : 'jMaper.Layer.Geog.Tile.Amap',

	agreement : {
		theme : /^(ST0)$/i,
		style : /^((S(T|H)|RD)0)$/i
	},

	structure : function(jsn){
		if((this.radio = {}) && jsn){
			if(this.$.Match.isNumber(jsn.index))
				this.index = jsn.index;
			if(this.$.Match.isString(jsn.group))
				this.group = jsn.group;
			if(this.$.Match.isString(jsn.title))
				this.title = jsn.title;
			if(this.$.Match.isBoolean(jsn.allow))
				this.allow = jsn.allow;
			if(this.$.Match.isBoolean(jsn.cover))
				this.cover = jsn.cover;
			if(this.$.Match.isBoolean(jsn.alarm))
				this.alarm = jsn.alarm;
			if(this.$.Match.isObject(jsn.extent))
				this.extent = jsn.extent;
			if(this.$.Match.isNumber(jsn.speed) && this.$.Match.isInt(jsn.speed))
				this.speed = jsn.speed;
			if(this.$.Match.isNumber(jsn.alpha) && this.$.Match.isInt(jsn.alpha, true))
				this.alpha = jsn.alpha;
			if(this.$.Match.isNumber(jsn.level) && this.$.Match.isInt(jsn.level, true))
				this.level = jsn.level;
			if(this.$.Match.isString(jsn.style) && this.agreement.style.test(jsn.style))
				this.style = jsn.style.toLowerCase();
			if(this.$.Match.isNumber(jsn.close) && this.$.Match.isInt(jsn.close))
				this.factor = this.$.Array.slice(this.factor, 0, this.close = jsn.close);
			if(this.$.Match.isNumber(jsn.start) && this.$.Match.isInt(jsn.start, true))
				this.factor = this.$.Array.slice(this.factor, this.start = jsn.start);
		}
	},

	radix : 1,

	close : 18,

	units : 'M',

	style : 'rd0',

	origin : new jMaper.Coord({
		lng : -180.00000002503606,
		lat : 85.05112878196637
	}),

	extent : new jMaper.Bound({
		minX : -180.00000002503606,
		minY : -85.05112878196637,
		maxX : 180.00000002503606,
		maxY : 85.05112878196637
	}),

	projcs : jMaper.convert['EPSG:900913'],

	factor : [78271.516953125, 39135.7584765625, 19567.87923828125, 9783.939619140625, 4891.9698095703125, 2445.9849047851562, 1222.9924523925781, 611.4962261962891, 305.74811309814453, 152.87405654907226, 76.43702827453613, 38.218514137268066, 19.109257068634033, 9.554628534317017, 4.777314267158508, 2.388657133579254, 1.194328566789627, 0.5971642833948135],

	source : function(l, r, c){
		return this.$.Array.join([
			'http://web', this.style.replace('h', 't'), Math.round(Math.random() * 3) + 1, '.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=', !this.agreement.theme.test(this.style) ? 8 : 6, '&x=', c, '&y=', r, '&z=', this.radix + this.start + l
		], '');
	}

});