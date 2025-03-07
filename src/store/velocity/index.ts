import { PropsList } from "../interfaces/propsInterface";
import { checkPositionBounds } from "../zoom/utils";
import { getClientPosition } from "../pan";
import { animate, handleDisableAnimation } from "../animations";

const throttleTime = 40;

function velocityTimeSpeed(speed, animationTime) {
  const {
    pan: { velocityEqualToMove },
  }: PropsList = this.stateProvider;

  if (velocityEqualToMove) {
    return animationTime - animationTime / Math.max(1.6, speed);
  }
  return animationTime;
}

function handleEnableVelocity() {
  this.setState({ startAnimation: false });
}

export function handleFireVelocity() {
  this.setState({ startAnimation: true });
}

export function animateVelocity() {
  const {
    positionX,
    positionY,
    options: { limitToBounds },
    pan: { velocityBaseTime, lockAxisX, lockAxisY },
  } = this.stateProvider;
  if (!this.velocity || !this.bounds) return handleDisableAnimation.call(this);
  const { velocityX, velocityY, velocity } = this.velocity;
  const animationTime = velocityTimeSpeed.call(
    this,
    velocity,
    velocityBaseTime,
  );
  const targetX = velocityX;
  const targetY = velocityY;

  this.offsetX = positionX;
  this.offsetY = positionY;

  // animation start timestamp
  animate.call(this, "easeOut", animationTime, step => {
    const currentPositionX = lockAxisX
      ? positionX
      : this.offsetX + targetX - targetX * step;
    const currentPositionY = lockAxisY
      ? positionY
      : this.offsetY + targetY - targetY * step;

    const calculatedPosition = checkPositionBounds(
      currentPositionX,
      currentPositionY,
      this.maxBounds,
      limitToBounds,
      0,
    );

    this.offsetX = calculatedPosition.x;
    this.offsetY = calculatedPosition.y;

    // Save panned position
    this.stateProvider.positionX = calculatedPosition.x;
    this.stateProvider.positionY = calculatedPosition.y;

    // apply animation changes
    this.setContentComponentTransformation();
  });
}

export function calculateVelocityStart(event) {
  const {
    scale,
    options: { disabled },
    pan: { velocity, velocitySensitivity, velocityActiveScale },
  } = this.stateProvider;
  if (!velocity || velocityActiveScale >= scale || disabled) return;
  handleEnableVelocity.call(this);
  const now = Date.now();
  if (this.lastMousePosition) {
    const position = getClientPosition(event);
    if (!position) return console.error("No mouse or touch position detected");
    const { clientX, clientY } = position;
    const distanceX = (clientX - this.lastMousePosition.clientX) * scale;
    const distanceY = (clientY - this.lastMousePosition.clientY) * scale;
    const interval = now - this.velocityTime;
    const velocityX = (distanceX / interval) * velocitySensitivity;
    const velocityY = (distanceY / interval) * velocitySensitivity;
    const velocity =
      (Math.sqrt(distanceX * distanceX + distanceY * distanceY) / interval) *
      velocitySensitivity;

    if (this.velocity && velocity < this.velocity.velocity && this.throttle)
      return;
    this.velocity = { velocityX, velocityY, velocity };

    // throttling
    if (this.throttle) clearTimeout(this.throttle);
    this.throttle = setTimeout(() => (this.throttle = false), throttleTime);
  }
  const position = getClientPosition(event);
  this.lastMousePosition = position;
  this.velocityTime = now;
}
