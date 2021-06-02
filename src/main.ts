import { on, off } from './lightService';

/** Customize for yourself */
export async function main(scene = 'on') {
  const key = '192.168.1.110';
  const fill = '192.168.1.117';
  const temperature = 344;

  if (scene == 'on') {
    await on(key, { brightness: 20, temperature });
    await on(fill, { brightness: 15, temperature });
  } else if (scene == 'off') {
    await off(key);
    await off(fill);
  } else {
    console.log('UNKNOWN SCENE:', scene);
  }
}
