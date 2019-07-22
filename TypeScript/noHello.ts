export class noHello{
	//1:多行字符串
	//var string = `abc
	//def`;

	//2:字符串模板
	/*
	var a = 'say goodbye';
	function sayGoodBye(){
		console.log('hello')
	}
	console.log(`you say:${a}`)
	console.log(`you say:${sayGoodBye()}`)
	*/

	//3:自动拆分字符串
	/*
	function test(template,name,age){
		console.log(template);
		console.log(name);
		console.log(age);
	}

	var myName  = "pig";
	var getAge = function(){
		return 2;
	}

	test`hello,my name is ${myName},i'm ${getAge()} years old`
	*/

	//4.参数类型
	/*
	var myname:string = "hahaha"
	myname = 13 //warning

	var alias = "xx"
	alias = 12 //warning

	var alias:any ="enen"
	alias = "oo" //ok

	function test(name:string): void {
		return "xx" // error
	}

	class Person{
		name:string,
		age:number
	}

	var h:Person = new Person();
	h.name = "dff";
	h.age = 24
	*/

	//5.默认参数
	/*
	var myname:string = "liang"

	function test(a:string,b:string,c:string="liangh"){
		
	}

	test('xx') //error
	test('xx','yy') //ok
	test('xx,'uu','oo') //ok
	*/
}