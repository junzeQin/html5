var hello = "hello world";
hello = "qinkai";
console.log(hello);

enum color1 {
  red,
  green,
  yellow,
  blue,
}

enum color2 {
  red = 1,
  green = 3,
  yellow = 5,
  blue = 7,
}

var bn: boolean = true;
var num: number = 1111;
var str: string = "我是谁？";
var arr1: number[] = [11, 22, 33, 44];
var arr2: Array<number> = [11, 22, 33, 44];
var arr3: any[] = ["11", 22.22, bn, arr2];
var [one, two, three, four] = arr1;
function test1(): void {
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
  arr2.forEach((item) => {
    console.log(item);
  });
  console.log(color1[3]);
  console.log(color2[3]);
}
test1();

var testAdd /* : (name: number, age: number) => number */ = function (
  x = 6,
  y = 8
): number {
  return x + y;
};
console.log(testAdd());
console.log(testAdd(3, 5));

function test2(one: string, ...arr: string[]) {
  return one + "-" + arr.join("-");
}
console.log(test2("qinkai", "lisi", "wangwu"));

var nameObj = {
  name: ["zhangsan", "zhaosi", "wangwu"],
  getName: function () {
    return () => {
      return {
        n: this.name[1],
      };
    };
  },
};
var myName = nameObj.getName();
console.log(myName().n);

// function test3(p: string): string;
// function test3(a: number): number;
// function test3(s: any): any {
//   if (s && typeof s === "string") {
//     console.log(111);
//   } else {
//     console.log(222);
//   }
// }
// test3();

class person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  print() {
    return this.name + "-" + this.age;
  }
}

var p = new person('张三',18);
console.log(p.age)
