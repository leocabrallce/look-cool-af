
import { Colors } from './colors';
import { Measures } from './measures';

const skeletonGradient = {
           type: 'Linear',
            direction: {
             from: {x: 1, y: 0.4999999250814888 },
             to:   {x: 0, y: 0.4999999250814892 },
           },
            stops: [
             {
               color: "#cccccc",
               position: 0
             },
             {
               color: "#f1f1f1",
               position: 0.4000000059604645
             },
             {
               color: "#f1f1f1",
               position: 0.6000000238418579
             },
             {
               color: "#cccccc",
               position: 1
             },
           ],
         };


export const Gradients = {
      skeletonGradient,
}