class FollowToggle {

  constructor(el) {
    this.$el = $(el);
    this.userID = $el.data("data-user-id");
    this.followState = $el.data("data - initial - follow - state");
    this.render();
  }

  render() {
    switch (this.followState) {
      case 'followed':
        this.$el.prop('disabled', false);
        this.$el.html('Unfollow');
        break;
      case 'unfollowed':
        this.$el.prop('disabled', false);
        this.$el.html('Follow');
        break;
      case 'following':
        this.$el.prop('disabled', true);
        this.$el.html('Following...');
        break;
      case 'unfollowing':
        this.$el.prop('disable', true);
        this.$el.html('Unfollowing...');
    }
  }

  handClick(e) {
    const followToggle = this;
    e.preventDefault();
    
    if (this.followState === "followed") {
      this.followState = 'unfollowing';
      this.render();
    }
    else if (this.followState === 'unfollowed') {
      this.followState = 'following';
      this.render();
    }
  }
}
k


module.exports = FollowToggle;  