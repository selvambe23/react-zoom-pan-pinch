export const initialState = {
  wrapperComponent: null,
  contentComponent: null,
  previousScale: 1,
  scale: 1,
  positionX: 0,
  positionY: 0,
  options: {
    disabled: false,
    transformEnabled: true,
    minPositionX: null,
    maxPositionX: null,
    minPositionY: null,
    maxPositionY: null,
    minScale: 1,
    maxScale: 8,
    limitToBounds: true,
    centerContent: true,
  },
  wheel: {
    disabled: false,
    step: 6.5,
    wheelEnabled: true,
    touchPadEnabled: true,
    disableLimitsOnWheel: true,
  },
  pan: {
    disabled: false,
    lockAxisX: false,
    lockAxisY: false,
    velocity: true,
    velocityEqualToMove: true,
    velocitySensitivity: 1,
    velocityActiveScale: 1,
    velocityMinSpeed: 1.8,
    velocityBaseTime: 1800,
    limitToWrapperBounds: false,
    padding: true,
    paddingSize: 6,
    animationTime: 200,
    animationType: "easeOut",
  },
  pinch: {
    disabled: false,
    step: 1,
  },
  zoomIn: {
    disabled: false,
    step: 40,
    animation: true,
    animationType: "easeOut",
    animationTime: 200,
  },
  zoomOut: {
    disabled: false,
    step: 40,
    animation: true,
    animationType: "easeOut",
    animationTime: 200,
  },
  doubleClick: {
    disabled: false,
    step: 40,
    mode: "zoomIn",
    animation: true,
    animationType: "easeOut",
    animationTime: 200,
  },
  reset: {
    disabled: false,
    step: 40,
    animation: true,
    animationType: "easeOut",
    animationTime: 200,
  },
  scalePadding: {
    disabled: false,
    size: 0.45,
    animationTime: 200,
    animationType: "easeOut",
  },
};
