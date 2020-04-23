export class HelloJs {
    say() {
        console.log('Hello!!');
    }

    async asyncTask() {
        console.log('async task started');
        return await setTimeout(() => console.log('hello from async'), 1000);
    }
}