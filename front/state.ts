export const state = {
	data: {},
	listeners: [],
	suscribe(callback: () => any) {
		this.listeners.push(callback);
	},
	getState() {
		return this.data;
	},
	setState(newState) {
		this.data = newState;

		for (const cb of this.listeners as any) {
			cb();
		}
	},
};
