import * as THREE from "three";
export default class Box extends THREE.Mesh {
  constructor(
    width,
    height,
    depth,
    color = 0x00ff00,
    velocity = { x: 0, y: 0, z: 0 },
    position = { x: 0, y: 0, z: 0 },
    zAceleratio = false
  ) {
    super(
      new THREE.BoxGeometry(width, height, depth),
      new THREE.MeshStandardMaterial({ color })
    );
    this.width = width;
    this.height = height;
    this.depth = depth;

    this.position.set(position.x, position.y, position.z);
    //detectar las caras del cubo y posicion
    this.detectSides();

    this.velocity = velocity;
    this.gravity = -0.002;

    this.zAceleratio = zAceleratio;
  }
  detectSides() {
    //posicion caras
    this.right = this.position.x + this.width / 2;
    this.left = this.position.x - this.width / 2;
    this.front = this.position.z + this.depth / 2;
    this.back = this.position.z - this.depth / 2;
    //
    this.bottom = this.position.y - this.height / 2;
    this.top = this.position.y + this.height / 2;
  }
  updateBoTo(ground, zAceleratio = false) {
    this.detectSides();
    //aumentar un poco el eje z
    if (zAceleratio) {
      this.velocity.z += 0.0003;
    }
    ///detectar eje x
    this.position.x += this.velocity.x;
    //detectar eje z
    this.position.z += this.velocity.z;

    ///
    this.applyGravity(ground);
  }

  //efecto gravedad
  applyGravity(ground) {
    this.velocity.y += this.gravity;

    if (this.boxCollicion(this, ground)) {
      this.velocity.y *= 0.8;
      this.velocity.y = -this.velocity.y;
    } else {
      this.position.y += this.velocity.y;
    }
  }
  //box collicion
  boxCollicion(box1, box2) {
    const xCollicion = box1.right >= box2.left && box1.left <= box2.right; //eje x
    const zCollicion = box1.front >= box2.back && box1.back <= box2.front; //eje z
    const yCollicion =
      box1.bottom + box1.velocity.y <= box2.top && box1.top >= box2.bottom; //eje y
    //accion
    return xCollicion && zCollicion && yCollicion;
    /*if (xCollicion && zCollicion && yCollicion) {
      console.log("DETECT");
    }*/
  }
}
