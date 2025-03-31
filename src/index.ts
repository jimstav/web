import { User } from './models/User';

const user = new User({ id: 1 });

user.on('change', () => {
  console.log('User was changed', user);
});

user.fetch();
