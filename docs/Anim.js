import Utility from '../utility/Utility';
import { TweenLite } from 'gsap';

export default class Anim {

    constructor() {

        // # default css
        // elm {
        //     display: none
        //     opacity: 0
        //     visibility: hidden
        // }

    }

    fadeIn(elm, duration, delay) {

        TweenLite.set(elm, {
            display: 'block',
            delay: delay,
            onComplete: () => {

                TweenLite.to(elm, duration, {
                    opacity: 1,
                    visibility: 'visible',
                    ease: Utility.getCubicCurve(.645, .045, .355, 1),
                });

            }
        });

    }

    fadeOut(elm, duration, delay) {

        TweenLite.to(elm, duration, {
            opacity: 0,
            delay: delay,
            ease: Utility.getCubicCurve(.645, .045, .355, 1),
            onComplete: () => {

                TweenLite.set(elm, {
                    display: 'none',
                    visibility: 'hidden',
                });

            }
        });

    }


}