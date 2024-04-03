import { SystemUserProxy } from './system-user/system-user-proxy';

async function clientCode(): Promise<void> {
  const user = new SystemUserProxy('Felipe', 'felipebatista');
  console.log('Isso vai demorar dois segundos');
  console.log(await user.getAddresses());
  console.log('Isso vai se repetir');

  for (let i = 0; i < 5; i++) {
    console.log(await user.getAddresses());
  }
}

clientCode();
