import { proxy } from 'valtio';

const state = proxy({
    intro: true,
    color: '#FC5404',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './cube.png',
    fullDecal: './threejs.png',
    
});

export default state;