function question1() {
    function sayHi() {
        console.log(name);
        console.log(age);
        var name = "Lydia";
        let age = 21;
    }
    sayHi()
}

// question1()

function question2() {
    for (var i = 0; i < 3; i++) {
        setTimeout(() => console.log(i), 1);
    }

    for (let i = 0; i < 3; i++) {
        setTimeout(() => console.log(i), 1);
    }  
}
// question2() 

function question3() {
    const shape = {
        radius: 10,
        diameter() {
            return this.radius * 2;
        },
        perimeter: () => 2 * Math.PI * this.radius
    };
    console.log(shape.diameter()) ;
    console.log(shape.perimeter()) ;    
}

// question3()


function question4() {
    console.log(+true)
    console.log(!'lydia')
}
// question4()

function question5() {
    let c = { greeting: "Hey!" };
    let d;

    d = c;
    c.greeting = "Hello";
    console.log(d.greeting);
}
// question5()

function question6() {
    let a = 3;
    let b = new Number(3);
    let c = 3;

    console.log(a == b);
    console.log(a === b);
    console.log(b === c);
}

// question6()

function question7() {
    class Chameleon {
        static colorChange(newColor) {
            this.newColor = newColor;
        }

        constructor({ newColor = "green" } = {}) {
            this.newColor = newColor;
        }
    }

    const freddie = new Chameleon({ newColor: "purple" });
    freddie.colorChange("orange");
}

// question7()

function question8() {
    let greeting;
    greetign = {}; // Typo!
    console.log(greetign);
}
// question8()

function question9() {
    function bark() {
        console.log("Woof!");
    }

    bark.animal = "dog";
}

// question9()

function question10() {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    const member = new Person("Lydia", "Hallie");
    Person.getFullName = () => this.firstName + this.lastName;

    console.log(member.getFullName());
}
// question10()

function question11() {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    const lydia = new Person("Lydia", "Hallie");
    const sarah = Person("Sarah", "Smith");

    console.log(lydia);
    console.log(sarah);

}
// question11()

function question12() {
    function sum(a, b) {
        return a + b;
    }

    console.log(sum(1, "2")) ;
}
// question12()

function question13() {
    let number = 0;
    console.log(number++);
    console.log(++number);
    console.log(number);
}
// question13()

function question14() {
    function getPersonInfo(one, two, three) {
        console.log(one);
        console.log(two);
        console.log(three);
    }

    const person = "Lydia";
    const age = 21;

    getPersonInfo`${person} is ${age} years old`;

}
// question14()

function question15() {
    function checkAge(data) {
        if (data === { age: 18 }) {
            console.log("You are an adult!");
        } else if (data == { age: 18 }) {
            console.log("You are still an adult.");
        } else {
            console.log(`Hmm.. You don't have an age I guess`);
        }
    }

    checkAge({ age: 18 });

}
// question15()

function question16() {
    function getAge(...args) {
        console.log(typeof args);
    }

    getAge(21);
}
// question16()

function question17() {
    function getAge() {
        "use strict";
        age = 21;
        console.log(age);
    }

    getAge();
}
// question17()

function question18() {
    const sum = eval("10*10+5");
    console.log(sum)
}
// question18()

function question19() {
    var num = 8;
    var num = 10;

    console.log(num);
}
// question19()

function question20() {
    const obj = { 1: "a", 2: "b", 3: "c" };
    const set = new Set([1, 2, 3, 4, 5]);

    console.log(obj.hasOwnProperty("1")) 
    console.log(obj.hasOwnProperty(1)) ;
    console.log(set.has("1"));
    console.log(set.has(1));
}
// question20()

function question21() {
    const obj = { a: "one", b: "two", a: "three" };
    console.log(obj);
}
// question21()

function question22() {
    for (let i = 1; i < 5; i++) {
        if (i === 3) continue;
        console.log(i);
    }
}
// question22()

function question23() {
    String.prototype.giveLydiaPizza = () => {
        return "Just give Lydia pizza already!";
    };
    const name = "Lydia";
    console.log(name.giveLydiaPizza()) ;
}
// question23()

function question24() {
    const a = {};
    const b = { key: "b" };
    const c = { key: "c" };

    a[b] = 123;
    a[c] = 456;

    console.log(a[b]);
}
// question24()

function question25() {
    const foo = () => console.log("First");
    const bar = () => setTimeout(() => console.log("Second"));
    const baz = () => console.log("Third");

    bar();
    foo();
    baz();
}
// question25()

function question26() {
    const person = { name: "Lydia" };

    function sayHi(age) {
        console.log(`${this.name} is ${age}`);
    }

    sayHi.call(person, 21);
    sayHi.bind(person, 21);
}
// question26()

function question27() {
    function sayHi() {
        return (() => 0)();
    }

    console.log(typeof sayHi()) ;
}
// question27()

function question28() {
    console.log(typeof typeof 1);
}
// question28()

function question29() {
    const numbers = [1, 2, 3];
    numbers[10] = 11;
    console.log(numbers);
    console.log(numbers[5])
}
// question29()

function question30() {
    (() => {
        let x, y;
        try {
            throw new Error();
        } catch (x) {
            (x = 1), (y = 2);
            console.log(x);
        }
        console.log(x);
        console.log(y);
    })();
}
// question30()

function question31() {
    let result = [[0, 1], [2, 3]].reduce(
        (acc, cur) => {
            return acc.concat(cur);
        },
        [1, 2]
    );
    console.log(result)
}
// question31()

function question32() {
    let result = setInterval(() => console.log("Hi"), 1000);
    console.log(result)
}
// question32()

function question33() {
    console.log([..."Lydia"]) ;
}
question33()