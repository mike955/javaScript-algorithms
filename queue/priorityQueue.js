/**
 * 优先队列方法:
 *  enqueue(): 向队列添加新元素
 * 	dequeue(): 移除队列中元素，移除最先进入的元素，返回移除的元素
 * 	front(): 返回最先进入队列中的元素，队列不变
 * 	isEmpty(): 判断队列是否为空，为空返回true，否则返回false
 * 	size(): 返回队列中元素的个数
 */

exports.priorityQueue = new PriorityQueue();

function PriorityQueue() {
	var items = [];

	function QueueElement(element, priority) {
		this.element = element;
		this.priority = priority;
	}

	this.enqueue = function(element, priority) {
		var queueElement = new QueueElement(element, priority);

		if(this.isEmpty()) {
			items.push(queueElement);
		} else {
			var added = false;
			for(var i = 0; i < items.length; i++){
				if(queueElement.priority < items[i].priority){
					items.splice(i, 0, queueElement);
					added = true;
					break;
				}
			}
			if(!added){
				items.push(queueElement);
			}
		}
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