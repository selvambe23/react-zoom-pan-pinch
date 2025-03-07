export interface PropsList {
  scale: number;
  positionX: number;
  positionY: number;
  options: {
    disabled: boolean;
    transformEnabled: boolean;
    minPositionX: null | number;
    maxPositionX: null | number;
    minPositionY: null | number;
    maxPositionY: null | number;
    minScale: number;
    maxScale: number;
    limitToBounds: boolean;
    centerContent: boolean;
  };
  scalePadding: {
    disabled: boolean;
    size: number;
    animationTime: number;
    animationType: string;
  };
  wheel: {
    disabled: boolean;
    step: number;
    wheelEnabled: boolean;
    touchPadEnabled: boolean;
    disableLimitsOnWheel: boolean;
  };
  pan: {
    disabled: boolean;
    velocity: boolean;
    velocityEqualToMove: boolean;
    velocitySensitivity: number;
    velocityActiveScale: number;
    velocityMinSpeed: number;
    velocityBaseTime: number;
    lockAxisX: boolean;
    lockAxisY: boolean;
    limitToWrapperBounds: boolean;
    padding: boolean;
    paddingSize: number;
    animationTime: number;
    animationType: string;
  };
  pinch: {
    disabled: boolean;
    step: number;
  };
  zoomIn: {
    disabled: boolean;
    step: number;
    animation: boolean;
    animationTime: number;
    animationType: string;
  };
  zoomOut: {
    disabled: boolean;
    step: number;
    animation: boolean;
    animationTime: number;
    animationType: string;
  };
  doubleClick: {
    disabled: boolean;
    step: number;
    mode: string;
    animation: boolean;
    animationTime: number;
    animationType: string;
  };
  reset: {
    disabled: boolean;
    step: number;
    animation: boolean;
    animationTime: number;
    animationType: string;
  };
}
