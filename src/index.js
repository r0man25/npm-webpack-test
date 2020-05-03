import {i, str} from "./learn"; //or import * as tst from "./learn"; console.log(tst.i);
import iDefault from "./defaultExp";
import TestClass from "./expClass"
import Article from "./article";
import $ from "jquery";
import css from "./style.css"

console.log('Hello world npm build or dev server working...');

global.$ = $;

console.log(i + str);
console.log(iDefault);

new TestClass();

let article = new Article({
    head: 'Test header of article',
    description: 'Test description of article ...',
});

article.render();