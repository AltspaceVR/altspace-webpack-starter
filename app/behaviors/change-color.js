import Please from 'pleasejs';
import THREE from 'three';

export default class ChangeColorBehavior {
  constructor(options) {

  }

  awake(object3d) {
    const sync = object3d.getBehaviorByType('Object3DSync');
    this.colorRef = sync.dataRef.child('color');
    this.object3d = object3d;

    this.colorRef.on('value', this.onNewColor.bind(this));
    object3d.addEventListener('cursordown', this.onCursorDown.bind(this));
  }

  onNewColor(snapshot) {
    const value = snapshot.val();
    if (!value) return; // we are first to create the cube, no color set yet
    this.object3d.material.color = new THREE.Color(value);
    this.object3d.material.needsUpdate = true; // currently required in Altspace
  }

  onCursorDown() {
    const color = Please.make_color()[0]; // random color
    this.colorRef.set(color);
  }

  update(deltaTime) {
    /* no updating needed, color changes in Firebase 'value' callback above */
  }
}
