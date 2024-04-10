import { Drawable } from "./drawable";

export class Title implements Drawable {
  constructor(public pairs: number, public win: boolean) {}
  id = 100;

  draw(gc: CanvasRenderingContext2D) {
    gc.font = "24px sans-serif";
    gc.textAlign = "center";
    gc.textBaseline = "middle";
    gc.fillStyle = "white";
    if (this.win) {
      gc.fillText(
        "you finished! press SPACE to continue",
        gc.canvas.width / 2,
        (gc.canvas.height / 2 - 40) / 2
      );
    } else if (this.pairs == 1) {
      gc.fillText(
        "1 pair: Press SPACE to play",
        gc.canvas.width / 2,
        (gc.canvas.height / 2 - 40) / 2
      );
    } else {
      gc.fillText(
        this.pairs + " pairs: Press SPACE to play",
        gc.canvas.width / 2,
        (gc.canvas.height / 2 - 40) / 2
      );
    }
    gc.fillText(
      "Press + to add more pairs",
      gc.canvas.width / 2,
      (gc.canvas.height / 2 + 90) / 2
    );
  }
}
