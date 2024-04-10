import { Drawable } from "./drawable";

export class Star implements Drawable {
  constructor(
    public x: number,
    public y: number,
    public points: number,
    public id: number,
    public scale = 1.0
  ) {}

  draw(gc: CanvasRenderingContext2D) {
    gc.save();
    gc.scale(this.scale, this.scale);
    gc.translate(this.x, this.y);

    let housePoints;

    if (this.points == 5) {
      housePoints = [
        [22, 19],
        [9, 27],
        [12, 11],
        [0, 0],
        [16, -2],
        [22, -16],
        [29, -2],
        [46, 0],
        [34, 11],
        [36, 27],
        [22, 19],
      ];
    } else if (this.points == 4) {
      housePoints = [
        [0, 0],
        [20, -10],
        [30, -30],
        [40, -10],
        [60, 0],
        [40, 10],
        [30, 30],
        [20, 10],
        [0, 0],
      ];
    } else if (this.points == 6) {
      housePoints = [
        [0, 0],
        [20, 10],
        [30, -10],
        [40, 10],
        [60, 0],
        [50, 20],
        [60, 40],
        [40, 30],
        [30, 50],
        [20, 30],
        [0, 40],
        [10, 20],
        [0, 0],
      ];
    } else if (this.points == 7) {
      housePoints = [
        [0, 0],
        [20, 15],
        [30, -5],
        [40, 15],
        [60, 0],
        [50, 25],
        [60, 45],
        [45, 35],
        [40, 55],
        [30, 35],
        [20, 55],
        [15, 35],
        [0, 45],
        [10, 25],
        [0, 0],
      ];
    } else {
      housePoints = [
        [0, 0],
        [25, 5],
        [10, -20],
        [30, 0],
        [35, -20],
        [40, 0],
        [55, -20],
        [45, 5],
        [70, 0],
        [50, 10],
        [70, 20],
        [45, 15],
        [55, 40],
        [40, 20],
        [35, 40],
        [30, 20],
        [15, 40],
        [22, 19],
        [0, 20],
        [20, 12],
        [0, 0],
      ];
    }

    gc.lineWidth = 2;
    gc.strokeStyle = "black";
    gc.beginPath();
    housePoints?.forEach((p) => {
      const [x, y] = p;
      gc.lineTo(x, y);
    });
    gc.closePath();
    switch (this.points) {
      case 4:
        gc.fillStyle = "#e6bd19";
        break;
      case 6:
        gc.fillStyle = "#d47604";
        break;
      default:
        gc.fillStyle = "yellow";
        break;
    }
    gc.fill();
    gc.stroke();
    gc.restore();
  }
}
