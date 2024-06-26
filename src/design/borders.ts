
import { Colors } from './colors';
import { Measures } from './measures';
const sm = {
           color: Colors.borderColorDefault,
           width: {
                   measure: 1,
                   unit: "Pixels",
                   css: "1px"
                  },
           position: "Outside",
         };
const md = {
           color: Colors.borderColorDefault,
           width: {
                   measure: 2,
                   unit: "Pixels",
                   css: "2px"
                  },
           position: "Outside",
         };
const lg = {
           color: Colors.borderColorDefault,
           width: {
                   measure: 4,
                   unit: "Pixels",
                   css: "4px"
                  },
           position: "Outside",
         };


export const Borders = {
      sm,
      md,
      lg,
}