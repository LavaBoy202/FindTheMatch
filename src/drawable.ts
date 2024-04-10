export interface Drawable {
  id:number,
    draw: (gc: CanvasRenderingContext2D) => void;
  }
  