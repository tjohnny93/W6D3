const FollowToggle = require('./follow_toggle');

$(() => {

  let togglecalls = $('button.follow-toggle');

  for (let i = 0; i < togglecalls.length; i++){
    let ele = togglecalls[i];
     new FollowToggle(ele);
  }



})