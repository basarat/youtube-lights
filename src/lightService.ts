import axios from 'axios';

type LightOptions = {
  /** 0(off)-1(on) */
  on: 0 | 1,
  /** 3-100 */
  brightness: number,
  /** 143(7000K)-344(2900K) */
  temperature: number,
}

async function setLight(ip: string, light: LightOptions) {
  const elgatoLightPort = 9123;
  const payload = {
    numberOfLights: 1,
    lights: [light],
  };
  const res = await axios.put(`http://${ip}:${elgatoLightPort}/elgato/lights`, payload);
  if (res.status != 200) {
    console.log('ERROR', res);
    throw new Error(`Failure to invoke for light: ${ip}`);
  }
}

let lastValues = {
  brightness: 3,
  temperature: 344,
};

export async function on(ip: string, light: Omit<LightOptions, 'on'>) {
  lastValues = { ...light };
  await setLight(ip, { on: 1, ...light });
}

export async function off(ip: string) {
  await setLight(ip, { on: 0, ...lastValues });
}
