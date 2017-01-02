/**
 * 队列(先进先出)的一些方法:
 * 	enqueue(): 向队列添加新元素
 * 	dequeue(): 移除队列中元素，移除最先进入的元素，返回移除的元素
 * 	front(): 返回最先进入队列中的元素，队列不变
 * 	isEmpty(): 判断队列是否为空，为空返回true，否则返回false
 * 	size(): 返回队列中元素的个数
 */

exports.queue = new Queue();

function Queue() {
	var items = [];

	this.enqueue = function(element) {
		items.push(element);
	}

	this.dequeue = function() {
		return items.shift();
	}

	this.front = function() {
		return items[0];
	}

	this.isEmpty = function() {
		return items.length == 0 
			? true
			: false;
	}

	this.size = function() {
		return items.length;
	}

	this.print = function() {
		var queueString = '';
		items.map(function(value, key){
			queueString += value;
			queueString += ','
		});
		console.log(queueString);
	}
}