import { useEffect, useState } from 'react';
const textVariations = ['Frontend Developer', 'Gamer', 'Cooking Guru'];
const Hero = ({ component }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);
  const [loop, setLoop] = useState(false);
  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  // typeWriter
  // This has to be either a callback or a promise function

  useEffect(() => {
    if (
      index === textVariations.length - 1 &&
      loop === true &&
      subIndex === 0
    ) {
      setIndex(-1);
      setSubIndex(0);
      setLoop(false);
      setReverse(false);
    }

    if (
      index === textVariations.length - 1 &&
      subIndex === textVariations[index].length
    ) {
      setTimeout(() => {
        setReverse(true);
        setTimeout(() => {
          setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, 100);
      }, 5000);
      setLoop(true);
    }
    if (
      subIndex === textVariations[index].length + 1 &&
      index !== textVariations.length - 1 &&
      !reverse
    ) {
      setTimeout(() => {
        setReverse(true);
        return;
      }, 5000);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <div className='hero'>
      <div className='hero_introduction'>
        <div className='hero_introduction_text'>
          <h1>
            I'm <span>Marius</span>
          </h1>
          <h3>
            a{' '}
            <span className='hero_introduction_changing-text'>{`${textVariations[
              index
            ].substring(0, subIndex)}`}</span>
            <span className={'typing_blink '}>{blink ? '|' : ''}</span>
          </h3>
        </div>
        <img src='assets/img/hero_img.png' alt='' />
      </div>
      <i class='bi bi-chevron-down slide-down_indicator'></i>
    </div>
  );
};
//setInterval
export default Hero;
