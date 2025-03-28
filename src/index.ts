import { User } from './models/User';

const user = new User({});

user.set({ name: 'myname', age: 999 });

user.on('change', () => {});
user.on('change', () => {});
user.on('click', () => {});

console.log(user);
