/**
 * 栈的一些方法
 * 	push():添加新元素
 * 	pop():移除元素
 * 	peek():返回栈顶元素，不对栈作修改
 * 	isEmpty():判断栈是否为空，为空返回true，否则返回false
 * 	clear(): 清空栈
 * 	size(): 返回栈的大小
 * 	print(): 从栈底到栈顶打印元素
 */

exports.stack = new Stack();


//新建栈--构造器函数
function Stack() {
	var items = [];  //存放栈的元素

	this.push = function(element) {
		items.push(element);
	}

	this.pop = function(element) {
		return items.pop();
	}

	this.peek = function(element) {
		return items[items.length - 1];
	}

	this.isEmpty = function(element) {
		return items.length == 0 
			? true 
			: false;
	}

	this.clear = function() {
		items = [];
	}

	this.size = function(element) {
		return items.length;
	}

	this.print = function() {
		var stackString = '';
		items.map(function(value, key){
			stackString +=value;
			stackString +=',';
		})
		console.log(stackString);
	}
}