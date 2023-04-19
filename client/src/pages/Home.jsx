import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { CustomButton } from '../components';

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';

const Home = () => {
  const snap = useSnapshot(state);

  return (
      <AnimatePresence>
          {snap.intro && (
            <motion.section className="home" {...slideAnimation('left')}>
              <motion.header>
                <img
                src='./cube.png'
                alt="logo"
                className="w-8 h-8 object-contain"
                />
              </motion.header>

              <motion.div className="home-content" {...headContainerAnimation}>
                <motion.div {...headTextAnimation}>
                  <h1 className="head-text">
                    LET'S <br className="x1:block hidden" /> DO IT 
                  </h1>
                </motion.div>
                <motion.div
                {...headContentAnimation}
                className="flex flex-col gap-5"
                >
                  <p className="max-w-md font-normal text-gray-600 text-base">
                  With <strong> AI-powered </strong> customization, you can unleash your creativity and design a 3D model tailored to your exact specification. <strong>Define your own style </strong>{" "}in a way that is both effortless and stylish.  
                  </p>
                  <CustomButton
                  type="filled"
                  title="Customize Now"
                  handleClick={() => state.intro = false}
                  customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                  />
                </motion.div>
              </motion.div>
            </motion.section>
          )}
      </AnimatePresence>
  )
}

export default Home