/*las estructuras de datos son una forma particular de organizar datos que pueden ser utilizados de manera eficiente.
Fila (Queue)
Caracterizada por ser una secuencia de elementos en la que la operacion  de insercion (enqueue) se realiza por un extremo
y la operacion de extraccion se realiza (dequeue) por el otro. FIFO.
[]Constructor   []enqueue   []dequeue
[]getSize       []isEmpty   []peek      []print

*/

class Queue{
    constructor(){
        this.items = {};
        this.front = 0;
        this.end = 0;
    };
        enqueue(data){
            this.items[this.end] = data;
            this.end++;
    }
        dequeue(){
            if(this.front === this.end){
                return null;
            };
            const data = this.items[this.front]
            this.front++;
            return data;
    }
        getSize(){
            return this.end - this.front;
    }
        isEmpty(){
            if(this.getSize() === 0){
        return true;
            }else{
        return false;
            }
    }
        peek(){
            if(this.getSize === 0){
                return null;
            }
        return this.items[this.front];
    }
        print(){
            if(this.getSize === 0){
                return null;
            }
            let resurlt = "";
                for(let i = 0; i < this.end; i++){
                    result += this.items[i] + " "
                }
        return result;
    }
};

    const queue = new Queue();
    queue.enqueue("primero");
    queue.enqueue(2);
    queue.enqueue('hola mundo');
    queue.enqueue(4);
    //queue.dequeue();
    console.log(queue);

    console.log(queue.dequeue());   //obtenemos de la fila
        console.log(queue.getSize());   //tamaño
            console.log(queue.peek());  //ver primer valor
    console.log(queue.dequeue());   //obtenemos de la fila
            console.log(queue.peek());  //ver primer valor
    console.log(queue.dequeue());   //obtenemos de la fila
        console.log(queue.getSize());   //tamaño
            console.log(queue.isEmpty());
                console.log(queue.peek());  //ver primer valor
    console.log(queue.dequeue());   //obtenemos de la fila
    console.log(queue.getSize());   //tamaño
            console.log(queue.isEmpty());
                console.log(queue.peek());
    //console.log(queue);