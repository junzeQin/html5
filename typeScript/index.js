var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var hello = "hello world";
hello = "qinkai";
console.log(hello);
var color1;
(function (color1) {
    color1[color1["red"] = 0] = "red";
    color1[color1["green"] = 1] = "green";
    color1[color1["yellow"] = 2] = "yellow";
    color1[color1["blue"] = 3] = "blue";
})(color1 || (color1 = {}));
var color2;
(function (color2) {
    color2[color2["red"] = 1] = "red";
    color2[color2["green"] = 3] = "green";
    color2[color2["yellow"] = 5] = "yellow";
    color2[color2["blue"] = 7] = "blue";
})(color2 || (color2 = {}));
var bn = true;
var num = 1111;
var str = "我是谁？";
var arr1 = [11, 22, 33, 44];
var arr2 = [11, 22, 33, 44];
var arr3 = ["11", 22.22, bn, arr2];
var one = arr1[0], two = arr1[1], three = arr1[2], four = arr1[3];
function test1() {
    num++;
    console.log(num);
    console.log(bn);
    console.log(str);
    console.log(arr1);
    console.log(arr2);
    console.log(arr3);
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
    arr2.forEach(function (item) {
        console.log(item);
    });
    console.log(color1[3]);
    console.log(color2[3]);
}
test1();
var testAdd /* : (name: number, age: number) => number */ = function (x, y) {
    if (x === void 0) { x = 6; }
    if (y === void 0) { y = 8; }
    return x + y;
};
console.log(testAdd());
console.log(testAdd(3, 5));
function test2(one) {
    var arr = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arr[_i - 1] = arguments[_i];
    }
    return one + "-" + arr.join("-");
}
console.log(test2("qinkai", "lisi", "wangwu"));
var nameObj = {
    name: ["zhangsan", "zhaosi", "wangwu"],
    getName: function () {
        var _this = this;
        return function () {
            return {
                n: _this.name[1]
            };
        };
    }
};
var myName = nameObj.getName();
console.log(myName().n);
function test3(s) {
    if (s && typeof s === "string") {
        console.log(111);
    }
    else {
        console.log(222);
    }
}
test3(333);
var person = /** @class */ (function () {
    function person(name, age) {
        this.name = name;
        this.age = age;
    }
    person.prototype.print = function () {
        return this.name + "-" + this.age;
    };
    return person;
}());
var p = new person("张三", 18);
console.log(p.age);
var student = /** @class */ (function (_super) {
    __extends(student, _super);
    function student(school, name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.school = school;
        return _this;
    }
    return student;
}(person));
var s = new student("清华大学", "张三", 18);
console.log(s.school);
