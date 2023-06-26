export const state = {

	data: {} = {},
	
	listeners: [] = [],

	suscribe(callback: (any: any) => any) {
		this.listeners.push(callback);
	},

	getState() {
		return this.data;
	},

	setState(newState: any) {
		this.data = newState;

		for (const cb of this.listeners as any) {
			cb();
		}
	},
};
