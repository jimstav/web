import { User } from './models/User';

const user = new User({ id: 1, name: 'John Doe', age: 10 });

user.on('change', () => {
  console.log('User was changed', user);
});

user.on('save', () => {
  console.log('User was saved', user);
});

// user.fetch();
user.save();
