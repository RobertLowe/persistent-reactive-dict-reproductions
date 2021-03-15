import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import { PersistentReactiveDict } from 'meteor/robertlowe:persistent-reactive-dict';

import './main.html';


Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.dict = new PersistentReactiveDict('repro');
});

Template.hello.helpers({
  counter() {
    return Template.instance().dict.get('counter');
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.dict.set('counter', instance.dict.get('counter') + 1);
  },
});
