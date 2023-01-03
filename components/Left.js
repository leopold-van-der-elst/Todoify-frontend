import React from 'react'
import styles from '../styles/Left.module.css'
import { Slider } from "native-base";

function Left() {
  return (
    <div className={styles.container}>
        <h3>New task</h3>
        <input/>
        <h3>Description</h3>
        <input/>
        <h3>Add a buddy</h3>
        <input/>
        <Box alignItems="center" w="100%">
      <Slider w="3/4" maxW="300" defaultValue={70} minValue={0} maxValue={100} accessibilityLabel="hello world" step={10}>
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>
    </Box>;
    </div>
  )
}

export default Left