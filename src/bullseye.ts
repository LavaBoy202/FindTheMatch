import { Drawable } from "./drawable";

export class Bulleseye implements Drawable {
  constructor(
    public x: number,
    public y: number,
    public colour1: string,
    public rings: number,
    public id: number,
    public scale = 1.0
  ) {}
  draw(gc: CanvasRenderingContext2D) {
    gc.save();

    gc.translate(this.x, this.y);
    gc.scale(this.scale, this.scale);
    let firstC;
    let secondC;

    if (this.rings == 3) {
      if (this.colour1 == "red") {
        firstC = "#d4111e";
        secondC = "#194dbd";
      } else {
        firstC = "#0f3b0c";
        secondC = "#fcd835";
      }
      //Outermost Ring
      gc.fillStyle = firstC;
      gc.strokeStyle = "black";
      gc.lineWidth = 6;

      //Border
      gc.beginPath();
      gc.arc(0, 0, 40, 0, 2 * Math.PI);
      gc.stroke();

      // Filling
      gc.beginPath();
      gc.arc(0, 0, 40, 0, 2 * Math.PI);
      gc.fill();

      //Middle Ring
      gc.fillStyle = secondC;
      // Border
      gc.beginPath();
      gc.arc(0, 0, 25, 0, 2 * Math.PI);
      gc.stroke();

      // Filling
      gc.beginPath();
      gc.arc(0, 0, 25, 0, 2 * Math.PI);
      gc.fill();

      //Innermost Ring
      gc.fillStyle = firstC;
      // Border
      gc.beginPath();
      gc.arc(0, 0, 10, 0, 2 * Math.PI);
      gc.stroke();

      // Filling
      gc.beginPath();
      gc.arc(0, 0, 10, 0, 2 * Math.PI);
      gc.fill();
    } else if (this.rings == 4) {
      let Bcol;
      if (this.colour1 == "orange") {
        Bcol = "black";
        firstC = "#e38e17";
        secondC = "#fcd835";
      } else {
        Bcol = "white";
        firstC = "#000000";
        secondC = "#000000";
      }

      //Outermost Ring
      gc.fillStyle = firstC;
      gc.strokeStyle = Bcol;
      gc.lineWidth = 6;

      //Border
      gc.beginPath();
      gc.arc(0, 0, 40, 0, 2 * Math.PI);
      gc.stroke();

      // Filling
      gc.beginPath();
      gc.arc(0, 0, 40, 0, 2 * Math.PI);
      gc.fill();

      //Middle Ring
      gc.fillStyle = secondC;
      // Border
      gc.beginPath();
      gc.arc(0, 0, 30, 0, 2 * Math.PI);
      gc.stroke();

      // Filling
      gc.beginPath();
      gc.arc(0, 0, 30, 0, 2 * Math.PI);
      gc.fill();

      //3rd Ring
      gc.fillStyle = firstC;
      // Border
      gc.beginPath();
      gc.arc(0, 0, 20, 0, 2 * Math.PI);
      gc.stroke();

      // Filling
      gc.beginPath();
      gc.arc(0, 0, 20, 0, 2 * Math.PI);
      gc.fill();

      //Innermost Ring
      gc.fillStyle = secondC;
      // Border
      gc.beginPath();
      gc.arc(0, 0, 10, 0, 2 * Math.PI);
      gc.stroke();

      // Filling
      gc.beginPath();
      gc.arc(0, 0, 10, 0, 2 * Math.PI);
      gc.fill();
    } else {
      firstC = "#194dbd";
      secondC = "#d4111e";

      //Outermost Ring
      gc.fillStyle = firstC;
      gc.strokeStyle = "black";
      gc.lineWidth = 6;

      //Border
      gc.beginPath();
      gc.arc(0, 0, 40, 0, 2 * Math.PI);
      gc.stroke();

      // Filling
      gc.beginPath();
      gc.arc(0, 0, 40, 0, 2 * Math.PI);
      gc.fill();

      //Middle Ring
      gc.fillStyle = secondC;
      // Border
      gc.beginPath();
      gc.arc(0, 0, 32, 0, 2 * Math.PI);
      gc.stroke();

      // Filling
      gc.beginPath();
      gc.arc(0, 0, 32, 0, 2 * Math.PI);
      gc.fill();

      //Innermost Ring
      gc.fillStyle = firstC;
      // Border
      gc.beginPath();
      gc.arc(0, 0, 24, 0, 2 * Math.PI);
      gc.stroke();

      // Filling
      gc.beginPath();
      gc.arc(0, 0, 24, 0, 2 * Math.PI);
      gc.fill();

      //Innermost Ring
      gc.fillStyle = secondC;
      // Border
      gc.beginPath();
      gc.arc(0, 0, 16, 0, 2 * Math.PI);
      gc.stroke();

      // Filling
      gc.beginPath();
      gc.arc(0, 0, 16, 0, 2 * Math.PI);
      gc.fill();

      //Innermost Ring
      gc.fillStyle = firstC;
      // Border
      gc.beginPath();
      gc.arc(0, 0, 8, 0, 2 * Math.PI);
      gc.stroke();

      // Filling
      gc.beginPath();
      gc.arc(0, 0, 8, 0, 2 * Math.PI);
      gc.fill();
    }
    gc.restore();
  }
}
