type RAFCallback = (time: number) => void;

let lastTime = 0;
const prefixes = ['webkit', 'moz', 'ms', 'o']; // 各浏览器前缀

let requestAnimationFrame: (callback: RAFCallback) => number;
let cancelAnimationFrame: (handle: number) => void;

const isServer = typeof window === 'undefined';

if (isServer) {
    requestAnimationFrame = (): number => 0;
    cancelAnimationFrame = (): void => { /* noop */ };
} else {
    requestAnimationFrame = window.requestAnimationFrame || null;
    cancelAnimationFrame = window.cancelAnimationFrame || null;

    for (const prefix of prefixes) {
        if (requestAnimationFrame && cancelAnimationFrame) break;

        requestAnimationFrame = requestAnimationFrame || (window as any)[`${prefix}RequestAnimationFrame`];
        cancelAnimationFrame = cancelAnimationFrame || (window as any)[`${prefix}CancelAnimationFrame`] || (window as any)[`${prefix}CancelRequestAnimationFrame`];
    }

    if (!requestAnimationFrame || !cancelAnimationFrame) {
        requestAnimationFrame = (callback: RAFCallback): number => {
            const currTime = new Date().getTime();
            const timeToCall = Math.max(0, 16 - (currTime - lastTime));
            const id = window.setTimeout(() => callback(currTime + timeToCall), timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

        cancelAnimationFrame = (id: number): void => {
            window.clearTimeout(id);
        };
    }
}

export { requestAnimationFrame, cancelAnimationFrame };
