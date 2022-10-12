import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls, useFBX } from "@react-three/drei";
import { Suspense, useContext, useMemo, useState } from "react";
import styles from "./styles.module.css";
import "./App.css";
import { MeshPhysicalMaterial, TextureLoader } from "three";
import { presets, roughness, textures } from "./constants";
import { Context } from "./context";

const Scene = ({ textureCurrent, roughnessMap }) => {
  const texture = useLoader(TextureLoader, textureCurrent);
  const rugh = useLoader(TextureLoader, roughnessMap);

  const fbx = useFBX("brdm_textured_hard.fbx");

  const model = useMemo(() => fbx.clone(true), [fbx]);

  const BasicMaterial = new MeshPhysicalMaterial({
    map: texture,
    roughnessMap: rugh,
    roughness: 1,
  });
  console.log("MAT", BasicMaterial);

  model.traverse(function (child) {
    if (child) {
      // apply texture
      child.material = BasicMaterial;
      child.material.roughnessMap = rugh;
    }
  });

  return (
    <>
      <primitive object={model} scale={0.02}></primitive>
    </>
  );
};

export const View = () => {
  const { setTexture, setPreset } = useContext(Context);

  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.bodyContainer}>
        <p className={styles.heading}>БРДМ-Д</p>
        <div className={styles.contolBlock}>
          <div className={styles.buttonBlockContainer}>
            <p>Фон</p>
            <div className={styles.buttonBlock}>
              <button onClick={() => setPreset(presets.city)}>1</button>
              <button onClick={() => setPreset(presets.warehouse)}>2</button>
              <button onClick={() => setPreset(presets.forest)}>3</button>
              <button onClick={() => setPreset(null)}>4</button>
            </div>
          </div>
          <div className={styles.buttonBlockContainer}>
            <p>Цвет</p>
            <div className={styles.buttonBlock}>
              <button onClick={() => setTexture(textures.default)}>1</button>
              <button onClick={() => setTexture(textures.ocean)}>2</button>
              <button onClick={() => setTexture(textures.green)}>3</button>
            </div>
          </div>
          <div className={styles.downloadContainer}>
            {/* download butotn */}

            <button className={styles.btn}>
              <i class="fa fa-download"></i> Скачать смету
            </button>
            <button className={styles.btn}>
              <i class="fa fa-download"></i> Скачать модель
            </button>
          </div>
        </div>
        <div className={styles.modelContainer}>
          <div className={styles.canvasContainer}>
            <CanvasMain />
          </div>
        </div>
      </div>
    </div>
  );
};

export const CanvasMain = () => {
  const { texture, color, preset, roughnessMap } = useContext(Context);

  return (
    <Canvas
      onCreated={({ camera }) => {
        camera.rotation.x = 25;
        camera.rotation.y = 150;
        camera.rotation.z = 2.33;
      }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.1} color="#f8ede0" />
        <pointLight position={[10, 100, 100]} />

        <Scene
          textureCurrent={texture}
          color={color}
          roughnessMap={roughnessMap}
        />
        <OrbitControls />

        {preset && <Environment preset={preset} background />}
      </Suspense>
    </Canvas>
  );
};

export default function App() {
  const [texture, setTexture] = useState(textures.default);
  const [color, setColor] = useState("#FFFFFF");
  const [preset, setPreset] = useState(presets.city);
  const [roughnessMap, setRoughnessMap] = useState(roughness);
  return (
    <Context.Provider
      value={{
        texture,
        color,
        setTexture,
        preset,
        setPreset,
        setColor,
        roughnessMap,
        setRoughnessMap,
      }}
    >
      <View />
    </Context.Provider>
  );
}
