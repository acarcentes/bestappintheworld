"use strict";
import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCRipple} from '@material/ripple';


mdc.ripple.MDCRipple.attachTo(document.querySelector('.foo-button'));



// Instantiation
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);


const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
    return new MDCRipple(el);
});