import { Drawable } from "./drawable";
import { Square2 } from "./square";
import { edgeHitTestRectangle, insideHitTestRectangle } from "./hittest";

export class Card implements Drawable {
  constructor(
    public x: number,
    public y: number,
    public face: Drawable,
    public show: boolean,
    public matched: boolean,
    public id: number,
    public scale = 1.0
  ) {}
  isHighlighted = false;

  hitTest(mx: number, my: number) {
    let hit = false;
    hit ||=
      insideHitTestRectangle(mx, my, this.x, this.y, 80, 80) ||
      edgeHitTestRectangle(mx, my, this.x, this.y, 80, 80, 2);
    return hit;
  }
  draw(gc: CanvasRenderingContext2D) {
    gc.save();
    gc.translate(this.x, this.y);
    gc.scale(this.scale, this.scale);

    gc.beginPath();
    gc.fillStyle = "white";
    gc.fillRect(0, 0, 80, 80);
    gc.fill();
    gc.lineWidth = 2;
    gc.strokeStyle = "black";
    gc.strokeRect(0, 0, 80, 80);
    if (this.matched) {
      gc.strokeStyle = "#42f584"; //green outline for when card is matched
      gc.strokeRect(0, 0, 80, 80);
    }
    const faceDown = new Square2(40, 40, 70, "#84b0cf", "white", 4);
    if (this.matched) {
      this.show = true;
    }
    if (this.show) {
      this.face.draw(gc);
    } else {
      faceDown.draw(gc);
    }
    if (this.isHighlighted) {
      gc.lineWidth = 3;
      gc.strokeStyle = "yellow";
      gc.strokeRect(-3, -3, 87, 87);
    }
    gc.restore();
  }
}
