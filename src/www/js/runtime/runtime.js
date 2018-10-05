(function() {

  let Code = function() {
    this.code = document.getElementById("code");
    this.ul = document.getElementById("stack");
    this.stack = [];
    this.dead = false;
    this.functions = Object.create(null);

    this.ul.innerHTML = "";
    this.jump(this.code.querySelector("pre:first-of-type"));
    this.scan();
  };

  Code.prototype = {
    // Find all the functions:
    scan: function() {
      let el = this.code.children[0];
      let first = null;

      do {
        let ins = el.getAttribute("data-ins") || "";
        let name = ins.match(/^func (\w+)$/);

        if (name) {
          first = first || name[1];
          this.functions[name[1]] = el;
        }
      } while ( (el = el.nextElementSibling));

      // Start with the first function.
      if (first) this.push(first, null);
    },

    // Reset;
    clear: function() {
      this.dead = true;
      this.ul.innerHTML = "";
      let current = this.code.querySelector(".current");
      if (current) current.classList.remove("current");
    },

    // Jump to the given source line:
    jump: function(el) {
      if (this.pointer) this.pointer.classList.remove("current");
      this.pointer = el;
      this.pointer.classList.add("current");
    },

    // Push a pointer to the function stack:
    push: function(name, returnTo) {
      let li = document.createElement("LI");
      li.textContent = name;
      this.ul.insertBefore(li, this.ul.firstChild);
      this.stack.push(returnTo);
    },

    // Pop the function stack:
    pop: function() {
      this.ul.removeChild(this.ul.firstElementChild);
      return this.stack.pop();
    },

    // Interpret the current source line:
    interpret: function() {
      let ins = this.pointer.getAttribute("data-ins") || "";
      let words = ins.split(/\s+/);

      switch (words[0]) {
      case "push":
        this.push(words[1], this.pointer);
        this.jump(this.functions[words[1]]);
        return;

      case "pop":
        let prev = this.pop();
        if (prev) {
          this.jump(prev);
          this.step();
        } else {
          this.clear();
        }
        break;

      default:
        this.step();
      }
    },

    // Move to the next source line:
    step: function() {
      let el = this.pointer.nextElementSibling;
      if (el) this.jump(el);
      else this.clear();
    },

    // Execute the current source line, or start execution if not
    // currently running.
    forward: function() {
      if (this.dead) {
        Code.call(this);
      } else {
        this.interpret();
      }
    }
  };

  // Work items to manage in the work queue.
  let Work = function(title, delay) {
    this.title = title;
    this.delay = delay;
  };

  // <li> -> Work.
  Work.fromLI = function(li) {
    let title = li.getAttribute("data-title");
    let delay = li.getAttribute("data-delay");
    return new Work(title, delay);
  };

  Work.prototype = {
    // Update work item:
    tick: function() {
      if (this.delay) this.delay = Math.max(this.delay - 1, 0);
    },

    // Returns true if this work item can be executed:
    isReady: function() {
      return !this.delay;
    },

    // Convert back to an <li>:
    toLI: function(li) {
      if (this.delay > 0) {
        li.textContent = this.title + " in " + this.delay + "s";
      } else {
        li.textContent = this.title + " when stack is empty";
      }

      li.setAttribute("data-title", this.title);

      if (this.delay) {
        li.setAttribute("data-delay", this.delay);
      } else {
        li.removeAttribute("data-delay");
      }
    }
  };

  // Simulate the JavaScript runtime:
  let Runtime = function() {
    this.code  = null;
    this.ul = document.getElementById("queue");
    this.ul.innerHTML = "";
  };

  Runtime.prototype = {
    // The CPU is giving you a time slice:
    tick: function() {
      let items = this.ul.children;
      let ready = null;

      // Update all of the work items in the queue:
      for (let i=0; i<items.length; ++i) {
        let work = Work.fromLI(items[i]);
        work.tick();
        work.toLI(items[i]);
        if (work.isReady()) ready = ready || items[i];
      }

      // See if there is code to move forward:
      if (this.code && this.code.autoMode) {
        this.next();
      } else if (!this.code && ready) {
        this.ul.removeChild(ready);

        if (ready.textContent.match(/^call /)) {
          this.code = new Code();
          this.code.autoMode = true;
        }
      }
    },

    // Manually move to the next source line:
    next: function() {
      if (this.code) {
        this.code.forward();
        if (this.code.dead) this.code = null;
      } else {
        this.code = new Code();
      }
    },

    // Add some work to the work queue:
    addToQueue: function(work) {
      let li = document.createElement("LI");
      work.toLI(li);

      if (work.delay) {
        this.ul.appendChild(li);
      } else {
        let ready = this.ul.querySelector("[data-delay]");
        if (ready) this.ul.insertBefore(li, ready);
        else this.ul.appendChild(li);
      }
    },

    // Process a keydown event:
    keydown: function(e) {
      switch (e.key) {
      case "c":
        if (this.code) this.code.clear();
        Runtime.call(this);
        break;

      case "n":
        if (this.code && this.code.autoMode) break;
        this.next();
        break;

      case "s":
        this.addToQueue(new Work("call f", 5));
        break;

      default:
        this.addToQueue(new Work("process keydown"));
      }
    },

    // Process a click event:
    click: function() {
      this.addToQueue(new Work("process click"));
    }
  };

  let rt = new Runtime();
  document.body.addEventListener("keydown", rt.keydown.bind(rt));
  document.body.addEventListener("click", rt.click.bind(rt));
  setInterval(rt.tick.bind(rt), 1000);
})();
