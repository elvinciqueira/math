var FKSystem = FKSystem || {
  arms: null,
  lastArm: null,
  y: 0,
  x: 0,
  phase: 0,
  speed: 0.05,

  create: function(x, y) {
    var obj = Object.create(this);
    obj.init(x, y);
    return obj;
  },

  init: function(x, y) {
    this.x = x;
    this.y = y;
    this.arms = [];
  },
  
  addArm: function(length, centerAngle, rotationRange, phaseOffSet) {
    var arm = Arm.create(length, centerAngle, rotationRange,  phaseOffSet);
    this.arms.push(arm);
    
    if(this.lastArm) {
      arm.parent = this.lastArm;
    }
    this.lastArm = arm;

    this.update();
  },

  update: function() {
    for(var i = 0; i < this.arms.length; i++) {
      var arm = this.arms[i];
      arm.setPhase(this.phase);

      if (arm.parent) {
        arm.x = arm.parent.getEndX();
        arm.y = arm.parent.getEndY();
      }
      else {
        arm.x = this.x;
        arm.y = this.y;
      }
    }
    this.phase += this.speed;
  },

  render: function(context) {
    for (var i = 0; i < this.arms.length; i++){
      this.arms[i].render(context);
    }
  },

  rotateArm: function(index, angle) {
    this.arms[index].angle = angle;
  },
};