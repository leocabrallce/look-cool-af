
import { Colors } from './colors';
import { Measures } from './measures';

const gradientGradient1 = {
           type: 'Linear',
            direction: {
             from: {x: 0.9674556044211594, y: 0 },
             to:   {x: 0.3284023691548603, y: 1 },
           },
            stops: [
             {
               color: "#1062fe",
               position: 0
             },
             {
               color: "#874ce6",
               position: 0.8718642592430115
             },
           ],
         };
const gradientGradient2 = {
           type: 'Linear',
            direction: {
             from: {x: 0.3180473329291469, y: 0 },
             to:   {x: 0.7144970990470014, y: 1 },
           },
            stops: [
             {
               color: "#6ac883",
               position: 0
             },
             {
               color: "#5292ff",
               position: 0.4620638191699982
             },
             {
               color: "#be9ff0",
               position: 0.9150000214576721
             },
           ],
         };


export const Gradients = {
      gradientGradient1,
      gradientGradient2,
}