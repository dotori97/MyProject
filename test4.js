class Rectangle {
    constructor(width, height) {
      this._width = width;
      this._height = height;
    }
  
    area() {
      return this._width * this._height;
    }
  
    width(value) {
      if (value > 0) {
        this._width = value;
      }
    }
  }
  
  const rect = new Rectangle(5, 10);
  console.log(rect.area); // 50 출력
  rect.width = 7;
  console.log(rect.area); // 70 출력
