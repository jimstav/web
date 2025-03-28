import { User } from './models/User';

const user = new User({});

user.set({ name: 'myname', age: 999 });

user.on('change', () => {
  console.log('Change #1');
});
user.on('change', () => {
  console.log('Change #2');
});
user.on('save', () => {
  console.log('Save was triggered');
});

console.log(user);
user.trigger('change');
