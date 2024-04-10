import { Drawable } from "./drawable";

export class Cat implements Drawable {
  constructor(
    public x: number,
    public y: number,
    public colour: string,
    public id: number,
    public scale = 1.0
  ) {}
  //id = this.getId()
  draw(gc: CanvasRenderingContext2D) {
    gc.save();

    gc.translate(this.x, this.y);
    gc.scale(this.scale, this.scale);

    if (this.colour == "red") {
      gc.fillStyle = "#d40f29";
    } else if (this.colour == "yellow") {
      gc.fillStyle = "#CEA242";
    } else if (this.colour == "steel") {
      gc.fillStyle = "#315a69";
    } else if (this.colour == "blue") {
      gc.fillStyle = "#0a98cc";
    } else if (this.colour == "grey") {
      gc.fillStyle = "#777b7d";
    }
    gc.strokeStyle = "black";
    gc.lineWidth = 2;

    // head white outline
    gc.beginPath();
    gc.arc(0, 0, 40, 0, 2 * Math.PI);
    gc.stroke();

    // ears
    gc.beginPath();
    // left
    gc.moveTo(-40, -48);
    gc.lineTo(-8, -36);
    gc.lineTo(-35, -14);
    gc.closePath();
    // right
    gc.moveTo(40, -48);
    gc.lineTo(8, -36);
    gc.lineTo(35, -14);
    gc.closePath();
    gc.stroke();
    gc.fill();

    // head
    gc.beginPath();
    gc.arc(0, 0, 40, 0, 2 * Math.PI);
    gc.fill();

    // whites of eyes
    gc.strokeStyle = "black";
    gc.fillStyle = "white";
    gc.lineWidth = 1;
    gc.beginPath();
    // left
    gc.ellipse(-16, -9, 8, 14, 0, 0, Math.PI * 2);
    gc.fill();
    gc.stroke();
    // right
    gc.beginPath();
    gc.ellipse(16, -9, 8, 14, 0, 0, Math.PI * 2);
    gc.fill();
    gc.stroke();

    // eyeballs
    gc.fillStyle = "black";
    gc.beginPath();

    if (this.colour == "red") {
      // left
      gc.beginPath();
      gc.arc(-20, -9, 5, 0, Math.PI * 2);
      gc.fill();
      // right
      gc.beginPath();
      gc.arc(12, -9, 5, 0, Math.PI * 2);
      gc.fill();
    } else if (this.colour == "blue") {
      // left
      gc.beginPath();
      gc.arc(-12, -9, 5, 0, Math.PI * 2);
      gc.fill();
      // right
      gc.beginPath();
      gc.arc(20, -9, 5, 0, Math.PI * 2);
      gc.fill();
    } else {
      // left
      gc.beginPath();
      gc.arc(-16, -9, 5, 0, Math.PI * 2);
      gc.fill();
      // right
      gc.beginPath();
      gc.arc(16, -9, 5, 0, Math.PI * 2);
      gc.fill();
    }
    gc.restore();
  }
}
