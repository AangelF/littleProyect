 function Stack() {
     this.dataStore = [];
     this.top = 0;
     this.push = push;
     this.pop = pop;
     this.peek = peek;
     this.clear = clear;
     this.length = length;
 }

 function push(element) {
     this.dataStore[this.top++] = element;
 }

 function peek() {
     return this.dataStore[this.top - 1];
 }

 function pop() {
     return this.dataStore[--this.top];
 }

 function clear() {
     this.top = 0;
 }

 function length() {
     return this.top;
 }

 //Se crea el Stack
 var s = new Stack();
 //Se llena el Stack de numeros
 let n;
 for (let x = 0; x < 10; x++) {
     n = -20 + (Math.ceil((Math.random() * 40))) % (40 - (-10) + 1);
     s.push(n);
 }
 //Se muestra el Stack
 document.getElementById("muestra").innerHTML = s.dataStore;
 //Se cambian de poscision los numeros y se agregan a un array exclusivo
 let negatives = [];
 let positives = [];

 for (let p = 0; p < 10; p++) {
     if (s.peek() < 0) {
         negatives[p] = s.peek();
         s.pop();
     } else {
         positives[p] = s.peek();
         s.pop();
     }
 }
 //Filtrar elementos vacios en el array.
 positives = positives.filter(Boolean);
 negatives = negatives.filter(Boolean);
 //Mandar a llamar los array
 document.getElementById("nega").innerHTML = negatives;
 document.getElementById("posi").innerHTML = positives;