// The news class is the Observable class
class News {
	// A list of observers
	constructor() {
		this.observers = [];
	}
	
	// Method for subscribing to, or "observing" observable
	addSubscriber(subscriber) {
		this.observers.push(subscriber);
	}
	
	// Method for unsubscribing from observable
	unsubscribe(subscriber) {
		var index = this.observers.indexOf(subscriber);
		this.observers.splice(index, index);
	}
	
	// Method for sending data to subsribers
	transmit(data) {
		this.observers.forEach(subscriber => subscriber.receive(data));
	}
}