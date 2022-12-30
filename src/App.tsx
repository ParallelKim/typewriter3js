import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import { Body } from "./components/models";
import { Keyboard } from "./components/groups";
import { SoundManager } from "./components/managers";

function App() {
  const [viewControll, setViewControll] = useState(true);

  return (
    <div id="canvas">
      <SoundManager />
      <Canvas
        camera={{
          position: [0, 120, 90],
          fov: 75,
          near: 0.1,
          far: 1000,
        }}
      >
        <pointLight position={[100, 100, 100]} />
        <Suspense fallback={null}>
          <mesh>
            <Body />
            <Keyboard />
          </mesh>
          {viewControll && <OrbitControls />}
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;