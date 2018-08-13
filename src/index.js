class Teacher {
    constructor (name, age){
        this.name = name
        this.age = age
    }
    xuhao(){
        alert(`${this.name}的xuhao`)
    }
    eat(){
        alert(`大小${this.age}`)
    }
}

class Student extends Teacher {
    constructor (name, age, number){
        super(name,age);
        this.number = number;
    }
    study(){
        alert(`${this.name}${this.number} study`)
    }
}

var xiaoming = new Student("xiaoming", 16, 'A1');
xiaoming.xuhao();
xiaoming.study();
xiaoming.eat();