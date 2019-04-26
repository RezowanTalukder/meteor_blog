import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import { Meteor } from 'meteor/meteor';

Blogs = new Meteor.Collection('blogs') ;

Template.blog.events({
  'submit #blogForm':function(e){
    e.preventDefault() ;
    var title = $('#blogTitle').val() ;
    var body = $('#blogBody').val() ;
    if(title.length && body.length){
      Meteor.call('submitPost',title,body) ;
    }else{
      alert("title or body couldn't be empty") ;
    }    
  }
});


Template.listBlog.blogs = function(){
      return Blogs.find() ;
}