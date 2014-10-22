Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function(){
    this.route('Home', {path: '/', data: {title: 'My title'}});
    this.route('One');
    this.route('Two');
});