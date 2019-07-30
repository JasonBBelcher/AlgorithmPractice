// observer pattern

class Subject {
  constructor() {
    this.observers = [];
    this.subjectState = null;
    console.log("Subject created.");
  }

  attach(Observer) {
    this.observers.push(Observer);
    console.log("Observer attached");
  }

  detach(Observer) {
    let i;
    this.observers = this.observers.filter(o => {
      return o !== Observer;
    });
    console.log("observers:", this.observers);
    console.log("observer detached");
    console.dir(Observer);
  }

  notify() {
    console.log("Subject Notify fired.");
    this.observers.forEach(o => {
      o.update(this);
    });
  }

  getState() {
    return this.subjectState;
  }

  setState(state) {
    this.subjectState = state;
    this.notify();
    console.log("setState fired.");
    console.dir(this.subjectState);
  }
}

class Observer {
  constructor() {
    this.observerState = "";
    console.log("observer created");
  }

  update(Subject) {
    this.observerState = Subject.getState();
    console.log("update method fired.");
    console.dir(this.observerState);
  }
}

const observer1 = new Observer();
const observer2 = new Observer();
const observer3 = new Observer();
const observer4 = new Observer();
const subject = new Subject();
subject.attach(observer1);
subject.attach(observer2);
subject.attach(observer3);
subject.attach(observer4);
subject.detach(observer1);
subject.detach(observer2);
subject.detach(observer3);

subject.setState({ loading: "true" });
