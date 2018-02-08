
import Mobilemenu from "./Mobilemenu";
import RevealOnScroll from "./RevealOnScroll";
import StickyHeader from "./StickyHeader";
import Modal from "./Modal";
import $ from "jquery";

var mobilemenu=new Mobilemenu();
var reveal=new RevealOnScroll($(".feature-item"),"85%");
var reveall=new RevealOnScroll($(".testimonial"),"60%");
var sticky=new StickyHeader();
var modal=new Modal();